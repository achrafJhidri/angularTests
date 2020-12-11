import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public user : string = "achraf"
  constructor() { }

  public getData(){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        resolve('newData');
      },2000)
    })
  }
}
