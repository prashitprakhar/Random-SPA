import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  public firstName = 'Rahul';
  public lastName = 'Roshan';
  public fileToUpload: File = null;

  constructor(private fileUploadService : FileUploadService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadData() {
    let formData: FormData = new FormData();
        // for (var j = 0; j < files.length; j++) {
        //     formData.append("file[]", files[j], files[j].name);
        // }
        //formData = this.fileToUpload
        formData.append("upload", this.fileToUpload);
        var parameters = {
            fname: this.firstName,
            lname: this.lastName
        }
        this.fileUploadService.upload(formData, parameters)
            // .subscribe(
            // success => {
            //   this.uploadStatus.emit(true);
            //   console.log(success)
            // },
            // error => {
            //     this.uploadStatus.emit(true);
            //     this.errors.push(error.ExceptionMessage);
            // }) 
  }

}
