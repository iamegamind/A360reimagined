import {Component, Inject} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {SidenavService} from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '360reimagined';
  isSidenavOpen = false;

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private sidenavService: SidenavService) {

    this.sidenavService.isSidenavOpen
      .subscribe(isOpen => {
        this.isSidenavOpen = isOpen;
      })
  }

  scrollToElement(element: string) {
    this.close();

    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + element,
    });
  }

  close() {
    this.sidenavService.toggleSidenav(false);
  }
}
