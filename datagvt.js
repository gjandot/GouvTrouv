
 const NOMGVT = "BARNIER";
 
 const DETAILGVT = "[Gouvernement BARNIER - 21/09/2024]"; //HTML
 
 const BASE_LARGEUR = 250;
 
 var tab_ministres = [
"QW50b2luZSBBcm1hbmQ=", "yWNvbm9taWUsIGZpbmFuY2VzIGV0IGluZHVzdHJpZQ==", 
"R2lsIEF26XJvdXM=", "U3BvcnRzLCBqZXVuZXNzZSBldCB2aWUgYXNzb2NpYXRpdmU=", 
"TWljaGVsIEJhcm5pZXI=", "UHJlbWllciBtaW5pc3RyZQ==", 
"SmVhbi1Ob+tsIEJhcnJvdA==", "RXVyb3BlIGV0IGFmZmFpcmVzIOl0cmFuZ+hyZXM=", 
"TWF1ZCBCcmVnZW9u", "cG9ydGUtcGFyb2xlIGR1IEdvdXZlcm5lbWVudA==", 
"RnJhbudvaXMtTm/rbCBCdWZmZXQ=", "T3V0cmUtbWVy", 
"QWdu6HMgQ2FuYXllcg==", "RmFtaWxsZSBldCBwZXRpdGUgZW5mYW5jZQ==", 
"TWFyaWUtQ2xhaXJlIENhcnLocmUtR+ll", "Q29vcmRpbmF0aW9uIGdvdXZlcm5lbWVudGFsZQ==", 
"Q2xhcmEgQ2hhcHBheg==", "SW50ZWxsaWdlbmNlIGFydGlmaWNpZWxsZSBldCBudW3pcmlxdWU=", 
"UGF1bCBDaHJpc3RvcGhl", "U29saWRhcml06XMsIGF1dG9ub21pZSBldCDpZ2FsaXTpIGVudHJlIGxlcyBmZW1tZXMgZXQgbGVzIGhvbW1lcw==", 
"Tmljb2xhcyBEYXJhZ29u", "U+ljdXJpdOkgZHUgcXVvdGlkaWVu", 
"R2VuZXZp6HZlIERhcnJpZXVzc2VjcQ==", "U2FudOkgZXQgYWNj6HMgYXV4IHNvaW5z", 
"UmFjaGlkYSBEYXRp", "Q3VsdHVyZQ==", 
"TmF0aGFsaWUgRGVsYXR0cmU=", "UmVsYXRpb25zIGF2ZWMgbGUgUGFybGVtZW50", 
"RnJhbudvaXMgRHVyb3ZyYXk=", "VHJhbnNwb3J0cw==", 
"TWFyYyBGZXJyYWNjaQ==", "SW5kdXN0cmll", 
"TWFyaW5hIEZlcnJhcmk=", "yWNvbm9taWUgZHUgdG91cmlzbWU=", 
"TGF1cmVuY2UgR2Fybmllcg==", "Q29uc29tbWF0aW9u", 
"RnJhbudvaXNlIEdhdGVs", "UnVyYWxpdOksIGNvbW1lcmNlIGV0IGFydGlzYW5hdA==", 
"QW5uZSBHZW5ldGV0", "yWR1Y2F0aW9uIG5hdGlvbmFsZQ==", 
"QW5uaWUgR2VuZXZhcmQ=", "QWdyaWN1bHR1cmUsIHNvdXZlcmFpbmV06SBhbGltZW50YWlyZSBldCBmb3LqdA==", 
"T2xnYSBHaXZlcm5ldA==", "yW5lcmdpZQ==", 
"QmVuamFtaW4gSGFkZGFk", "RXVyb3Bl", 
"UGF0cmljayBIZXR6ZWw=", "RW5zZWlnbmVtZW50IHN1cOlyaWV1ciBldCByZWNoZXJjaGU=", 
"R3VpbGxhdW1lIEthc2Jhcmlhbg==", "Rm9uY3Rpb24gcHVibGlxdWUsIHNpbXBsaWZpY2F0aW9uIGV0IHRyYW5zZm9ybWF0aW9uIGRlIGwnYWN0aW9uIHB1YmxpcXVl", 
"U+liYXN0aWVuIExlY29ybnU=", "QXJt6WVzIGV0IGFuY2llbnMgY29tYmF0dGFudHM=", 
"VmFs6XJpZSBM6XRhcmQ=", "TG9nZW1lbnQgZXQgculub3ZhdGlvbiB1cmJhaW5l", 
"RmFicmljZSBMb2hlcg==", "TWVyIGV0IHDqY2hl", 
"RGlkaWVyIE1pZ2F1ZA==", "SnVzdGljZSAoZ2FyZGUgZGVzIHNjZWF1eCk=", 
"VGhhbmkgTW9oYW1lZCBTb2lsaWhp", "RnJhbmNvcGhvbmllIGV0IHBhcnRlbmFyaWF0cyBpbnRlcm5hdGlvbmF1eA==", 
"T3RobWFuIE5hc3JvdQ==", "Q2l0b3llbm5ldOkgZXQgbHV0dGUgY29udHJlIGxlcyBkaXNjcmltaW5hdGlvbnM=", 
"QWdu6HMgUGFubmllci1SdW5hY2hlcg==", "VHJhbnNpdGlvbiDpY29sb2dpcXVlLCDpbmVyZ2llLCBjbGltYXQgZXQgcHLpdmVudGlvbiBkZXMgcmlzcXVlcw==", 
"QXN0cmlkIFBhbm9zeWFuLUJvdXZldA==", "VHJhdmFpbCBldCBlbXBsb2k=", 
"QWxleGFuZHJlIFBvcnRpZXI=", "Uul1c3NpdGUgc2NvbGFpcmUgZXQgZW5zZWlnbmVtZW50IHByb2Zlc3Npb25uZWw=", 
"TWFyaWUtQWdu6HMgUG91c3NpZXItV2luc2JhY2s=", "yWNvbm9taWUgc29jaWFsZSBldCBzb2xpZGFpcmUsIGludOlyZXNzZW1lbnQgZXQgcGFydGljaXBhdGlvbg==", 
"U29waGllIFByaW1hcw==", "Q29tbWVyY2UgZXh06XJpZXVyIGV0IEZyYW7nYWlzIGRlIGwn6XRyYW5nZXI=", 
"QnJ1bm8gUmV0YWlsbGVhdQ==", "SW506XJpZXVy", 
"U2FsaW1hIFNhYQ==", "yWdhbGl06SBlbnRyZSBsZXMgZmVtbWVzIGV0IGxlcyBob21tZXM=", 
"TGF1cmVudCBTYWludC1NYXJ0aW4=", "QnVkZ2V0IGV0IGNvbXB0ZXMgcHVibGljcw==", 
"Q2F0aGVyaW5lIFZhdXRyaW4=", "UGFydGVuYXJpYXQgYXZlYyBsZXMgdGVycml0b2lyZXMgZXQgZOljZW50cmFsaXNhdGlvbg==", 
];
