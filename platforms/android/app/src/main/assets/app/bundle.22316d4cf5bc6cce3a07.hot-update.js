webpackHotUpdate("bundle",{

/***/ "./home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<GridLayout rows=\"auto, *\" ios:marginBottom=\"48\">\r\n    <GridLayout row=\"0\" rowSpan=\"2\" paddingTop=\"30\" class=\"page\" (loaded)=\"onContainerLoaded($event)\" width=\"100%\" height=\"100%\">\r\n        <android>\r\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\r\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\r\n                <StackLayout class=\"main-card \">\r\n                    <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\r\n\r\n                        <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\r\n                            <Image src=\"~/images/moegen.png\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n                        <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\r\n                            <Image src=\"~/images/nicht-moegen.png\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n\r\n                        <GridLayout col=\"0\" row=\"1\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\" style=\"background: white;\r\n                        \">\r\n                            <!--                   <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\"\r\n                            textWrap=\"true\">\r\n                            <FormattedString>\r\n                                <Span text=\"&#xf073; \" class=\"fa\"></Span>\r\n                                <Span [text]=\"card.date\"></Span>\r\n                            </FormattedString> \r\n                        </Label>-->\r\n                            <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.text\" textWrap=\"true\" class=\"h1 title\"></Label>\r\n                            <!--                             <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\r\n -->\r\n                        </GridLayout>\r\n\r\n                        <!-- <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\"\r\n                            stretch=\"aspectFill\" borderRadius=\"10\"></Image> -->\r\n\r\n\r\n                        <GridLayout #btnIgnore col=\"1\" row=\"2\" class=\"btn btn-square\" style=\"width: 25%; height: 25%; margin-left: 50px;\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\r\n                            <Image src=\"~/images/nicht-moegen.png\" style=\"width: 100%; height: 100%;\" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n                        <GridLayout #btnLike col=\"3\" row=\"2\" style=\"width: 25%; height: 25%; margin-right: 50px;\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\r\n                            <Image src=\"~/images/moegen.png\" style=\"width: 100%; height: 100%; \" class=\"image\"></Image>\r\n                        </GridLayout>\r\n\r\n\r\n                    </GridLayout>\r\n                </StackLayout>\r\n            </SwipeLayout>\r\n        </android>\r\n        <ios>\r\n            <SwipeLayout *ngFor=\"let card of cards |  slice:0:5; let i = index; trackBy: trackingFunction\" [visibility]=\"isLoaded ? 'visible' : 'collapse'\" [animationState]=\"swipeLayoutAnimated\" [gestureMode]=\"gestureMode\" class=\"swipe-layout\" [class.front]=\"i == 0\"\r\n                [class.middle]=\"i == 1\" [class.back]=\"i == 2\" [isUserInteractionEnabled]=\"i == 0\" (loaded)=\"swipeLayoutLoaded($event, btnIgnore, btnLike, badgeLike, badgeIgnore)\" (swipeLeft)=\"swipeLeftCallback($event, card)\" (swipeRight)=\"swipeRightCallback($event, card)\">\r\n                <CardView class=\"main-card dark\" shadowOffsetHeight=\"2\" shadowColor=\"#000000\" shadowOpacity=\"0.2\" shadowRadius=\"30\">\r\n                    <GridLayout>\r\n                        <GridLayout rows=\"*, auto, *\" columns=\"8, auto, *, auto, 8\" class=\"main-card-container\">\r\n\r\n                            <GridLayout #badgeLike col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-l-16\" horizontalAlignment=\"left\" opacity=\"0\">\r\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n                            <GridLayout #badgeIgnore col=\"0\" colSpan=\"5\" row=\"0\" class=\"btn btn-square card-badge m-r-16\" horizontalAlignment=\"right\" opacity=\"0\">\r\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n\r\n                            <Image col=\"0\" row=\"0\" colSpan=\"5\" rowSpan=\"6\" [src]=\"card.image\" stretch=\"aspectFill\"></Image>\r\n\r\n                            <GridLayout #btnIgnore col=\"1\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"decline(card)\">\r\n                                <Image src=\"~/images/cancel.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n                            <GridLayout #btnLike col=\"3\" row=\"1\" class=\"btn btn-square\" [isUserInteractionEnabled]=\"i == 0\" (tap)=\"like(card)\">\r\n                                <Image src=\"~/images/star.png\" class=\"image\"></Image>\r\n                            </GridLayout>\r\n\r\n                            <GridLayout col=\"0\" row=\"2\" colSpan=\"5\" rows=\"auto, auto, auto\" columns=\"auto, *, auto\" class=\"info\">\r\n                                <Label col=\"0\" row=\"0\" colSpan=\"2\" class=\"h5 date\" textWrap=\"true\">\r\n                                    <FormattedString>\r\n\r\n                                        <Span text=\"&#xf073; \" class=\"fa\"></Span>\r\n                                        <Span [text]=\"card.date\"></Span>\r\n                                    </FormattedString>\r\n                                </Label>\r\n                                <Label col=\"0\" row=\"1\" colSpan=\"2\" [text]=\"card.title\" textWrap=\"true\" class=\"h2 title\"></Label>\r\n                                <Label col=\"0\" row=\"2\" colSpan=\"2\" [text]=\"card.author\" textWrap=\"true\" class=\"h4 title\"></Label>\r\n                                <circular-progress-bar [col]=\"2\" [row]=\"1\" [rowSpan]=\"2\" [progress]=\"card.popularity\"></circular-progress-bar>\r\n                            </GridLayout>\r\n\r\n                        </GridLayout>\r\n                    </GridLayout>\r\n                </CardView>\r\n            </SwipeLayout>\r\n        </ios>\r\n        <StackLayout *ngIf=\"!go\" verticalAlignment=\"center\" [@fade]>\r\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\r\n            <Label text=\"We are going to ask you some very simple questions to find out what tool suits you best.\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\r\n            <Button text=\"Start\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\r\n        </StackLayout>\r\n              <StackLayout *ngIf=\"!cards.length\" verticalAlignment=\"center\" [@fade]>\r\n            <Image src=\"~/images/empty.png\" class=\"placeholder-image\"></Image>\r\n            <Label text=\"That's it! We know everything we need to. Take a look at your 'favorite' tab.\" textWrap=\"true\" class=\"h4 placeholder-label\" marginBottom=\"16\"></Label>\r\n            <Button text=\"Do it again\" class=\"btn btn-primary\" marginBottom=\"40\" (tap)=\"resetCards()\"></Button>\r\n        </StackLayout>\r\n        <ActivityIndicator verticalAlignment=\"center\" [busy]=\"!isLoaded\" class=\"activity-indicator\"></ActivityIndicator>\r\n    </GridLayout>\r\n\r\n\r\n</GridLayout>"

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxvVEFBb1QsZUFBZSw2NkNBQTY2Qyw0U0FBNFMsNjJCQUE2MkIsYUFBYSxtQkFBbUIsOEpBQThKLGNBQWMsZ0tBQWdLLGFBQWEsb0JBQW9CLDhLQUE4SyxjQUFjLDhSQUE4UixlQUFlLDgvRUFBOC9FLCsvRCIsImZpbGUiOiJidW5kbGUuMjIzMTZkNGNmNWJjNmNjZTNhMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8R3JpZExheW91dCByb3dzPVxcXCJhdXRvLCAqXFxcIiBpb3M6bWFyZ2luQm90dG9tPVxcXCI0OFxcXCI+XFxyXFxuICAgIDxHcmlkTGF5b3V0IHJvdz1cXFwiMFxcXCIgcm93U3Bhbj1cXFwiMlxcXCIgcGFkZGluZ1RvcD1cXFwiMzBcXFwiIGNsYXNzPVxcXCJwYWdlXFxcIiAobG9hZGVkKT1cXFwib25Db250YWluZXJMb2FkZWQoJGV2ZW50KVxcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCI+XFxyXFxuICAgICAgICA8YW5kcm9pZD5cXHJcXG4gICAgICAgICAgICA8U3dpcGVMYXlvdXQgKm5nRm9yPVxcXCJsZXQgY2FyZCBvZiBjYXJkcyB8ICBzbGljZTowOjU7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNraW5nRnVuY3Rpb25cXFwiIFt2aXNpYmlsaXR5XT1cXFwiaXNMb2FkZWQgPyAndmlzaWJsZScgOiAnY29sbGFwc2UnXFxcIiBbYW5pbWF0aW9uU3RhdGVdPVxcXCJzd2lwZUxheW91dEFuaW1hdGVkXFxcIiBbZ2VzdHVyZU1vZGVdPVxcXCJnZXN0dXJlTW9kZVxcXCIgY2xhc3M9XFxcInN3aXBlLWxheW91dFxcXCIgW2NsYXNzLmZyb250XT1cXFwiaSA9PSAwXFxcIlxcclxcbiAgICAgICAgICAgICAgICBbY2xhc3MubWlkZGxlXT1cXFwiaSA9PSAxXFxcIiBbY2xhc3MuYmFja109XFxcImkgPT0gMlxcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKGxvYWRlZCk9XFxcInN3aXBlTGF5b3V0TG9hZGVkKCRldmVudCwgYnRuSWdub3JlLCBidG5MaWtlLCBiYWRnZUxpa2UsIGJhZGdlSWdub3JlKVxcXCIgKHN3aXBlTGVmdCk9XFxcInN3aXBlTGVmdENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiIChzd2lwZVJpZ2h0KT1cXFwic3dpcGVSaWdodENhbGxiYWNrKCRldmVudCwgY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcIm1haW4tY2FyZCBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgcm93cz1cXFwiKiwgYXV0bywgKlxcXCIgY29sdW1ucz1cXFwiOCwgYXV0bywgKiwgYXV0bywgOFxcXCIgY2xhc3M9XFxcIm1haW4tY2FyZC1jb250YWluZXJcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0ICNiYWRnZUxpa2UgY29sPVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3c9XFxcIjBcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXNxdWFyZSBjYXJkLWJhZGdlIG0tbC0xNlxcXCIgaG9yaXpvbnRhbEFsaWdubWVudD1cXFwibGVmdFxcXCIgb3BhY2l0eT1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL21vZWdlbi5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlSWdub3JlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLXItMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbmljaHQtbW9lZ2VuLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMVxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93cz1cXFwiYXV0bywgYXV0bywgYXV0b1xcXCIgY29sdW1ucz1cXFwiYXV0bywgKiwgYXV0b1xcXCIgY2xhc3M9XFxcImluZm9cXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgY2xhc3M9XFxcImg1IGRhdGVcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRXcmFwPVxcXCJ0cnVlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGFuIHRleHQ9XFxcIiYjeGYwNzM7IFxcXCIgY2xhc3M9XFxcImZhXFxcIj48L1NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhbiBbdGV4dF09XFxcImNhcmQuZGF0ZVxcXCI+PC9TcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz4gXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIxXFxcIiBjb2xTcGFuPVxcXCIyXFxcIiBbdGV4dF09XFxcImNhcmQudGV4dFxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoMSB0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmN1bGFyLXByb2dyZXNzLWJhciBbY29sXT1cXFwiMlxcXCIgW3Jvd109XFxcIjFcXFwiIFtyb3dTcGFuXT1cXFwiMlxcXCIgW3Byb2dyZXNzXT1cXFwiY2FyZC5wb3B1bGFyaXR5XFxcIj48L2NpcmN1bGFyLXByb2dyZXNzLWJhcj5cXHJcXG4gLS0+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPEltYWdlIGNvbD1cXFwiMFxcXCIgcm93PVxcXCIwXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dTcGFuPVxcXCI2XFxcIiBbc3JjXT1cXFwiY2FyZC5pbWFnZVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZXRjaD1cXFwiYXNwZWN0RmlsbFxcXCIgYm9yZGVyUmFkaXVzPVxcXCIxMFxcXCI+PC9JbWFnZT4gLS0+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bklnbm9yZSBjb2w9XFxcIjFcXFwiIHJvdz1cXFwiMlxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBzdHlsZT1cXFwid2lkdGg6IDI1JTsgaGVpZ2h0OiAyNSU7IG1hcmdpbi1sZWZ0OiA1MHB4O1xcXCIgW2lzVXNlckludGVyYWN0aW9uRW5hYmxlZF09XFxcImkgPT0gMFxcXCIgKHRhcCk9XFxcImRlY2xpbmUoY2FyZClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9uaWNodC1tb2VnZW4ucG5nXFxcIiBzdHlsZT1cXFwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2J0bkxpa2UgY29sPVxcXCIzXFxcIiByb3c9XFxcIjJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjUlOyBoZWlnaHQ6IDI1JTsgbWFyZ2luLXJpZ2h0OiA1MHB4O1xcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL21vZWdlbi5wbmdcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgPC9Td2lwZUxheW91dD5cXHJcXG4gICAgICAgIDwvYW5kcm9pZD5cXHJcXG4gICAgICAgIDxpb3M+XFxyXFxuICAgICAgICAgICAgPFN3aXBlTGF5b3V0ICpuZ0Zvcj1cXFwibGV0IGNhcmQgb2YgY2FyZHMgfCAgc2xpY2U6MDo1OyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja2luZ0Z1bmN0aW9uXFxcIiBbdmlzaWJpbGl0eV09XFxcImlzTG9hZGVkID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlJ1xcXCIgW2FuaW1hdGlvblN0YXRlXT1cXFwic3dpcGVMYXlvdXRBbmltYXRlZFxcXCIgW2dlc3R1cmVNb2RlXT1cXFwiZ2VzdHVyZU1vZGVcXFwiIGNsYXNzPVxcXCJzd2lwZS1sYXlvdXRcXFwiIFtjbGFzcy5mcm9udF09XFxcImkgPT0gMFxcXCJcXHJcXG4gICAgICAgICAgICAgICAgW2NsYXNzLm1pZGRsZV09XFxcImkgPT0gMVxcXCIgW2NsYXNzLmJhY2tdPVxcXCJpID09IDJcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiIChsb2FkZWQpPVxcXCJzd2lwZUxheW91dExvYWRlZCgkZXZlbnQsIGJ0bklnbm9yZSwgYnRuTGlrZSwgYmFkZ2VMaWtlLCBiYWRnZUlnbm9yZSlcXFwiIChzd2lwZUxlZnQpPVxcXCJzd2lwZUxlZnRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIiAoc3dpcGVSaWdodCk9XFxcInN3aXBlUmlnaHRDYWxsYmFjaygkZXZlbnQsIGNhcmQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPENhcmRWaWV3IGNsYXNzPVxcXCJtYWluLWNhcmQgZGFya1xcXCIgc2hhZG93T2Zmc2V0SGVpZ2h0PVxcXCIyXFxcIiBzaGFkb3dDb2xvcj1cXFwiIzAwMDAwMFxcXCIgc2hhZG93T3BhY2l0eT1cXFwiMC4yXFxcIiBzaGFkb3dSYWRpdXM9XFxcIjMwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcIiosIGF1dG8sICpcXFwiIGNvbHVtbnM9XFxcIjgsIGF1dG8sICosIGF1dG8sIDhcXFwiIGNsYXNzPVxcXCJtYWluLWNhcmQtY29udGFpbmVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlTGlrZSBjb2w9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvdz1cXFwiMFxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlIGNhcmQtYmFkZ2UgbS1sLTE2XFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL3N0YXIucG5nXFxcIiBjbGFzcz1cXFwiaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgI2JhZGdlSWdub3JlIGNvbD1cXFwiMFxcXCIgY29sU3Bhbj1cXFwiNVxcXCIgcm93PVxcXCIwXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmUgY2FyZC1iYWRnZSBtLXItMTZcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBvcGFjaXR5PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjVcXFwiIHJvd1NwYW49XFxcIjZcXFwiIFtzcmNdPVxcXCJjYXJkLmltYWdlXFxcIiBzdHJldGNoPVxcXCJhc3BlY3RGaWxsXFxcIj48L0ltYWdlPlxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuSWdub3JlIGNvbD1cXFwiMVxcXCIgcm93PVxcXCIxXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1zcXVhcmVcXFwiIFtpc1VzZXJJbnRlcmFjdGlvbkVuYWJsZWRdPVxcXCJpID09IDBcXFwiICh0YXApPVxcXCJkZWNsaW5lKGNhcmQpXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2NhbmNlbC5wbmdcXFwiIGNsYXNzPVxcXCJpbWFnZVxcXCI+PC9JbWFnZT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZExheW91dCAjYnRuTGlrZSBjb2w9XFxcIjNcXFwiIHJvdz1cXFwiMVxcXCIgY2xhc3M9XFxcImJ0biBidG4tc3F1YXJlXFxcIiBbaXNVc2VySW50ZXJhY3Rpb25FbmFibGVkXT1cXFwiaSA9PSAwXFxcIiAodGFwKT1cXFwibGlrZShjYXJkKVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9zdGFyLnBuZ1xcXCIgY2xhc3M9XFxcImltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNvbD1cXFwiMFxcXCIgcm93PVxcXCIyXFxcIiBjb2xTcGFuPVxcXCI1XFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCJhdXRvLCAqLCBhdXRvXFxcIiBjbGFzcz1cXFwiaW5mb1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjBcXFwiIGNvbFNwYW49XFxcIjJcXFwiIGNsYXNzPVxcXCJoNSBkYXRlXFxcIiB0ZXh0V3JhcD1cXFwidHJ1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1hdHRlZFN0cmluZz5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gdGV4dD1cXFwiJiN4ZjA3MzsgXFxcIiBjbGFzcz1cXFwiZmFcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYW4gW3RleHRdPVxcXCJjYXJkLmRhdGVcXFwiPjwvU3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1hdHRlZFN0cmluZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiByb3c9XFxcIjFcXFwiIGNvbFNwYW49XFxcIjJcXFwiIFt0ZXh0XT1cXFwiY2FyZC50aXRsZVxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoMiB0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjb2w9XFxcIjBcXFwiIHJvdz1cXFwiMlxcXCIgY29sU3Bhbj1cXFwiMlxcXCIgW3RleHRdPVxcXCJjYXJkLmF1dGhvclxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCB0aXRsZVxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjdWxhci1wcm9ncmVzcy1iYXIgW2NvbF09XFxcIjJcXFwiIFtyb3ddPVxcXCIxXFxcIiBbcm93U3Bhbl09XFxcIjJcXFwiIFtwcm9ncmVzc109XFxcImNhcmQucG9wdWxhcml0eVxcXCI+PC9jaXJjdWxhci1wcm9ncmVzcy1iYXI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvQ2FyZFZpZXc+XFxyXFxuICAgICAgICAgICAgPC9Td2lwZUxheW91dD5cXHJcXG4gICAgICAgIDwvaW9zPlxcclxcbiAgICAgICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhZ29cXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIFtAZmFkZV0+XFxyXFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvZW1wdHkucG5nXFxcIiBjbGFzcz1cXFwicGxhY2Vob2xkZXItaW1hZ2VcXFwiPjwvSW1hZ2U+XFxyXFxuICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIldlIGFyZSBnb2luZyB0byBhc2sgeW91IHNvbWUgdmVyeSBzaW1wbGUgcXVlc3Rpb25zIHRvIGZpbmQgb3V0IHdoYXQgdG9vbCBzdWl0cyB5b3UgYmVzdC5cXFwiIHRleHRXcmFwPVxcXCJ0cnVlXFxcIiBjbGFzcz1cXFwiaDQgcGxhY2Vob2xkZXItbGFiZWxcXFwiIG1hcmdpbkJvdHRvbT1cXFwiMTZcXFwiPjwvTGFiZWw+XFxyXFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCJTdGFydFxcXCIgY2xhc3M9XFxcImJ0biBidG4tcHJpbWFyeVxcXCIgbWFyZ2luQm90dG9tPVxcXCI0MFxcXCIgKHRhcCk9XFxcInJlc2V0Q2FyZHMoKVxcXCI+PC9CdXR0b24+XFxyXFxuICAgICAgICA8L1N0YWNrTGF5b3V0PlxcclxcbiAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0ICpuZ0lmPVxcXCIhY2FyZHMubGVuZ3RoXFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwiY2VudGVyXFxcIiBbQGZhZGVdPlxcclxcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XFxcIn4vaW1hZ2VzL2VtcHR5LnBuZ1xcXCIgY2xhc3M9XFxcInBsYWNlaG9sZGVyLWltYWdlXFxcIj48L0ltYWdlPlxcclxcbiAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaGF0J3MgaXQhIFdlIGtub3cgZXZlcnl0aGluZyB3ZSBuZWVkIHRvLiBUYWtlIGEgbG9vayBhdCB5b3VyICdmYXZvcml0ZScgdGFiLlxcXCIgdGV4dFdyYXA9XFxcInRydWVcXFwiIGNsYXNzPVxcXCJoNCBwbGFjZWhvbGRlci1sYWJlbFxcXCIgbWFyZ2luQm90dG9tPVxcXCIxNlxcXCI+PC9MYWJlbD5cXHJcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIkRvIGl0IGFnYWluXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBtYXJnaW5Cb3R0b209XFxcIjQwXFxcIiAodGFwKT1cXFwicmVzZXRDYXJkcygpXFxcIj48L0J1dHRvbj5cXHJcXG4gICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxyXFxuICAgICAgICA8QWN0aXZpdHlJbmRpY2F0b3IgdmVydGljYWxBbGlnbm1lbnQ9XFxcImNlbnRlclxcXCIgW2J1c3ldPVxcXCIhaXNMb2FkZWRcXFwiIGNsYXNzPVxcXCJhY3Rpdml0eS1pbmRpY2F0b3JcXFwiPjwvQWN0aXZpdHlJbmRpY2F0b3I+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG5cXHJcXG5cXHJcXG48L0dyaWRMYXlvdXQ+XCIiXSwic291cmNlUm9vdCI6IiJ9