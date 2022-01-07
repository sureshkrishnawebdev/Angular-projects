import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ListItemComponent } from './components/list-item/list-item.component';

// services
import { MealsService } from './services/meals/meals.service';

// third-party
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
    imports:[
        CommonModule,
        AngularFireDatabaseModule,
    ],
    declarations:[
        ListItemComponent,
    ],
    exports:[
        ListItemComponent,
    ],
})
export class SharedModule { 
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: [
                MealsService,
            ],
        }
    }
}