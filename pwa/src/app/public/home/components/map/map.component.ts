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
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -37]
  });
  busIcon = new L.Icon({
    iconUrl: './../../../../assets/img/icons/bus-marker.svg',
    iconSize: [19, 22],
    tooltipAnchor: [-10, 0]
  });

  constructor() { }

  ngAfterViewInit(): void {
    this.loadMap();
  }

  loadMap() {
    const center = {
      lat: 45.66600228331074,
      lng: 0.17119716870516388,
    };

    const zoomLevel = 12.5;

    this.map = L.map('map', {
      center: [center.lat, center.lng],
      zoom: zoomLevel,
      scrollWheelZoom: false
    });

    const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      minZoom: 1,
      maxZoom: 18
    })

    mainLayer.addTo(this.map);

    var localOptions = {
      'autoClose' : false
    }

    var localPopup = L.popup().setContent(`<b>Le Cabinet de Curiosités</b>`);
    var busTooltip = L.tooltip().setContent(`Bus: 2 / 6 / 10 / NAU`);

    L.marker([45.673812, 0.179429], { icon: this.localIcon }).bindPopup(localPopup, localOptions).addTo(this.map).openPopup();
    L.marker([45.672129, 0.173746], { icon: this.busIcon }).bindTooltip(busTooltip, {direction: 'left'}).addTo(this.map).openTooltip();

    this.map.on('click', () => { this.map.scrollWheelZoom.enable();});
    this.map.on('mouseout', () => { this.map.scrollWheelZoom.disable();});
    
  }

}
