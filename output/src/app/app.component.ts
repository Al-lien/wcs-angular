import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }

  onReceiveReset(): void {
    this.onomatopoeiaList = [];
  }
}
