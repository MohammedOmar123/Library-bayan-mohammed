fetch('/getAllBooks').then((data) => data.json())
  .then(data => renderBooks(data));
