import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Demo } from './model/demo';
import {Stream} from './model/stream';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const demos = [
      {
        id: 1,
        demoShortName: 'age_20_anime',
        demoLongName: 'Viewers under 20 who watch anime weekly',
        demoAccounts: 2000,
      },
      {
        id: 2,
        demoShortName: 'age_40_50',
        demoLongName: 'Viewers between 40 and 50',
        demoAccounts: 800,
      },
      {
        id: 3,
        demoShortName: 'age_20_heroes',
        demoLongName: 'Viewers of Marvel/DC under 20',
        demoAccounts: 10000,
      },
    ];

    const streams = [
        {
          id: 1,
          streamShortName: 'apv',
          streamLongName: 'Amazon Prime Video',
          streamSubscription: 12,
        },
        {
          id: 2,
          streamShortName: 'net',
          streamLongName: 'Netflix',
          streamSubscription: 14,
          streamCurRevenue: 0,
        },
    ];

    const studios = [
      {
        id: 1,
        studioShortName: 'disney',
        studioLongName: 'Walt Disney Animation Studios',
      },
      {
        id: 2,
        studioShortName: 'espn',
        studioLongName: 'Entertainment Sports Network Studios',
      },
    ];

    const events = [
      {
        id: 1,
        eventType: 'movie',
        eventName: 'Mulan',
        eventYear: 1998,
        eventDuration: 88,
        studioShortName: 'disney',
        eventLicenseFee: 1000,
      },
      {
        id: 2,
        eventType: 'ppv',
        eventName: '30 for 30: Monaco',
        eventYear: 2020,
        eventDuration: 106,
        studioShortName: 'espn',
        eventLicenseFee: 3300,
      },
      {
        id: 3,
        eventType: 'movie',
        eventName: 'The Little Mermaid',
        eventYear: 1989,
        eventDuration: 83,
        studioShortName: 'disney',
        eventLicenseFee: 2000,
      },
      {
        id: 4,
        eventType: 'movie',
        eventName: 'Beauty and the Beast',
        eventYear: 1991,
        eventDuration: 84,
        studioShortName: 'disney',
        eventLicenseFee: 1000,
      },
      {
        id: 5,
        eventType: 'ppv',
        eventName: 'MMA Championship',
        eventYear: 2020,
        eventDuration: 121,
        studioShortName: 'espn',
        eventLicenseFee: 8800,
      },
    ];

    return { demos, streams, studios, events };
  }

  // Overrides the genId method to ensure that a demo always has an id.
  // If the demos array is empty,
  // the method below returns the initial number (11).
  // if the demos array is not empty, the method below returns the highest
  // demo id + 1.
  genId<T extends Demo | Stream>(table: T[]): number {
    return table.length > 0 ? Math.max(...table.map(entity => entity.id)) + 1 : 11;
  }
}
