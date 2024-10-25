import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorDirective]'
})
export class ColorDirectiveDirective {

  listElement:any

  constructor(element : ElementRef) {
    // element.nativeElement.style.backgroundColor =" red"
    // console.log(element.nativeElement )

    this.listElement = document.getElementById("listBox")



    element.nativeElement.addEventListener("input", (e:any)=>{
      // console.log("iiiiiiiiiiiii",  e.target.value)



      element.nativeElement.value = element.nativeElement.value.replace('-', "");

      if(e.target.value % 2 === 0 ){
        this.listElement.style.background= "red"
      }
      if(e.target.value % 2 !== 0 ){
        this.listElement.style.background= "blue"
      }
      if(e.target.value < 0 && e.target.value % 2 === 0 ){
        this.listElement.style.background= "white"
      }
      if(e.target.value < 0 && e.target.value % 2 !== 0  ){
        this.listElement.style.background= "green"
      }
    });

  }

}
