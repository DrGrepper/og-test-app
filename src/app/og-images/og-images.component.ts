import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-og-images',
  templateUrl: './og-images.component.html',
  styleUrls: ['./og-images.component.scss']
})
export class OgImagesComponent implements OnInit{
  constructor(private meta: Meta){}
  ngOnInit(): void {
    this.meta.updateTag({property: 'og:title', content: 'Open Graph Images Documentation'});
    this.meta.updateTag({property: 'og:description', content: 'Here is some documentation on OG Images'});
    //this.meta.updateTag({property: 'og:image', content: 'YOUR_URL'});
    this.meta.updateTag({property: 'og:url', content: 'https://metametameta.net/og-images'});
  }
}
