"use strict";
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library {
    constructor() {
        //Tao mang chua sach trong thu vien
        this.books = [];
    }
    //Dinh ngia them phuong thuc
    //1>them sach vao thu vien
    addBook(book) {
        this.books.push(book);
    }
    //Tim sach theo id(neu co tra ve sach, khong tra ve undefine)
    getBookById(id) {
        return this.books.find(item => item.id === id);
    }
    //3.VIet cac ham trien khai ung dung 
    removeBookById(id) {
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log("Khong co sach ban can tim");
        }
        else {
            let confirmDelete = confirm(`Ban co muon xoa sach: ${this.books[index].name}khong?`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    //4.Cap nhat thong tin cho sach
    updateBook(id, new_book) {
        const bookIndex = this.books.findIndex(item => item.id == id);
        if (bookIndex == -1) {
            console.log("Khong co sach ban can tim");
        }
        else {
            let confirmCorrect = confirm(`Ban co muon sua sach: ${this.books[bookIndex].name} khong?`);
            if (confirmCorrect) {
                this.books[bookIndex] = new_book;
                console.log(`Thay doi thong tin sach thanh cong`);
            }
        }
    }
    //5. Lay danh sach tat ca sach trong thu vien
    //6.Tim sach theo ten
    findBookByTitleOrAuthor(searchTerm) {
        const lowerTerm = searchTerm.toLowerCase();
        return this.books.filter(item => item.author.toLowerCase().includes(lowerTerm));
    }
}
