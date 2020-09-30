const constants = require('.\\constants.js');

import info from '.\\infoBlock.js';

// create html element with given attributes
export function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  className === undefined ? elem.className = '' : elem.className = className;
  innerText === undefined ? elem.innerHTML = '' : elem.innerHTML = innerText;
  if (keysValues.length !== 0) {
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i - 1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
}

export function changeLang() {
  let kb = document.querySelector('.keyboard-block');
  let kbLang = localStorage.getItem('kbLang');

  if (kbLang == 'eng') {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbRusLower[i];
    });
    localStorage.setItem('kbLang', 'rus');

  } else if (kbLang == 'rus') {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbEngLower[i];
    });
    localStorage.setItem('kbLang', 'eng');
  }
}

// handle pressed key event
export function physicalClickHandler() {
  let tArea = document.querySelector('.textarea-block');

  document.addEventListener('keydown', function(event) {
    highlightKey(event.code);

    document.addEventListener('keyup', function (event) {
      darkenKey(event.code);
    });

    // if alt & shift are pressed together
    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      changeLang();
      return;
    }

    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
      return;
    }

    if (event.ctrlKey) {
      return;
    }

    if (event.altKey) {
      event.preventDefault();
      return;
    }

    if (event.code == 'Tab') {
      event.preventDefault();
      tArea.innerHTML += '    ';
      return;
    }

    if (event.code == 'CapsLock') {
      changeRegister();
      return;
    }

    if (event.code == 'Backspace') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (event.code == 'Delete') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (event.code == 'Enter') {
      tArea.innerHTML += '\n';
      return;
    }

    if (event.metaKey) {
      event.preventDefault();
      return;
    }

    // if arrow key is pressed
    if (event.code.match(constants.arrowRegExp)) {
      if (event.code == 'ArrowUp') {
        tArea.innerHTML += '↑';
        return;
      }

      if (event.code == 'ArrowDown') {
        tArea.innerHTML += '↓';
        return;
      }

      if (event.code == 'ArrowLeft') {
        tArea.innerHTML += '←';
        return;
      }

      if (event.code == 'ArrowRight') {
        tArea.innerHTML += '→';
        return;
      }
      return;
    }


    // if any other key is pressed
    tArea.innerHTML += event.key;
  })
}

export const virtualClickHandler = function () {
  let kb = document.querySelector('.keyboard-block');
  let tArea = document.querySelector('.textarea-block');

  kb.onclick = function (event) {
    let target = event.target;
    if (!target.classList.contains('keyboard-button')) return;

    if (target.innerHTML == 'Shift') {
      return;
    }

    if (target.innerHTML == 'Ctrl') {
      return;
    }

    if (target.innerHTML == 'Alt') {
      return;
    }

    if (target.innerHTML == 'Tab') {
      tArea.innerHTML += '    ';
      return;
    }

    if (target.innerHTML == '') {
      tArea.innerHTML += ' ';
    }

    if (target.innerHTML == 'Caps Lock') {
      changeRegister();
      return;
    }

    if (target.innerHTML == 'Backspace') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (target.innerHTML == 'Del') {
      let tAreaText = document.querySelector('.textarea-block').innerHTML;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.innerHTML = tAreaText;
      return;
    }

    if (target.innerHTML == 'Enter') {
      tArea.innerHTML += '\n';
      return;
    }

    // if arrow key is pressed
    if (target.innerHTML.match(constants.arrowRegExp)) {
      if (target.innerHTML == 'ArrowUp') {
        tArea.innerHTML += '↑';
        return;
      }

      if (target.innerHTML == 'ArrowDown') {
        tArea.innerHTML += '↓';
        return;
      }

      if (target.innerHTML == 'ArrowLeft') {
        tArea.innerHTML += '←';
        return;
      }

      if (target.innerHTML == 'ArrowRight') {
        tArea.innerHTML += '→';
        return;
      }
      return;
    }

    if (target.innerHTML == 'Info') {
      let infoBlockButton = document.querySelector('.info-block-button');
      info.show();

      infoBlockButton.addEventListener('click', () => {
        info.hide();
      });
      return;
    }

    tArea.innerHTML += target.innerHTML;
  }
}

// highlight key
export function highlightKey(keyCode) {
  const pressedKey = document.querySelector(`.${keyCode}`);

  pressedKey.classList.add('_pressed');
}

// darken key
export function darkenKey(keyCode) {
  const pressedKey = document.querySelector(`.${keyCode}`);

  pressedKey.classList.remove('_pressed');
}

export function changeRegister() {
  let kb = document.querySelector('.keyboard-block');
  let kbLang = localStorage.getItem('kbLang');
  let caps = document.querySelector('.CapsLock');

  caps.classList.toggle('capsActive');
  if (caps.classList.contains('capsActive')) {
    if (kbLang == 'eng') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngUpper[i];
      });
    }
    if (kbLang == 'rus') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusUpper[i];
      });
    }
  } else {
    if (kbLang == 'eng') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngLower[i];
      });
    }
    if (kbLang == 'rus') {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusLower[i];
      });
    }
  }
  return;
}
