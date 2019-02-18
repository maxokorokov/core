import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

import { NgbdModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    NgbdModule,
    ServerModule,
    ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent],
})
export class NgbdServerModule {}
