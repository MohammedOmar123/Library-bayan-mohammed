const app = require('./app');

const port = app.get('port');
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Start Listening at http://localhost:${port}`);
});
