import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  selectedStatus: string;

  team: any[] = [
    {name: 'kenyon', status: 'captain' },
    {name: 'jones', status: 'coCaptain' },
    {name: 'timothy', status: 'finance' }
  ]



  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  numGame(g) {
    this.selectedStatus = g;
  }


  ngOnInit(): void {
    // created check if palidrone algo - success 
    function checkP(str: string) {
      const newStr = str
              .toLowerCase()
              .split('')
              .reverse()
              .join('');

          if(newStr === str) {
            return true
          } else {
            return false
          }
    }
    const test = checkP('weiew')
    console.log('test:', test)


    
  }


}
