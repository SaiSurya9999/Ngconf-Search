import { NgModule } from '@angular/core';
import { NgconfSearchComponent } from './ngconf-search.component';
import { SearchFilterPipe } from './search-filter.pipe';



@NgModule({
  declarations: [NgconfSearchComponent,SearchFilterPipe],
  imports: [
  ],
  exports: [NgconfSearchComponent,SearchFilterPipe]
})
export class NgconfSearchModule { }
