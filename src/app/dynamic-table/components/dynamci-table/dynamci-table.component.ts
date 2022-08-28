import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './dynamci-table.component.html',
  styleUrls: ['./dynamci-table.component.scss'],
})
export class DynamciTableComponent implements OnInit {
  @Input() data!: any[];
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
  constructor() {}

  ngOnInit(): void {}
}
