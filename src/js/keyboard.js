const constants = require('.\\constants.js');
const processor = require('.\\processor.js');

import info from '.\\infoBlock.js';

class Keyboard {
  constructor() {
    if (!localStorage.getItem(constants.kbLangConst)) {
      localStorage.setItem(constants.kbLangConst, 'eng');
    }

    if (!localStorage.getItem(constants.isFirstVisitConst)) {
      localStorage.setItem(constants.isFirstVisitConst, 'true');
    }
  }

  createKb() {
    const kb = processor.createHtml('div', constants.keyboardBlock);
    const kbLang = localStorage.getItem(constants.kbLangConst);

    if (kbLang === 'eng') {
      for (let i = 0; i < constants.kbEngLower.length; i += 1) {
        const el = processor.createHtml('button', constants.keyboardButton);
        el.innerHTML = constants.kbEngLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    } else if (kbLang === 'rus') {
      for (let i = 0; i < constants.kbRusLower.length; i += 1) {
        const el = processor.createHtml('button', constants.keyboardButton);
        el.innerHTML = constants.kbRusLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    }

    document.body.append(kb);

    if (localStorage.getItem(constants.isFirstVisitConst) === 'true') {
      const infoBlockButton = document.querySelector(constants.infoBlockButtonQS);
      info.show();
      infoBlockButton.addEventListener('click', () => {
        info.hide();
      });
      localStorage.setItem(constants.isFirstVisitConst, 'false');
    }
  }
}

const virtualKb = new Keyboard();
export default virtualKb;
