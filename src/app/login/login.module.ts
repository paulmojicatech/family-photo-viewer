import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Route[] = [
    {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}