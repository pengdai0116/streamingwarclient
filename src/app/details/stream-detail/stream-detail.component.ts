import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StreamService} from '../../service/stream.service';
import {Stream} from '../../model/stream';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stream-detail',
  templateUrl: './stream-detail.component.html',
  styleUrls: ['./stream-detail.component.css']
})
export class StreamDetailComponent implements OnInit {
  stream?: Stream;

  constructor(private route: ActivatedRoute,
              private streamService: StreamService,
              private location: Location) { }

  ngOnInit(): void {
    this.getStream();
  }

  getStream(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.streamService.getStream(id)
      .subscribe(stream => {
        this.stream = stream;
      });
  }

  goBack(): void {
    this.location.back();
  }
}

