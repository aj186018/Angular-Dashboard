import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DashboardService {

  dashboarditems = [
   /* {
       "row":[{name:"usermgmt",dataapi:"getUserMgmt",title:"User Analytics",widget:"line",width:48,pos:1},
            {name:"browserusage",dataapi:"getBrowser",title:"Browser Breakup",widget:"pie",width:48,pos:2}]
     },
     {
       "row":[{name:"browserusage",dataapi:"getBrowser",title:"Browser Breakup",widget:"pie",width:48,pos:3},
       {name:"usermgmt",dataapi:"getUserMgmt",title:"User Analytics",widget:"line",width:48,pos:4}]
     },
     {
       "row":[{name:"publishfailreport",dataapi:"getPublishFailReport",title:"Publish Fail Report",widget:"table","displayColumns":['position', 'name', 'weight', 'symbol'],width:97,pos:5}]
     }
   */
  {
"row":[ {name:"approval",dataapi:"getApprovalBreakup",title:"Approval Breakup View",desc:"Show break up of governance via RDM UI or newly enabled email approvals",widget:"bar",width:48,pos:1},
{name:"recordpublish",dataapi:"getRecordsPublish",title:"Records to be Published",desc:"Show tables with pending publish records",widget:"pie",width:48,pos:2},
    
]
  },
  {
"row":[
  {name:"publishfailreport",dataapi:"getPublishFailReport",title:"Publish Failed Report (last execution)",desc:"Show tables which failed to publish last night",widget:"table",displayColumns:['SNo', 'Tablename','MasterTableCount','RestorePubCount','CodeSetId','Comments', 'ExecutionDate'],width:97,pos:3},
]
  }
   ];
  constructor() { }

  saveDashboardItems(items:any){
    this.dashboarditems = items;
  }
  availableDashboardItems(){
    return [
      {name:"approval",dataapi:"getApprovalBreakup",title:"Approval Breakup View",desc:"Show break up of governance via RDM UI or newly enabled email approvals",widget:"bar",width:48,pos:2},
      {name:"businessrules",dataapi:"getBusinessRules",title:"Business Rules",desc:"Show breakup of enrichment, validation, cleansing rules in system",widget:"pie",width:48,pos:2},
      {name:"recordpublish",dataapi:"getRecordsPublish",title:"Records to be Published",desc:"Show tables with pending publish records",widget:"pie",width:48,pos:1},
      {name:"brftgtdt",dataapi:"getBRF",title:"BRFs current status with Approaching target dates",desc:"Show BRFs by current status having target completion date in 5 days",widget:"pie",width:48,pos:2},
      {name:"dcrtgtdt",dataapi:"getDCR",title:"DCRs current status with Approaching target dates",desc:"Show DCRs by current status having target completion date in 5 days",widget:"pie",width:48,pos:2},      
      {name:"delegation",dataapi:"getDelegationBreakup",title:"Delegation View",desc:"Show delegation which are active, expired and deactivated",widget:"pie",width:48,pos:2},
      {name:"modelbuilder",dataapi:"getModelBuilderByStatus",title:"Models by Status",desc:"Show billing tables status in model builder",widget:"pie",width:48,pos:2},
      {name:"publishfailreport",dataapi:"getPublishFailReport",title:"Publish Failed Report (last execution)",desc:"Show tables which failed to publish last night",widget:"table",displayColumns:['SNo', 'Tablename','MasterTableCount','RestorePubCount','CodeSetId','Comments', 'ExecutionDate'],width:97,pos:5},
      {name:"stdoverlap",dataapi:"getStdOverlap",title:"Standardization Overlap Errors",desc:"Show tables with standardization overlap errors",widget:"table",displayColumns:['Tablename', 'StdErrorCount', 'BillingSystem'],width:97,pos:2},      
      {name:"usermgmt",dataapi:"getUserMgmt",title:"User Analytics",desc:"Show users created, updated, deactivated in last 12 months",widget:"line",width:48,pos:1},
     
    ];
  }
  getDashboardItems(){

    return this.dashboarditems;
  }

  bigChart() {
    return [{
      name: 'Asia',
      data: [502, 635, 809, 947, 1402, 3634, 5268],
      color:'#00B2B1'
    }, {
      name: 'Africa',
      data: [106, 107, 111, 133, 221, 767, 1766],
      color:'#C5548E'
    }, {
      name: 'Europe',
      data: [163, 203, 276, 408, 547, 729, 628],
      color:'#0098C9'
    }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201],
      color:'#E6693E'
    }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46],
      color:'#EC9F6E'
    }];
  }
  getRecordsPublish(){
    return [
      {
        name: 'Install Code CSG',
        y:786,
        sliced: true,
        selected: true,    
        color:'#00B2B1'
     },
     {
        name: 'Dwelling type CSG',
        y:27,
        color:'#C5548E'
     },
     {
        name: 'Discount Code CSG',
        y:110,
        color:'#0098C9'
     },
     {
      name: 'House Status CSG',
      y:20,
      color:''
   },
   {
    name: 'Adjustment Reason CSG',
    y:10,
    color:''
 },
 {
  name: 'MST_REFERENCE_0011_CODE',
  y:10,
  color:''
},
    ]
  }
  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    //call mdm api to get json in pie chart format
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
  lineChart() {
    //call mdm api to get json in pie chart format
    return  [
      {
         name: 'Created',
         data: [20,33,23,31,39,24,34,28,18,28,2,29],
         color:'#00B2B1'
      },
      {
         name: 'Updated',
         data: [231,104,60,46,146,94,137,86,96,20,46,200],
         color:'#C5548E'
      },
      {
         name: 'Deactivated',
         data: [30,32,25,29,12,32,33,12,26,2,0,35],
         color:'#0098C9'
      },
     
    ];
  }

  tableData() {
    //call mdm api to get json in pie chart format
    var displayColumns = ['position', 'name', 'weight', 'symbol'];
    return {"displayColumns":displayColumns,"data":[
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
      { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
      { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
      { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
      { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
      { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
      { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
      { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
      { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
      { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
      { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
    ]};
    
  }
  getStdOverlap(){
    return [
      { Tablename: 'DWELLING_TYPE_CSG', StdErrorCount: 20 , BillingSystem:'CSG'  },
      { Tablename: 'HOME_AUTOMATION_ICOMS', StdErrorCount:30 , BillingSystem: 'ICOMS'},
      { Tablename: 'BILL_TYPE_CES', StdErrorCount: 15, BillingSystem:'MOBILE'  },
      { Tablename: 'BILL_SUBTYPE_CES', StdErrorCount:35 , BillingSystem:'MOBILE'  },
      { Tablename: 'SERVICE_CODES_CSG', StdErrorCount: 22, BillingSystem: 'CSG' },
      { Tablename: 'MILL_FLAG_COM', StdErrorCount: 33, BillingSystem:'ICOMS'  },
      { Tablename: 'GATEWAY_FLG_ICOMS', StdErrorCount:56 , BillingSystem:'ICOMS'  }
    ];
  }
  getUserMgmt(){
    return  [
      {
         name: 'Created',
         data: [20,33,23,31,39,24,34,28,18,28,2,29],
         color:'#00B2B1'
      },
      {
         name: 'Updated',
         data: [231,104,60,46,146,94,137,86,96,20,46,200],
         color:'#C5548E'
      },
      {
         name: 'Deactivated',
         data: [30,32,25,29,12,32,33,12,26,2,0,35],
         color:'#0098C9'
      },
     
    ];

  }
  getApprovalBreakup(){
    return  [
      {
         name: 'Approval via Email',
         data: [20,33,23,31,39,24],
         color:'#00B2B1'
      },
      {
         name: 'Approval via UI',
         data: [80,50,60,46,36,34],
         color:'#C5548E'
      }
     
    ];

  }
  getBusinessRules(){
    return [
      {
        name: 'Validation',
        y:100,
        sliced: true,
        selected: true,    
        color:'#00B2B1'
     },
     {
        name: 'Enrichment',
        y:50,
        color:'#C5548E'
     },
     {
        name: 'Standardization',
        y:80,
        color:'#0098C9'
     },
     {
      name: 'Cleansing',
      y:120
    
   }
    
    ];
  }
  getDelegationBreakup(){
    return [
      {
        name: 'Active',
        y:10,
        sliced: true,
        selected: true,    
        color:'#00B2B1'
     },
     {
        name: 'Expired',
        y:20,
        color:'#C5548E'
     },
     {
        name: 'Deactivated',
        y:12,
        color:'#0098C9'
     }    
    ];
  }
getBrowser() {
    //call mdm api to get json in pie chart format
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 11.84
    }, {
      name: 'Firefox',
      y: 10.85
    }, {
      name: 'Edge',
      y: 4.67
    }, {
      name: 'Safari',
      y: 4.18
    }, {
      name: 'Sogou Explorer',
      y: 1.64
    }, {
      name: 'Opera',
      y: 1.6
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }

  getPublishFailReport() {
   
    return [
      { SNo: 1, Tablename: 'DWELLING_TYPE_CSG', MasterTableCount:'1965',RestorePubCount:'1963',CodeSetId:'-1',Comments:'Counts dont match', ExecutionDate:Date() },
      { SNo: 2, Tablename: 'HOME_AUTOMATION_ICOMS',MasterTableCount:'33362',RestorePubCount:'33358',CodeSetId:'-1',Comments:'Counts dont match', ExecutionDate:Date() },
      { SNo: 3, Tablename: 'BILL_TYPE_CES',MasterTableCount:'21845',RestorePubCount:'21840',CodeSetId:'-1',Comments:'Counts dont match', ExecutionDate:Date()},
      { SNo: 4, Tablename: 'Equipment_Transfers_CSG',MasterTableCount:'29233',RestorePubCount:'26758',CodeSetId:'12022',Comments:'Counts dont match', ExecutionDate:Date()},
      { SNo: 5, Tablename: 'MILL_FLAG_COM', MasterTableCount:'1542',RestorePubCount:'1375',CodeSetId:'-1',Comments:'Counts dont match',ExecutionDate:Date() },
      { SNo: 6, Tablename: 'MDMNETWORKREFERENCE',MasterTableCount:'24490',RestorePubCount:'24486',CodeSetId:'-1',Comments:'Counts dont match', ExecutionDate: Date()},
      { SNo: 7, Tablename: 'DCR_MASTER',MasterTableCount:'1978',RestorePubCount:'1975',CodeSetId:'-1',Comments:'Counts dont match',ExecutionDate:Date() }     
    ];
    
  }

  getBRF(){
    return [

      {
        name: 'Completed',
        y: 1,
        sliced: true,
        selected: true,
        color: '#00B2B1'
      },
      {
        name: 'Executive Approved',
        y: 1,
        color: '#C5548E'
      },
      {
        name: 'Implementation',
        y: 5,
        color: '#0098C9'
      },
      {
        name: 'Initiated',
        y: 9,
        color: ''
      },
      {
        name: 'Stakeholder Review',
        y: 5,
        color: ''
      },
      {
        name: 'VP Billing Approval',
        y: 2,
        color: ''
      }

    ]
  }

  getDCR(){

    return [
      {
        name: 'Completed',
        y: 2,
        sliced: true,
        selected: true,
        color: '#00B2B1'
      },
      {
        name: 'Data Sync Completed',
        y: 1,
        color: '#C5548E'
      },
      {
        name: 'Pending Approvals',
        y: 3,
        color: '#0098C9'
      },
      {
        name: 'Re-approval',
        y: 2,
        color: ''
      },

    ]
  }
 
  getModelBuilderByStatus(){

    return [
      {
        name: 'Generated',
        y: 850,
        sliced: true,
        selected: true,
        color: '#00B2B1'
      },
      {
        name: 'Draft',
        y: 50,
        color: '#C5548E'
      },
      {
        name: 'Validated',
        y: 100,
        color: '#0098C9'
      },
      {
        name: 'Pending Approval',
        y: 20,
        color: ''
      },


    ]
  }

  getBRFMaster(){
    return [
      {"BRF_ID":"BRF-8170","CREATION_DATE":"02/20/2019 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"BRF created for 4.0.1 testing Please do not modify this BRF","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/10/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"fayda, kya","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Approved"},
      {"BRF_ID":"BRF-7635","CREATION_DATE":"10/09/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"All Stakeholder tasks and Data Approval tasks are approved.","REQUESTOR_NAME":"Abbott, Paul","REQUESTOR_DEPT":"ORGANIZATION-22721477753852582","SPONSOR_NAME":"Adams, Katherine","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Adams, Katherine","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-14541","CREATION_DATE":"04/20/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Test for BIP 1370 (Mobile Product)","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-14604","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"1504 - Non Integrated BRF - DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-141","CREATION_DATE":"09/24/2018 20:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Code Repurpose Highlight","REQUESTOR_NAME":"User, Super","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, rdm","ORIGINAL_TARGET_DATE":"10/04/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"fayda, kya","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-8022","CREATION_DATE":"10/25/2018 20:00:00","BRF_STATUS":"VP Billing Approval","INITIATIVE_NAME":"new BRF for Review","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Nikhil, Nikhil","ORIGINAL_TARGET_DATE":"11/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Nikhil, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"11/08/2018 18:59:59","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Approved"},
      {"BRF_ID":"BRF-211","CREATION_DATE":"10/15/2018 20:00:00","BRF_STATUS":"Stakeholder Withdrawn","INITIATIVE_NAME":"Integrated WIthdrawn 2","REQUESTOR_NAME":"use, pwer","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"use, pwer","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"gov, bi","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-14595","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"1538 - Integrated BRF - Dwelling Type -DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"admin, table","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-92","CREATION_DATE":"08/07/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Success BRF for 2 Code Sets... With Due Date","REQUESTOR_NAME":"admin, table","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Nikhil, Nikhil","ORIGINAL_TARGET_DATE":"09/07/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"use, pwer","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-8172","CREATION_DATE":"02/20/2019 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Kotwal, Pooja == >  BRF for  4.0.1 Testing Please do not edit this BRF","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-226131486501794772","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/10/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Great Lakes","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-8183","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Stakeholder Approved","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing . Please do not edit","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"05/04/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-203","CREATION_DATE":"10/15/2018 20:00:00","BRF_STATUS":"Stakeholder Rejected","INITIATIVE_NAME":"Integrated Withdrawn 1","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"gov, bi","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"level, ds","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-7646","CREATION_DATE":"10/10/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"All Stakeholder and data approval tasks will be generated and open","REQUESTOR_NAME":"Abram, Sierra","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Adams, Kelly","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Admin, RDMAdmin","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-8181","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 data setup  .Please do not edit","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/28/2021 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"Voice Lines","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Central","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8290","CREATION_DATE":"04/24/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Testing BRF Originial For BIP-1368","REQUESTOR_NAME":"rover, app","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, rdm","ORIGINAL_TARGET_DATE":"05/02/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"ICOMS#CSG","BILLING_SYSTEM_REGION":"ICOMS - All#CSG","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"admin, table;gov, bi;level, ds;","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-8210","CREATION_DATE":"05/16/2019 00:00:00","BRF_STATUS":"Stakeholder Approved","INITIATIVE_NAME":"Introduce a New House Code in Winchester","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, rdm","ORIGINAL_TARGET_DATE":"05/31/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"ICOMS#CSG","BILLING_SYSTEM_REGION":"ICOMS - All#CSG","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Admin, LRDM","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Approved"},
      {"BRF_ID":"BRF-14871","CREATION_DATE":"08/14/2020 00:00:00","BRF_STATUS":"Implementation","INITIATIVE_NAME":"e2e biller non-int","REQUESTOR_NAME":"admin, table","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"dpi, dpi","ORIGINAL_TARGET_DATE":"08/28/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"ICOMS#CSG","BILLING_SYSTEM_REGION":"ICOMS - All#CSG","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Admin, RDM","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"08/28/2020 00:00:00","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-8007","CREATION_DATE":"10/24/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"saslkddffgasdasd","REQUESTOR_NAME":"admin, rdm","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, rdm","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"admin, rdm","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8000","CREATION_DATE":"10/24/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Fresh BRF for R618","REQUESTOR_NAME":"gov, bi","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"level, ds","ORIGINAL_TARGET_DATE":"10/30/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"level, ds","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-14593","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"1538 - Integrated BRF - Work Order Reason -DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Adams, Kelly","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-94","CREATION_DATE":"08/07/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Success BRF 2 Code Sets... Will be persisted for BRF -93 via scheduler.","REQUESTOR_NAME":"fayda, kya","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, table","ORIGINAL_TARGET_DATE":"09/07/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"use, pwer","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8174","CREATION_DATE":"02/21/2019 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing Please do not edit it","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"08/02/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Great Lakes","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-161","CREATION_DATE":"10/07/2018 20:00:00","BRF_STATUS":"VP Billing Approval","INITIATIVE_NAME":"Test for blank rte","REQUESTOR_NAME":"Admin, LRDM","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"gov, bi","ORIGINAL_TARGET_DATE":"11/09/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"gov, bi","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14552","CREATION_DATE":"04/21/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Test data for BIP 1368 (part 2)","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/30/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-14534","CREATION_DATE":"04/17/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"TEST1055 Dwell Type","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/17/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Mobile","BILLING_SYSTEM":"Arterra","BILLING_SYSTEM_REGION":"Arterra","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-8179","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing . Please do not edit this BRF","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/10/2019 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"SMB/Retail","PROD_GRP_NAME":"Wireless","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-8270","CREATION_DATE":"02/25/2020 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"temp Non Integrated","REQUESTOR_NAME":"admin, rdm","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Nikhil, Nikhil","ORIGINAL_TARGET_DATE":"03/08/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"ICOMS#CSG","BILLING_SYSTEM_REGION":"ICOMS - All#CSG","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"dpi, dpi","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Approved"},
      {"BRF_ID":"BRF-14600","CREATION_DATE":"04/28/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Test for dev data for Target Date ( Data Setup Completed & Data Standards Setup)","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"05/08/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"Data - Internet Fiber","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Abbas, Mansoor","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-8190","CREATION_DATE":"03/01/2019 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Test data upload","REQUESTOR_NAME":"User, DPI","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"User, cm2","ORIGINAL_TARGET_DATE":"03/03/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Nikhil, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8110","CREATION_DATE":"11/28/2018 18:59:59","BRF_STATUS":"Approved","INITIATIVE_NAME":"Revert BRF Testing","REQUESTOR_NAME":"use, pwer","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"use, pwer","ORIGINAL_TARGET_DATE":"12/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Nikhil, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-223","CREATION_DATE":"10/16/2018 20:00:00","BRF_STATUS":"VP Billing Approval","INITIATIVE_NAME":"Testing Approval Tasks","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"level, ds","ORIGINAL_TARGET_DATE":"11/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"admin, rdm","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-8180","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Completed","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 data setup  .Please do not edit","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"04/06/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - South","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8100","CREATION_DATE":"11/26/2018 18:59:59","BRF_STATUS":"Governance Approval","INITIATIVE_NAME":"Zindagi Aur Kuch Bhi Nahi","REQUESTOR_NAME":"gov, bi","REQUESTOR_DEPT":"ORGANIZATION-22621479755388136","SPONSOR_NAME":"level, ds","ORIGINAL_TARGET_DATE":"12/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Wireless","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"fayda, kya","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14602","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"1504 - Integrated BRF -DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-7641","CREATION_DATE":"10/09/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Open Stakeholder tasks and Data Approval Tasks will be rejected. 2 Tasks on Stakeholder and 2 on data approval will be in approved state The Stakeholder Task that drives the rejection should have comments associated with it.","REQUESTOR_NAME":"Adams, Katherine","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Admin, RDMAdmin","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Abbott, Paul","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-8031","CREATION_DATE":"10/29/2018 20:00:00","BRF_STATUS":"VP Billing Approval","INITIATIVE_NAME":"Non Integrated 2","REQUESTOR_NAME":"level, ds","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"mail, newUser","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"fayda, kya","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14554","CREATION_DATE":"04/21/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Test data for 1055 only Billingrecord","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/30/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-8178","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing . Please do not edit this BRF","REQUESTOR_NAME":"User, DPI","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"gov, bi","ORIGINAL_TARGET_DATE":"05/04/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"mail, newUser","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14598","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"Test for billing team reviewer 819 B","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"05/02/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"Data - Internet Fiber","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Admin, RDMAdmin;Agin, Donna;Agnvall, Peter","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14566","CREATION_DATE":"04/22/2020 00:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Test for Integrated BRF 1107","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/30/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"FTTP Transport#Other","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8040","CREATION_DATE":"10/30/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"testing javascripts","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, rdm","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Nikhil, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-7013","CREATION_DATE":"06/07/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"3.04 - MST_SERV_STAT_SYS_CSG","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-22651486501516001","SPONSOR_NAME":"Admin, RDMAdmin","ORIGINAL_TARGET_DATE":"04/24/2019 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Admin, RDMAdmin","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-14597","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"Test for Billing reviewer 819","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"05/02/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"Data - Internet Fiber","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Abbas, Mansoor;Abbott, Paul;Abney, Trisha","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14590","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"Test for 828 BRF for manage attachments","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/30/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Abbas, Mansoor","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14603","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"1504 - Integrated BRF -DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-14601","CREATION_DATE":"04/28/2020 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Test for Dev data BIP 1371 (","REQUESTOR_NAME":"","REQUESTOR_DEPT":"","SPONSOR_NAME":"","ORIGINAL_TARGET_DATE":"","BRF_CATEGORY":"","CUSTOMER_SEGMENT":"","PROD_GRP_NAME":"","BILLING_SYSTEM":"","BILLING_SYSTEM_REGION":"","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"","DATE_REVIEWED_BILLING":"","DATE_REVIEWED_REQTS":"","IMPLEMENTED":"","IS_GOVERNANCE_APPROVED":"","DATA_STATUS":""},
      {"BRF_ID":"nsave","CREATION_DATE":"Save, Nikhil","BRF_STATUS":"ORGANIZATION-227461470174666744","INITIATIVE_NAME":"nsave","REQUESTOR_NAME":"?","REQUESTOR_DEPT":"05/01/2020 00:00:00","SPONSOR_NAME":"?","ORIGINAL_TARGET_DATE":"?","BRF_CATEGORY":"ICOMS","CUSTOMER_SEGMENT":"?","PROD_GRP_NAME":"Abbas, Mansoor","BILLING_SYSTEM":"?","BILLING_SYSTEM_REGION":"?","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"BackEnd","IS_GOVERNANCE_APPROVED":"nsave","DATA_STATUS":"0"},
      {"BRF_ID":"BRF-8175","CREATION_DATE":"02/21/2019 00:00:00","BRF_STATUS":"In Design","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing Please do not edit it","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"04/07/2019 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Northeast","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Code Sets Defined"},
      {"BRF_ID":"BRF-14592","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"1538 - Integrated BRF - House Status -DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"ad, steven","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-162","CREATION_DATE":"10/07/2018 20:00:00","BRF_STATUS":"Stakeholder Rejected","INITIATIVE_NAME":"test for blank #2","REQUESTOR_NAME":"use, pwer","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"user, user","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"User, Super","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-8006","CREATION_DATE":"10/24/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"asdlsdfndsfdsfvdfs","REQUESTOR_NAME":"gov, bi","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"gov, bi","ORIGINAL_TARGET_DATE":"11/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH","PROD_GRP_NAME":"Data - Ethernet","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"gov, bi","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-8120","CREATION_DATE":"01/28/2019 18:59:59","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"data search 1&#10;data search 2&#10;data search 3","REQUESTOR_NAME":"fayda, kya","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, rdm","ORIGINAL_TARGET_DATE":"02/09/2019 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG#ICOMS","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"use, pwer","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-7640","CREATION_DATE":"10/09/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"All Stakeholder tasks and Data Approval Tasks will be rejected. The Stakeholder Task that drives the rejection should have comments associated with it.","REQUESTOR_NAME":"Adams, Mark","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Abram, Sierra","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Abbott, Paul","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-93","CREATION_DATE":"08/07/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Fail BRF for 2 Code Sets... First without Due Date... Then with Due Date","REQUESTOR_NAME":"admin, rdm","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"fayda, kya","ORIGINAL_TARGET_DATE":"09/06/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"use, pwer","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8173","CREATION_DATE":"02/21/2019 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing . Please do not edit this BRF","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/09/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Central","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-91","CREATION_DATE":"08/07/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"Success BRF for 2 Code Sets.... No Due Date","REQUESTOR_NAME":"fayda, kya","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"fayda, kya","ORIGINAL_TARGET_DATE":"09/06/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"mail, newUser","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-14606","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"1504 - Non Integrated BRF - DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-8171","CREATION_DATE":"02/20/2019 00:00:00","BRF_STATUS":"Completed","INITIATIVE_NAME":"Kotwal, Pooja ==> bRF 4.0.1 testingPlease do not edit this BRF","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"02/20/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Carolinas#CSG - West","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-222","CREATION_DATE":"10/16/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Integrated BRF 2","REQUESTOR_NAME":"gov, bi","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"mail, newUser","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"fayda, kya","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-14594","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"1538 - Integrated BRF - VIP Flag -DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Alaguvel, Ramya","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-14555","CREATION_DATE":"04/21/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Test for 1055 only Enterprise record","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/29/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-14540","CREATION_DATE":"04/20/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"Test for BIP-1370 (Summary Product)","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/30/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Not Applicable","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-8050","CREATION_DATE":"10/31/2018 20:00:00","BRF_STATUS":"Governance Approval","INITIATIVE_NAME":"aassjkdjkdsfjksd","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, table","ORIGINAL_TARGET_DATE":"12/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"admin, rdm","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Approved"},
      {"BRF_ID":"BRF-7012","CREATION_DATE":"06/07/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"3.04 - MST_DROP_STAT_SYS_CSG","REQUESTOR_NAME":"Ahmad, Laique","REQUESTOR_DEPT":"ORGANIZATION-22721477753852582","SPONSOR_NAME":"Adams, Kelly","ORIGINAL_TARGET_DATE":"12/27/2018 18:59:59","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Yozamp, Jeannette","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-7636","CREATION_DATE":"10/09/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"All Stakeholder tasks and 2 (subset) of Data Approval tasks are approved.","REQUESTOR_NAME":"Adams, Kelly","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Admin, LRDM","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Adams, Kelly","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-8291","CREATION_DATE":"04/24/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"BRF with Enterprise","REQUESTOR_NAME":"admin, rdm","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Nikhil, Nikhil","ORIGINAL_TARGET_DATE":"05/08/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"ICOMS#CSG","BILLING_SYSTEM_REGION":"ICOMS - All#CSG","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"dpi, dpi;hol, st;mail, newUser;","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-221","CREATION_DATE":"10/16/2018 20:00:00","BRF_STATUS":"Stakeholder Rejected","INITIATIVE_NAME":"Setup 1 BRF Integrated","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"level, ds","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"gov, bi","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-14605","CREATION_DATE":"04/27/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"1504 - Non Integrated BRF - DO NOT USE BRF","REQUESTOR_NAME":"Admin, RDMAdmin","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Agin, Donna","ORIGINAL_TARGET_DATE":"04/25/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Retail","PROD_GRP_NAME":"FTTP Transport","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-7643","CREATION_DATE":"10/09/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Add two code sets no repurprose scenarios will be involved. Downtime Required and OTF Status fields will be poplated.","REQUESTOR_NAME":"admin, table","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"admin, table","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"admin, table","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Pending Data Approval"},
      {"BRF_ID":"BRF-8061","CREATION_DATE":"10/31/2018 20:00:00","BRF_STATUS":"Approved","INITIATIVE_NAME":"ajksajskkjadkjsa","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"level, ds","ORIGINAL_TARGET_DATE":"12/08/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Nikhil, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-14553","CREATION_DATE":"04/21/2020 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"test data for 1055 Billing and Enterprise record","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/29/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"MDU","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-7644","CREATION_DATE":"10/09/2018 20:00:00","BRF_STATUS":"Stakeholder Review","INITIATIVE_NAME":"Add three  code sets and include both insert and updates. One of the code sets will include re-purpose tickets while the other will not","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Admin, LRDM","ORIGINAL_TARGET_DATE":"10/13/2018 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Video#Voice Lines","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"Nikhil, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-14551","CREATION_DATE":"04/21/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"test data for BIP:1368","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/30/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"Data - Internet Fiber","BILLING_SYSTEM":"ICOMS","BILLING_SYSTEM_REGION":"ICOMS - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup Completed"},
      {"BRF_ID":"BRF-8176","CREATION_DATE":"02/21/2019 00:00:00","BRF_STATUS":"Implementation","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing Please do not edit it","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"04/06/2019 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Northeast","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-8020","CREATION_DATE":"10/25/2018 20:00:00","BRF_STATUS":"VP Billing Approval","INITIATIVE_NAME":"New BRF for testing Issues","REQUESTOR_NAME":"Nikhil, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"Nikhil, Nikhil","ORIGINAL_TARGET_DATE":"11/09/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"admin, rdm","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Approved"},
      {"BRF_ID":"BRF-14536","CREATION_DATE":"04/17/2020 00:00:00","BRF_STATUS":"Data Standards Setup","INITIATIVE_NAME":"TEST-1055BIlling","REQUESTOR_NAME":"Save, Nikhil","REQUESTOR_DEPT":"ORGANIZATION-226161515520898683","SPONSOR_NAME":"Save, Nikhil","ORIGINAL_TARGET_DATE":"04/17/2020 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Mobile","BILLING_SYSTEM":"Arterra","BILLING_SYSTEM_REGION":"Arterra","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Save, Nikhil","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Data Setup In Progress"},
      {"BRF_ID":"BRF-8182","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Completed","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing . Please do not edit","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/09/2019 00:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/Wholesale","PROD_GRP_NAME":"WiFi","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - All","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"Kotwal, Pooja","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"1","DATA_STATUS":"Completed Data Sync"},
      {"BRF_ID":"BRF-8177","CREATION_DATE":"02/26/2019 00:00:00","BRF_STATUS":"Initiated","INITIATIVE_NAME":"Kotwal, Pooja ==> BRF created for 4.1.0 testing Please do not edit it","REQUESTOR_NAME":"Kotwal, Pooja","REQUESTOR_DEPT":"ORGANIZATION-227461470174666744","SPONSOR_NAME":"Kotwal, Pooja","ORIGINAL_TARGET_DATE":"03/14/2021 00:00:00","BRF_CATEGORY":"?","CUSTOMER_SEGMENT":"Residential","PROD_GRP_NAME":"Voice Lines","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Northwest","BILLING_DEPT":"?","BILLING_TEAM_REVIEWER":"?","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Initiated"},
      {"BRF_ID":"BRF-202","CREATION_DATE":"10/15/2018 20:00:00","BRF_STATUS":"Stakeholder Rejected","INITIATIVE_NAME":"integrated 1 rejected","REQUESTOR_NAME":"gov, bi","REQUESTOR_DEPT":"ORGANIZATION-227171477755073812","SPONSOR_NAME":"level, ds","ORIGINAL_TARGET_DATE":"11/10/2018 18:59:59","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Enterprise/CTBH#Enterprise/Retail#Enterprise/Wholesale","PROD_GRP_NAME":"Data - Ethernet#Data - Internet COAX#Data - Internet Fiber","BILLING_SYSTEM":"CSG#ICOMS","BILLING_SYSTEM_REGION":"CSG - All#ICOMS - All","BILLING_DEPT":"","BILLING_TEAM_REVIEWER":"gov, bi","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Rejected"},
      {"BRF_ID":"BRF-13584","CREATION_DATE":"06/17/2019 20:00:00","BRF_STATUS":"Stakeholder Approved","INITIATIVE_NAME":"Build adjustment codes used to apply deposit & interest in CSG","REQUESTOR_NAME":"Otto, Nancy","REQUESTOR_DEPT":"ORGANIZATION-22641539030246066","SPONSOR_NAME":"Laughlin, Tim","ORIGINAL_TARGET_DATE":"07/29/2019 20:00:00","BRF_CATEGORY":"Standard BRF","CUSTOMER_SEGMENT":"Residential#SMB/Retail","PROD_GRP_NAME":"Other","BILLING_SYSTEM":"CSG","BILLING_SYSTEM_REGION":"CSG - Central#CSG - New York City#CSG - Texas#CSG - West","BILLING_DEPT":"Billing Design (Resi/SMB)","BILLING_TEAM_REVIEWER":"Holland, Jamel","DATE_REVIEWED_BILLING":"?","DATE_REVIEWED_REQTS":"?","IMPLEMENTED":"?","IS_GOVERNANCE_APPROVED":"0","DATA_STATUS":"Approved"}
      ]
  }
}
