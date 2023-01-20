import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-sreen',
  templateUrl: './map-sreen.component.html',
  styleUrls: ['./map-sreen.component.css']
})
export class MapSreenComponent{

  constructor( private placesService: PlacesService) { }

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }
}
