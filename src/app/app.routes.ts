import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View01Component } from './view/component/view01/view01.component';
import { View02Component } from './view/component/view02/view02.component';

export const routes: Routes = [
    {
        path: "View01",
        component: View01Component,
    },
    {
        path: "View02",
        component: View02Component
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}