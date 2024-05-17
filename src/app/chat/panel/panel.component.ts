import { Component } from '@angular/core';
import { Message, MESSAGE_TYPE } from '../../utility/constants';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'chat-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent {
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
