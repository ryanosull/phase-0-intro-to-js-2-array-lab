// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name);
    console.log(name);
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    //console.log(name);
}
function destructivelyRemoveLastCat(){
    cats.pop()
   // console.log()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
    //console.log()
}
function appendCat(name){
    const copyOfCats = [...cats,name];
    return copyOfCats
  }
function prependCat(name){
    return [name, ...cats]
}
function removeLastCat(){
   // console.log(cats.slice(0, cats.length-1))
    return cats.slice(0, cats.length-1)
}
function removeFirstCat(){
   // console.log(cats.slice(1))
    return cats.slice(1)
}
