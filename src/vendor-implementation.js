// Import jQuery and Lodash from the vendor.js file
import { $, _ } from './vendor';

// Use jQuery and Lodash in your application code
$('body').addClass('has-jquery');
const result = _.find([1, 2, 3], n => n % 2 === 0);
