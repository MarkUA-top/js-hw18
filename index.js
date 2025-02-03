// Task 1
const categories = document.querySelectorAll("#categories > li");
console.log("У списку", categories.length, "категорії.");

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2");
  const categoryItems = category.querySelectorAll("ul > li");
  console.log("Категорія: ", categoryTitle.innerHTML);
  console.log("Кількість елементів: ", categoryItems.length);
});

// Task 2
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];
  
  const ingredientsList = document.getElementById('ingredients');
  ingredients.forEach(ingredient => {
    ingredientsList.insertAdjacentHTML('beforeend', `<li>${ingredient}</li>`);
  });
  

// Task 3
const images = [
    {
      url: 'https://images.squarespace-cdn.com/content/v1/5cc1a8e4aadd345c914c694e/1563298444759-98J3C5ANIZGVAD74GGIK/50++IMG_9279.jpg',
      alt: 'Fpv plane',
    },
    {
      url: 'https://images.unsplash.com/photo-1654360415114-262143f0573e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDIzfHxmcHYlMjBkcm9uZXxlbnwwfHx8fDE2NzYxMzE3MjQ&ixlib=rb-4.0.3&q=80&w=960',
      alt: 'Fpv drone',
    },
    {
      url: 'https://content.instructables.com/FNB/8N1A/J9SVYU26/FNB8N1AJ9SVYU26.png?auto=webp&frame=1&width=2100',
      alt: 'Fpv car',
    },
  ];
  
  const gallery = document.getElementById('gallery');
  images.forEach(image => {
    gallery.insertAdjacentHTML('beforeend', `<li><img src="${image.url}" alt="${image.alt}" /></li>`);
  });
  
// Task 4
let counterValue = 0;
const valueElem = document.getElementById('value');

function increment() {
  counterValue += 1;
  valueElem.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueElem.textContent = counterValue;
}

const buttons = document.querySelectorAll('#counter button');

buttons.forEach(button => {
  if (button.getAttribute('data-action') === 'increment') {
    button.onclick = increment;
  } else if (button.getAttribute('data-action') === 'decrement') {
    button.onclick = decrement;
  }
});

