let clock = () => {
    let date = new Date();
    let  hrs = date.getHours();
    let  mins = date.getMinutes();
    let  secn = date.getSeconds();
    let  sese = ""
    var time = `${hrs} : ${mins} : ${secn} : ${sese}`
    // time.classList.add("mystyle");
    if(hrs<=12){
        sese="AM";
    }
    else {
        sese="PM"
    }
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }if(secn<10){
        secn="0"+secn;
    }

    if(hrs>=6 && hrs<11){
        document.getElementById('Note')[0];
    }
    if(hrs>=11 && hrs<15){
        document.getElementById('Note').innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    }
    if(hrs>=15 && hrs<21){
        document.getElementById("Note").innerHTML="LET'S HAVE SOME LUNCH !!";
    }
    if(hrs>=21 && hrs<24){
        document.getElementById("Note").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    }
    if(hrs>=1 && hrs<6){
        document.getElementById("Note").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    }

   let hour= document.getElementById('hrs').innerHTML=hrs;
    document.getElementById('min').innerHTML=mins;
    document.getElementById('secn').innerHTML=secn;
    document.getElementById('AMPM').innerHTML=sese;

    
    
    let morning = document.getElementById('morning');
    let afternoon = document.getElementById('afternoon');
    let evining = document.getElementById('evining');
    let  night = document.getElementById('night');


let Good_Wishes = document.getElementById('Good_Wishes');
 let Wishes=document.getElementById('wishes');     
 let text = document.getElementById('text');
 let timingfonction = document.getElementById('timingfonction');
 
 let alarm= document.getElementById('alarm-set')
    let img=document.querySelector('#img');


    let wake = morning.options[document.getElementById('morning').selectedIndex];
    let lunch = afternoon.options[document.getElementById('afternoon').selectedIndex];
    let nap = evining.options[document.getElementById('evining').selectedIndex];
    let sleep = night.options[document.getElementById('night').selectedIndex];

    let cont1 =document.getElementById('cont1');
    let cont2 =document.getElementById('cont2');
    let cont3 =document.getElementById('cont3');
    let cont4 =document.getElementById('cont4');

    let wk=document.getElementById('wk');
    cont1.innerText = `wake up time :  ${wake.text}`;
    cont2.innerText =`lunch time : ${lunch.text}`;
    cont3.innerText =`nap time : ${ nap.text}`;
    cont4.innerText = `nigth time : ${sleep.text}`;
    
    function callfun() {
        
        if (hrs===parseInt(morning.value)) {
            document.getElementById('wishes').innerHTML=" GOOD MORNING ...!";
           img.src="./girl wakeup.png";
    }else if(hrs===parseInt(afternoon.value)){
        document.getElementById('wishes').innerHTML=" GOOD AFTERNOON ...!"
        img.src="./boy lunch.png";
    }else if(hrs===parseInt(evining.value)){
        document.getElementById('wishes').innerHTML=" GOOD EVINING ...!"
        img.src="./tea.png";

    }else if(hrs===parseInt(night.value)){
        document.getElementById('wishes').innerHTML=" GOOD NIGHT ...!"
        img.src="girl sleeping.png";
    }
}callfun()
}
clock();
setInterval(clock, 1000)


function up() {
    document.getElementById("alarm-set").innerHTML="Party Time !"
    console.log("ok");
   document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right, #CB52F8, #FC5EFF)"
  
  }
  
  function down() {
  
    document.getElementById("alarm-set").innerHTML="Set Alarm"
    document.getElementById("alarm-set").style.backgroundImage="linear-gradient(to right,  #FC5EFF ,#CB52F8)"
    
  }
