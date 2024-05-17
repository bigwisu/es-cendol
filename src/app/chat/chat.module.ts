import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MessageComponent } from './message/message.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelComponent,
    MessageComponent,
    UserInputComponent
  ],
  imports: [
    ChatRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class ChatModule { }
