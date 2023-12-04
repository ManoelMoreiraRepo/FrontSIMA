import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
    selector: 'app-pagination',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent {
    @Input() currentPage = 1
    @Input() totalPages = 1
    @Input() size = 20
    @Input() windowSize =1;
    @Input() showFirstLastButton = true
    @Input() routerLinkBase: string[] = []
    @Output() enviarPagina = new EventEmitter<any>();

    // getNavigablePages(): number[] {
    //     const pages = []
    //     const left = Math.max(1, this.currentPage - this.windowSize)
    //     const right = Math.min(this.totalPages, this.currentPage + this.windowSize)
    //     for (let i = left; i <= right; i++) {
    //         pages.push(i)
    //     }
    //     return pages
    // }

    getNavigablePages(): number[] {
        const pages = [];
        let left = Math.max(1, this.currentPage - this.windowSize);
        let right = Math.min(this.totalPages, this.currentPage + this.windowSize);
    
        const targetSize = this.windowSize * 2 + 1;
        
    
        for (let i = left; i <= right; i++) {
            pages.push(i);
        }
    
        while (pages.length < targetSize && (left > 1 || right < this.totalPages)) {
            if (right < this.totalPages) {
                pages.push(++right);
            }
            if (left > 1) {
                pages.unshift(--left);
            }
        }
    
        return pages;
    }

    upPage(){
        if(this.currentPage < this.totalPages){
            this.currentPage = this.currentPage + 1;
        }
      this.enviarPagina.emit(this.currentPage);
    }
    setPage(pagina :any){
        this.currentPage = pagina;
        this.enviarPagina.emit(this.currentPage);
    }
    downPage(){
        this.currentPage = this.currentPage - 1;
        if(this.currentPage<1){
            this.currentPage = 1;
        }
        this.enviarPagina.emit(this.currentPage);
    }
}