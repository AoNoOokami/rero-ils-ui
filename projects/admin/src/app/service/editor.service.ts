import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecordService } from '@rero/ng-core';
import { catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * Deliver piece of data for EditorComponent: Record from BNF (aka Bibliothèque Nationale de France)
 */
export class EditorService {
  /**
   * Constructor
   * @param http HttpClient
   */
  constructor(
    private http: HttpClient,
  ) { }

  /**
   * Get record from rero-ils API
   * @param ean EAN code
   * @returns observable of null if the record does not exists else an
   * observable containing the record
   */
  getRecordFromBNF(ean): Observable<any> {
    return this.http.get<any>(`/api/import/bnf/${ean}`).pipe(
      catchError(e => {
        if (e.status === 404) {
          return of(null);
        }
      })
    );
  }
}
