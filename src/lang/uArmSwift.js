import setting from '../config';
const langText = {
  cn:{
    submenu:{
      overview:"产品介绍",
      detail:"技术参数",
      question:"常见问题",
      download:"软件下载",
      storeLink: setting.STORE_URL.cn,
      buyText:"立即购买",
      teachVideo: "教学视频",
    },
    banner1:{
      image:require("../components/assets/img/swift/banner1_cn.png"),
      text:"uArm Swift & uArm Swift Pro介绍视频",
      title:'<span>UARM</span>&nbsp<span>SWIFT</span>&nbsp<span>PRO</span>',
      content:'STEM教育▪创客之选',
      watchVideo:'视频介绍',
    },
//				videoLink:"static/video/swift_introduce.mp4",
    videoLink: "https://www.ufactory.cc/static/video/swift_introduce.mp4",
    banner2:{
      title:"更高精度，更多功能",
      content:"uArm Swift Pro的重复定位精度达到0.2mm，可实现画画、激光雕刻、3D打印等功能。",
      content1:"*uArm Swfit Pro内部集成步进电机和12比特编码器",
    },
    banner3:{
      title:"手持示教，开箱即用",
      content:"无需电脑，按下底座按钮，'手把手'让uArm重复指定动作，零门槛交互，简单直接。",
      playText:"播放",
      recordText:"录制"
    },
    banner4:{
      gearitems:[
        {name:"Swift Universal Holder",image:require("../components/assets/img/swift/unselected_Universal holder.png")},
        {name:"Swift Gripper",image:require("../components/assets/img/swift/unselected_gripper@2x.png")},
        {name:"Swift 3D Printer",image:require("../components/assets/img/swift/unselected_3D Print Extruder.png")},
        {name:"Swift Laser",image:require("../components/assets/img/swift/unselected_laser.png")}
      ],
      title:"多种末端，随心切换",
      content:"可选择吸头、笔夹、夹子等多种官方配件，标准化接口，切换末端更便捷。",
      noteText:"仅限uArm Swift Pro",
    },
    banner5:{
      title:"丰富配件，自由组合",
      content:"搭配Seeed Grove的传感器/执行器配件，<br>让uArm的功能更丰富、“感官”更敏锐。",
      left:{
        title:"底座Grove配件:",
        items:{
          1:{
            icon:require("../components/assets/img/swift/icon_lcd.svg"),
            text:"LCD屏幕"
          },2:{
            icon:require("../components/assets/img/swift/icon_color sensor.svg"),
            text:"颜色传感器"
          },3:{
            icon:require("../components/assets/img/swift/icon_temperature.svg"),
            text:"温湿度传感器"
          },
        }
      },
      right:{
        title:"末端Grove配件:",
        items:{
          1:{
            icon:require("../components/assets/img/swift/icon_magnet.svg"),
            text:"电磁铁"
          },2:{
            icon:require("../components/assets/img/swift/icon_PIR.svg"),
            text:"动作传感器"
          },3:{
            icon:require("../components/assets/img/swift/icon_minifan.svg"),
            text:"小风扇"
          },
        }
      }
    },
    banner6:{
      title:"简单易用，轻松上手",
      sliders:{
        1:{
          image:require("../components/assets/img/swift/slider1.png"),
          content:"一个PC客户端，集合多种操作方式，<br>选择最适合你的方式，在uArm上实现你的创意。"
        },2:{
          image:require("../components/assets/img/swift/slider2.png"),
          content:"专为uArm设计的Blockly图形化编程界面，<br>拖拽、拼接，即可定制你的第一个机器人项目。"
        },3:{
          image:require("../components/assets/img/swift/slider3.png"),
          content:"同时使用鼠标和键盘快捷键，<br>实时控制uArm的动作。"
        },4:{
          image:require("../components/assets/img/swift/slider4.png"),
          content:"PC端手持示教，随时回放录制过的uArm动作，<br>亦可在Blockly图形化编程中使用已录制的轨迹。 "
        },5:{
          image:require("../components/assets/img/swift/slider5.png"),
          content:"体感控制,<br>让uArm实时跟随你的手部运动(只限uArm Swift)。"
        },6:{
          image:require("../components/assets/img/swift/slider6.png"),
          content:"插入文字、图案或图片，<br>让uArm帮你画/雕刻出来(仅限uArm Swift Pro)。"
        }
      }
    },
    banner7:{
      introItem:[
        {
          icon:require("../components/assets/img/swift/real-time_remote.png"),
          text:"实时远程操控"
        },
        {
          icon:require("../components/assets/img/swift/icon_download.png"),
          text:"将你的Blockly图形化编程项目下载到手机，随时随地运行。"
        }
      ],
      image1:require("../components/assets/img/swift/iphone_Horion.png"),
      image2:require("../components/assets/img/swift/iphone_vertical.png"),
      titleimg:require("../components/assets/img/swift/logo_uarm_play.png"),
      name: 'UARM PLAY',
      content:"手机里的uArm遥控器"
    },
    banner8:{
      content:"uArm Swift和uArm Swift Pro都是开源的硬件平台，欢迎开发者和我们一起创造更多可能。",
      title:"服务于开发者",
      subtitle: "开源平台",
      brandlogos:{
        1:require("../components/assets/img/swift/Arduino_Logo.png"),
        2:require("../components/assets/img/swift/python_logo.png"),
        3:require("../components/assets/img/swift/ros-logo.png"),
        4:require("../components/assets/img/swift/gc-logo.png"),
        5:require("../components/assets/img/swift/opencv-logo.png"),
      }
    },
    banner9:{
      title:"技术参数",
      spec:["","体积","重量","自由度", "重复定位精度","负载","活动半径"],
      specItem:[
        {
          name:"uArm Swift",
          pro:"",
          image:require("../components/assets/img/swift/swift.png"),
          values:["150*132*281mm","1.2kg","4","5mm","500g","50mm - 320mm"]
        },{
          name:"uArm Swift ",
          pro:"Pro",
          image:require("../components/assets/img/swift/pro.png"),
          values:["150*140*281mm","2.2kg","4","0.2mm","500g","50mm - 320mm"]
        }
      ],
      download: "下载参数表",
      pdflink:"http://download.ufactory.cc/docs/cn/uArm-Swift-Specifications-cn.pdf",
      mobileSpecItem:[
        {
          name:"",
          pro:" ",
          image:" ",},
        {
          name:"uArm Swift",
          pro:"",
          image:require("../components/assets/img/swift/swift.png"),
        },{
          name:"uArm Swift ",
          pro:"Pro",
          image:require("../components/assets/img/swift/pro.png"),
        }
      ],
      mobileTr: [
        ["体积", "150*132*281mm", "150*140*281mm"],
        ["重量", "1.2kg", "2.2kg"],
        ["自由度", "4", "4"],
        ["重复定位精度", "5mm", "0.2mm"],
        ["负载", "500g", "500g"],
        ["活动半径", "50mm - 320mm", "50mm - 320mm"]
      ],
    },
    banner10:{
      title:"视觉套件，开源易用",
      content:"从颜色分拣到人脸识别，轻松编程无限拓展，让uArm创造更多可能",
      content1:"*视觉套件基于开源Open MV(M7) ",
    },
  },
  en:{
    submenu:{
      overview:"Overview",
      detail:"Specifications",
      question:"Question",
      download:"Downloads",
      storeLink: setting.STORE_URL.en,
      buyText:"Buy Now",
      teachVideo: "Tutorial Videos",
    },
    banner1:{
      image:require("../components/assets/img/swift/banner1_en.png"),
      text:"Introducing uArm Swift &amp; uArm Swift Pro",
      title:'<span>UARM</span>&nbsp<span>SWIFT</span>&nbsp<span>PRO</span>',
      content:'DESIGN FOR STEM & MAKER',
      watchVideo:'Watch Video',
    },
//				videoLink:"https://www.youtube.com/embed/kzEkjx6Lmfg?rel=0&amp;autoplay=1",
    videoLink: "https://www.ufactory.cc/static/video/en/en-1.mp4",
    banner2:{
      title:"HIGH PRECISION",
      content:"uArm Swift Pro owns a position repeatability of 0.2mm, which is ready for delicate tasks like drawing, laser engraving, and more.",
      content1:"*uArm Swift Pro is equipped with stepper motor and 12-bits encoder",
    },
    banner3:{
      title:"Offline Learning Mode",
      content:"Teach uArm by hand, and make uArm repeat what it 'learns', simply by pressing the buttons on the base.",
      playText:"PLAY",
      recordText:"RECORD"
    },
    banner4:{
      gearitems:[
        {name:"Swift Universal Holder",image:require("../components/assets/img/swift/unselected_Universal holder.png")},
        {name:"Swift Gripper",image:require("../components/assets/img/swift/unselected_gripper@2x.png")},
        {name:"Swift 3D Printer",image:require("../components/assets/img/swift/unselected_3D Print Extruder.png")},
        {name:"Swift Laser",image:require("../components/assets/img/swift/unselected_laser.png")}
      ],
      title:"END-EFFECTORS",
      title1: "CHOOSE FREELY,SWITCH QUICKLY",
      content:"Suction cup, Universal Holder and Gripper to choose from.<br>Built-in standardised plug-in allows you to switch tools quickly.",
      noteText:"Only for uArm Swift Pro",
    },
    banner5:{
      title:"SENSE THE WORLD",
      content:"Built with Seeed Grove sockets,<br>uArm Swift & uArm Swift Pro can react <br>to motion, temperature, and more.",
      left:{
        title:"Base Seeed Grove Extension:",
        items:{
          1:{
            icon:require("../components/assets/img/swift/icon_lcd.svg"),
            text:"LCD RGB Backlight"
          },2:{
            icon:require("../components/assets/img/swift/icon_color sensor.svg"),
            text:"Color Sensor"
          },3:{
            icon:require("../components/assets/img/swift/icon_temperature.svg"),
            text:"Temperature & Humidity Sensor"
          },
        }
      },
      right:{
        title:"Front Seeed Grove Extension:",
        items:{
          1:{
            icon:require("../components/assets/img/swift/icon_magnet.svg"),
            text:"Electromagnet"
          },2:{
            icon:require("../components/assets/img/swift/icon_PIR.svg"),
            text:"PIR Motion Sensor"
          },3:{
            icon:require("../components/assets/img/swift/icon_minifan.svg"),
            text:"Mini Fan v1.1"
          },
        }
      }
    },
    banner6:{
      title:"EASY TO CONTROL",
      sliders:{
        1:{
          image:require("../components/assets/img/swift/slider1.png"),
          content:"Simple & All-in-one<br>Control or programme uArm in the way you like."
        },2:{
          image:require("../components/assets/img/swift/slider2.png"),
          content:"Graphical programming interface designed for uArm<br>Customise your robotic project in an intuitive way."
        },3:{
          image:require("../components/assets/img/swift/slider3.png"),
          content:"Control uArm with mouse and keyboard shortcuts<br>at the same time."
        },4:{
          image:require("../components/assets/img/swift/slider4.png"),
          content:"Teach uArm with your hand. Replay the recorded movement anytime.<br>Or apply the recorded movements in your Blockly projects. "
        },5:{
          image:require("../components/assets/img/swift/slider5.png"),
          content:"Gesture control<br>Let uArm follow your hand motion."
        },6:{
          image:require("../components/assets/img/swift/slider6.png"),
          content:"Insert shapes, texts or images, <br>let uArm draw/engrave the pattern for you(Only for uArm Swift Pro)."
        }
      }
    },
    banner7:{
      introItem:[
        {
          icon:require("../components/assets/img/swift/real-time_remote.png"),
          text:"Real-time remote control"
        },
        {
          icon:require("../components/assets/img/swift/icon_download.png"),
          text:"Download your Blockly projects to<br>your phone and replay it anytime"
        }
      ],
      image1:require("../components/assets/img/swift/iphone_Horion.png"),
      image2:require("../components/assets/img/swift/iphone_vertical.png"),
      titleimg:require("../components/assets/img/swift/logo_uarm_play.png"),
      name: 'UARM PLAY',
      content:"Go Mobile"
    },
    banner8:{
      content:"Both hardware and software are open to you.<br>We welcome more possibilities, as always.",
      title:"FOR DEVELOPERS",
      subtitle: "Opensource",
      brandlogos:{
        1:require("../components/assets/img/swift/Arduino_Logo.png"),
        2:require("../components/assets/img/swift/python_logo.png"),
        3:require("../components/assets/img/swift/ros-logo.png"),
        4:require("../components/assets/img/swift/gc-logo.png"),
        5:require("../components/assets/img/swift/opencv-logo.png"),
      }
    },
    banner9:{
      title:"Specifications",
      spec:["","Size","Weight","Degrees of<br> Freedom", "Repeatability","Payload","Working Range"],
      specItem:[
        {
          name:"uArm Swift",
          pro:"",
          image:require("../components/assets/img/swift/swift.png"),
          values:["150*132*281mm","1.2kg","4","5mm","500g","50mm - 320mm"]
        },{
          name:"uArm Swift ",
          pro:"Pro",
          image:require("../components/assets/img/swift/pro.png"),
          values:["150*140*281mm","2.2kg","4","0.2mm","500g","50mm - 320mm"]
        },
      ],
      download: "Download Datasheet",
      pdflink:'http://download.ufactory.cc/docs/en/uArm-Swift-Specifications-en.pdf',
      mobileSpecItem:[
        {
          name:"",
          pro:" ",
          image:" ",},
        {
          name:"uArm Swift",
          pro:"",
          image:require("../components/assets/img/swift/swift.png"),
        },{
          name:"uArm Swift ",
          pro:"Pro",
          image:require("../components/assets/img/swift/pro.png"),
        }
      ],
      mobileTr: [
        ["Size", "150*132*281mm", "150*140*281mm"],
        ["Weight", "1.2kg", "2.2kg"],
        ["Degrees of Freedom", "4", "4"],
        ["Repeatability", "5mm", "0.2mm"],
        ["Payload", "500g", "500g"],
        ["Working Range", "50mm - 320mm", "50mm - 320mm"]
      ],
    },
    banner10:{
      title:"VISION CAMERA KIT",
      content:"Equipped with Open MV, the Vision Camera Kit allows you to do everything from color sorting to face recognition, and ease your burden in visual programming. ",
      content1:"*The Vision Camera Kit is based on Open MV(M7)</br> Cam, which is an open source camera on board.  ",
    },
  }

};

export default langText;
