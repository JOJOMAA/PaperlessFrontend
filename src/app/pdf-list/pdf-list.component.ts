import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Document} from "../model/document";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pdf-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-list.component.html',
  styleUrl: './pdf-list.component.css'
})
export class PdfListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  documentList: Document[] = [];


  ngOnInit(): void {
    this.getDocumentList();
  }


  getDocumentList() {
    this.http.get<Document[]>("http://localhost:8081/documents/list")
      .subscribe({
        next: (data) => {
          this.documentList = data;
        },
        error: (err) => {
          console.error('Fehler beim Laden der Dokumente', err);
        }
      });
  }
}
