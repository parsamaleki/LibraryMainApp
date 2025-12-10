import { Component } from '@angular/core';
import { PrivateNavigationTemplateComponent } from '../+templates/private-navigation-template/private-navigation-template.component';
import { RisponsiveSidenave } from "../+templates/risponsive-sidenave/risponsive-sidenave";
import { SidenavModeExample } from "../+templates/sidenav-mode-example/sidenav-mode-example";
import { SidenavFixedExample } from "../+templates/sidenav-fixed-example/sidenav-fixed-example";
import { NavigationTemplateComponent } from "../+templates/navigation-template/navigation-template.component";
// import { Book } from "../../../../+components/book/book";
  
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationTemplateComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
