import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [],
  providers: [],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
