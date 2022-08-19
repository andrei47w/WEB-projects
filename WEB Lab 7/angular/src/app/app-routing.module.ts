import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowCarsComponent} from './show-cars/show-cars.component';
import {AddCarComponent} from './add-car/add-car.component';
import {UpdateCarComponent} from './update-car/update-car.component';

const routes: Routes = [
  {path: '', redirectTo: '/showCars', pathMatch: 'full'},
  {path: 'showCars', component: ShowCarsComponent},
  {path: 'addCar', component: AddCarComponent},
  {path: 'updateCar', component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
