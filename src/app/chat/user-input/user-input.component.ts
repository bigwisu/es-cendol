import { Component, EventEmitter, Output } from '@angular/core';

const ENTER_KEY_ASCII_CODE = 13;

@Component({
  selector: 'chat-user-input',
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
