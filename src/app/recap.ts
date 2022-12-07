const username:string='nicobytes';
const sum=(a:number, b:number)=>{
  return a+b;
}

sum(1,3);

class persona{
  /* age:number;
  lastName:string; */

  constructor(public age:number, public lastName:string){
   /*  this.age=age;
    this.lastName=lastName; */
  }
}

const jose=new persona(15, 'maria')
jose.age;
