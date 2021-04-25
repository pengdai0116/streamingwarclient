import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Stream} from '../../model/stream';
import {StreamService} from '../../service/stream.service';

@Component({
  selector: 'app-stream-list',
  templateUrl: './stream-list.component.html',
  styleUrls: ['./stream-list.component.css']
})
export class StreamListComponent implements OnInit {

  streams: Stream[] = [];
  selectedStream?: Stream;

  constructor(private streamService: StreamService,
              private location: Location) { }

  ngOnInit(): void {
    this.streamService.getStreams().subscribe(
      streams => {
        this.streams = streams;
      });
  }

  onSelect(stream: Stream): void {
    this.selectedStream = stream;
  }

  goBack(): void {
    this.location.back();
  }

}
