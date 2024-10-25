import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

interface Data {
  name: string;
  profile: string;
}

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {
//     const forbidden = nameRe.test(control.value);
//     return forbidden ? {forbiddenName: {value: control.value}} : null;
//   };
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [ Validators.required,Validators.minLength(4),]),
    age: new FormControl('', [Validators.required, Validators.max(99) ,]),
    description: new FormControl('', [Validators.required,Validators.minLength(8),]),
  });

  show: boolean;
  edit_index: number | null;
  toastMessage: string;
  showError: boolean

  data: any = [];


  checkPipe: string ="todayIsGoodDay"

  constructor() {
    let local_data = localStorage.getItem('user_data');
    this.toastMessage = '';
    this.show = false;
    this.edit_index = null;
    this.showError = false
    if (local_data) {
      this.data = JSON.parse(local_data);
    }
  }

  ngOnInit(): void {}

  saveData(data: any) {
    this.showToast();
    localStorage.setItem('user_data', JSON.stringify(data));
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }
  fun(){
    console.log("ooooooooooooo")
  }

  showToast() {
    const toastLiveExample = document.getElementById('toastBox');
    if (toastLiveExample) {
      toastLiveExample.style.display = 'none';
    }
  }

  create_data() {
    this.edit_index = null;
    this.userForm.reset()
  }

  onSubmit() {
    // console.log("---------------------------------------")
    // console.log(
    //   this.userForm.get('age')?.hasError('minlength')
    // )
    // console.log("---------------------------------------")
    this.showError = true
    if(this.userForm.get('name')?.errors || this.userForm.get('age')?.errors|| this.userForm.get('description')?.errors){
      return
    }


    if (this.edit_index == null) {
      this.data.push(this.userForm.value);
      this.userForm.reset();

    } else {
      this.data[this.edit_index] = this.userForm.value;
      this.edit_index = null;
    }
    this.toastMessage = 'data save successfully';
    document.getElementById("submitBtn")?.setAttribute( "data-bs-dismiss", "modal")
    document.getElementById("submitBtn")?.click()
    document.getElementById("submitBtn")?.removeAttribute("data-bs-dismiss");

    this.showError = false

    this.saveData(this.data);
  }

  deleteRow(index: number) {
    this.data.splice(index, 1);
    this.toastMessage = 'Row deleted successfully';
    this.saveData(this.data);
  }

  editRow(index: number) {
    this.showToast();

    this.edit_index = index;
    console.log(this.edit_index);

    this.userForm.reset({
      name: this.data[index].name,
      age: this.data[index].age,
      description: this.data[index].description,
    });
  }
}
