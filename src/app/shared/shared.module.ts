import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProfileImageDirective } from './directives/profile-image.directive';
import { ProfileRemoveDirective } from './directives/profile-remove.directive';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UserCardComponent, ProfileImageDirective, ProfileRemoveDirective, SearchComponent],
    exports:[UserCardComponent,SearchComponent ]
})
export class SharedModule { }
