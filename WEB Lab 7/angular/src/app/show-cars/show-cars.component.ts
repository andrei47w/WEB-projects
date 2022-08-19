import {Component, OnInit} from '@angular/core';
import {GenericService} from '../generic.service';
import {Car} from '../car';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html'
})
export class ShowCarsComponent implements OnInit {

  cars: Car[] = [];

  constructor(private service: GenericService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.refresh('');
  }

  refresh(model: string): void {
    this.service.fetchCars(model).subscribe(cars => this.cars = cars);
  }

  doDelete(carId: number): void {
    this.service.deleteCar(carId).subscribe(() => {
      window.location.reload();
    });
  }

  navigateToAdd(): void {
    this.router.navigate(['addCar']).then(_ => {
    });
  }

  navigateToUpdate(carId: number): void {
    this.router.navigate(['updateCar'], {queryParams: {id:carId}}).then(_ => {
    });
  }

}
