import { dom, checkImageLoaded } from '../../public/utils/DOMUtils.js';

// Scale and crop the image and return a Promise to handle the progess spinner.
class ImageCrop {
  constructor({ src, alt, width = 150, height = 150, imgClassList = [] }) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.imgClassList = imgClassList;
  }

  buildImage(img) {
    img.setAttribute('src', this.src.thumbnail);
    img.setAttribute('alt', this.alt);
    img.classList.add(...this.imgClassList);
    img.setAttribute('id', this.id);

    const imgIsWide = img.naturalWidth / img.naturalHeight > this.width / this.height;
    let imgStyle = (imgIsWide) ? 'wide-image' : 'tall-image';

    if (imgIsWide) {
      img.classList.add('wide-image');
    } else { // image is tall
      img.classList.add('tall-image');
    }

    return img;
  }

  render() {
    /*
      <div class=`cropped-img-wrapper`>
        <img src=`${this.src}` alt=`${this.alt}` />
      </div>
    */
    const img = dom.createElement('img');

    return checkImageLoaded(this.src.thumbnail)
      .then(({img, path, status}) => {
        const croppedImageDiv = dom.createElement('div');
        const image = this.buildImage(img);
        croppedImageDiv.classList.add('cropped-img-wrapper');
        croppedImageDiv.appendChild(image);
        return croppedImageDiv;
      });
  }
}

export default ImageCrop;
