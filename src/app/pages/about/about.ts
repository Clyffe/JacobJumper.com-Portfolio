import { Component } from '@angular/core';

interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  desc: string;
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  timeline: TimelineEntry[] = [
    {
      year: '2022 – 2025',
      role: 'Senior Software Engineer',
      company: 'Viecure',
      desc: 'Refactored oncology tumor staging for precise, AJCC certified staging in Entity Framework, Angular. Created and reworked back end Entity Framework classes in C#, implementing more precise data handling and AJCC API integrations. Designed and implemented schema changes for SQL Server to handle more accurate staging metrics. Redesigned front end web app pages with NodeJS, Angular, and Typescript to handle modified data structures. More types of cancers were available to be staged, resulting in increased levels of patient care, and improving staging time by over 40%.'
    },
    {
      year: '2021',
      role: 'Software Engineer',
      company: 'CAN Behavioral Healtht',
      desc: 'Created the initial database schema in SQLite based on client requirements. Used Django and Python to create the initial MVP of the Electronic Medical Record (EMR). Initial MVP saw 500 patients signed up through Chevron partnership.'
    },
    {
      year: '2020 – 2021',
      role: 'Game and UI/UX developer',
      company: 'Illus Seed Games',
      desc: 'Contracted by Rockstar Games to create a game in Python, using the Ren’Py engine. Worked with artists and team lead to create the GUI, and state engine.'
    },
    {
      year: '2020',
      role: 'Software Engineer',
      company: 'Sycamore Life Sciences',
      desc: 'Contracted to build a web scraping tool in Python using BeautifulSoup and Pandas.'
    },
    {
      year: '2014 – 2017',
      role: 'A.Sc. Computer Science',
      company: 'San Jacinto College',
      desc: ''
    },
  ];
}
