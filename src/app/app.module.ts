import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ServicesComponent } from './components/services/services.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { CardsComponent } from './components/cards/cards.component';
import { ThousandsSeparatorPipePipe } from './pipes/thousands-separator-pipe.pipe';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParallaxDirective } from './components/home/home.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FeaturedComponent,
    HeaderComponent,
    HomeComponent,
    ReviewsComponent,
    ServicesComponent,
    SubscribeComponent,
    VehiclesComponent,
    CardsComponent,
    ThousandsSeparatorPipePipe,
    NewsletterComponent,
    FooterComponent,
    ParallaxDirective,
  ],
  imports: [BrowserModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
