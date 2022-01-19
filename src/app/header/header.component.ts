import {Component, Inject, OnInit} from '@angular/core';
import {PageScrollService} from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {SidenavService} from '../sidenav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpen = false;

  constructor(private pageScrollService: PageScrollService,
              @Inject(DOCUMENT) private document: any,
              private sidenavService: SidenavService) {
    this.sidenavService.isSidenavOpen.subscribe(isOpen => {
      this.isMenuOpen = isOpen;
    })
  }

  scrollToElement(element: string) {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#' + element,
    });
  }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.sidenavService.toggleSidenav(this.isMenuOpen);
  }
}
