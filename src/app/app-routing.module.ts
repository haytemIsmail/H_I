import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
	{ path: "home", component: HomeComponent },
	{ path: "login", component: LoginComponent },
	// { path: "", redirectTo: "/", pathMatch: "full" }
	{ path: '**', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule { }