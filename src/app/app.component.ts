import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg=10;
  name = 'Jose';
  age=18;
  img="https://www.w3schools.com/howto/img_avatar.png"
  btnDisabled=true;

  register={
    name:'',
    email:'',
    password:'',
  }

  person={
    name :'Jose',
    age:18,
    avatar:"https://www.w3schools.com/howto/img_avatar.png"
  }

  names:string[]=['Nico', 'Juli', 'Santi'];
  newName='';

  box={
    width:100,
    height:100,
    background:'red'
  };

  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/img/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/img/bike.png'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/img/album.png'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/img/books.png'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/img/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/img/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled= !this.btnDisabled;
  }

  increaseAge(){
    this.person.age+=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;// aqui le decimos que el evento va hacer de tipo html
    console.log(element.scrollTop);//a dicho evento se le agregar un scrollbar con la sintaxis element.scrollTop
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name=element.value // lo que este dentro de name lo vamos a cambiar por lo que tenga el input como valor
  }

  addName(){
    this.names.push(this.newName)//agrega un un nuevo elemento al arreglo names
    this.newName='';//borra el elemento del input despues de agregarlo
  }

  deleteName(index:number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register)
  }

}
