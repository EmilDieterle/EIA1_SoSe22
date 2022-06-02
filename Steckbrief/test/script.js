window.addEventListener("load", function () {
    var emil = {
        name: "Emil",
        age: 21,
        hair: "brown",
        friends: 8
    };
    var emillian = {
        name: "Emillian",
        age: 20,
        hair: "blonde",
        friends: 5
    };
    var emilio = {
        name: "Emilio",
        age: 19,
        hair: "black",
        friends: 3
    };
    console.log(emil);
    console.log(emillian);
    console.log(emilio);
    var names = [
        { name: "Emil",
            age: 21,
            hair: "brown",
            friends: 8
        },
        { name: "Emillian",
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
});
//# sourceMappingURL=script.js.map