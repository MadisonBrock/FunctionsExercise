// FUNCTION EXERCISE

function fozzieBear(){
    console.log("Wocka Wocka!");
  }
  fozzieBear(); // Wocka Wocka!
  
  console.log(`==============`);
  

  function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
  }
  beaker("Meep");
  /*
  Meep
  Meep
  Meep
  Meep
  */
  
  console.log(`===============`);
  
  function muppetShow(a, b){
    if (a === "Muppet" && b === "Show"){
      console.log("It's time to play the music. It's time to light the lights.");
    }
  }
  muppetShow(`Muppet`, `Show`); // It's time to play the music. It's time to light the lights.
  muppetShow(`Hello`, `Bye`); // Does NOT display anything in the terminal/console
  
  console.log(`===========`);
  
  
  function kermit(){
    return "Kermit The Frog";
  }
  kermit(); // Does NOT display anything in the terminal/console
  console.log(kermit()); // Kermit The Frog
  
  console.log(`===============`);
  
 
  function muppetShowSeasons(seasons){
    if (seasons === 5){
      return true;
    } else {
      return false;
    }
  }
  console.log(muppetShowSeasons(5)); // true
  console.log(muppetShowSeasons(3)); // false
  
  console.log(`=============`);
  
  const manOrMuppet = () => {
    console.log("Am I a man or am I a Muppet?");
  }
  
  manOrMuppet(); // Am I a man or am I a Muppet?
  
  console.log(`==============`);
  
  rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
  
  console.log(rainbowConnection()); // Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me
  
  console.log(`===================`);
  
  // No
  
  // Yes
  
  const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
  ];
  
  const upperMovies = newMuppetMovies.map(function(u){
    return u.toUpperCase();
  });
  console.log(upperMovies); // [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]