let aniSentence = function(sentence, time){
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time += 50)  
  }
  setTimeout(()=>{
    process.stdout.write('\n');
  }, time + 50)
};


const sentence = "I have selected for the web development bootcamp";
let time = 0;
aniSentence(sentence, time);