import {Component, OnInit} from '@angular/core';
import {Demo} from '../../../model/demo';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DemoGroupService} from '../../../service/demo-group.service';

@Component({
  selector: 'app-update-demo',
  templateUrl: './update-demo.component.html',
  styleUrls: ['./update-demo.component.css']
})
export class UpdateDemoComponent implements OnInit {
  demoGroup?: Demo;

  constructor(private demoGroupService: DemoGroupService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.getDemoGroup();
  }

  getDemoGroup(): void {
    console.log(this.route.snapshot.paramMap);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.demoGroupService.getDemoGroup(id).subscribe(demoGroup =>
      this.demoGroup = demoGroup
    );
  }

  updateDemoGroup(): void {
    if (this.demoGroup) {
      console.log(this.demoGroup);
      this.demoGroupService.updateDemoGroup(this.demoGroup).subscribe(() => this.goBack());
    }
  }

  cancel(): void {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
