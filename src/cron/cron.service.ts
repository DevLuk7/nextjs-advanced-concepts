import { IntervalHost } from '../scheduler/decorators/interval-host.decorator';
import { Interval } from '../scheduler/decorators/interval.decorator';

@IntervalHost
export class CronService {
  @Interval(5000) // 👈
  everySecond() {
    console.log('This will be logged every 5 second 🐈 ');
  }

  @Interval(60000) // 👈
  everyMinute() {
    console.log('1This will be logged every minute 🐈 ');
  }
}
