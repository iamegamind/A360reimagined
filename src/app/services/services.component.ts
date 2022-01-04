import {Component, OnInit} from '@angular/core';
import {Service} from '../model/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services: Service[] = [
    {
      imageUrl: 'assets/megaphone.png',
      cardTitle: 'Brand Activations',
      cardDescription: 'Generate hundreds,' +
        ' thousands, maybe even millions of impressions through social sharing, branded overlays, custom backdrops' +
        ' and more.',
      cardColor: '#517647',
      textColor: '#fff'
    },
    {
      imageUrl: 'assets/corporate-event.png',
      cardTitle: 'Corporate Events',
      cardDescription: 'Give your team a guaranteed good time that will capture all the best moments from the event in 360 degree slow-motion.',
      cardColor: '#93d580',
      textColor: '#fff'
    },
    {
      imageUrl: 'assets/cocktail.png',
      cardTitle: 'Weddings & Parties',
      cardDescription: 'Grab some props, family or friends and get ready for the time of your life!',
      cardColor: '#d9f2cf',
      textColor: '#517647'
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

}
