import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, PostPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private uiData: HeaderData = {
    title: 'My personal blog',
    subtitle: 'This is the subtitle',
    thumbnail: 'https://placehold.co/600x400'

  }
  constructor (private headerService: HeaderService){}

    ngOnInit(){

      this.headerService.uiData.set(this.uiData)

    }

  
}
