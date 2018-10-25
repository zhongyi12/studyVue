<template>
<div class="question-page-wrapper">

    <ol class="breadcrumb">
      <li class="breadcrumb-item" ><router-link :to="{name:'app',params:{lang:country}}">{{langData.breadcrumb[1]}}</router-link></li>
      <li class="breadcrumb-item active" v-show="showData == 'purchase'">{{langData.breadcrumb[2]}}</li>
      <li class="breadcrumb-item active" v-show="showData == 'cooperation'">{{langData.breadcrumb[4]}}</li>
      <li class="breadcrumb-item active" v-show="showData == 'policy'">{{langData.breadcrumb[5]}}</li>

      <li class="breadcrumb-item" v-show="showData == 'technology'">{{langData.breadcrumb[3]}}</li>
      <li class="breadcrumb-item active" v-if="showData == 'technology'&&showProduce == 'pro'">uArm Swift Pro</li>
      <li class="breadcrumb-item active" v-show="showData == 'technology'&&showProduce == 'swift'">uArm Swift</li>
      <li class="breadcrumb-item active" v-if="showData == 'technology'&&showProduce == 'metal'">uArm Metal</li>
    </ol>
    <div class="page-wrapper">
        <div class="question-wrap">
        	<!--<div class="side-nav">-->
        		<!--<ul class="nav-list">-->
        			<!--<li v-on:click="getQuestion('1')" v-bind:class="{active:showData == 1}">{{langData.tabText[1]}}</li>-->
        			<!--<li v-on:click="getQuestion('2')" v-bind:class="{active:showData == 2}">{{langData.tabText[2]}}</li>-->
        			<!--<li v-on:click="getQuestion('3')" v-bind:class="{active:showData == 3}">{{langData.tabText[3]}}</li>-->
        			<!--<li v-on:click="getQuestion('4')" v-bind:class="{active:showData == 4}">{{langData.tabText[4]}}</li>-->
        			<!--<li v-on:click="getQuestion('5')" v-bind:class="{active:showData == 5}">{{langData.tabText[5]}}</li>-->
        		<!--</ul>-->
            <!--<div class="text-center h1">-->
              <!--<a :href="langData.feedback" target="_blank"><button class="btn ghost-button">{{langData.btnContact}}</button></a>-->
            <!--</div>-->
        	<!--</div>-->
        	<div class="question-anwser" v-show="showData == 'purchase'">
            <div class="produce-box">
              <ul>
                <li class="anwser-box" v-for="item in langData[1]">
                  <div class="question-text">{{item.qtext}}</div>
                  <div class="anwser-text" v-html="item.atext"></div>
                </li>
              </ul>
            </div>
        	</div>
					<div class="question-anwser" v-show="showData == 'technology'">
					  <div class="produce-wrap">
					    <h1 class="produce-title">{{ langData.selectProduct }}</h1>
              <div class="produce-pic" v-for="(item,index) in tabProduce" :key="index" @click="getProduceQus(item.name,index)">
                <img :class="{'scale-img':showNum == index}" :src="item.pic"/>
                <div class="produce-text" :class="{'active':showNum == index}">{{ item.text }}
                  <p :class="{'el-icon-caret-bottom':showNum == index}"></p>
                </div>
              </div>
            </div>
						<!--<el-collapse v-model="activeName" accordion>-->
							<!--<el-collapse-item v-if="langData.aftersales.replacement" :title="langData.aftersales.replacement.title" :name="langData.aftersales.replacement.name">-->
								<!--<div v-for="content in langData.aftersales.replacement.html" v-html="content"></div>-->
								<!--<ul>-->
									<!--<li class="anwser-box" v-for="item in langData.aftersales.replacement.list" v-html="item"></li>-->
								<!--</ul>-->
							<!--</el-collapse-item>-->
							<!--<el-collapse-item :title="langData.aftersales.paid.title" :name="langData.aftersales.paid.name">-->
								<!--<div v-for="content in langData.aftersales.paid.content">-->
									<!--<div v-for="item in content.html" v-html="item"></div>-->
									<!--<ul>-->
										<!--<li class="anwser-box" v-for="item in content.list" v-html="item"></li>-->
									<!--</ul>-->
								<!--</div>-->
							<!--</el-collapse-item>-->
							<!--<el-collapse-item :title="langData.aftersales.platinum.title" :name="langData.aftersales.platinum.name">-->
								<!--<div v-for="content in langData.aftersales.platinum.html" v-html="content"></div>-->
								<!--<ul>-->
									<!--<li class="anwser-box" v-for="item in langData.aftersales.platinum.list" v-html="item"></li>-->
								<!--</ul>-->
							<!--</el-collapse-item>-->
							<!--<el-collapse-item :title="langData.aftersales.repair.title" :name="langData.aftersales.repair.name">-->
								<!--<div v-for="content in langData.aftersales.repair.content">-->
									<!--<div v-for="item in content.html" v-html="item"></div>-->
									<!--<ul>-->
										<!--<li class="anwser-box" v-for="item in content.list" v-html="item"></li>-->
									<!--</ul>-->
								<!--</div>-->
							<!--</el-collapse-item>-->
							<!--<el-collapse-item :title="langData.aftersales.technical.title" :name="langData.aftersales.technical.name">-->
								<!--<div v-html="langData.aftersales.technical.html"></div>-->
							<!--</el-collapse-item>-->
							<!--<el-collapse-item :title="langData.aftersales.essential.title" :name="langData.aftersales.essential.name">-->
								<!--<ul>-->
									<!--<li class="anwser-box" v-for="item in langData.aftersales.essential.list" v-html="item"></li>-->
								<!--</ul>-->
							<!--</el-collapse-item>-->
						<!--</el-collapse>-->
            <div class="produce-box" v-show="showProduce == 'pro'">
              <ul>
                <li class="anwser-box" v-for="item in langData['pro']">
                  <div class="question-text">{{item.qtext}}</div>
                  <div class="anwser-text" v-html="item.atext"></div>
                </li>
              </ul>
            </div>
            <div class="produce-box" v-show="showProduce == 'swift'">
              <ul>
                <li class="anwser-box" v-for="item in langData['swift']">
                  <div class="question-text">{{item.qtext}}</div>
                  <div class="anwser-text" v-html="item.atext"></div>
                </li>
              </ul>
            </div>
            <div class="produce-box" v-show="showProduce == 'metal'">
              <ul>
                <li class="anwser-box" v-for="item in langData['metal']">
                  <div class="question-text">{{item.qtext}}</div>
                  <div class="anwser-text" v-if="item.atext" v-html="item.atext"></div>
                  <div class="anwser-text" v-if="item.btext" v-for="bitem in item.btext">
                    <div v-html="bitem"></div>
                  </div>
                </li>
              </ul>
            </div>
        	</div>

					<!--<div class="question-anwser" v-show="showData =='cooperation'">-->
        		<!--<ul>-->
        			<!--<li class="anwser-box" v-for="item in langData[5]">-->
        				<!--<div class="question-text">{{item.qtext}}</div>-->
        				<!--<div class="anwser-text" v-html="item.atext"></div>-->
        			<!--</li>-->
        		<!--</ul>-->
        	<!--</div>-->
          <div class="cooperation-wrap" v-show="showData =='policy'">
            <div class="side-nav">
              <ul class="nav-list">
              <!--<li v-on:click="getQuestion('1')" v-if="langData.aftersales.replacement" v-bind:class="{active:showData == 1}">{{langData.aftersales.replacement.title}}</li>-->
                <li v-on:click="getQuestion('1')" v-bind:class="{active:showAftersales == 1}">{{langData.aftersales.paid.title}}</li>
                <li v-on:click="getQuestion('2')" v-bind:class="{active:showAftersales == 2}">{{langData.aftersales.platinum.title}}</li>
                <li v-on:click="getQuestion('3')" v-bind:class="{active:showAftersales == 3}">{{langData.aftersales.repair.title}}</li>
                <li v-on:click="getQuestion('4')" v-bind:class="{active:showAftersales == 4}">{{langData.aftersales.technical.title}}</li>
                <li v-on:click="getQuestion('5')" v-bind:class="{active:showAftersales == 5}">{{langData.aftersales.essential.title}}</li>
              </ul>
            </div>
            <div class="question-anwser box-shadow" v-show="showAftersales == '1'">
              <div v-for="content in langData.aftersales.paid.content">
                <div v-for="item in content.html" v-html="item"></div>
                <ul>
                  <li class="anwser-box" v-for="item in content.list" v-html="item"></li>
                </ul>
              </div>
            </div>
            <div class="question-anwser box-shadow" v-show="showAftersales == '2'">
              <div v-for="content in langData.aftersales.platinum.content">
                <div v-for="item in content.html" v-html="item"></div>
                <ul>
                  <li class="anwser-box" v-for="item in content.list" v-html="item"></li>
                </ul>
              </div>
            </div>
            <div class="question-anwser box-shadow" v-show="showAftersales == '3'">
              <div v-for="content in langData.aftersales.repair.content">
                <div v-for="item in content.html" v-html="item"></div>
                <ul>
                  <li class="anwser-box" v-for="item in content.list" v-html="item"></li>
                </ul>
              </div>
            </div>

            <div class="question-anwser box-shadow" v-show="showAftersales == '4'">
              <div v-for="content in langData.aftersales.technical.content">
                <div v-for="item in content.html" v-html="item"></div>
                <ul>
                  <li class="anwser-box" v-for="item in content.list" v-html="item"></li>
                </ul>
              </div>
            </div>

            <div class="question-anwser box-shadow" v-show="showAftersales == '5'">
              <div v-for="content in langData.aftersales.essential.content">
                <div v-for="item in content.html" v-html="item"></div>
                <ul>
                  <li class="anwser-box" v-for="item in content.list" v-html="item"></li>
                </ul>
              </div>
            </div>

          </div>
          <div class="text-center h1">
            <a @click="goTicketCn()" v-if="$route.params.lang == 'cn'"><button class="btn ghost-button">{{langData.btnContact}}</button></a>
            <a @click="goTicketEn()" v-else><button class="btn ghost-button">{{langData.btnContact}}</button></a>
          </div>
        </div>
    </div>
</div>
</template>

<script>
import setting from '../../config';
import evenBus from './module/eventBus.js';
import langText from '../../lang/question';
export default {
	data(){
		return {
			country:'cn',
      langData: {},
      showData: null,
      showProduce: 'pro',
      showAftersales: '1',
      activeName: '1',
      showNum: 1,
      tabProduce: {
      1: {
        name: 'pro',
          pic: require('../assets/img/support/banner_pro.png'),
          text: 'uArm Swift Pro'
      },
      2: {
        name: 'swift',
          pic: require('../assets/img/support/banner_swift.png'),
          text: 'uArm Swift'
      },
      3: {
        name: 'metal',
          pic: require('../assets/img/support/banner_metal.png'),
          text: 'uArm Metal'
      }
    },
      flashToolLink: 'https://github.com/altjz/flashtool/releases',
      firmwareLink: 'https://github.com/uArm-Developer/SwiftProForArduino/releases',
  }
},
mounted(){
  window.scrollTo(0, 0);
  this.showData = this.$route.params.module;
//    this.getParams();
},
// ready : function(){
// 	var _this = this;
//    	console.log(11)
// 	this.handle = setInterval(function(){
// 		_this.count++;
// 	},1e3 );
// },
// destroyed : function(){
// 	clearInterval( this.handle )
// }
created : function(){
  if(this.$route.params.lang=='en' || this.$route.params.lang=='cn')
    this.langData=langText[this.$route.params.lang];
		else
			this.langData=langText['cn'];

	},
	methods:{
		getProduceQus : function(qname,num){
			this.showProduce = qname;
			this.showNum = num;
		},
    getQuestion: function(v){
      this.showAftersales = v;
    },
//    getParams() {
//      let routerParams = this.$route.params.module;                 // 取到路由带过来的参数
//      this.showData = routerParams;
//      console.log("监听", this.showData);                               // 将数据放在当前组件的数据内
//    },
    goTicketCn(){
      window.open(`${setting.SUPPORT_URL.cn}${this.getParams}`);
//      this.$router.push({
//        name: 'ticket',
//        params:{
//          lang:this.$route.params.lang,
//          type:this.getParams,
//        }
//      })
    },
    goTicketEn(){
      window.open(`${setting.SUPPORT_URL.en}${this.getParams}`);
    }
	},
	computed:{
    getParams(){
      return this.showData = this.$route.params.module;
    }
	},
  watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件
    $route: function(val,oldval){
      console.log("计算监听",this.getParams);
      this.getParams;
    }
  }
}
</script>
<style lang="sass" scoped>
 $themeOrange: #E27347;
 .question-page-wrapper {
  padding-top: 60px;
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
	color:white;
	border:1px solid white;
}
 .breadcrumb{
   margin-bottom:0;
     >.active {
       color: $themeOrange;
   }
 }
.page-wrapper{
	/*background-color: #f8f8f8;*/
	width: 100%;
	display: inline-block;
	padding:2% 0;
	}
.cooperation-wrap{
  display: flex;
	padding: 2% 10%;
	.side-nav{
		display: inline-block;
		width: 20%;
		min-width: 200px;
		margin: 0 0 0 2%;
		/*background-color: #fff;*/
		box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
		.nav-list{
			margin-top: 10%;
			li{
				padding: 7% 14%;
				cursor: pointer;
        position: relative;
			}
			li:hover,li:focus,li.active{
				background-color:#fafafa;
				border-left: 2px solid $themeOrange;
			}
		}
	}
	.box-shadow {
    box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
	}
}
 .question-anwser{
   vertical-align: top;
   display: inline-block;
   width: 100%;
   padding: 3% 5%;
   min-height: 500px;
   /*background-color: #fff;*/
   ul {
     padding-left: 15px;
 }
   li{
     list-style: decimal;
     padding-top: 1%;
     .anwser-text{
       color:$themeOrange;
         li{
           list-style-type:disc;
       }
         a{
           color:$themeOrange;
       }
   }
 }
   li:hover{
     background-color:#fafafa;
 }

 }
.question-anwser {
  .produce-wrap {
    /*display: flex;*/
    /*justify-content: center;*/
    text-align: center;
    .produce-title {
      font-size: 24px;
    }
    .produce-pic {
      cursor: pointer;
      width: 230px;
      margin: 2% 4%;
      display: inline-block;
      .scale-img{
        -webkit-transform: scale(1.2); /* Safari and Chrome */
        -moz-transform: scale(1.2); /* Firefox */
        -ms-transform: scale(1.2); /* IE 9 */
        -o-transform: scale(1.2); /* Opera */
        transform: scale(1.2);
      }
      img {
        width: 100%;
        -webkit-transition: all 1s ease; /* Safari and Chrome */
        -moz-transition: all 1s ease; /* Firefox */
        -ms-transition: all 1s ease; /* IE 9 */
        -o-transition: all 1s ease; /* Opera */
        transition: all 1s ease;
      }
    }
    .produce-pic:hover {
      img{
        -webkit-transform: scale(1.2); /* Safari and Chrome */
        -moz-transform: scale(1.2); /* Firefox */
        -ms-transform: scale(1.2); /* IE 9 */
        -o-transform: scale(1.2); /* Opera */
        transform: scale(1.2);
      }
    }
    .produce-text {
      padding-top: 10%;
      font-size: 16px;
    }
    .el-icon-caret-bottom {
      font-size: 14px;
      margin-left: 10px;
  }
    .active {
      color: $themeOrange;
    }
  }
  .produce-pic:hover .produce-text {
    color: $themeOrange;
  }
  .produce-box {
    max-width: 1600px;
    width: 80%;
    margin: 0 auto;
    /*background-color: #fff;*/
    /*box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);*/
    padding: 30px;
  }
}
	.linktext{
		display: inline !important;
		color: $themeOrange;
		text-decoration: underline !important;
	}
</style>
