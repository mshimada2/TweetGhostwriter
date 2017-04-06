function writeTweet()
{
var randIndex;
var sentence;
var intro = ["Chaluppa Batman", "Forever Unclean", "Ruxin", "Lil mama has a swag like mine"];
var body = ["Taco", "EBDB", "1,2,3 and to the 4", "Last name ever first name greatest", "Baby wont you come my wayyy"];
var end =  ["1738 aye", "Hey girl would you like to be my sunshine",];
randIndex = randomUpTo(intro.length-1);
sentence = intro[randIndex];
randIndex = randomUpTo(body.length-1);
sentence = sentence +" "+ body[randIndex];
randIndex = randomUpTo(end.length-1);
sentence = sentence +" "+ end[randIndex];
document.getElementById("tweet").innerHTML = sentence;
}


function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
