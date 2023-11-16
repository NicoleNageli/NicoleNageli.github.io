const newBtn = document.querySelector('#js-new-quote');
addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet');
addEventListener('click', testFunction);


const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote(){
    //console.log('Test');

    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json);
        displayQuote(json['question']);
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayAnswer(answer){
    const answerTxt = document.querySelector('#js-answer-text');
    answerTxt.textContent = answer;
}


function displayQuote(question){
    const questionTxt = document.querySelector('#js-quote-text');
    questionTxt.textContent = question;
}

function testFunction(){
    //console.log("answer button clicked");
}

getQuote();

// Define the API URL
const apiUrl = 'http://thecatapi.com/api/images/get?format=src&type=gif';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
