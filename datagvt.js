
 const NOMGVT = "BAYROU";
 
 const DETAILGVT = "[Gouvernement BAYROU- 23/12/2024]"; //HTML
 
 const BASE_LARGEUR = 250;
 
 var tab_ministres = [
"UGhpbGlwcGUgQmFwdGlzdGU=", "RW5zZWlnbmVtZW50IHN1cOlyaWV1ciBldCByZWNoZXJjaGU=", 
"SmVhbi1Ob+tsIEJhcnJvdA==", "QWZmYWlyZXMg6XRyYW5n6HJlcw==", 
"TWFyaWUgQmFyc2FjcQ==", "U3BvcnRzLCBqZXVuZXNzZSBldCB2aWUgYXNzb2NpYXRpdmU=", 
"RnJhbudvaXMgQmF5cm91", "UHJlbWllciBtaW5pc3RyZQ==", 
"QXVyb3JlIEJlcmfp", "yWdhbGl06SBlbnRyZSBsZXMgZmVtbWVzIGV0IGxlcyBob21tZXMgZXQgbHV0dGUgY29udHJlIGxlcyBkaXNjcmltaW5hdGlvbnM=", 
"yWxpc2FiZXRoIEJvcm5l", "yWR1Y2F0aW9uIG5hdGlvbmFsZSwgZW5zZWlnbmVtZW50IHN1cOlyaWV1ciBldCByZWNoZXJjaGU=", 
"RnJhbudvaXMtTm/rbCBCdWZmZXQ=", "SW506XJpZXVyIChtaW5pc3RyZSBhdXBy6HMgZHUgbWluaXN0cmUgZCfJdGF0KQ==", 
"Q2xhcmEgQ2hhcHBheg==", "SW50ZWxsaWdlbmNlIGFydGlmaWNpZWxsZSBldCBudW3pcmlxdWU=", 
"R+lyYWxkIERhcm1hbmlu", "SnVzdGljZQ==", 
"UmFjaGlkYSBEYXRp", "Q3VsdHVyZQ==", 
"TmF0aGFsaWUgRGVsYXR0cmU=", "VG91cmlzbWU=", 
"TWFyYyBGZXJyYWNjaQ==", "SW5kdXN0cmllIGV0IOluZXJnaWU=", 
"RnJhbudvaXNlIEdhdGVs", "UnVyYWxpdOk=", 
"QW5uaWUgR2VuZXZhcmQ=", "QWdyaWN1bHR1cmUgZXQgc291dmVuYWluZXTpIGFsaW1lbnRhaXJl", 
"QmVuamFtaW4gSGFkZGFk", "RXVyb3Bl", 
"U+liYXN0aWVuIExlY29ybnU=", "QXJt6WVz", 
"VmFs6XJpZSBM6XRhcmQ=", "TG9nZW1lbnQ=", 
"yXJpYyBMb21iYXJk", "yWNvbm9taWUsIGZpbmFuY2VzIGV0IHNvdXZlcmFpbmV06SBpbmR1c3RyaWVsbGUgZXQgbnVt6XJpcXVl", 
"Vulyb25pcXVlIExvdXdhZ2ll", "Q29tbWVyY2UsIGFydGlzYW5hdCwgcGV0aXRlcyBtb3llbm5lcyBlbnRyZXByaXNlcyBldCDpY29ub21pZSBzb2NpYWxlIGV0IHNvbGlkYWlyZQ==", 
"TGF1cmVudCBNYXJjYW5nZWxp", "QWN0aW9uIHB1YmxpcXVlLCBmb25jdGlvbiBwdWJsaXF1ZSBldCBzaW1wbGlmaWNhdGlvbg==", 
"SnVsaWV0dGUgTelhZGVs", "VmlsbGU=", 
"UGF0cmljayBNaWdub2xh", "UmVsYXRpb25zIGF2ZWMgbGUgUGFybGVtZW50", 
"UGF0cmljaWEgTWlyYWxs6HM=", "Teltb2lyZSBldCBhbmNpZW5zIGNvbWJhdHRhbnRz", 
"VGhhbmkgTW9oYW1lZCBTb2lsaWhp", "RnJhbmNvcGhvbmllIGV0IHBhcnRlbmFyaWF0cyBpbnRlcm5hdGlvbmF1eA==", 
"QW3pbGllIGRlIE1vbnRjaGFsaW4=", "Q29tcHRlcyBwdWJsaWNz", 
"WWFubmljayBOZXVkZXI=", "U2FudOkgZXQgYWNj6HMgYXV4IHNvaW5z", 
"QWdu6HMgUGFubmllci1SdW5hY2hlcg==", "QmlvZGl2ZXJzaXTpLCBmb3LqdCwgbWVyIGV0IHDqY2hl", 
"QXN0cmlkIFBhbm9zeWFuLUJvdXZldA==", "VHJhdmFpbCBldCBlbXBsb2k=", 
"Q2hhcmxvdHRlIFBhcm1lbnRpZXItTGVjb2Nx", "QXV0b25vbWllIGV0IGhhbmRpY2Fw", 
"U29waGllIFByaW1hcw==", "UG9ydGUtcGFyb2xlIGR1IEdvdXZlcm5lbWVudA==", 
"RnJhbudvaXMgUmVic2FtZW4=", "QW3pbmFnZW1lbnQgZHUgdGVycml0b2lyZSBldCBk6WNlbnRyYWxpc2F0aW9u", 
"QnJ1bm8gUmV0YWlsbGVhdQ==", "SW506XJpZXVyIChtaW5pc3RyZSBkJ8l0YXQp", 
"TGF1cmVudCBTYWludC1NYXJ0aW4=", "Q29tbWVyY2UgZXh06XJpZXVyIGV0IGZyYW7nYWlzIGRlIGwn6XRyYW5nZXI=", 
"UGhpbGlwcGUgVGFiYXJvdA==", "VHJhbnNwb3J0cw==", 
"TWFudWVsIFZhbGxz", "T3V0cmUtbWVy", 
"Q2F0aGVyaW5lIFZhdXRyaW4=", "VHJhdmFpbCwgc2FudOksIHNvbGlkYXJpdOlzIGV0IGZhbWlsbGVz", 
];
