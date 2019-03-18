import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'passingdata';

   employee =[

    {name:"abc", age:26, salary:30000},
    {name:"xyz", age:25, salary:40000},
    {name:"hj", age:24, salary:10000}

  
  ]

  public empdata:any={
  selectedname:'',
  selectedage:'',
  selectedsalary:''
  

  };

  public getrecord(data:any){
   this.empdata=data;

  }
}
