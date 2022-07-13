import { Component, OnInit } from '@angular/core';
import { Library } from '../library';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
lib! : Library[];
  constructor(private lservice : LibraryService) { }

  ngOnInit(): void {
    this.lservice.getbooks().subscribe((data:Library[])=>{
   this.lib = data;
    });

  }
  

}