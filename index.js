// import $ from 'jquery';

function main() {
  console.log('DOM is loaded');
  let number = $('#number').val();
  let url = `https://dog.ceo/api/breeds/image/random/${number}`
  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(responseJson => { console.log(responseJson);
      let image= responseJson.message;
      let dogs=``
      for(let i=0; i<image.length; i++){
        dogs=image[i];
$('#dog-house').append(`<img src="${dogs}" alt = "dog">`);}
    });
}

function watchForm() {
$('form').on('click', '#submit',() => {
    event.preventDefault();
    $('#dog-house').html('');
    main();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});
