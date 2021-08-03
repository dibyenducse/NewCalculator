 let screen = document.querySelector('.input');
 let buttons = document.querySelector('.buttons');
 let result = document.getElementById('result');

 buttons.addEventListener('click', numberToScreen);
 result.addEventListener('click', resolve);


 function numberToScreen(e){
   const button = e.target.innerHTML;

   if(button==='C'){
     let onScreen = screen.innerHTML
     screen.innerHTML = onScreen.slice(0,-1)

   } else if(screen.innerHTML === ""){
     screen.innerHTML = e.target.innerHTML;

   }else{
     screen.innerHTML += e.target.innerHTML;
   }
 }


 function resolve(){
  let onScreen = screen.innerHTML;
  screen.innerHTML = eval(onScreen)
 }

 console.log(resolve());