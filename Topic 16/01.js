/* Selected div with all way to access */

// Solution 1
var x = document.getElementById('elzero');
// Solution 2 with querySelector
var a = document.querySelector('#elzero');
var b = document.querySelector('.element');
var c = document.querySelector('div');
var d = document.querySelector('[name="js"]');
// Solution 3 with querySelectorAll
var e = document.querySelectorAll('.element');
var j = document.querySelectorAll('div');
var k = document.querySelectorAll('[name="js"]');
var s = document.querySelectorAll('#elzero');
// Solution 4
var y = document.getElementsByName('js');
var l = document.getElementsByTagName('div');
