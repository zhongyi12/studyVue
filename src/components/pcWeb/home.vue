<template>
<div class="page-wrapper">
  <div class="banner-container">
    <el-carousel v-if="country==='en'" arrow="always" :interval='5000'>
      <el-carousel-item >
        <router-link :to="{name:'xarm',params:{lang:country}}">
          <a class="banner-com en-banner1"></a>
        </router-link>
      </el-carousel-item>
      <el-carousel-item >
        <router-link :to="{name:'uarmswift',params:{lang:country}}">
          <a class="banner-com en-banner2"></a>
        </router-link>
      </el-carousel-item>
    </el-carousel>
    <el-carousel v-else  arrow="always" :interval='5000'>
      <el-carousel-item >
        <router-link :to="{name:'xarm',params:{lang:country}}">

          <!-- <div class=" banner-com">
            <div class="banner-text">
              <img class="banner-picture" src="../assets/img/home/xarm_.png"/>
              <div>
                <h3 class="title">xArm</h3>
                <p class="slogan">xArm 7现已开放测试预约</p>
                <el-button class="button"><span>了解详情</span><i class="el-icon-caret-right"></i></el-button>
              </div>
            </div>
          </div> -->
          <a class="banner-com cn-banner1"></a>
        </router-link>
      </el-carousel-item>
      <el-carousel-item >
        <router-link :to="{name:'uarmswift',params:{lang:country}}">
          <a class="banner-com cn-banner2"></a>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
  <uf-new :newsData="newsData"></uf-new>
  <uf-footer></uf-footer>




  <div>
  <!-- <p>当前路径: {{$route.path}}</p>
    <p>当前路由参数: {{$route.params | json}}</p> -->
  </div>
</div>

</template>
<script>
import ufVideo from './subcomponents/video';
import ufNew from './subcomponents/homeNews';
import ufFooter from './subcomponents/footer';
import langText from '../../lang/comom';
import config from '../../config';
import mainModel from '../../mainModel/model';
require('velocity-animate');
const imagePath = '../assets/img';
export default {
	props :['countdown','newsData'],
	data() {
		return {
			country:'cn',
			langData:{},
			gameStart:false,
			subscribeClass:"subscribe-new-container",
      countdownNotEnd:false,
      config: config,
			bannerImage:{
				en:{
					banner1:require('../assets/img/home/promo-en.jpg'),
//					banner2:require('../assets/img/home/swift-en.png'),
					banner3:require('../assets/img/home/blackfriday2017.jpg'),
				},
				cn:{
					banner1:require('../assets/img/home/promo-cn.jpg'),
//          banner3:require('../assets/img/home/home_banner1.png'),
				},
			},
      options: {
        // Your custom options here
        animationType: 'slideY',
        duration: 1000,
        easing: [1, 0, 0, 1],
        loopBottom: false,
        overlay: false,
        dotNavEnabled: true,
        dotNavPosition: 'right',
        dotNavColor: '#848484',
      },
		}
	},
	created : function(){
		if(this.$route.params.lang!==undefined){
			this.country = this.$route.params.lang;
		}
			if(this.$route.params.lang==='en' || this.$route.params.lang==='cn')
  				this.langData=langText[this.$route.params.lang];
  			else
  				this.langData=langText['cn'];
	},
  	mounted : function(){
      // console.log('endCountDown', this.endCountDown);//
      // console.log('this.countdownDay()', this.countdownDay());
  	},
  	methods:{
      // xarm 发布倒计时
      // countdownDay() {
      //   const timer = setInterval(() => {
      //     const last = new Date("2018-10-18 00:00:00");
      //     let date = new Date();
      //     this.countdownTime = Math.floor((last - date)/86400000);
      //     this.countdownImage = this.countdownImageList[this.countdownTime];
      //     // console.log(this.countdownImage, (last - date), (last - date)/864000);
      //     if (this.countdownTime < 1) {
      //       window.clearInterval(timer);
      //        this.countdownImage = this.countdownImageList[1];
      //        this.endCountDown = true;
      //     }
      //   },1000)
      // },
  	},
		components: {
			ufVideo,
      ufNew,
      ufFooter,
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
$newBgColor: #ECECEC;

.page-wrapper{
	width: 100%;
	padding-top: 60px;
	.banner-container {
	  height: 54vw;
	  .banner-com{
      height: 100%;
      /*float: left;*/
      display: block;
      background-size: cover;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      /*background-attachment: fixed;*/
      background-position: center center;
      background-repeat: no-repeat;
      background-color: #fff;
      cursor: pointer;
	  }
     .banner-picture {
       width: 30%;
      }
    .banner-text {
      // position: absolute;
      // right: 20%;
      // top: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 10%;
      .title {
        font-size: 70px;
        color: $themeOrange;
        font-weight: 600;
      }
      .slogan {
        font-size: 22px;
        padding: 30px 0;
      }
      .button {

      }
    }
	  .cn-banner1 {
      background-image: url("../assets/img/home/xarm_cn.jpg");
	  }
    .cn-banner2 {
      background-image: url("../assets/img/home/swift_cn.png");
    }
    .en-banner1 {
      background-image: url("../assets/img/home/xarm_en.png");
    }
    .en-banner2 {
      background-image: url("../assets/img/home/swift_en.png");
    }
    .cn-banner3 {
      background-image: url("../assets/img/home/cn_.png");
    }
    // .en-banner4 {
    //   background-image: url("../assets/img/home/time_release_xarm_en7.jpg");
    // }
    .cn-banner4 {
      background-image: url("../assets/img/home/father_cn.jpg");
    }
    .temp-link {
      width: 100%;
      height: 100%;
      display: inline-block;
    }
      .el-carousel {
        height:100%;
      }
	}
	.subscribe-container{
		/*height: 15vw;*/
		background: #333333;
		color: white;
    font-size: 0.7rem;
		padding:4vw 30vw;
		text-align: center;
		.subscribe-text .withcolor{
			line-height:1.4rem;
			color:$themeOrange;
			padding-bottom: 2%;
			font-size: 1rem;
		}
		.subscribe-button{
			margin-top: 15px;
		}
		.subscribe-fill{
			padding: 3% 10%;
			input{
				border-radius:0;
				background: #282828;
    		border: 1px solid #828282;
				color:white;
				border-right: none;
			}
				button{
					border-radius: 0px;
				}
		}
	}
	.subscribe-new-container{
		/*height: 15vw;*/
		background: #ececec;
		color: #333;
    	font-size: 14px;
		padding:4vw 30vw;
		text-align: center;
		.subscribe-text .withcolor{
			line-height:30px;
			color:$themeOrange;
			padding-bottom: 2%;
			font-size: 18px;
		}
		.subscribe-button{
			margin-top: 15px;
		}
		.subscribe-fill{
			padding: 3% 10%;
			input{
				border-radius:0;
				background: #282828;
    		border: 1px solid #828282;
				color:white;
				border-right: none;
			}
				button{
					border-radius: 0px;
				}
		}
	}
}
.main_menu{
	background-color: #ccc !important;
}
.ghost-button{
	display: inline-block;
	color:white;
	text-align: center;
	outline: none;
	text-decoration: none;
	background-color: $themeOrange;
	border:1px solid $themeOrange;
	cursor: pointer;
	font-family: 'Helvetica Neue',"微软雅黑";
	transition: all 0.3s ease-out;
	-moz-transition:all 0.3s ease-out;
	-webkit-transition:all 0.3s ease-out;
	-o-transition:all 0.3s ease-out;
	border-radius: 0;
}
.ghost-button:hover,.ghost-button:active{
	background-color: #fff;
	color:$themeOrange;
	border:1px solid #fff;
}
.carousel-caption{
	font-size: 0.4vw;
	padding-bottom: 2vw;
	z-index: 99;
	width: 11vw;
	height: 2vw;
	bottom: 9.5vw;
	left: 44vw;
}
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}

  /*home-about*/
  .home-about {
    width:100%;
    height:100%;
    display:flex;
    justify-content: space-between;
    .home-about-banner {
      width:50%;
      height: 100%;
      .about-pic1 {
        height: 100%;
        display: block;
        background-size: cover;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      .about-pic1 {
        background-image: url("../assets/img/home/about_us.png");
      }
      img {
        width: 100%;
        height: 100%;
      }

    }
    .home-about-text {
      width:50%;
      position: relative;
      .about-text-title {
        padding-left: 8%;
        padding-top: 10%;
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: #555;
        text-transform: uppercase;
        font-weight: 600;
      }
      .about-text-box {
        line-height: 1.8;
        margin: 5% 8%;
      }
      .about-text {
        font-size: .74rem;
        color: #848484;
      }
      .about-more {
        margin-top: 10%;
        display: inline-block;
        background: #383838;
        line-height: 40px;
        transition: .3s;
        a {
          border-top: 1px solid rgba(255,255,255,.08);
          display: block;
          position: relative;
          color: #fff;
          width: 220px;
          text-align: center;
          letter-spacing: 1px;
        }
      }
    }
  }

</style>
<style lang="sass">
  .page-wrapper {
    .el-carousel__container {
      height:100%;
    }
    .el-carousel__arrow--right {
      right: 50px;
    }
    .el-carousel__arrow--left {
     left: 50px;
     }
  }

</style>
