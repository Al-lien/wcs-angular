import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.scss',
})
export class CreateOnomatopiaComponent {
  newOnomatopia: string = '';

  @Output()
  sendOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  @Output()
  resetOnomatopiaToParent: EventEmitter<string> = new EventEmitter();

  createOnomatopia(onomatopia: string): void {
    this.sendOnomatopiaToParent.emit(onomatopia);
  }

  resetOnomatopia(): void {
    this.resetOnomatopiaToParent.emit();
  }
}
