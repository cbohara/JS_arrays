(function() {
  'use strict';

  window.arrays = {};
// Arrays!

// As with Objects, we're trying to get you enough repetition to the point where this is instinctive. If any of it starts to feel repetitive, that's awesome! To facilitate this, keep writing new code for each exercise; don't copy and paste previous code. Practicing these keystrokes is super valuable.

// Arrays are great places to store lists of similar information.
// Where objects have property names to denote the different slots you can store data in, arrays have numbered indices.

// 0-indexed
// array.length
// push
// pop
// unshift
// shift
// numerically indexed
// accessing using variables
// create an array of mysticalAnimals called grandCouncil
// you access data from an array by just asking for the value stored at a certain numbered position.

// Arrays are 0-indexed. That is, the first thing that you put in there will go in at index 0. So if you have 3 things in your array, they will be at arr[0], arr[1], and arr[2].

arrays.treasureChest = function(){
  // 1. Create an empty array called treasureChest.
  // 2. place your treasureChest after the return statement
  return;
};

 // don't touch this line
var treasureChest = arrays.treasureChest();



arrays.addFurJackets = function(){
  // 1. Let's make the value at position 0 'fur jackets'.
  // 2. place your treasureChest after the return statement
  return;

}


arrays.overWriteValue = function(){
  // don't touch this line
  var newTreasureChest = treasureChest.slice();
  // 1. console.log newTreasureChest
  // 2. Overwrite the value stored at position 0 of newTreasureChest to be 'ethically sourced sandals'.
  // 3. place your newTreasureChest after the return statement
  return;
}

arrays.checkLength = function(){
  // 1. return the length of treasureChest array?
  return;
}

  // That's right, even though our array is 0-indexed (starts counting at 0), our length property that JS gives us automatically is 1-indexed (starts counting at 1). So right now we have an array with a value stored at position 0, and a length of 1.

arrays.addFriends = function(){
  // 1. Now let's add the string 'friends' to the end of our array.
  // 2. place your treasureChest after the return statement
  // return
 return;
  
}
 
 /**************** About push(), pop(), unshift() & shift() methods ****************/

    // push: arr.push(value); .push() is a method built into all arrays. It's a very simple and useful method. All it does is add a value to the end of an array. treasureChest.push('friends'); will add the string 'friends' to the end of our treasureChest array.
      // Let's talk through exactly what happens when we invoke treasureChest.push('peacock feathers'):
      // First, the interpreter reads left to right, so it evaluates the variable on the left side. It looks this up and finds it's an array, so it 'replaces' the variable with the array that variable is equal to. Now instead of treasureChest, we have an actual array.
      // Next we invoke a method on that array. We're just using dot notation here like we learned yesterday! The only thing that's slightly different is that this property is a function.
      // As we'll get to later in the week, we need to invoke functions to make them run. So we invoke this function by putting the open and closed parentheses () next to it, and then we pass in an argument.
      // That argument is simply an item that we want to add to the end of our array. It could be anything (a string, a number, even an object, or another array that will be nested within our original array!).
      // Push then adds the item to the next open position in our array, and the array properties that are built in for us by default will update the length for us.
      // Push is a method you will use all the time. In summary, you invoke it on an array, and pass in as an argument the item you want to add onto the end of the array.

arrays.addThreeValues = function () {
  // 1. Using push, add three values to the end of our treasureChest. Make up your own ideas of things that our dragon might collect in her treasureChest!
  // Be sure to console.log your treasureChest after each one to see what the results are.
  // We should now have at least 5 things in our treasureChest array. Mine looks like this: ['ethically sourced sandals', 'friends', 'rock climbing gear', 'JS knowledge', 'colored pants'].
  // 2. place your treasureChest after the return statement
  return;
  
}

//Go through and access each value in the array. This might feel tedious, but building up the muscle memory of it will be really helpful later on when you don't even have to think about this anymore!
// While .push is by far the most used array method, there are a couple others worth knowing that they exist, though you won't need to have them memorized like you should have .push memorized.


// .pop() will take the last value out of an array and give it to you.

arrays.removeLastItem = function(){
  // 1. use .pop() method to return the last value in the treasureChest array;
  // 2. console log treasureChest. What does your array look like afterwards?
  // 3. place your treasureChest after the return statement
  return;

  
}
// .unshift() works just like push, but for the start of our array (Hint: both unshift and push have the letter 'u' in their names).

arrays.addFirstItem = function(){
  // 1. use .unshift() to add the value 'peg leg' to the beginning of the treasureChest array.
  // 2. place your treasureChest after the return statement
   return;

}

// .shift() works just like pop, but for the start of our array (Hint: shift is shorter than unshift, just like pop is shorter than push).

arrays.removeFirstItem = function(){
  // 1. use .shift() to remove the value 'peg leg' from the beginning of the treasureChest array.
  // 2. place your treasureChest after the return statement
   return;

};



                      /*****************************/

                               //Extra Credit      

                      /*****************************/

// 10. Now that we've populated treasureChest, let's add that to the mysticalAnimal object we created yesterday. We had a property on there called collects. Overwrite that property with the trasureChest array we've been playing with. console.log the mysticalAnimal object afterwards to make sure the collects property is now set equal to your array.
// 11. Create an empty array called grandCouncil. This is where we'll store all of the mysticalAnimal objects we'll create!

// 12. Now create three new objects. Each object should have the following properties:
  // type- a string specifying what type of mysticalAnimal this is. Unicorns and dinosaurs and yeti and Loch Ness Monsters and polar bears and red pandas are all viable options!
  // collects- an array with a few things this animal might collect
  // canFly- a boolean (true or false- no strings around it, these are reserved keywords) representing whether this animal can fly or not.

// 13. Now add these onto the end of our grandCouncil array using the three methods outlined above (hard coding in an index position to add it to: arr[3]; utilizing the .length property: arr[arr.length]; push: arr.push(objName) ).

// 14. Whoops- looks like one of our mysticalAnimals melts too easily in the presence of Leslie the Dragon. Let's overwrite the value stored at the index 2 in our array with the string 'open position available!'. Check what grandCouncil looks like after overwriting this value.

// Congratulations! You've now gotten in a decent bit of practice using arrays and understanding the different ways to add and access values from them.
  // To recap:
  // Objects:
    // A great place to store different pieces of data all tied to one thing. For example, storing name and address and phone number for a user.
    // The indices for an object are property names
    // You can access the values in an object using dot notation (if the thing after the dot is exactly the name of the property you want to look up), or bracket notation (if you want to pass in either a variable or a string).
  // Arrays:
    // Great places to store lists of information (a list of all the stores a certain chain has open, a list of your friends, a list of numbers).
    // Arrays are numerically indexed- each position in an array is represented by a number
    // Arrays have a .push() method which adds a value onto the end of an array
    // Arrays have a .length proeprty which automatically udpates with the length of the array
    // Arrays are 0-indexed. That is, the first item you add into an array is stored at the 0th position, arr[0].
    // Values in arrays must be accessed using bracket notation
// We've gone over how to access individual values from arrays and objects, but you're probably curious if there's an easier way to access all the values in an array or object. We've mentioned the two different types of loops we have available for arrays and objects, and tomorrow we're going to practice them in more depth! Loops are great ways of accessing all the values in an array or object efficiently.


}());


