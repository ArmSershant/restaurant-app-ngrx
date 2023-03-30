import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSet, loadSets } from 'src/app/store/setStore/set.actions';
import { selectSets } from 'src/app/store/setStore/set.selectors';
import { Set } from '../../models/set.model';
import { IState } from './../../../../store/state';
@Component({
  selector: 'app-showallset',
  templateUrl: './showallset.component.html',
  styleUrls: ['./showallset.component.css'],
})
export class ShowallsetComponent {
  sets$ = this.store.select(selectSets);
  sets: Set[] = [];
  pageSize: number = 6;
  totalSets: number = this.pageSize + 1;
  currentPage: number = 1;
  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.store.dispatch(
      loadSets({ page: this.currentPage, pageSize: this.pageSize })
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadItems();
  }

  constructor(private store: Store<IState>) {
    this.sets$.subscribe((sets: any) => (this.sets = sets));
  }
}
