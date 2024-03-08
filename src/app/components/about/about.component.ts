import { Component } from '@angular/core';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private uiDAta: HeaderData = {
    title: 'About me',
    subtitle: 'Another subtitle',
    thumbnail: 'https://placeholder.co/600x400'
  }

  constructor (private headerService: HeaderService) {
    headerService.uiData.set(this.uiDAta)
  }
}
