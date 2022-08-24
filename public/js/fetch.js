fetch('/getAllBooks').then((data) => data.json()).then((data) => renderBooks(data));
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
  fetch('/book', packet);
};
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
    massage.textContent = res.massage;
    CategoryInput.value = '';
  });
};