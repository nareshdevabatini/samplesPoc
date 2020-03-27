import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ViewerComponent, AR_EXPORTS, PdfExportService, HtmlExportService, XlsxExportService } from '@grapecity/activereports-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blood-report',
  templateUrl: './blood-report.component.html',
  styleUrls: ['./blood-report.component.css'],
  providers: [
    {
      provide: AR_EXPORTS,
      useClass: PdfExportService,
      multi: true
    },
    {
      provide: AR_EXPORTS,
      useClass: HtmlExportService,
      multi: true
    },
    {
      provide: AR_EXPORTS,
      useClass: XlsxExportService,
      multi: true
    }
  ]
})
export class BloodReportComponent implements AfterViewInit {
  @ViewChild('reportviewer', { static: false }) reportviewer: ViewerComponent;

  constructor(protected router: Router, ) { }
  ngAfterViewInit() {
    this.reportviewer.init.subscribe(() => {
      this.reportviewer.open({
        "Name": "BloodTestResult.rdlx",
        "Type": "report",
        "Body": {
            "Type": "section",
            "Name": "Body",
            "Height": "5.7834in",
            "ReportItems": [
                {
                    "Type": "list",
                    "ReportItems": [
                        {
                            "Type": "table",
                            "TableColumns": [
                                {
                                    "Type": "tablecolumn",
                                    "Width": "2.1487in"
                                },
                                {
                                    "Type": "tablecolumn",
                                    "Width": "1.15in"
                                },
                                {
                                    "Type": "tablecolumn",
                                    "Width": "0.3in"
                                },
                                {
                                    "Type": "tablecolumn",
                                    "Width": "1.5503in"
                                },
                                {
                                    "Type": "tablecolumn",
                                    "Width": "1.339in"
                                }
                            ],
                            "Header": {
                                "Type": "tableheader",
                                "TableRows": [
                                    {
                                        "Type": "tablerow",
                                        "Height": "0.3in",
                                        "TableCells": [
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "CanGrow": true,
                                                    "Value": "=First(Fields!TestGroup.Value)",
                                                    "Name": "TextBox24",
                                                    "Style": {
                                                        "FontFamily": "Lucida Sans",
                                                        "VerticalAlign": "Middle",
                                                        "PaddingLeft": "0.2in",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "Border": {
                                                            "Color": "#e4e4e4"
                                                        },
                                                        "BottomBorder": {
                                                            "Style": "Solid"
                                                        },
                                                        "StyleName": "=\"\"",
                                                        "FontWeight": "SemiBold"
                                                    },
                                                    "KeepTogether": true,
                                                    "DataElementName": "TextBox24",
                                                    "Width": "6.488in",
                                                    "Height": "0.3in"
                                                },
                                                "RowSpan": 1,
                                                "ColSpan": 5,
                                                "AutoMergeMode": "Never"
                                            },
                                            null,
                                            null,
                                            null,
                                            null
                                        ]
                                    }
                                ]
                            },
                            "Details": {
                                "Type": "tabledetails",
                                "TableRows": [
                                    {
                                        "Type": "tablerow",
                                        "Height": "0.3in",
                                        "TableCells": [
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "CanGrow": true,
                                                    "Value": "=Fields!Test.Value",
                                                    "Name": "TextBox27",
                                                    "Style": {
                                                        "BackgroundColor": "=IIF(RowNumber() Mod 2 = 0, \"#f8f8f8\", \"White\")",
                                                        "FontFamily": "Lucida Sans",
                                                        "FontSize": "9pt",
                                                        "TextAlign": "Left",
                                                        "VerticalAlign": "Middle",
                                                        "PaddingLeft": "0.4in",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "StyleName": "=\"\""
                                                    },
                                                    "KeepTogether": true,
                                                    "DataElementName": "TextBox27",
                                                    "Width": "2.1487in",
                                                    "Height": "0.3in"
                                                },
                                                "RowSpan": 1,
                                                "ColSpan": 1,
                                                "AutoMergeMode": "Never"
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "CanGrow": true,
                                                    "Value": "=Fields!Result.Value",
                                                    "Name": "TextBox28",
                                                    "Style": {
                                                        "FontFamily": "Lucida Sans",
                                                        "FontSize": "9pt",
                                                        "FontWeight": "=IIF(Convert.ToDouble(Fields!Result.Value) <= Convert.ToDouble(Fields!ReferenceInterval.Value.Substring(Fields!ReferenceInterval.Value.IndexOf(\"-\") + 2)) and Convert.ToDouble(Fields!Result.Value) >= Convert.ToDouble(Fields!ReferenceInterval.Value.Substring(0, Fields!ReferenceInterval.Value.IndexOf(\" - \"))),\"Normal\",\"Bold\")",
                                                        "TextAlign": "Right",
                                                        "VerticalAlign": "Middle",
                                                        "PaddingLeft": "2pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "StyleName": "=\"\"",
                                                        "BackgroundColor": "=IIF(RowNumber() Mod 2 = 0, \"#f8f8f8\", \"White\")"
                                                    },
                                                    "KeepTogether": true,
                                                    "DataElementName": "TextBox28",
                                                    "Width": "1.15in",
                                                    "Height": "0.3in"
                                                },
                                                "RowSpan": 1,
                                                "ColSpan": 1,
                                                "AutoMergeMode": "Never"
                                            },
                                            {
                                                "Item": {
                                                    "Type": "rectangle",
                                                    "Width": "0.3in",
                                                    "Height": "0.3in",
                                                    "ReportItems": [
                                                        {
                                                            "Type": "image",
                                                            "Source": "Database",
                                                            "Value": "=IconSet(\"GrayArrows\", IIF(Convert.ToDouble(Fields!Result.Value) >= Convert.ToDouble(Fields!ReferenceInterval.Value.Substring(Fields!ReferenceInterval.Value.IndexOf(\"-\") + 2)) AND Convert.ToDouble(Fields!ReferenceInterval.Value.Substring(Fields!ReferenceInterval.Value.IndexOf(\"-\") + 2)) <> 59 ,\"True\",\"False\"), False, False, False, IIF(Convert.ToDouble(Fields!Result.Value) <= Convert.ToDouble(Fields!ReferenceInterval.Value.Substring(0, Fields!ReferenceInterval.Value.IndexOf(\" - \"))),\"True\",\"False\"))",
                                                            "Name": "Image1",
                                                            "Style": {
                                                                "StyleName": "=\"\""
                                                            },
                                                            "KeepTogether": false,
                                                            "DataElementName": "Image1",
                                                            "DataElementOutput": "Auto",
                                                            "Width": "0.3in",
                                                            "Height": "0.3in"
                                                        }
                                                    ],
                                                    "Style": {
                                                        "BackgroundColor": "=IIF(RowNumber() Mod 2 = 0, \"#f8f8f8\", \"White\")"
                                                    },
                                                    "Name": "Container3"
                                                },
                                                "RowSpan": 1,
                                                "ColSpan": 1,
                                                "AutoMergeMode": "Never"
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "CanGrow": true,
                                                    "Value": "=Fields!ReferenceInterval.Value",
                                                    "Name": "TextBox29",
                                                    "Style": {
                                                        "BackgroundColor": "=IIF(RowNumber() Mod 2 = 0, \"#f8f8f8\", \"White\")",
                                                        "FontFamily": "Lucida Sans",
                                                        "FontSize": "9pt",
                                                        "TextAlign": "Right",
                                                        "VerticalAlign": "Middle",
                                                        "PaddingLeft": "2pt",
                                                        "PaddingRight": "2pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "StyleName": "=\"\""
                                                    },
                                                    "KeepTogether": true,
                                                    "DataElementName": "TextBox29",
                                                    "Width": "1.5503in",
                                                    "Height": "0.3in"
                                                },
                                                "RowSpan": 1,
                                                "ColSpan": 1,
                                                "AutoMergeMode": "Never"
                                            },
                                            {
                                                "Item": {
                                                    "Type": "textbox",
                                                    "CanGrow": true,
                                                    "Value": "=Fields!Units.Value",
                                                    "Name": "TextBox22",
                                                    "Style": {
                                                        "BackgroundColor": "=IIF(RowNumber() Mod 2 = 0, \"#f8f8f8\", \"White\")",
                                                        "FontFamily": "Lucida Sans",
                                                        "FontSize": "9pt",
                                                        "TextAlign": "Right",
                                                        "VerticalAlign": "Middle",
                                                        "PaddingLeft": "2pt",
                                                        "PaddingRight": "5pt",
                                                        "PaddingTop": "2pt",
                                                        "PaddingBottom": "2pt",
                                                        "StyleName": "=\"\""
                                                    },
                                                    "KeepTogether": true,
                                                    "DataElementName": "TextBox22",
                                                    "Width": "1.339in",
                                                    "Height": "0.3in"
                                                },
                                                "RowSpan": 1,
                                                "ColSpan": 1,
                                                "AutoMergeMode": "Never"
                                            }
                                        ]
                                    }
                                ],
                                "Group": {
                                    "PageBreakDisabled": "false",
                                    "PrintFooterAtBottom": false,
                                    "Name": ""
                                },
                                "KeepTogether": false
                            },
                            "DetailDataElementOutput": "Output",
                            "DataSetName": "Results",
                            "Name": "Table1",
                            "Width": "6.488in",
                            "Height": "0.6in",
                            "ZIndex": 40,
                            "Style": {
                                "StyleName": "=\"\""
                            }
                        }
                    ],
                    "Group": {
                        "Name": "List1_Detail_Group",
                        "GroupExpressions": [
                            "=Fields!TestGroup.Value"
                        ],
                        "PageBreakDisabled": "false"
                    },
                    "DataSetName": "Results",
                    "Name": "List1",
                    "Top": "2.65in",
                    "Width": "6.488in",
                    "Height": "0.6183in",
                    "ZIndex": 36,
                    "Style": {
                        "FontFamily": "Lucida Sans",
                        "FontSize": "9pt",
                        "VerticalAlign": "Bottom",
                        "Border": {
                            "Style": "Solid",
                            "Color": "#e4e4e4"
                        },
                        "StyleName": "=\"\""
                    }
                },
                {
                    "Type": "textbox",
                    "CanGrow": true,
                    "Value": "=\"Page \" & Globals!PageNumber & \" of \" & Globals!TotalPages",
                    "Name": "TextBox31",
                    "Top": "5.5334in",
                    "Left": "3.9744in",
                    "Width": "2.5089in",
                    "Height": "0.25in",
                    "ZIndex": 38,
                    "Style": {
                        "FontFamily": "Lucida Sans",
                        "FontSize": "9pt",
                        "TextAlign": "Right",
                        "PaddingLeft": "2pt",
                        "PaddingRight": "2pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox31"
                },
                {
                    "Type": "textbox",
                    "CanGrow": true,
                    "Value": "=Lookup(Fields!PatientID.Value, Fields!PatientID.Value, Fields!Comments.Value, \"PatientInfo\")",
                    "Name": "TextBox25",
                    "Top": "3.75in",
                    "Width": "6.499in",
                    "Height": "0.25in",
                    "ZIndex": 37,
                    "Style": {
                        "FontFamily": "Lucida Sans",
                        "FontSize": "9pt",
                        "VerticalAlign": "Bottom",
                        "PaddingLeft": "0.1in",
                        "PaddingRight": "1pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "WrapMode": "CharWrap",
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox25"
                },
                {
                    "Type": "textbox",
                    "CanGrow": true,
                    "Value": "This document contains private and confidential health information protected by state and federal law. If you have received this document in error, please call (123) 456-7890.",
                    "Name": "TextBox30",
                    "Top": "4.2in",
                    "Width": "6.499in",
                    "Height": "0.45in",
                    "ZIndex": 37,
                    "Style": {
                        "FontFamily": "Lucida Sans",
                        "FontSize": "9pt",
                        "TextAlign": "Left",
                        "VerticalAlign": "Bottom",
                        "PaddingLeft": "0.1in",
                        "PaddingRight": "2pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox30"
                },
                {
                    "Type": "textbox",
                    "Value": "Tests",
                    "Name": "TextBox34",
                    "Top": "2.35in",
                    "Width": "2.15in",
                    "Height": "0.3in",
                    "ZIndex": 5,
                    "Style": {
                        "BackgroundColor": "#f8f8f8",
                        "FontFamily": "Lucida Sans",
                        "FontWeight": "Thin",
                        "TextAlign": "Left",
                        "VerticalAlign": "Bottom",
                        "Color": "#551e5f",
                        "PaddingLeft": "0.1in",
                        "PaddingRight": "2pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "Border": {
                            "Color": "#e4e4e4"
                        },
                        "TopBorder": {
                            "Style": "Solid"
                        },
                        "BottomBorder": {
                            "Style": "Solid"
                        },
                        "LeftBorder": {
                            "Style": "Solid"
                        },
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox34"
                },
                {
                    "Type": "textbox",
                    "Value": "Result",
                    "Name": "TextBox35",
                    "Top": "2.35in",
                    "Left": "2.15in",
                    "Width": "1.398676in",
                    "Height": "0.3in",
                    "ZIndex": 9,
                    "Style": {
                        "BackgroundColor": "#f8f8f8",
                        "FontFamily": "Lucida Sans",
                        "FontWeight": "Thin",
                        "TextAlign": "Right",
                        "VerticalAlign": "Bottom",
                        "Color": "#551e5f",
                        "PaddingLeft": "2pt",
                        "PaddingRight": "2pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "Border": {
                            "Color": "#e4e4e4"
                        },
                        "TopBorder": {
                            "Style": "Solid"
                        },
                        "BottomBorder": {
                            "Style": "Solid"
                        },
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox35"
                },
                {
                    "Type": "textbox",
                    "Value": "Reference Range",
                    "Name": "TextBox36",
                    "Top": "2.35in",
                    "Left": "3.548676in",
                    "Width": "1.550338in",
                    "Height": "0.3in",
                    "ZIndex": 4,
                    "Style": {
                        "BackgroundColor": "#f8f8f8",
                        "FontFamily": "Lucida Sans",
                        "FontWeight": "Thin",
                        "TextAlign": "Right",
                        "VerticalAlign": "Bottom",
                        "Color": "#551e5f",
                        "PaddingLeft": "2pt",
                        "PaddingRight": "2pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "Border": {
                            "Color": "#e4e4e4"
                        },
                        "TopBorder": {
                            "Style": "Solid"
                        },
                        "BottomBorder": {
                            "Style": "Solid"
                        },
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox36"
                },
                {
                    "Type": "textbox",
                    "Value": "Units",
                    "Name": "TextBox20",
                    "Top": "2.35in",
                    "Left": "5.1in",
                    "Width": "1.39in",
                    "Height": "0.3in",
                    "ZIndex": 9,
                    "Style": {
                        "BackgroundColor": "#f8f8f8",
                        "FontFamily": "Lucida Sans",
                        "FontWeight": "Thin",
                        "TextAlign": "Right",
                        "VerticalAlign": "Middle",
                        "Color": "#551e5f",
                        "PaddingLeft": "2pt",
                        "PaddingRight": "5pt",
                        "PaddingTop": "2pt",
                        "PaddingBottom": "2pt",
                        "Border": {
                            "Color": "#e4e4e4"
                        },
                        "TopBorder": {
                            "Style": "Solid"
                        },
                        "BottomBorder": {
                            "Style": "Solid"
                        },
                        "RightBorder": {
                            "Style": "Solid"
                        },
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true,
                    "DataElementName": "TextBox20"
                },
                {
                    "Type": "list",
                    "ReportItems": [
                        {
                            "Type": "textbox",
                            "Value": "ID",
                            "Name": "TextBox23",
                            "Top": "0.3in",
                            "Width": "1.2in",
                            "Height": "0.3in",
                            "ZIndex": 10,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0.1in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox23"
                        },
                        {
                            "Type": "textbox",
                            "Value": "NAME:\r\n",
                            "Name": "TextBox2",
                            "Top": "0.6in",
                            "Left": "0.001565in",
                            "Width": "1.198435in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0.1in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox2"
                        },
                        {
                            "Type": "textbox",
                            "Value": "GENDER:",
                            "Name": "TextBox26",
                            "Top": "0.9in",
                            "Width": "1.2in",
                            "Height": "0.3in",
                            "ZIndex": 21,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0.1in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox26"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=Fields!PatientFName.Value & \" \" & Fields!PatientLName.Value",
                            "Name": "TextBox38",
                            "Top": "0.6in",
                            "Left": "1.2in",
                            "Width": "1.8in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox38"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=Fields!PatientID.Value",
                            "Name": "TextBox40",
                            "Top": "0.3in",
                            "Left": "1.2in",
                            "Width": "1.8in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox40"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=IIF(Fields!PatientSex.Value= \"M\", \"Male\", \"Female\")",
                            "Name": "TextBox41",
                            "Top": "0.9in",
                            "Left": "1.2in",
                            "Width": "1.8in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox41"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=Year(DateTime.Now()) - Year(DateTime.Parse(Fields!DOB.Value))",
                            "Name": "TextBox42",
                            "Top": "1.2in",
                            "Left": "1.2in",
                            "Width": "1.8in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox42"
                        },
                        {
                            "Type": "textbox",
                            "Value": "AGE:",
                            "Name": "TextBox43",
                            "Top": "1.2in",
                            "Left": "0.001565in",
                            "Width": "1.198435in",
                            "Height": "0.3in",
                            "ZIndex": 21,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0.1in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox43"
                        },
                        {
                            "Type": "textbox",
                            "Value": "DOCTOR:",
                            "Name": "TextBox44",
                            "Top": "1.5in",
                            "Width": "1.2in",
                            "Height": "0.3in",
                            "ZIndex": 21,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0.1in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox44"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=\"Dr. \" & Fields!PatientDoctor.Value",
                            "Name": "TextBox45",
                            "Top": "1.5in",
                            "Left": "1.2in",
                            "Width": "1.8in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox45"
                        },
                        {
                            "Type": "textbox",
                            "Value": "SPECIMEN:",
                            "Name": "TextBox4",
                            "Top": "0.3in",
                            "Left": "3.45in",
                            "Width": "1.25in",
                            "Height": "0.3in",
                            "ZIndex": 23,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox4"
                        },
                        {
                            "Type": "textbox",
                            "Value": "COLLECTED:",
                            "Name": "TextBox39",
                            "Top": "0.9in",
                            "Left": "3.45in",
                            "Width": "1.25in",
                            "Height": "0.3in",
                            "ZIndex": 21,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox39"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=DateTime.Parse(Fields!DateReported.Value).AddYears(Year(Now()) - 1 - Year(DateTime.Parse(Fields!DateReported.Value))).ToString(\"MM/dd/yyyy\")",
                            "Name": "TextBox46",
                            "Top": "0.9in",
                            "Left": "4.7in",
                            "Width": "1.75in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Right",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox46"
                        },
                        {
                            "Type": "textbox",
                            "Value": "RECEIVED:",
                            "Name": "TextBox47",
                            "Top": "1.2in",
                            "Left": "3.45in",
                            "Width": "1.25in",
                            "Height": "0.3in",
                            "ZIndex": 21,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox47"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=Fields!SpecimanNo.Value",
                            "Name": "TextBox48",
                            "Top": "0.3in",
                            "Left": "4.7in",
                            "Width": "1.75in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Right",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox48"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=Fields!ControlNo.Value",
                            "Name": "TextBox49",
                            "Top": "0.6in",
                            "Left": "4.7in",
                            "Width": "1.75in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Right",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox49"
                        },
                        {
                            "Type": "textbox",
                            "Value": "LAB ID:",
                            "Name": "TextBox50",
                            "Top": "0.6in",
                            "Left": "3.45in",
                            "Width": "1.25in",
                            "Height": "0.3in",
                            "ZIndex": 21,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox50"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=DateTime.Parse(Fields!DateCollected.Value).AddYears(Year(Now()) - 1 - Year(DateTime.Parse(Fields!DateCollected.Value))).ToString(\"MM/dd/yyyy\")",
                            "Name": "TextBox51",
                            "Top": "1.2in",
                            "Left": "4.7in",
                            "Width": "1.75in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Right",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox51"
                        },
                        {
                            "Type": "textbox",
                            "Value": "=((DateTime.Parse(Fields!DateReported.Value).AddYears(Year(Now()) - 1 - Year(DateTime.Parse(Fields!DateReported.Value)))).AddDays(Day(DateTime.Parse(Fields!DateReported.Value)))).ToString(\"MM/dd/yyyy\")",
                            "Name": "TextBox37",
                            "Top": "1.5in",
                            "Left": "4.7in",
                            "Width": "1.75in",
                            "Height": "0.3in",
                            "ZIndex": 11,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "TextAlign": "Right",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox37"
                        },
                        {
                            "Type": "textbox",
                            "Value": "COMPLETED:",
                            "Name": "TextBox3",
                            "Top": "1.5in",
                            "Left": "3.45in",
                            "Width": "1.25in",
                            "Height": "0.3in",
                            "ZIndex": 22,
                            "Style": {
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Medium",
                                "VerticalAlign": "Bottom",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox3"
                        },
                        {
                            "Type": "textbox",
                            "Value": "Patient Information",
                            "Name": "TextBox7",
                            "Left": "0.001565in",
                            "Width": "3.448435in",
                            "Height": "0.3in",
                            "ZIndex": 5,
                            "Style": {
                                "BackgroundColor": "#f8f8f8",
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Thin",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "Color": "#551e5f",
                                "PaddingLeft": "0.1in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "Border": {
                                    "Color": "#e4e4e4"
                                },
                                "BottomBorder": {
                                    "Style": "Solid"
                                },
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox7"
                        },
                        {
                            "Type": "textbox",
                            "Value": "Specimen Information",
                            "Name": "TextBox9",
                            "Left": "3.45in",
                            "Width": "3in",
                            "Height": "0.3in",
                            "ZIndex": 5,
                            "Style": {
                                "BackgroundColor": "#f8f8f8",
                                "FontFamily": "Lucida Sans",
                                "FontWeight": "Thin",
                                "TextAlign": "Left",
                                "VerticalAlign": "Bottom",
                                "Color": "#551e5f",
                                "PaddingLeft": "0in",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "Border": {
                                    "Color": "#e4e4e4"
                                },
                                "BottomBorder": {
                                    "Style": "Solid"
                                },
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox9"
                        },
                        {
                            "Type": "line",
                            "StartPoint": {
                                "X": "3.35in",
                                "Y": "0in"
                            },
                            "EndPoint": {
                                "X": "3.35in",
                                "Y": "1.85in"
                            },
                            "LineColor": "#e4e4e4",
                            "Name": "Line1",
                            "Left": "3.35in",
                            "Width": "0in",
                            "Height": "1.85in",
                            "ZIndex": 24,
                            "Style": {
                                "Border": {
                                    "Color": "#e4e4e4"
                                },
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": false,
                            "DataElementOutput": "Auto"
                        }
                    ],
                    "Group": {
                        "PageBreakDisabled": "false",
                        "Name": ""
                    },
                    "DataSetName": "PatientInfo",
                    "Name": "List2",
                    "Top": "0.3in",
                    "Width": "6.49in",
                    "Height": "1.85in",
                    "ZIndex": 42,
                    "Style": {
                        "FontFamily": "Microsoft Sans Serif",
                        "FontSize": "9pt",
                        "Border": {
                            "Style": "Solid",
                            "Color": "#e4e4e4"
                        },
                        "StyleName": "=\"\""
                    }
                }
            ],
            "Style": {
                "StyleName": "=\"\""
            }
        },
        "PageHeader": {
            "Type": "pagesection",
            "Name": "PageHeader",
            "Height": "1.5875cm",
            "ReportItems": [
                {
                    "Type": "rectangle",
                    "ReportItems": [
                        {
                            "Type": "image",
                            "Sizing": "Fit",
                            "Source": "Embedded",
                            "Value": "AcmeLogo",
                            "Name": "Image2",
                            "Top": "0.01000002in",
                            "Left": "4.75in",
                            "Width": "4.318cm",
                            "Height": "0.59in",
                            "ZIndex": 3,
                            "Style": {
                                "PaddingRight": "0.17in",
                                "PaddingBottom": "0.12in",
                                "Border": {
                                    "Color": "#f1f1f1"
                                },
                                "TopBorder": {
                                    "Style": "Solid"
                                },
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": false,
                            "DataElementName": "Image2",
                            "DataElementOutput": "Auto"
                        },
                        {
                            "Type": "textbox",
                            "Value": "Blood Test Results",
                            "Name": "TextBox1",
                            "Width": "4.4in",
                            "Height": "0.6in",
                            "ZIndex": 4,
                            "Style": {
                                "BackgroundColor": "#f1f1f1",
                                "FontFamily": "Microsoft Sans Serif",
                                "FontSize": "16pt",
                                "FontWeight": "Thin",
                                "VerticalAlign": "Bottom",
                                "Color": "#551e5f",
                                "PaddingLeft": "0.1in",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "0.12in",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox1"
                        },
                        {
                            "Type": "textbox",
                            "CanGrow": true,
                            "Value": "DIAGNOSTIC SOLUTIONS",
                            "Name": "TextBox6",
                            "Top": "0.4895833in",
                            "Left": "5.102in",
                            "Width": "1.298in",
                            "Height": "0.12in",
                            "ZIndex": 5,
                            "Style": {
                                "FontSize": "6pt",
                                "FontWeight": "Bold",
                                "TextAlign": "Center",
                                "Color": "#551e5f",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox6"
                        }
                    ],
                    "Name": "Container1",
                    "Width": "6.45in",
                    "Height": "1.5875cm",
                    "ZIndex": 2,
                    "Style": {
                        "BackgroundColor": "#f1f1f1",
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true
                }
            ],
            "Style": {
                "StyleName": "=\"\""
            }
        },
        "PageFooter": {
            "Type": "pagesection",
            "Name": "PageFooter",
            "Height": "0.6in",
            "ReportItems": [
                {
                    "Type": "rectangle",
                    "ReportItems": [
                        {
                            "Type": "textbox",
                            "CanGrow": true,
                            "Value": "=\"(c) \" & Year(Now()) & \" GrapeCity, Inc. All Rights Reserved.\"",
                            "Name": "TextBox32",
                            "Left": "0.15in",
                            "Width": "7.2057cm",
                            "Height": "0.6in",
                            "Style": {
                                "BackgroundColor": "#f1f1f1",
                                "FontFamily": "Lucida Sans",
                                "FontSize": "9pt",
                                "FontWeight": "Thin",
                                "TextAlign": "Right",
                                "VerticalAlign": "Middle",
                                "Color": "Gray",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox32"
                        },
                        {
                            "Type": "textbox",
                            "CanGrow": true,
                            "Value": "1800.858.2739",
                            "Name": "TextBox33",
                            "Left": "3.15in",
                            "Width": "1.05in",
                            "Height": "0.6in",
                            "Style": {
                                "BackgroundColor": "#f1f1f1",
                                "FontFamily": "Lucida Sans",
                                "FontSize": "9pt",
                                "FontWeight": "Thin",
                                "TextAlign": "Left",
                                "VerticalAlign": "Middle",
                                "Color": "Gray",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox33"
                        },
                        {
                            "Type": "image",
                            "Sizing": "Fit",
                            "Source": "Embedded",
                            "Value": "footer-phone",
                            "Name": "Image4",
                            "Top": "0.2in",
                            "Left": "2.95in",
                            "Width": "0.2in",
                            "Height": "0.2in",
                            "ZIndex": 1,
                            "Style": {
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": false,
                            "DataElementName": "Image4",
                            "DataElementOutput": "Auto"
                        },
                        {
                            "Type": "textbox",
                            "CanGrow": true,
                            "Value": "Pittsburgh, PA:412.681.4343",
                            "Name": "TextBox141",
                            "Left": "4.4in",
                            "Width": "1.8823in",
                            "Height": "0.6in",
                            "Style": {
                                "BackgroundColor": "#f1f1f1",
                                "FontFamily": "Lucida Sans",
                                "FontSize": "9pt",
                                "FontWeight": "Thin",
                                "TextAlign": "Left",
                                "VerticalAlign": "Middle",
                                "Color": "Gray",
                                "PaddingLeft": "2pt",
                                "PaddingRight": "2pt",
                                "PaddingTop": "2pt",
                                "PaddingBottom": "2pt",
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": true,
                            "DataElementName": "TextBox141"
                        },
                        {
                            "Type": "image",
                            "Sizing": "Fit",
                            "Source": "Embedded",
                            "Value": "footer-phone",
                            "Name": "Image3",
                            "Top": "0.2in",
                            "Left": "4.2in",
                            "Width": "0.2in",
                            "Height": "0.2in",
                            "ZIndex": 1,
                            "Style": {
                                "StyleName": "=\"\""
                            },
                            "KeepTogether": false,
                            "DataElementName": "Image3",
                            "DataElementOutput": "Auto"
                        }
                    ],
                    "Name": "Container2",
                    "Width": "6.4917in",
                    "Height": "0.6in",
                    "ZIndex": 2,
                    "Style": {
                        "BackgroundColor": "#f1f1f1",
                        "StyleName": "=\"\""
                    },
                    "KeepTogether": true
                }
            ],
            "Style": {
                "StyleName": "=\"\""
            }
        },
        "Page": {
            "PageWidth": "7.3in",
            "PageHeight": "11.69in",
            "PageOrientation": "Portrait",
            "RightMargin": "0.4in",
            "LeftMargin": "0.4in",
            "TopMargin": "0.4in",
            "BottomMargin": "0.4in",
            "ColumnSpacing": "0.5in",
            "Columns": 1
        },
        "Width": "6.499in",
        "DataSources": [
            {
                "Name": "PatientInfo",
                "ConnectionProperties": {
                    "ConnectString": "jsondata={      \"PatientID\": \"21111\",      \"PatientNo\": \"321-45-6785\",      \"AccountNo\": \"534064505\",      \"SpecimanNo\": \"585106140\",      \"ControlNo\": \"LB51045\",      \"PatientFName\": \"Tim\",      \"PatientLName\": \"Johnson\",      \"PatientSex\": \"M\",      \"Age\": \"27\",      \"Fasting\": \"Yes\",      \"PatientDoctor\": \"Kim Richard\",      \"Fax\": \"(253)493-3934\",      \"DoctorID\": \"890\",      \"DataFile\": \"JA09904\",      \"Technician\": \"MO\",      \"DateCollected\": \"2016-01-06\",      \"DateEntered\": \"2016-01-04\",      \"DateReported\": \"2016-01-05\",      \"DOB\": \"1983-02-10\",      \"Comments\": \"Persistent reduction for 3 months or more in any eGFR <60 ml/min/1.73 m2 defines CKD. Patients with eGFR values >/=60 ml/min/1.73 m2 may also have CKD if evidence of persistent proteinuria is present. Additional information may be found at hostipal's website\"};schemadata={  \"definitions\": {},  \"$schema\": \"http://json-schema.org/draft-07/schema#\",  \"$id\": \"http://example.com/root.json\",  \"type\": \"object\",  \"title\": \"The Root Schema\",  \"required\": [    \"PatientID\",    \"PatientNo\",    \"AccountNo\",    \"SpecimanNo\",    \"ControlNo\",    \"PatientFName\",    \"PatientLName\",    \"PatientSex\",    \"Age\",    \"Fasting\",    \"PatientDoctor\",    \"Fax\",    \"DoctorID\",    \"DataFile\",    \"Technician\",    \"DateCollected\",    \"DateEntered\",    \"DateReported\",    \"DOB\",    \"Comments\"  ],  \"properties\": {    \"PatientID\": {      \"$id\": \"#/properties/PatientID\",      \"type\": \"string\",      \"title\": \"The Patientid Schema\",      \"default\": \"\",      \"examples\": [        \"21111\"      ],      \"pattern\": \"^(.*)$\"    },    \"PatientNo\": {      \"$id\": \"#/properties/PatientNo\",      \"type\": \"string\",      \"title\": \"The Patientno Schema\",      \"default\": \"\",      \"examples\": [        \"321-45-6785\"      ],      \"pattern\": \"^(.*)$\"    },    \"AccountNo\": {      \"$id\": \"#/properties/AccountNo\",      \"type\": \"string\",      \"title\": \"The Accountno Schema\",      \"default\": \"\",      \"examples\": [        \"534064505\"      ],      \"pattern\": \"^(.*)$\"    },    \"SpecimanNo\": {      \"$id\": \"#/properties/SpecimanNo\",      \"type\": \"string\",      \"title\": \"The Specimanno Schema\",      \"default\": \"\",      \"examples\": [        \"585106140\"      ],      \"pattern\": \"^(.*)$\"    },    \"ControlNo\": {      \"$id\": \"#/properties/ControlNo\",      \"type\": \"string\",      \"title\": \"The Controlno Schema\",      \"default\": \"\",      \"examples\": [        \"851721045\"      ],      \"pattern\": \"^(.*)$\"    },    \"PatientFName\": {      \"$id\": \"#/properties/PatientFName\",      \"type\": \"string\",      \"title\": \"The Patientfname Schema\",      \"default\": \"\",      \"examples\": [        \"Tim\"      ],      \"pattern\": \"^(.*)$\"    },    \"PatientLName\": {      \"$id\": \"#/properties/PatientLName\",      \"type\": \"string\",      \"title\": \"The Patientlname Schema\",      \"default\": \"\",      \"examples\": [        \"Johnson\"      ],      \"pattern\": \"^(.*)$\"    },    \"PatientSex\": {      \"$id\": \"#/properties/PatientSex\",      \"type\": \"string\",      \"title\": \"The Patientsex Schema\",      \"default\": \"\",      \"examples\": [        \"M\"      ],      \"pattern\": \"^(.*)$\"    },    \"Age\": {      \"$id\": \"#/properties/Age\",      \"type\": \"string\",      \"title\": \"The Age Schema\",      \"default\": \"\",      \"examples\": [        \"27\"      ],      \"pattern\": \"^(.*)$\"    },    \"Fasting\": {      \"$id\": \"#/properties/Fasting\",      \"type\": \"string\",      \"title\": \"The Fasting Schema\",      \"default\": \"\",      \"examples\": [        \"Yes\"      ],      \"pattern\": \"^(.*)$\"    },    \"PatientDoctor\": {      \"$id\": \"#/properties/PatientDoctor\",      \"type\": \"string\",      \"title\": \"The Patientdoctor Schema\",      \"default\": \"\",      \"examples\": [        \"Kim Richard\"      ],      \"pattern\": \"^(.*)$\"    },    \"Fax\": {      \"$id\": \"#/properties/Fax\",      \"type\": \"string\",      \"title\": \"The Fax Schema\",      \"default\": \"\",      \"examples\": [        \"(253)493-3934\"      ],      \"pattern\": \"^(.*)$\"    },    \"DoctorID\": {      \"$id\": \"#/properties/DoctorID\",      \"type\": \"string\",      \"title\": \"The Doctorid Schema\",      \"default\": \"\",      \"examples\": [        \"890\"      ],      \"pattern\": \"^(.*)$\"    },    \"DataFile\": {      \"$id\": \"#/properties/DataFile\",      \"type\": \"string\",      \"title\": \"The Datafile Schema\",      \"default\": \"\",      \"examples\": [        \"JA09904\"      ],      \"pattern\": \"^(.*)$\"    },    \"Technician\": {      \"$id\": \"#/properties/Technician\",      \"type\": \"string\",      \"title\": \"The Technician Schema\",      \"default\": \"\",      \"examples\": [        \"MO\"      ],      \"pattern\": \"^(.*)$\"    },    \"DateCollected\": {      \"$id\": \"#/properties/DateCollected\",      \"type\": \"string\",      \"title\": \"The Datecollected Schema\",      \"default\": \"\",      \"examples\": [        \"2016-01-06\"      ],      \"pattern\": \"^(.*)$\"    },    \"DateEntered\": {      \"$id\": \"#/properties/DateEntered\",      \"type\": \"string\",      \"title\": \"The Dateentered Schema\",      \"default\": \"\",      \"examples\": [        \"2016-01-04\"      ],      \"pattern\": \"^(.*)$\"    },    \"DateReported\": {      \"$id\": \"#/properties/DateReported\",      \"type\": \"string\",      \"title\": \"The Datereported Schema\",      \"default\": \"\",      \"examples\": [        \"2016-01-05\"      ],      \"pattern\": \"^(.*)$\"    },    \"DOB\": {      \"$id\": \"#/properties/DOB\",      \"type\": \"string\",      \"title\": \"The Dob Schema\",      \"default\": \"\",      \"examples\": [        \"1983-02-10\"      ],      \"pattern\": \"^(.*)$\"    },    \"Comments\": {      \"$id\": \"#/properties/Comments\",      \"type\": \"string\",      \"title\": \"The Comments Schema\",      \"default\": \"\",      \"examples\": [        \"Persistent reduction for 3 months or more in any eGFR <60 ml/min/1.73 m2 defines CKD. Patients with eGFR values >/=60 ml/min/1.73 m2 may also have CKD if evidence of persistent proteinuria is present. Additional information may be found at www.kdoqi.org\"      ],      \"pattern\": \"^(.*)$\"    }  }}",
                    "DataProvider": "JSON",
                    "IntegratedSecurity": false,
                    "Prompt": ""
                },
                "Transaction": false
            },
            {
                "Name": "TestResults",
                "ConnectionProperties": {
                    "ConnectString": "jsondata={   \"BloodReport_Result\": [      {         \"ID\": \"30\",         \"PatientID\": \"21111\",         \"TestGroup\": \"Comp. Metabolic Panel (14)\",         \"Test\": \"BUN\",         \"Result\": \"12.0\",         \"Units\": \"mg/dL\",         \"ReferenceInterval\": \"5.0 - 26.0\",         \"Lab\": \"01\"      },      {         \"ID\": \"31\",         \"PatientID\": \"21111\",         \"TestGroup\": \"Comp. Metabolic Panel (14)\",         \"Test\": \"Creatinine, Serum\",         \"Result\": \"0.23\",         \"Units\": \"mg/dL\",         \"ReferenceInterval\": \"0.76 - 1.27\",         \"Lab\": \"01\"      },      {         \"ID\": \"32\",         \"PatientID\": \"21111\",         \"TestGroup\": \"Comp. Metabolic Panel (14)\",         \"Test\": \"eGFR\",         \"Result\": \"75\",         \"Units\": \"mL/min/1.73\",         \"ReferenceInterval\": \">59\"      },      {         \"ID\": \"33\",         \"PatientID\": \"21111\",         \"TestGroup\": \"Comp. Metabolic Panel (14)\",         \"Test\": \"eGFR AfricanAmerican\",         \"Result\": \"62\",         \"Units\": \"mL/min/1.73\",         \"ReferenceInterval\": \">59\"      },      {         \"ID\": \"1\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"WBC\",         \"Result\": \"3.1\",         \"Units\": \"x10E3/uL\",         \"ReferenceInterval\": \"4.0 - 10.5\",         \"Lab\": \"01\"      },      {         \"ID\": \"9\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"RBC\",         \"Result\": \"4.94\",         \"Units\": \"x10E6/uL\",         \"ReferenceInterval\": \"4.10 - 5.60\",         \"Lab\": \"01\"      },      {         \"ID\": \"10\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"Hemoglobin\",         \"Result\": \"15.1\",         \"Units\": \"g/dL\",         \"ReferenceInterval\": \"12.5 - 17.0\",         \"Lab\": \"01\"      },      {         \"ID\": \"11\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"Hematocrit\",         \"Result\": \"26.2\",         \"Units\": \"%\",         \"ReferenceInterval\": \"36.0 - 50.0\",         \"Lab\": \"01\"      },      {         \"ID\": \"12\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"MCV\",         \"Result\": \"94.0\",         \"Units\": \"fL\",         \"ReferenceInterval\": \"80.0 - 98.0\",         \"Lab\": \"01\"      },      {         \"ID\": \"13\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"MCH\",         \"Result\": \"30.6\",         \"Units\": \"pg\",         \"ReferenceInterval\": \"27.0 - 34.0\",         \"Lab\": \"01\"      },      {         \"ID\": \"14\",         \"PatientID\": \"21111\",         \"TestGroup\": \"CBC With Differential/Platelet\",         \"Test\": \"MCHC\",         \"Result\": \"32.7\",         \"Units\": \"g/dL\",         \"ReferenceInterval\": \"32.0 - 36.0\",         \"Lab\": \"01\"      },      {         \"ID\": \"29\",         \"PatientID\": \"21111\",         \"TestGroup\": \"Comp. Metabolic Panel (14)\",         \"Test\": \"Glucose, Serum\",         \"Result\": \"105.0\",         \"Units\": \"mg/dL\",         \"ReferenceInterval\": \"65.0 - 99.0\",         \"Lab\": \"01\"      }   ]};schemadata={  \"definitions\": {},  \"$schema\": \"http://json-schema.org/draft-07/schema#\",  \"$id\": \"http://example.com/root.json\",  \"type\": \"object\",  \"title\": \"The Root Schema\",  \"required\": [    \"BloodReport_Result\"  ],  \"properties\": {    \"BloodReport_Result\": {      \"$id\": \"#/properties/BloodReport_Result\",      \"type\": \"array\",      \"title\": \"The Bloodreport_result Schema\",      \"items\": {        \"$id\": \"#/properties/BloodReport_Result/items\",        \"type\": \"object\",        \"title\": \"The Items Schema\",        \"required\": [          \"ID\",          \"PatientID\",          \"TestGroup\",          \"Test\",          \"Result\",          \"Units\",          \"ReferenceInterval\",          \"Lab\"        ],        \"properties\": {          \"ID\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/ID\",            \"type\": \"string\",            \"title\": \"The Id Schema\",            \"default\": \"\",            \"examples\": [              \"30\"            ],            \"pattern\": \"^(.*)$\"          },          \"PatientID\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/PatientID\",            \"type\": \"string\",            \"title\": \"The Patientid Schema\",            \"default\": \"\",            \"examples\": [              \"21111\"            ],            \"pattern\": \"^(.*)$\"          },          \"TestGroup\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/TestGroup\",            \"type\": \"string\",            \"title\": \"The Testgroup Schema\",            \"default\": \"\",            \"examples\": [              \"Comp. Metabolic Panel (14)\"            ],            \"pattern\": \"^(.*)$\"          },          \"Test\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/Test\",            \"type\": \"string\",            \"title\": \"The Test Schema\",            \"default\": \"\",            \"examples\": [              \"BUN\"            ],            \"pattern\": \"^(.*)$\"          },          \"Result\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/Result\",            \"type\": \"string\",            \"title\": \"The Result Schema\",            \"default\": \"\",            \"examples\": [              \"12.0\"            ],            \"pattern\": \"^(.*)$\"          },          \"Units\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/Units\",            \"type\": \"string\",            \"title\": \"The Units Schema\",            \"default\": \"\",            \"examples\": [              \"mg/dL\"            ],            \"pattern\": \"^(.*)$\"          },          \"ReferenceInterval\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/ReferenceInterval\",            \"type\": \"string\",            \"title\": \"The Referenceinterval Schema\",            \"default\": \"\",            \"examples\": [              \"5.0 - 26.0\"            ],            \"pattern\": \"^(.*)$\"          },          \"Lab\": {            \"$id\": \"#/properties/BloodReport_Result/items/properties/Lab\",            \"type\": \"string\",            \"title\": \"The Lab Schema\",            \"default\": \"\",            \"examples\": [              \"01\"            ],            \"pattern\": \"^(.*)$\"          }        }      }    }  }}",
                    "DataProvider": "JSON",
                    "IntegratedSecurity": false,
                    "Prompt": ""
                },
                "Transaction": false
            }
        ],
        "DataSets": [
            {
                "Fields": [
                    {
                        "Name": "PatientID",
                        "DataField": "PatientID"
                    },
                    {
                        "Name": "PatientNo",
                        "DataField": "PatientNo"
                    },
                    {
                        "Name": "AccountNo",
                        "DataField": "AccountNo"
                    },
                    {
                        "Name": "SpecimanNo",
                        "DataField": "SpecimanNo"
                    },
                    {
                        "Name": "ControlNo",
                        "DataField": "ControlNo"
                    },
                    {
                        "Name": "PatientFName",
                        "DataField": "PatientFName"
                    },
                    {
                        "Name": "PatientLName",
                        "DataField": "PatientLName"
                    },
                    {
                        "Name": "PatientSex",
                        "DataField": "PatientSex"
                    },
                    {
                        "Name": "Age",
                        "DataField": "Age"
                    },
                    {
                        "Name": "Fasting",
                        "DataField": "Fasting"
                    },
                    {
                        "Name": "PatientDoctor",
                        "DataField": "PatientDoctor"
                    },
                    {
                        "Name": "Fax",
                        "DataField": "Fax"
                    },
                    {
                        "Name": "DoctorID",
                        "DataField": "DoctorID"
                    },
                    {
                        "Name": "DataFile",
                        "DataField": "DataFile"
                    },
                    {
                        "Name": "Technician",
                        "DataField": "Technician"
                    },
                    {
                        "Name": "DateCollected",
                        "DataField": "DateCollected"
                    },
                    {
                        "Name": "DateEntered",
                        "DataField": "DateEntered"
                    },
                    {
                        "Name": "DateReported",
                        "DataField": "DateReported"
                    },
                    {
                        "Name": "DOB",
                        "DataField": "DOB"
                    },
                    {
                        "Name": "Comments",
                        "DataField": "Comments"
                    }
                ],
                "Query": {
                    "DataSourceName": "PatientInfo",
                    "CommandType": "Text",
                    "CommandText": "$",
                    "Timeout": 0
                },
                "CaseSensitivity": "Auto",
                "AccentSensitivity": "Auto",
                "KanatypeSensitivity": "Auto",
                "WidthSensitivity": "Auto",
                "Name": "PatientInfo"
            },
            {
                "Fields": [
                    {
                        "Name": "ID",
                        "DataField": "ID"
                    },
                    {
                        "Name": "PatientID",
                        "DataField": "PatientID"
                    },
                    {
                        "Name": "TestGroup",
                        "DataField": "TestGroup"
                    },
                    {
                        "Name": "Test",
                        "DataField": "Test"
                    },
                    {
                        "Name": "Result",
                        "DataField": "Result"
                    },
                    {
                        "Name": "Units",
                        "DataField": "Units"
                    },
                    {
                        "Name": "ReferenceInterval",
                        "DataField": "ReferenceInterval"
                    },
                    {
                        "Name": "Lab",
                        "DataField": "Lab"
                    }
                ],
                "Query": {
                    "DataSourceName": "TestResults",
                    "CommandType": "Text",
                    "CommandText": "$.['BloodReport_Result'][*]",
                    "Timeout": 0
                },
                "CaseSensitivity": "Auto",
                "AccentSensitivity": "Auto",
                "KanatypeSensitivity": "Auto",
                "WidthSensitivity": "Auto",
                "Name": "Results"
            }
        ],
        "EmbeddedImages": [
            {
                "MIMEType": "image/png",
                "ImageData": "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfpJREFUeNq8l00oRFEUx2d8UyhSClGW0jQREspGSSyUIjuTIllJ+Uj5SrJBahaUr0QpFj52JLKxYChEWdlZSAj5qOd/6kzdpnvnvTHvOvVr3pxz3vzvve/c8+44DcNwuN1ux3+az+dzRJjkVIFpUGq3eJTCHw1cYAvEglaQAZ7sElbN2Av2QSR/jwceO2csEy4ELSApIN4WZKBhCzvBpOAX47mgWpdwEygLkt+pQzgBTJjkl/EjsLWqPVy5MnsAMaALvNg949sgecsgBSzoWOpD8CrJuQCDdjcQUfgTrCr29LtOYbI5SQ4VXL5u4VNwFOBL5taZprtzDUh8OWCbK1ubMM14T+IvBvPc3bS9JLrBj8TfDPp0Cp+DGUVsBDToEibrBzcSPy31Ii+9FuEPXtoPSYz6+gbIVNybFaT9mgqTnYF2RYx+eIcHIVoJuOKOV/NXYbIlMK6I0fFoTTippIJakMjXtAXHhHhIwg6u5FlFrA6MgkpwyY/nS6iHXnAQuPRWhQ0++ngV8R7e++kgmwXF2iinUy3IC1XYL97BszNMHhudUuPAt5BLLbfgL8JiS20EbyZ5Th4AfT6DY7AbjjDZOijiqrdiU7zcj+EKk13z1hkSikm0exasAMNW/0lYtW8+nazwe9vFjWUTnChqwRZhv92B+lBu+BVgAOirV+Y3t0ZPAAAAAElFTkSuQmCC",
                "Name": "footer-phone"
            },
            {
                "MIMEType": "image/png",
                "ImageData": "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",
                "Name": "AcmeLogo"
            }
        ],
        "Layers": [
            {
                "Type": "layer",
                "Name": "default"
            }
        ],
        "CustomProperties": [
            {
                "Name": "DisplayType",
                "Value": "Page"
            },
            {
                "Name": "SizeType",
                "Value": "Default"
            }
        ],
        "TransformationInfo": []
    }
        );
    });
  }

  public close() {
    this.router.navigate(['']);
  }
}
