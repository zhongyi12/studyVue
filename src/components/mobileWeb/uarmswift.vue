<template>

<div class="page-wrapper" id="readout">
	<section class="banner banner1" id="banner1">
		<div id="submenu">
			<!--<div class="subtitle" v-on:click="scrollTop()">uArm Swift Pro</div>-->
			<div class="menu-right">
			  <span>uArm Swift</span>
			  <span class="el-icon-arrow-up" v-if="showDetail" @click="showDetail = false"></span>
        <span class="el-icon-arrow-down" v-else @click="showDetail = true"></span>
			  <span class="btn ghost-button" @click="buyNow()">{{langData.submenu.buyText}}
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
        </span>
			</div>
      <ul v-if="showDetail">
        <li ><a :href="langData.banner9.pdflink" target="_blank">{{langData.submenu.detail}}</a></li>
        <li><router-link :to="{name:'video',params:{lang:country}}">{{langData.submenu.teachVideo}}</router-link></li>
        <li><router-link :to="{name:'download',params:{lang:country}}">{{langData.submenu.download}}</router-link></li>
        <li><router-link :to="{name:'question',params:{lang:country,module:'technology'}}">{{langData.submenu.question}}</router-link></li>
      </ul>
		</div>
		<!-- <div class="video-play" @click="showVideo()">
			<img src="/src/img/swift/Button_play.svg" alt="playbutton">
			<span v-html="langData.banner1.text"></span>
		</div> -->
		<img src="../assets/img/mobile-web/swift/mobile_pro_banner1.jpg">
		<div class="text text-anima banner1-text">
			<div class="title1" v-html="langData.banner1.title"></div>
			<div class="content slide-in" v-html="langData.banner1.content"></div>
		</div>
    <button  @click="showVideo()" class="watch-video">{{ langData.banner1.watchVideo }}</button>
	</section>
  <section class="banner10 ">
    <div class="text text-anima">
      <div class="title">{{langData.banner10.title}}</div>
      <div class="content slide-in" v-html="langData.banner10.content"></div>
      <div class="content1 slide-in" v-html="langData.banner10.content1"></div>
    </div>
    <img src="../assets/img/mobile-web/swift/mobile_pro_banner10.jpg">
  </section>
	<section class="banner2">
		<div class="text text-anima">
			<div class="title">{{langData.banner2.title}}</div>
			<div class="content slide-in" v-html="langData.banner2.content"></div>
			<div class="content1 slide-in" v-html="langData.banner2.content1"></div>
		</div>
		<img src="../assets/img/mobile-web/swift/mobile_pro_banner2.jpg">
	</section>
	<section class="banner3">
		<div class="text text-anima">
			<div class="title">{{langData.banner3.title}}</div>
			<div class="content slide-in" v-html="langData.banner3.content"></div>
		</div>
		<img v-if="country == 'cn'" src="../assets/img/mobile-web/swift/mobile_pro_banner3.jpg">
    <img v-else src="../assets/img/mobile-web/swift/mobile_pro_banner3.jpg">
	</section>
	<section class="banner4">
    <img src="../assets/img/mobile-web/swift/mobile_pro_banner4.jpg">
		<div class="text-anima">
			<div class="title" v-html="langData.banner4.title"></div>
			<div class="title1" v-html="langData.banner4.title1"></div>
			<div class="content slide-in" v-html="langData.banner4.content"></div>
		</div>
	</section>
	<section class="banner5" >
		<img src="../assets/img/mobile-web/swift/mobile_pro_banner5.jpg">
		<div class="text text-anima">
			<div class="title">{{langData.banner5.title}}</div>
			<div class="content slide-in" v-html="langData.banner5.content"></div>
		</div>
	</section>
	<section>
    <img src="../assets/img/mobile-web/swift/mobile_grove.jpg"/>
  </section>
	<section class="banner banner6" id="banner6">
		<div class="banner6-title-wrapper">
			<div class="subtitle"><img src="../assets/img/swift/uarm_studio.png"/></div>
			<div class="title">{{langData.banner6.title}}</div>
			<img class="banner6-logo" src="../assets/img/swift/banner6_logo.png" />
		</div>
		<el-carousel :autoplay="false" arrow="never" ref="carouselSwift" id="carouselSwift">
	    <el-carousel-item v-for="(value,index) in langData.banner6.sliders" :key="index">
				<img v-bind:src="value.image">
		    <div class="carousel-caption" v-html="value.content"></div>
	    </el-carousel-item>
	  </el-carousel>
	</section>
	<section class="banner7">
    <div class="text">
      <div class="text-logo">
        <div class="title"><img v-bind:src="langData.banner7.titleimg" alt="uslogo"></div>
        <div class="slogantext">
          <p><img src="../assets/img/swift/uarm_play_name.png"/></p>
          <p v-if="$route.params.lang=='cn'"><img class="mobile-cn" src="../assets/img/swift/mobile_cn.png"/></p>
          <p v-else class="font-black title">{{langData.banner7.content}}</p>
        </div>
      </div>
      <div class="content">
        <div class="left-intro">
          <div class="text-intro">
            <div class="intro-item" v-for="item in langData.banner7.introItem">
              <img :src="item.icon" alt=""><div v-html="item.text"></div>
            </div>
          </div>
        </div>
      </div>
      <img src="../assets/img/swift/banner7.png" />
    </div>
	</section>
	<section class="banner8">
		<div class="text">
			<div class="title">{{langData.banner8.title}}</div>
			<div class="subtitle">{{langData.banner8.subtitle}}</div>
			<div class="content" v-html="langData.banner8.content"></div>
		</div>
		<!--<div class="image-wrapper">-->
			<!--<img v-for="(value,index) in langData.banner8.brandlogos" v-bind:src="value">-->
		<!--</div>-->
		<img src="../assets/img/mobile-web/swift/mobile_pro_banner8.jpg" />
	</section>
	<section class="banner9" id="banner9">
		<div class="title">{{langData.banner9.title}}</div>
		<div class="content">
			<table class="spec-table">
        <!--<tr>-->
          <!--<th v-for="item in langData.banner9.spec" v-html="item"></th>-->
        <!--</tr>-->
        <tr>
          <th v-for="item in langData.banner9.mobileSpecItem">
            <img v-if="item.image !== ''" :src="item.image">
            <div class="product-name" >
              <span v-html="item.name"></span>
              <span class="color-text" v-html="item.pro"></span>
            </div>
          </th>
        </tr>
        <tr v-for="item in langData.banner9.mobileTr">
          <td v-for="value in item" v-html="value"></td>
        </tr>
			</table>

		</div>
		<div style="width: 100%;	text-align: center;" @click="buyNow()"><a class="btn ghost-button" style="width: 100px;	text-align: center;">{{langData.submenu.buyText}}</a></div>
	</section>
	<el-dialog
	  title=""
	  :visible.sync="showModal"
	  size="large">
		<div class="video-wrap" v-if="showModal">
			<!--<embed v-if="country=='cn'" v-bind:src="langData.videoLink" allow-full-screen="true" quality="high" width="480" height="400" align="middle" allow-script-access="always" type="application/x-shockwave-flash"></embed>-->
			<video controls="controls" v-if="country=='cn'">
        <source :src="langData.videoLink" type="video/mp4">
        Your browser does not support HTML5 video. 你的浏览器不支持HTML5视频播放。
      </video>

			<iframe v-else width="560" height="315" v-bind:src="langData.videoLink" frameborder="0" allowfullscreen></iframe>
		</div>
	  <span slot="footer" class="dialog-footer"></span>
	</el-dialog>
</div>

</template>
<script>
import setting from '../../config';
import eventBus from './module/eventBus';
const bannerPath = '../assets/img/swift/'; //local path is: /src/img/swift/ http://cdn.ufactory.cc/img/banner/
import langText from '../../lang/uArmSwift';
import mainModel from '../../mainModel/model';
export default {
	data : function(){
		return {
			country:'cn',
			langData:{},
			showModal:false,
			bannerbackground:require("../assets/img/swift/background.png"),
			banner8bgd:require("../assets/img/swift/background8.png"),
			slidermove:false,
			showDetail:false,
		}
	},
	created : function(){

			window.scrollTo(0, 0);
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
		// console.log("language:"+this.country)
		if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
				this.langData=langText[this.$route.params.lang];
			else
				this.langData=langText['cn'];
//    console.log('langTextswift1', langText);
	},
  mounted : function(){
		window.scrollTo(0, 0);
		window.addEventListener("scroll", this.fixSubMenu, false);
    this.vueTouch();
	      // define variables
//	      let items = document.querySelectorAll(".text-anima");
//	      let sliderdiv = document.getElementById("banner6");
//
//	      // check if an element is in viewport
//	      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
//	      function isElementInViewport(el) {
//	        var rect = el.getBoundingClientRect();
//	        return (
//	          rect.top >= 0 &&
//	          rect.left >= 0 &&
//	          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//	          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//	        );
//	      }
//
//	      function callbackFunc() {
//	        for (var i = 0; i < items.length; i++) {
//	          if (isElementInViewport(items[i])) {
//	            items[i].classList.add("in-view");
//	          }
//	        }
//	      }
//		  function sliderShowCallback(){
//			  if(isElementInViewport(sliderdiv))
//			  	self.slidermove= true;
//		  }
//	      // listen for events
//	      window.addEventListener("load", callbackFunc);
//	      window.addEventListener("resize", callbackFunc);
//	      window.addEventListener("scroll", callbackFunc);
//	      window.addEventListener("scroll", sliderShowCallback);

  	},

  	methods:{
			getDistance() {
      var banner1 = document.getElementById("banner1");
			if(banner1 === undefined || banner1 === null || banner1 === ''){
				return false;
			}else{
				return banner1.clientHeight;
			}
		},
		fixSubMenu(){
      var h = document.getElementById("submenu");
			if(h === undefined || h === null || h === ''){
				return false;
			}else{
				var distance = window.pageYOffset - this.getDistance();
				if (distance > 0) {
					eventBus.$emit('productPageScroll', true);
					h.style.position = 'fixed';
					h.style.top = '0px';
				} else {
					eventBus.$emit('productPageScroll', false);
					h.style.position = 'fixed';
					h.style.top = '50px';
				}
			}
		},
  		scrollBottom: function(){
				var target = document.getElementById("banner9");
			  window.scrollTo(0,target.offsetTop);
      },
      scrollTop:function(){
          window.scrollTo(0,0);
      },
      showVideo:function(){
        this.showModal=true;
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
      },
      vueTouch() {
        const carousel = document.getElementById('carouselSwift');
        const _this = this;
        let startPageX = {star: 0, end: 0};
        carousel.addEventListener('touchstart', function(ev){
          startPageX.start = ev.changedTouches[0].pageX;
        });
        carousel.addEventListener('touchend', function(ev){
          startPageX.end = ev.changedTouches[0].pageX;
          if(startPageX.start - startPageX.end > 20) {
            _this.$refs.carouselSwift.next();
          }else if(startPageX.start - startPageX.end < -20){
            _this.$refs.carouselSwift.prev();
          }else {
            return;
          }
        });
      }
  	},
		destroyed() {
			this.getDistance;
      eventBus.$emit('productPageScroll', false);
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
$vm_base: 414;
@function vw($px) {
  @return ($px / $vm_base) * 100vw;
}
$textColor : #3C3C3C;
$themeOrange: #E27347;
.page-wrapper {
  padding-top: 50px;
}
.ghost-button{
	display: inline-block;
	color: white;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: $themeOrange;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
}
.ghost-button:hover,.ghost-button:active{
	background-color: white;
	color: $themeOrange;
	border: 1px solid $themeOrange;
}

#submenu{
	position: fixed;
	top: 50px;
	width: 100%;
  z-index: 9;
	background: rgba(25,25,25,0.8);
	line-height: 55px;
	color: white;
	.subtitle{
		display: inline-block;
		cursor: pointer;
	}
	.menu-right{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 4vw;
	}
  ul{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
    li{
      cursor: pointer;
      margin: 0 4vw;
      a{
        color: white;
    }
  }
}
.page-wrapper{
	section{
		position: relative;
		background-size: 100% 100%;
		overflow: hidden;
		img{
			width: 100%;
		}
    .title{
      font-size: 5.4vw;
      font-family: 'uf-bold';
      color: $textColor;
      text-transform: uppercase;
      /*font-weight: 600;*/
     letter-spacing: -1px;
    }
		.text{
			visibility: visible;
			position: absolute;
      text-align: center;
      color: $textColor;
      padding: 0 5vw;
      .content{
        font-size: 4vw;
        letter-spacing: -1px;
        padding: 3vw 0;
        font-family: 'uf-book';
      }
		}
		.text.in-view{

			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: fadeAndScale 3s ease-out;
			-webkit-animation: fadeAndScale 3s ease-out;
			animation: fadeAndScale 3s ease-out;
		}
		.play-note.in-view{
			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: slidein 1s ease-out;
			-webkit-animation: slidein 1s ease-out;
			animation: slidein 1s ease-out;
		}
		.pause-note.in-view{
			visibility: visible;
			/* Apply animation to this element */
			-moz-animation: slidein 2s ease-out;
			-webkit-animation: slidein 2s ease-out;
			animation: slidein 2s ease-out;
		}
		/* Move it (define the animation) */
		@-moz-keyframes slidein {
			0%   { -moz-transform: translateX(-200%); }
			100% { -moz-transform: translateX(0%); }
		}
		@-webkit-keyframes slidein {
			0%   { -webkit-transform: translateX(-200%); }
			100% { -webkit-transform: translateX(0%); }
		}
		@keyframes slidein {
			0%   {
			-moz-transform: translateX(-200%); /* Firefox bug fix */
			-webkit-transform: translateX(-200%); /* Firefox bug fix */
			transform: translateX(-200%);
			}
			100% {
			-moz-transform: translateX(0%); /* Firefox bug fix */
			-webkit-transform: translateX(0%); /* Firefox bug fix */
			transform: translateX(0%);
			}
		}
		@keyframes fadeAndScale {
		    from {
		        opacity: 0;
		        transform: scale(.9, .9);
		    }
		    to {
		        opacity: 1;
		        transform: scale(1, 1);
		    }
		}
		.video-play{
			position: absolute;
			top: 36vw;
		    font-size: 1.6vw;
		    color: white;
		    cursor: pointer;
			display: flex;
		    flex-direction: column;
		    justify-content: initial;
			width: 100%;
		    align-items: center;
		    height: 10vw;
			img{
				width: 14%;
				padding: 2%;
			}
		}
	}
	.banner1 {
		.banner1-text {
			position: absolute;
			right: 10vw;
			top: 13vw;
			text-align: left;
			color: #fff;
			.title1 {
				font-family: 'BankGothic-Regular_DB';
				font-weight: 700;
				font-size: 28px;
			}
			.content {
				font-size: 18px;
				font-weight: 600;
				padding: 1.4vw 0 3vw;
				font-family: 'uf-book';
			}
		}
    button {
      width: 160px;
      height: 50px;
      color: #fff;
      border: none;
      border-radius: 50px;
      padding-right: 40px;
      background: #444 url("../assets/img/swift/btn_play.svg") no-repeat 120px;
      position: absolute;
      bottom: 24vw;
      right: 8vw;
    }
	}
	.banner2{
		.text{
      right: 4vw;
      bottom: 17vw;
		}
    .content1 {
      padding-top: 20px;
      font-size: 12px;
      font-family: 'uf-light';
    }
	}
	.banner3{
		.text{
      bottom: 12vw;
		}
		.content {
		  padding-top: 1vw;
		}
	}
	.banner4{
		.text-anima{
			padding: 0 5vw 10vw;
      .title1 {
        font-size: 24px;
        letter-spacing: -1px;
        font-family: 'uf-book';
        color: $themeOrange;
      }
			.content{
				margin: 1vw 0;
			}
		}
	}
	.banner5{
		color:white;
		.text{
			bottom: 15vw;
		}
		.icon-intro{
			position: absolute;
			display: flex;
			align-items: center;
			font-size: 1.2vw;
			width: 20vw;
			flex-direction: column;
			.content{
				display: flex;
				    padding: 0.7vw 0;
				.item{
					width: 7vw;
				    padding: 0;
				    display: flex;
				    flex-direction: column;
				    justify-content: center;
				    align-items: center;
				    font-size: 0.7vw;
					img{
						width: 3vw;
						height: 3vw;
						cursor: pointer;
					}
					span{
						padding: 0.7vw;
					}
				}

			}
		}
		.left-intro{
			top: 22vw;
    		left: 7.6vw;
		}
		.right-intro{
			top: 27vw;
			right: 3.5vw;
		}
	}
	.banner6 {
		padding-bottom: 1vw;
		.banner6-title-wrapper{
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			.subtitle{
				width: 36vw;
				margin: auto;
				padding-top: 2vw;
			}
			.title {
			  color: $themeOrange;
			}
			.banner6-logo {
			  width: 36px;
			  margin: auto;
			}
		}
		.el-carousel__item{
			img{
			  padding-top: 50px;
			}
			.carousel-caption{
				font-size: 14px;
        color: #555;
        top: 8px;
        left: 5%;
        right: 5%;
        padding: 0;
			}
		}
	}
	.banner7 {
		.text-logo{
			text-align: center;
			position: absolute;
      top: 10vw;
      left: 20vw;
      display: flex;
      justify-content: center;
			img{
				width:4vw;
				vertical-align: middle;
			}
			.slogantext{
        margin-left: 2vw;
        img {
          width: 10vw;
        }
        .mobile-cn {
          width: 14vw;
          padding-top: .8vw;
        }
        .font-black {
          color: $themeOrange;
        }
			}
		}
		.content{
			display:flex;
			align-items: center;
    	justify-content: center;
      position: absolute;
      top: 20vw;
      left: 20vw;
			.left-intro{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
				.text-intro{
					padding-bottom: 2vw;
				}
				.intro-item {
					padding: 2vw 0;
    			height: 1.6vw;
					display: flex;
					align-items: center;
					img{
						width: 3.4vw;
						padding-right: 1vw;
					}
				}
			}
			.right-intro{
				width: 22vw;
			}
		}
	}
	.banner8 {
		.text{
      right: 4vw;
      top: 10vw;
		}
    .subtitle {
      color: #555;
    }
		.content{
		}
		.image-wrapper{
			display: flex;
			justify-content: center;
    	align-items: center;
			padding: 2vw 0 17vw;

			img{
				width: 17vw;
				padding: 3vw;
			}
			img:first-child{
			    transform: scale(.6, .6);
			}
		}
	}
	.banner9{
		padding: 7vw 0;
		.title{
			text-align: center;
			padding: 4%;
		}
		.content{
			font-size: 0.7rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      text-align: left;
			table{
				width: 100%;
				border-collapse: collapse;
				font-size: 14px;
				margin-bottom: 20px;
			}
      th {
        padding-bottom: 1vw;
      }
      td,th{
        vertical-align: middle;
        text-align: center;
        padding: 6px 0;
        width: 12%;
         img{
            width: 50%;
            padding: 0.7vw;
          }

		    }
			td + td,th + th{
			    border-left: 1px solid #979797;
			    border-top: none;
			}
			tr + tr{
				border-top: 1px solid #979797;
			}
			.color-text{
				color: $themeOrange ;
			}
		}

	}
	.banner10 {
	  .text{
      right: 4vw;
      bottom: 16vw;
      color: #000;
    }
    .content {
      font-size: 20px;
      letter-spacing: -1px;
      font-family: 'uf-book';
      margin: 1.4vw 0;
    }
    .content1 {
      font-size: 12px;
      padding-top: 20px;
      font-family: 'uf-light';
    }
  }
}
.video-wrap{
  height: 50vw;
  video {
    width: 100%;
    height: 100%;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
}



</style>
