let title = '总量';
let colorList = [
'#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
'#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
'#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
'#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
]
let echartData=[
	{"name":"商品C", "value": 2289},
	{"name":"商品P", "value": 671},
	{"name":"商品D", "value": 2518},
	{"name":"商品T", "value": 200},
	{"name":"商品F", "value": 1952},
	{"name":"商品G", "value": 926},
	{"name":"商品H", "value": 4536},
	{"name":"商品I", "value": 750},
	{"name":"商品A", "value": 2373},
	{"name":"商品J", "value": 493},
	{"name":"商品K", "value": 385},
	{"name":"商品B", "value": 5449},
	{"name":"商品M", "value": 869},
	{"name":"商品L", "value": 4960},
	{"name":"商品Q", "value": 270},
	{"name":"商品N", "value": 566},
	{"name":"商品R", "value": 1077},
	{"name":"商品O", "value": 339},
	{"name":"商品E", "value": 4730},
	{"name":"商品S", "value": 920},
]
let formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);
option = {
    backgroundColor:"#000c31",
    color: colorList,
    title: [{
        text: '{name|' + title + '：}{val|' + formatNumber(total) + '}',
        top: 10,
        right: 20,
        textStyle: {
            rich: {
                name: {
                    fontSize: 24,
                    fontWeight: 'normal',
                    color: '#ff8800',
                    padding: [10, 0]
                },
                val: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#ff8800',
                }
            }
        }
    },
    {
        //text:'{name|' + title + '：}\n{val|' + formatNumber(total) + '}',
        top: "center",
        right: "center",
    }],
    series: [{
        type: 'pie',
        radius: ['35%', '50%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: true,
        itemStyle: {
            normal: {
                borderColor: colorList,
                borderWidth:2
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#e6e6e6'
                }
            }
        },
        label: {
            normal: {
                formatter:'{icon|●}{name|{b}}{value|({d}%)}',
                rich: {
                    icon: {
                        fontSize: 24
                    },
                    name: {
                        fontSize: 12,
                        padding: [0, 10, 0, 4],
                    },
                    value: {
                        fontSize: 12,
                        fontWeight: 'bold',
                    }
                }
            }
        },
    }]
};
myChart.on("highlight",(event)=>{
    let name=echartData[event.dataIndex].name;
    let value = echartData[event.dataIndex].value
    option.title[1].text='{name|' + name + '}\n{val|' + value + '}';
    option.title[1].textStyle={
        rich: {
            name: {
                fontSize: 16,
                align:"center",
                fontWeight: 'normal',
                padding:[10,0],
                color: colorList[event.dataIndex],
            },
            val: {
                fontSize: 32,
                align:"center",
                fontWeight: 'bold',
                color: colorList[event.dataIndex],
            }
        }
    }
    myChart.setOption(option);
});

autoHover(myChart, option, echartData.length, 3000);




/**
 *  echarts tooltip 自动轮播
 *  @author liuwei
 *  @param myChart  //初始化echarts的实例
 *  @param option   //指定图表的配置项和数据
 *  @param num      //类目数量(原因：循环时达到最大值后，使其从头开始循环)
 *  @param time     //轮播间隔时长
 */
function autoHover(myChart, option, num, time) {
  var defaultData = {   //设置默认值
    time: 2000,
    num: 100
  };
  if(!time){
    time = defaultData.time;
  }
  if(!num){
    num = defaultData.num;
  }
  var count = 0;
  var timeTicket = null;
  timeTicket && clearInterval(timeTicket);
  timeTicket = setInterval(function () {
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0 //serieIndex的索引值   可以触发多个
    });
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: count
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: count
    });
    count++;
    if (count >= num) {
      count = 0
    }
  }, time);
  myChart.on("mouseover", function (params) {
    clearInterval(timeTicket);
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0
    });
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: params.dataIndex
    });
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: params.dataIndex
    });
  });
  myChart.on("mouseout", function () {
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function () {
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0 //serieIndex的索引值   可以触发多个
      });
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: count
      });
      myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: count
      });
      count++;
      if (count >= defaultData.num) {
        count = 0
      }
    }, defaultData.time);
  });
}
