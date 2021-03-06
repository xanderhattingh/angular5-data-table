import { ElementRef } from '@angular/core';
import { DataTableComponent } from '../table/table.component';
export declare class DataTablePaginationComponent {
    dataTable: DataTableComponent;
    id: string;
    pageInput: ElementRef;
    Math: any;
    limits: number[];
    constructor(dataTable: DataTableComponent);
    pageBack(): void;
    pageForward(): void;
    pageFirst(): void;
    pageLast(): void;
    readonly maxPage: number;
    limit: number;
    page: number;
    validate(event: any): void;
}
