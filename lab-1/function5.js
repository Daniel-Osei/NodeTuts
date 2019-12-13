function printDetails(person) {
  const age = person.age ? person.age : 0;
  const country = (person.country ? person.country : 'Ghana')

  return `Hello ${person.name} from ${country} with age ${age} years`;
}

const message = printDetails({ name: 'peter', age: 29 });
console.log(message);
