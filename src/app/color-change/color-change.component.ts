import { Component } from '@angular/core';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.component.html',
  styleUrl: './color-change.component.css'
})
export class ColorChangeComponent {

  inputNumber: number = 0

  colorInputValue: number = 0

  inputVal: any


  changeValue(){

    this.inputVal= document.getElementById("changeColor")
    this.inputVal.innerHTML = this.inputVal.innerHTML.replace("c", 'p');
    // this.inputVal.innerHTML.replace("c", '<span style="color:blue">s</span>');


    console.log(this.inputVal.innerHTML)


  }





}
