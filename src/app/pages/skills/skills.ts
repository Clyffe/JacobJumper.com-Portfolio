import { Component } from '@angular/core';

interface Skill { name: string; level: number; }
interface SkillGroup { category: string; icon: string; items: Skill[]; }

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class SkillsComponent {
  groups: SkillGroup[] = [
    {
      category: 'Frontend',
      icon: '◈',
      items: [
        { name: 'Angular',          level: 96 },
        { name: 'TypeScript',       level: 94 },
        { name: 'RxJS',             level: 88 },
        { name: 'CSS / SCSS',       level: 90 },
        { name: 'React',            level: 78 },
        { name: 'Web Performance',  level: 85 },
      ]
    },
    {
      category: 'Backend',
      icon: '◉',
      items: [
        { name: 'Node.js',          level: 91 },
        { name: 'NestJS',           level: 86 },
        { name: 'PostgreSQL',       level: 84 },
        { name: 'Redis',            level: 78 },
        { name: 'GraphQL',          level: 80 },
        { name: 'REST Design',      level: 92 },
      ]
    },
    {
      category: 'Infrastructure',
      icon: '◎',
      items: [
        { name: 'Docker',           level: 85 },
        { name: 'Kubernetes',       level: 72 },
        { name: ' Azuer',              level: 80 },
        { name: 'SQL',            level: 95 },
        { name: 'SSMS',        level: 65 },
        { name: 'Observability',    level: 78 },
      ]
    },
    {
      category: 'Craft',
      icon: '◇',
      items: [
        { name: 'Game Design',    level: 90 },
        { name: 'Code Review',      level: 95 },
        { name: 'Technical Writing',level: 82 },
        { name: 'Mentorship',       level: 88 },
        { name: 'Accessibility',    level: 85 },
        { name: 'Testing',          level: 89 },
      ]
    },
  ];
}
