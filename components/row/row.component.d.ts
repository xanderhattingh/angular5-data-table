import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
export declare class DataTableRowComponent implements OnInit, OnDestroy {
    dataTable: DataTableComponent;
    private renderer;
    private elementRef;
    _this: this;
    item: any;
    index: number;
    expanded: boolean;
    private _listeners;
    private _selected;
    selectedChange: EventEmitter<{}>;
    selected: boolean;
    readonly displayIndex: number;
    getTooltip(): string;
    constructor(dataTable: DataTableComponent, renderer: Renderer2, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
