import { ElementRef, OnInit } from '@angular/core';
import { DataTableRowComponent } from '../../components/row/row.component';
import { CellCallback } from '../../types/cell-callback.type';
export declare class DataTableColumnDirective implements OnInit {
    private styleClassObject;
    header: string;
    sortable: boolean;
    resizable: boolean;
    property: string;
    styleClass: string;
    cellColors: CellCallback;
    width: number | string;
    visible: boolean;
    cellTemplate: ElementRef;
    headerTemplate: ElementRef;
    getCellColor(row: DataTableRowComponent, index: number): string;
    ngOnInit(): void;
    private _initCellClass();
}
