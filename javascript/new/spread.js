const details = {
  name: 'Effa',
  style: {
    color: 'red',
  },
};

const newDetails = {
  ...details,
};
newDetails.name = 'green';
console.log(newDetails);
console.log(details);
