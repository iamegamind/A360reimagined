import {Component} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  scrollToContact() {
    let el = document.getElementById('contact');
    if (el) {
      console.log('e')
      el.scrollTop = el.scrollHeight;
    }
  }
}
