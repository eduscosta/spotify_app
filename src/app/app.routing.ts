import { NgModule } from '@angular/core';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes=[
  {path:'',           component: SearchComponent},
  {path:'about',      component: AboutComponent},
  {path:'artist/:id', component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class routing {}
