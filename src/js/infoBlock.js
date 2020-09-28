const processor = require('.\\processor.js');
const constants = require('.\\constants.js');

class InfoBlock {

  constructor(text) {
    this.element = processor.createHtml('div', 'info-block-wrapper _hidden');
    let infoBlock = processor.createHtml('div', 'info-block');
    let infoBlockButton = processor.createHtml('div', 'info-block-button');

    this.element.append(infoBlock);
    infoBlock.innerHTML = text;
    infoBlockButton.innerHTML = 'Got It';
    infoBlock.append(infoBlockButton);
    document.body.append(this.element);
  }

  show() {
    this.element.classList.remove('_hidden');
  }

  hide() {
    this.element.classList.add('_hidden');
  }
}

const info = new InfoBlock(constants.infoBlockText);
export default info;
