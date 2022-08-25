/* eslint-disable no-empty */
const cards = document.querySelector('.suggested-cards');
const addCategory = document.querySelector('.add-category');
const addBook = document.querySelector('.add-book');
const popBook = document.querySelector('.po-up-continer1');
const popCategory = document.querySelector('.po-up-continer2');
const addCategoryToDatabase = document.querySelector('.add-category-pop');
const closeBtn = document.querySelectorAll('.close');
const CategoryInput = document.querySelector('.CategoryInput');
const selectList = document.querySelector('.select');
const bookName = document.querySelector('.book-name');
const addBookPopup = document.querySelector('.add-book-pop');
const bookImg = document.querySelector('.book-img');
const updateBookBtn = document.querySelector('.update-book-pop');
const addUpdatetile = document.querySelector('#add-update-title');
const pattern = /\d*[a-z]{3,}\d*/i;
const patternImage = /^[https://]\w/;
const checkInputs = (pattern1, text) => {
  if (pattern1.test(text)) {
    return true;
  }
  return false;
};

const renderBooks = (data) => {
  cards.textContent = '';
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

    // Category Title
    const h4Category = document.createElement('h4');
    h4Category.textContent = ele.cname;

    // Delete Button
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn');
    btnDelete.textContent = 'Delete';
    btnDelete.addEventListener('click', () => {
      card.removeChild(cardContent);
      card.removeChild(img);
      deleteBook(ele.id);
    });

    // Update button

    const btnUpdate = document.createElement('button');
    btnUpdate.classList.add('btn');
    btnUpdate.textContent = 'Update';
    btnUpdate.addEventListener('click', () => {
      popBook.style.visibility = 'visible';
      bookName.value = ele.bname;
      bookImg.value = ele.img;
      selectList.selectedIndex.value = ele.cname;
      addUpdatetile.textContent = 'Update Your Book';
      for (let i = 0; i < selectList.length; i++) {
        if (selectList.options[i].text === ele.cname) {
          selectList.options[i].setAttribute('selected', 'selected');
        }
      }
      updateBookBtn.style.display = 'block';
      updateBookBtn.id = ele.id;
      addBookPopup.style.display = 'none';
    });
    // Buttons div
    const divButtons = document.createElement('div');
    divButtons.className = 'div-buttons';
    // Appending
    divButtons.append(btnDelete, btnUpdate);
    cardContent.append(pTitle, h4Category, divButtons);
    card.append(img, cardContent);
    cards.appendChild(card);
  });
};
updateBookBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (checkInputs(patternImage, bookImg.value) && checkInputs(pattern, bookName.value)) {
    updateBook(updateBookBtn.id);
    popBook.style.visibility = 'hidden';
  } else {
    window.alert('Please Type Valid Values');
  }
});
addCategory.addEventListener('click', () => {
  popCategory.style.visibility = 'visible';
  popBook.style.visibility = 'hidden';
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
  getAllCategories();
  popBook.style.visibility = 'visible';
  popCategory.style.visibility = 'hidden';
  updateBookBtn.style.display = 'none';
  addBookPopup.style.display = 'block';
  addUpdatetile.textContent = 'Add Your Book';
});
closeBtn[0].addEventListener('click', () => {
  bookName.value = '';
  bookImg.value = '';
  popBook.style.visibility = 'hidden';
  updateBookBtn.style.display = 'none';
  addBookPopup.style.display = 'none';
});
closeBtn[1].addEventListener('click', () => {
  CategoryInput.value = '';
  popCategory.style.visibility = 'hidden';
});
addCategoryToDatabase.addEventListener('click', (e) => {
  e.preventDefault();
  if (checkInputs(pattern, CategoryInput.value)) {
    postCategory();
  } else {
    window.alert('Please Type Valid Values');
  }
});

addBookPopup.addEventListener('click', (e) => {
  e.preventDefault();
  if (checkInputs(patternImage, bookImg.value) && checkInputs(pattern, bookName.value)) {
    postBook();
  } else {
    window.alert('Please Type Valid Values');
  }
});
