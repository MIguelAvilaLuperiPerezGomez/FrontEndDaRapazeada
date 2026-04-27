import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { App } from './app';
import { Item } from './item/item';

@NgModule({
  declarations: [
    App,
    Item
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()), // ✅ substitui HttpClientModule
  ],
  bootstrap: [App]
})
export class AppModule { }