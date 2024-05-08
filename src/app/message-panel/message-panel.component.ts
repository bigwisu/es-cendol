import { Component, Input } from '@angular/core';
import { Message } from '../utility/contant';

@Component({
  selector: 'app-message-panel',
  standalone: true,
  imports: [],
  templateUrl: './message-panel.component.html',
  styleUrl: './message-panel.component.scss'
})
export class MessagePanelComponent {
  @Input() messages: Message[] = [];
}
