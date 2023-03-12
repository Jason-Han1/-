var xdata = ['06.20', '06.21', '06.22', '06.23', '06.24', '06.25', '06.26'];
var dataArr = [20, 30, 30, 32, 40, 35, 23];
option = {
    backgroundColor: 'rgba(13,12,24,.5)',
    title: {
        // text: 'Awesome Chart'
    },
    legend: {
        right: 20,
        icon: 'line',
        textStyle: {
            color: '#fff', // 图例文字颜色
            fontSize: 16,
        }
    },
     tooltip: { // 提示框组件
        trigger: 'axis',
        show:true,
        formatter:function(params){
            return params[0].name + "<br>"  + params[0].data + '%'  ;
        }
    },
    xAxis: {
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#fff'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#053162',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        data: xdata
    },
    yAxis: {
        max: 50,
        axisLabel: {
            formatter: '{value}%',
            color: '#65F5FD',
            fontSize: 16
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#65F5FD',
                // fontSize:33
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,.1)'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            // name: '完成量',
            type: 'line',
            smooth: true,
            symbol: "circle", //拐点的形状
            symbolSize: 10,
            itemStyle: {
                normal: {
                    lineStyle: {
                        //折点的颜色
                        color: "#00E4FF"
                    },
                    color: "#fff", //拐点的颜色
                    borderColor: "#00E4FF" //拐点边框的颜色
                }
            },
            data: dataArr
        },

    ]
};