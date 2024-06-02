/*
{
  "p":"brc69",
  "op":"compiler",
  "s": "pioneers"
}
*/

const collectionJsonUrl = 'https://ordinals.com/content/afe3faa7d078c62096157a71677ac0efc21c42b450c992e73dcec60c4550f099i0';
const previewUrl = 'https://ordinals.com/content/3d00ffad8c79db6ce71d48db8acca5d4ea5dd887fefec78b4fb945f4142217f1i0'
const imageRendering = 'auto'
const renderSize = {
  width: 2000,
  height: 2000
};

async function loadImage(url) {
  debugger;
  return new Promise((resolve, reject) => {
    const image = document.createElement('img')
    image.src = url
    image.crossOrigin = 'anonymous'
    image.onload = () => {
      resolve(image)
    }
    image.onerror = () => {
      // Some display fallbacks for when the image fails to load
      if (!image.src.startsWith('https://')) {
        image.src = 'https://ordinals.com' + url
      } else if (image.src.startsWith('https://ordinals.com')) {
        image.src = 'https://ord-mirror.magiceden.dev' + url
      }
    }
  })
}

async function renderImage(imageEl, urls) {
  const canvas = document.createElement('canvas');
  canvas.width = renderSize.width;
  canvas.height = renderSize.height;

  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  const images = await Promise.all((urls).map(loadImage))
  images.forEach(_ => ctx.drawImage(_, 0, 0, canvas.width, canvas.height))
  imageEl.src = canvas.toDataURL("image/png")
}

async function getAllTraits(traitsUrl, retry = false) {
  try {
    const collectionMetadataRes = await fetch(traitsUrl)
    const collectionMetadata = await collectionMetadataRes.json()
    return collectionMetadata.attributes.map(_ => `https://ordinals.com/content/${_}`)
  } catch (e) {
    if (!retry) {
      const timestamp = Math.floor(Date.now() / (60000 * 10)) // 10 minutes
      const newTraitsUrl = `${traitsUrl}?timestamp=${timestamp}`
      return getAllTraits(newTraitsUrl, true)
    }
    throw e
  }
}

function createInitialImage() {
  // Manipulate the <body> tag
  document.body.style.margin = '0px';
  document.body.style.padding = '0px';

  // Create and set properties of the <img> tag
  const img = document.createElement('img');
  img.id = 'img';
  img.style.height = '100%';
  img.style.width = '100%';
  img.style.objectFit = 'contain';
  img.style.imageRendering = imageRendering;

  return img
}

async function createInscriptionHtml() {
  const imageEl = createInitialImage()

  try {
    // Get traits
    const allTraits = await getAllTraits(collectionJsonUrl)

    // Process traits
    const selectedTraitIndexes = document.querySelector('script[t]').getAttribute('t').split(',');
    const traits = selectedTraitIndexes.map(_ => allTraits[+_])

    // Render traits
    await renderImage(imageEl, traits);
  } catch (e) {
    console.error(e)

    // Render previewUrl image
    if (previewUrl) {
      imageEl.src = previewUrl
    }
  } finally {
    // Append the <img> tag to the <body>
    document.body.appendChild(imageEl);
  }
}

window.onload = function() {
  createInscriptionHtml();
}