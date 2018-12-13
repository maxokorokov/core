import {Component, Injectable, ViewChild} from '@angular/core';
import {Observable, Subject, merge, of} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap, filter} from 'rxjs/operators';

import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'ngbd-typeahead-basic',
  templateUrl: './typeahead-basic.html',
  styles: [`.form-control { width: 300px; }`]
})
export class NgbdTypeaheadBasic {

  public modelFocus1: any;
  public modelFocus2: any;
  public modelFocus3: any;

  @ViewChild('instanceFocus1') instanceFocus1: NgbTypeahead;
  @ViewChild('instanceFocus2') instanceFocus2: NgbTypeahead;
  @ViewChild('instanceFocus3') instanceFocus3: NgbTypeahead;

  focusFocus1$ = new Subject<string>();
  clickFocus1$ = new Subject<string>();

  focusFocus2$ = new Subject<string>();
  clickFocus2$ = new Subject<string>();

  focusFocus3$ = new Subject<string>();
  clickFocus3$ = new Subject<string>();

  searchFocus1 = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.clickFocus1$.pipe(filter(() => !this.instanceFocus1.isPopupOpen()));
    const inputFocus$ = this.focusFocus1$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  searchFocus2 = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.clickFocus2$.pipe(filter(() => !this.instanceFocus2.isPopupOpen()));
    const inputFocus$ = this.focusFocus2$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  searchFocus3 = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.clickFocus3$.pipe(filter(() => !this.instanceFocus3.isPopupOpen()));
    const inputFocus$ = this.focusFocus3$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? states
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }
}
