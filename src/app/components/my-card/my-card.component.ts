import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { StudentListComponent } from '../student-list/student-list.component';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.css'],
})
export class MyCardComponent implements OnDestroy, OnInit {
  interval: any = undefined;

  ngOnInit(): void {
    // this.interval = setInterval(() => {
    //   console.log(new Date().getTime());
    // }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  @Input()
  title = '';

  @Input()
  imgSrc = '';

  @Input()
  bgColor = 'text-bg-light';

  @ContentChild('genderTemplate')
  genderTemplate?: any;

  @Output()
  clickEvent = new EventEmitter();
}
