import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Studio} from '../../model/studio';
import {StudioService} from '../../service/studio.service';

@Component({
  selector: 'app-studio-list',
  templateUrl: './studio-list.component.html',
  styleUrls: ['./studio-list.component.css']
})
export class StudioListComponent implements OnInit {

  studios: Studio[] = [];
  selectedStudio?: Studio;

  constructor(
    private studioService: StudioService,
    private location: Location) {
  }

  ngOnInit(): void {
    this.studioService.getStudios().subscribe(
      studios => this.studios = studios
    );
  }

  onSelect(studio: Studio): void {
    this.selectedStudio = studio;
  }

  goBack(): void {
    this.location.back();
  }

}
