"use strict";(self.webpackChunkdemo_jhipster_fe=self.webpackChunkdemo_jhipster_fe||[]).push([[157],{9586:(b,f,r)=>{r.d(f,{_l:()=>l,aW:()=>o,cy:()=>u,jo:()=>g,s1:()=>y});const o="asc",g="desc",l="sort",y="deleted",u="defaultSort"},5929:(b,f,r)=>{r.d(f,{b:()=>g});var o=r(529);const g=l=>{let y=new o.LE;return l&&(Object.keys(l).forEach(u=>{"sort"!==u&&l[u]&&""!==l[u]&&(y=y.set(u,l[u]))}),l.sort&&l.sort.forEach(u=>{y=y.append("sort",u)})),y}},6037:(b,f,r)=>{function o(l){return null!=l}r.d(f,{E:()=>o,z:()=>g});const g=l=>isNaN(l)?0:l},4866:(b,f,r)=>{r.r(f),r.d(f,{CountryModule:()=>at});var o=r(4985),g=r(8996),l=r(8059),y=r(9300),u=r(3900),D=r(9841),T=r(8505),p=r(9586),t=r(4650),s=r(5709),h=r(3414),a=r(4006),m=r(6895),U=r(3868),v=r(1995),d=r(486);const M=function(n){return{id:n}};function E(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.confirmDelete(c.country.id))}),t._uU(1,"\n  "),t.TgZ(2,"div",2),t._uU(3,"\n    "),t.TgZ(4,"h4",3),t._uU(5,"Confirm delete operation"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"button",4),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.cancel())}),t._uU(8,"\xd7"),t.qZA(),t._uU(9,"\n  "),t.qZA(),t._uU(10,"\n\n  "),t.TgZ(11,"div",5),t._uU(12,"\n    "),t._UZ(13,"jhi-alert-error"),t._uU(14,"\n    "),t.TgZ(15,"p",6),t._uU(16),t.qZA(),t._uU(17,"\n  "),t.qZA(),t._uU(18,"\n\n  "),t.TgZ(19,"div",7),t._uU(20,"\n    "),t.TgZ(21,"button",8),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.cancel())}),t._uU(22,"\n      "),t._UZ(23,"fa-icon",9),t._uU(24,"\xa0"),t.TgZ(25,"span",10),t._uU(26,"Cancel"),t.qZA(),t._uU(27,"\n    "),t.qZA(),t._uU(28,"\n\n    "),t.TgZ(29,"button",11),t._uU(30,"\n      "),t._UZ(31,"fa-icon",12),t._uU(32,"\xa0"),t.TgZ(33,"span",13),t._uU(34,"Delete"),t.qZA(),t._uU(35,"\n    "),t.qZA(),t._uU(36,"\n  "),t.qZA(),t._uU(37,"\n"),t.qZA()}if(2&n){const e=t.oxw();t.xp6(15),t.Q6J("translateValues",t.VKq(2,M,e.country.id)),t.xp6(1),t.hij("\n      Are you sure you want to delete Country ",e.country.id,"?\n    ")}}let S=(()=>{class n{constructor(e,i){this.countryService=e,this.activeModal=i}cancel(){this.activeModal.dismiss()}confirmDelete(e){this.countryService.delete(e).subscribe(()=>{this.activeModal.close(p.s1)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.T),t.Y36(h.Kz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","countryDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-country-heading","jhiTranslate","demoJhipsterFeApp.country.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-country","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(e,i){1&e&&(t.YNc(0,E,38,4,"form",0),t._uU(1,"\n")),2&e&&t.Q6J("ngIf",i.country)},dependencies:[a._Y,a.JL,a.F,m.O5,U.BN,v.P,d.A],encapsulation:2}),n})();var C=r(1805),A=r(9003),O=r(1408),x=r(1427);function q(n,_){1&n&&(t.TgZ(0,"div",11),t._uU(1,"\n    "),t.TgZ(2,"span",12),t._uU(3,"No Countries found"),t.qZA(),t._uU(4,"\n  "),t.qZA())}const L=function(n){return["/region",n,"view"]};function P(n,_){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n              "),t.TgZ(2,"a",26),t._uU(3),t.qZA(),t._uU(4,"\n            "),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(2,L,e.region.id)),t.xp6(1),t.Oqu(null==e.region?null:e.region.id)}}const j=function(n){return["/country",n,"view"]},w=function(n){return["/country",n,"edit"]};function Q(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"tr",25),t._uU(1,"\n          "),t.TgZ(2,"td"),t._uU(3,"\n            "),t.TgZ(4,"a",26),t._uU(5),t.qZA(),t._uU(6,"\n          "),t.qZA(),t._uU(7,"\n          "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n          "),t.TgZ(11,"td"),t._uU(12,"\n            "),t.YNc(13,P,5,4,"div",27),t._uU(14,"\n          "),t.qZA(),t._uU(15,"\n          "),t.TgZ(16,"td",28),t._uU(17,"\n            "),t.TgZ(18,"div",29),t._uU(19,"\n              "),t.TgZ(20,"button",30),t._uU(21,"\n                "),t._UZ(22,"fa-icon",31),t._uU(23,"\n                "),t.TgZ(24,"span",32),t._uU(25,"View"),t.qZA(),t._uU(26,"\n              "),t.qZA(),t._uU(27,"\n\n              "),t.TgZ(28,"button",33),t._uU(29,"\n                "),t._UZ(30,"fa-icon",34),t._uU(31,"\n                "),t.TgZ(32,"span",35),t._uU(33,"Edit"),t.qZA(),t._uU(34,"\n              "),t.qZA(),t._uU(35,"\n\n              "),t.TgZ(36,"button",36),t.NdJ("click",function(){const Z=t.CHM(e).$implicit,F=t.oxw(2);return t.KtG(F.delete(Z))}),t._uU(37,"\n                "),t._UZ(38,"fa-icon",37),t._uU(39,"\n                "),t.TgZ(40,"span",38),t._uU(41,"Delete"),t.qZA(),t._uU(42,"\n              "),t.qZA(),t._uU(43,"\n            "),t.qZA(),t._uU(44,"\n          "),t.qZA(),t._uU(45,"\n        "),t.qZA()}if(2&n){const e=_.$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(6,j,e.id)),t.xp6(1),t.Oqu(e.id),t.xp6(4),t.Oqu(e.countryName),t.xp6(4),t.Q6J("ngIf",e.region),t.xp6(7),t.Q6J("routerLink",t.VKq(8,j,e.id)),t.xp6(8),t.Q6J("routerLink",t.VKq(10,w,e.id))}}function K(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"div",13),t._uU(1,"\n    "),t.TgZ(2,"table",14),t._uU(3,"\n      "),t.TgZ(4,"thead"),t._uU(5,"\n        "),t.TgZ(6,"tr",15),t.NdJ("predicateChange",function(c){t.CHM(e);const Z=t.oxw();return t.KtG(Z.predicate=c)})("ascendingChange",function(c){t.CHM(e);const Z=t.oxw();return t.KtG(Z.ascending=c)})("sortChange",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.navigateToWithComponentValues())}),t._uU(7,"\n          "),t.TgZ(8,"th",16)(9,"span",17),t._uU(10,"ID"),t.qZA(),t._uU(11," "),t._UZ(12,"fa-icon",18),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"th",19),t._uU(15,"\n            "),t.TgZ(16,"span",20),t._uU(17,"Country Name"),t.qZA(),t._uU(18," "),t._UZ(19,"fa-icon",18),t._uU(20,"\n          "),t.qZA(),t._uU(21,"\n          "),t.TgZ(22,"th",21),t._uU(23,"\n            "),t.TgZ(24,"span",22),t._uU(25,"Region"),t.qZA(),t._uU(26," "),t._UZ(27,"fa-icon",18),t._uU(28,"\n          "),t.qZA(),t._uU(29,"\n          "),t._UZ(30,"th",23),t._uU(31,"\n        "),t.qZA(),t._uU(32,"\n      "),t.qZA(),t._uU(33,"\n      "),t.TgZ(34,"tbody"),t._uU(35,"\n        "),t.YNc(36,Q,46,12,"tr",24),t._uU(37,"\n      "),t.qZA(),t._uU(38,"\n    "),t.qZA(),t._uU(39,"\n  "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("predicate",e.predicate)("ascending",e.ascending),t.xp6(30),t.Q6J("ngForOf",e.countries)("ngForTrackBy",e.trackId)}}const Y=function(){return["/country/new"]};let W=(()=>{class n{constructor(e,i,c,Z,F){this.countryService=e,this.activatedRoute=i,this.router=c,this.sortService=Z,this.modalService=F,this.isLoading=!1,this.predicate="id",this.ascending=!0,this.trackId=(B,ct)=>this.countryService.getCountryIdentifier(ct)}ngOnInit(){this.load()}delete(e){const i=this.modalService.open(S,{size:"lg",backdrop:"static"});i.componentInstance.country=e,i.closed.pipe((0,y.h)(c=>c===p.s1),(0,u.w)(()=>this.loadFromBackendWithRouteInformations())).subscribe({next:c=>{this.onResponseSuccess(c)}})}load(){this.loadFromBackendWithRouteInformations().subscribe({next:e=>{this.onResponseSuccess(e)}})}navigateToWithComponentValues(){this.handleNavigation(this.predicate,this.ascending)}loadFromBackendWithRouteInformations(){return(0,D.a)([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe((0,T.b)(([e,i])=>this.fillComponentAttributeFromRoute(e,i)),(0,u.w)(()=>this.queryBackend(this.predicate,this.ascending)))}fillComponentAttributeFromRoute(e,i){const c=(e.get(p._l)??i[p.cy]).split(",");this.predicate=c[0],this.ascending=c[1]===p.aW}onResponseSuccess(e){const i=this.fillComponentAttributesFromResponseBody(e.body);this.countries=this.refineData(i)}refineData(e){return e.sort(this.sortService.startSort(this.predicate,this.ascending?1:-1))}fillComponentAttributesFromResponseBody(e){return e??[]}queryBackend(e,i){this.isLoading=!0;const c={sort:this.getSortQueryParam(e,i)};return this.countryService.query(c).pipe((0,T.b)(()=>this.isLoading=!1))}handleNavigation(e,i){const c={sort:this.getSortQueryParam(e,i)};this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:c})}getSortQueryParam(e=this.predicate,i=this.ascending){return""===e?[]:[e+","+(i?p.aW:p.jo)]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.T),t.Y36(g.gz),t.Y36(g.F0),t.Y36(C.K),t.Y36(h.FF))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jhi-country"]],decls:36,vars:6,consts:[["id","page-heading","data-cy","CountryHeading"],["jhiTranslate","demoJhipsterFeApp.country.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","demoJhipsterFeApp.country.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-country",3,"routerLink"],["icon","plus"],["jhiTranslate","demoJhipsterFeApp.country.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","demoJhipsterFeApp.country.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","countryName"],["jhiTranslate","demoJhipsterFeApp.country.countryName"],["scope","col","jhiSortBy","region.id"],["jhiTranslate","demoJhipsterFeApp.country.region"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[4,"ngIf"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"]],template:function(e,i){1&e&&(t.TgZ(0,"div"),t._uU(1,"\n  "),t.TgZ(2,"h2",0),t._uU(3,"\n    "),t.TgZ(4,"span",1),t._uU(5,"Countries"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",2),t._uU(8,"\n      "),t.TgZ(9,"button",3),t.NdJ("click",function(){return i.load()}),t._uU(10,"\n        "),t._UZ(11,"fa-icon",4),t._uU(12,"\n        "),t.TgZ(13,"span",5),t._uU(14,"Refresh list"),t.qZA(),t._uU(15,"\n      "),t.qZA(),t._uU(16,"\n\n      "),t.TgZ(17,"button",6),t._uU(18,"\n        "),t._UZ(19,"fa-icon",7),t._uU(20,"\n        "),t.TgZ(21,"span",8),t._uU(22," Create a new Country "),t.qZA(),t._uU(23,"\n      "),t.qZA(),t._uU(24,"\n    "),t.qZA(),t._uU(25,"\n  "),t.qZA(),t._uU(26,"\n\n  "),t._UZ(27,"jhi-alert-error"),t._uU(28,"\n\n  "),t._UZ(29,"jhi-alert"),t._uU(30,"\n\n  "),t.YNc(31,q,5,0,"div",9),t._uU(32,"\n\n  "),t.YNc(33,K,40,4,"div",10),t._uU(34,"\n"),t.qZA(),t._uU(35,"\n")),2&e&&(t.xp6(9),t.Q6J("disabled",i.isLoading),t.xp6(2),t.Q6J("spin",i.isLoading),t.xp6(6),t.Q6J("routerLink",t.DdM(5,Y)),t.xp6(14),t.Q6J("ngIf",0===(null==i.countries?null:i.countries.length)),t.xp6(2),t.Q6J("ngIf",i.countries&&i.countries.length>0))},dependencies:[m.sg,m.O5,U.BN,v.P,A.w,d.A,O.T,x.b,g.rH,g.yS],encapsulation:2}),n})();const H=function(n){return["/region",n,"view"]};function k(n,_){if(1&n&&(t.TgZ(0,"div"),t._uU(1,"\n            "),t.TgZ(2,"a",15),t._uU(3),t.qZA(),t._uU(4,"\n          "),t.qZA()),2&n){const e=t.oxw(2);t.xp6(2),t.Q6J("routerLink",t.VKq(2,H,e.country.region.id)),t.xp6(1),t.Oqu(null==e.country.region?null:e.country.region.id)}}const V=function(n){return["/country",n,"edit"]};function $(n,_){if(1&n){const e=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n      "),t.TgZ(2,"h2",3)(3,"span",4),t._uU(4,"Country"),t.qZA()(),t._uU(5,"\n\n      "),t._UZ(6,"hr"),t._uU(7,"\n\n      "),t._UZ(8,"jhi-alert-error"),t._uU(9,"\n\n      "),t._UZ(10,"jhi-alert"),t._uU(11,"\n\n      "),t.TgZ(12,"dl",5),t._uU(13,"\n        "),t.TgZ(14,"dt")(15,"span",6),t._uU(16,"ID"),t.qZA()(),t._uU(17,"\n        "),t.TgZ(18,"dd"),t._uU(19,"\n          "),t.TgZ(20,"span"),t._uU(21),t.qZA(),t._uU(22,"\n        "),t.qZA(),t._uU(23,"\n        "),t.TgZ(24,"dt")(25,"span",7),t._uU(26,"Country Name"),t.qZA()(),t._uU(27,"\n        "),t.TgZ(28,"dd"),t._uU(29,"\n          "),t.TgZ(30,"span"),t._uU(31),t.qZA(),t._uU(32,"\n        "),t.qZA(),t._uU(33,"\n        "),t.TgZ(34,"dt")(35,"span",8),t._uU(36,"Region"),t.qZA()(),t._uU(37,"\n        "),t.TgZ(38,"dd"),t._uU(39,"\n          "),t.YNc(40,k,5,4,"div",2),t._uU(41,"\n        "),t.qZA(),t._uU(42,"\n      "),t.qZA(),t._uU(43,"\n\n      "),t.TgZ(44,"button",9),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.previousState())}),t._uU(45,"\n        "),t._UZ(46,"fa-icon",10),t._uU(47,"\xa0"),t.TgZ(48,"span",11),t._uU(49,"Back"),t.qZA(),t._uU(50,"\n      "),t.qZA(),t._uU(51,"\n\n      "),t.TgZ(52,"button",12),t._uU(53,"\n        "),t._UZ(54,"fa-icon",13),t._uU(55,"\xa0"),t.TgZ(56,"span",14),t._uU(57,"Edit"),t.qZA(),t._uU(58,"\n      "),t.qZA(),t._uU(59,"\n    "),t.qZA()}if(2&n){const e=t.oxw();t.xp6(21),t.Oqu(e.country.id),t.xp6(10),t.Oqu(e.country.countryName),t.xp6(9),t.Q6J("ngIf",e.country.region),t.xp6(12),t.Q6J("routerLink",t.VKq(4,V,e.country.id))}}let G=(()=>{class n{constructor(e){this.activatedRoute=e,this.country=null}ngOnInit(){this.activatedRoute.data.subscribe(({country:e})=>{this.country=e})}previousState(){window.history.back()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jhi-country-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","countryDetailsHeading"],["jhiTranslate","demoJhipsterFeApp.country.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","demoJhipsterFeApp.country.countryName"],["jhiTranslate","demoJhipsterFeApp.country.region"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"],[3,"routerLink"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.YNc(4,$,60,6,"div",2),t._uU(5,"\n  "),t.qZA(),t._uU(6,"\n"),t.qZA(),t._uU(7,"\n")),2&e&&(t.xp6(4),t.Q6J("ngIf",i.country))},dependencies:[m.O5,U.BN,v.P,A.w,d.A,g.rH,g.yS],encapsulation:2}),n})();var z=r(8746),R=r(4004);let X=(()=>{class n{createCountryFormGroup(e={id:null}){const i={...this.getFormDefaults(),...e};return new a.cw({id:new a.NI({value:i.id,disabled:!0},{nonNullable:!0,validators:[a.kI.required]}),countryName:new a.NI(i.countryName),region:new a.NI(i.region)})}getCountry(e){return e.getRawValue()}resetForm(e,i){const c={...this.getFormDefaults(),...i};e.reset({...c,id:{value:c.id,disabled:!0}})}getFormDefaults(){return{id:null}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var tt=r(329);function et(n,_){1&n&&(t.TgZ(0,"div",5),t._uU(1,"\n          "),t.TgZ(2,"label",18),t._uU(3,"ID"),t.qZA(),t._uU(4,"\n          "),t._UZ(5,"input",19),t._uU(6,"\n        "),t.qZA()),2&n&&(t.xp6(5),t.Q6J("readonly",!0))}function nt(n,_){if(1&n&&(t.TgZ(0,"option",10),t._uU(1),t.qZA()),2&n){const e=_.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.Oqu(e.id)}}let I=(()=>{class n{constructor(e,i,c,Z){this.countryService=e,this.countryFormService=i,this.regionService=c,this.activatedRoute=Z,this.isSaving=!1,this.country=null,this.regionsSharedCollection=[],this.editForm=this.countryFormService.createCountryFormGroup(),this.compareRegion=(F,B)=>this.regionService.compareRegion(F,B)}ngOnInit(){this.activatedRoute.data.subscribe(({country:e})=>{this.country=e,e&&this.updateForm(e),this.loadRelationshipsOptions()})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.countryFormService.getCountry(this.editForm);this.subscribeToSaveResponse(null!==e.id?this.countryService.update(e):this.countryService.create(e))}subscribeToSaveResponse(e){e.pipe((0,z.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(e){this.country=e,this.countryFormService.resetForm(this.editForm,e),this.regionsSharedCollection=this.regionService.addRegionToCollectionIfMissing(this.regionsSharedCollection,e.region)}loadRelationshipsOptions(){this.regionService.query().pipe((0,R.U)(e=>e.body??[])).pipe((0,R.U)(e=>this.regionService.addRegionToCollectionIfMissing(e,this.country?.region))).subscribe(e=>this.regionsSharedCollection=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(s.T),t.Y36(X),t.Y36(tt.o),t.Y36(g.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["jhi-country-update"]],decls:59,vars:6,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-country-heading","data-cy","CountryCreateUpdateHeading","jhiTranslate","demoJhipsterFeApp.country.home.createOrEditLabel"],["class","row mb-3",4,"ngIf"],[1,"row","mb-3"],["jhiTranslate","demoJhipsterFeApp.country.countryName","for","field_countryName",1,"form-label"],["type","text","name","countryName","id","field_countryName","data-cy","countryName","formControlName","countryName",1,"form-control"],["jhiTranslate","demoJhipsterFeApp.country.region","for","field_region",1,"form-label"],["id","field_region","data-cy","region","name","region","formControlName","region",1,"form-control",3,"compareWith"],[3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return i.save()}),t._uU(5,"\n      "),t.TgZ(6,"h2",3),t._uU(7,"\n        Create or edit a Country\n      "),t.qZA(),t._uU(8,"\n\n      "),t.TgZ(9,"div"),t._uU(10,"\n        "),t._UZ(11,"jhi-alert-error"),t._uU(12,"\n\n        "),t.YNc(13,et,7,1,"div",4),t._uU(14,"\n\n        "),t.TgZ(15,"div",5),t._uU(16,"\n          "),t.TgZ(17,"label",6),t._uU(18,"Country Name"),t.qZA(),t._uU(19,"\n          "),t._UZ(20,"input",7),t._uU(21,"\n        "),t.qZA(),t._uU(22,"\n\n        "),t.TgZ(23,"div",5),t._uU(24,"\n          "),t.TgZ(25,"label",8),t._uU(26,"Region"),t.qZA(),t._uU(27,"\n          "),t.TgZ(28,"select",9),t._uU(29,"\n            "),t._UZ(30,"option",10),t._uU(31,"\n            "),t.YNc(32,nt,2,2,"option",11),t._uU(33,"\n          "),t.qZA(),t._uU(34,"\n        "),t.qZA(),t._uU(35,"\n      "),t.qZA(),t._uU(36,"\n\n      "),t.TgZ(37,"div"),t._uU(38,"\n        "),t.TgZ(39,"button",12),t.NdJ("click",function(){return i.previousState()}),t._uU(40,"\n          "),t._UZ(41,"fa-icon",13),t._uU(42,"\xa0"),t.TgZ(43,"span",14),t._uU(44,"Cancel"),t.qZA(),t._uU(45,"\n        "),t.qZA(),t._uU(46,"\n\n        "),t.TgZ(47,"button",15),t._uU(48,"\n          "),t._UZ(49,"fa-icon",16),t._uU(50,"\xa0"),t.TgZ(51,"span",17),t._uU(52,"Save"),t.qZA(),t._uU(53,"\n        "),t.qZA(),t._uU(54,"\n      "),t.qZA(),t._uU(55,"\n    "),t.qZA(),t._uU(56,"\n  "),t.qZA(),t._uU(57,"\n"),t.qZA(),t._uU(58,"\n")),2&e&&(t.xp6(4),t.Q6J("formGroup",i.editForm),t.xp6(9),t.Q6J("ngIf",null!==i.editForm.controls.id.value),t.xp6(15),t.Q6J("compareWith",i.compareRegion),t.xp6(2),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",i.regionsSharedCollection),t.xp6(15),t.Q6J("disabled",i.editForm.invalid||i.isSaving))},dependencies:[a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,m.sg,m.O5,U.BN,a.sg,a.u,v.P,d.A],encapsulation:2}),n})();var N=r(9646),ot=r(515),rt=r(5577);let J=(()=>{class n{constructor(e,i){this.service=e,this.router=i}resolve(e){const i=e.params.id;return i?this.service.find(i).pipe((0,rt.z)(c=>c.body?(0,N.of)(c.body):(this.router.navigate(["404"]),ot.E))):(0,N.of)(null)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(s.T),t.LFG(g.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const it=[{path:"",component:W,data:{defaultSort:"id,"+p.aW},canActivate:[l.Z]},{path:":id/view",component:G,resolve:{country:J},canActivate:[l.Z]},{path:"new",component:I,resolve:{country:J},canActivate:[l.Z]},{path:":id/edit",component:I,resolve:{country:J},canActivate:[l.Z]}];let st=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(it),g.Bz]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[o.m,st]}),n})()},486:(b,f,r)=>{r.d(f,{A:()=>t});var o=r(4650),g=r(4728),l=r(8821),y=r(6188),u=r(6895),D=r(3414);function T(s,h){if(1&s){const a=o.EpF();o.TgZ(0,"ngb-alert",4),o.NdJ("closed",function(){o.CHM(a);const U=o.oxw().$implicit,v=o.oxw();return o.KtG(v.close(U))}),o._uU(1,"\n      "),o._UZ(2,"pre",5),o._uU(3,"\n    "),o.qZA()}if(2&s){const a=o.oxw().$implicit;o.Q6J("type",a.type),o.xp6(2),o.Q6J("innerHTML",a.message,o.oJD)}}function p(s,h){if(1&s&&(o.TgZ(0,"div",2),o._uU(1,"\n    "),o.YNc(2,T,4,2,"ngb-alert",3),o._uU(3,"\n  "),o.qZA()),2&s){const a=h.$implicit,m=o.oxw();o.Q6J("ngClass",m.setClasses(a)),o.xp6(2),o.Q6J("ngIf",a.message)}}let t=(()=>{class s{constructor(a,m,U){this.alertService=a,this.eventManager=m,this.alerts=[],this.errorListener=m.subscribe("demoJhipsterFeApp.error",v=>{const d=v.content;this.addErrorAlert(d.message,d.key,d.params)}),this.httpErrorListener=m.subscribe("demoJhipsterFeApp.httpError",v=>{const d=v.content;switch(d.status){case 0:this.addErrorAlert("Server not reachable","error.server.not.reachable");break;case 400:{const M=d.headers.keys();let E=null,S=null;for(const C of M)C.toLowerCase().endsWith("app-error")?E=d.headers.get(C):C.toLowerCase().endsWith("app-params")&&(S=d.headers.get(C));if(E){const C=S?{entityName:U.instant(`global.menu.entities.${S}`)}:void 0;this.addErrorAlert(E,E,C)}else if(""!==d.error&&d.error.fieldErrors){const C=d.error.fieldErrors;for(const A of C){["Min","Max","DecimalMin","DecimalMax"].includes(A.message)&&(A.message="Size");const O=A.field.replace(/\[\d*\]/g,"[]"),x=U.instant(`demoJhipsterFeApp.${A.objectName}.${O}`);this.addErrorAlert(`Error on field "${x}"`,`error.${A.message}`,{fieldName:x})}}else""!==d.error&&d.error.message?this.addErrorAlert(d.error.detail??d.error.message,d.error.message,d.error.params):this.addErrorAlert(d.error,d.error);break}case 404:this.addErrorAlert("Not found","error.url.not.found");break;default:""!==d.error&&d.error.message?this.addErrorAlert(d.error.detail??d.error.message,d.error.message,d.error.params):this.addErrorAlert(d.error,d.error)}})}setClasses(a){const m={"jhi-toast":Boolean(a.toast)};return a.position?{...m,[a.position]:!0}:m}ngOnDestroy(){this.eventManager.destroy(this.errorListener),this.eventManager.destroy(this.httpErrorListener)}close(a){a.close?.(this.alerts)}addErrorAlert(a,m,U){this.alertService.addAlert({type:"danger",message:a,translationKey:m,translationParams:U},this.alerts)}}return s.\u0275fac=function(a){return new(a||s)(o.Y36(g.c),o.Y36(l.Q),o.Y36(y.sK))},s.\u0275cmp=o.Xpm({type:s,selectors:[["jhi-alert-error"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(a,m){1&a&&(o.TgZ(0,"div",0),o._uU(1,"\n  "),o.YNc(2,p,4,2,"div",1),o._uU(3,"\n"),o.qZA(),o._uU(4,"\n")),2&a&&(o.xp6(2),o.Q6J("ngForOf",m.alerts))},dependencies:[u.mk,u.sg,u.O5,D.xm],encapsulation:2}),s})()},9003:(b,f,r)=>{r.d(f,{w:()=>T});var o=r(4650),g=r(4728),l=r(6895),y=r(3414);function u(p,t){if(1&p){const s=o.EpF();o.TgZ(0,"ngb-alert",4),o.NdJ("closed",function(){o.CHM(s);const a=o.oxw().$implicit,m=o.oxw();return o.KtG(m.close(a))}),o._uU(1,"\n      "),o._UZ(2,"pre",5),o._uU(3,"\n    "),o.qZA()}if(2&p){const s=o.oxw().$implicit;o.Q6J("type",s.type),o.xp6(2),o.Q6J("innerHTML",s.message,o.oJD)}}function D(p,t){if(1&p&&(o.TgZ(0,"div",2),o._uU(1,"\n    "),o.YNc(2,u,4,2,"ngb-alert",3),o._uU(3,"\n  "),o.qZA()),2&p){const s=t.$implicit,h=o.oxw();o.Q6J("ngClass",h.setClasses(s)),o.xp6(2),o.Q6J("ngIf",s.message)}}let T=(()=>{class p{constructor(s){this.alertService=s,this.alerts=[]}ngOnInit(){this.alerts=this.alertService.get()}setClasses(s){const h={"jhi-toast":Boolean(s.toast)};return s.position?{...h,[s.position]:!0}:h}ngOnDestroy(){this.alertService.clear()}close(s){s.close?.(this.alerts)}}return p.\u0275fac=function(s){return new(s||p)(o.Y36(g.c))},p.\u0275cmp=o.Xpm({type:p,selectors:[["jhi-alert"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(s,h){1&s&&(o.TgZ(0,"div",0),o._uU(1,"\n  "),o.YNc(2,D,4,2,"div",1),o._uU(3,"\n"),o.qZA(),o._uU(4,"\n")),2&s&&(o.xp6(2),o.Q6J("ngForOf",h.alerts))},dependencies:[l.mk,l.sg,l.O5,y.xm],encapsulation:2}),p})()},1408:(b,f,r)=>{r.d(f,{T:()=>T});var o=r(7579),g=r(2722),l=r(3868),y=r(801),u=r(4650),D=r(1427);let T=(()=>{class p{constructor(s){this.sort=s,this.sortIcon=y.CmM,this.sortAscIcon=y.foy,this.sortDescIcon=y.u9C,this.destroy$=new o.x,s.predicateChange.pipe((0,g.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),s.ascendingChange.pipe((0,g.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let s=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(s=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=s.iconName,this.iconComponent.render()}}}return p.\u0275fac=function(s){return new(s||p)(u.Y36(D.b,1))},p.\u0275dir=u.lG2({type:p,selectors:[["","jhiSortBy",""]],contentQueries:function(s,h,a){if(1&s&&u.Suo(a,l.BN,5),2&s){let m;u.iGM(m=u.CRH())&&(h.iconComponent=m.first)}},hostBindings:function(s,h){1&s&&u.NdJ("click",function(){return h.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),p})()},1427:(b,f,r)=>{r.d(f,{b:()=>g});var o=r(4650);let g=(()=>{class l{constructor(){this.predicateChange=new o.vpe,this.ascendingChange=new o.vpe,this.sortChange=new o.vpe}get predicate(){return this._predicate}set predicate(u){this._predicate=u,this.predicateChange.emit(u)}get ascending(){return this._ascending}set ascending(u){this._ascending=u,this.ascendingChange.emit(u)}sort(u){this.ascending=u!==this.predicate||!this.ascending,this.predicate=u,this.predicateChange.emit(u),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}return l.\u0275fac=function(u){return new(u||l)},l.\u0275dir=o.lG2({type:l,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),l})()}}]);