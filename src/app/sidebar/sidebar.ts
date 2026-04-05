import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {
  navItems: NavItem[] = [
    { label: 'Home',       path: '/'          },
    { label: 'About',      path: '/about'     },
    { label: 'Work',       path: '/work'      },
    { label: 'Skills',     path: '/skills'    },
    { label: 'Contact',    path: '/contact'   },
  ];
}
