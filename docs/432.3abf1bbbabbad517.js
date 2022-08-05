"use strict";(self.webpackChunkdemo_jhipster_fe=self.webpackChunkdemo_jhipster_fe||[]).push([[432],{9586:(C,U,o)=>{o.d(U,{_l:()=>u,aW:()=>n,cy:()=>l,jo:()=>m,s1:()=>f});const n="asc",m="desc",u="sort",f="deleted",l="defaultSort"},5929:(C,U,o)=>{o.d(U,{b:()=>m});var n=o(529);const m=u=>{let f=new n.LE;return u&&(Object.keys(u).forEach(l=>{"sort"!==l&&u[l]&&""!==u[l]&&(f=f.set(l,u[l]))}),u.sort&&u.sort.forEach(l=>{f=f.append("sort",l)})),f}},6037:(C,U,o)=>{function n(u){return null!=u}o.d(U,{E:()=>n,z:()=>m});const m=u=>isNaN(u)?0:u},7251:(C,U,o)=>{o.r(U),o.d(U,{TaskModule:()=>X});var n=o(4985),m=o(8996),u=o(8059),f=o(9300),l=o(3900),k=o(9841),A=o(8505),_=o(9586),t=o(4650),r=o(3992),g=o(3414),a=o(4006),h=o(6895),T=o(3868),v=o(1995),d=o(486);const F=function(i){return{id:i}};function D(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"form",1),t.NdJ("ngSubmit",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.confirmDelete(c.task.id))}),t._uU(1,"\n  "),t.TgZ(2,"div",2),t._uU(3,"\n    "),t.TgZ(4,"h4",3),t._uU(5,"Confirm delete operation"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"button",4),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.cancel())}),t._uU(8,"\xd7"),t.qZA(),t._uU(9,"\n  "),t.qZA(),t._uU(10,"\n\n  "),t.TgZ(11,"div",5),t._uU(12,"\n    "),t._UZ(13,"jhi-alert-error"),t._uU(14,"\n    "),t.TgZ(15,"p",6),t._uU(16),t.qZA(),t._uU(17,"\n  "),t.qZA(),t._uU(18,"\n\n  "),t.TgZ(19,"div",7),t._uU(20,"\n    "),t.TgZ(21,"button",8),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.cancel())}),t._uU(22,"\n      "),t._UZ(23,"fa-icon",9),t._uU(24,"\xa0"),t.TgZ(25,"span",10),t._uU(26,"Cancel"),t.qZA(),t._uU(27,"\n    "),t.qZA(),t._uU(28,"\n\n    "),t.TgZ(29,"button",11),t._uU(30,"\n      "),t._UZ(31,"fa-icon",12),t._uU(32,"\xa0"),t.TgZ(33,"span",13),t._uU(34,"Delete"),t.qZA(),t._uU(35,"\n    "),t.qZA(),t._uU(36,"\n  "),t.qZA(),t._uU(37,"\n"),t.qZA()}if(2&i){const e=t.oxw();t.xp6(15),t.Q6J("translateValues",t.VKq(2,F,e.task.id)),t.xp6(1),t.hij("\n      Are you sure you want to delete Task ",e.task.id,"?\n    ")}}let E=(()=>{class i{constructor(e,s){this.taskService=e,this.activeModal=s}cancel(){this.activeModal.dismiss()}confirmDelete(e){this.taskService.delete(e).subscribe(()=>{this.activeModal.close(_.s1)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.M),t.Y36(g.Kz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["ng-component"]],decls:2,vars:1,consts:[["name","deleteForm",3,"ngSubmit",4,"ngIf"],["name","deleteForm",3,"ngSubmit"],[1,"modal-header"],["data-cy","taskDeleteDialogHeading","jhiTranslate","entity.delete.title",1,"modal-title"],["type","button","data-dismiss","modal","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],["id","jhi-delete-task-heading","jhiTranslate","demoJhipsterFeApp.task.delete.question",3,"translateValues"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["id","jhi-confirm-delete-task","data-cy","entityConfirmDeleteButton","type","submit",1,"btn","btn-danger"],["icon","times"],["jhiTranslate","entity.action.delete"]],template:function(e,s){1&e&&(t.YNc(0,D,38,4,"form",0),t._uU(1,"\n")),2&e&&t.Q6J("ngIf",s.task)},dependencies:[a._Y,a.JL,a.F,h.O5,T.BN,v.P,d.A],encapsulation:2}),i})();var Z=o(1805),y=o(9003),x=o(1408),S=o(1427);function J(i,p){1&i&&(t.TgZ(0,"div",11),t._uU(1,"\n    "),t.TgZ(2,"span",12),t._uU(3,"No Tasks found"),t.qZA(),t._uU(4,"\n  "),t.qZA())}const O=function(i){return["/task",i,"view"]},R=function(i){return["/task",i,"edit"]};function q(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"tr",25),t._uU(1,"\n          "),t.TgZ(2,"td"),t._uU(3,"\n            "),t.TgZ(4,"a",26),t._uU(5),t.qZA(),t._uU(6,"\n          "),t.qZA(),t._uU(7,"\n          "),t.TgZ(8,"td"),t._uU(9),t.qZA(),t._uU(10,"\n          "),t.TgZ(11,"td"),t._uU(12),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"td",27),t._uU(15,"\n            "),t.TgZ(16,"div",28),t._uU(17,"\n              "),t.TgZ(18,"button",29),t._uU(19,"\n                "),t._UZ(20,"fa-icon",30),t._uU(21,"\n                "),t.TgZ(22,"span",31),t._uU(23,"View"),t.qZA(),t._uU(24,"\n              "),t.qZA(),t._uU(25,"\n\n              "),t.TgZ(26,"button",32),t._uU(27,"\n                "),t._UZ(28,"fa-icon",33),t._uU(29,"\n                "),t.TgZ(30,"span",34),t._uU(31,"Edit"),t.qZA(),t._uU(32,"\n              "),t.qZA(),t._uU(33,"\n\n              "),t.TgZ(34,"button",35),t.NdJ("click",function(){const b=t.CHM(e).$implicit,j=t.oxw(2);return t.KtG(j.delete(b))}),t._uU(35,"\n                "),t._UZ(36,"fa-icon",36),t._uU(37,"\n                "),t.TgZ(38,"span",37),t._uU(39,"Delete"),t.qZA(),t._uU(40,"\n              "),t.qZA(),t._uU(41,"\n            "),t.qZA(),t._uU(42,"\n          "),t.qZA(),t._uU(43,"\n        "),t.qZA()}if(2&i){const e=p.$implicit;t.xp6(4),t.Q6J("routerLink",t.VKq(6,O,e.id)),t.xp6(1),t.Oqu(e.id),t.xp6(4),t.Oqu(e.title),t.xp6(3),t.Oqu(e.description),t.xp6(6),t.Q6J("routerLink",t.VKq(8,O,e.id)),t.xp6(8),t.Q6J("routerLink",t.VKq(10,R,e.id))}}function L(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div",13),t._uU(1,"\n    "),t.TgZ(2,"table",14),t._uU(3,"\n      "),t.TgZ(4,"thead"),t._uU(5,"\n        "),t.TgZ(6,"tr",15),t.NdJ("predicateChange",function(c){t.CHM(e);const b=t.oxw();return t.KtG(b.predicate=c)})("ascendingChange",function(c){t.CHM(e);const b=t.oxw();return t.KtG(b.ascending=c)})("sortChange",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.navigateToWithComponentValues())}),t._uU(7,"\n          "),t.TgZ(8,"th",16)(9,"span",17),t._uU(10,"ID"),t.qZA(),t._uU(11," "),t._UZ(12,"fa-icon",18),t.qZA(),t._uU(13,"\n          "),t.TgZ(14,"th",19),t._uU(15,"\n            "),t.TgZ(16,"span",20),t._uU(17,"Title"),t.qZA(),t._uU(18," "),t._UZ(19,"fa-icon",18),t._uU(20,"\n          "),t.qZA(),t._uU(21,"\n          "),t.TgZ(22,"th",21),t._uU(23,"\n            "),t.TgZ(24,"span",22),t._uU(25,"Description"),t.qZA(),t._uU(26," "),t._UZ(27,"fa-icon",18),t._uU(28,"\n          "),t.qZA(),t._uU(29,"\n          "),t._UZ(30,"th",23),t._uU(31,"\n        "),t.qZA(),t._uU(32,"\n      "),t.qZA(),t._uU(33,"\n      "),t.TgZ(34,"tbody"),t._uU(35,"\n        "),t.YNc(36,q,44,12,"tr",24),t._uU(37,"\n      "),t.qZA(),t._uU(38,"\n    "),t.qZA(),t._uU(39,"\n  "),t.qZA()}if(2&i){const e=t.oxw();t.xp6(6),t.Q6J("predicate",e.predicate)("ascending",e.ascending),t.xp6(30),t.Q6J("ngForOf",e.tasks)("ngForTrackBy",e.trackId)}}const N=function(){return["/task/new"]};let P=(()=>{class i{constructor(e,s,c,b,j){this.taskService=e,this.activatedRoute=s,this.router=c,this.sortService=b,this.modalService=j,this.isLoading=!1,this.predicate="id",this.ascending=!0,this.trackId=(et,tt)=>this.taskService.getTaskIdentifier(tt)}ngOnInit(){this.load()}delete(e){const s=this.modalService.open(E,{size:"lg",backdrop:"static"});s.componentInstance.task=e,s.closed.pipe((0,f.h)(c=>c===_.s1),(0,l.w)(()=>this.loadFromBackendWithRouteInformations())).subscribe({next:c=>{this.onResponseSuccess(c)}})}load(){this.loadFromBackendWithRouteInformations().subscribe({next:e=>{this.onResponseSuccess(e)}})}navigateToWithComponentValues(){this.handleNavigation(this.predicate,this.ascending)}loadFromBackendWithRouteInformations(){return(0,k.a)([this.activatedRoute.queryParamMap,this.activatedRoute.data]).pipe((0,A.b)(([e,s])=>this.fillComponentAttributeFromRoute(e,s)),(0,l.w)(()=>this.queryBackend(this.predicate,this.ascending)))}fillComponentAttributeFromRoute(e,s){const c=(e.get(_._l)??s[_.cy]).split(",");this.predicate=c[0],this.ascending=c[1]===_.aW}onResponseSuccess(e){const s=this.fillComponentAttributesFromResponseBody(e.body);this.tasks=this.refineData(s)}refineData(e){return e.sort(this.sortService.startSort(this.predicate,this.ascending?1:-1))}fillComponentAttributesFromResponseBody(e){return e??[]}queryBackend(e,s){this.isLoading=!0;const c={sort:this.getSortQueryParam(e,s)};return this.taskService.query(c).pipe((0,A.b)(()=>this.isLoading=!1))}handleNavigation(e,s){const c={sort:this.getSortQueryParam(e,s)};this.router.navigate(["./"],{relativeTo:this.activatedRoute,queryParams:c})}getSortQueryParam(e=this.predicate,s=this.ascending){return""===e?[]:[e+","+(s?_.aW:_.jo)]}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.M),t.Y36(m.gz),t.Y36(m.F0),t.Y36(Z.K),t.Y36(g.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["jhi-task"]],decls:36,vars:6,consts:[["id","page-heading","data-cy","TaskHeading"],["jhiTranslate","demoJhipsterFeApp.task.home.title"],[1,"d-flex","justify-content-end"],[1,"btn","btn-info","me-2",3,"disabled","click"],["icon","sync",3,"spin"],["jhiTranslate","demoJhipsterFeApp.task.home.refreshListLabel"],["id","jh-create-entity","data-cy","entityCreateButton",1,"btn","btn-primary","jh-create-entity","create-task",3,"routerLink"],["icon","plus"],["jhiTranslate","demoJhipsterFeApp.task.home.createLabel"],["class","alert alert-warning","id","no-result",4,"ngIf"],["class","table-responsive","id","entities",4,"ngIf"],["id","no-result",1,"alert","alert-warning"],["jhiTranslate","demoJhipsterFeApp.task.home.notFound"],["id","entities",1,"table-responsive"],["aria-describedby","page-heading",1,"table","table-striped"],["jhiSort","",3,"predicate","ascending","predicateChange","ascendingChange","sortChange"],["scope","col","jhiSortBy","id"],["jhiTranslate","global.field.id"],["icon","sort"],["scope","col","jhiSortBy","title"],["jhiTranslate","demoJhipsterFeApp.task.title"],["scope","col","jhiSortBy","description"],["jhiTranslate","demoJhipsterFeApp.task.description"],["scope","col"],["data-cy","entityTable",4,"ngFor","ngForOf","ngForTrackBy"],["data-cy","entityTable"],[3,"routerLink"],[1,"text-end"],[1,"btn-group"],["type","submit","data-cy","entityDetailsButton",1,"btn","btn-info","btn-sm",3,"routerLink"],["icon","eye"],["jhiTranslate","entity.action.view",1,"d-none","d-md-inline"],["type","submit","data-cy","entityEditButton",1,"btn","btn-primary","btn-sm",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit",1,"d-none","d-md-inline"],["type","submit","data-cy","entityDeleteButton",1,"btn","btn-danger","btn-sm",3,"click"],["icon","times"],["jhiTranslate","entity.action.delete",1,"d-none","d-md-inline"]],template:function(e,s){1&e&&(t.TgZ(0,"div"),t._uU(1,"\n  "),t.TgZ(2,"h2",0),t._uU(3,"\n    "),t.TgZ(4,"span",1),t._uU(5,"Tasks"),t.qZA(),t._uU(6,"\n\n    "),t.TgZ(7,"div",2),t._uU(8,"\n      "),t.TgZ(9,"button",3),t.NdJ("click",function(){return s.load()}),t._uU(10,"\n        "),t._UZ(11,"fa-icon",4),t._uU(12,"\n        "),t.TgZ(13,"span",5),t._uU(14,"Refresh list"),t.qZA(),t._uU(15,"\n      "),t.qZA(),t._uU(16,"\n\n      "),t.TgZ(17,"button",6),t._uU(18,"\n        "),t._UZ(19,"fa-icon",7),t._uU(20,"\n        "),t.TgZ(21,"span",8),t._uU(22," Create a new Task "),t.qZA(),t._uU(23,"\n      "),t.qZA(),t._uU(24,"\n    "),t.qZA(),t._uU(25,"\n  "),t.qZA(),t._uU(26,"\n\n  "),t._UZ(27,"jhi-alert-error"),t._uU(28,"\n\n  "),t._UZ(29,"jhi-alert"),t._uU(30,"\n\n  "),t.YNc(31,J,5,0,"div",9),t._uU(32,"\n\n  "),t.YNc(33,L,40,4,"div",10),t._uU(34,"\n"),t.qZA(),t._uU(35,"\n")),2&e&&(t.xp6(9),t.Q6J("disabled",s.isLoading),t.xp6(2),t.Q6J("spin",s.isLoading),t.xp6(6),t.Q6J("routerLink",t.DdM(5,N)),t.xp6(14),t.Q6J("ngIf",0===(null==s.tasks?null:s.tasks.length)),t.xp6(2),t.Q6J("ngIf",s.tasks&&s.tasks.length>0))},dependencies:[h.sg,h.O5,T.BN,v.P,y.w,d.A,x.T,S.b,m.rH,m.yS],encapsulation:2}),i})();const w=function(i){return["/task",i,"edit"]};function K(i,p){if(1&i){const e=t.EpF();t.TgZ(0,"div"),t._uU(1,"\n      "),t.TgZ(2,"h2",3)(3,"span",4),t._uU(4,"Task"),t.qZA()(),t._uU(5,"\n\n      "),t._UZ(6,"hr"),t._uU(7,"\n\n      "),t._UZ(8,"jhi-alert-error"),t._uU(9,"\n\n      "),t._UZ(10,"jhi-alert"),t._uU(11,"\n\n      "),t.TgZ(12,"dl",5),t._uU(13,"\n        "),t.TgZ(14,"dt")(15,"span",6),t._uU(16,"ID"),t.qZA()(),t._uU(17,"\n        "),t.TgZ(18,"dd"),t._uU(19,"\n          "),t.TgZ(20,"span"),t._uU(21),t.qZA(),t._uU(22,"\n        "),t.qZA(),t._uU(23,"\n        "),t.TgZ(24,"dt")(25,"span",7),t._uU(26,"Title"),t.qZA()(),t._uU(27,"\n        "),t.TgZ(28,"dd"),t._uU(29,"\n          "),t.TgZ(30,"span"),t._uU(31),t.qZA(),t._uU(32,"\n        "),t.qZA(),t._uU(33,"\n        "),t.TgZ(34,"dt")(35,"span",8),t._uU(36,"Description"),t.qZA()(),t._uU(37,"\n        "),t.TgZ(38,"dd"),t._uU(39,"\n          "),t.TgZ(40,"span"),t._uU(41),t.qZA(),t._uU(42,"\n        "),t.qZA(),t._uU(43,"\n      "),t.qZA(),t._uU(44,"\n\n      "),t.TgZ(45,"button",9),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.previousState())}),t._uU(46,"\n        "),t._UZ(47,"fa-icon",10),t._uU(48,"\xa0"),t.TgZ(49,"span",11),t._uU(50,"Back"),t.qZA(),t._uU(51,"\n      "),t.qZA(),t._uU(52,"\n\n      "),t.TgZ(53,"button",12),t._uU(54,"\n        "),t._UZ(55,"fa-icon",13),t._uU(56,"\xa0"),t.TgZ(57,"span",14),t._uU(58,"Edit"),t.qZA(),t._uU(59,"\n      "),t.qZA(),t._uU(60,"\n    "),t.qZA()}if(2&i){const e=t.oxw();t.xp6(21),t.Oqu(e.task.id),t.xp6(10),t.Oqu(e.task.title),t.xp6(10),t.Oqu(e.task.description),t.xp6(12),t.Q6J("routerLink",t.VKq(4,w,e.task.id))}}let Q=(()=>{class i{constructor(e){this.activatedRoute=e,this.task=null}ngOnInit(){this.activatedRoute.data.subscribe(({task:e})=>{this.task=e})}previousState(){window.history.back()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["jhi-task-detail"]],decls:8,vars:1,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],[4,"ngIf"],["data-cy","taskDetailsHeading"],["jhiTranslate","demoJhipsterFeApp.task.detail.title"],[1,"row-md","jh-entity-details"],["jhiTranslate","global.field.id"],["jhiTranslate","demoJhipsterFeApp.task.title"],["jhiTranslate","demoJhipsterFeApp.task.description"],["type","submit","data-cy","entityDetailsBackButton",1,"btn","btn-info",3,"click"],["icon","arrow-left"],["jhiTranslate","entity.action.back"],["type","button",1,"btn","btn-primary",3,"routerLink"],["icon","pencil-alt"],["jhiTranslate","entity.action.edit"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.YNc(4,K,61,6,"div",2),t._uU(5,"\n  "),t.qZA(),t._uU(6,"\n"),t.qZA(),t._uU(7,"\n")),2&e&&(t.xp6(4),t.Q6J("ngIf",s.task))},dependencies:[h.O5,T.BN,v.P,y.w,d.A,m.rH],encapsulation:2}),i})();var Y=o(8746);let W=(()=>{class i{createTaskFormGroup(e={id:null}){const s={...this.getFormDefaults(),...e};return new a.cw({id:new a.NI({value:s.id,disabled:!0},{nonNullable:!0,validators:[a.kI.required]}),title:new a.NI(s.title),description:new a.NI(s.description),jobs:new a.NI(s.jobs??[])})}getTask(e){return e.getRawValue()}resetForm(e,s){const c={...this.getFormDefaults(),...s};e.reset({...c,id:{value:c.id,disabled:!0}})}getFormDefaults(){return{id:null,jobs:[]}}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function H(i,p){1&i&&(t.TgZ(0,"div",5),t._uU(1,"\n          "),t.TgZ(2,"label",16),t._uU(3,"ID"),t.qZA(),t._uU(4,"\n          "),t._UZ(5,"input",17),t._uU(6,"\n        "),t.qZA()),2&i&&(t.xp6(5),t.Q6J("readonly",!0))}let B=(()=>{class i{constructor(e,s,c){this.taskService=e,this.taskFormService=s,this.activatedRoute=c,this.isSaving=!1,this.task=null,this.editForm=this.taskFormService.createTaskFormGroup()}ngOnInit(){this.activatedRoute.data.subscribe(({task:e})=>{this.task=e,e&&this.updateForm(e)})}previousState(){window.history.back()}save(){this.isSaving=!0;const e=this.taskFormService.getTask(this.editForm);this.subscribeToSaveResponse(null!==e.id?this.taskService.update(e):this.taskService.create(e))}subscribeToSaveResponse(e){e.pipe((0,Y.x)(()=>this.onSaveFinalize())).subscribe({next:()=>this.onSaveSuccess(),error:()=>this.onSaveError()})}onSaveSuccess(){this.previousState()}onSaveError(){}onSaveFinalize(){this.isSaving=!1}updateForm(e){this.task=e,this.taskFormService.resetForm(this.editForm,e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.M),t.Y36(W),t.Y36(m.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["jhi-task-update"]],decls:54,vars:3,consts:[[1,"d-flex","justify-content-center"],[1,"col-8"],["name","editForm","role","form","novalidate","",3,"formGroup","ngSubmit"],["id","jhi-task-heading","data-cy","TaskCreateUpdateHeading","jhiTranslate","demoJhipsterFeApp.task.home.createOrEditLabel"],["class","row mb-3",4,"ngIf"],[1,"row","mb-3"],["jhiTranslate","demoJhipsterFeApp.task.title","for","field_title",1,"form-label"],["type","text","name","title","id","field_title","data-cy","title","formControlName","title",1,"form-control"],["jhiTranslate","demoJhipsterFeApp.task.description","for","field_description",1,"form-label"],["type","text","name","description","id","field_description","data-cy","description","formControlName","description",1,"form-control"],["type","button","id","cancel-save","data-cy","entityCreateCancelButton",1,"btn","btn-secondary",3,"click"],["icon","ban"],["jhiTranslate","entity.action.cancel"],["type","submit","id","save-entity","data-cy","entityCreateSaveButton",1,"btn","btn-primary",3,"disabled"],["icon","save"],["jhiTranslate","entity.action.save"],["jhiTranslate","global.field.id","for","field_id",1,"form-label"],["type","number","name","id","id","field_id","data-cy","id","formControlName","id",1,"form-control",3,"readonly"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0),t._uU(1,"\n  "),t.TgZ(2,"div",1),t._uU(3,"\n    "),t.TgZ(4,"form",2),t.NdJ("ngSubmit",function(){return s.save()}),t._uU(5,"\n      "),t.TgZ(6,"h2",3),t._uU(7,"\n        Create or edit a Task\n      "),t.qZA(),t._uU(8,"\n\n      "),t.TgZ(9,"div"),t._uU(10,"\n        "),t._UZ(11,"jhi-alert-error"),t._uU(12,"\n\n        "),t.YNc(13,H,7,1,"div",4),t._uU(14,"\n\n        "),t.TgZ(15,"div",5),t._uU(16,"\n          "),t.TgZ(17,"label",6),t._uU(18,"Title"),t.qZA(),t._uU(19,"\n          "),t._UZ(20,"input",7),t._uU(21,"\n        "),t.qZA(),t._uU(22,"\n\n        "),t.TgZ(23,"div",5),t._uU(24,"\n          "),t.TgZ(25,"label",8),t._uU(26,"Description"),t.qZA(),t._uU(27,"\n          "),t._UZ(28,"input",9),t._uU(29,"\n        "),t.qZA(),t._uU(30,"\n      "),t.qZA(),t._uU(31,"\n\n      "),t.TgZ(32,"div"),t._uU(33,"\n        "),t.TgZ(34,"button",10),t.NdJ("click",function(){return s.previousState()}),t._uU(35,"\n          "),t._UZ(36,"fa-icon",11),t._uU(37,"\xa0"),t.TgZ(38,"span",12),t._uU(39,"Cancel"),t.qZA(),t._uU(40,"\n        "),t.qZA(),t._uU(41,"\n\n        "),t.TgZ(42,"button",13),t._uU(43,"\n          "),t._UZ(44,"fa-icon",14),t._uU(45,"\xa0"),t.TgZ(46,"span",15),t._uU(47,"Save"),t.qZA(),t._uU(48,"\n        "),t.qZA(),t._uU(49,"\n      "),t.qZA(),t._uU(50,"\n    "),t.qZA(),t._uU(51,"\n  "),t.qZA(),t._uU(52,"\n"),t.qZA(),t._uU(53,"\n")),2&e&&(t.xp6(4),t.Q6J("formGroup",s.editForm),t.xp6(9),t.Q6J("ngIf",null!==s.editForm.controls.id.value),t.xp6(29),t.Q6J("disabled",s.editForm.invalid||s.isSaving))},dependencies:[a._Y,a.Fj,a.wV,a.JJ,a.JL,h.O5,T.BN,a.sg,a.u,v.P,d.A],encapsulation:2}),i})();var I=o(9646),G=o(515),$=o(5577);let M=(()=>{class i{constructor(e,s){this.service=e,this.router=s}resolve(e){const s=e.params.id;return s?this.service.find(s).pipe((0,$.z)(c=>c.body?(0,I.of)(c.body):(this.router.navigate(["404"]),G.E))):(0,I.of)(null)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(r.M),t.LFG(m.F0))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const z=[{path:"",component:P,data:{defaultSort:"id,"+_.aW},canActivate:[u.Z]},{path:":id/view",component:Q,resolve:{task:M},canActivate:[u.Z]},{path:"new",component:B,resolve:{task:M},canActivate:[u.Z]},{path:":id/edit",component:B,resolve:{task:M},canActivate:[u.Z]}];let V=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(z),m.Bz]}),i})(),X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[n.m,V]}),i})()},486:(C,U,o)=>{o.d(U,{A:()=>t});var n=o(4650),m=o(4728),u=o(8821),f=o(6188),l=o(6895),k=o(3414);function A(r,g){if(1&r){const a=n.EpF();n.TgZ(0,"ngb-alert",4),n.NdJ("closed",function(){n.CHM(a);const T=n.oxw().$implicit,v=n.oxw();return n.KtG(v.close(T))}),n._uU(1,"\n      "),n._UZ(2,"pre",5),n._uU(3,"\n    "),n.qZA()}if(2&r){const a=n.oxw().$implicit;n.Q6J("type",a.type),n.xp6(2),n.Q6J("innerHTML",a.message,n.oJD)}}function _(r,g){if(1&r&&(n.TgZ(0,"div",2),n._uU(1,"\n    "),n.YNc(2,A,4,2,"ngb-alert",3),n._uU(3,"\n  "),n.qZA()),2&r){const a=g.$implicit,h=n.oxw();n.Q6J("ngClass",h.setClasses(a)),n.xp6(2),n.Q6J("ngIf",a.message)}}let t=(()=>{class r{constructor(a,h,T){this.alertService=a,this.eventManager=h,this.alerts=[],this.errorListener=h.subscribe("demoJhipsterFeApp.error",v=>{const d=v.content;this.addErrorAlert(d.message,d.key,d.params)}),this.httpErrorListener=h.subscribe("demoJhipsterFeApp.httpError",v=>{const d=v.content;switch(d.status){case 0:this.addErrorAlert("Server not reachable","error.server.not.reachable");break;case 400:{const F=d.headers.keys();let D=null,E=null;for(const Z of F)Z.toLowerCase().endsWith("app-error")?D=d.headers.get(Z):Z.toLowerCase().endsWith("app-params")&&(E=d.headers.get(Z));if(D){const Z=E?{entityName:T.instant(`global.menu.entities.${E}`)}:void 0;this.addErrorAlert(D,D,Z)}else if(""!==d.error&&d.error.fieldErrors){const Z=d.error.fieldErrors;for(const y of Z){["Min","Max","DecimalMin","DecimalMax"].includes(y.message)&&(y.message="Size");const x=y.field.replace(/\[\d*\]/g,"[]"),S=T.instant(`demoJhipsterFeApp.${y.objectName}.${x}`);this.addErrorAlert(`Error on field "${S}"`,`error.${y.message}`,{fieldName:S})}}else""!==d.error&&d.error.message?this.addErrorAlert(d.error.detail??d.error.message,d.error.message,d.error.params):this.addErrorAlert(d.error,d.error);break}case 404:this.addErrorAlert("Not found","error.url.not.found");break;default:""!==d.error&&d.error.message?this.addErrorAlert(d.error.detail??d.error.message,d.error.message,d.error.params):this.addErrorAlert(d.error,d.error)}})}setClasses(a){const h={"jhi-toast":Boolean(a.toast)};return a.position?{...h,[a.position]:!0}:h}ngOnDestroy(){this.eventManager.destroy(this.errorListener),this.eventManager.destroy(this.httpErrorListener)}close(a){a.close?.(this.alerts)}addErrorAlert(a,h,T){this.alertService.addAlert({type:"danger",message:a,translationKey:h,translationParams:T},this.alerts)}}return r.\u0275fac=function(a){return new(a||r)(n.Y36(m.c),n.Y36(u.Q),n.Y36(f.sK))},r.\u0275cmp=n.Xpm({type:r,selectors:[["jhi-alert-error"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(a,h){1&a&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.YNc(2,_,4,2,"div",1),n._uU(3,"\n"),n.qZA(),n._uU(4,"\n")),2&a&&(n.xp6(2),n.Q6J("ngForOf",h.alerts))},dependencies:[l.mk,l.sg,l.O5,k.xm],encapsulation:2}),r})()},9003:(C,U,o)=>{o.d(U,{w:()=>A});var n=o(4650),m=o(4728),u=o(6895),f=o(3414);function l(_,t){if(1&_){const r=n.EpF();n.TgZ(0,"ngb-alert",4),n.NdJ("closed",function(){n.CHM(r);const a=n.oxw().$implicit,h=n.oxw();return n.KtG(h.close(a))}),n._uU(1,"\n      "),n._UZ(2,"pre",5),n._uU(3,"\n    "),n.qZA()}if(2&_){const r=n.oxw().$implicit;n.Q6J("type",r.type),n.xp6(2),n.Q6J("innerHTML",r.message,n.oJD)}}function k(_,t){if(1&_&&(n.TgZ(0,"div",2),n._uU(1,"\n    "),n.YNc(2,l,4,2,"ngb-alert",3),n._uU(3,"\n  "),n.qZA()),2&_){const r=t.$implicit,g=n.oxw();n.Q6J("ngClass",g.setClasses(r)),n.xp6(2),n.Q6J("ngIf",r.message)}}let A=(()=>{class _{constructor(r){this.alertService=r,this.alerts=[]}ngOnInit(){this.alerts=this.alertService.get()}setClasses(r){const g={"jhi-toast":Boolean(r.toast)};return r.position?{...g,[r.position]:!0}:g}ngOnDestroy(){this.alertService.clear()}close(r){r.close?.(this.alerts)}}return _.\u0275fac=function(r){return new(r||_)(n.Y36(m.c))},_.\u0275cmp=n.Xpm({type:_,selectors:[["jhi-alert"]],decls:5,vars:1,consts:[["role","alert",1,"alerts"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[3,"type","closed",4,"ngIf"],[3,"type","closed"],[3,"innerHTML"]],template:function(r,g){1&r&&(n.TgZ(0,"div",0),n._uU(1,"\n  "),n.YNc(2,k,4,2,"div",1),n._uU(3,"\n"),n.qZA(),n._uU(4,"\n")),2&r&&(n.xp6(2),n.Q6J("ngForOf",g.alerts))},dependencies:[u.mk,u.sg,u.O5,f.xm],encapsulation:2}),_})()},1408:(C,U,o)=>{o.d(U,{T:()=>A});var n=o(7579),m=o(2722),u=o(3868),f=o(801),l=o(4650),k=o(1427);let A=(()=>{class _{constructor(r){this.sort=r,this.sortIcon=f.CmM,this.sortAscIcon=f.foy,this.sortDescIcon=f.u9C,this.destroy$=new n.x,r.predicateChange.pipe((0,m.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition()),r.ascendingChange.pipe((0,m.R)(this.destroy$)).subscribe(()=>this.updateIconDefinition())}onClick(){this.iconComponent&&this.sort.sort(this.jhiSortBy)}ngAfterContentInit(){this.updateIconDefinition()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}updateIconDefinition(){if(this.iconComponent){let r=this.sortIcon;this.sort.predicate===this.jhiSortBy&&(r=this.sort.ascending?this.sortAscIcon:this.sortDescIcon),this.iconComponent.icon=r.iconName,this.iconComponent.render()}}}return _.\u0275fac=function(r){return new(r||_)(l.Y36(k.b,1))},_.\u0275dir=l.lG2({type:_,selectors:[["","jhiSortBy",""]],contentQueries:function(r,g,a){if(1&r&&l.Suo(a,u.BN,5),2&r){let h;l.iGM(h=l.CRH())&&(g.iconComponent=h.first)}},hostBindings:function(r,g){1&r&&l.NdJ("click",function(){return g.onClick()})},inputs:{jhiSortBy:"jhiSortBy"}}),_})()},1427:(C,U,o)=>{o.d(U,{b:()=>m});var n=o(4650);let m=(()=>{class u{constructor(){this.predicateChange=new n.vpe,this.ascendingChange=new n.vpe,this.sortChange=new n.vpe}get predicate(){return this._predicate}set predicate(l){this._predicate=l,this.predicateChange.emit(l)}get ascending(){return this._ascending}set ascending(l){this._ascending=l,this.ascendingChange.emit(l)}sort(l){this.ascending=l!==this.predicate||!this.ascending,this.predicate=l,this.predicateChange.emit(l),this.ascendingChange.emit(this.ascending),this.sortChange.emit({predicate:this.predicate,ascending:this.ascending})}}return u.\u0275fac=function(l){return new(l||u)},u.\u0275dir=n.lG2({type:u,selectors:[["","jhiSort",""]],inputs:{predicate:"predicate",ascending:"ascending"},outputs:{predicateChange:"predicateChange",ascendingChange:"ascendingChange",sortChange:"sortChange"}}),u})()}}]);