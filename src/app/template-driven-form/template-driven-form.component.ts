import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  // userForm = new FormGroup({
  //   name: new FormControl('', [ Validators.required,Validators.minLength(4),]),
  //   age: new FormControl('', [Validators.required, Validators.max(99) ,]),
  //   description: new FormControl('', [Validators.required,Validators.minLength(8),]),
  // });
  name:string
  age: string
  description: string
  show: boolean;
  edit_index: number | null;
  toastMessage: string;
  showError: boolean

  data: any = [];



  constructor() {
    let local_data = localStorage.getItem('user_data');
    this.name=""
    this.age=""
    this.description=""
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

  showToast() {
    const toastLiveExample = document.getElementById('toastBox');
    if (toastLiveExample) {
      toastLiveExample.style.display = 'none';
    }
  }

  create_data() {
    this.edit_index = null;

    this.name=""
  this.age=""
  this.description=""
  }

  onSubmit() {
    // console.log("---------------------------------------")
    // console.log(
    //   this.userForm.get('age')?.hasError('minlength')
    // )
    // console.log("---------------------------------------")
    this.showError = true


    if (this.edit_index == null) {
      this.data.push({
        name:this.name,
      age:this.age,
      description:this.description
      });
      this.name=""
      this.age=""
      this.description=""

    } else {
      // this.data[this.edit_index] = this.userForm.value;
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

    this.data.push({
      name :this.name,
      age:this.age,
      description:this.description,
    })

  }
}
