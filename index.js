const express = require('express'); // express app
const app = express();
const Mustache = require('mustache'); // Import Mustache

const PORT = 3000; // will run on port 300

//route temo engine
app.get('/', (req, res) => {
    let view = {
        name: { first: "Bob", last: "Johnson" },
        age: "RIP"
    };
    let template = `
        <h1>Hello {{name.first}} {{name.last}}!</h1>
        <p>Age: {{age}}</p>
    `;
    let output = Mustache.render(template, view);
    res.send(output);
});

app.listen(PORT, () => {
    console.log(`It's working! Server is running on http://localhost:${PORT}`);
});
  // {
  //   "name": {
  //     "first": "Michael",
  //     "last": "Jackson"
  //   },
  //   "age": "RIP"
  // }
  

  // function renderHello() {
  //   fetch('template.mustache')
  //     .then((response) => response.text())
  //     .then((template) => {
  //       var rendered = Mustache.render(template, { name: 'Luke' });
  //       document.getElementById('target').innerHTML = rendered;    
  //     });
  // }