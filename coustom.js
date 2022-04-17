// function for add animation scroll in css and javascript

// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//         console.log(true);
//       } else {
//         reveals[i].classList.remove("active");
//         console.log(false);
//       }
//     }
//   }
  
// window.addEventListener("scroll", reveal);



function Dark() {
  let data = document.querySelectorAll(".reveal");
  for(let i=0 ; i<data.length; i++){
    let windowHeight = window.innerHeight; 
    let ElementTop = data[i].getBoundingClientRect().top;
    let ElementVisible = 150;
    if (ElementTop<windowHeight - ElementVisible) {
      data[i].classList.add("active");
    } else {
      data[i].classList.remove("active");
    }
  } 
}
window.addEventListener("scroll",Dark);



// window.onscroll=function () {
//   let header = document.querySelector(".text_box_hader");
//     if (window.scrollY<150) {
//       header.style.width="50%";
//       console.log(false);
//     } else {
//       header.style.width="90%";
//       console.log(true);
//     }
// };