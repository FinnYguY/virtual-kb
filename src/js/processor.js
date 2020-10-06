const constants = require('.\\constants.js');

import info from '.\\infoBlock.js';

// create html element with given attributes
export function createHtml(selector, className, innerText, ...keysValues) {
  const elem = document.createElement(selector);
  if (className) elem.className = className;
  if (innerText) elem.innerHTML = innerText;
  if (keysValues.length) {
    let i = 1;
    while (i < keysValues.length) {
      elem.setAttribute(keysValues[i - 1], keysValues[i]);
      i += 2;
    }
  }
  return elem;
}

// highlight key
export function highlightKey(eventCode, eventKey) {
  try {
    const pressedKey = document.querySelector(`.${eventCode}`);

    pressedKey.classList.add('_pressed');
  } catch (e) {
    if (e.name === 'TypeError') {
      console.log(`Pressed button (event.code = ${eventCode}, event.key = ${eventKey}) is not present on virtual keyboard`);
    }
  }
}

// darken key
export function darkenKey(eventCode, eventKey) {
  try {
    const pressedKey = document.querySelector(`.${eventCode}`);

    pressedKey.classList.remove('_pressed');
  } catch (e) {
    if (e.name === 'TypeError') {
      console.log(`Pressed button (event.code = ${eventCode}, event.key = ${eventKey}) is not present on virtual keyboard`);
    }
  }
}

export function changeRegister() {
  const kb = document.querySelector(constants.keyboardBlockQS);
  const kbLang = localStorage.getItem(constants.kbLangConst);
  const caps = document.querySelector(constants.capsButton);

  caps.classList.toggle(constants.capsActive);
  if (caps.classList.contains(constants.capsActive)) {
    if (kbLang === constants.eng) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngUpper[i];
      });
    }
    if (kbLang === constants.rus) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusUpper[i];
      });
    }
  } else {
    if (kbLang === constants.eng) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbEngLower[i];
      });
    }
    if (kbLang === constants.rus) {
      kb.childNodes.forEach((btn, i) => {
        btn.innerHTML = constants.kbRusLower[i];
      });
    }
  }
}

export function changeLang() {
  const kb = document.querySelector(constants.keyboardBlockQS);
  const kbLang = localStorage.getItem(constants.kbLang);

  if (kbLang === constants.eng) {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbRusLower[i];
    });
    localStorage.setItem(constants.kbLang, constants.rus);

  } else if (kbLang === constants.rus) {
    kb.childNodes.forEach((btn, i) => {
      btn.innerHTML = constants.kbEngLower[i];
    });
    localStorage.setItem(constants.kbLang, constants.eng);
  }
}

// handle pressed key event
export function physicalClickHandler() {
  const tArea = document.querySelector(constants.tAreaBlockQS);

  document.addEventListener('keydown', (event) => {
    highlightKey(event.code, event.key);

    document.addEventListener('keyup', (event) => {
      darkenKey(event.code, event.key);
    });

    if (event.location === 3) {
      return;
    }

    // if alt & shift are pressed together
    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      changeLang();
      return;
    }

    if (event.code === constants.lShift || event.code === constants.rShift) {
      return;
    }

    if (event.ctrlKey) {
      return;
    }

    if (event.altKey) {
      event.preventDefault();
      return;
    }

    if (event.code === constants.tab) {
      event.preventDefault();
      tArea.value += '    ';
      return;
    }

    if (event.code === constants.capsLock) {
      changeRegister();
      return;
    }

    if (event.code === constants.backspace) {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.value = tAreaText;
      return;
    }

    if (event.code === constants.del) {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.value = tAreaText;
      return;
    }

    if (event.code === constants.enter) {
      event.preventDefault();
      tArea.value += '\n';
      return;
    }

    if (event.metaKey) {
      event.preventDefault();
      return;
    }

    if (event.code === constants.space) {
      event.preventDefault();
      tArea.value += ' ';
      return;
    }

    // if arrow key is pressed
    if (event.code.match(constants.arrowRegExp)) {
      if (event.code === constants.arrowUp) {
        tArea.value += '↑';
        return;
      }

      if (event.code === constants.arrowDown) {
        tArea.value += '↓';
        return;
      }

      if (event.code === constants.arrowLeft) {
        tArea.value += '←';
        return;
      }

      if (event.code === constants.arrowRight) {
        tArea.value += '→';
        return;
      }
      return;
    }

    // if any other key is pressed
    tArea.value += event.key;
  });
}

export const virtualClickHandler = () => {
  const kb = document.querySelector(constants.keyboardBlockQS);
  const tArea = document.querySelector(constants.tAreaBlockQS);
  const infoBlockButton = document.querySelector(constants.infoBlockButtonQS);

  kb.onclick = (event) => {
    const { target } = event;

    if (!target.classList.contains(constants.keyboardButton)) return;

    if (target.innerHTML === 'Shift') {
      return;
    }

    if (target.innerHTML === 'Ctrl') {
      return;
    }

    if (target.innerHTML === 'Alt') {
      return;
    }

    if (target.innerHTML === constants.tab) {
      tArea.value += '    ';
      return;
    }

    if (target.innerHTML === '') {
      tArea.value += ' ';
    }

    if (target.innerHTML === 'Caps Lock') {
      changeRegister();
      return;
    }

    if (target.innerHTML === constants.backspace) {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(0, tAreaText.length - 1);
      tArea.value = tAreaText;
      return;
    }

    if (target.innerHTML === 'Del') {
      let tAreaText = document.querySelector(constants.tAreaBlockQS).value;
      tAreaText = tAreaText.substring(1, tAreaText.length);
      tArea.value = tAreaText;
      return;
    }

    if (target.innerHTML === constants.enter) {
      tArea.value += '\n';
      return;
    }

    if (target.innerHTML === 'Info') {
      info.show();

      infoBlockButton.addEventListener('click', () => {
        info.hide();
      });
      return;
    }

    tArea.value += target.innerHTML;
  };
};
