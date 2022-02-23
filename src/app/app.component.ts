import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { UnsubscribeComponent } from './shared/unsubscribe/unsubscribe.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends UnsubscribeComponent {

  constructor(private dialog: MatDialog, @Inject(Window) private window: Window) {
    super();
  }

  onEditClick() {
    alert('Account Edited');
  }

  onDeleteClick() {
    const ref = this.dialog.open(ConfirmDeleteDialogComponent,
      { minHeight: '500px', minWidth: '500px' });

    ref.afterClosed()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(reload => reload && this.window.location.reload());
  }
}
