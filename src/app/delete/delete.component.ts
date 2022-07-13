import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private lservice: LibraryService ) { }

  ngOnInit(): void {
  }
   deletebookdetail(deleteform: { value: number })
   {
       this.lservice.deletebook(deleteform.value).subscribe();
   }
}