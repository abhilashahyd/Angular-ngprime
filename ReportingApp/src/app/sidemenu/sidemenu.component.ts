import { Component, OnInit } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenuItem }  from 'primeng/api';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {
 private items : MenuItem[];
 display = true;


  constructor() { }

  ngOnInit() {
  this.items =[
    {
               label: 'Dashboard',
               // icon: 'fa fa-fw fa-file-o',
               items: [{
                       label: 'Employee',
                       // icon: 'fa fa-fw fa-plus',
                   },
                   {label: 'Utilization'},
                   {label: 'Logout'}
               ]
           }];
  }

}
