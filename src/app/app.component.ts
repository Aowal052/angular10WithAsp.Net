import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
const USER_INFO = [
  {"name": "John Smith", "occupation": "Advisor", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
];
const USER_SCHEMA = {
  "name": "text",
  "occupation": "text",
  "age": "number",
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngurlTest';
  name = 'Angular';
  displayedColumns: string[] = ['name', 'occupation', 'age', 'Action', '$$edit'];
  dataSource = USER_INFO;
  dataSchema = USER_SCHEMA;
  productForm: FormGroup;
   
  constructor(private fb:FormBuilder) {
   
    this.productForm = this.fb.group({
      name: '',
      Tasks: this.fb.array([]) ,
    });
  }
  
  quantities() : FormArray {
    return this.productForm.get("Tasks") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      tskQty: '',
      site: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }
}
