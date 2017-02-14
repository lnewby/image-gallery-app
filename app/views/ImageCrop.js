import dom from '../../public/utils/DOMUtils.js';

class ImageCrop {
  constructor({ src, alt, width = 150, height = 150, imgClassList = [] }) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.imgClassList = imgClassList;
  }

  render() {
    /*
      <div class=`cropped-img-wrapper`>
        <img src=`${this.src}` alt=`${this.alt}` />
      </div>
    */
    const croppedImageDiv = dom.createElement('div');
    croppedImageDiv.classList.add('cropped-img-wrapper');
    const img = dom.createElement('img');
    img.setAttribute('src', this.src.thumbnail);
    img.setAttribute('alt', this.alt);
    img.classList.add(...this.imgClassList);

    croppedImageDiv.appendChild(img);

    return croppedImageDiv;
  }
}

export default ImageCrop;
