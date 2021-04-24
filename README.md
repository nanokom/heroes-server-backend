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
