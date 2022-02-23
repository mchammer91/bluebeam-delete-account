import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { UnsubscribeComponent } from './shared/unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDeleteDialogComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})
export class AppModule { }
