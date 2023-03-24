import './style.scss';
import './CodilityTable/codility-table';

import { headersData } from './helper/headerData';
console.log('headersData-outer', headersData);
document.getElementById(
  'codility-table--component'
).innerHTML = `<codility-table table_data='${JSON.stringify(
  headersData
)}'></codility-table>`;

// https://medium.com/swlh/web-components-with-shadow-dom-and-sass-f780ad23dd90
