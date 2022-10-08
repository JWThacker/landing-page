/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * 
*/

/**
 * Begin Main Functions
 * 
*/

// build the nav
const navFragment = document.createDocumentFragment();
    for (const section of sections) {
        const attributeString = section.getAttribute("data-nav");
        const innerTextString = attributeString;
        const classString = "navbar-item-" + attributeString.slice(-1)
        const newSectionNav = document.createElement("li");
        newSectionNav.setAttribute("class", "navbar-item")
        newSectionNav.innerHTML = `<a onclick="scrollToNavBarSection(\'${classString}\')">${innerTextString}</a>`;
        newSectionNav.classList.add(classString);
        navFragment.appendChild(newSectionNav);
    }
    navBar.appendChild(navFragment);
    console.log(navBar.outerHTML);

// Add class 'active' to section when near top of viewport
document.addEventListener(
    "scroll", 
    function() {
        for (const section of sections) {
            const sectionBoundary = section.getBoundingClientRect().top;
            const windowTopBoundary = document.defaultView.window.scrollY;
            const sectionNumber = section.getAttribute("data-nav").slice(-1);
            const navBarItem = document.querySelector(".navbar-item-" + sectionNumber);
            if (Math.abs(sectionBoundary) < 300) {
                section.classList.add("your-active-class");
                navBarItem.classList.add("active-navbar");
            } else {
                section.classList.remove("your-active-class");
                navBarItem.classList.remove("active-navbar");
            }

        }
    }
);

// Scroll to anchor ID using scrollTO event
/*
 * Smoothly scroll to the section with the appropriate class provided scrollToNavBarSection
 * Params:
 *     className: class of the li tag to be scrolled to.
 * Return:
 *     NULL
 *
*/
function scrollToNavBarSection(className) {
    const sectionId = "section" + className.slice(-1);
    const top = document.querySelector("#"+sectionId).getBoundingClientRect().top;
    console.log(top);
     document.defaultView.window.scrollBy(
        {
            top: top,
            left: 0,
            behavior: "smooth"
        }
     );
 }
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
