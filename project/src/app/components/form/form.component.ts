import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  capacity: string = '';
  speed: string = '';
  time: string = '';
  status: 'risk' | 'success' | 'warn' | null = null;
  percentages: number = 0;
  allFieldsRequired: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void{

if(!this.checkFields()){

    const result = (Number(this.speed) * Number(this.time)) / Number(this.capacity) * 100;
    this.percentages = Number(((result/100)*100).toFixed(0));
    
    if(this.percentages >= 80 && this.percentages <= 99){
      this.status = 'warn';
    }else if(this.percentages >= 100){
      this.status = 'risk';
    }else{
      this.status = 'success';
    }

    this.capacity = '';
    this.speed = '';
    this.time = '';
  }else{
    this.allFieldsRequired = true;
  }
}

hideAlert(): void{
  this.status = null;
}

checkFields(): boolean{
return this.capacity === '' || this.speed === '' || this.time === '';
}
}

