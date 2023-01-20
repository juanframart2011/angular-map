import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapSreenComponent } from './screens/map-sreen/map-sreen.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MapSreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapSreenComponent
  ]
})
export class MapsModule { }
