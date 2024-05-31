function renderHello() {
    fetch('template.mustache')
      .then((response) => response.text())
      .then((template) => {
        let rendered = Mustache.render(template, { name: 'Luke' });
        document.getElementById('target').innerHTML = rendered;    
      });
  }
  * {{name.first}} {{name.last}}
* {{age}}

app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
});

app.use(express.static('public'));

app.get('/users.json', (req, res) => {
  const filePath = __dirname + '/users.json'; // Path to your file
  res.download(filePath); // This sends the file for download
});

// module.exports.