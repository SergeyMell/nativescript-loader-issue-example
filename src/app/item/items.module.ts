import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {ItemsComponent} from './items.component';
import {ItemDetailComponent} from './item-detail.component';
import {ModalDialogService, NativeScriptCommonModule} from '@nativescript/angular';

@NgModule({
    imports: [
        NativeScriptCommonModule,
    ],
    declarations: [
        ItemsComponent,
        ItemDetailComponent,
    ],
    exports: [
        ItemsComponent,
        ItemDetailComponent,
    ],
    entryComponents: [
        ItemDetailComponent
    ],
    providers: [
        ModalDialogService,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ItemsModule {

}
