import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-pdf-upload',
  standalone: true,
  imports: [MatButtonModule,
  MatIconModule],
  templateUrl: './pdf-upload.component.html',
  styleUrl: './pdf-upload.component.css'
})

//https://blog.angular-university.io/angular-file-upload/

export class PdfUploadComponent {
  fileName = '';

  constructor(private http: HttpClient){}

  uploadPdf(event){
    const file:File = event.target.files[0];

    if(file){
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("file", file);

      formData.append("name", file.name)
      const upload$ = this.http.post("http://localhost:8081/documents/upload", formData);
      upload$.subscribe();
    }
  }
}
