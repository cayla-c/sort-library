// BubbleSort is long and slow - it's best and worst case is O(n^2).
// Like combing out tangles one by one with a fine-tooth comb.
// Going to iterate through from beginning to end repeatedly,
//   and within that, swap the current item with the next item, if needed;
//   the element at hand will "bubble" up to its rightful place.
// Space complexity is at least good: no recursion and you change the existing array in place so: O(1).

bubbleSort = (array) => {
  // set up your swapped variable:
  let swapped;
  // use a do/while - makes sure the "do" happens at least once!
  do {
    swapped = false;
    // first 2 args to forEach are element and index:
    // note that current and index are going to track together.
    array.forEach((current, i) => {
      // so this is current and the one after it:
      if (current > array[i + 1]) {
        // make the swap happen, then set swapped to true for that iteration:
        const temp = current;
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
      // swapped is true, so the iteration will continue - and the first thing that happens is it resets to false.
      // the algorithm needs one whole pass without a swap to know that it's done.
    })
    // the "while" at the end is the backstop; here while "swapped" is true:
  } while (swapped);
  // you're done!
  return array;
}

// BUT WAIT! THERE'S ANOTHER WAY:
// You can do this with nested loops and, once an element has "bubbled" to its rightful place, you can ignore the rest of the array after that.
// The inner loop has to get smaller every iteration it makes to do this.
// This aligns more with the videos you'll see, like the dancers - when they're in place, they turn around and stand still.
bubbleSort = (array) => {
  let swapped;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
  }
  return array;
}