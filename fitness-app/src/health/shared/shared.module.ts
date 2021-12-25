import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { MealsService } from './services/meals/meals.service';

@NgModule({
    imports:[
        CommonModule,
    ],
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService
            ],
        }
    }
}