import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sc-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input() tags: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
