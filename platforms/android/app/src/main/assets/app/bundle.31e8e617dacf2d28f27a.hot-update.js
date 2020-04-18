webpackHotUpdate("bundle",{

/***/ "./item-detail/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<StackLayout ios:marginBottom=\"48\" class=\"page\">\r\n    <custom-action-bar [isBack]=\"true\" title=\"Details\"></custom-action-bar>\r\n    <ScrollView class=\"page\" (scroll)=\"onScroll($event)\">\r\n        <StackLayout class=\"p-x-8 p-t-24\" paddingBottom=\"45\">\r\n            <Image class=\"over\" [src]=\"item.picture\" width=\"60%\" marginBottom=\"-60\" borderRadius=\"12\" [opacity]=\"opacity\"></Image>\r\n            <StackLayout class=\"p-y-24 under p-x-24\" backgroundColor=\"white\" borderRadius=\"8\" paddingTop=\"80\">\r\n                <Label class=\"h3 title text-center\" [text]=\"item.name\"></Label>\r\n                <Label class=\"h5 caption text-center\" [text]=\"item.company\"></Label>\r\n                <Label class=\"hr-light m-y-20\" backgroundColor=\"#E7ECF0\"></Label>\r\n                <Label class=\"h5 date\" verticalAlignment=\"bottom\">\r\n                    <FormattedString>\r\n                        <Span class=\"fa\" text=\"&#xf155;  \"></Span>\r\n                        <Span [text]=\"item.price\"></Span>\r\n                    </FormattedString>\r\n                </Label>\r\n                <Label class=\"h5 date\" verticalAlignment=\"bottom\" marginBottom=\"0\">\r\n                    <FormattedString>\r\n                        <Span class=\"fa\" text=\"&#xf0c0;  \"></Span>\r\n                        <Span color=\"#854CC5\" [text]=\"item.users\"></Span>\r\n                    </FormattedString>\r\n                </Label>\r\n\r\n\r\n               <!---  <Label *ngFor=\"let city of item.pro\" class=\"h5 date\" verticalAlignment=\"bottom\" marginBottom=\"0\">\r\n                    <FormattedString>\r\n                        <Span class=\"fa\" text=\"&#xf0c0;  \"></Span>\r\n                        <Span  [text]=\"city\"></Span>\r\n                    </FormattedString>\r\n                </Label> --> \r\n\r\n\r\n                <Label class=\"hr-light m-y-20\" backgroundColor=\"#E7ECF0\"></Label>\r\n                <Label class=\"body caption\" [text]=\"item.description\" textWrap=\"true\"></Label>\r\n            </StackLayout>\r\n        </StackLayout>\r\n    </ScrollView>\r\n</StackLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pdGVtLWRldGFpbC9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHcrQkFBdytCLHFWQUFxVixxWkFBcVosMGIiLCJmaWxlIjoiYnVuZGxlLjMxZThlNjE3ZGFjZjJkMjhmMjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0IGlvczptYXJnaW5Cb3R0b209XFxcIjQ4XFxcIiBjbGFzcz1cXFwicGFnZVxcXCI+XFxyXFxuICAgIDxjdXN0b20tYWN0aW9uLWJhciBbaXNCYWNrXT1cXFwidHJ1ZVxcXCIgdGl0bGU9XFxcIkRldGFpbHNcXFwiPjwvY3VzdG9tLWFjdGlvbi1iYXI+XFxyXFxuICAgIDxTY3JvbGxWaWV3IGNsYXNzPVxcXCJwYWdlXFxcIiAoc2Nyb2xsKT1cXFwib25TY3JvbGwoJGV2ZW50KVxcXCI+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAteC04IHAtdC0yNFxcXCIgcGFkZGluZ0JvdHRvbT1cXFwiNDVcXFwiPlxcclxcbiAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cXFwib3ZlclxcXCIgW3NyY109XFxcIml0ZW0ucGljdHVyZVxcXCIgd2lkdGg9XFxcIjYwJVxcXCIgbWFyZ2luQm90dG9tPVxcXCItNjBcXFwiIGJvcmRlclJhZGl1cz1cXFwiMTJcXFwiIFtvcGFjaXR5XT1cXFwib3BhY2l0eVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAteS0yNCB1bmRlciBwLXgtMjRcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwid2hpdGVcXFwiIGJvcmRlclJhZGl1cz1cXFwiOFxcXCIgcGFkZGluZ1RvcD1cXFwiODBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgzIHRpdGxlIHRleHQtY2VudGVyXFxcIiBbdGV4dF09XFxcIml0ZW0ubmFtZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoNSBjYXB0aW9uIHRleHQtY2VudGVyXFxcIiBbdGV4dF09XFxcIml0ZW0uY29tcGFueVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoci1saWdodCBtLXktMjBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiI0U3RUNGMFxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoNSBkYXRlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRTdHJpbmc+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gY2xhc3M9XFxcImZhXFxcIiB0ZXh0PVxcXCImI3hmMTU1OyAgXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJpdGVtLnByaWNlXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoNSBkYXRlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW5Cb3R0b209XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQ9XFxcIiYjeGYwYzA7ICBcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjb2xvcj1cXFwiIzg1NENDNVxcXCIgW3RleHRdPVxcXCJpdGVtLnVzZXJzXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICA8IS0tLSAgPExhYmVsICpuZ0Zvcj1cXFwibGV0IGNpdHkgb2YgaXRlbS5wcm9cXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiYm90dG9tXFxcIiBtYXJnaW5Cb3R0b209XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBjbGFzcz1cXFwiZmFcXFwiIHRleHQ9XFxcIiYjeGYwYzA7ICBcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiAgW3RleHRdPVxcXCJjaXR5XFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgPC9MYWJlbD4gLS0+IFxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImhyLWxpZ2h0IG0teS0yMFxcXCIgYmFja2dyb3VuZENvbG9yPVxcXCIjRTdFQ0YwXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImJvZHkgY2FwdGlvblxcXCIgW3RleHRdPVxcXCJpdGVtLmRlc2NyaXB0aW9uXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgPC9TY3JvbGxWaWV3PlxcclxcbjwvU3RhY2tMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9