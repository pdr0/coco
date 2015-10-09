//ARROWS

//Syntax
var getValue = value => value;
var nameAndSurname = (name, surname) => console.log(name + ' ' + surname);
var getTempObj = id => (console.log({id: id, value: "Value"}));

nameAndSurname('Pedro', 'Selas');
getTempObj('id');
console.log(getValue('My Value'));


//Usage

var PageHandlerEs5 = {

  id: "123456",

  init: function() {
    document.addEventListener("click", (function(event) {
      this.doSomething(event.type);     // error
    }).bind(this), false);
  },

  doSomething: function(type) {
    console.log("Handling " + type  + " for " + this.id);
  }
};

var PageHandler = {

  id: "123456",

  init: function () {
    document.addEventListener("click",
      event => this.doSomething(event.type), false)
  },


  doSomething: function (type) {
    console.log("Handling " + type + " for " + this.id);
  }
};

() => console.log('Test')();
