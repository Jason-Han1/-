var datas = {
    company: "%",
    xdata: [2016, 2017, 2018, 2019],
    dataArr: [39.1, 21.3, 80.0, 61.5]
}
var ydata = [];
var scale = 1;
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
    xAxis: [{
        // name: "杆塔号",
        // nameTextStyle: {
        //     fontSize: 14,
        //     color: normalColor
        // },
        // nameGap: 30,
        // nameLocation: 'middle',
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
          show:true,
          lineStyle:{
              type:"dashed",
              color:normalColor
          }
        },
        data: datas.xdata
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: datas.xdata,
    }],
    yAxis: [{
        name: "",
        type: 'value',
        // min: min,
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
            margin: 25,
            formatter: '{value}' + datas.company
        },
        splitLine:{
          show:true,
          lineStyle:{
              type:"dashed",
              color:normalColor
          }
        },
    }, ],

    series: [{
        name: '',
        type: 'bar',
        stack: '杆塔号',
        zlevel: 2,
        barGap: '50%',
        barWidth: '40%',
        barCategoryGap: "50%",
        color: normalColor,
        markLine: {
            label: {
                color: "#77d8ff",
                fontSize: 14,
                formatter: "{b}"
            },
            lineStyle: {
                type: "solid"
            },
            data: [

                {
                    name: '2020目标',
                    yAxis: 100
                },
            ]
        },
        markArea: {
             silent:true,//是否触发鼠标事件
            itemStyle: {
                color: 'rgba(61, 69, 79,0.1)',
                borderWidth:1,
                borderType:"dashed",
                borderColor:normalColor
            },
            label: {
                color: normalColor,
                fontSize: 14,
                formatter: "{b}",
                position: 'right'
            },
            data: [
                [{
                        name: '世界一流区间',
                        yAxis: "20"
                    },
                    {
                        yAxis: "80"
                    }
                ]
            ],
        },
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#3bbeff'
                }, {
                    offset: 1,
                    color: '#2de6f8'
                }]),
                label: {
                    show: true,
                    textStyle: {
                        color: "#fff",
                        fontSize: 30,

                    },
                    formatter: function(params) {
                        return params.value + datas.company;
                    },
                    position: "top",
                    padding: 20
                }

            }
        },
        data: datas.dataArr
    }, {
        name: '杆塔号',
        type: 'bar',
        stack: '杆塔号',
        zlevel: 2,
        barGap: '50%',
        barWidth: '40%',
        itemStyle: {
            normal: {
                color: '#c3e9ff',

            },

        },
        data: ydata
    }, {
        name: '',
        type: 'bar',
        xAxisIndex: 1,
        zlevel: 1,
        itemStyle: {
            normal: {
                color: 'rgba(61, 69, 79,0.5)',
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