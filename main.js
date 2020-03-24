/******************
 * YOUR CODE HERE *
 ******************/
const triple = function(num){
  return num*3
}
const tripleAll = function(nums){
  return nums.map(triple)
}
const getNegativeValue = function(num){
  return num>0 ? num*(-1) : num
}
const negativeValues = function(nums){
  return nums.map(getNegativeValue)
}
const makeQuestion = function(str){
  return str+'?'
}
const questionings = function(arr){
  return arr.map(makeQuestion)
}
const getInitials = function(str){
  return str.split(' ')[0][0] + str.split(' ')[1][0]
}
const changeToInitials = function(arr){
  return arr.map(getInitials)
}
const doubleIfEven = function(num){
  return num%2===0 ? num*2 : num
}
const doubleEven = function(nums){
  return nums.map(doubleIfEven)
}
const cases = function(x,i,arr){
  arr[i] = x[0].toUpperCase()+x.slice(1,x.length).toLowerCase()
}
const cases2 = function(str){
  let arr = str.split(' ')
  arr.forEach(cases)
  return arr.join(' ')
}
const titleCaseNames = function(arr){
  return arr.map(cases2)
}
const double = function(num,i){
  return i%2!==0 ? num*2 : num
}
const doubleEveryOther = function(nums){
  return nums.map(double)
}



/********************************
 * OUR CODE HERE - DON'T TOUCH! *
 ********************************/

if (typeof triple === 'undefined') {
  triple = undefined;
}

if (typeof tripleAll === 'undefined') {
  tripleAll = undefined;
}

if (typeof getNegativeValue === 'undefined') {
  getNegativeValue = undefined;
}

if (typeof negativeValues === 'undefined') {
  negativeValues = undefined;
}

if (typeof makeQuestion === 'undefined') {
  makeQuestion = undefined;
}

if (typeof questionings === 'undefined') {
  questionings = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleIfEven === 'undefined') {
  doubleIfEven = undefined;
}

if (typeof doubleEven === 'undefined') {
  doubleEven = undefined;
}

if (typeof changeToTitleCase === 'undefined') {
  changeToTitleCase = undefined;
}

if (typeof titleCaseNames === 'undefined') {
  titleCaseNames = undefined;
}

if (typeof doubleIfOddIndexed === 'undefined') {
  doubleIfOddIndexed = undefined;
}

if (typeof doubleEveryOther === 'undefined') {
  doubleEveryOther = undefined;
}


module.exports = {
  triple,
  tripleAll,
  getNegativeValue,
  negativeValues,
  makeQuestion,
  questionings,
  getInitials,
  changeToInitials,
  doubleIfEven,
  doubleEven,
  changeToTitleCase,
  titleCaseNames,
  doubleIfOddIndexed,
  doubleEveryOther,
}
