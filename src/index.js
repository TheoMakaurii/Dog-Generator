import $ from 'jquery';

function main() {
  console.log('DOM is loaded');
  let number = $("#number").val();
  let url = `https://dog.ceo/api/breeds/image/random/${number}`
//$('#content-box').append(startMsg);

  fetch(url)
    .then(response => response.json())
    .then(responseJson => { console.log(responseJson)
        let image= responseJson.message;

        for(let i=0; i<image.length; i++){

    $("#content-box").append(`<img src="${image[i]}" alt = "dog">`);}
    });
}

function watchForm() {
$('form').submit(event => {
    event.preventDefault();
    main();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });
 // $(main);