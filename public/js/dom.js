const cards = document.querySelector('.suggested-cards');
const addCategory = document.querySelector('.add-category');
const addBook = document.querySelector('.add-book');
const popBook = document.querySelector('.po-up-continer1');
const popCategory = document.querySelector('.po-up-continer2');
const addCategoryToDatabase =document.querySelector('.add-category-pop');
const closeBtn = document.querySelectorAll('.close');
const CategoryInput = document.querySelector('.CategoryInput');
const massage = document.querySelector('.massage');
const selectList = document.querySelector('.select');
const bookName = document.querySelector('.book-name');
const addBookPopup = document.querySelector('.add-book-pop');
const bookImg = document.querySelector('.book-img');
const renderBooks = (data) => {
  data.forEach((ele) => {
    // card
    const card = document.createElement('div');
    card.classList.add('card');
    // img
    const img = document.createElement('img');
    img.src = ele.img;
    // card-content
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    // Title
    const pTitle = document.createElement('h3');
    pTitle.classList.add('title');
    pTitle.textContent = ele.bname;

    // button
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.textContent = ele.cname;
    cardContent.appendChild(pTitle);
    cardContent.appendChild(btn);
    card.appendChild(img);
    card.appendChild(cardContent);

    cards.appendChild(card);
  });
};
addCategory.addEventListener('click', () => {
  popCategory.style.visibility = 'visible';
  popBook.style.visibility = 'hidden';
  massage.textContent = '';
});
const createOptions = (data) => {
  data.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.id;
    option.textContent = category.cname;
    selectList.append(option);
  });
};

addBook.addEventListener('click', () => {
  fetch('/allcategories').then((res) => res.json()).then((data) => createOptions(data));
  popBook.style.visibility = 'visible';
  popCategory.style.visibility = 'hidden';
});
closeBtn[0].addEventListener('click', () => {
  bookName.value = '';
  bookImg.value = '';
  popBook.style.visibility = 'hidden';
});
closeBtn[1].addEventListener('click', () => {
  CategoryInput.value = '';
  popCategory.style.visibility = 'hidden';
});
addCategoryToDatabase.addEventListener('click', (e) => {
  e.preventDefault();
  postCategory();
});

addBookPopup.addEventListener('click', (e) => {
  e.preventDefault();
  postBook();
});

CategoryInput.addEventListener('input', () => {
  massage.textContent = '';
});
