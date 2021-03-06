import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  public items: string[];

  public ngOnInit(): void {
    this.initializeItems();
  }

  protected initializeItems() {
    this.items = Array.from({length: 500}).map((_, i) => `Item #${i}`);
  }

}

export interface Item {
  name: string;
  index: number;
}
