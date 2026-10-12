'use strict';
const page=+document.body.dataset.page;const actions=[home,elements,language,phases,separation,reactions,laboratory];if(page)head(page);actions[page||0]();
