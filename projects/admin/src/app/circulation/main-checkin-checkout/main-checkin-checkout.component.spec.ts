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

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCheckinCheckoutComponent } from './main-checkin-checkout.component';
import { RecordModule } from '@rero/ng-core';
import { ItemsListComponent } from '../items-list/items-list.component';
import { PatronDetailedComponent } from '../patron-detailed/patron-detailed.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

describe('MainCheckinCheckoutComponent', () => {
  let component: MainCheckinCheckoutComponent;
  let fixture: ComponentFixture<MainCheckinCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RecordModule, RouterTestingModule, HttpClientModule, TranslateModule.forRoot()],
      declarations: [ MainCheckinCheckoutComponent, ItemsListComponent, PatronDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCheckinCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
