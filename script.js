let inputElement = document.getElementById('display');

function displ(num) {
  inputElement.value = inputElement.value + num;
}
function dl() {
  inputElement.value = inputElement.value.slice(0, -1);
}
function eql() {
  let x = inputElement.value;
  let y = eval(x);
  inputElement.value = y;
  if (x == '') {
    inputElement.value = 'Please enter';
  }
}
function rst() {
  inputElement.value = '';
}
