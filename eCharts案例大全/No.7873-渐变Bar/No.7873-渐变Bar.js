
// 指定图表的配置项和数据
var option = {
    tooltip: {
        show: false
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%',
    },
    xAxis: {
        data: ['平均CPU率', '平均内存利用率', '平均硬盘利用率'],
        offset: 15,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#fff',
            fontSize: 14
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        barGap:'20%',
        label: {
            show: true,
            position: 'top',
          
            color: '#2979ff',
            fontSize: 14,
            formatter: params => {
                    return '{a|' + params.name + '}\n' +
                        '{b|' + params.value + '}次'
                },
                rich: {
                    a: {
                       padding:[7,10],
                       backgroundColor:'rgba(128,128,128,.5)',
                        color: '#fff',
                        fontSize: 14,
                      
                    },
                    b: {
                      
                        color: '#fff',
                        fontSize: 25,
                        align:'center',
                        lineHeight: 36
                    }
                }
        },
        itemStyle: {
            color:  {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0, 192, 255, 1)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        barWidth: '20%',
        data: [49, 80, 67],
        z: 11
    },{
        type: 'bar',
        barGap:'10%',
        label: {
            show: false,
            position: 'top',
            padding: 10,
            color: '#2979ff',
            fontSize: 14,
            formatter: function (p){
                //console.log(p);
                return p.value;
            }
        },
        itemStyle: {
            color:  {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: 'rgba(141, 121, 255, 1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0, 192, 255, 1)' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            }
        },
        barWidth: '20%',
        data: [49, 75, 85],
        z: 10
    }],
    backgroundColor: "#190c12",
};