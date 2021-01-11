import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavbarComponent],
  imports: [RouterModule],
  providers: [],
  exports: [FooterComponent, NavbarComponent],
})
export class SharedModule {}
