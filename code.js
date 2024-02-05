var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav; 
closeBtn.onclick = closeNav;

function openNav() {
    sidenav.classList.add("active");
}

function closeNav() {
    sidenav.classList.remove("active"); 
}


document.querySelectorAll('.sidenav > ul > li').forEach(function(item) {
    item.addEventListener('click', function(event) {
      event.stopPropagation();
      if (this.querySelector('.sub-menu')) {
        this.querySelector('.sub-menu').classList.toggle('active');
      }
    });
  });


  document.addEventListener('click', function(event) {
    if (!event.target.closest('.sidenav')) {
      document.querySelectorAll('.sub-menu').forEach(function(subMenu) {
        subMenu.classList.remove('active');
      });
    }
  });

const section = document.getElementById('section');


const nav = document.getElementById("nav");
window.addEventListener("scroll", (event) => {
  const scroll = this.scrollY;
  if(scroll === 0) {
    nav.style["background-color"] = "#5ec6a500"
  } else {
    nav.style["background-color"] = "#5ec6a5"
  }
  console.log (scroll, nav)
});