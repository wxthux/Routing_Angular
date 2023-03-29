import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private http:HttpClient){

  }

  ngOnInit():void{
    this.getMethod(),
    this.postMethod();
  }
 
  title = 'NewApplication';

  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe((data) =>{
      console.log(data);
      this.getJsonValue= data;
    })
  };

  //https://jsonplaceholder.typicode.com/posts/1

  public postMethod(){
    this.http.post('https://jsonplaceholder.typicode.com/posts',{}).subscribe((data) =>{
      console.log(data);
      this.postJsonValue= data;
    
  
  })
 
  };

}

