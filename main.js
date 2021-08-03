 let screen = document.querySelector('.input');
 let buttons = document.querySelector('.buttons');
 let result = document.getElementById('equal');

 buttons.addEventListener('click', numberToScreen);
 result.addEventListener('click', resolve);


 function numberToScreen(e){
   const button = e.target.innerHTML;

   if(button==='C'){
     let onScreen = screen.innerHTML
     screen.innerHTML = onScreen.slice(0,-1)

   } else if(screen.innerHTML === '0'){
     screen.innerHTML = button;

   }else{
     screen.innerHTML += button;
   }
 }


 function resolve(){
  let onScreen = (screen.innerHTML)
  screen.innerHTML = Math.round(eval(onScreen)*1000) / 1000
 }

 console.log(resolve());