import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../utility/contant';

@Component({
  selector: 'app-message-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-panel.component.html',
  styleUrl: './message-panel.component.scss'
})
export class MessagePanelComponent {
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
