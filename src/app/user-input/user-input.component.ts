import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

const ENTER_KEY_ASCII_CODE = 13;

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss'
})
export class UserInputComponent {

  @Output() sendMessageEmitter = new EventEmitter();
  message: string = '';

  sendMessage() {
    if (this.message.length > 0) {
      this.sendMessageEmitter.emit(this.message);
      this.message = '';
    }
  }

  onKeyUp(event: any) {
    if (event.keyCode === ENTER_KEY_ASCII_CODE) {
      this.sendMessage();
    }
  }
}
