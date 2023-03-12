function H24(){
    var arr = [];
    for(var i=0;i<24;i++){
        arr.push(i+'时');
    }
    return arr;
}
option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // color: ["#F58080", "#47D8BE", "#F9A589"],
        data: ['最长'],
        left: 'right',
        top: '0'
    },
    grid: {
        left: '3%',
		right: '4%',
		bottom: '20',
		height: '80%',
		containLabel: true
    },
    xAxis: {
        type: 'category',
        data:H24(),
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    },
    yAxis: {
        type: 'value',
        data:[123,123,123,123,123,123],
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#999'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#999"
            }
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    },
    series: [{
            name: '最长',
            type: 'line',
            data: [800,900,220,130,660,289],
            color: "#F58080",
            lineStyle: {
                normal: {
                    width: 5,
                    color: {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: '#FFCAD4' // 0% 处的颜色
                        }, {
                            offset: 0.4,
                            color: '#F58080' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#F58080' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(245,128,128, 0.5)',
                    shadowBlur: 10,
                    shadowOffsetY: 7
                }
            },
            itemStyle: {
                normal: {
                    color: '#F58080',
                    borderColor: "#F58080"
                }
            },
            smooth: true
        }
    ]
};