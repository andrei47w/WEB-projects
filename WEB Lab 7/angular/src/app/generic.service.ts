import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class GenericService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private backendUrl = 'http://localhost:63342/WEB%20Lab%207/php/';
  // private backendUrl = 'http://localhost/WEB%20Lab%207/';

  constructor(private http: HttpClient) {
  }

  fetchCars(model: string): Observable<Car[]> {
    return this.http.get<Car[]>(this.backendUrl + `showCars.php?model=${model}`)
      .pipe(catchError(this.handleError<Car[]>('fetchStudents', []))
      );
  }

  deleteCar(carId: number): Observable<any> {
    return this.http.post(this.backendUrl + `deleteCar.php`, {id: carId});
  }

  addCar(modelOf: string, horsePowerOf: number, fuelOf: string,
         priceOf: number, colorOf: string, manufacturingYearOf: number, bodyStyleOf: string): Observable<any> {
    return this.http.post(this.backendUrl + `addCar.php`, {
      model: modelOf,
      horsePower: horsePowerOf,
      fuel: fuelOf,
      price: priceOf,
      color: colorOf,
      manufacturingYear: manufacturingYearOf,
      bodyStyle: bodyStyleOf
    });
  }

  updateCar(carIDOf: number, modelOf: string, horsePowerOf: number, fuelOf: string,
            priceOf: number, colorOf: string, manufacturingYearOf: number, bodyStyleOf: string): Observable<any> {
    return this.http.post(this.backendUrl + `updateCar.php`, {
      carID: carIDOf,
      model: modelOf,
      horsePower: horsePowerOf,
      fuel: fuelOf,
      price: priceOf,
      color: colorOf,
      manufacturingYear: manufacturingYearOf,
      bodyStyle: bodyStyleOf
    });
  }

  private handleError<T>(operation = 'operation', result?: T): (error: any) => Observable<T> {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
