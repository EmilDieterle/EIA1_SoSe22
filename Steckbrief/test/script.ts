window.addEventListener("load", function() {

interface persons {

    name: string,
    age: number,
    hair: string
    friends: number;
}

var emil: persons = {
name: "Emil",
age: 21,
hair: "brown",
friends: 8
}

var emillian: persons = {
    name: "Emillian",
    age: 20,
    hair: "blonde",
    friends: 5
    }

var emilio: persons = {
    name: "Emilio",
    age: 19,
    hair: "black",
    friends: 3
    }
    
console.log(emil);
console.log(emillian);
console.log(emilio);

var names: persons[] = [
{   name: "Emil",
    age: 21,
    hair: "brown",
    friends: 8
},
{   name: "Emillian",
    age: 20,
    hair: "blonde",
    friends: 5
},
{
    name: "Emilio",
    age: 19,
    hair: "black",
    friends: 3
},
];

console.log(names);

for (let index = 0; index < names.length; index++) {
        console.log(names[index].name);
        console.log(names[index].age);
        console.log(names[index].hair);  
        console.log(names[index].friends);  
}

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    
}
    




})