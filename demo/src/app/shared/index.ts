import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {ComponentWrapper} from './component-wrapper/component-wrapper.component';
import {PageWrapper} from './page-wrapper/page-wrapper.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {Analytics} from './analytics/analytics';

import {NgbdCodeComponent} from './code/code.component';
import {CodeHighlightService} from './code/code-highlight.service';
import {MarkdownService} from './markdown/markdown.service';
import {NgbdMarkdownComponent} from './markdown/markdown.component';

export {componentsList} from './side-nav/side-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [
    CommonModule,
    RouterModule,
    ComponentWrapper,
    PageWrapper,
    SideNavComponent,
    NgbdCodeComponent,
    NgbdMarkdownComponent,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ComponentWrapper,
    PageWrapper,
    SideNavComponent,
    NgbdCodeComponent,
    NgbdMarkdownComponent
  ],
  providers: [Analytics, CodeHighlightService, MarkdownService]
})
export class NgbdSharedModule {
}
