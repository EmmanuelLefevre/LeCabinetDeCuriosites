import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements AfterViewInit {

  map: any;

  localIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -37]
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.loadMap();
  }

  loadMap() {
    const cabinetCuriosites = {
      lat: 45.66600228331074,
      lng: 0.17119716870516388,
    };

    const zoomLevel = 12.5;

    this.map = L.map('map', {
      center: [cabinetCuriosites.lat, cabinetCuriosites.lng],
      zoom: zoomLevel,
      scrollWheelZoom: false
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      minZoom: 1,
      maxZoom: 18
    })

    mainLayer.addTo(this.map);

    const localMarker = L.marker([45.673812, 0.179429], { icon: this.localIcon }).addTo(this.map);
    localMarker.bindPopup("<b>Le Cabinet de Curiosités</b>").openPopup();
  }

}
