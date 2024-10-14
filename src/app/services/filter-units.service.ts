import { Injectable } from '@angular/core';
import { Location } from '../types/location.type';

const OPENING_HOURS = {
  morning: {
    first: '06',
    last: '12',
  },
  afternoon: {
    first: '12',
    last: '18',
  },
  night: {
    first: '18',
    last: '23',
  },
};

type HourIndexes = 'morning' | 'afternoon' | 'night';

@Injectable({
  providedIn: 'root',
})
export class FilterUnitsService {
  constructor() {}

  transformWeekday(weekday: number) {
    switch (weekday) {
      case 0:
        return 'Dom.';
      case 6:
        return 'Sáb.';
      default:
        return 'Seg. à Sex.';
    }
  }

  filterUnitByHour(location: Location, openHour: string, closeHour: string) {
    if (!location.schedules) return true;

    let OPEN_HOUR_FILTER = parseInt(openHour, 10);
    let CLOSE_HOUR_FILTER = parseInt(closeHour, 10);
    const TODAY_WEEKDAY = this.transformWeekday(new Date().getDate());

    for (let schedule of location.schedules) {
      let SCHEDULE_HOUR = schedule.hour;
      let SCHEDULE_WEEDAYS = schedule.weekdays;

      if (TODAY_WEEKDAY === SCHEDULE_WEEDAYS) {
        if (SCHEDULE_HOUR !== 'Fechada' && SCHEDULE_HOUR) {
          let [UNIT_OPEN_HOUR, UNIT_CLOSE_HOUR] = SCHEDULE_HOUR.split(' ás ');
          let UNIT_OPEN_HOUR_INT = parseInt(UNIT_OPEN_HOUR?.replace('h', ''));
          let UNIT_CLOSE_HOUR_INT = parseInt(UNIT_CLOSE_HOUR?.replace('h', ''));

          if (
            UNIT_OPEN_HOUR_INT <= OPEN_HOUR_FILTER &&
            UNIT_CLOSE_HOUR_INT >= CLOSE_HOUR_FILTER
          ) {
            return true;
          } else return false;
        }
      }
    }
    return false;
  }

  filter(results: Location[], showClosed: boolean, hour: string) {
    let intermediateResults = results;

    if (!showClosed) {
      intermediateResults = results.filter((location) => location.opened);
    }

    if (hour) {
      const OPEN_HOUR = OPENING_HOURS[hour as HourIndexes].first;
      const CLOSE_HOUR = OPENING_HOURS[hour as HourIndexes].last;
      return intermediateResults?.filter((location) =>
        this.filterUnitByHour(location, OPEN_HOUR, CLOSE_HOUR)
      );
    } else {
      return intermediateResults;
    }
  }
}
