// Import our CSS file
import './styles/style.scss';

// Import our function
import { getData } from './js/script';

// Import jQuery
import $ from 'jquery';

$(document).ready(function () {
    getData();
});