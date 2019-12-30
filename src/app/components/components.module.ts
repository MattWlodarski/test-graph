import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestGraphComponent } from './test-graph/test-graph.component';



@NgModule({
    declarations: [
        TestGraphComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        TestGraphComponent
    ]
})

export class ComponentsModule { }
