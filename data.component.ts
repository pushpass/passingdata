import {Input,Output,Component,EventEmitter}  from '@angular/core';


@Component({

    selector:'data-component',
    template:`<div>ename:{{ename}}</div>
    <div>eage:{{eage}}</div>
    <div>esalary:{{esalary}}</div>
    <button (click)="selectrecord()">select record</button>
    `
})

export class DataComponent{

@Input()  ename:string;
@Input()  eage:number;
@Input()  esalary:number;
@Output() sendRecord: EventEmitter<any> = new EventEmitter();

public selectrecord(){
    let empobj:any = {
   selectedname:this.ename,
   selectedage:this.eage,
   selectedsalary:this.esalary
   
    };
    this.sendRecord.emit(empobj);
}


}