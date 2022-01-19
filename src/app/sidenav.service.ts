import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  public isSidenavOpen = new BehaviorSubject(false);

  constructor() {
  }

  openSidenav() {
    this.isSidenavOpen.next(true);
  }

  closeSidenav() {
    this.isSidenavOpen.next(false);
  }

  toggleSidenav(open: boolean) {
    this.isSidenavOpen.next(open);
  }


}
