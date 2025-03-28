import { Component } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.css']
})
export class GuidesComponent {
  showStressManagement = false;

  toggleStressManagement() {
    this.showStressManagement = !this.showStressManagement;
  }
}
