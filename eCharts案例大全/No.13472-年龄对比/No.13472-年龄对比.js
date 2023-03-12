let _fFamily = '微软雅黑, "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "Microsoft YaHei", STHeiti, "WenQuanYi Micro Hei", SimSun, sans-serif';
let _itemStyle = {
    normal: {},
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
}
option = {
    color: ['#6784E3', '#3BB8FF', '#FFC62E', '#FF9631', '#87D14B'],
    title: {
        text: '年龄对比',
        textStyle: {
            color: '#444',
            fontSize: 20,
            fontFamily: _fFamily,
            fontWeight: 'normal',
        },
        left: 24,
        top: 16,
    },
    grid: {
        top: 104,
        left: 76,
        bottom: 97,
        right: 45
    },
    legend: {
        data: ['18岁以内', '19-25岁', '26-35岁', '36-45岁', '46-60岁'],
        bottom: 26,
        textStyle: {
            color: '#555',
            fontFamily: _fFamily,
            fontSize: 14
        },
        itemGap: 34,
        itemWidth: 10,
        itemHeight: 10
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        padding: [0, 0, 0, 0],
        textStyle: {
            color: '#333'
        },
        axisPointer: {
            type: 'line',
            animation: true,
            lineStyle: {
                color: 'transparent'
            }
        },
        extraCssText: 'box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)',
        formatter: (params, ticket, callback) => {
            let htmls = '',
                xaxisName = '';
            if (params.length > 0) {
                xaxisName = params[0].axisValue;
                htmls += '<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">' + xaxisName + '</div><div>';
                for (let j = 0; j < params.length; j++) {
                    htmls += '<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">' + params[j].seriesName + ' : ' + params[j].data + '%</p>';
                }
                htmls += '</div>';
                return htmls;
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        },
        top: 16,
        right: 39
    },
    yAxis: {
        name: '人次',
        type: 'value',
        nameRotate: 1,
        splitLine: {
            lineStyle: {
                color: '#EBEBEB'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 13,
            fontFamily: _fFamily,
            color: '#666'
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#888'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 13,
            fontFamily: _fFamily,
            color: '#666'
        },
        data: ['楼层1', '楼层2', '楼层3', '楼层4', '楼层5']
    },
    series: [{
        name: '18岁以内',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        data: ['8', '7', '5', '3', '4']
    }, {
        name: '19-25岁',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        data: ['7', '2', '9', '1', '12']
    }, {
        name: '26-35岁',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        data: ['12', '5', '3', '8', '9']
    }, {
        name: '36-45岁',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        data: ['6', '12', '8', '4', '7']
    }, {
        name: '46-60岁',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        data: ['9', '4', '7', '11', '6']
    }]
};