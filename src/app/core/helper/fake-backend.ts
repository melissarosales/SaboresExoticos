import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { environment } from '@env/environment';
let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/user/login') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                    case url.endsWith('/FoodCategory/List') && method === 'POST':
                        return getFoodCategoryList();
                        case url.endsWith('/Food/List') && method === 'POST':
                            return getFoodList();
                case url.endsWith('/menuOptions/get') && method === 'POST':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            if (body.Email === environment.customerEmail && body.Password === environment.customerPassword) {
                return ok({
                    id: 1,
                    Email: environment.customerEmail,
                    Password: environment.customerPassword,
                    Role: environment.customerRolId,
                    MenuOptions: [
                        { Description: "ACTIVIDADES", DisplayOrder: 1, Route: "calendar-activities" },
                        {
                            Description: "RESERVACIONES", DisplayOrder: 2, DropDown:true, MenuOptionsList: [{ Description: "RESERVAR",  DisplayOrder: 1,  Route: "book" },
                            { Description: "MIS RESERVACIONES",  DisplayOrder: 2,  Route: "my-booking-list" }]
                        },
                        { Description: "MENÚ", DisplayOrder: 3, Route: "food-menu" },
                        { Description: "PERFIL", DisplayOrder: 4, Route: "profile" },
                    ],
                    token: 'fake-jwt-token'
                })
            } else {
                return ok(null);
            }
        }

        function getFoodCategoryList() { 
                return ok([
                    {Id:1, Name:"Desayunos"},
                    {Id:2, Name:"Carnes"},
                    {Id:3, Name:"Ensaladas"},
                    {Id:4, Name:"Hamburguesas"},
                    {Id:5, Name:"Pizzas"},
                    {Id:6, Name:"Postres"},
                    {Id:7, Name:"Bebidas"},
                ])  
        }


        function getFoodList() { 
            return ok([
                {Id:1, Name:"Desayuno Pequeño",Description:"Dos tortillas de maíz, gallo pinto,aguacate, plátanos y natilla",Price:3600,FkFoodCategory:1},
                {Id:2, Name:"Desayuno Tico",Description:"Gallo pinto, plátanos, natilla, aguacate, huevos revueltos, carne en salsa, café p agua dulce.",Price:5000,FkFoodCategory:1},
                {Id:3, Name:"Desayuno Americano",Description:"Dos pancackes, dos tiras de tocinetas, acompañadas de dos tortas de huevo con jamón y  café.",Price:4600,FkFoodCategory:1},
                {Id:4, Name:"Sandwich de jamón y huevo",Description:"",Price:2100,FkFoodCategory:1},
                {Id:5, Name:"Huevos Rancheros",Description:"",Price:3600,FkFoodCategory:1},
                {Id:6, Name:"Sandwich de carne en salsa",Description:"De bagguet con mantequilla, carne en salsa",Price:2100,FkFoodCategory:1},
                {Id:7, Name:"Empanada de queso",Description:"Empanada hecha a base de maiz, rellena de queso tierno.",Price:2500,FkFoodCategory:1},
                {Id:8, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:9, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:10, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:11, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:12, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:13, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:14, Name:"Carne",Description:"Descripcion",Price:1000,FkFoodCategory:2}, 
                {Id:15, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:16, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:17, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:18, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:19, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:20, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:21, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:22, Name:"Ensalada",Description:"Descripcion",Price:1000,FkFoodCategory:3}, 
                {Id:23, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:24, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:25, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:26, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:27, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:28, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:29, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:30, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:31, Name:"Hamburguesa",Description:"Descripcion",Price:1000,FkFoodCategory:4}, 
                {Id:32, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:33, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:34, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:34, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:35, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:36, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:37, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:38, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:39, Name:"Pizza",Description:"Descripcion",Price:1000,FkFoodCategory:5},  
                {Id:40, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:41, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:42, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:43, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:44, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:45, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:46, Name:"Postre",Description:"Descripcion",Price:1000,FkFoodCategory:6}, 
                {Id:47, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:48, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:49, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:50, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:51, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:52, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:53, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:54, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:55, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
                {Id:56, Name:"Bebidas",Description:"Descripcion",Price:1000,FkFoodCategory:7}, 
            ])  
    }

        function register() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();

            return ok(users);
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};