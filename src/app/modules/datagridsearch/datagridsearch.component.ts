import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ItemsComponent } from '../items/items.component';
import { MatDialog,MatToolbarRow,MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-datagridsearch',
  templateUrl: './datagridsearch.component.html',
  styleUrls: ['./datagridsearch.component.scss']  
})
export class DatagridsearchComponent implements OnInit {

  tableData : any;
  title ='BRF Master'; 
  displayColumns1: string[] =  ['SNo', 'Tablename','MasterTableCount','RestorePubCount','CodeSetId','Comments', 'ExecutionDate'];
  displayColumns=['BRF_ID','CREATION_DATE','BRF_STATUS','INITIATIVE_NAME','REQUESTOR_NAME','SPONSOR_NAME','BRF_CATEGORY','PROD_GRP_NAME','BILLING_SYSTEM'];
  dataSource = new MatTableDataSource();

  constructor(private dialog:MatDialog, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.tableData = this.dashboardService.getBRFMaster();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.tableData=this.dataSource;
  }

}
