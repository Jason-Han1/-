  
/**   
 * pictorialBar 有一个数据为0时的bug
 * 数组中的数据中有  0  会产生bug 
 * 解决方法： 
 * 循环遍历，有0 的话，改成0.1，悬浮时通过formatter函数去修改成0
 * 添加点击事件，如果出现点击的数据和console的数据不一样，那就是盖住了，
 * 解决方法：加宽当前盒子，grid使用left往右移动，盒子margin-left往左移动，隐藏掉当前空白的区域
* **/
// 遍历月份
  var weekStr = "";
  for (let k = 1; k <= 12; k++) {
    weekStr += k + "月份,";
  }
  
  var weekData = weekStr.substring(0, weekStr.lastIndexOf(",")).split(",");

option = {
     title: {
        text: '百分比',
        textStyle: {
            fontWeight: 'bold',
            fontSize: 14,
            color: '#0ab7ff'
        },
        left: '5%',
        top: '25'
    },
     toolbox: {
          // 工具栏
          itemSize: 20,
          showTitle: false,
          right: 24,
          feature: {
            myTool: {
              //自定义工具 myTool
              show: true,
              title: "全屏显示",
              icon: "image://" + "images/full.png", //此处 图片路径前面必须加字符串  "image://"
              onclick: function () {
                //生成全屏显示的图表
                if (setFullScreenToolBox(optionSalesBottom1)) {
                  getChartData(chartScreen);
                }
              },
            },
          },
        },
   legend: {
		right:'6%',
		top:'9',
        itemWidth: 15,
        itemHeight: 15,
     icon: "circle",
        textStyle: {
            
            fontSize: 12,
            color: "#0ab7ff",
          },
    },
     tooltip: {
        trigger: 'axis',
         textStyle: {
            fontSize: 12,
          },
    },
    grid: {
          left: "2%",
          right: "2%",
          bottom: "5%",
          top: "16%",
           containLabel: true,
        },
    
    xAxis: [
        {
            type: 'category',
            
             axisLine: {
              lineStyle: {
                color: "#0ab7ff",
                fontSize: 8,
              },
            },
            data: weekData
        },
        
    ],
    yAxis: [
          {
            type: "value",
             splitLine: {
            lineStyle: {
              color: "rgba(31,86,146,0.7)",
            },
          },
            //  min: 0,
            // max: 100,
             axisLabel: {
                formatter: '{value}%',
                color: '#0ab7ff',
                  interval: 'auto',  
                textStyle: {
                    fontSize: 12
                },
            },
            axisLine: {
              lineStyle: {
                color: "#0ab7ff",
              },
            },
          },
        ],
    series: [
        {
            name:'福彩',
              type: "pictorialBar",
              symbol:"triangle",
              stack:"aaa",
            barWidth: 20,
              itemStyle: {
            normal: {
                barBorderRadius: [50],
                color: new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [{
                            offset: 1,
                            color: '#FEC21D'
                        }, {
                            offset: 0,
                            color: '#FF5E1E'
                        }

                    ]
                )
            }
        },
            data:[20,30,40,50,60,70,70,60,50,40,30,20]
        },
        {
            name:'体彩',
            barWidth: 20,
              type: "pictorialBar",
              symbol:"triangle",
              stack:"aaa",
              itemStyle: {
            normal: {
                barBorderRadius: [50],
                color: new echarts.graphic.LinearGradient(
                    1, 1, 0, 0, [{
                            offset: 1,
                            color: '#27D7E9'
                        }, {
                            offset: 0,
                            color: '#038CEF'
                        }

                    ]
                )
            }
        },
            data:[10,20,30,40,50,60,60,50,40,30,20,10]
        }
    ]

};
