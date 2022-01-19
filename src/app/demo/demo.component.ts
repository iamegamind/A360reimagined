import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  isMuted = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
  }
}
