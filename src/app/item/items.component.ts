import {Component, OnInit, ViewContainerRef} from "@angular/core";

import {Item} from "./item";
import {ItemService} from "./item.service";
import {ModalDialogService} from '@nativescript/angular';
import {ItemDetailComponent} from './item-detail.component';
import {isAndroid, Page} from '@nativescript/core';
import {
    LoadingIndicator,
    Mode,
    OptionsCommon,
} from '@nstudio/nativescript-loading-indicator';

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService,
                private page: Page,
                private vcRef: ViewContainerRef,
                private mdService: ModalDialogService,
    ) {
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    navigateToItemDetails(item: Item) {


        const indicator = new LoadingIndicator();

        const options: OptionsCommon = {
            message: 'Loading...',
            details: 'Additional detail note!',
            progress: 0.65,
            margin: 10,
            dimBackground: true,
            color: '#4B9ED6', // color of indicator and labels
            // background box around indicator
            // hideBezel will override this if true
            backgroundColor: 'yellow',
            userInteractionEnabled: false, // default true. Set false so that the touches will fall through it.
            hideBezel: true, // default false, can hide the surrounding bezel
            mode: Mode.AnnularDeterminate, // see options below
            android: {
                view: this.page.nativeView, // Target view to show on top of (Defaults to entire window)
                cancelable: true,
                cancelListener: function (dialog) {
                    console.log('Loading cancelled');
                },
            },
            ios: {
                view: this.page.nativeView, // Target view to show on top of (Defaults to entire window)
                square: false,
            },
        };

        indicator.show(options);

// after some async event maybe or a timeout hide the indicator
        setTimeout(() => {
            indicator.hide();
        }, 5000);

    }
}
