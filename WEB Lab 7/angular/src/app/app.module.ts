import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShowCarsComponent} from './show-cars/show-cars.component';
import {AddCarComponent} from './add-car/add-car.component';
import {UpdateCarComponent} from './update-car/update-car.component';

@NgModule({
    declarations: [
        AppComponent,
        ShowCarsComponent,
        AddCarComponent,
        UpdateCarComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
