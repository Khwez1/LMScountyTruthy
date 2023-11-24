let Output = document.getElementById('Display');
let Btn = document.getElementById('Action');
// The array 
let truArray = [true, false, true, false, true, true, false, false, true];
// function 
function countTruthy(truArray) {
  let truth = 0;
  // array Loop 
  for (let truVal of truArray) {
    // Input Validation
    if (typeof truVal !== 'boolean') {
      return "Enter only boolean values";
    }
    if (truVal === true) {
      truth++;
    }
  }
  return truth;
}
// 
function cntTru () {
    let truth = countTruthy(truArray);
    Output.value = (typeof truth === 'number') ? truth : truth;
}

Btn.addEventListener('click',cntTru);
