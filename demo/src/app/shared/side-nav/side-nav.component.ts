import { Component } from '@angular/core';
import {Router} from '@angular/router';

export const componentsList = [
  'Accordion',
  'Alert',
  'Buttons',
  'Carousel',
  'Collapse',
  'Datepicker',
  'Dropdown',
  'Modal',
  'Pagination',
  'Popover',
  'Progressbar',
  'Rating',
  'Tabs',
  'Timepicker',
  'Tooltip',
  'Typeahead'
];

@Component({
  selector: 'ngbd-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  components = componentsList;

  constructor(private router: Router) {}

  isActive(component) {
    return this.router.url.startsWith(`/components/${component}`);
  }
}
