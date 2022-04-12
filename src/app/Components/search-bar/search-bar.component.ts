import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onChange = new EventEmitter<any>();
  inputValue:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    this.onChange.emit(this.inputValue);
  }
}
