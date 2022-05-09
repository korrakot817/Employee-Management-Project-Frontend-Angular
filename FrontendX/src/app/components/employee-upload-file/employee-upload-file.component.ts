import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-upload-file',
  templateUrl: './employee-upload-file.component.html',
  styleUrls: ['./employee-upload-file.component.scss']
})
export class EmployeeUploadFileComponent implements OnInit {

  id: any;
  test: any;
  response: any;

  urls: any;
  fileupload: any[] = [];
  img_file_input: any[] = [];
  
  uploadImageFormGroup: FormGroup = new FormGroup({
    
    file: new FormControl('',Validators.required),
  
  });

  constructor(

    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute


  ) { }

  ngOnInit(): void {

    this.test = this.route.snapshot.queryParamMap.get('id');

    this.id = JSON.parse(this.test);
    console.log(this.id);

  }

  detectFiles(event: any) { 

    let files = event.target.files;
    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
         
            this.fileupload[0]=event.target.files[0]

            console.log(this.fileupload);

        }

        
        reader.readAsDataURL(file);
      }
    }
  }

  onSubmit(): void{
    console.log(3432432434343);
  

    let id = this.id
    let file =  this.fileupload[0]
    console.log(file);

    this.employeeService.uploadImage(id,file).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/employees']);
        alert('SUCCESS');
        
      }, (error) => {
        alert(error.error.error);
      }
    );

  }

}
