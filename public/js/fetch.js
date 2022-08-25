const getAllBooks = () => {
  fetch('/AllBooks').then((data) => data.json()).then((data) => renderBooks(data));
};
getAllBooks();
const postBook = () => {
  const packet = {
    method: 'POST',
    body: JSON.stringify({
      book: bookName.value,
      img: bookImg.value,
      selector: selectList.options[selectList.selectedIndex].value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/book', packet).then((res) => res.json()).then((res) => {
    bookName.value = '';
    bookImg.value = '';
    selectList.children[0].setAttribute('selected', 'selected');
    popBook.style.visibility = 'hidden';
    toast.show(res.massage, 'success');
    getAllBooks();
  });
};
const getAllCategories = () => fetch('/allCategories').then((res) => res.json()).then((data) => createOptions(data));
getAllCategories();
const postCategory = () => {
  const packet = {
    method: 'POST',
    body: JSON.stringify({
      categoryName: CategoryInput.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch('/category', packet).then((res) => res.json()).then((res) => {
    toast.show(res.massage, 'success');
    CategoryInput.value = '';
    popCategory.style.visibility = 'hidden';
  });
};
const updateBook = (id) => {
  const packet = {
    method: 'put',
    body: JSON.stringify({
      bookName: bookName.value,
      img: bookImg.value,
      categoryName: selectList.options[selectList.selectedIndex].value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  fetch(`/book/${id}`, packet).then((res) => res.json()).then(window.location.reload());
};

const deleteBook = (id) => {
  fetch(`/book/${id}`, {
    method: 'delete',
  }).then((res) => res.json()).then((res) => {
    toast.show(res.massage, 'success');
  });
};
