// - User can add a new book by adding the name, author and url of the image
// - Once added the book will be marked not read
// - You can change the state of the book to `Read` and it will be marked as completed
// - User can delete the book

let form = document.querySelector("form");

let listRoot = document.querySelector(".book-list");

let titleElm = form.elements.title;
let authorElm = form.elements.author;
let imgElm = form.elements.img;

class Book {
  constructor(title, author, img) {
    this.title = title;
    this.author = author;
    this.img = img;
    this.isRead = false;
  }
  switchIsRead() {
    this.isRead = !this.isRead;
  }
}

class BookList {
  constructor(list = []) {
    this.list = list;
  }

  addBook(title, author, img) {
    let book = new Book(title, author, img);
    this.list.push(book);
    this.createUI();
  }

  createUI() {
    listRoot.innerHTML = "";
    this.list.forEach((book) => {
      let li = document.createElement("li");
      li.classList.add("book");
      let img = document.createElement("img");
      img.src = book.img;
      let div = document.createElement("div");
      div.classList.add("book-content");
      let h2 = document.createElement("h2");
      h2.innerText = book.title;
      let p = document.createElement("p");
      p.innerText = book.author;
      let button = document.createElement("button");
      button.innerText = book.isRead ? "Completed" : "Mark as Read";
      button.addEventListener("click", () => {
        book.switchIsRead();
        this.createUI();
      });
      div.append(h2, p, button);
      li.append(img, div);
      listRoot.append(li);
    });
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = titleElm.value;
  let author = authorElm.value;
  let img = imgElm.value;
  library.addBook(title, author, img);
  titleElm.value = "";
  authorElm.value = "";
  imgElm.value = "";
});

let library = new BookList();
