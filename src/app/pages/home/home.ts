import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [RouterLink],
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
