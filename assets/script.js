
var topics = ['HTML','CSS', 'Git', 'JavaScript'];

var randomTopic = [Math.floor(Math.random() * topics.length)]
console.log('Here are the topics we learned through Prework:');
function listTopics() {

for (var x=0; x < topics.length; x++) {
    console.log(topics[x]);
 }
}
console.log('Which topic should we study first?');
function selectTopic() {

if (randomtopics === 'HTML') {
    console.log("Let's study HTML!");
} else if (randomtopics === 'CSS') {
    console.log("Let's study CSS!");
} else if (randomtopics === 'Git') {
    console.log("Let's study Git!");
} else if (randomtopics === 'JavaScript') {
    console.log("Let's study JavaScript!");
} else {
    console.log('Please try again!');
 }
}