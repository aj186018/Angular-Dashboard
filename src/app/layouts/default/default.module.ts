import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { ItemsComponent } from '../../modules/items/items.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule,MatTreeModule,MatFormFieldModule,MatInputModule, MatExpansionModule,MatSelectModule,MatListModule, MatDialogModule, MatDividerModule, MatCardModule, MatPaginatorModule,MatIconModule, MatTableModule, MatMenuModule, MatButtonModule,MatToolbarModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from '../../modules/dashboard.service';
import { DatagridsearchComponent } from '../../modules/datagridsearch/datagridsearch.component';
import { MenubuilderComponent } from '../../modules/menubuilder/menubuilder.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ItemsComponent,
    DatagridsearchComponent,
    MenubuilderComponent
  ],
  entryComponents:[ItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,MatFormFieldModule,MatInputModule,MatTreeModule,
    DragDropModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
