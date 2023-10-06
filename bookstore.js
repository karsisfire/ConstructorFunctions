
function Author(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}
function Book(title, author, genre, price){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
    this.getBookInfo = function(){
        let info = this.title + " " + this.author.name + " " + this.genre + " " + this.price;
        return info;
    }
}
const Arr = [
    new Book("Cow", new Author("Harsh", 2001, "Indian"), "animal", 50),
    new Book("Pig", new Author("Karsh", 2002, "Nigeria"), "animal", 60),
    new Book("Dog", new Author("Barsh", 2003, "Indian"), "animal", 70),
    new Book("Cat", new Author("Harsh", 2001, "Indian"), "animal", 55),
    new Book("Buffalo", new Author("Lambor", 1978, "Italian"), "animal", 500)
]
for(let i = 0; i < 5; i++){
    console.log(Arr[i].getBookInfo());
}
