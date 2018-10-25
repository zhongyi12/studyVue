<template>

<div class="page-wrapper" id="readout">
	<section class="banner">
		<div id="submenu">
			<div class="subtitle">uArm Metal</div>
			<div class="menu-right">
				<ul>
					<li v-on:click="scrollTop()">{{langData.submenu.overview}}</li>
					<li v-on:click="scrollBottom()">{{langData.submenu.detail}}</li>
					<li><router-link :to="{name:'question',params:{lang:country}}">{{langData.submenu.question}}</router-link></li>
					<li><router-link :to="{name:'download',params:{lang:country}}">{{langData.submenu.download}}</router-link></li>
					<li ><a :href="langData.submenu.storeLink" class="btn ghost-button" target="_blank">{{langData.submenu.buyText}}</a></li>
				</ul>
			</div>

		</div>
		<img v-bind:src="langData.banner1">
	</section>
	<section class="banner" @click="showVideo('banner2')">
		<img class="clickable" v-bind:src="langData.banner2.image">
	</section>
	<section class="banner">
		<div class="text">
			<div class="title">{{langData.banner3.title}}</div>
			<div class="content slide-in">{{langData.banner3.content}}</div>
		</div>
		<img src="../assets/img/banner/banner3.jpg">
	</section>
	<section class="banner">
		<img src="../assets/img/banner/banner4.png">
	</section>
	<section class="banner5">
		<img src="../assets/img/banner/banner5.jpg">
		<div class="text-block">
			<div class="title">{{langData.banner5.title}}</div>
			<div class="content slide-in">{{langData.banner5.content}}</div>
		</div>
	</section>
	<section class="banner banner6">
		<img src="../assets/img/banner/banner6.png">
		<div class="text">
			<div class="title">{{langData.banner6.title}}</div>
			<div class="content slide-in">{{langData.banner6.content}}</div>
		</div>
	</section>
	<section class="banner7">
		<div class="text">
			<div class="title">{{langData.banner7.title}}</div>
			<div class="content slide-in">{{langData.banner7.content}}</div>
		</div>
		<img src="../assets/img/banner/banner7.png">
	</section>
	<section class="banner8">
		<div class="text">
			<div class="title">{{langData.banner8.title}}</div>
			<div class="content">
				<div class="flexbox" v-for="(item,index) in langData.banner8.content">
					<a @click="showVideo(index)"><img v-bind:src="item.image"></a>
					<div class="video-title">{{item.title}}</div>
					<div class="video-author">{{item.author}}</div>
					<div class="video-intro">{{item.brief}}</div>
				</div>
			</div>
		</div>
		<img src="../assets/img/banner/banner8.png">
	</section>
	<section class="banner9" id="banner9">
		<div class="title">{{langData.banner9.title}}</div>
		<div class="content">
			<div class="flexbox">
				<table class="table">
					<tr v-for="item in langData.banner9.specItem">
						<td>{{item.name}}</td>
						<td>{{item.value}}</td>
					</tr>
				</table>
			</div>
			<div class="flexbox">
				<img src="../assets/img/banner/img_spec.png">
			</div>
		</div>
	</section>
	<!-- <button type="button" class="btn btn-success" @click="showModal = true">showave</button> -->

	</modal>
	<el-dialog
	  title=""
	  :visible.sync="showModal"
	  size="large">
		<div class="video-wrap" v-if="showModal">
			<embed v-if="country=='cn'" v-bind:src="videoLink" allow-full-screen="true" quality="high" width="480" height="400" align="middle" allow-script-access="always" type="application/x-shockwave-flash"></embed>
			<iframe v-else width="560" height="315" v-bind:src="videoLink" frameborder="0" allowfullscreen></iframe>
		</div>
	  <span slot="footer" class="dialog-footer"></span>
	</el-dialog>
</div>

</template>
<script>
const imagePath= './assets/img/'; //local path is: /src/img/banner/
// let video1Image = require(`${imagePath}product/uarm-video-1.png`);
export default {
	data : function(){
		return {
			country:'cn',
			langData:{},
			showModal:false,
			videoLink:"",
		}
	},
	created : function(){

			window.scrollTo(0, 0);
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
		// console.log("language:"+this.country)
		var langText = {
			cn:{
				submenu:{
					overview:"产品介绍",
					detail:"技术参数",
					question:"常见问题",
					download:"软件下载",
					storeLink:"https://shop346325081.taobao.com/",
					buyText:"立即购买"
				},
				banner1:require('../assets/img/home/banner2.png'),
				banner2:{
					image:require('../assets/img/banner/banner2.png'),
					link:"https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=u0303ipt1yz&auto=1"
				},
				banner3:{
					image:imagePath+"banner/banner3.jpg",
					title:"小巧轻便",
					content:"开创”桌面机械臂”这一全新领域，机械臂从此不只是工业产线上的庞然大物。小巧的体积让uArm Metal轻松成为你桌面上最酷的机器人助手。500g有效负载，自重仅900g。小身段，大用途。科技感十足的金属机身简洁耐用，诠释创客美学。"
				},
				banner4:{
					image:imagePath+"banner/banner4.png",
				},
				banner5:{
					image:imagePath+"banner/banner5.jpg",
					title:"完全开源",
					content:"uArm Metal实现了真正意义上的开源，即从底层代码，到控制软件再到硬件完全开源。基于Arduino控制平台，支持包括Python在内的多种编程语言。未来还将支持更多主流编程语言，满足用户个性化的创作需求。"
				},
				banner6:{
					image:imagePath+"banner/banner6.png",
					title:"灵活操控",
					content:"uArm Metal支持多种控制方式。可以通过鼠标，键盘或者Leap Motion等方式来进行操控。在示教模式下，只需拖动机械臂末端，uArm就会记录整个动作过程，并自行重复。无需编程也可以让uArm完成复杂的动作。"
				},
				banner7:{
					image:imagePath+"banner/banner7.png",
					title:"丰富配件",
					content:"uArm Metal配备了丰富的末端配件。除了标配吸盘，还可以选配电动夹子和通用夹具，码放、抓取、固定物品等各类场景实现起来都得心应手。蓝牙模块可进行远程控制，释放更多想象力。"
				},
				banner8:{
					image:imagePath+"banner/banner8.png",
					title:"案例",
					content:{
						1:{
							video:"https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=o03040cru5x&auto=1",
							image: require('../assets/img/metal/uarm-video-1.png'),
							title:"uArm早餐机器人",
							author:"作者：Simone Giertz",
							brief:"通过示教模式快速实现复杂动作重放"
						},
						2:{
							video:"https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=o030701cu9t&auto=1",
							image: require('../assets/img/metal/uarm-video-2.png'),
							title:"uArm下棋对战",
							author:"作者：Alex Thiel",
							brief:"通过开源代码编写的图形识别程序让uArm变身智能棋手"
						},
					}
				},
				banner9:{
					title:"技术参数",
					specItem:{
						1:{name:"体积",value:"300*270*110 mm"},
						2:{name:"材料",value:"铝合金"},
						3:{name:"自由度",value:"4"},
						4:{name:"重量",value:"900 g"},
						5:{name:"负载",value:"500 g"},
						6:{name:"活动直径",value:"16 – 30 cm "},
						7:{name:"精度",value:"5 mm"},
					},
					image:imagePath+"banner/img_spec.png"
				}
			},
			en:{
				submenu:{
					overview:"Overview",
					detail:"Specifications",
					question:"Question",
					download:"Download",
					storeLink:"http://store.ufactory.cc/",
					buyText:"Buy Now"
				},
				banner1:require('../assets/img/home/banner2en.png'),
				banner2:{
					image:require('../assets/img/banner/banner2en.jpeg'),
					link:"https://www.youtube.com/embed/VeZOi11NQRA?rel=0&amp;autoplay=1"
				},
				banner3:{
					image:imagePath+"banner/banner3.jpg",
					title:"Weigh Less, Do More",
					content:"Robot arms no longer refer only to those leviathans in factories, they can now be a cool assistant on your desk. The CNC aluminum body makes the uArm a lightweight and reliable robot. The uArm can lift 500g, weigh less than 1kg, and has four axis."
				},
				banner4:{
					image:imagePath+"banner/banner4.png",
				},
				banner5:{
					image:imagePath+"banner/banner5.jpg",
					title:"Open-Source to Make More",
					content:"uArm is open-sourced from basic code to hardware. It supports popular programming languages like Python and Arduino, and can be controlled over serial, so any language can be compatible! Developers from different background are joining the uArm developer community."
				},
				banner6:{
					image:imagePath+"banner/banner6.png",
					title:"Easy and Flexible Controlling",
					content:"The way to drive uArm is flexible. You can use keyboard, mouse or Leap Motion to control it. You can also use  “Learning Mode” to teach uArm do complicated task with your hand. Programming isn’t the only way to control the uArm."
				},
				banner7:{
					image:imagePath+"banner/banner7.png",
					title:"Accessories for Your Imagination",
					content:"Multiple choices of end effectors, including a suction cup, metallic gripper and universal holder. Any end effector to fit all your need. The bluetooth module allow you control your uArm remotely, unleashing your creativity."
				},
				banner8:{
					image:imagePath+"banner/banner8.png",
					title:"Showcase",
					content:{
						1:{
							video:"https://www.youtube.com/embed/E2evC2xTNWg?rel=0&amp;autoplay=1",
							image:require('../assets/img/metal/uarm-video-1.png'),
							title:"uArm Breakfast Machine",
							author:"uArm Breakfast Machine, by Simone Gietz",
							brief:"This project was created with learning mode, without a single line of code"
						},
						2:{
							video:"https://www.youtube.com/embed/wIeP1g6ww_g?rel=0&amp;autoplay=1",
							image:require('../assets/img/metal/uarm-video-2.png'),
							title:"uArm Checker Playing Bot",
							author:"by Alex Thiel",
							brief:"This developer used computer vision to teach uArm how to  play Checkers"
						},
					}
				},
				banner9:{
					title:"Specifications",
					specItem:{
						1:{name:"Length*width*height",value:"300*270*110 mm"},
						2:{name:"Material",value:"Aluminum Alloy"},
						3:{name:"DOF",value:"4"},
						4:{name:"Weight",value:"900 g"},
						5:{name:"Payload",value:"500 g"},
						6:{name:"Operation Range",value:"16 – 30 cm "},
						7:{name:"Accuracy",value:"5 mm"},
					},
					image:imagePath+"banner/img_spec.png"
				}
			}

		};
		if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
				this.langData=langText[this.$route.params.lang];
			else
				this.langData=langText['cn'];


	},
  mounted : function(){
		window.scrollTo(0, 0);
  		var h = document.getElementById("submenu");
		//h.style.position = 'absolute';
		var readout = document.getElementById("readout");
		var stuck = false;
		var stickPoint = getDistance();

		function getDistance() {
		var topDist = h.offsetTop;
		return topDist;
		}

		window.onscroll = function(e) {
			var distance = getDistance() - window.pageYOffset;
			var offset = window.pageYOffset;
			//readout.innerHTML = stickPoint + '   ' + distance + '   ' + offset + '   ' + stuck;
			if ( (distance <= 0) && !stuck && window.pageYOffset>1) {
				h.style.position = 'fixed';
				h.style.top = '0px';
				stuck = true;
			} else if (stuck && (offset <= stickPoint)){
				h.style.position = 'absolute';
				stuck = false;
			}
		}

  	},
  	// destroyed : function(){
  	// 	clearInterval( this.handle )
  	// }
  	//components:{accordion:require('vue-strap/src/Accordion.vue')},
  	methods:{
  		scrollBottom: function(){
				var target = document.getElementById("banner9");
			  window.scrollTo(0,target.offsetTop);
		},
		scrollTop:function(){
			  window.scrollTo(0,0);
		},
		showVideo:function(name){
			const videoList ={
				banner2:this.langData.banner2.link,
				1:this.langData.banner8.content[1].video,
				2:this.langData.banner8.content[2].video,
			}
			this.videoLink = videoList[name];
			this.showModal=true;
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
$textColor : #3C3C3C;
$themeOrange: #E27347;
.ghost-button{
	display: inline-block;
	color:white;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: $themeOrange;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
	-moz-transition:all 0.3s ease-out;
	-webkit-transition:all 0.3s ease-out;
	-o-transition:all 0.3s ease-out;
}
.ghost-button:hover,.ghost-button:active{
	background-color: white;
	color:$themeOrange;
	border:1px solid $themeOrange;
}
.detail-button{
	display: inline-block;
	color:$textColor;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	border:none;
	font-family: 'Helvetica Neue',"微软雅黑";
}
.detail-button:hover{
	background-color: white;
	color:$themeOrange;
}
.slide-in-delete{

	/* Apply animation to this element */
	-moz-animation: example2 3s ease-out;
	-webkit-animation: example2 3s ease-out;
	animation: example2 3s ease-out;
	}
	/* Move it (define the animation) */
	@-moz-keyframes example2 {
	0%   { -moz-transform: translateX(200%); }
	100% { -moz-transform: translateX(0%); }
	}
	@-webkit-keyframes example2 {
	0%   { -webkit-transform: translateX(200%); }
	100% { -webkit-transform: translateX(0%); }
	}
	@keyframes example2 {
	0%   {
	-moz-transform: translateX(200%); /* Firefox bug fix */
	-webkit-transform: translateX(200%); /* Firefox bug fix */
	transform: translateX(200%);
	}
	100% {
	-moz-transform: translateX(0%); /* Firefox bug fix */
	-webkit-transform: translateX(0%); /* Firefox bug fix */
	transform: translateX(0%);
	}
}
#submenu{
	position:absolute;
	height: 55px;
	left:0;
	display:inline-block;
	width: 100%;
  z-index: 9;
	background: white;
    opacity: 0.7;
	justify-content:space-between;
	line-height: 55px;
	.subtitle{
		padding: 0 3%;
		width:19%;display: inline-block;
	}
	.menu-right{
		width:80%;display: inline-block;
		ul{
			width:100%;
			display:flex;
			justify-content: flex-end;
		}
		li{
			padding:0 3%;
			cursor:pointer;
			display:inline-table;
		}
	}
}
.page-wrapper{
	section{
		position: relative;
		.clickable{
			cursor:pointer;
		}
		img{
			width: 100%;
		}
		.text{
			position: absolute;
		    text-align: center;
		    margin: 5% 27%;
		    color: #3c3c3c;
		    .title{
		    	font-size: 2.5vw;
		    }
		    .content{
		    	font-size: 1.1vw;
		    	margin: 3%;
		    }
		}
		.text-block{
		    text-align: center;
		    margin: 5%;
		    color: #3c3c3c;
		    .title{
		    	font-size: 2.5vw;
		    }
		    .content{
		    	font-size: 1.1vw;
		    	margin: 3%;

		    }
		}

	}
	.banner5{
		margin: 5% 20%;
		margin-bottom: 10%;
	}
	.banner6 .text{
		width: 34vw;
		top: 0;
		left: 0;
		margin-top: 3vw;
		margin-left: 9vw;
		.content{
			text-align: left;
			margin: 5%;
		}
	}
	.banner7 .text{
		margin-top: 31%;
	}
	.banner8 {
		.text{margin:0 auto;left:0;right:0;width:45%;}
		color:white;
		.title{
			color:white;
			margin: 5% 0;
		    padding: 2%;
		    border-bottom: 1px solid rgba(255,255,255,0.1);
		}
		.content{
		    display: flex;
		    flex-direction: row;
		    align-items: baseline;
		    justify-content:space-between;
		    text-align: left;
		    opacity: 0.8;
		    .flexbox{
		    	display: flex;
		    	width: 39%;
		    	flex-direction:column;
		    	a{cursor: pointer;}
		    	.video-title{
		    		font-size: 1.2vw;
		    		color:white;
		    		padding-top: 1vw;
		    	}
		    	.video-author{
		    		font-size: 0.6rem;color:white;
						padding-bottom: 1vw;
						padding-top: 0.3vw;
		    	}
		    	.video-intro{
		    		font-size: 1vw;
						color:white;
		    	}
		    }
		}
	}
	.banner9{
		.title{text-align: center;margin: 4%;font-size: 30px;}
		.content{
			font-size: 0.7rem;
			margin: 2% 20%;
		    display: flex;
		    flex-direction: row;
		    align-items: center;
		    justify-content:space-between;
		    text-align: left;
		    opacity: 0.8;
		    td:last-child{
		    	color:$themeOrange;
		    }
		    .flexbox{
		    	display: flex;
		    	width: 50%;
		    	flex-direction:column;
		    }
		}
	}

}
.main_menu{
	background-color: #ccc !important;
}
	.video-wrap{
		height: 40vw;
	}
</style>
