import { Component, OnInit, Inject } from '@angular/core';
import { SidebarService } from '../serivce/sidebar.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebar_list = [];
  url : string = "../assets/json/sidebar.json";
  constructor(private service: SidebarService, @Inject(DOCUMENT) private document: any) { }

  ngOnInit() {
    this.service.getAll(this.url)
      .subscribe(res => {
        this.sidebar_list = res;
      } , error => {
        alert("Unexpected Error");
        console.log(error);
      });
  }

  goToUrl(url: string): void {
    this.document = window.open(url,'_blank');
  }




}
