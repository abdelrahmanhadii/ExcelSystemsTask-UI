import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newForm:FormGroup;
  constructor(private service:BooksService, public datepipe: DatePipe, private router:Router) { 
    this.newForm = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      author: new FormControl(),
      price: new FormControl(),
      publishingDate: new FormControl()
   });
  }

  ngOnInit() {
  }
  create(){
    console.log(this.newForm);
    this.service.create(this.newForm.value).subscribe(
      success=>{
        this.router.navigate(['/allbooks']);
      },
      error=>{
        window.alert('Error inserting data, try again!');
      }
    );
  }
}
