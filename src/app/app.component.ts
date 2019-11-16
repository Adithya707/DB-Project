import { Component ,OnInit} from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'website';
  ngOnInit(){
  /* Parallax Effects 
	if (!!(<any>$).prototype.enllax) {
		(<any>$)(window).enllax();
  }*/
}
}
