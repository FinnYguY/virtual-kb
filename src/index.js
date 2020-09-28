const processor = require('.\\js\\processor.js');
const viewGenerator = require('.\\js\\viewGenerator.js');

import '.\\scss\\main.scss';

// generating html page view
import virtualKbHTML from '.\\js\\viewGenerator.js';
document.body.focus();

processor.physicalClickHandler();

// configuring the mutation observer for delegation to work properly
const field = document.getElementsByTagName('body')[0];

const config = {
  childList: true,
};

const observer = new MutationObserver(processor.virtualClickHandler);
observer.observe(field, config);
