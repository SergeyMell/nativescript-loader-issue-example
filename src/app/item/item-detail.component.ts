import {Component, OnInit} from "@angular/core";

import {Item} from "./item";
import {ModalDialogParams, RouterExtensions} from '@nativescript/angular';
import {
    AndroidActivityBackPressedEventData,
    AndroidApplication,
    Application,
    Color,
    isAndroid, Screen
} from '@nativescript/core';
import {systemAppearance} from '@nativescript/core/application';
import {AnimationCurve} from '@nativescript/core/ui/enums';

@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    height = Screen.mainScreen.heightDIPs;

    constructor(private params: ModalDialogParams) {

    }

    ngOnInit(): void {
        this.item = this.params.context.item;
    }

    onLoad(args: any) {
        console.log('open dialog');
        if (isAndroid) {
            const dialog = args.object._dialogFragment.getDialog();
            console.log(dialog.findViewById(android.R.id.content).getRootView());
            const window = dialog.getWindow();
            const color = new Color('#FF1010');
            const drawable = new android.graphics.drawable.ColorDrawable(color.android); // can be simplified by using rgba
            drawable.setAlpha(255 * .5); // this take int 255
            window.setBackgroundDrawable(drawable);
        }
        setTimeout(() => {
            args.object.animate({
                translate: {
                    x: 0, y: 0
                },
                duration: 1000,
                curve: AnimationCurve.easeOut
            })
        }, 20)
    }

    closeModal(args: any) {
        args.object.closeModal();
    }
}
