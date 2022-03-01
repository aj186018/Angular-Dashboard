import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ItemsComponent } from '../items/items.component';
import { MatDialog,MatToolbarRow } from '@angular/material';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']  
})
export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  pieChart = [];
  lineChart = [];
  tableData = [];
  item_1 = [];

  xaxis=['April','May','June','July','Aug','Sept'];
  
  dashboardData = [];
  lineChartTitle ='User Analytics'
 
  tablecards = [1,2]
  eventablecards=[{row:[{id:"trend",width:49},{id:"trend",width:49}]},{row:[{id:"pie",width:49},{id:"pie",width:49}]}];
  oddtablecards=[{row:[{id:"pie",width:32},{id:"pie",width:32},{id:"pie",width:32}]},{row:[{id:"pie",width:32},{id:"pie",width:32},{id:"pie",width:32}]}];
  mixtablecards=[{row:[{id:"trend",width:32},{id:"trend",width:32},{id:"trend",width:32}]},{row:[{id:"pie",width:49},{id:"pie",width:49}]},{row:[{id:"table",width:100}]}];
  gridLayout = "even";
  nontablecards = [];
  //this.mixtablecards;
   

  displayColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private dialog:MatDialog, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.nontablecards = this.dashboardService.getDashboardItems();
   /* this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
    this.lineChart = this.dashboardService.lineChart();
    this.tableData = this.dashboardService.tableData().data;  
    this.displayColumns = this.dashboardService.tableData().displayColumns; */
    this.paintDashboard(); 
    //console.log("dashboarddata-->"  + JSON.stringify(this.dashboardData));
  }
  openDashboardItems(){
    const dialogRef = this.dialog.open(ItemsComponent,{width:'800px',hasBackdrop:true});

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'save'){
        this.nontablecards = [];
        this.dashboardData =[];
        //this.ngOnDestroy();
        console.log(`Selected Metrics from dialog: ${result.data}`);
        this.refreshDashboardItems(result.data);       
      }
      
    });
    console.log("ashish click open dashboard button-->")
    //const dialogRef = this.dialog.open(ItemsComponent);
  }

  paintDashboard(){
        
    for (var i=0;i<this.nontablecards.length;i++)
    {
     // console.log("ashish1--->" + JSON.stringify(this.nontablecards.length));
      //console.log("ashish11--->" + JSON.stringify(this.nontablecards[0].row.length));
      for (var j=0; j<this.nontablecards[i].row.length;j++)
      {
       // console.log("ashish2-->" + JSON.stringify(this.nontablecards[i].row[j].dataapi));
        this.item_1 = this.dashboardService[this.nontablecards[i].row[j].dataapi]();
        this.dashboardData.push(this.item_1);
      //  console.log("ashish-->" + i + "-->" + JSON.stringify(this.item_1));
      }
    }
    
  }
 

  refreshDashboardItems(items:any){
      var cards = [];
      var tables = [];
      var finalCards = [];
      var temprow = [];
      var temparray = [];  
      
      var d = new Date();
      for(var i=0;i<items.length;i++)
      {
        if(items[i].widget == 'table')
         {
          tables.push(items[i]);
         }
         else
         {
          cards.push(items[i]);
         }
      }
      //console.log("cards elements are" + JSON.stringify(cards));
      //console.log("tables elements are" + JSON.stringify(tables));
      var num_card_items = cards.length;
      console.log("num_of_card -->" + num_card_items);
      
      if (num_card_items % 2 == 0)
       {      
       // console.log("finacard blank" + JSON.stringify(finalCards));
        for(var j=0;j<num_card_items;)
        {
          temparray=[];
          for(var i=0;i<2;i++)
          {
            var tempcard = cards[i+j];
            tempcard.pos = i+j+1;
            temparray.push(tempcard);
          }
          j=j+i;
          var x = {'row':temparray};
          finalCards.push(x);
        } 
        console.log("finalcards is" + JSON.stringify(finalCards));                
       }
       else 
       {
        for(var j=0;j<num_card_items-1;)
        {
          temparray=[];
          for(var i=0;i<2;i++)
          {
            var tempcard = cards[i+j];
            tempcard.pos = i+j+1;
            temparray.push(tempcard);
          }
          j=j+i;
          var x = {'row':temparray};
          finalCards.push(x);
        } 
       
        var tempcard1= new Array();
        tempcard1[0] = cards[num_card_items-1];
        tempcard1[0].width = 97;
        tempcard1[0].pos = num_card_items;
        var y = {'row':tempcard1};
        finalCards.push(y);        
          

       }
       // tables cards setting logic
       console.log("table length is" + tables.length);    
       for (var i=0;i<tables.length;i++)
        {
          var tempcard2= new Array();
          tempcard2[0] = tables[i];
          tempcard2[0].width = 97;
          tempcard2[0].pos = num_card_items+i+1;
          var z = {'row':tempcard2};
          finalCards.push(z)

        }
       console.log("finalcards is" + JSON.stringify(finalCards));    
       this.nontablecards = finalCards;
       this.dashboardService.saveDashboardItems(this.nontablecards);
       //this.ngOnInit();
       this.dashboardData =[];
       this.paintDashboard();

    }
  

}
