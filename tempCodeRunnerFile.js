var person = {
    name : "ნინია",
    lastame : "ბერიძე",
    id : 15002341268,
    weight : "79kg",
    height : "182cm",
    age : 29,
    password : "Igriale-oqro",
}
// ობიექტებთან სამუშაოდ ვიყენებთ for ციკლს
// სინტაქსი : ვაცხადებთ for() ციკლს რომელშიც ვქმნით ცვლადს და საკვანძო სიტყვა "in" ით ვუთითებთ რომელ ობიექტსაც უნდა ემუშაოს, ობიექტის სახელს
for(var key in person) {
    console.log(key); 
    console.log(person[key]);
    
}