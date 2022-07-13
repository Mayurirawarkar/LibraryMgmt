import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private lservice: LibraryService) { }
  insertbookdetail(inseertform: { value: any; })
  {
    this.lservice.insertbook(inseertform.value).subscribe();
  }

  ngOnInit(): void {
  }

}
