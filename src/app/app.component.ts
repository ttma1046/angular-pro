import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

interface File {
  name: string;
  size: number;
  type: string;
}

import { FileSizePipe } from './filesize.pipe';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.Default,
  template: `
    <div>
      <ul>
        <li *ngFor="let item of items; let i = index;">
          {{ i }} Member: {{ item.name | json }}
        </li>
        <div> NgFor</div>
        <ng-template myFor [myForOf]="items" let-item let-i="index">
          <li>
            {{ i }} Member: {{ item.name | json }}
          </li>
        </ng-template>
      </ul>
    </div>

    <div>
      <div *ngFor="let file of files">
        <p>{{ file.name }}</p>
        <p>{{ file.size | filesize: 'megabytes' }}</p>
      </div>
    </div>
    <app-credit-card></app-credit-card>
  `,
  providers: [
    FileSizePipe
  ]
})
export class AppComponent implements OnInit {
  items = [{
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  }, {
    name: 'Test',
    age: 50,
    location: 'Test'
  }];

  files: any[];
  mapped: File[];

  ngOnInit() {
    this.files = [
      {
        name: 'logo.svg', size: 2120109, type: 'image/svg'
      },
      {
        name: 'banner.jpg', size: 12345, type: 'image/svg'
      },
      {
        name: 'background.png', size: 987654321, type: 'image/svg'
      }
    ];

    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, 'mb')
      };
    })


  }

  constructor(private fileSizePipe: FileSizePipe) {



    setTimeout(() => {
      /*      this.items.push({
              name: 'Chandler Fang',
              age: 33,
              location: 'meet'
            });*/

      this.items = [...this.items, {
        name: 'Chandler Fang',
        age: 33,
        location: 'meet'
      }];
      console.log('tick');
    }, 2000);
  }
}
