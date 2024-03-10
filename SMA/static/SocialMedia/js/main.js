//FOOTER NAV
"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}
function offsetMenuBorder(element, menuBorder) {
            
    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});
// MAIN JS
document.addEventListener('DOMContentLoaded', function () {
    var modeSwitch = document.querySelector('.mode-switch');
    modeSwitch.addEventListener('click', function () { document.documentElement.classList.toggle('dark');
    modeSwitch.classList.toggle('active');
    });
    var listView = document.querySelector('.list-view');
    var gridView = document.querySelector('.grid-view');
    var projectsList = document.querySelector('.project-boxes');
    listView.addEventListener('click', function () {
    gridView.classList.remove('active');
    listView.classList.add('active');
    projectsList.classList.remove('jsGridView');
    projectsList.classList.add('jsListView');
    });
    gridView.addEventListener('click', function () {
    gridView.classList.add('active');
    listView.classList.remove('active');
    projectsList.classList.remove('jsListView');
    projectsList.classList.add('jsGridView');
    });
    document.querySelector('.messages-btn').addEventListener('click', function () {
    document.querySelector('.messages-section').classList.add('show');
    });
    document.querySelector('.messages-close').addEventListener('click', function() {
    document.querySelector('.messages-section').classList.remove('show');
    });
    });


//BADGE
document.addEventListener("DOMContentLoaded", function() {
    const badges = document.querySelectorAll('.social-share .badge');

    badges.forEach(badge => {
        badge.addEventListener('click', function(event) {
            event.preventDefault();
            const icon = this.querySelector('i');

            if (icon.classList.contains('bi-heart')) {
                icon.parentNode.classList.toggle('heart-active'); // Toggle class on parent <a> element
            } else if (icon.classList.contains('bi-bookmark')) {
                icon.parentNode.classList.toggle('bookmark-active'); // Toggle class on parent <a> element
            }
        });
    });
    });
//Profile/JS
(() => {

'use-strict'

const themeSwiter = {

    init: function() {
    this.wrapper = document.getElementById('theme-switcher-wrapper')
    this.button = document.getElementById('theme-switcher-button')
    this.theme = this.wrapper.querySelectorAll('[data-theme]')
    this.themes = ['theme-orange', 'theme-purple', 'theme-green', 'theme-blue']
    this.events()
    this.start()
    },
    
    events: function() {
    this.button.addEventListener('click', this.displayed.bind(this), false)
    this.theme.forEach(theme => theme.addEventListener('click', this.themed.bind(this), false))
    },

    start: function() {
    let theme = this.themes[Math.floor(Math.random() * this.themes.length)]
    document.body.classList.add(theme)
    },

    displayed: function() {
    (this.wrapper.classList.contains('is-open'))
        ? this.wrapper.classList.remove('is-open')
        : this.wrapper.classList.add('is-open')
    },

    themed: function(e) {
    this.themes.forEach(theme => {
        if(document.body.classList.contains(theme))
        document.body.classList.remove(theme)
    })
    return document.body.classList.add(`theme-${e.currentTarget.dataset.theme}`)
    }

}

themeSwiter.init()

})()