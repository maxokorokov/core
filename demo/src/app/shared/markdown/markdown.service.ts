import {Injectable} from '@angular/core';

import * as marked from 'marked';

@Injectable()
export class MarkdownService {

  toHTML(markdown: string) {
    return marked(markdown);
  }
}
