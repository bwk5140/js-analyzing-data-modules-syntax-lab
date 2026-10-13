/*
 * Purpose: Using Rest and Spread syntax to combine an unknown number
*           of arrays into a single array, then combining the elements
*           of each array into another array 
* Owner: Brian Karimi
* Date: 13 October 2026
* Last Modification: 15:25 hrs 
* 
*/

require('datejs');

// Utility: Combine an unknown number of arrays into a single array
//          using Rest syntax, looping through each array, and 'spreading'
//          the elements using Spread syntax, to then add them to the users
//          property of a combined object
// Params: A group of arrays combined into a single array (using Rest syntax)
//         i.e (Arr1[], Arr2[], Arr3[],.......,Arr100[],...)
// Returns: An object with combined elements of each array
function combineUsers(...args){
  let combinedObject = {users: []}
  for (array of args){
    combinedObject['users'].push(...array);
  }
  combinedObject['merge_date'] = Date.today().toLocaleDateString();
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};