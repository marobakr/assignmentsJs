// Convert To Arrow Function
checkerArrow = (zName) => {
  return (statusArrow = (status) => {
    return (salary = (salary) => {
      return status === 'Available'
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    });
  });
};
console.log(checkerArrow('Osama')('Available')(4000)); // Osama, My Salary Is 4000
console.log(checkerArrow('Ahmed')('Not Available')()); // Iam Not Avaialble