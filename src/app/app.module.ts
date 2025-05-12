import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { rotas } from './app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(
            FormsModule,
            RouterModule.forRoot(rotas)
        )
    ]
});