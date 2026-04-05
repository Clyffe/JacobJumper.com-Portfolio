import { Routes } from '@angular/router';
import { HomeComponent }    from './pages/home/home';
import { AboutComponent }   from './pages/about/about';
import { WorkComponent }    from './pages/work/work';
import { SkillsComponent }  from './pages/skills/skills';
import { ContactComponent } from './pages/contact/contact';

export const routes: Routes = [
  { path: '',         component: HomeComponent    },
  { path: 'about',   component: AboutComponent   },
  { path: 'work',    component: WorkComponent     },
  { path: 'skills',  component: SkillsComponent  },
  { path: 'contact', component: ContactComponent  },
  { path: '**',      redirectTo: ''               },
];
