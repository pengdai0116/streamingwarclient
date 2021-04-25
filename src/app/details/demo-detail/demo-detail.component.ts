import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Demo } from '../../model/demo';
import { DemoGroupService } from '../../service/demo-group.service';

@Component({
  selector: 'app-demo-detail',
  templateUrl: './demo-detail.component.html',
  styleUrls: ['./demo-detail.component.css']
})
export class DemoDetailComponent implements OnInit {
  demoGroup?: Demo;
  constructor(
    private route: ActivatedRoute,
    private demoService: DemoGroupService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDemoGroup();
  }

  getDemoGroup(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.demoService.getDemoGroup(id)
      .subscribe(demoGroup => {
        this.demoGroup = demoGroup;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
