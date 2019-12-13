function printDetails(person) {
  const age = person.age ? person.age : 0;
  const country = person.country ? person.country : 'Ghana';

  console.log(`hello ${person.name} form ${country} with age ${age} years`);
}

printDetails({ name: 'peter', age: 29 });
