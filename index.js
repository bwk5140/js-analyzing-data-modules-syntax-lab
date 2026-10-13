


require('datejs');

function combineUsers(...args){
  let combinedObject = {users: []}
  for (array of args){
    combinedObject['users'].push(...array);
  }
  combinedObject['merge_date'] = Date.today().toLocaleDateString();
  return combinedObject;
}

const combinedArray = combineUsers(
  [{ name: "Brian"}, {name: "Jane"}], 
  [{age: 35}, {age: 26}], 
  [{job: "Engineer"}, {job: "Doctor"}]);

console.log(combinedArray);

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};