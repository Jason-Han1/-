var datas= [405, 11, 67, 234, 212, 113, 0];
var datas2=datas[datas.length-1];
option = {
    backgroundColor: '#232d4a',
    title: {
        text: '2条折线图&最后一个显示markPoint',
        textStyle: {
            color: '#ffffff',
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: [{
            name: 'name1',
        }, {
            name: 'name2',
        }],
        x: 'right',
        textStyle: {
            color: '#ffffff',
        },
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['一月', '二月', '三', '四月', '五月', '六月', '七月'],
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#ffffff',
            }
        },
        axisTick: {
            inside: true,
            alignWithLabel: true
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#ffffff'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ffffff'
            }
        }
    },
    series: [{
        name: 'name1',
        type: 'line',
        data:datas,
        symbolSize:8,
    	markPoint : {
            data : [
                { value :datas2, xAxis: datas.length-1, yAxis: datas2}
            ],
            symbolSize:40,
            itemStyle:{
                normal:{
                    label:{
                        formatter: function (param) {
                            return '当月';
                        },
                        textStyle:{
                            fontSize:10
                        }
                    }
                }

            }
        }
    }, {
        name: 'name2',
        type: 'line',
        data: [343, 76, 232, 553, 313, 32, 222],
        symbolSize:8
    }],
    lineStyle: {
                normal: {
                shadowColor: 'rgba(225,225,225,0.6)',
                shadowBlur: 3,
                shadowOffsetY: 0,
                shadowOffsetX: 0,
                opacity:1
                }
            },
           color:['#f8d377','#bc4a6d'],
}