import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { rotas } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(rotas),
    provideHttpClient()
  ]
};

// Inicializa a aplicação
bootstrapApplication(AppComponent, appConfig);