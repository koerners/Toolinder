webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\r\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\" width=\"100%\" height=\"100%\">\r\n        <android>\r\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\r\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\r\n                <StackLayout class=\"main-card \">\r\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\r\n\r\n                        <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\r\n                            <Image src=\"~/images/pruefen.png\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\r\n                            <Image src=\"~/images/schliessen.png\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n\r\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\" style=\"background: white;\r\n                        \">\r\n                            <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\r\n                            textWrap=\"true\">\r\n                            <FormattedString>\r\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\r\n                                <Span [text]=\"card.date\"></Span>\r\n                            </FormattedString> \r\n                        </Label>-->\r\n                            <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.text\" textWrap=\"true\" class=\"h1 title\"></Label>\r\n                            <!--                             <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\r\n -->\r\n                        </GridLayout>\r\n\r\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\r\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\r\n\r\n\r\n                        <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\" style=\"width: 25%; height: 25%; margin-left: 50px;\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\r\n                            <Image src=\"~/images/nicht-moegen.png\" style=\"width: 100%; height: 100%;\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n                        <GridLayout #btnLike col=\"3\" row=\"2\" style=\"width: 25%; height: 25%; margin-right: 50px;\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\r\n                            <Image src=\"~/images/moegen.png\" style=\"width: 100%; height: 100%; \" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n\r\n                    </GridLayout>\r\n                </StackLayout>\r\n            </SwipeLayout>\r\n        </android>\r\n        <ios>\r\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\r\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\r\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\" shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\r\n                    <GridLayout>\r\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\r\n\r\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\r\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\r\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n\r\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\" stretch=\"aspectFill\"></Image>\r\n\r\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\r\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\r\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n\r\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\">\r\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\" textWrap=\"true\">\r\n                                    <FormattedString>\r\n\r\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\r\n                                        <Span [text]=\"card.date\"></Span>\r\n                                    </FormattedString>\r\n                                </Label>\r\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h2 title\"></Label>\r\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\" textWrap=\"true\" class=\"h4 title\"></Label>\r\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\r\n                            </GridLayout>\r\n\r\n                        </GridLayout>\r\n                    </GridLayout>\r\n                </CardView>\r\n            </SwipeLayout>\r\n        </ios>\r\n        <StackLayout *ngIf=\"!go\" verticalAlignment=\"center\" [@fade]>\r\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\r\n            <Label text=\"We are going to ask you some very simple questions to find out what tool suits you best.\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\r\n            <Button text=\"Start\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\r\n        </StackLayout>\r\n              <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\r\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\r\n            <Label text=\"That's it! We know everything we need to. Take a look at your 'favorite' tab.\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\r\n            <Button text=\"Do it again\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\r\n        </StackLayout>\r\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\" class=\"activity-indicator\"></ActivityIndicator>\r\n    </GridLayout>\r\n\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvVEFBb1QsZUFBZSw0NkNBQTQ2Qyw0U0FBNFMsNjJCQUE2MkIsYUFBYSxtQkFBbUIsOEpBQThKLGNBQWMsZ0tBQWdLLGFBQWEsb0JBQW9CLDhLQUE4SyxjQUFjLDhSQUE4UixlQUFlLDgvRUFBOC9FLCsvRCIsImZpbGUiOiJidW5kbGUuYjFkZjVlNGY5YmIxYzcxNmI0ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiBpb3M6bWFyZ2luQm90dG9tPVxcXCI0OFxcXCI+XFxyXFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgcGFkZGluZ1RvcD1cXFwiMzBcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiAobG9hZGVkKT1cXFwib25Db250YWluZXJMb2FkZWQoJGV2ZW50KVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICA8YW5kcm9pZD5cXHJcXG4gICAgICAgICAgICA8U3dpcGVMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkcyB8ICBzbGljZTowOjU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNraW5nRnVuY3Rpb25cXFwiIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIiBbYW5pbWF0aW9uU3RhdGVdPVxcXCJzd2lwZUxheW91dEFuaW1hdGVkXFxcIiBbZ2VzdHVyZU1vZGVdPVxcXCJnZXN0dXJlTW9kZVxcXCIgY2xhc3M9XFxcInN3aXBlLWxheW91dFxcXCIgW2NsYXNzLmZyb250XT1cXFwiaSA9PSAwXFxcIlxcclxcbiAgICAgICAgICAgICAgICBbY2xhc3MubWlkZGxlXT1cXFwiaSA9PSAxXFxcIiBbY2xhc3MuYmFja109XFxcImkgPT0gMlxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKGxvYWRlZCk9XFxcInN3aXBlTGF5b3V0TG9hZGVkKCRldmVudCwgYnRuSWdub3JlLCBidG5MaWtlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKVxcXCIgKHN3aXBlTGVmdCk9XFxcInN3aXBlTGVmdENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiIChzd2lwZVJpZ2h0KT1cXFwic3dpcGVSaWdodENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm1haW4tY2FyZCBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgKlxcXCIgY29sdW1ucz1cXFwiOCwgYXV0bywgKiwgYXV0bywgOFxcXCIgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUxpa2UgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tbC0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3BydWVmZW4ucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUlnbm9yZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1yLTE2XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJyaWdodFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3NjaGxpZXNzZW4ucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBjbGFzcz1cXFwiaDUgZGF0ZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFdyYXA9XFxcInRydWVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiJiN4ZjA3MzsgXFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIFt0ZXh0XT1cXFwiY2FyZC5kYXRlXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC50ZXh0XFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImgxIHRpdGxlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY3VsYXItcHJvZ3Jlc3MtYmFyIFtjb2xdPVxcXCIyXFxcIiBbcm93XT1cXFwiMVxcXCIgW3Jvd1NwYW5dPVxcXCIyXFxcIiBbcHJvZ3Jlc3NdPVxcXCJjYXJkLnBvcHVsYXJpdHlcXFwiPjwvY2lyY3VsYXItcHJvZ3Jlc3MtYmFyPlxcclxcbiAtLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd1NwYW49XFxcIjZcXFwiIFtzcmNdPVxcXCJjYXJkLmltYWdlXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIiBib3JkZXJSYWRpdXM9XFxcIjEwXFxcIj48L0ltYWdlPiAtLT5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjUlOyBoZWlnaHQ6IDI1JTsgbWFyZ2luLWxlZnQ6IDUwcHg7XFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwiZGVjbGluZShjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL25pY2h0LW1vZWdlbi5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuTGlrZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMlxcXCIgc3R5bGU9XFxcIndpZHRoOiAyNSU7IGhlaWdodDogMjUlOyBtYXJnaW4tcmlnaHQ6IDUwcHg7XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJsaWtlKGNhcmQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbW9lZ2VuLnBuZ1xcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IFxcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgICAgICA8L1N3aXBlTGF5b3V0PlxcclxcbiAgICAgICAgPC9hbmRyb2lkPlxcclxcbiAgICAgICAgPGlvcz5cXHJcXG4gICAgICAgICAgICA8U3dpcGVMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkcyB8ICBzbGljZTowOjU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNraW5nRnVuY3Rpb25cXFwiIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIiBbYW5pbWF0aW9uU3RhdGVdPVxcXCJzd2lwZUxheW91dEFuaW1hdGVkXFxcIiBbZ2VzdHVyZU1vZGVdPVxcXCJnZXN0dXJlTW9kZVxcXCIgY2xhc3M9XFxcInN3aXBlLWxheW91dFxcXCIgW2NsYXNzLmZyb250XT1cXFwiaSA9PSAwXFxcIlxcclxcbiAgICAgICAgICAgICAgICBbY2xhc3MubWlkZGxlXT1cXFwiaSA9PSAxXFxcIiBbY2xhc3MuYmFja109XFxcImkgPT0gMlxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKGxvYWRlZCk9XFxcInN3aXBlTGF5b3V0TG9hZGVkKCRldmVudCwgYnRuSWdub3JlLCBidG5MaWtlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKVxcXCIgKHN3aXBlTGVmdCk9XFxcInN3aXBlTGVmdENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiIChzd2lwZVJpZ2h0KT1cXFwic3dpcGVSaWdodENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Q2FyZFZpZXcgY2xhc3M9XFxcIm1haW4tY2FyZCBkYXJrXFxcIiBzaGFkb3dPZmZzZXRIZWlnaHQ9XFxcIjJcXFwiIHNoYWRvd0NvbG9yPVxcXCIjMDAwMDAwXFxcIiBzaGFkb3dPcGFjaXR5PVxcXCIwLjJcXFwiIHNoYWRvd1JhZGl1cz1cXFwiMzBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgKlxcXCIgY29sdW1ucz1cXFwiOCwgYXV0bywgKiwgYXV0bywgOFxcXCIgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VMaWtlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLWwtMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcImxlZnRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvc3Rhci5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYmFkZ2VJZ25vcmUgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tci0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwicmlnaHRcXFwiIG9wYWNpdHk9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93U3Bhbj1cXFwiNlxcXCIgW3NyY109XFxcImNhcmQuaW1hZ2VcXFwiIHN0cmV0Y2g9XFxcImFzcGVjdEZpbGxcXFwiPjwvSW1hZ2U+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5JZ25vcmUgY29sPVxcXCIxXFxcIiByb3c9XFxcIjFcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZVxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImRlY2xpbmUoY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvY2FuY2VsLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNidG5MaWtlIGNvbD1cXFwiM1xcXCIgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJsaWtlKGNhcmQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sPVxcXCIwXFxcIiByb3c9XFxcIjJcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd3M9XFxcImF1dG8sIGF1dG8sIGF1dG9cXFwiIGNvbHVtbnM9XFxcImF1dG8sICosIGF1dG9cXFwiIGNsYXNzPVxcXCJpbmZvXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImg1IGRhdGVcXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkU3RyaW5nPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiB0ZXh0PVxcXCImI3hmMDczOyBcXFwiIGNsYXNzPVxcXCJmYVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNhcmQuZGF0ZVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybWF0dGVkU3RyaW5nPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLnRpdGxlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImgyIHRpdGxlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQuYXV0aG9yXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImg0IHRpdGxlXFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmN1bGFyLXByb2dyZXNzLWJhciBbY29sXT1cXFwiMlxcXCIgW3Jvd109XFxcIjFcXFwiIFtyb3dTcGFuXT1cXFwiMlxcXCIgW3Byb2dyZXNzXT1cXFwiY2FyZC5wb3B1bGFyaXR5XFxcIj48L2NpcmN1bGFyLXByb2dyZXNzLWJhcj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgPC9DYXJkVmlldz5cXHJcXG4gICAgICAgICAgICA8L1N3aXBlTGF5b3V0PlxcclxcbiAgICAgICAgPC9pb3M+XFxyXFxuICAgICAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFnb1xcXCIgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW0BmYWRlXT5cXHJcXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9lbXB0eS5wbmdcXFwiIGNsYXNzPVxcXCJwbGFjZWhvbGRlci1pbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICA8TGFiZWwgdGV4dD1cXFwiV2UgYXJlIGdvaW5nIHRvIGFzayB5b3Ugc29tZSB2ZXJ5IHNpbXBsZSBxdWVzdGlvbnMgdG8gZmluZCBvdXQgd2hhdCB0b29sIHN1aXRzIHlvdSBiZXN0LlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBwbGFjZWhvbGRlci1sYWJlbFxcXCIgbWFyZ2luQm90dG9tPVxcXCIxNlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIlN0YXJ0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW5Cb3R0b209XFxcIjQwXFxcIiAodGFwKT1cXFwicmVzZXRDYXJkcygpXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgKm5nSWY9XFxcIiFjYXJkcy5sZW5ndGhcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtAZmFkZV0+XFxyXFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvZW1wdHkucG5nXFxcIiBjbGFzcz1cXFwicGxhY2Vob2xkZXItaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRoYXQncyBpdCEgV2Uga25vdyBldmVyeXRoaW5nIHdlIG5lZWQgdG8uIFRha2UgYSBsb29rIGF0IHlvdXIgJ2Zhdm9yaXRlJyB0YWIuXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCIgY2xhc3M9XFxcImg0IHBsYWNlaG9sZGVyLWxhYmVsXFxcIiBtYXJnaW5Cb3R0b209XFxcIjE2XFxcIj48L0xhYmVsPlxcclxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiRG8gaXQgYWdhaW5cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIG1hcmdpbkJvdHRvbT1cXFwiNDBcXFwiICh0YXApPVxcXCJyZXNldENhcmRzKClcXFwiPjwvQnV0dG9uPlxcclxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXHJcXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbYnVzeV09XFxcIiFpc0xvYWRlZFxcXCIgY2xhc3M9XFxcImFjdGl2aXR5LWluZGljYXRvclxcXCI+PC9BY3Rpdml0eUluZGljYXRvcj5cXHJcXG4gICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcblxcclxcbjwvR3JpZExheW91dD5cIiJdLCJzb3VyY2VSb290IjoiIn0=