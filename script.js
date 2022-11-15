let words = ['phone','dragon','watermelon','peace','beauty','cool'];
let chosenWord = words[Math.floor(Math.random()*words.length)];
let chosenWord_arr = chosenWord.split("");
let userinput = null;

let letters = "abcdefghijklmnopqrstuvwxyz";

let word2_arr = [], word2="";
let tryCount = 0;

for (let index = 0; index<chosenWord_arr.length; index++){
  word2_arr[index]="_";
}
word2= word2_arr.join("");

while (chosenWord!=word2){

  userinput = prompt ("Guess a letter (all lowercase) for this word or click cancel to quit this game: \n" + word2_arr)

  if (userinput){
    if (userinput.length==1){
      userinput=userinput.toLowerCase()
      if (letters.indexOf(userinput>=0)){
        if (chosenWord_arr.indexOf(userinput>=0)){

          for (let index=0; index< chosenWord_arr.length; index++){
            if (chosenWord_arr[index]==userinput){
              word2_arr[index=userinput];
            }
            
          }
        }
      }
      else {
        alert("Please enter only letters in lowercase: ")
      }
    }
    else {
      alert("Please enter only one letter at a time: ")
    }
    chosenWord=chosenWord_arr.join("");
    word2 = word2_arr.join("");
  }
  else {
    alert("Nice tries! The word was \n" + chosenWord + "\nYour guess was: \n" + word2);

        break;
   }
  }
 //end of while loop

if (chosenWord==word2){
  alert("Congratulations! This is correct :)");
  let img0="";
  switch (words.indexOf(chosenWord)>=0){
    case 0 :
  img0=
    document.getElementById("image").src="https://thumbs.gfycat.com/InbornGregariousKagu-size_restricted.gif";
  break;
    case 1:
  img0=
    document.getElementById("image").src="https://sendwishonline.s3.us-east-2.amazonaws.com/group-cards/2021/Jun/you-deserve-our-applause-animated-cards.gif";
  break;
    default:
  img0=
    document.getElementById("image").src="https:media4.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif?cid=790b761114622288c0ada07b05b1f4b71906746b863b899a&rid=giphy.gif&ct=g";
  break;
  }
  
}