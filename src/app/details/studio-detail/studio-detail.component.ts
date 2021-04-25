import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StudioService} from '../../service/studio.service';
import {Studio} from '../../model/studio';
import { Location } from '@angular/common';

@Component({
  selector: 'app-studio-detail',
  templateUrl: './studio-detail.component.html',
  styleUrls: ['./studio-detail.component.css']
})
export class StudioDetailComponent implements OnInit {
  studio?: Studio;

  constructor(private route: ActivatedRoute,
              private studioService: StudioService,
              private location: Location) { }

  ngOnInit(): void {
    this.getStudio();
  }

  getStudio(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.studioService.getStudio(id)
      .subscribe(studio => {
        this.studio = studio;
      });
  }

  goBack(): void {
    this.location.back();
  }
}

