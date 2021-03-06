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

import { Component, Input } from '@angular/core';
import { ResultItem } from '@rero/ng-core';

@Component({
  selector: 'admin-patron-types-brief-view',
  template: `
  <h5 class="mb-0 card-title">
    <a [routerLink]="['/records', 'patron_types', 'detail', record.metadata.pid]">
      {{ record.metadata.name }}
    </a>
  </h5>
  <div class="card-text">
    <span *ngIf="record.metadata.description">
      {{ record.metadata.description }}
    </span>
  </div>
  `,
  styles: []
})
export class PatronTypesBriefViewComponent implements ResultItem {

  @Input()
  record: any;

  @Input()
  type: string;

  @Input()
  detailUrl: { link: string, external: boolean };
}
