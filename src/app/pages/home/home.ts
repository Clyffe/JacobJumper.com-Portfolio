import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  marqueeItems = [
    'Angular', 'TypeScript', 'Node.js', '.NET', 'Python',
    'Azure', 'REST APIs', 'System Design', 'Unreal Engine', 'Godot 3/4', '✦',
  ];

  highlights = [
    { value: '5+',  label: 'Years experience' },
    { value: '3+', label: 'Projects shipped'  },
    { value: '2',  label: 'Open-source repos' },
  ];
}
