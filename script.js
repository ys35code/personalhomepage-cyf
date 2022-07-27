var images, temp;

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", images[0]);
}

// Describe this function...
function next() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp = images.shift();
  images.push(temp);
}

// Describe this function...
function previous() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  temp = images.pop();
  images.unshift(temp);
}


images = ['https://images.pexels.com/photos/843700/pexels-photo-843700.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/315788/pexels-photo-315788.jpeg?auto=compress&cs=tinysrgb&w=800', 'https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg?auto=compress&cs=tinysrgb&w=800'];
display();


document.getElementById('next').addEventListener('click', (event) => {
  next();
  display();

});

document.getElementById('previous').addEventListener('click', (event) => {
  previous();
  display();

});
