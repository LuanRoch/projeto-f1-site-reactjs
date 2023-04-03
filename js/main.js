jQuery(document).ready(function($) {
    window.onscroll = function() {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    };
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("start");


        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



const wrapper = document.querySelector('.wrapper')

let pressed = false
let startX = 0

wrapper.addEventListener('mousedown', function(e) {
    pressed = true
    startX = e.clientX
    this.style.cursor = 'grabbing'
})

wrapper.addEventListener('mouseleave', function(e) {
    pressed = false
})

window.addEventListener('mouseup', function(e) {
    pressed = false
    wrapper.style.cursor = 'grab'
})

wrapper.addEventListener('mousemove', function(e) {
    if (!pressed) {
        return
    }

    this.scrollLeft += startX - e.clientX
})

// noticiasfut //

function resizeGridItem(item) {
    const grid = document.getElementById("grid");
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    const allItems = document.querySelectorAll(".grid-item");
    for (let x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

window.onload = resizeAllGridItems;
window.addEventListener("resize", resizeAllGridItems);


// youtube //

const container = document.querySelector('#container');
const btnMenu = document.querySelector('#btn-menu');
const verifyWidthDevice = () => {
    window.innerWidth <= 768 ? container.classList.remove('active') : container.classList.add('active');
}

window.addEventListener('DOMContentLoaded', verifyWidthDevice);
window.addEventListener('resize', verifyWidthDevice);

btnMenu.addEventListener('click', () => {
    container.classList.toggle('active');
});


//  formulario //

const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    const data = {
        name: name,
        email: email,
        message: message
    };
    console.log(data); // Here you can send the form data to a server using Ajax or fetch
    form.reset(); // This will clear the form inputs after submission
});