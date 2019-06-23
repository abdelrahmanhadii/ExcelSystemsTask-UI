import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviromentService {

  btnName;
  baseURL = "http://localhost:61086";
  constructor() { }
}
