
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string){
      return string.toLowerCase();
  }

  console.log(shout("hello"));
  console.log(whisper("HELLO"));

 function logShout(String){
    console.log(String.toUpperCase());
 }

 function logWhisper(string){
     console.log(string.toLowerCase());
 }


function sayHiToHeadphonedRoommate(string) {
    if(string === string.toLowerCase()){
    return "I can\'t hear you!";
        }
        if (string === string.toUpperCase()){
            return "YES INDEED!";
        }
        if (string === "Let\'s have dinner together!"){
            return "I would love to!";
        }
    }