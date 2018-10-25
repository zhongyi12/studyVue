<template>
	<transition mode="out-in">
<div id="app-container">
	<header  v-if="!productPageScroll">
		<!-- <div v-show="countDown.show" class="countdown">
			<a href="https://igg.me/at/uarmswift">{{langData.promoText.countDown}}<i class="fa fa-arrow-right" aria-hidden="true"></i> {{langData.promoText.leftcn}} {{countDown.day}} {{langData.promoText.day}} {{countDown.hour}} {{langData.promoText.hour}} {{countDown.minute}} {{langData.promoText.minute}} {{countDown.second}} {{langData.promoText.second}} {{langData.promoText.leften}}
			</a>
		</div> -->
		<div class="main">
			<div class="main_menu">
				<div class="logo">
					<router-link :to="{name:'app',params:{lang:country}}">
						<img src="../assets/img/uf-logo.png" />
					</router-link>
				</div>
				<div class="nav-wrapper">
          <el-menu :default-active="menuActive" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
            <el-submenu index="1">
              <template slot="title">{{ langData.navProduct }}</template>
              <el-menu-item index="1-1"><router-link :to="{name:'xarm',params:{lang:country}}">xArm</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link :to="{name:'uarmswift',params:{lang:country}}">uArm Swift Pro</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="7"><router-link :to="{name:'news',params:{lang:country,newsPage: 1,}}">{{ langData.navNews}}</router-link></el-menu-item>
            <!-- <el-submenu index="1">
                      <template slot="title">{{langData.navProduct}}</template>
                      <el-menu-item index="1-1" :route="{name:'uarmswift',params:{lang:country}}">uArm Swift</el-menu-item>
                      <el-menu-item index="1-2" :route="{name:'uarm1',params:{lang:country}}">uArm Metal</el-menu-item>
                    </el-submenu> -->
            <!--<el-menu-item index="3">-->
              <!--<a :href="langData.storeLink" target="_blank">{{langData.navStore}}</a>-->
            <!--</el-menu-item>-->
            <el-submenu index="4">
              <template slot="title">{{langData.navCommunity}}</template>
              <el-menu-item index="4-1">
                <router-link :to="{name: 'developer', params:{lang:country}}">{{langData.navDeveloper}}</router-link>
              </el-menu-item>
              <el-menu-item index="4-3">
                <a href="https://github.com/uArm-Developer" target="_blank">{{langData.navDevelop}}</a>
              </el-menu-item>
              <el-menu-item index="4-2">
                <a href="https://forum.ufactory.cc/" target="_blank">{{langData.navForum}}</a>
              </el-menu-item>
              <el-menu-item index="4-1">
                <a v-if="country==='en'" href="https://www.facebook.com/groups/1653721141585397/" target="_blank">{{langData.navBlog}}</a>
                <a v-else @click="showModal = true">{{langData.navBlog}}</a>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">{{langData.navSupport}}</template>
              <el-menu-item index="2-1">
                <router-link :to="{name:'download',params:{lang:country, product: 'products'}}">{{langData.navDownload}}</router-link>
              </el-menu-item>
              <!--<el-menu-item index="2-2" :route="{name:'document',params:{lang:country}}">-->
              <!--{{langData.nav.document}}-->
              <!--</el-menu-item>-->
              <!--<el-menu-item index="2-3" :route="{name:'question',params:{lang:country}}">-->
              <!--{{langData.navQuestion}}-->
              <!--</el-menu-item>-->
              <el-menu-item index="2-2">
                <router-link :to="{name:'question',params:{lang:country, module: 'technology'}}">{{langData.nav.navTechnology}}</router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link :to="{name:'question',params:{lang:country, module: 'purchase'}}">{{langData.nav.navPurchase}}</router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <!--<router-link :to="{name:'ticket',params:{lang:country,type: 'cooperation'}}">{{langData.nav.navCooperation}}</router-link>-->
                <a :href="langData.nav.cooperationLink" target="_blank">{{ langData.nav.navCooperation }}</a>
              </el-menu-item>
            </el-submenu>
            <!--<el-menu-item index="6" :route="{name:'about',params:{lang:country, position:'about'}}">{{ langData.navAbout}}</el-menu-item>-->
            <el-submenu index="5" v-show="!online">
              <template slot="title">
                <img class="dropbtn userIcon" src="../assets/img/profile/img_default3x.png" />
              </template>
              <el-menu-item index="5-1" @click.native="gotoLogin('2')">
                <router-link :to="{name:'userlogin',params:{lang:country, page: '2'}}">{{langData.signin}}</router-link>
              </el-menu-item>
              <el-menu-item index="5-2" @click.native="gotoLogin('3')">
                <router-link :to="{name:'userlogin',params:{lang:country, page: '3'}}">{{langData.register}}</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="5" v-show="online">
              <template slot="title">
                <div class="avatar-wrapper">
                  <span v-show="unread" class="unread"></span>
                  <img class="pic" v-if="avatar !== undefined && avatar.length>6"  v-bind:src="avatar" alt="" />
                  <img class="pic" src="../assets/img/profile/img_default3x.png" alt="" v-else/>
                </div>
              </template>
              <el-menu-item index="5-1">
                <router-link :to="{name:'profile',params:{lang:country, page: 'news'}}">{{langData.notifications}}</router-link>
              </el-menu-item>
              <el-menu-item index="5-2">
                <router-link :to="{name:'profile',params:{lang:country}}">{{langData.myAccount}}</router-link>
              </el-menu-item>
              <el-menu-item index="5-3" @click="logOut()">
                {{langData.signOut}}
              </el-menu-item>
            </el-submenu>
            <!--<el-submenu index="6"> <template slot="title"><a @click="languageChange()">{{ langData.i18nText }}</a></template></el-submenu>-->
          </el-menu>
          <div class="nav-btn-wrapper">
            <el-button class="btn-store">
              <a @click="buyNow()">{{langData.navStore}}</a>
              <!-- Facebook Pixel Code -->
              <noscript>
                <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=177555666054859&ev=PageView&noscript=1"/>
              </noscript>
              <!-- End Facebook Pixel Code -->
              <!-- Google Code for Buy Now Button Click Conversion Page -->
              <noscript>
                <div style="display:inline;">
                  <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/861800496/?label=5nPcCOXU5H8QsJD4mgM&amp;guid=ON&amp;script=0"/>
                </div>
              </noscript>
              <!--End Google Code for Buy Now Button Click Conversion Page -->
            </el-button>
            <el-button @click="languageChange()" class="btn-language"><a >{{ langData.i18nText }}</a></el-button>
          </div>
        </div>

				<!-- <ul>
					<li class="ho dropdown" id="product-min">
						<span class="dropbtn">{{langData.navProduct}}</span>
						<div class="dropdown-content">
						    <router-link :to="{name:'uarmswift',params:{lang:country}}">uArm Swift</router-link>
						    <router-link :to="{name:'uarm1',params:{lang:country}}">uArm Metal</router-link>
						 </div>
					</li>
					<li class="ho dropdown" >
						<span class="dropbtn">{{langData.navSupport}}</span>
						<div class="dropdown-content">
						    <router-link :to="{name:'download',params:{lang:country}}">{{langData.navDownload}}</router-link>
						    <router-link :to="{name:'question',params:{lang:country}}">{{langData.navQuestion}}</router-link>
						    <a href="https://github.com/uArm-Developer" target="_blank">{{langData.navDevelop}}</a>
						  </div>
					</li>
					<li class="ho">
						<a :href="langData.storeLink" target="_blank">{{langData.navStore}}</a>
					</li>
					<li class="ho dropdown">
						<a href="https://forum.ufactory.cc/" target="_blank">{{langData.navForum}}</a>
					</li>
					<li class="ho hide">
						<router-link :to="{name:'about',params:{lang:country,position:'about'}}">{{langData.navAboutUs}}</router-link>
					</li>
				</ul> -->
			</div>


      <!--<div class="right-buttons" v-show="online">-->
        <!--<li class="ho dropdown" >-->
          <!--<p class="iconuser-display">-->
						<!--<span class="dropbtn">-->
							<!--<span v-show="unread" class="unread"></span>-->
							<!--<img class="pic" v-if="avatar !== undefined && avatar.length>6"  v-bind:src="avatar" alt="" />-->
							<!--<img class="pic" src="../assets/img/profile/img_default.svg" alt="" v-else/>-->
						<!--</span>-->
          <!--</p>-->
          <!--<div class="dropdown-content">-->
            <!--<router-link :to="{name:'profile',params:{lang:country,tabname:'news'}}">{{langData.notifications}}</router-link>-->
            <!--<router-link :to="{name:'profile',params:{lang:country}}">{{langData.myAccount}}</router-link>-->
            <!--<a @click="logOut()">{{langData.signOut}}</a>-->
          <!--</div>-->
        <!--</li>-->
      <!--</div>-->
			<!--<div class="right-buttons" v-show="!online">-->
				<!--<li class="ho dropdown">-->
					<!--<p class="iconuser-display"><img class="dropbtn userIcon" src="../assets/img/profile/icon_user.svg" /></p>-->
					<!--<div class="dropdown-content">-->
							<!--<router-link :to="{name:'userlogin',params:{lang:country, page: '2'}}" @click.native="gotoLogin('2')">{{langData.signin}}</router-link>-->
							<!--<router-link :to="{name:'userlogin',params:{lang:country, page: '3'}}" @click.native="gotoLogin('3')">{{langData.register}}</router-link>-->
						<!--</div>-->
				<!--</li>-->
			<!--</div>-->


			<!-- <div class="shopping-cart hide">
				<router-link :to="{name:'cart',params:{lang:country}}" class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></router-link>
			</div> -->
		</div>
	</header>
	<div class="main-content">
		<router-view :key="$route.params.lang" :countdown="countDown.show" :newsData="newsData"></router-view>
	</div>

	 <uf-Footer :key="$route.params.lang" v-if="$route.name !== 'app'"></uf-Footer>
	<!--<footer>-->
		<!--<div class="bottom-container">-->
			<!--<div class="bottom-menu">-->
				<!--<table>-->
					<!--<tr v-bind:class="{bolder:bolderhead}">-->
						<!--<th>{{langData.navProduct}}</th>-->
						<!--<th>{{langData.navSupport}}</th>-->
						<!--<th>{{langData.navCommunity}}</th>-->
						<!--<th>{{langData.navAboutUs}}</th>-->
					<!--</tr>-->
					<!--<tr>-->
						<!--<td><router-link :to="{name:'uarmswift',params:{lang:country}}">uArm Swift</router-link></td>-->
						<!--&lt;!&ndash; <router-link :to="{name:'uarm1',params:{lang:country}}">uArm Metal</router-link> &ndash;&gt;-->
						<!--<td><router-link :to="{name:'download',params:{lang:country}}">{{langData.navDownload}}</router-link></td>-->
						<!--<td>-->
							<!--<a v-if="country==='en'" href="https://www.facebook.com/groups/1653721141585397/" target="_blank">{{langData.navBlog}}</a>-->
							<!--<a v-else @click="showModal = true">{{langData.navBlog}}</a>-->
						<!--</td>-->
						<!--<td><router-link :to="{name:'about',params:{lang:country,position:'about'}}">{{langData.navAboutUf}}</router-link></td>-->
					<!--</tr>-->
					<!--<tr>-->
						<!--<td></td>-->
						<!--<td><router-link :to="{name:'document',params:{lang:country}}">{{langData.nav.document}}</router-link></td>-->
						<!--<td><a href="https://forum.ufactory.cc/" target="_blank">{{langData.navForum}}</a></td>-->
						<!--<td><router-link :to="{name:'about',params:{lang:country,position:'recruit'}}">{{langData.navJoinUs}}</router-link></td>-->
					<!--</tr>-->
					<!--<tr>-->
						<!--<td></td>-->
						<!--<td><router-link :to="{name:'question',params:{lang:country}}">{{langData.navQuestion}}</router-link></td>-->
						<!--<td><a href="https://github.com/uArm-Developer" target="_blank">{{langData.navDevelop}}</a></td>-->
						<!--<td><router-link :to="{name:'about',params:{lang:country,position:'contact'}}">{{langData.navContactUs}}</router-link></td>-->
					<!--</tr>-->
				<!--</table>-->
			<!--</div>-->
			<!--<div class="bottom-subscribe">-->
				<!--<div class="subcribe-head" v-html="langData.subscribeFeed"></div>-->
				<!--<div class="text-center btn-wrapper">-->
					<!--<a class="btn action-button" href="http://eepurl.com/cYSm45" target="_blank" v-html="langData.btnSubscribe"></a>-->
				<!--</div>-->
			<!--</div>-->

		<!--</div>-->
		<!--<div class="social-language">-->
			<!--<div class="select-language">-->
				<!--<button class="btn btn-default" @click="languageChange()">-->

						<!--<i class="fa fa-globe" aria-hidden="true"></i>-->
						<!--<span >{{this.langData.i18nText}}</span>-->

				<!--</button>-->
			<!--</div>-->
      <!--<div class="copyright">-->
        <!--&copy;&nbsp;2017 UFACTORY All Rights Reserved&nbsp;{{langData.copyright}}-->
      <!--</div>-->
			<!--<div class="social">-->
				<!--<ul v-if="country=='cn'">-->
					<!--<li><a target="_Blank" class="uf-icon-weibo" href="http://weibo.com/u/3925641670"></a></li>-->
					<!--<li><a class="uf-icon-weixin" @click="showModal = true"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-youku" href="http://i.youku.com/i/UMzY4Njk1NTQ2OA=="></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-txviedo" href="http://v.qq.com/vplus/6c4792a45937ca8ef893016a79843b0d"></a></li>-->
				<!--</ul>-->
				<!--<ul v-if="country=='en'">-->
					<!--<li><a target="_Blank" class="uf-icon-facebook" href="https://www.facebook.com/Ufactory2013/"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-twitter" href="https://twitter.com/UFACTORY_UF"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-youtube" href="https://www.youtube.com/channel/UCyy5ekYtq35jFtPpY3O_tVA"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-ins" href="https://www.instagram.com/ufactoryofficial/"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-reddit" href="https://www.reddit.com/r/uArm"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-instructable" href="http://www.instructables.com/member/Ufactory/"></a></li>-->
					<!--<li><a target="_Blank" class="uf-icon-google" href="https://plus.google.com/u/0/116428596770785280177/posts/p/pub"></a></li>-->
				<!--</ul>-->
			<!--</div>-->
		<!--</div>-->
	<!--</footer>-->
	<!--<div class="subscribe-ad" v-show="showAd" transition="expand">-->
		<!--<div class="ad-menu">-->
			<!--<i class="fa fa-times" aria-hidden="true" @click="adCloseClick()"></i>-->
		<!--</div>-->
		<!--<div class="ad-content">-->
			<!--<div class="ad-text text-center" v-html="langData.promoPopText">-->
			<!--</div>-->
			<!--<div class="text-center">-->
				<!--<a class="btn action-button" :href="langData.promoLink" target="_blank" v-html="langData.storeBtn"></a>-->
			<!--</div>-->
		<!--</div>-->
	<!--</div>-->
	<modal v-if="showModal" @close="showModal = false" class="qr-modal">
	  <div slot="header">请扫描二维码关注公众号</div>
	  <div slot="body">
	  	<img src="../assets/img/uarm_weixin_qr.png" alt="wechat-qr-code">
	  </div>
	  <div slot="footer" class="">
	  	<button type="button" class="btn btn-default" @click="showModal = false">关闭</button>
	  </div>
	</modal>
	</div>
</transition>
</template>
<script>
// var $ = require('jquery');
// console.log($(".copyright").length);
//var Modal = require('vue-strap').modal;
//Vue.config.lang; test
const Modal = require('./modal.vue');
import eventBus from './module/eventBus';
import News from './module/newsfeed';
import setting from '../../config';
import ufFooter from './subcomponents/footer.vue';
import mainModel from '../../mainModel/model';
import langText from '../../lang/comom';
//const load = require('load-script');
export default {
	data : function(){
		return {
			online:false,
			unread:false,
			avatar: sessionStorage.avatar,
			showModal:false,
			showAd:false,
//			country:'cn',
//			nextCountry:'en',
			langData:{},
			countDown:{
				day:0,
				hour:0,
				minute:0,
				second:0,
				show:false,
			},
			userEmail:"",
			bolderhead:false,
			menuActive: '1',
      newsData: '',
      tempData: '',
      newsTime: '',
      productPageScroll: false,
		}
	},
	created : function(){
    if(this.$route.params.lang == 'en' || this.$route.params.lang == 'cn'){
      this.langData = this.getLangText(this.$route.params.lang);
    }
    else {
      this.langData=this.getLangText('cn');
    }
		let self = this;
			//console.log("language:"+this.country)
		// Check browser support
		if (typeof(Storage) !== "undefined") {
		    // Store
			if( localStorage.getItem("showSubcribeAd")===null )
				setTimeout(function(){ self.showAd=true; }, 3000);
		}
    this.fetchNewsData();    //获取新闻数据
//    window.KF5SupportBoxAPI.init();  //逸创云客服弹窗初始化弹窗
//    window.KF5SupportBoxAPI.ready(function()   //停留10秒后弹出逸创云客服弹窗
//    {
//      setTimeout("window.KF5SupportBoxAPI.open(function(){})", 20000 );
//    });
    this.kfLang();      //逸创云客服语言

	},
	mounted : function(){
		this.online = (sessionStorage.online==="true");
		this.checkRemember();
		eventBus.$on('stateChange', (state) => {
			this.online = state;
			this.avatar = sessionStorage.avatar;
			// console.log('eventBus online change', this.online) ;
		});
		eventBus.$on('wechatqr', () => {
			this.showModal = true;
		});
		eventBus.$on('msgCountChange', (count) => {
			this.unread = count>0?true : false;
			// console.log('eventBus msgCountChange', this.unread) ;
		});
    eventBus.$on('productPageScroll', (state) => {
      this.productPageScroll = state;
    });
				let userToken = sessionStorage.loginToken;
			if( userToken!==undefined && userToken!==null && userToken!=='null') {
				this.startNotifications(userToken);
			}
			// transfers sessionStorage from one tab to another
			var sessionStorage_transfer = function(event) {
			  if(!event) { event = window.event; } // ie suq
			  if(!event.newValue) return;          // do nothing if no value to work with
			  if (event.key == 'getSessionStorage') {
			    // another tab asked for the sessionStorage -> send it
			    localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage));
			    // the other tab should now have it, so we're done with it.
			    localStorage.removeItem('sessionStorage'); // <- could do short timeout as well.
			  } else if (event.key == 'sessionStorage' && !sessionStorage.length) {
			    // another tab sent data <- get it
			    var data = JSON.parse(event.newValue);
			    for (var key in data) {
			      sessionStorage.setItem(key, data[key]);
			    }
			  }
			};

			// listen for changes to localStorage
			if(window.addEventListener) {
			  window.addEventListener("storage", sessionStorage_transfer, false);
			} else {
			  window.attachEvent("onstorage", sessionStorage_transfer);
			};


			// Ask other tabs for session storage (this is ONLY to trigger event)
			if (!sessionStorage.length) {
			  localStorage.setItem('getSessionStorage', 'foobar');
			  localStorage.removeItem('getSessionStorage', 'foobar');
			};
	},
	// destroyed : function(){
	// 	clearInterval( this.handle )
	// }
	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  methods:{
    kfLang() {
//      var script = document.createElement("script");
//      script.type = "text/javascript";
//      script.onreadystatechange = function(){
//        if (script.readyState == "loaded" || script.readyState == "complete"){
//          script.onreadystatechange = null;
//          console.log("Script loaded.");
//        }
//      };
//      script.src = "\/\/assets-cdn.kf5.com\/supportbox\/main.js?' + (new Date).getDay() + '";
//      script.id="kf5-provide-supportBox";
//      script.setAttribute('kf5-domain', 'ufactory.kf5.com');
//      script.charset = 'utf-8';
//      document.getElementsByTagName("body")[0].appendChild(script);
//      console.log('script-body', document.getElementsByTagName("body")[0].appendChild(script));
//      console.log("Script loaded.", script.readyState);
			if (window.KF5SupportBoxAPI === undefined) {
				return false;
			}
      if(this.country === 'cn'){
        window.KF5SupportBoxAPI.useLang('zh_CN');
      }else{
        window.KF5SupportBoxAPI.useLang('en');
      }

//      load("\/\/assets-cdn.kf5.com\/supportbox\/main.js?' + (new Date).getDay() + '", function (err, script) {
//        if (err) {
//          // print useful message
//          console.log(err);
//        }
//        else {
//          console.log('script.src', script.src);// Prints 'foo'.js'
//          // use script
//          // note that in IE8 and below loading error wouldn't be reported
//          script.id="kf5-provide-supportBox";
//          script.setAttribute('kf5-domain', 'ufactory.kf5.com');
//          document.getElementsByTagName("head")[0].appendChild(script);
//          console.log('script--', script);
//        }
//      })
    },
		handleSelect(key, keyPath) {
			// this.menuActive = key;
			// console.log('current', this.menuActive);
//      console.log(key, keyPath);
    },
		gotoLogin(page) {
			eventBus.$emit('loginSelect', page);
		},
		logOut() {
			//this.online = false;
			//sessionStorage.online=false;	sessionStorage.loginToken = null;
			// sessionStorage.email = null;
			// sessionStorage.nickname = null;
			// sessionStorage.birthday = null;
			// sessionStorage.gender = null;
			// sessionStorage.country = null;
			// sessionStorage.city = null;
			// sessionStorage.profession = null;
			sessionStorage.removeItem('avatar');
			sessionStorage.removeItem('loginToken');
			localStorage.removeItem('loginToken');
			this.online = false;
			sessionStorage.online = this.online;
			eventBus.$emit('stateChange', false);
			this.$router.push({ name: 'userlogin' });
			document.cookie = 'usertoken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // delete the cookie
//	    console.log('logout success');
		},
		adCloseClick:function(){
			this.showAd=false;
			localStorage.setItem("showSubcribeAd", "1");
		},
		languageChange:function(){
//			let tempLang = this.country;
//			this.langData = this.getLangText(this.nextCountry);
//			this.country = this.nextCountry;
//			this.$router.push({ name:this.$route.name, params:{lang:this.nextCountry} });
////      console.log("name",this.$route.name);
//			// console.log(tempLang )
//			this.nextCountry = tempLang;
//
      /**开始kf5客服**/
      this.kfLang();
      /**结束kf5客服**/
      mainModel.changeLang();
      this.langData = this.getLangText(mainModel.setLang);
      this.$router.push({ name:this.$route.name, params:{lang:mainModel.setLang} });
		},
		getLangText :function(lang){
//			let langText = {
//				cn:{
//          navAbout:"关于",
//					navProduct:"产品",
//          navNews: "新闻",
//					navAccessory:"配件",
//					navStore:"商城",
//					nav: {
//						document: '文档指南',
//            navTechnology: '技术支持',
//            navPurchase: '购买咨询',
//            navCooperation: '合作咨询',
//            cooperationLink: `${setting.SUPPORT_URL.cn}cooperation`
//					},
//					navSupport:"支持",
//					navDownload:"下载",
////					navQuestion:"常见问题",
//					navDevelop:"Github",
//					navHelp:"售后服务",
//					navCommunity:"社区",
//					navBlog:"微信群",
//					navForum:"论坛",
//					navAboutUs:"关于我们",
//					navAboutUf:"关于UFACTORY",
//					navJoinUs:"加入我们",
//					navContactUs:"联系我们",
//					subscribeFeed:"获取我们的最新资讯",
//					promoPopText:"获取我们的最新资讯",
//					promoLink:"http://eepurl.com/cYSm45",
//					subscribeLink:"//ufactory.us10.list-manage.com/subscribe/post?u=c644188ef0ea557ffc19e17fb&amp;id=f3cbe4f2d0",
//					emailPlaceholder:"输入你的邮箱",
//					btnSubscribe:"订阅",
//					copyright:"粤ICP备16053329号",
//					storeLink: setting.STORE_URL.cn,
//					storeBtn:"订阅",
//					promoText:{
//						countDown:"uArm Swift正在Indiegogo众筹！",
//						day:"天",
//						hour:"小时",
//						minute:"分",
//						second:"秒",
//						leftcn:"剩余",
//						leften:""
//					},
//					i18nText:"English",
//					nextLang:"en",
//					signin:'登录',
//					register:'注册',
//					notifications:'通知',
//					myAccount:'我的账户',
//					signOut:'退出登录',
//				},
//				en:{
//          navAbout:"About",
//					navProduct:"Product",
//          navNews: "News",
//					navAccessory:"Accessory",
//					navStore:"Store",
//					nav: {
//						document: 'Documents',
//            navTechnology: 'Technical Support',
//            navPurchase: 'Purchase and Payment',
//            navCooperation: 'Cooperation',
//            cooperationLink: `${setting.SUPPORT_URL.en}cooperation`
//					},
//					navSupport:"Support",
//					navDownload:"Downloads",
//					navQuestion:"Questions",
//					navDevelop:"Github",
//					navHelp:"Help",
//					navCommunity:"Community",
//					navBlog:"Facebook",
//					navForum:"Forum",
//					navAboutUs:"About us",
//					navAboutUf:"About UFACTORY",
//					navJoinUs:"Join us",
//					navContactUs:"Contact us",
//					subscribeFeed:"Sign Up<br>for our Newsletter",
//					promoPopText:"Buy Now<br>for $89 or more OFF!",
//					promoLink: setting.STORE_URL.en,
//					subscribeLink:"//ufactory.us10.list-manage.com/subscribe/post?u=c644188ef0ea557ffc19e17fb&amp;id=3a0c123c99",
//					emailPlaceholder:"Your email",
//					btnSubscribe:"Sign Up",
//					copyright:"",
//					storeLink: setting.STORE_URL.en,
//					storeBtn:"Buy Now",
//					promoText:{
//						countDown:"uArm Swift is now on Indiegogo! ",
//						day:"days",
//						hour:"hours",
//						minute:"minutes",
//						second:"seconds",
//						leftcn:"",
//						leften:"left"
//					},
//					i18nText:"简体中文",
//					nextLang:'cn',
//					signin:'SIGN IN',
//					register:'REGISTER',
//					notifications:'Notifications',
//					myAccount:'My Account',
//					signOut:'Sign Out',
//				}
//			};
			return langText[lang];
		},
		startNotifications: function(token){
			const url = `${setting.hostURL}api/1.0/message/getwebsocketserver`;
			const options = {
				headers: {
					'X-LC-Session': token,
				},
			};
			this.$http.get(url, options).then((response) => {
				// console.log('ws', response.data);
				// this.log = response.data.route.server;// JSON.stringify(response.data);
				News.init_socket({
					host: response.data.route.server,
					appid: response.data.appid,
					objectid: response.data.installationId,
				});
			}, (response) => {
				// console.log('eeeeee');
//				console.log('get notifications fail, error msg:', response);
			});
		},
		getCookie(name) {
			let value = "; " + document.cookie;
			let parts = value.split("; " + name + "=");
			if (parts.length == 2)
				return parts.pop().split(";").shift();
			return null;
		},
		checkRemember() {
			let remember = this.getCookie('usertoken');
			if (remember) {
				this.getUserInfo(remember);
			}
		},
		getUserInfo(token){
      const url = `${setting.hostURL}api/1.0/getuserinfo`;
      const options = {
        headers: {
          'X-LC-Session': token,
        },
      };
      this.$http.get(url, options).then(response => {
				const returnBack = response.data === undefined ? response : response.data;
        if( returnBack.code === 0){
					sessionStorage.loginToken = token;
					sessionStorage.email = returnBack.info.email;
					sessionStorage.avatar = returnBack.info.avatar;
					sessionStorage.online = true;
					eventBus.$emit('stateChange', true);
          // console.log('user info return:', returnBack.info);
				}
				else {
//					console.log('cookies invalid');
					document.cookie = 'usertoken=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'; // delete the cookie
				}
      }, response => {
      });
    },
    fetchNewsData(){          //获取新闻数据
      const url = `${setting.hostURL}api/1.0/news/getallnews`;
      // const url = `${setting.hostURLtest}api/1.0/news/getallnews`;
      this.$http.get(url).then(response => {
        const returnBack = response.data === undefined ? response : response.data;
        if( returnBack.code === 0){
          this.tempData = returnBack.data;
          this.compareTime();
        }
      }, response => {
      });
    },
    compareTime(){                        //对获取的新闻数据时间排序
      let dateTime = new Date();
      var arr=[];
      for(var i=0;i<this.tempData.length;i++){
        if(dateTime > new Date(this.tempData[i].show_time.replace(/-/g,"/")) && this.tempData[i].language === this.$route.params.lang){
          arr.push(this.tempData[i]);
        }
      }
      this.newsData = arr.sort(function(a,b){
        return Date.parse(b.show_time) - Date.parse(a.show_time);         //时间正序
      });
    },
    buyNow() {
      /*Facebook Pixel Code*/
      !function(f,b,e,v,n,t,s){
        if(f.fbq)return;
        n=f.fbq=function(){
          n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)
        };
        if(!f._fbq)f._fbq=n;
        n.push=n;n.loaded=!0;
        n.version='2.0';
        n.queue=[];t=b.createElement(e);
        t.async=!0;
        t.src=v;
        s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)
      }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '177555666054859');
      fbq('track', 'BuyNowButtonClick');
      /* End Facebook Pixel Code*/
      /* Google Code for Buy Now Button Click Conversion Page*/
      var google_conversion_id = 861800496;
      var google_conversion_label = "5nPcCOXU5H8QsJD4mgM";
      var google_remarketing_only = false;
      if(this.country === 'cn'){
        window.open(setting.STORE_URL.cn);
      }else{
        window.open(setting.STORE_URL.en);
      }
    }
	},
	components:{
    modal:Modal,
    ufFooter,
	},
	watch:{
	  '$route'() {
	    this.fetchNewsData();
	  },
		country: function(){
			if(this.country == 'en')
				this.bolderhead = true;
			else
				this.bolderhead = false;
		},
		'$route.name'(){
			// this.menuActive.index1 = '0';
			const routeIndexMap = {
        xArm: '1-1',
        uarmswift: '1-2',
				download: '2-1',
				document: '2-2',
        question: '2-3',
        news: '7',
			};
//			console.log(this.$route.name, this.menuActive);
			if (routeIndexMap[this.$route.name] !== undefined) {
				this.menuActive = routeIndexMap[this.$route.name];
			}
			else {
				this.menuActive = '';
			}
		},
	},
  computed: {
    country() {
//      console.log('this.$route.params.lang', this.$route.params.lang, 'mainmodel.setlang', mainModel.setLang);
      return this.$route.params.lang;
    }
  },
	route:{
		canReuse: false, // force to reload data
		//activate(transition) {},//load data
		// load your data
		// data: function (transition) {
	 //      transition.next(DataObjectForCurrentRoute);
	 //  }
	}
}
</script>

<style lang="sass" scoped>
	$maxWidth: 960px;
  $themeOrange: #E27347;
	.right-buttons
		{
    display: flex;
		text-align: center;
		color: $themeOrange;
		position: relative;
		li
		{
			line-height: 60px;
		}
		.iconuser-display
			{
			width: 100px;
			position: relative;
			height: 100%;
			.userIcon{
				width: 17px;
				border-radius: 0;
				height: 100%;
			}
			img
				{
				width: 30px;
				height: 30px;
				border-radius: 50%;
			}
			.unread{
				display: inline-block;
				width: 6px;
				height: 6px;
				background-color: #D95E2E;
				border-radius: 50%;
				position: absolute;
				top: 0;
    		right: 30px;
			}
		}
		.dropdown-content{
			top: 60px;
			background: $themeOrange;
			width:110px;
			a{
				text-align: center;
				font-family:'uf-book';
				cursor:pointer;
				color:#fff;
				line-height: 42px;
			}
				a:hover{
				color:$themeOrange;
				background:#F4CCBB;
			}
		}
	}
	.shopping-cart{
		display: inline-block;
	    float: right;
	    position: relative;
	    padding: 1% 2%;
	    font-size: 16px;
	    span{
				cursor: pointer;
			}
	    span:hover{
				color:$themeOrange;
			}
	}
	.ghost-button{
		display: inline-block;
		color:$themeOrange;
		border:1px solid $themeOrange;
		text-align: center;
		outline: none;
		text-decoration: none;
		background-color: white;
		cursor: pointer;
		font-family: 'Helvetica Neue',"微软雅黑";
		transition: all 0.3s ease-out;
		-moz-transition:all 0.3s ease-out;
		-webkit-transition:all 0.3s ease-out;
		-o-transition:all 0.3s ease-out;
	}
	.ghost-button:hover,.ghost-button:active{
		background-color: $themeOrange;
		color:#fff;
	}
	.action-button{
		display: inline-block;
		border:1px solid $themeOrange;
		text-align: center;
		outline: none;
		text-decoration: none;
		background-color: $themeOrange;
		color: #fff;
		cursor: pointer;
		font-family: 'Helvetica Neue',"微软雅黑";
		transition: all 0.3s ease-out;
		-moz-transition: all 0.3s ease-out;
		-webkit-transition: all 0.3s ease-out;
		-o-transition: all 0.3s ease-out;
		width: 60%;
	}
	.action-button:hover{
		color: white;
	}
	.ad-content	.action-button{
		width: 40%;
	}
	#app-container{
	    display: flex;
	    min-height: 100%;
	    flex-direction: column;
	}
	header {
    border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
		.main{
			justify-content: space-between;
			.logo{
        display: flex;
        align-items: center;
				cursor: pointer;
				img{
					/*height: 100%;*/
					/*padding: 12px 0;*/
					/*margin-right: 20px;*/
					/*max-height: 60px;*/
					width: 120px;
				}
			}
      .main_menu .nav-wrapper {
        position: relative;
        padding-right: 182px;
        .nav-btn-wrapper {
          position: absolute;
          top: 22%;
          right: 0;
        }
      }
			.main_menu .nav-wrapper > ul{
				display: flex;
        .userIcon {
          width: 32px;
        }
			}
      .main_menu .nav-wrapper .btn-store {
        background-color: $themeOrange;
        border: 1px solid $themeOrange !important;
        outline: none;
        border: none;
        transition: all .6s;
        -webkit-transition: all .6s;
        -os-transition: all .6s;
        -moz-transition: all .6s;
        a {
          color: #fff !important;
        }
      }
      .main_menu .nav-wrapper .btn-store:hover {
        background-color: #fff;
        a {
          color: $themeOrange !important;
        }
      }
      .main_menu .nav-wrapper .btn-language {
        border: none;
      }
			.avatar-wrapper {
			  img{
			    width: 34px;
			    height: 34px;
			    border-radius: 50%;
			  }
			}
			.is-active {
        border-bottom: 1px solid #848484;
        color: black !important;
      }
		}
		/* Dropdown Button */
		.dropbtn {
		    border: none;
		    cursor: pointer;
		    text-decoration: none;
		}

		/* The container <div> - needed to position the dropdown content */
		.dropdown {
		    position: relative;
		    display: inline-block;
		    white-space: nowrap;
		}
		/* Show the dropdown menu on hover */
		.dropdown:hover .dropdown-content {
		    display: block;
		    right: 0;
		    left: 0;
		}
		/* Change the background color of the dropdown button when the dropdown content is shown
		.dropdown:hover .dropbtn {
		   border-bottom: 3px #D95E2E solid;
		} */
		/* Dropdown Content (Hidden by Default) */
		.dropdown-content {
		    display: none;
		    position: absolute;
		    background-color: white;
		    min-width: 100px;
		    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.2);
		    a {
			    color: #555;
			    display: block;
			    width: 100%;
			}
			/* Change color of dropdown links on hover */
			a:hover {background-color: #D95E2E;color:#fff;}
		}
	}
	header.nav-transparent{
		background: transparent;
	    position: absolute;
	}
	.main-content{
    height: 100%;
  }

	footer{
		background: #f2f2f2;
	}
	.bottom-container{
		padding: 2% 7%;
    background: white;
    margin-top: 2px;
		display: flex;
		.bottom-subscribe{
			width: 20%;
			display: inline-block;
			.subcribe-head{
				text-transform: none;
				text-align: center;
				padding: 0.8vw 0;
			}
			.btn{
				color: white;
			}
			.text-center.btn-wrapper{
				width: 100%;
			}
		}
		.bottom-menu{
			width: 80%;
			display: inline-block;
			table{
				width: 100%;
				th{
					padding: 0.8vw 0;
					width: 18%;
					font-weight: normal;
					text-transform: uppercase;
					color: #333;
				}
				td{
					padding: 0.5vw 0;
					font-size: 14px;
					color: #777;
					a{
						color: #777;
						cursor: pointer;
					}
				}
			}
		}

	}
	.social-language{
		margin: 2% 7%;
    display: flex;
    justify-content: space-between;
		.select-language{
			text-align: left;
			display: inline-block;
		}
		.social{
			text-align: right;
			display: inline-block;
			vertical-align: middle;
			ul{
				li{
					display: inline-block;
					cursor: pointer;
					opacity: 0.8;
				}
					li:hover{
						opacity: 1;
					}
			}

		}
	}
	.modal-body img{
		width:100%;
	}
	.modal-container {
		width:40%;text-align: center;
	}
	.modal-footer{
		text-align:center;
	}
	.subscribe-ad{
		position: fixed;
	    bottom: 0;
	    right: 0;
	    width: 30vw;
	    height: 15vw;
			width: 300px;
	    height: 140px;
			background-color: white;
	    border: 1px solid #ccc;
	    border-radius: 0;
	    z-index: 19;
	    color: $themeOrange;
		.ad-menu{
			text-align:right;
			i{
				cursor:pointer;
				padding: 3px;
				color:#555;
			}
		}
		.ad-content{
			.ad-text{
				padding-bottom:5%;
			}
		}
	}
	/* always present */
	.expand-transition {
	  transition: all .3s ease;
	  padding: 2px;
	  overflow: hidden;
	}
	/* .expand-enter defines the starting state for entering */
	/* .expand-leave defines the ending state for leaving */
	.expand-enter, .expand-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
  .footer-enter-active, .footer-leave-active {
    transition: opacity 1.2s
  }
    .footer-enter, .footer-leave-active {
      opacity: 0
  }
	.copyright{
		text-align: center;
    line-height: 35.33px;
	}
	#mc_embed_signup{
		height:14px;
	}
	@media (max-width: 700px) {
	    header{
	    	.nav-transparent{
					background: white;
				}
				li{
					width: 50%;
				}
			}
	}
	.countdown{
		background: #333;
	    line-height: 35px;
	    color: white;
		a{
			color:white;
		}
		a:hover{
			color:$themeOrange;
			text-decoration:none;
		}
	}
</style>
