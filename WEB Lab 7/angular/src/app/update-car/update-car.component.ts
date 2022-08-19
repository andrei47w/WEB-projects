import {Component, OnInit} from '@angular/core';
import {GenericService} from '../generic.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-update-car',
    templateUrl: './update-car.component.html'
})
export class UpdateCarComponent implements OnInit {

    constructor(private service: GenericService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    updateUser(model: string, horsePower: string, fuel: string, price: string, color: string, manufacturingYear: string, bodyStyle: string): void {
        const id = this.route.snapshot.queryParams['id'];
        this.service.updateCar(id, model, Number(horsePower), fuel, Number(price), color, Number(manufacturingYear), bodyStyle).subscribe(() => {
            this.router.navigate(['showCars']).then(_ => {
            });
        });
    }

    onCancel(): void {
        this.router.navigate(['showCars']).then(_ => {
        });
    }

}
