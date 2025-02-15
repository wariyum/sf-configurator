import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';

  bootstrapApplication(AppComponent, {
    providers: [
      provideAnimations(),
      provideHttpClient(),
      importProvidersFrom(MatNativeDateModule)
    ]
  }).catch(err => console.error(err));
