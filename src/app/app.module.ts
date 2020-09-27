import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule} from '@angular/forms';
import { RecapComponent } from './recap/recap.component';
import { PhoneFormatPipe } from './phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    TetiereComponent,
    FooterComponent,
    RecapComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
