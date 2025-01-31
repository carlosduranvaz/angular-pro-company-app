import {Component, input, output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  isAuthenticated = input(false);
  onSignOut = output();
  onSignIn  = output();
}
