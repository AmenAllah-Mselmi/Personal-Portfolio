let ham=document.getElementById("ham");
let x=document.getElementById("x");
let nav=document.getElementById("nav");
let a1=document.getElementById("a1");
let a2=document.getElementById("a2");
let a3=document.getElementById("a3");
let a4=document.getElementById("a4");
let a5=document.getElementById("a5");
let btn2=document.getElementById("carte1");
let h11=document.getElementById("h11");
a1.style.color= "hsl(120,100%,50%)"; 

function downloadFile() {
    // Replace with your file URL
    const fileUrl = 'https://drive.google.com/file/d/1-AZHLFoj-dr4mmRR4ZU-nxCyNz9HIAPx/view?usp=drive_link';
    // Replace with your desired filename
    const fileName = 'cv.pdf';

    // Create an anchor element
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;
    anchor.style.display = 'none';

    // Append the anchor element to the body
    document.body.appendChild(anchor);

    // Trigger the click event of the anchor element
    anchor.click();

    // Clean up
    document.body.removeChild(anchor);
}
const downloadButton = document.getElementById('btn1');
downloadButton.addEventListener('click', downloadFile);
ham.addEventListener("click",function(){
ham.style.cssText="display:none;";
//h11.style.cssText="display:block;";
x.style.cssText="display:block";
nav.style.cssText="height:760px; width:100%; background-color:hsl(228,15%,20%); z-index:9; flex-direction:column; justify-content:center; right:0 ;left:0; position:fixed;";
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
//h11.style.cssText="display:none;";
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
// window.onscroll=function(){
//     if(scrollY>=0 && scrollY<130){
//         a1.style.color= "hsl(120,100%,50%)"; 
//         a2.style.color= "white"; 
//         a3.style.color= "white"; 
//         a4.style.color= "white"; 
//         a5.style.color= "white"; 
//     }
//     else if(scrollY>=130 && scrollY<=700){
//         a2.style.color= "hsl(120,100%,50%)"; 
//         a1.style.color= "white"; 
//         a3.style.color= "white"; 
//         a4.style.color= "white"; 
//         a5.style.color= "white"; 
//     }
//     else if(scrollY>700 && scrollY<=1400){
//         a3.style.color= "hsl(120,100%,50%)"; 
//         a1.style.color= "white"; 
//         a2.style.color= "white"; 
//         a4.style.color= "white"; 
//         a5.style.color= "white"; 
//     }
//     else if(scrollY>2900 && scrollY<=3400){
//         a4.style.color= "hsl(120,100%,50%)"; 
//         a1.style.color= "white"; 
//         a2.style.color= "white"; 
//         a3.style.color= "white"; 
//         a5.style.color= "white"; 
//     }
//     else if(scrollY>3400){
//         a5.style.color= "hsl(120,100%,50%)"; 
//         a1.style.color= "white"; 
//         a2.style.color= "white"; 
//         a3.style.color= "white"; 
//         a4.style.color= "white";
//     }
// }
a1.addEventListener("click",()=>{
    a1.style.color= "hsl(120,100%,50%)"; 
            a2.style.color= "white"; 
            a3.style.color= "white"; 
            a4.style.color= "white"; 
            a5.style.color= "white"; 
})
a2.addEventListener("click",()=>{
    a2.style.color= "hsl(120,100%,50%)"; 
        a1.style.color= "white"; 
        a3.style.color= "white"; 
        a4.style.color= "white"; 
        a5.style.color= "white"; 
})
a3.addEventListener("click",()=>{
    a3.style.color= "hsl(120,100%,50%)"; 
            a1.style.color= "white"; 
            a2.style.color= "white"; 
            a4.style.color= "white"; 
            a5.style.color= "white"; 
})
a4.addEventListener("click",()=>{
    a4.style.color= "hsl(120,100%,50%)"; 
            a1.style.color= "white"; 
            a2.style.color= "white"; 
            a3.style.color= "white"; 
            a5.style.color= "white";   
})
a5.addEventListener("click",()=>{
    a5.style.color= "hsl(120,100%,50%)"; 
        a1.style.color= "white"; 
        a2.style.color= "white"; 
        a3.style.color= "white"; 
        a4.style.color= "white";
})
function checkWidth() {
    if (window.innerWidth >= 1024) {
      ham.style.display = 'none';
      a1.style.display="block";
a2.style.display="block";
a3.style.display="block";
a4.style.display="block";
a5.style.display="block";
nav.style.cssText=" width: 40%;  display: flex;justify-content:space-around;align-items: center;margin-right: 150px;";
    } else {
      ham.style.display = 'block';
      a1.style.display="none";
a2.style.display="none";
a3.style.display="none";
a4.style.display="none";
a5.style.display="none";
nav.style.cssText="justify-content:flex-end"
    }
  }
  
  // Run the function when the page loads
  checkWidth();
  
  // Run the function when the window is resized
  window.onresize = checkWidth;
