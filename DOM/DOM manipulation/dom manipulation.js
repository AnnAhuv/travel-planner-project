// Select the <li> element with class "start-here"
const myLi = document.querySelector('li.start-here');

// Assignment 1: Modify the text content of the selected myLi element
myLi.textContent = 'main title';

// Assignment 2: Adding a new sub title
const myLiNextSibling = myLi.nextElementSibling;
const myUl = myLiNextSibling.firstElementChild;
const newSubTitle = document.createElement('li');
const subTitleText = document.createTextNode('sub title 4');
newSubTitle.appendChild(subTitleText);
myUl.appendChild(newSubTitle);

// Assignment 3: Removing the last title
const myLiParent = myLi.parentElement;
myLiParent.lastElementChild.remove();

// Assignment 4: Updating the document's title
const title = document.head.querySelector('title');
title.textContent = 'DOM Master';

// Assignment 5: Updating paragraph content
const div = myLiParent.nextElementSibling;
const p = div.firstElementChild;
p.textContent = "Now I know how to traverse the DOM :D";
