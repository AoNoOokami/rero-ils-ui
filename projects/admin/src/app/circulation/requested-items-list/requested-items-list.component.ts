/*
 * RERO ILS UI
 * Copyright (C) 2019 RERO
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'admin-circulation-requested-items-list',
  templateUrl: './requested-items-list.component.html',
  styleUrls: ['./requested-items-list.component.scss']
})
export class RequestedItemsListComponent implements OnInit {

  @ViewChild(DataTableDirective, {static: false})
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  private itemsList = null;

  @Input() set items(values) {
    if (values) {
      this.itemsList = values;
      this.ref.markForCheck();
      this.dtTrigger.next();
    }
  }

  get items() {
    return this.itemsList;
  }

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dtOptions = {
      searching: false,
      info: false,
      paging: false,
      destroy: true,
      retrieve: true
    };
  }

}
