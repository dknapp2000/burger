drop database burgers_db;

create database burgers_db;

use burgers_db;

create table burgers (
        id      int auto_increment primary key,
        burger_name     varchar(50) not null,
        devoured        boolean,
        insert_date     datetime default CURRENT_TIMESTAMP,
        date            datetime
);

insert into burgers ( burger_name, devoured ) values
( "Double Cheese", 0 ),
( "Bacon burger", 0 ),
( "Single", 0 ),
( "Double", 0 ),
( "Irresponsible", 0 ),
( "Toad whomper", 0 );

select * from burgers;

