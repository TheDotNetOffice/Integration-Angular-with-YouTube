import { Component } from '@angular/core';

@Component({
 
  selector: 'app-you-tube-player',
  templateUrl: './you-tube-player.component.html',
  styleUrls: ['./you-tube-player.component.css'],
})
export class YouTubePlayerComponent {

  ngOnInit()
  {
    const scriptTag = document.createElement('script');
    scriptTag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(scriptTag);
  }

}
