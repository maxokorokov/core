import {NgbDate} from '../ngb-date';
import {NgbDateStruct} from '../ngb-date-struct';
import {NgbPeriod, NgbCalendar} from '../ngb-calendar';
import {Injectable} from '@angular/core';
import {isNumber} from '../../util/util';

@Injectable()
export abstract class NgbCalendarHijri extends NgbCalendar {
  getDaysPerWeek() { return 7; }

  getMonths() { return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; }

  getWeeksPerMonth() { return 6; }

  isValid(date: NgbDateStruct): boolean {
    return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) &&
        !isNaN(this.toGregorian(date).getTime());
  }

  setDay(date: NgbDateStruct, day: number): NgbDateStruct {
    day = +day;
    let mDays = this.getDaysInIslamicMonth(date.month, date.year);
    if (day <= 0) {
      while (day <= 0) {
        date = this.setMonth(date, date.month - 1);
        mDays = this.getDaysInIslamicMonth(date.month, date.year);
        day += mDays;
      }
    } else if (day > mDays) {
      while (day > mDays) {
        day -= mDays;
        date = this.setMonth(date, date.month + 1);
        mDays = this.getDaysInIslamicMonth(date.month, date.year);
      }
    }
    date.day = day;
    return date;
  }

  setMonth(date: NgbDateStruct, month: number): NgbDateStruct {
    month = +month;
    date.year = date.year + Math.floor((month - 1) / 12);
    date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
    return date;
  }

  setYear(date: NgbDateStruct, yearValue: number): NgbDateStruct {
    date.year = +yearValue;
    return date;
  }

  abstract getWeekday(date: NgbDate): number;

  abstract getNext(date: NgbDateStruct, period?: NgbPeriod, number?: number): NgbDate;

  abstract getPrev(date: NgbDateStruct, period?: NgbPeriod, number?: number): NgbDate;

  abstract getWeekNumber(week: NgbDateStruct[], firstDayOfWeek: number): number;

  abstract getToday(): NgbDate;

  /**
   * Returns the equivalent Hijri date value for a give input Gregorian date.
   * `gDate` is s JS Date to be converted to Hijri.
   */
  abstract fromGregorian(gDate: Date): NgbDate;

  /**
   * Converts the current Hijri date to Gregorian.
   */
  abstract toGregorian(hijriDate: NgbDateStruct): Date;

  /**
   * Returns the number of days in a specific Hijri month.
   * `month` is 1 for Muharram, 2 for Safar, etc.
   * `year` is any Hijri year.
   */
  abstract getDaysInIslamicMonth(month: number, year: number): number;

  protected _isIslamicLeapYear(year: number): boolean { return (14 + 11 * year) % 30 < 11; }

  /**
   * Returns the start of Hijri Month.
   * `month` is 0 for Muharram, 1 for Safar, etc.
   * `year` is any Hijri year.
   */
  protected _getMonthStart(year: number, month: number): number {
    return Math.ceil(29.5 * month) + (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
  }

  /**
   * Returns the start of Hijri year.
   * `year` is any Hijri year.
   */
  protected _getYearStart(year: number): number { return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0); }
}
