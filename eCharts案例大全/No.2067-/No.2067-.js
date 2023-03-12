var luohu = "/asset/get/s/data-1630144911450-ZxhmlN1Tx.json";

var yantian = "/asset/get/s/data-1630143650403-zEG-b4a6U.json";

var pinshan = "/asset/get/s/data-1630143638312-zYSKD0tJz.json";

var nanshan = "/asset/get/s/data-1630143627252-6pW9tMjLO.json";

var longhua = "/asset/get/s/data-1630143617196-DLZsHCP_w.json";

var longgang = "/asset/get/s/data-1630143605149-9YA_rZKMQ.json";

var guangming = "/asset/get/s/data-1630143596280-Be7kjHdf5.json";

var futian = "/asset/get/s/data-1630143582865-Wm14QlzPf.json";

var dapeng  = "/asset/get/s/data-1630143565772-XK45kErzc.json";

var baoan = "/asset/get/s/data-1630143486395-_VuCItF64.json";

var shenzhen = "/asset/get/s/data-1630143471355-OHGbVb93X.json";

var street ,url=shenzhen;

function init(){
$.getJSON(url, function (geoJson) {
        const arr= [
  { name: "罗湖区", value: 0, obj: { value: [0] } },
  { name: "福田区", value: 0, obj: { value: [0] } },
  { name: "南山区", value: 0, obj: { value: [0] } },
  { name: "宝安区", value: 0, obj: { value: [0] } },
  { name: "龙岗区", value: 0, obj: { value: [0] } },
  { name: "大鹏新区", value: 0, obj: { value: [0] } },
  { name: "盐田区", value: 0, obj: { value: [0] } },
  { name: "龙华新区", value: 0, obj: { value: [0] } },
  { name: "坪山新区", value: 0, obj: { value: [0] } },
  { name: "光明新区", value: 0, obj: { value: [0] } },
];

const state= ['新增'];
const option = {
  //显示内容的
  tooltip: {
    //样式
    formatter: (params) => {
      let str = "";
      if (state && state.length != 0) {
        str =
          '<span style="color:#00fffc;font-size:20px;line-height:35px;display: block;margin:0 20px;">';
        for (let i = 0; i < state.length; i++) {
          str +=
            state[i] + " : " + (params.data.obj[i] || 0) + "人<br>";
        }
        str += "</span>";
      }
      return str;
    },
  },
  //映射地图
  visualMap: {
    min: Math.min(
      ...arr.map((item) => {
        return item.value;
      })
    ),
    max: Math.max(
      ...arr.map((item) => {
        return item.value;
      })
    ),
    show: false,
    splitNumber: 4,
    inRange: {
      color: ["#1A6EAF", "#DDC75E", "#DD8E5E", "#DD5E5E"],
    },
    textStyle: {
      color: "#fff",
    },
  },
  //地图组件
  geo: {
    map: "深圳",
    label: {
      normal: {
        show: true,
        fontSize: 20,
        color: "#fff",
      },
      //选中效果
      emphasis: {
        show: true,
        color: "#fff",
      },
    },
    roam: false,
    itemStyle: {
      normal: {
        //区域颜色
        // areaColor: "#8db200",
        // 边框颜色
        borderColor: "#6367ad",
        borderWidth: 3,
      },
      //选中效果
      emphasis: {
        areaColor: "#feb6aa", // hover效果
      },
    },
    /*regions: [
      //对不同的区块进行着色
      {
        name: "宝安区", //区块名称
        itemStyle: {
          normal: {
            areaColor: "#5EDD91"
          }
        }
      },
      {
        name: "罗湖区",
        itemStyle: {
          normal: {
            areaColor: "#1A6EAF"
          }
        }
      },
      {
        name: "南山区",
        itemStyle: {
          normal: {
            areaColor: "#DDC75E"
          }
        }
      },
      {
        name: "光明新区",
        itemStyle: {
          normal: {
            areaColor: "#DD5E5E"
          }
        }
      },
      {
        name: "龙华新区",
        itemStyle: {
          normal: {
            areaColor: "#DD5E5E"
          }
        }
      },
      {
        name: "龙岗区",
        itemStyle: {
          normal: {
            areaColor: "#1A6EAF"
          }
        }
      },
      {
        name: "盐田区",
        itemStyle: {
          normal: {
            areaColor: "#C10000"
          }
        }
      },
      {
        name: "坪山新区",
        itemStyle: {
          normal: {
            areaColor: "#DD8E5E"
          }
        }
      },
      {
        name: "大鹏新区",
        itemStyle: {
          normal: {
            areaColor: "#5EDD91"
          }
        }
      }
    ],*/

    left: arr.length == 1 ? "30%" : "10%",
    right: arr.length == 1 ? "30%" : "10%",
    top: "2%",
    bottom: "2%",
  },
  // 数据展示
  series: [
    {
      name: "", // 配合 legend 的data 使用
      type: "map",
      geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
      data: arr,
    },
  ],
}

            //地图组件
    echarts.registerMap("深圳", geoJson);
    
    

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    myChart.on("click", echartsMapClick);
    
    
     // 深圳地图点击
 function echartsMapClick(params) {


    if (street !== params.name) {
      street = params.name;
      url= cwlType(params.name)
      init()
      //地图组件
    //   echarts.registerMap("深圳", cwlType(street));

      // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option);
    }
  }
    
    
    // 深圳
 function cwlType(val) {
    // console.log('cwlType', val);
    switch (val) {
      case "光明新区":
        return guangming;
      case "南山区":
        return nanshan;
      case "坪山新区":
        return pinshan;
      case "大鹏新区":
        return dapeng;
      case "宝安区":
        return baoan;
      case "盐田区":
        return yantian;
      case "福田区":
        return futian;
      case "罗湖区":
        return luohu;
      case "龙华新区":
        return longhua;
      case "龙岗区":
        return longgang;
      default:
        return shenzhen;
    }
  }
        
        
    })
}

init()



