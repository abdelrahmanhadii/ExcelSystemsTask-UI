import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { EnviromentService } from './enviroment.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("Token")
  })
  constructor(private http:HttpClient, private env:EnviromentService) {
  }

  getAll(){
    return this.http.get<Book[]>(this.env.baseURL + "/books/getall", { headers : this.header });
  }
  delete(id:number){
    return this.http.get<number>(this.env.baseURL + "/books/delete/" + id, { headers : this.header });
  }
  update(book:Book){
    return this.http.post<number>(this.env.baseURL + "/books/edit", book, { headers : this.header });
  }
  create(book:Book){
    return this.http.post<Book>(this.env.baseURL + "/books/new", book, { headers : this.header });
  }
}
