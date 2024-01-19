const questions= [
    {
    'que' : "Which one of the following is an application of Stack Data Structure?",
       'a' : "Managing function calls",
       'b' : "The stock span problem",
       'c' : "Arithmetic expression evaluation",
       'd' : "All of the above",
       'correct' : "d",
    },
    {
        'que' : "Which of the following sorting algorithms can be used to sort a random linked list with minimum time complexity?",
           'a' : "Insertion Sort",
           'b' : "Quick Sort",
           'c' : "Heap Sort",
           'd' : "Merge Sort",
           'correct' : "d",
        },
        {
            'que' : "An advantage of chained hash table (external hashing) over the open addressing scheme is",
               'a' : "Space used is les",
               'b' : "Deletion is easier",
               'c' : "Worst case complexity of search operations is less",
               'd' : "None of the above",
               'correct' : "b",
            },
]
let index=0;
const ques= document.querySelector(".ques");
const options= document.querySelectorAll(".options");
let total=questions.length;
let right=0;
let wrong=0;
const loadquestion =()=>{
   if(index==total){
      return end();
   }
    reset();
    const data = questions[index]
    console.log(data)
    ques.textContent= `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerHTML= data.a;
    options[1].nextElementSibling.innerHTML= data.b;
    options[2].nextElementSibling.innerHTML= data.c;
    options[3].nextElementSibling.innerHTML= data.d;

}

const submitQuiz= ()=>{
  const data= questions[index];
  const ans= getAns();
  if(ans == data.correct){
  right++;
  }else{
   wrong++;
  }
  index++;
  loadquestion();
  return;
}

const getAns=()=>{
   let anwser;
   options.forEach(
      (input) => {
       if(input.checked){
         anwser= input.value;
       }
     }
   )
   return anwser;
}

const reset=()=>{
   options.forEach(
      (input) => {
       input.checked =false
     }
   )
}

const end=()=>{
   document.getElementById("box").innerHTML= `
   
   <h3> Thank you your Quize id Submitted </h3>
   <h2>your score is ${right}/${total}</h2>
   `


}