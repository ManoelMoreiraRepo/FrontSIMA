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
    @Input() currentPage = 0
    @Input() totalPages = 1
    @Input() size = 20
    @Input() windowSize = 4
    @Input() showFirstLastButton = true
    @Input() routerLinkBase: string[] = []
    @Output() enviarPagina = new EventEmitter<any>();

    getNavigablePages(): number[] {
        const pages = []
        const left = Math.max(1, this.currentPage - this.windowSize)
        const right = Math.min(this.totalPages, this.currentPage + this.windowSize)
        for (let i = left; i <= right; i++) {
            pages.push(i)
        }
        return pages
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