import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';

import {MarkdownService} from './markdown.service';

@Component({
  selector: 'ngbd-md',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ``
})
export class NgbdMarkdownComponent implements OnInit {

  @Input() markdown = '';

  constructor(private _service: MarkdownService, private _el: ElementRef) {
  }

  ngOnInit() {
    this._el.nativeElement.innerHTML = this._service.toHTML(this.markdown);
  }
}
