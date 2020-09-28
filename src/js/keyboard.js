const constants = require('.\\constants.js');
const processor = require('.\\processor.js');

import info from '.\\infoBlock.js';

class Keyboard {

  constructor() {
    if (!localStorage.getItem('kbLang')) {
      localStorage.setItem('kbLang', 'eng');
    }

    if (!localStorage.getItem('isFirstVisit')) {
      localStorage.setItem('isFirstVisit', 'true');
    }
  }

  createKb() {
    let kb = processor.createHtml('div', 'keyboard-block');
    let kbLang = localStorage.getItem('kbLang');

    if (kbLang == 'eng') {
      for (let i = 0; i < constants.kbEngLower.length; i++) {
        let el = processor.createHtml('button', 'keyboard-button');
        el.innerHTML = constants.kbEngLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    } else if (kbLang == 'rus') {
      for (let i = 0; i < constants.kbRusLower.length; i++) {
        let el = processor.createHtml('button', 'keyboard-button');
        el.innerHTML = constants.kbRusLower[i];
        el.classList += constants.kbClass[i];
        kb.append(el);
      }
    }

    document.body.append(kb);

    if (localStorage.getItem('isFirstVisit') == 'true') {
      let infoBlockButton = document.querySelector('.info-block-button');
      info.show();
      infoBlockButton.addEventListener('click', () => {
        info.hide();
      });
      localStorage.setItem('isFirstVisit', 'false');
    }
  }

}

const virtualKb = new Keyboard();
export default virtualKb;
