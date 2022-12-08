let animals = [{ type: "dog", sound: "woof" },
{ type: "cow", sound: "moo" },
{ type: "cat", sound: "meow" }]

let animal = prompt("amitnii neree oruulna uu");
function sounds(animal) {
    for (let i = 0; i < animals.length; i++) {
        if (animal == animals[i].type) {
            console.log(animals[i].sound);
        }
    }
}
sounds(animal)