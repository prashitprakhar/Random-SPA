import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  _baseURL: string = 'http://localhost:8080/'
  constructor(private http : Http) { }

  upload(files: FormData, parameters) {
    //console.log("Called Service")
    let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        options.params = parameters;
        // let payload = {
        //   files,
        //   fname : parameters.fname,
        //   lname : parameters.lname
        // }
        //console.log("payload DATA ***********",payload)
        this.http.post(this._baseURL + 'upload', files, options)
          .subscribe(data => {
            //console.log("SUBSCIBED DATA ***********",data)
          })

  }
}
