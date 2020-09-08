const constants = require('.\\constants.js');
const processor = require('.\\processor.js');

// text area creation
document.body.append(processor.createHtml('textarea', 'textarea-block'));

// main keyboard block
document.body.append(processor.createHtml('div', 'keyboard-block'));

export function createKb() {
  for (let i = 0; i < constants.kbEng.length; i++) {
    let el = processor.createHtml('button', 'keyboard-button');
    el.innerHTML = constants.kbEng[i];
    el.classList += constants.kbEngClass[i];
    document.querySelector('.keyboard-block').append(el);
  }
}
