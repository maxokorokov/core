import {Component} from '@angular/core';
import {DEMO_SNIPPETS} from './demos';

@Component({
  selector: 'ngbd-datepicker',
  template: `
    <ngbd-component-wrapper component="Datepicker" [hasOverview]="overview">
      <ngbd-api-docs directive="NgbDatepicker"></ngbd-api-docs>
      <ngbd-api-docs directive="NgbInputDatepicker"></ngbd-api-docs>
      <ngbd-api-docs-class type="NgbDateStruct"></ngbd-api-docs-class>
      <ngbd-api-docs-class type="DayTemplateContext"></ngbd-api-docs-class>
      <ngbd-api-docs-class type="NgbDatepickerNavigateEvent"></ngbd-api-docs-class>
      <ngbd-api-docs-class type="NgbDatepickerI18n"></ngbd-api-docs-class>
      <ngbd-api-docs-class type="NgbDateParserFormatter"></ngbd-api-docs-class>
      <ngbd-api-docs-class type="NgbDateAdapter"></ngbd-api-docs-class>
      <ngbd-api-docs-config type="NgbDatepickerConfig"></ngbd-api-docs-config>
      <ngbd-example-box demoTitle="Basic datepicker" [snippets]="snippets" component="datepicker" demo="basic">
        <ngbd-datepicker-basic></ngbd-datepicker-basic>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Datepicker in a popup" [snippets]="snippets" component="datepicker" demo="popup">
        <ngbd-datepicker-popup></ngbd-datepicker-popup>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Multiple months" [snippets]="snippets" component="datepicker" demo="multiple">
        <ngbd-datepicker-multiple></ngbd-datepicker-multiple>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Range selection" [snippets]="snippets" component="datepicker" demo="range">
        <ngbd-datepicker-range></ngbd-datepicker-range>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Disabled datepicker" [snippets]="snippets" component="datepicker" demo="disabled">
        <ngbd-datepicker-disabled></ngbd-datepicker-disabled>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Custom date adapter" [snippets]="snippets" component="datepicker" demo="adapter">
        <ngbd-datepicker-adapter></ngbd-datepicker-adapter>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Internationalization of datepickers" [snippets]="snippets" component="datepicker" demo="i18n">
        <ngbd-datepicker-i18n></ngbd-datepicker-i18n>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Custom day view" [snippets]="snippets" component="datepicker" demo="customday">
        <ngbd-datepicker-customday></ngbd-datepicker-customday>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Alternative calendars" [snippets]="snippets" component="datepicker" demo="calendars">
        <ngbd-datepicker-calendars></ngbd-datepicker-calendars>
      </ngbd-example-box>
      <ngbd-example-box demoTitle="Global configuration of datepickers" [snippets]="snippets" component="datepicker" demo="config">
        <ngbd-datepicker-config></ngbd-datepicker-config>
      </ngbd-example-box>
    </ngbd-component-wrapper>
  `
})
export class NgbdDatepicker {
   snippets = DEMO_SNIPPETS;
   overview = `
# NgbDatepicker

Datepicker is a highly configurable component. It can be used either inline with \`NgbDatepicker\` component or as a dropdown on any input element with \`NgbInputDatepicker\` directive.

\`// TODO: insert a demo here\`

The list of most prominent features we provide:
* complete customisation of a way particular day is displayed
* ability to disable selection and limit navigation to some dates
* range selection and multiple month view
* multiple calendar implementations (Islamic, Hebrew, etc)
* different date model support
* custom i18n and RTL/LTR support

### Display
You have complete control of the date display using custom template and \`dayTemplate\` input: highlight some dates, display weekends in a different way, add your own tooltips, etc.

\`\`\`javascript
<ng-template #t let-date let-month> 
	{{ date.day }}
</ng-template>

<ngbDatepicker [dayTemplate]=“t”/>
\`\`\`

### Disabling dates
You can also disable and particular date or date range with \`markDisabled\`.

### Range selection
Range selection can be easily implemented using existing API and you can choose how many month can be displayed at once using \`displayMonths\` input.

As mentioned before, you have the full control over each day display.

### Date adapters
You might be using a 

### Multiple calendar support
Datepicker comes with the following calendars:
* \`NgbCalendarGregorian\` → Gregorian (default one)
* \`NgbCalendarGregorian\` → Islamic Civil
* Hebrew
* 

To be able to use a custom calendar, you have to provide a different \`NgbCalendar\` implementation   
   `;
}
