create Table tab1 (
    cod integer primary key,
    descrip text not null
);
create Table tab2 (
    cod integer primary key,
    descrip text not null
);
create Table tab3 (
    cod integer primary key,
    descrip text not null
);

insert into tab3 (cod, descrip)
values (4, 'prod4');

insert into tab2 (cod, descrip)
values (3, 'prod3');