import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/store/state';
import { getFetchedUser } from 'src/app/store/userStore/user.actions';
import { selectUser } from 'src/app/store/userStore/user.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public user$ = this.store.select(selectUser);
  ngOnInit(): void {
    this.store.dispatch(getFetchedUser());
  }
  constructor(private store: Store<IState>) {}
}
