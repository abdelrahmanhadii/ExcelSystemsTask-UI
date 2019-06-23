export class Book { 
    constructor(
    public id:number,
    public name:string,
    public description:string,
    public author:string,
    public publishingDate:Date,
    public price:number,
    public edit:boolean){
        edit = false;
    }
}
