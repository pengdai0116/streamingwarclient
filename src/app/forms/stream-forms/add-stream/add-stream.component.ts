import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {StreamService} from '../../../service/stream.service';

@Component({
  selector: 'app-add-stream',
  templateUrl: './add-stream.component.html',
  styleUrls: ['./add-stream.component.css']
})
export class AddStreamComponent {

  addStreamForm = new FormGroup({
    streamShortName: new FormControl(''),
    streamLongName: new FormControl(''),
    streamSubscription: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private streamService: StreamService) { }

  gotoStreamList(): void {
    this.router.navigate(['/streams']);
  }

  onSubmit(): void {
    this.streamService.save(this.addStreamForm.value).subscribe(_ =>
      this.gotoStreamList()
    );
  }
}
