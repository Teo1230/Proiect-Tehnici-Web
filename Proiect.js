
   
function generateRandomColor(){
  const r = Math.floor((Math.random())*255);
  const g = Math.floor((Math.random())*255);
  const b = Math.floor((Math.random())*255);
  return `rgb(${r},${g},${b})`;
}

 
  const  x=document.querySelectorAll('[id=image]');
  l=x.length;
   let i=0;
   //const array=["Schita 1","Schita 2","Schita 3","Schita 4","Schita 5"];
   let array=[];
   for(let j=1;j<=l;j++)
    array.push(`Schita ${j}`)
   if(array.length==l){
  let intervalid=setInterval(()=>{
      if(i<l)
       {x[i].textContent=array.at(i);
       x[i].style.color=generateRandomColor();
       x[i].style.background=generateRandomColor();}
      else return;
      i++;
  },1000);
   }
function visitCount() {
  var visits = Number(localStorage.getItem('visitCount'));
  var current = Boolean(sessionStorage.getItem('session'));

  if (!current) {
    visits++;
  }

  localStorage.setItem('visitCount', visits);
  sessionStorage.setItem('session', true);

  return visits;
}
 
  document.getElementById("btn").onclick = () => {
    alert(visitCount());
  }
  const d= new Date();
  document.getElementById('data').innerHTML=d;
  function incrementFontSize(by) {
    const htmlEl = document.querySelector("html");
    const current = parseInt(htmlEl.style.btows) || 12;
    htmlEl.style.fontSize = (current + by) + "px";
  }
 
  const myTimeout = setTimeout(myGreeting, 6000);

  function myGreeting() {
    document.getElementById("detalii").innerHTML = "Scrieti-ne o opinie despre una dintre schitele de mai sus";
  }
  


  function ascunde() {
    var x = document.getElementById("con");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function handleKeyDown(event){
    if(parseInt(event.key) == NaN)
            return;
    const div = document.getElementById("continut2");
    div.classList.add("pressed");
}
function handleKeyUp(event){
    if(parseInt(event.key) == NaN)
        return;
    const div = document.getElementById("continut2");
    div.classList.remove("pressed");
}
 
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
 
 
function myFunction(event) { 
  var z = event.target;
  document.getElementById("text").innerHTML = "Triggered by a " + z.tagName + " element " +"color "+ window.getComputedStyle(z,null).getPropertyValue("background-color");
}
document.getElementById("link").addEventListener("click", function(event){
  event.preventDefault()
});

function numar() {
  const element = document.getElementById("data");
  const rect = element.getBoundingClientRect();

  document.getElementById("nr").innerHTML =
"Left: " + rect.left.toFixed() + ", Top: " + rect.top.toFixed() + ", Width: " + rect.width + ", Height: " + rect.height;
}

 
  const box = document.querySelector(".box");
  showDomRect(box);
  window.addEventListener("scroll", () => {
    showDomRect(box);
  });
  function showDomRect(element) {
    const rect = element.getBoundingClientRect();
    element.innerHTML = '';
    for(let key in rect) {
      if(typeof rect[key] == 'function') continue;
      let paragraph = document.createElement("p");
      paragraph.textContent = `${key}: ${rect[key]}px`;
      element.append(paragraph);
    }
  }
  function validate() {
  
    var user = document.getElementById("e").value;
    var user2 = document.getElementById("e");
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(user)) {
        alert("done");
        return true;
    }
    else {
        user2.style.border = "red solid 3px";
        return false;
    }
}