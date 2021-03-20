import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-container-scroll',
  templateUrl: './container-scroll.component.html',
  styleUrls: ['./container-scroll.component.scss']
})
export class ContainerScrollComponent extends ContainerComponent implements OnInit {
  public items: string[];

  public ngOnInit(): void {
    this.initializeItems();
  }
}
