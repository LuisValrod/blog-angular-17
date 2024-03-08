import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavigationComponent, PostPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
