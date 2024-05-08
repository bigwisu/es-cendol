import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { MessagePanelComponent } from './message-panel/message-panel.component';
import { Message } from './utility/contant';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
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

    let messageObject: Message = {
      id: uuidv4(),
      sender: "user",
      content: $event,
      dateTime: new Date()
    }

    this.data.push(messageObject);
  }

}