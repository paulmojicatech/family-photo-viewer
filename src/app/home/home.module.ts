import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './components/home/home.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

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
        IonicModule,
        SharedComponentsModule
    ],
    declarations: [HomeComponent]
})

export class HomeModule{ }