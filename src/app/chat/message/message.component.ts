import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../../utility/constants';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  @ViewChild('scrollPanel', { static: true })
    scrollPanel!: ElementRef;
  
  private _messages: Message[] = [];
  private scrollContainer: any;

  @Input() set messages(data: Message[]) {
    this.updateData(data).then(() => {
      this.scrollToBottom();
    })
  }

  get messages(): Message[] {
    return this._messages;
  }

  updateData(data: Message[]){
    return new Promise((resolve)=> {
      this._messages = [...data];
      resolve(true);
    })
  }

  ngAfterViewInit() {
    this.scrollContainer = this.scrollPanel.nativeElement;
  } 
  
  public scrollToBottom(): void {
    if(this.scrollContainer){
      this.scrollContainer.scroll({
        top: this.scrollContainer.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
