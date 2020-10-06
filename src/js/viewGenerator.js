const constants = require('.\\constants.js');
const processor = require('.\\processor.js');

import virtualKb from '.\\keyboard.js';

import info from '.\\infoBlock.js';

class HTMLPage {
  constructor() {
    // text area creation
    document.body.append(processor.createHtml('textarea', constants.tAreaBlock));

    // main keyboard block
    virtualKb.createKb();
  }
}

const virtualKbHTML = new HTMLPage();
export default virtualKbHTML;
