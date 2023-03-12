var colorArray = [{
        top: 'rgba(86,96,190,1)',
        bottom: 'rgba(86,96,190,0)'
    }, {
        top: 'rgba(46,122,250,1)',
        bottom: 'rgba(46,122,250,0)'
    },
    {
        top: 'rgba(150,120,249,1)',
        bottom: 'rgba(150,120,249,0)'
    },
    {
        top: 'rgba(137,146,217,1)',
        bottom: 'rgba(137,146,217,0)'
    },
    {
        top: 'rgba(90,193,233,1)',
        bottom: 'rgba(90,193,233,0)'
    },
    {
        top: 'rgba(54,150,122,1)',
        bottom: 'rgba(54,150,122,0)'
    }
];
var option = {
    backgroundColor:'rgb(18,3,68)',
    /* title: {
       text: '世界人口总量',
       subtext: '数据来自网络'
     },*/
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        }
    },
    /*legend: {
      data: ['2011年', '2012年']
    },*/
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        position: 'top',
        boundaryGap: [0, 0.01],
        splitLine: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1f3458',
                width: 2
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: '#FFFFFF'
        },
        //分割线
        splitNumber: 10,
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(250,250,250,0)', 'rgba(250,250,250,0.05)'],
            }
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1f3458',
                width: 2
            }
        },
        axisLabel: {
            show: true,
            color: '#FFFFFF'
        },
        data: ['其他', '亚洲', '非洲', '欧洲', '美洲', '大洋洲']
    },
    series: [{
        name: '',
        type: 'bar',
        data: [182, 234, 290, 104, 131, 630],
        barWidth: 50,
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 11

                }
            }
        },
        //柱体颜色
        itemStyle: {
            normal: {
                show: true,
                color: function(params) {
                    let num = colorArray.length;
                    return {
                        type: 'linear',
                        colorStops: [{
                            offset: 0,
                            color: colorArray[params.dataIndex % num].bottom
                        }, {
                            offset: 1,
                            color: colorArray[params.dataIndex % num].top
                        }, ]
                    }
                },
                barBorderRadius: 70,
                borderWidth: 0,
            }
        }
    }, ]
};