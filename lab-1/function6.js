function printDetails(person) {
  const age = person.age ? person.age : 0;
  const country = (person.country ? person.country : 'Ghana')

  return `Hello ${person.name} from ${country} with age ${age} years`;
  console.log('You have made it here boss!!!'); //this line is ignored
}
// So when you return, you stop a function from executing from that point on as well! 
const message = printDetails({ name: 'peter', age: 29 });
console.log(message);
