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
