import { NgModule } from "@angular/core";
import { NewsListComponent } from "./new-list/news-list.component";
import { NewsDetailComponent } from "./news-detail/news-detail.component";


@NgModule({
    declarations: [NewsListComponent, NewsDetailComponent],
    exports: [NewsListComponent, NewsDetailComponent]
})
export class NewsModule {

}