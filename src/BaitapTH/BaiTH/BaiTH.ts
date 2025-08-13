class Book {
    protected id: number
    protected title: string
    protected author: string
    protected year: number
    constructor(id: number,
    title: string,author: string,year: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
class Library <T extends {id: number, name: string, author: string}>{
    //Tao mang chua sach trong thu vien
    books: T[] = [];
    //Dinh ngia them phuong thuc
    //1>them sach vao thu vien
    addBook(book: T){
        this.books.push(book);
    }
    //Tim sach theo id(neu co tra ve sach, khong tra ve undefine)
    getBookById(id: number): T | undefined{
        return this.books.find(item => item.id === id)
    }
    //3.VIet cac ham trien khai ung dung 
    removeBookById(id : number,): void{
        let index = this.books.findIndex(item => item.id ==id);
        if(index == -1){
            console.log("Khong co sach ban can tim");
        } else{
            let confirmDelete = confirm(`Ban co muon xoa sach: ${this.books[index].name}khong?`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    //4.Cap nhat thong tin cho sach
    updateBook(id: number, new_book:T): void{
        const bookIndex = this.books.findIndex(item => item.id == id);
        if(bookIndex == -1){
            console.log("Khong co sach ban can tim");
        } else{
            let confirmCorrect = confirm(`Ban co muon sua sach: ${this.books[bookIndex].name} khong?`);
            if (confirmCorrect) {
                this.books[bookIndex] = new_book;
                console.log(`Thay doi thong tin sach thanh cong`)
            }
        }
    }
    //5. Lay danh sach tat ca sach trong thu vien
    //6.Tim sach theo ten
    findBookByTitleOrAuthor(searchTerm: string): T[]{
        const lowerTerm = searchTerm.toLowerCase();
        return this.books.filter(item => item.author.toLowerCase().includes(lowerTerm))
    }
}

