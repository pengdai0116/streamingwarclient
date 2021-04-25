import { Component, OnInit } from '@angular/core';
import { Demo } from '../../model/demo';
import { DemoGroupService } from '../../service/demo-group.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {

  demoGroups: Demo[] = [];
  selectedDemoGroup?: Demo;

  constructor(private demoGroupService: DemoGroupService,
              private location: Location) {}

  ngOnInit(): void {
    this.demoGroupService.getDemoGroups().subscribe(
      data => {
        console.log(data);
        this.demoGroups = data;
    });
  }

  onSelect(demoGroup: Demo): void {
    this.selectedDemoGroup = demoGroup;
  }

  goBack(): void {
    this.location.back();
  }

}
