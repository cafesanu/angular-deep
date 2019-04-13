import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() public readonly featureSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  public ngOnInit(): void {
  }

  public onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}
