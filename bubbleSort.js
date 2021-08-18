// bubbleSort is long and slow with randomized things;
// it's going to iterate through from i to the end,
//   and within that, iterate from i to the end again (so O(n^2))
//   each time swapping a pair for low/high if needed.
// this happens in place, so it's not bad on space usage.

bubbleSort = (array) => {
  // set up your swapped variable:
  let swapped;
  // use a do/while - makes sure the "do" happens at least once!
  do {
    swapped = false;
    // first 2 args to forEach are element and index:
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
      // after the last iteration, it will remain at "true" and then we know we're at the end.
    })
    // the "while" at the end is the backstop; here while "swapped" is true:
  } while (swapped);
  // you're done!
  return array;
}