import { Component, OnInit } from '@angular/core';
import { Ng4TwitterTimelineService } from 'ng4-twitter-timeline/lib/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  videoUrl: string = 'https://www.youtube.com/watch?v=DBLFwHosi2c';
  safeUrl;

  constructor(private ng4TwitterTimelineService: Ng4TwitterTimelineService){
    
 }

  ngOnInit() {
  }



}
