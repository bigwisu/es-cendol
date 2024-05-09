import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { Message, MESSAGE_TYPE } from './utility/contant';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    HeaderComponent,
    UserInputComponent,
    MessagePanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Es Cendol';
  data: Message[] = [];

  getMessage($event: any) {

    let messageObject: Message = this.createMessage($event, MESSAGE_TYPE.USER)
    this.data = [...this.data].concat(messageObject)
    
  }

  createMessage(content: string, type: MESSAGE_TYPE): Message{
    return {
      id: uuidv4(),
      sender: type,
      content: content,
      dateTime: new Date(),
    }
  }
}