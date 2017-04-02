  var form = document.getElementById("formDiv");  
  var submitButton = document.getElementById("submitButton");
  var resetButton = document.getElementById("resetButton");
  var instructions = document.getElementById("instructions");
  var madLib = document.getElementById("madLib");
  var h2 = document.getElementById("how2Play");

function libbin(){
  
  form.style.display = "none";
  submitButton.style.display = "none";
  resetButton.style.display = "block";
    
  instructions.style.display = "none";
  
  h2.innerHTML=("Here's your story:");  
  madLib.style.display = "block";
  
  var pro1 = document.getElementById("pro1").value;
  var pro2 = document.getElementById("pro2").value;
  var pro3 = document.getElementById("pro3").value;
  var pro4 = document.getElementById("pro4").value;
  var pro5 = document.getElementById("pro5").value;
  var pro6 = document.getElementById("pro6").value;
  var pro7 = document.getElementById("pro7").value;
  var pro8 = document.getElementById("pro8").value;
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
//  var noun3 = document.getElementById("noun3").value;
//  var noun4 = document.getElementById("noun4").value;
//  var noun5 = document.getElementById("noun5").value;
  var verb1 = document.getElementById("verb1").value;
//  var verb2 = document.getElementById("verb2").value;
  var adj1 = document.getElementById("adj1").value;
  var adj2 = document.getElementById("adj2").value;
  var adj3 = document.getElementById("adj3").value;
  var adj4 = document.getElementById("adj4").value;
  var adj5 = document.getElementById("adj5").value;
  var adj6 = document.getElementById("adj6").value;
  var adj7 = document.getElementById("adj7").value;
  var adj8 = document.getElementById("adj8").value;
  
  madLib.innerHTML = "Hello, my name is " + pro1 + ". I drive a " + pro2 + ". When people see me driving around town, they often give me " + adj1 + " looks, but it’s probably just because they feel so much " + pro3 + " about my ride. I’ve named him " + pro4 + " and he’s my #1 love. He’s got " + noun1 + " inch rims that sparkle " + pro5 + " in the sunlight. His engine is " + adj2 + " and " + adj3 + " - it makes a " + adj4 + " sound when it starts up, which causes my " + pro6 + " to tingle. Even though " + pro4 + " has been good to me, I can’t help but dream of something better, like a  " + pro7 + ". " + pro7 + " makes the best rides. They are " + adj5 + ", " + adj6 + ", and they " + verb1 + " so smoothly. Maybe someday I’ll get up the courage to leave " + pro4 + ", but it’s just so " + adj7 + ". It doesn’t help that every time I ride in him my wiener shrinks " + noun2 + " inches, which makes me feel" + pro8 + ". I think it’s time to make a change, to the Ford dealership I go!<br /><br /><img src='http://c.quoteson.net/93/4644369-chevy-truck-funny-quotes.jpg' />";

  event.preventDefault();
}

function reset(){
  location.reload();
}