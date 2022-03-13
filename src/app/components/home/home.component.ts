import { Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Bill } from 'src/app/models/bill.model';

@Component({
  selector: 'app-home-ui',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  @Input() public bills: Array<Bill> | null = null;

}
