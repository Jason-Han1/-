//对话框图片
var uploadedDataURL = "/asset/get/s/data-1547533200844-7eBMgp66l.png";

option = {
    backgroundColor: '#FFF',
    grid: {
        top: '9%',
        bottom: '19%',
        left: '6%',
        right: '4%'
    },
    tooltip: {
        trigger: 'axis',
        label: {
            show: true
        }
    },
    xAxis: {
        boundaryGap: true, //默认，坐标轴留白策略
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        data: [
            '武汉', '襄阳', '黄冈', '荆门', '十堰', '随州',
            '鄂州', '恩施', '宜昌', '孝感', '咸宁', '仙桃',
            '潜江', '天门', '黄石', '荆州', '神农架'
        ]
    },
    yAxis: {
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(33,148,246,0.2)'
            }
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: 'rgb(245,250,254)'
            }
        }
    },
    series: [{
        type: 'line',
        symbol: 'circle',
        symbolSize: 7,
        lineStyle: {
            color: 'rgb(33,148,246)',
            shadowBlur: 12,
            shadowColor: 'rgb(33,148,246,0.9)',
            shadowOffsetX: 1,
            shadowOffsetY: 1
        },
        itemStyle: {
            color: 'rgb(33,148,246)',
            borderWidth: 1,
            borderColor: '#FFF'
        },
        label: {
            show: false,
            distance: 1,
            emphasis: {
                show: true,
                offset: [25, -2],
                //borderWidth:1,
                // borderColor:'rgb(33,148,246)',
                //formatter:'{bg|{b}\n数据量:{c}}',
                backgroundColor: {
                    image: uploadedDataURL
                },
                color: '#FFF',
                padding: [8, 20, 8, 6],
                //width:60,
                height: 36,
                formatter: function(params) {
                    var name = params.name;
                    var value = params.data;
                    var str = name + '\n数据量：' + value;
                    return str;
                },
                rich: {
                    bg: {
                        backgroundColor: {
                            image: uploadedDataURL
                        },
                        width: 78,
                        //height:42,
                        color: '#FFF',
                        padding: [20, 0, 20, 10]
                    },
                    br: {
                        width: '100%',
                        height: '100%'
                    }

                }
            }
        },
        data: [
            2000, 1800, 2800, 900, 1600, 2000,
            3000, 2030, 1356, 1900, 4000, 3000,
            2000, 3000, 4200, 3200, 3800
        ]
    }]
};