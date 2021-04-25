import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoGroupService } from '../../../service/demo-group.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent {

  addDemoGroupForm = new FormGroup(
    {
      demoShortName: new FormControl(''),
      demoLongName: new FormControl(''),
      demoAccounts: new FormControl(),
    }
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private demoGroupService: DemoGroupService) {}

  onSubmit(): void {
    this.demoGroupService.save(this.addDemoGroupForm.value).subscribe(_ =>
      this.gotoDemoGroupList()
    );
  }

  gotoDemoGroupList(): void {
    this.router.navigate(['/demoGroups']);
  }

}
