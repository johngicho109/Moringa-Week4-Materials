(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[67],{QLaP:function(e,t,r){"use strict"
var n=function(e,t,r,n,o,i,a,_){false
if(!e){var d
if(void 0===t)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.")
else{var l=[r,n,o,i,a,_]
var s=0
d=new Error(t.replace(/%s/g,(function(){return l[s++]})))
d.name="Invariant Violation"}d.framesToPop=1
throw d}}
e.exports=n},VrCy:function(e,t,r){"use strict"
var n=r("An8g")
var o=r("ouhR")
var i=r.n(o)
var a=r("q1tI")
var _=r.n(a)
r("17x9")
var d=r("i8i4")
var l=r.n(d)
var s=r("pSlt")
r("r2Yr")
var c=r("dDTa")
var p=r("etQE")
var g,v,h
class f extends _.a.Component{constructor(e){super(e)
this.getMaxIFrameWidth=()=>{if(this.state.tools){let e=0
for(let t=0;t<this.state.tools.length;t++){const r=this.state.tools[t]
const n=this["tool_iframe_"+r.definition_id].offsetWidth
n>e&&(e=n)}return e}return null}
this.handleAlertFocus=e=>{const t={iframeStyle:{border:"2px solid #008EE2",width:this.getMaxIFrameWidth()-4+"px"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="")
this.setState(t)}
this.handleAlertBlur=e=>{const t={iframeStyle:{border:"none",width:"100%"}}
e.target.className.search("before")>-1?t.beforeExternalContentAlertClass="screenreader-only":e.target.className.search("after")>-1&&(t.afterExternalContentAlertClass="screenreader-only")
this.setState(t)}
this.state={tools:[],beforeExternalContentAlertClass:"screenreader-only",afterExternalContentAlertClass:"screenreader-only",iframeStyle:{}}}componentWillMount(){this.getTools()}componentDidMount(){if(this.state.tools)for(let e=0;e<this.state.tools.length;e++){const t=this.state.tools[e]
this["tool_iframe_"+t.definition_id].setAttribute("allow",Object(c["a"])())}}async getTools(){const e=encodeURI(`${this.getDefinitionsUrl()}?placements[]=${this.props.placement}`)
try{const t=Object(p["f"])(e)||fetch(e,p["e"])
const r=await Object(p["b"])(t)
r.forEach(e=>e.launch=this.getLaunch(e))
this.setState({tools:r})}catch(e){i.a.flashError(s["a"].t("Error retrieving assignment external tools"))}}getDefinitionsUrl(){return`/api/v1/courses/${this.props.courseId}/lti_apps/launch_definitions`}getLaunch(e){const t=e.placements[this.props.placement].url
let r=`?borderless=true&url=${encodeURIComponent(t)}&placement=${this.props.placement}`
this.props.assignmentId&&(r+="&assignment_id="+this.props.assignmentId)
const n=`/courses/${this.props.courseId}/external_tools/retrieve`
return n+r}renderTool(e){const t={}
i.a.extend(t,this.state.iframeStyle)
if(e.placements[this.props.placement].launch_height){t.height=e.placements[this.props.placement].launch_height
t.minHeight="unset"}e.placements[this.props.placement].launch_width&&(t.width=e.placements[this.props.placement].launch_width)
return _.a.createElement("iframe",{src:e.launch,className:"tool_launch",style:t,key:e.definition_id,title:s["a"].t("External Tool %{tool_id}",{tool_id:e.definition_id}),ref:t=>{this["tool_iframe_"+e.definition_id]=t},"data-lti-launch":"true"})}renderToolsContainer(){const e="before_external_content_info_alert "+this.state.beforeExternalContentAlertClass
const t="after_external_content_info_alert "+this.state.afterExternalContentAlertClass
return Object(n["a"])("div",{style:{display:"about:blank"===this.state.toolLaunchUrl?"none":"block"}},void 0,Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:e,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,g||(g=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))),s["a"].t("The following content is partner provided"))),this.state.tools.map(e=>this.renderTool(e)),Object(n["a"])("div",{onFocus:this.handleAlertFocus,onBlur:this.handleAlertBlur,className:t,tabIndex:"0"},void 0,Object(n["a"])("div",{className:"ic-flash-info",style:{width:"auto",margin:"20px"}},void 0,v||(v=Object(n["a"])("div",{className:"ic-flash__icon","aria-hidden":"true"},void 0,Object(n["a"])("i",{className:"icon-info"}))),s["a"].t("The preceding content is partner provided"))))}render(){if(0===this.state.tools.length)return h||(h=Object(n["a"])("div",{}))
return Object(n["a"])("div",{},void 0,Object(n["a"])("div",{className:"border border-trbl border-round"},void 0,this.renderToolsContainer()))}}f.defaultProps={assignmentId:void 0}
const m=function(e,t,r,o){const i=Object(n["a"])(f,{placement:t,courseId:r,assignmentId:o})
l.a.render(i,e)}
const u={configTools:f,attach:m}
t["a"]=u},bZJi:function(e,t,r){"use strict"
r.d(t,"a",(function(){return z}))
var n=r("Ff2n")
var o=r("VTBJ")
var i=r("1OyB")
var a=r("vuIU")
var _=r("Ji7U")
var d=r("LK+K")
var l=r("q1tI")
var s=r.n(l)
var c=r("17x9")
var p=r.n(c)
var g=r("nAyT")
var v=r("KgFQ")
var h=r("jtGx")
var f=r("sQ3t")
var m=r("E+IV")
var u=r("UCAh")
var b=r("BTe1")
var x=r("J2CL")
var y=r("oXx0")
var w=r("jsCG")
var k=r("AdN2")
var j=function(e){var t=e.typography,r=e.spacing
return{fontFamily:t.fontFamily,fontWeight:t.fontWeightNormal,fontSize:t.fontSizeSmall,padding:r.small}}
var E,T,O,C,F,N
var A={componentId:"eZLSb",template:function(e){return"\n\n.eZLSb_bGBk{box-sizing:border-box;display:block;font-family:".concat(e.fontFamily||"inherit",";font-size:").concat(e.fontSize||"inherit",";font-weight:").concat(e.fontWeight||"inherit",";padding:").concat(e.padding||"inherit","}")},root:"eZLSb_bGBk"}
var z=(E=Object(g["a"])("8.0.0",{tip:"renderTip",variant:"color"}),T=Object(y["a"])(),O=Object(x["l"])(j,A),E(C=T(C=O(C=(N=F=function(e){Object(_["a"])(r,e)
var t=Object(d["a"])(r)
function r(){var e
Object(i["a"])(this,r)
for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a]
e=t.call.apply(t,[this].concat(o))
e._id=Object(b["a"])("Tooltip")
e.state={hasFocus:false}
e.handleFocus=function(t){e.setState({hasFocus:true})}
e.handleBlur=function(t){e.setState({hasFocus:false})}
return e}Object(a["a"])(r,[{key:"renderTrigger",value:function(){var e=this.props,t=e.children,n=e.as
var i=this.state.hasFocus
var a={"aria-describedby":this._id}
if(n){var _=Object(v["a"])(r,this.props)
var d=Object(h["a"])(this.props,r.propTypes)
return s.a.createElement(_,Object.assign({},d,a),t)}return"function"===typeof t?t({focused:i,getTriggerProps:function(e){return Object(o["a"])({},a,{},e)}}):Object(f["a"])(this.props.children,a)}},{key:"render",value:function(){var e=this
var t=this.props,r=t.renderTip,o=t.isShowingContent,i=t.defaultIsShowingContent,a=t.on,_=t.placement,d=t.mountNode,l=t.constrain,c=t.offsetX,p=t.offsetY,g=t.positionTarget,v=t.onShowContent,f=t.onHideContent,u=t.tip,b=(t.variant,Object(n["a"])(t,["renderTip","isShowingContent","defaultIsShowingContent","on","placement","mountNode","constrain","offsetX","offsetY","positionTarget","onShowContent","onHideContent","tip","variant"]))
var x=this.props.variant
x=x?"default"===x?"primary-inverse":"primary":this.props.color
return s.a.createElement(w["a"],Object.assign({},Object(h["b"])(b),{isShowingContent:o,defaultIsShowingContent:i,on:a,shouldRenderOffscreen:true,shouldReturnFocus:false,placement:_,color:"primary"===x?"primary-inverse":"primary",mountNode:d,constrain:l,shadow:"none",offsetX:c,offsetY:p,positionTarget:g,renderTrigger:function(){return e.renderTrigger()},onShowContent:v,onHideContent:f,onFocus:this.handleFocus,onBlur:this.handleBlur}),s.a.createElement("span",{id:this._id,className:A.root,role:"tooltip"},r?Object(m["a"])(r):u))}}])
r.displayName="Tooltip"
return r}(l["Component"]),F.propTypes={children:p.a.oneOfType([p.a.node,p.a.func]).isRequired,renderTip:p.a.oneOfType([p.a.node,p.a.func]),isShowingContent:p.a.bool,defaultIsShowingContent:p.a.bool,as:p.a.elementType,on:p.a.oneOfType([p.a.oneOf(["click","hover","focus"]),p.a.arrayOf(p.a.oneOf(["click","hover","focus"]))]),color:p.a.oneOf(["primary","primary-inverse"]),placement:u["a"].placement,mountNode:u["a"].mountNode,constrain:u["a"].constrain,offsetX:p.a.oneOfType([p.a.string,p.a.number]),offsetY:p.a.oneOfType([p.a.string,p.a.number]),positionTarget:p.a.oneOfType([k["a"],p.a.func]),onShowContent:p.a.func,onHideContent:p.a.func,tip:p.a.node,variant:p.a.oneOf(["default","inverse"])},F.defaultProps={renderTip:void 0,isShowingContent:void 0,defaultIsShowingContent:false,on:void 0,color:"primary",placement:"top",mountNode:null,constrain:"window",offsetX:0,offsetY:0,positionTarget:void 0,onShowContent:function(e){},onHideContent:function(e,t){t.documentClick}},N))||C)||C)||C)},dDTa:function(e,t,r){"use strict"
const n=()=>{const e=ENV.LTI_LAUNCH_FRAME_ALLOWANCES||[]
return e.join("; ")}
t["a"]=n},pSlt:function(e,t,r){"use strict"
var n=r("HGxv")
var o=r("8WeW")
Object(o["a"])(JSON.parse('{"ar":{"error_retrieving_assignment_external_tools_9102d343":"خطأ أثناء استعادة الأدوات الخارجية للمهمة","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطأ أثناء استعادة أدوات اكتشاف التشابه","external_tool_tool_id_6028b3b1":"أداة خارجية %{tool_id}","none_3b5e34d2":"بلا","plagiarism_review_7bccc7df":"مراجعة الانتحال","the_following_content_is_partner_provided_ed1da756":"المحتوى التالي تم إدخاله بواسطة شريك","the_preceding_content_is_partner_provided_d753928c":"المحتوى السابق تم إدخاله بواسطة شريك"},"ca":{"error_retrieving_assignment_external_tools_9102d343":"Error en recuperar les eines externes de la tasca","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error en recuperar les eines de detecció de similitud","external_tool_tool_id_6028b3b1":"Eina externa %{tool_id}","none_3b5e34d2":"Cap","plagiarism_review_7bccc7df":"Revisió de plagi","the_following_content_is_partner_provided_ed1da756":"El contingut següent està proporcionat per proveïdors","the_preceding_content_is_partner_provided_d753928c":"El contingut anterior està proporcionat per proveïdors"},"cy":{"error_retrieving_assignment_external_tools_9102d343":"Gwall wrth adfer adnoddau allanol aseiniad","error_retrieving_similarity_detection_tools_d6d4f9e9":"Gwall wrth adfer adnoddau adnabod tebygrwydd","external_tool_tool_id_6028b3b1":"Adnodd Allanol %{tool_id}","none_3b5e34d2":"Dim","plagiarism_review_7bccc7df":"Adolygiad Llên Ladrata","the_following_content_is_partner_provided_ed1da756":"Mae’r cynnwys canlynol yn cael ei ddarparu gan bartner","the_preceding_content_is_partner_provided_d753928c":"Mae’r cynnwys blaenorol yn cael ei ddarparu gan bartner"},"da":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","none_3b5e34d2":"Ingen","plagiarism_review_7bccc7df":"Plagieringsgennemgang","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"da-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Fejl ved hentning af opgavens eksterne værktøjer","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fejl ved hentning af ligheds-detektionsværktøjer","external_tool_tool_id_6028b3b1":"Eksternt værktøj %{tool_id}","none_3b5e34d2":"Ingen","plagiarism_review_7bccc7df":"Plagieringsgennemgang","the_following_content_is_partner_provided_ed1da756":"Følgende indhold er partnerleveret","the_preceding_content_is_partner_provided_d753928c":"Foregående indhold er partnerleveret"},"de":{"error_retrieving_assignment_external_tools_9102d343":"Fehler beim Abrufen aufgabenexterner-Tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fehler beim Abrufen der Similarity-Detection-Tools","external_tool_tool_id_6028b3b1":"Externes Tool %{tool_id}","none_3b5e34d2":"Keine","plagiarism_review_7bccc7df":"Plagiatsprüfung","the_following_content_is_partner_provided_ed1da756":"Der folgende Content stammt von einem Partner.","the_preceding_content_is_partner_provided_d753928c":"Der vorhergehende Content stammt von einem Partner."},"el":{"none_3b5e34d2":"Κανένα"},"en-AU":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","none_3b5e34d2":"None","plagiarism_review_7bccc7df":"Plagiarism Review","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-AU-x-unimelb":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","none_3b5e34d2":"None","plagiarism_review_7bccc7df":"Plagiarism Review","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-CA":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External Tool %{tool_id}","none_3b5e34d2":"None","plagiarism_review_7bccc7df":"Plagiarism Review","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","none_3b5e34d2":"None","plagiarism_review_7bccc7df":"Plagiarism Review","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-lbs":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving task external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","none_3b5e34d2":"None","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"en-GB-x-ukhe":{"error_retrieving_assignment_external_tools_9102d343":"Error retrieving assignment external tools","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error retrieving similarity detection tools","external_tool_tool_id_6028b3b1":"External tool %{tool_id}","none_3b5e34d2":"None","plagiarism_review_7bccc7df":"Plagiarism Review","the_following_content_is_partner_provided_ed1da756":"The following content is partner provided","the_preceding_content_is_partner_provided_d753928c":"The preceding content is partner provided"},"es":{"error_retrieving_assignment_external_tools_9102d343":"Error al recuperar las herramientas externas de la tarea","error_retrieving_similarity_detection_tools_d6d4f9e9":"Error al consultar las herramientas de detección de similitud","external_tool_tool_id_6028b3b1":"Herramienta Externa %{tool_id}","none_3b5e34d2":"Ninguno","plagiarism_review_7bccc7df":"Revisión de plagio","the_following_content_is_partner_provided_ed1da756":"El siguiente contenido está proporcionado por un socio","the_preceding_content_is_partner_provided_d753928c":"El contenido anterior está proporcionado por un socio"},"fa":{"error_retrieving_assignment_external_tools_9102d343":"خطا در بازیابی ابزارهای بیرونی تکلیف","error_retrieving_similarity_detection_tools_d6d4f9e9":"خطا در بازیابی ابزارهای تشخیص شباهت","external_tool_tool_id_6028b3b1":"ابزار بیرونی %{tool_id}","none_3b5e34d2":"هیچ کدام","the_following_content_is_partner_provided_ed1da756":"محتوای زیر توسط شریک فراهم شده است","the_preceding_content_is_partner_provided_d753928c":"محتوای پیشین توسط شریک ارائه شده است"},"fi":{"error_retrieving_assignment_external_tools_9102d343":"Virhe noudettaessa tehtävän ulkoisia työkaluja","error_retrieving_similarity_detection_tools_d6d4f9e9":"Virhe noudettaessa samanlaisuuden havaitsemistyökaluja","external_tool_tool_id_6028b3b1":"Ulkoinen työkalu %{tool_id}","none_3b5e34d2":"Ei mitään","plagiarism_review_7bccc7df":"Plagioinnin tarkastelu","the_following_content_is_partner_provided_ed1da756":"Seuraava sisältö on kumppanin toimittamaa","the_preceding_content_is_partner_provided_d753928c":"Edeltävä sisältö on kumppanin toimittamaa"},"fr":{"error_retrieving_assignment_external_tools_9102d343":"Outils externes de récupération d\'erreur des travaux","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similitude.","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","none_3b5e34d2":"Aucun","plagiarism_review_7bccc7df":"Revue du plagiat","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par un partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu qui précède était fourni par un partenaire"},"fr-CA":{"error_retrieving_assignment_external_tools_9102d343":"Erreur lors de la récupération des outils externes des tâches","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erreur lors de la récupération des outils de détection de similarité","external_tool_tool_id_6028b3b1":"Outil externe %{tool_id}","none_3b5e34d2":"Aucun","plagiarism_review_7bccc7df":"Revue du plagiat","the_following_content_is_partner_provided_ed1da756":"Le contenu suivant est fourni par le partenaire","the_preceding_content_is_partner_provided_d753928c":"Le contenu précédent est fourni par le partenaire"},"he":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"תקלה בהעלאת כלי זיהוי העתקות","none_3b5e34d2":"אף אחד"},"ht":{"error_retrieving_assignment_external_tools_9102d343":"Erè pandan rekiperasyon zouti ekstèn sesyon an","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erè pandan rekiperasyon zouti deteksyon resanblans yo","external_tool_tool_id_6028b3b1":"Zouti Ekstèn %{tool_id}","none_3b5e34d2":"Okenn","plagiarism_review_7bccc7df":"Revizyon Plajya","the_following_content_is_partner_provided_ed1da756":"Kontni annapre a se yon asosye ki bay li","the_preceding_content_is_partner_provided_d753928c":"Kontni anvan an se yon asosye ki bay li"},"hu":{"none_3b5e34d2":"Nincs","the_following_content_is_partner_provided_ed1da756":"A következő tartalmat partner biztosítja","the_preceding_content_is_partner_provided_d753928c":"Az előző tartalmat partner biztosítja"},"is":{"error_retrieving_assignment_external_tools_9102d343":"Villa við að ná í ytri tól verkefnis","error_retrieving_similarity_detection_tools_d6d4f9e9":"Villa við endurheimt líkindagreiningartóla","external_tool_tool_id_6028b3b1":"Ytra tól %{tool_id}","none_3b5e34d2":"Ekkert","plagiarism_review_7bccc7df":"Skoðun á ritstuld","the_following_content_is_partner_provided_ed1da756":"Eftirfarandi efni er gefið upp af samstarfsaðila","the_preceding_content_is_partner_provided_d753928c":"Framangreint efni er gefið upp af samstarfsaðila"},"it":{"error_retrieving_assignment_external_tools_9102d343":"Errore recupero strumenti esterni compito","error_retrieving_similarity_detection_tools_d6d4f9e9":"Errore durante il recupero degli strumenti di rilevamento similarità","external_tool_tool_id_6028b3b1":"Strumento esterno %{tool_id}","none_3b5e34d2":"Nessuno","plagiarism_review_7bccc7df":"Revisione plagio","the_following_content_is_partner_provided_ed1da756":"I contenuti seguenti sono forniti dal partner","the_preceding_content_is_partner_provided_d753928c":"I contenuti precedenti sono forniti dal partner"},"ja":{"error_retrieving_assignment_external_tools_9102d343":"課題外部ツールの取得中にエラーが発生しました","error_retrieving_similarity_detection_tools_d6d4f9e9":"類似性検知ツールの取得中にエラーが発生しました","external_tool_tool_id_6028b3b1":"外部ツール%{tool_id}","none_3b5e34d2":"なし","plagiarism_review_7bccc7df":"Plagiarism レビュー","the_following_content_is_partner_provided_ed1da756":"以下のコンテンツはパートナーが提供しています","the_preceding_content_is_partner_provided_d753928c":"上記のコンテンツはパートナーが提供しています"},"mi":{"error_retrieving_assignment_external_tools_9102d343":"Hapa ki te tiki i ngā whakataunga taputapu o waho","error_retrieving_similarity_detection_tools_d6d4f9e9":"I hapa i te wā e tiki ana taputapu rapunga ritenga.","external_tool_tool_id_6028b3b1":"Taputapu o waho %{tool_id}","none_3b5e34d2":"Kaore","plagiarism_review_7bccc7df":"Whanaketanga Aropā","the_following_content_is_partner_provided_ed1da756":"Ko ngā kōrero e whai ake nei he hoa mahi","the_preceding_content_is_partner_provided_d753928c":"Ko te tuhinga o mua he hoa mahi"},"nb":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","none_3b5e34d2":"Ingen","plagiarism_review_7bccc7df":"Gjennomgang av plagiering","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nb-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Avvik ved henting av oppgavens eksterne verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Feil ved henting av verktøy for likhetsgjenkjenning","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","none_3b5e34d2":"Ingen","plagiarism_review_7bccc7df":"Gjennomgang av plagiering","the_following_content_is_partner_provided_ed1da756":"Følgende innhold er gitt av en partner","the_preceding_content_is_partner_provided_d753928c":"Det foregående innholdet er gitt av en partner"},"nl":{"error_retrieving_assignment_external_tools_9102d343":"Fout bij het ophalen van externe tools voor opdrachten","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fout bij het ophalen van tools voor vergelijkbaarheidsdetectie","external_tool_tool_id_6028b3b1":"Externe tool %{tool_id}","none_3b5e34d2":"Geen","plagiarism_review_7bccc7df":"Plagiaat beoordeling","the_following_content_is_partner_provided_ed1da756":"De volgende inhoud is door een partner geleverd","the_preceding_content_is_partner_provided_d753928c":"De voorgaande inhoud is door een partner geleverd"},"nn":{"error_retrieving_assignment_external_tools_9102d343":"Det oppstod ein feil under henting av oppgåve frå eksternt verktøy","error_retrieving_similarity_detection_tools_d6d4f9e9":"Det oppstod ein feil ved framhenting av verktøy for likskapskontroll","external_tool_tool_id_6028b3b1":"Eksternt verktøy %{tool_id}","none_3b5e34d2":"Ingen","plagiarism_review_7bccc7df":"Plagiatkontrollgjennomgang","the_following_content_is_partner_provided_ed1da756":"Følgande innhald er lagt til av partnar","the_preceding_content_is_partner_provided_d753928c":"Det føregåande innhaldet er lagt til av partnar"},"pl":{"error_retrieving_assignment_external_tools_9102d343":"Błąd pobierania zewnętrznych narzędzi do zadań","error_retrieving_similarity_detection_tools_d6d4f9e9":"Błąd pobierania narzędzi do wykrywania podobieństw","external_tool_tool_id_6028b3b1":"Narzędzie zewnętrzne %{tool_id}","none_3b5e34d2":"Brak","plagiarism_review_7bccc7df":"Kontrola plagiatów","the_following_content_is_partner_provided_ed1da756":"Następującą zawartość dostarcza partner","the_preceding_content_is_partner_provided_d753928c":"Poprzednią zawartość dostarcza partner"},"pt":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas de atribuição","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta Externa %{tool_id}","none_3b5e34d2":"Nenhum","plagiarism_review_7bccc7df":"Revisão de Plágio","the_following_content_is_partner_provided_ed1da756":"O parceiro fornece o seguinte conteúdo","the_preceding_content_is_partner_provided_d753928c":"O conteúdo anterior é parceiro fornecido"},"pt-BR":{"error_retrieving_assignment_external_tools_9102d343":"Erro ao recuperar ferramentas externas da tarefa","error_retrieving_similarity_detection_tools_d6d4f9e9":"Erro ao recuperar as ferramentas de detecção de similaridade","external_tool_tool_id_6028b3b1":"Ferramenta externa %{tool_id}","none_3b5e34d2":"Nenhum","plagiarism_review_7bccc7df":"Revisão de plágio","the_following_content_is_partner_provided_ed1da756":"O seguinte conteúdo é fornecido por parceiro","the_preceding_content_is_partner_provided_d753928c":"O conteúdo precedente é fornecido por parceiro"},"ru":{"error_retrieving_assignment_external_tools_9102d343":"Ошибка при получении внешних инструментов задания","error_retrieving_similarity_detection_tools_d6d4f9e9":"Ошибка при считывании инструментов обнаружения сходства","external_tool_tool_id_6028b3b1":"Внешний инструмент %{tool_id}","none_3b5e34d2":"Нет","plagiarism_review_7bccc7df":"Проверка на наличие плагиата","the_following_content_is_partner_provided_ed1da756":"Последующий контент предоставляется партнером","the_preceding_content_is_partner_provided_d753928c":"Предыдущий контент предоставляется партнером"},"sl":{"error_retrieving_assignment_external_tools_9102d343":"Napaka pri pridobivanju zunanjih orodij za nalogo","error_retrieving_similarity_detection_tools_d6d4f9e9":"Napaka pri pridobivanju orodij za zaznavanje ujemanja","external_tool_tool_id_6028b3b1":"Zunanje orodje %{tool_id}","none_3b5e34d2":"Brez","the_following_content_is_partner_provided_ed1da756":"Naslednjo vsebino zagotavljajo partnerji.","the_preceding_content_is_partner_provided_d753928c":"Predhodno vsebino zagotavljajo partnerji."},"sv":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av verktyg för likhetsidentifiering","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","none_3b5e34d2":"Inga","plagiarism_review_7bccc7df":"Plagieringsgranskning","the_following_content_is_partner_provided_ed1da756":"Följande innehåll har tillhandahållits av partner","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet har tillhandahållits av partner"},"sv-x-k12":{"error_retrieving_assignment_external_tools_9102d343":"Det gick inte att hämta externa verktyg för uppgiften","error_retrieving_similarity_detection_tools_d6d4f9e9":"Fel vid hämtning av verktyg för likhetsidentifiering","external_tool_tool_id_6028b3b1":"Externt verktyg %{tool_id}","none_3b5e34d2":"Inga","plagiarism_review_7bccc7df":"Plagieringsgranskning","the_following_content_is_partner_provided_ed1da756":"Följande innehåll har tillhandahållits av partner","the_preceding_content_is_partner_provided_d753928c":"Det föregående innehållet har tillhandahållits av partner"},"uk":{"error_retrieving_similarity_detection_tools_d6d4f9e9":"Помилка отримання параметрів виявлення схожості","none_3b5e34d2":"Жодного","the_following_content_is_partner_provided_ed1da756":"Наступний контент наданий партнером","the_preceding_content_is_partner_provided_d753928c":"Попередній контент наданий партнером"},"zh-Hans":{"error_retrieving_assignment_external_tools_9102d343":"提取作业外部工具时出错","error_retrieving_similarity_detection_tools_d6d4f9e9":"检索相似性检测工具时发生错误","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","none_3b5e34d2":"无","plagiarism_review_7bccc7df":"剽窃审查","the_following_content_is_partner_provided_ed1da756":"以下内容由合作伙伴提供","the_preceding_content_is_partner_provided_d753928c":"以上内容由合作伙伴提供"},"zh-Hant":{"error_retrieving_assignment_external_tools_9102d343":"檢索作業外部工具時出錯","error_retrieving_similarity_detection_tools_d6d4f9e9":"檢索相似性檢測工具錯誤","external_tool_tool_id_6028b3b1":"外部工具%{tool_id}","none_3b5e34d2":"無","plagiarism_review_7bccc7df":"抄襲評審","the_following_content_is_partner_provided_ed1da756":"以下內容由合作夥伴提供","the_preceding_content_is_partner_provided_d753928c":"上述內容由合作夥伴提供"}}'))
r("jQeR")
r("0sPK")
t["a"]=n["default"].scoped("moderated_grading")}}])

//# sourceMappingURL=67-c-a27e0ad188.js.map