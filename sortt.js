let person = {
  name: "John Doe",
  age: 30,
  email: "johndoe@example.com",
  hobbies: ["reading", "running", "traveling"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
  }
};

console.log(`Name: ${person.name}`);
console.log(`Age: ${person.age}`);
console.log(`Email: ${person.email}`);
console.log(`Hobbies: ${person.hobbies.join(", ")}`);
console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.state} ${person.address.zip}`);
