import { ElementRef } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
export declare class DataTableHeaderComponent {
    dataTable: DataTableComponent;
    private elemRef;
    columnSelectorOpen: boolean;
    constructor(dataTable: DataTableComponent, elemRef: ElementRef);
    onClickHandler(event: any): void;
    onKeyUpHandler(event: any): void;
    onChange(event: Event): void;
}
