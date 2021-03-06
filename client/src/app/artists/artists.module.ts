import { HttpClientModule } from '@angular/common/http';
import { ArtistsRoutingModule } from './artists-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ArtistsComponent } from './components/artists/artists.component';
import { ArtistCardComponent } from './components/artist-card/artist-card.component';
import { ArtistProfileComponent } from './components/artist-profile/artist-profile.component';
import { FiltersBarComponent } from './components/filters-bar/filters-bar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { TagsComponent } from './components/tags/tags.component';
import { MediaGridComponent } from './components/media-grid/media-grid.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistCardComponent,
    ArtistProfileComponent,
    FiltersBarComponent,
    ProjectsComponent,
    TagsComponent,
    MediaGridComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    ArtistsRoutingModule,
    HttpClientModule
  ]
})
export class ArtistsModule { }
