CREATE DATABASE CarShop;

USE CarShop;
drop table car;

create table car
(
    carID             int          not null primary key AUTO_INCREMENT,
    model             varchar(100) not null,
    horsePower        int          not null,
    fuel              varchar(100) not null,
    price             int          not null,
    color             varchar(100) not null,
    manufacturingYear int          not null,
    bodyStyle         varchar(100) not null
);


insert into car(model, horsePower, fuel, price, color, manufacturingYear, bodyStyle)
values ('Model', 200, 'Gas', 15000, 'Blue', 1998, 'Sedan')

