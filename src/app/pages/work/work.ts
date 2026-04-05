import { Component } from '@angular/core';

export interface Project {
  index: string;
  title: string;
  category: string;
  year: string;
  desc: string;
  stack: string[];
  link?: string;
  featured: boolean;
}

@Component({
  selector: 'app-work',
  imports: [],
  templateUrl: './work.html',
  styleUrl: './work.scss'
})
export class WorkComponent {
  activeFilter = 'All';
  filters = ['All', 'Frontend', 'Backend', 'Full Stack', 'Game Development'];

  projects: Project[] = [
    {
      index: '01',
      title: 'VieCure',
      category: 'Full Stack',
      year: '2022-2025',
      desc: 'Healthcare and Oncology focused SaaS. Built with Angular and .NET, deployed with Azure. Helped to build and maintain all aspects of the product.',
      stack: ['Angular', 'TypeScript', 'SCSS', '.NET', 'Azure', 'SQL'],
      featured: true,
    },
    {
      index: '02',
      title: 'CAN Behavioral Health',
      category: 'Backend',
      year: '2021',
      desc: 'Neurology and mental health focus SaaS designed in Django.',
      stack: ['Node.js', 'AWS', 'Django', 'PostgreSQL', 'Docker'],
      featured: true,
    },
    {
      index: '03',
      title: 'To Be With You ',
      category: 'Game Development',
      year: '2021',
      desc: 'Contracted by Rockstar Games to create a game in Python, using the Ren’Py engine.',
      stack: ['Python', 'Renpy'],
      link: 'https://illusseed.itch.io/to-be-with-you',
      featured: true,
    },
    {
      index: '04',
      title: 'VMAExperience',
      category: 'Frontend',
      year: '2018',
      desc: 'Designed the UX, and scheduling for a bespoke, tailored exercise coach.',
      stack: ['Angular', 'TypeScript', 'IndexedDB'],
      featured: false,
    },
  ];

  get filtered(): Project[] {
    if (this.activeFilter === 'All') return this.projects;
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(f: string) { this.activeFilter = f; }
}
