import dom from '../../public/utils/DOMUtils.js';

class ImageCrop {
  constructor({src, alt, width = 150, height = 150, classList = []}) {
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.classList = classList;
  }

  render() {
    // <div class=`${image}`>
    //   <img src=`${src}` alt=`${alt}` class=`image-crop-img` />
    // </div>

    const croppedImageDiv = dom.createElement('div');
    const img = dom.createElement('img');
    img.setAttribute('src', this.src);
    img.setAttribute('alt', this.alt);
    img.classList.add(...this.classList);

    croppedImageDiv.appendChild(img);

    return croppedImageDiv;
  }
}

export default ImageCrop;
