**Enostavni REST API za Marvel junake.**
Povezava z bazo PostgreSQL.

Omogoča:
* Prikaz vseh junakov. (GET)
* Prikaz posameznega junaka, išče po ID. (GET)
* Prikaz posameznega junaka, išče po imenu. (GET) : uporaba wildcard: name+"%" --> query string v URL: /heroes?name=Hulk (https://javascript.plainenglish.io/query-strings-url-parameters-d1a35b9a694f)
* Ustvari junaka. (POST)
* Posodobi junaka. (PUT)
* Odstrani junaka. (DELETE)

Navodila za HTTPS:
https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/

Navodila za HTTPS - validiran certifikat:
* https://certbot.eff.org/lets-encrypt/ubuntufocal-webproduct
* https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca


**PostgreSQL**

How To Install and Use PostgreSQL on Ubuntu 18.04:
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04

* sudo -i -u postgres //switch over to the postgres account on your server
* psql //access a Postgres prompt
* postgres⇒ CREATE DATABASE heroes; //create database "heroes"
* postgres⇒ \q //exit out of the PostgreSQL prompt 
* postgres⇒ \list //list all databases
* postgres⇒ \c heroes //connect to database "heroes"


* heroes⇒ CREATE TABLE heroes (
	id int NOT NULL AUTO_INCREMENT,
	name varchar (20),
	powers varchar (20)
); //create table "heroes"

* heroes⇒ INSERT INTO heroes (name, powers) VALUES ('Thor', 'Weather manipulation');

* heroes⇒ SELECT * FROM heroes;
