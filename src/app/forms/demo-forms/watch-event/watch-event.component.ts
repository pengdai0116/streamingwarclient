import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Demo} from '../../../model/demo';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {DemoGroupService} from '../../../service/demo-group.service';

@Component({
  selector: 'app-watch-event',
  templateUrl: './watch-event.component.html',
  styleUrls: ['./watch-event.component.css']
})
export class WatchEventComponent implements OnInit {
  demoGroup?: Demo;
  watchEventForm = this.fb.group({
    demoShortName: [''],
    percentage: ['', Validators.required],
    streamShortName: ['', Validators.required],
    eventName: ['', Validators.required],
    eventYear: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private demoGroupService: DemoGroupService,
              private route: ActivatedRoute,
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getDemoGroup();
  }

  getDemoGroup(): void {
    const demoId = Number(this.route.snapshot.paramMap.get('id'));
    this.demoGroupService.getDemoGroup(demoId).subscribe(demoGroup =>
      this.demoGroup = demoGroup
    );
  }

  onSubmit(): void {
    if (this.demoGroup) {
      this.watchEventForm.patchValue({demoShortName: this.demoGroup.demoShortName});
    }
    this.demoGroupService.watchEvent(this.watchEventForm.value).subscribe(_ =>
      this.gotoDemoGroupList()
    );
  }

  gotoDemoGroupList(): void {
    this.router.navigate(['/demoGroups']);
  }

  cancel(): void {
    this.location.back();
  }

}
