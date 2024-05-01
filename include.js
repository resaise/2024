// JavaScript to handle inclusion of HTML files
window.addEventListener('DOMContentLoaded', function() {
  var includes = document.querySelectorAll('[include]');
  Array.prototype.forEach.call(includes, function(include) {
    var filePath = include.getAttribute('include');
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      if (xhr.status === 200) {
        include.innerHTML = xhr.responseText;
      } else {
        console.error('Error: ' + xhr.status + ' ' + xhr.statusText);
     
