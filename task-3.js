const findBestEmployee = function (employees) {
  let maxNum = 0;
  let nameEmployee;

  for (let employee in employees) {
    if (employees[employee] > maxNum) {
      maxNum = employees[employee];
      nameEmployee = employee;
    }
  }
  return nameEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
