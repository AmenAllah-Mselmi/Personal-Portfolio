let ham=document.getElementById("ham");
let x=document.getElementById("x");
let nav=document.getElementById("nav");
let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");
let a5=document.getElementById("a5");
let btn2=document.getElementById("carte1");
a1.style.color= "hsl(120,100%,50%)"; 
ham.addEventListener("click",function(){
ham.style.cssText="display:none;";
x.style.cssText="display:block";
nav.style.cssText="height:760px; width:250px; background-color:hsl(228,15%,20%); z-index:9; ; flex-direction:column; justify-content:center; right:0; position:fixed";
a1.style.display="block";
a2.style.display="block";
a3.style.display="block";
a4.style.display="block";
a5.style.display="block";
});
x.addEventListener("click",function(){
a1.style.display="none";
a2.style.display="none";
a3.style.display="none";
a4.style.display="none";
a5.style.display="none";
ham.style.cssText="display:block;";
nav.style.cssText=" margin-right: 20px; justify-content-:end;";
x.style.display="none";
})
// document.addEventListener("resize",function(){
//     if(window.innerWidth>1024){
//         console.log("ess");
//         ham.style.cssText="display:none;";
//         nav.style.cssText="width: 40%; display: flex; justify-content:space-around; align-items: center; margin-right: 150px;";
//         a1.style.display="block";
// a2.style.display="block";
// a3.style.display="block";
// a4.style.display="block";
// a5.style.display="block";
//     }
// })
// btn2.addEventListener("click",function(){
//     console.log(scrollY);
// })
window.onscroll=function(){
    if(scrollY===0){
        a1.style.color= "hsl(120,100%,50%)"; 
        a2.style.color= "white"; 
        a3.style.color= "white"; 
        a4.style.color= "white"; 
        a5.style.color= "white"; 
    }
    else if(scrollY>0 && scrollY<=700){
        a2.style.color= "hsl(120,100%,50%)"; 
        a1.style.color= "white"; 
        a3.style.color= "white"; 
        a4.style.color= "white"; 
        a5.style.color= "white"; 
    }
    else if(scrollY>700 && scrollY<=1400){
        a3.style.color= "hsl(120,100%,50%)"; 
        a1.style.color= "white"; 
        a2.style.color= "white"; 
        a4.style.color= "white"; 
        a5.style.color= "white"; 
    }
    else if(scrollY>1400 && scrollY<=2275.60009765625){
        a4.style.color= "hsl(120,100%,50%)"; 
        a1.style.color= "white"; 
        a2.style.color= "white"; 
        a3.style.color= "white"; 
        a5.style.color= "white"; 
    }
    else{
        a5.style.color= "hsl(120,100%,50%)"; 
        a1.style.color= "white"; 
        a2.style.color= "white"; 
        a3.style.color= "white"; 
        a4.style.color= "white";
    }
}
