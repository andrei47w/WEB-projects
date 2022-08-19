import {Component, OnInit} from '@angular/core';
import {GenericService} from '../generic.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-car',
    templateUrl: './add-car.component.html'
})
export class AddCarComponent implements OnInit {

    constructor(private service: GenericService, private router: Router) {
    }

    ngOnInit(): void {
    }

    addCar(model: string, horsePower: string, fuel: string, price: string, color: string, manufacturingYear: string, bodyStyle: string): void {
        this.service.addCar(model, Number(horsePower), fuel, Number(price), color, Number(manufacturingYear), bodyStyle).subscribe(() => {
            this.router.navigate(['showCars']).then(_ => {
            });
        });
    }

    onCancel(): void {
        this.router.navigate(['showCars']).then(_ => {
        });
    }

}
