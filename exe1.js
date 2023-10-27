//Exe.1
const arr = [1, 2, 'hello', 0, 'world', 3.14, 0, 5];
function getEvenNumb() {
  const evenNumbers = arr.filter(item => typeof item === 'number' && item % 2 === 0);
  console.log(`Четные числа: ${evenNumbers}`);
}
getEvenNumb ();

function getOddNumb() {
  const oddNumbers = arr.filter(item => typeof item === 'number' && item % 2 !== 0);
  console.log(`Нечетные числа: ${oddNumbers}`);
}
getOddNumb ();

function getZeros() {
  const zeros = arr.filter(item => typeof item === 'number' && item === 0);
  console.log(`Нули: ${zeros}`);
}
getZeros ();
