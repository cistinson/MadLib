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
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var noun3 = document.getElementById("noun3").value;
  var noun4 = document.getElementById("noun4").value;
  var noun5 = document.getElementById("noun5").value;
  var verb1 = document.getElementById("verb1").value;
  var verb2 = document.getElementById("verb2").value;
  var adj1 = document.getElementById("adj1").value;
  var adj2 = document.getElementById("adj2").value;
  var adj3 = document.getElementById("adj3").value;
  var adj4 = document.getElementById("adj4").value;
  var adj5 = document.getElementById("adj5").value;
  var adj6 = document.getElementById("adj6").value;
  var adj7 = document.getElementById("adj7").value;
  var adj8 = document.getElementById("adj8").value;
  
  madLib.innerHTML ="There once was a girl named " + pro1 + ". She was very " + adj1 + " " + adj2 + " " + ", and " + adj3 + ". When she walked around " + pro2 + ", people often looked at her funny. It was probably due to her " + noun1 + " inch nose or her " + adj4 + " smell. She tried hard in school and managed a GPA of " + noun2 +", which everyone told her was very " + adj5 + ". She had a pet named " + pro3 + " who liked to " + verb1 + " and urinate " + verb2 + " while " + pro1 + " was working. Both " + pro1 + " and " + pro3 + " had the same IQ of " + noun3 + ". She tried hard to be as " + adj6 + " and " + adj7 + " as her older brother " + pro4 + ", but it was an impossible talk for he was the " + adj8 + "est man alive. He was " + noun4 + " inches tall with an IQ of " + noun5 + ". He had the jawline of " + pro5 + " and the hair of " + pro6 + ". He was undoubtedly the favorite child. :-)";

  event.preventDefault();
}

function reset(){
  location.reload();
}