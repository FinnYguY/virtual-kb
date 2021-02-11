const processor = require('.\\processor.js');
const constants = require('.\\constants.js');

class InfoBlock {
  constructor(text) {
    this.element = processor.createHtml('div', 'info-block-wrapper _hidden');
    const infoBlock = processor.createHtml('div', constants.infoBlock);
    const infoBlockButton = processor.createHtml('div', constants.infoBlockButton);

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
