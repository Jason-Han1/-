var datas = {
    company: "%",
    xdata: [2016, 2017, 2018, 2019],
    dataArr: [139.1, 121.3, 80.0, 61.5]
}
var ydata = [];
var scale = 1;
var color='rgba(0,254,255,';
var maxYdata = [];
for (var i = 0; i < datas.dataArr.length; i++) {
    var item = scale;
    ydata.push(item);
    maxYdata.push(100)
};
var normalColor = "#94a1a9";
option = {
    title: {
        textStyle: {
            fontSize: 14
        }
    },
    tooltip: { // 提示框组件
        trigger: 'axis',
        show: true,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            return params[0].name + "年" + params[0].data + datas.company;
        }
    },
    grid: {
        left: '3%',
        right: '10%',
        bottom: '10%',
        top: '15%',
        containLabel: true,
        show: false // 网格边框是否显示，上和右边框 
    },
    xAxis: {
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        axisLabel: {
            color: normalColor,
            fontSize: 16,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: normalColor,
            }
        },
        splitLine:{
          show:false,
          lineStyle:{
              type:"dashed",
              color:normalColor
          }
        },
        data: datas.xdata
    }
     ,
    yAxis: [{
        name: "kW",
        nameTextStyle:{
             fontSize: 16,
        },
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: normalColor,
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            color: normalColor,
            fontSize: 16,
            // margin: 25,
            formatter: '{value}'
        },
        splitLine:{
          show:true,
          lineStyle:{
              type:"dashed",
              color:normalColor
          }
        },
    }, {
        name: "",
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: normalColor,
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
           show: false,
        },
        splitLine:{
          show:false,
         
        },
    }, ],

    series: [{
        name: '',
        type: 'bar',
        stack: '1',
        zlevel: 2,
        barGap: '50%',
        barWidth: '40%',
        barCategoryGap: "50%",
        color: normalColor,
       
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color +'.5)'
                }, {
                    offset: 1,
                    color: 'rgba(25,94,122,0.8)'
                }]),
                label: {
                    show: false,
                }

            }
        },
        data: datas.dataArr
    }, {
        name: '',
        type: 'bar',
        stack: '1',
        zlevel: 2,
        barGap: '50%',
        barWidth: '40%',
        itemStyle: {
            normal: {
                color: color +'1)',
            },

        },
        data: ydata
    }, {
        name: '',
        type: 'bar',
         barGap: '-100%',
        yAxisIndex: 1,
        zlevel: 1,
        itemStyle: {
            normal: {
                color: 'rgba(25,94,122,0.3)',
                borderWidth: 0,
                shadowBlur: {
                    shadowColor: 'rgba(61, 69, 79,0.31)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 2,
                },
            }
        },
        barWidth: '40%',
        data: maxYdata
    }]
};