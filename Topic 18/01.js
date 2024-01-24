let output = window.prompt('Print Number From  To', 'Example: 5-20');
if (output) {
  let number = output.split('-');
  let min = Math.min(...number);
  let max = Math.max(...number);

  for (let i = min; i <= max; i++) {
    console.log(i);
  }
}
