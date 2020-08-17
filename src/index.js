import $ from 'jquery';

function main() {
    console.log('DOM is loaded');
  
    const startMsg = $('<p>test is working!</p>');
    $('#content-box').append(startMsg);
  }
  
  $(main);