import { Component, OnInit } from '@angular/core';
import {catagories} from "../../shared/constants";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = catagories;

  constructor() { }

  ngOnInit(): void {
  }

}
