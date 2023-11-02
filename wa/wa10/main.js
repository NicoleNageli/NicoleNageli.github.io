//creating var that corresponds to elements in the html
const customName = document.getElementById('customname'); //just for ids
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//function that returns random number from length of given array
// then uses that index to pick an item from the array
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length); //getting random number
  return array[random]; //select random item
}

//storytext is changing so var
var storyText = "34 fahrenheit in the ocean's Midnight Zone is the perfect time for exploring the depths, according to :insertx:. They traveled through the darkness under 5,800 pounds of water pressure all the way to :inserty:, but lost the way home. Bob:insertz:, which gave :insertx: an idea on the right direction to go.";

var insertX = ["Gobby the giddy Goblin Shark", "Susie the soft-hearted Siphonophore", "Vanessa the valiant Vampire Squid"];
var insertY = ["the hydrothermal vent" , "Whale Fall Diner", "the brine pool"];
var insertZ = [" hitched a ride on a colossal squid", "'s bones were consumed by hidden zombie worms", " saw a fantastic bioluminescent light show put on by groups of comb jellies, firefly squids, and firework jellyfish"];


randomize.addEventListener('click', result); //randomize id button that triggers function result

function result() {
    var newStory = storyText; //new var so original doesn't get affected
    var xItem = randomValueFromArray(insertX); //taking array and plugging it into randomvalfrom array function
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(5800/14 + "stone");
    const temperature =  Math.round(((94-32)* (5/9)) + 'centigrade');
    newStory = newStory.replace("34 fahrenheit", weight);
    newStory = newStory.replace("5,800 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}