import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { Book } from 'src/app/book';
import { Button } from 'primeng/primeng';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  createBool:boolean = true;
  public bookList:Book[];
  public isEditable=false;
  constructor(private service:BooksService, private router: Router) { }

  ngOnInit() {
    this.getAll();
  }
  //get all books
  getAll(){
    this.service.getAll().subscribe(
      a=>{
        a.forEach(function(book){
          book.edit = false;
        });
        this.bookList = a
      },
      b=>{
        this.router.navigate(['/login']);
      }
    );
  }
  //delete by id
  delete(value){
    if(window.confirm("Are you sure to delete?")) {
      this.service.delete(value).subscribe(a => {
        if (a > 0) {
          this.getAll();
        }
      });
    }
  }
  //update
  editEnable(book:Book, t){
    console.log(book);
    if (book.edit) {
      t.innerText = "Edit";
      book.edit = false;
    }else{
      t.innerText = "Cancel";
      book.edit = true;
    }
  }
  //save after update
  save(book:Book){
    this.service.update(book).subscribe(
      success=>{
        this.getAll();
      },
      error=>{
        this.router.navigate(['/login']);
      }
    );
  }
  createBtn(t){
    if(this.createBool){
      t.innerText = "Cancel";
      this.createBool = false;
    }else{
      t.innerText = "New";
      this.createBool = true;
    }
  }
}
