import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'map-testing';
  private map!: mapboxgl.Map;
  private markers: mapboxgl.Marker[] = [];
  private coordinates: any[] = [
    [77.8024, 9.4533], // Example coordinates
    [-74.006, 40.7128],     // Another example
    [-73.935242, 40.730610] // And another...
    // Add more coordinates as needed
  ];

  ngOnInit(): void {
    this.map = new mapboxgl.Map({
      accessToken: 'pk.eyJ1Ijoic2hpa2hhcmFncmF3YWw0MjAiLCJhIjoiY2xsNnYwYm45MHdqbDNlbWt5NWVuYjFpYiJ9.6nYK9qgTsPtxfStWhq4pWw',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.coordinates[0], // Set the initial center coordinates
      zoom: 12
    });

    // Add markers to the map
    this.coordinates.forEach(coord => {
      const marker = new mapboxgl.Marker({
        color: '#FF0000'
      })
        .setLngLat(coord)
        .addTo(this.map);
      this.markers.push(marker);
    });

    this.map.addControl(new mapboxgl.NavigationControl({
      showZoom: true,
    }), 'top-right');
  }
}
