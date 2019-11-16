import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialsites:{id:number,link:string,tittle:string,target:string,username:string,icon:string}[];
  constructor(private config:ConfigService) { }

  ngOnInit() {
    this.getSocialSites();
  }
  getSocialSites(){
    return this.config.getSettings('websites').subscribe(

      data=>this.socialsites=data
    );
  }

}
