import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;

  handleIncrement(){
    this.count += 1;    
  }
  hadleDecrement(){
    this.count -= 1;    
  }   
  handleReset(){
    this.count = 0;    
  }


  
}
