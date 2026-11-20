create database baxxment;
use baxxment;
	-- atributo tipo_dato longitud_dato
create table uxxerz (
	id_uxxer int primary key auto_increment,
    name_uxxer varchar (30),
    surn_uxxer varchar (30),
    bd_uxxer date,
    email_uxxer varchar (100),
    clv varchar (255)
);
-- insertar un solo usuario
insert into uxxerz (name_uxxer, surn_uxxer, email_uxxer, clv)
values ("Leonardo","D´Caprio","leonito@gmail.com","titanic123");

-- insertar varios usuarios a la vez
insert into uxxerz (name_uxxer, surn_uxxer, email_uxxer, clv)
values
("Son","Goku","supersaiyan@yahoo.com","dragon753"),
("Playboi","Carti","vampking@gmail.com","opium2020"),
("Mickey","Mouse","elraton@hotmail.com","miskamuska50"),
("Lionel","Messi","goat@gmail.com","viscabarca2005"),
("Piccolo","Daimaku","reydemonio@yahoo.com","namekusei777");

select * from uxxerz;