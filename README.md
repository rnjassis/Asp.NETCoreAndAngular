# AspNetCoreOne
Project that uses the Asp.NET Core 2.1 and Angular 7
Commands used during development:
#### On Visual Studio (using the package manager console)
```
Add-Migration "InitialCreate"
Update-Database
```
The command creates the .cs files used to create the database and the second one creates the DB itself on the server.
#### Using the Angular CLI
```
ng g c payment-details --spec=false --inline-style=false
ng g c payment-details/payment-detail --spec=false --inline-style=false
ng g c payment-details/payment-detail-list --spec=false --inline-style=false
ng g s shared/payment-detail --spec=false
```

### Installing dependencies
```
npm install ngx-toastr@^8.4.0 --save
```