const express = require('express');

const hbs = require('hbs');

var app= express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('View engine','hbs');

app.use(express.static(__dirname+'/public'));

app.get('/', (req,res)=>{
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name:'Durga raj Mutha',
    id:123432,
    Dept: 'EEE',
    likes: [
      'cycling',
      'biking'
    ]

  })
});

app.get('/about',(req,res) =>{
  res.render('about.hbs',{
    pageTitle : 'About Page',
    currentYear :new Date().getFullYear()
  });

});

app.get('/help',(req,res) =>{
  res.render('help.hbs',{
    welecomeTitle: 'Welecome to my page',
    pageTitle : 'Help Page',
    currentYear :new Date().getFullYear()
  })
});

app.get('/bad', (req,res)=>{
  res.send({
    errorMessage: 'Handling error, please visit back'
  });

});

app.listen(3000,()=>{
  console.log('Server is up on port 3000');
});
