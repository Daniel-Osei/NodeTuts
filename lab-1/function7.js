function printDetails(person) {
  if (!person.name) {
    return 'you forgot the name';
  }
//can be written as
// if (!person.name) return 'you forgot the name';

//When you deal with if-statements on a single line you can
// actually just leave out the function body marking { }


//guard clausing
  const age = person.age ? person.age : 0;
  const country = person.country ? person.country : 'Ghana';

  return `Hello ${person.name} from ${country} with age ${age} years`;
  console.log('You made it here boss!!!');
}

const message = printDetails({ age: '29' });
console.log(message);
