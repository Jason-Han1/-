var data_val = [2220, 1682, 2791, 3000, 4090, 3230, 2910],
    xAxis_val = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var data_val1 = [0, 0, 0, 0, 0, 0, 0];
var option = {
    grid: {
        left: 10,
        top: '10%',
        bottom: 20,
        right: 40,
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            shadowStyle: {
                // color: "#7083db",
                color: "rgba(255, 255, 255, 0.26)"
              },
            // label: {
            //     show: true,
            //     formatter: function (params) {
            //         return params.seriesData[0].value
            //         // 假设此轴的 type 为 'time'。
            //     },
            //     margin: -470,
            //     backgroundColor: '#7083db',
            //     borderWidth:200,
            //     color:'#fff'
            // },
        },
        
    },
    xAxis: {
        data: xAxis_val,
        boundaryGap: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
            },
        },
    },
    yAxis: {
        ayisLine: {
            show: false,
        },
        // x轴刻度线文字颜色
        axisLabel: {
            textStyle: {
                color: '#5c6076',
            },
        },
        // x轴线
        splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        // Y轴
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
    },
    series: [
        {
            type: 'line',
            name: 'linedemo',
            smooth: true,
            symbolSize: 10,
            animation: false,
            lineWidth: 1.2,
            hoverAnimation: false,
            data: data_val,
            symbol: 'circle',
            itemStyle:{
                normal: {
                    color: '#7083db',
                },
            },
            lineStyle: {
                normal: {
                    width: 5,
                    shadowBlur: 5,
                    shadowColor: '#7083db',
                    shadowOffsetY: 8
                }
            },
            // 瀑布
            areaStyle: {
                normal: {
                    color: '#7083db',
                    opacity: 0.16,
                },
            },
        },
    ],
};
myChart.setOption(option);
