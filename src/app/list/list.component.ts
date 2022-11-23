import { Component, OnInit } from '@angular/core';
import { PAGES } from '../constants/constants';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  pages: any;
  markdown = `
  \`\`\`typescript
  const language = 'typescript';
  \`\`\``;

  markdownOne = `
  \`\`\`typescript
  const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
  \`\`\``;

  markdownTwo = `
  \`\`\`typescript
  const user = {
    firstName: "Angela",
    lastName: "Davis",
    role: "Professor",
  }
  \`\`\``;

  constructor() {
    this.pages = PAGES;
  }

  ngOnInit(): void {
  }

}
