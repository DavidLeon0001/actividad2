import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { BulletComponent } from './bullet/bullet.component';
import { ButtonComponent } from './button/button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PanelComponent,
    BulletComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PanelComponent,
    ButtonComponent,
    BulletComponent
  ]
})
export class ControlsModule { }
