 var mapData = [{
    "name": "酒、饮料及茶叶批发",
    "value": 124554.00
}, {
    "name": "其他未列明农副食品加工",
    "value": 400000.00
}, 
 {
    "name": "服務業",
    "value": 402020.00
},{
    "name": "其他",
    "value": 270500.00
}, {
    "name": "纺织品、针织品及原料批发",
    "value": 505111.00
}, {
    "name": "农、林、牧、渔产品批发",
    "value": 200123.00
}]
var data = [];
var IndustryArr = [];
var indicator = [];
mapData.forEach(item=>{
    data.push(item.value)
    IndustryArr.push(item.name)
})
var max = data.sort((a,b)=>a-b)[data.length-1]
var randomNum = Math.round(Math.random() * 5+1)

let colorList = ["#0B32B0", "#75B4FF"];
for (var i = 0; i < randomNum; i++) {
    indicator.push({
        max: max,
        name: mapData[i].name,
        value:mapData[i].value,
    })
}
var option
if (indicator.length >= 3) {
    option = {
        tooltip: {},
        backgroundColor:"#fff",
        radar: [{
            indicator: indicator,
            center: ["50%", "50%"],
            splitNumber: 6,
            name: {
                formatter: "{value}",
                textStyle: {
                    color: "#666",
                },
            },
            splitArea: {
                areaStyle: {
                    color: [
                        "rgba(178, 199, 255, 1)",
                        "rgba(191, 208, 255, 1)",
                        "rgba(204, 218, 255, 1)",
                        "rgba(217, 227, 255, 1)",
                        "rgba(229, 236, 255, 1)",
                        "rgba(242,246,255,1)",
                    ],
                    shadowColor: "rgba(0, 0, 0, 0.3)",
                },
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0.2)",
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255, 255, 255, 0)",
                },
            },
        }, ],
        series: [{
            name: "雷达图",
            type: "radar",
            emphasis: {
                areaStyle: {
                    color: "rgba(164, 199, 255, 1)",
                },
            },
            data: [{
                value: [...data],
                name: "行业贷款分布",
                areaStyle: {
                    color: "rgba(11, 50, 176, 0.1)",
                },
                lineStyle: {
                    color: "rgba(25, 86, 224, 1)",
                },
            }, ],
        }, ],
    };
} else {
 option = {
     backgroundColor: "#ffffff",
     title: {
          text: "信息状态",
          subtext: "",
          textStyle: {
            fontSize: 20,
            color: "#999",
            lineHeight: 32,
          },
          subtextStyle: {
            fontSize: 28,
            color: "#333",
          },
          textAlign: "center",
          left: "50%",
          top: "34%",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%",
        },
        legend: {
          itemGap: 10,
          bottom: 100,
          left: "center",
          
          itemWidth:30,
          itemHeight:24,
          selectedMode: true,
          data: indicator,
          textStyle: {
            fontSize: "18px",
            color: "rgba(127, 161, 253, 1)",
          },
        },
        color: colorList,
     series: [
          {
            name: "会计人员统计：",
            type: "pie",
            radius: [150, 200],
            center: ["50%", "36%"],
            label: {
              show: false,
            },
            itemStyle:{
              borderRadius: 20,
                borderColor: '#fff',
                borderWidth: 12
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "12",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: indicator,
          },
          {
            type: 'pie',
            hoverAnimation: false,
            radius: [100, 110],
            center: ['50%', '36%'],
            tooltip: {
                show: false
            },
            itemStyle:{
              borderRadius: 20,
              borderColor: '#fff',
              borderWidth: 6
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: false,
                    formatter:'{num|{d}} \n {name|{b}}',
                    rich: {
                        num: {
                            align: 'center',
                            fontSize: '30',
                            fontWeight: 'bold'
                        },
                        name:{
                            color:'#000000',
                            fontSize: '20',
                        }
                    }
                }
            },
             data: indicator
         },

        ],
 };
}