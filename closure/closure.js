```js
#1
function nonsense(string) {
    var blab = function(){
        alert(string);
      };
      blab();
}

```

```js
#2
function nonsense(string) {
    var blab = function(){
        alert(string);
      };
      setTimeout(blab, 2000);      
}

```
// Now, instead of calling `blab` inside of `nonsense`, return `blab` (without invoking it). Call `nonsense` with some string and store the returned value (the `blab` function) in a variable called `blabLater`. Call `nonsense` again with a different string and store the returned value in a variable called `blabAgainLater`.
```js
#3
function nonsense(string) {
    var blab = function(){
        alert(string);
      };
      return blab;
}
var blabLater = nonsense("AltCampus");
var blabAgainLater = nonsense("Dharamshala");
```

```js
#4
blabLater();
blabAgainLater();

```

```js
#5
var lastNameTrier = function(firstName){
    var firstName = firstName;
    

     var innerFunction = function() {
         //does stuff
         console.log(firstName+" "+lastName);
     };
     //maybe returns something here
     return innerFunction;
 };
 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown');



```

