import {Component, OnInit} from '@angular/core';
import {Stream} from '../../../model/stream';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {StreamService} from '../../../service/stream.service';

@Component({
  selector: 'app-update-stream',
  templateUrl: './update-stream.component.html',
  styleUrls: ['./update-stream.component.css']
})
export class UpdateStreamComponent implements OnInit {

  stream?: Stream;

  constructor(
    private streamService: StreamService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit(): void {
    this.getStream();
  }

  getStream(): void {
    const streamId = Number(this.route.snapshot.paramMap.get('id'));
    this.streamService.getStream(streamId).subscribe(stream =>
      this.stream = stream
    );
  }

  updateStream(): void {
    if (this.stream) {
      console.log(this.stream);
      this.streamService.updateStream(this.stream).subscribe(() => this.goBack());
    }
  }

  cancel(): void {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
