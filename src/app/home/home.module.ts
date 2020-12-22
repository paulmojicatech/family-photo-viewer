import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        IonicModule
    ],
    declarations: [HomeComponent]
})

export class HomeModule{ }