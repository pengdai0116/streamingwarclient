import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StudioService} from '../../../service/studio.service';

@Component({
  selector: 'app-add-studio',
  templateUrl: './add-studio.component.html',
  styleUrls: ['./add-studio.component.css']
})
export class AddStudioComponent {

  addStudioForm = new FormGroup({
    studioShortName: new FormControl(''),
    studioLongName: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studioService: StudioService) { }

  gotoStudioList(): void {
    this.router.navigate(['/studios']);
  }

  onSubmit(): void {
    this.studioService.save(this.addStudioForm.value).subscribe(_ =>
      this.gotoStudioList()
    );
  }
}
