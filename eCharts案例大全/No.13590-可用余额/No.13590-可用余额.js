//  颜色集合
var colorList = [
    '#66c5d7', '#11c88c', '#989cff', '#ffa55d', '#9c7de1', '#5d9eff', '#ffdb5d', '#ee82ed', '#8fca5f', '#b995f5'
];

// 总和
var total = {
    value: '90.55',
    name: '可用余额'
}

var originalData = [{
    value: 55,
    name: 'IOS'
}, {
    value: 70,
    name: '安卓国内'
}, {
    value: 25,
    name: "安卓海外"
}];

var legendData = [];
for (var n in originalData) {
    originalData[n]['name'] = originalData[n]['name'] + ' ' + originalData[n]['value'] + '%';
    legendData.push(originalData[n]['name'])
}

echarts.util.each(originalData, function(item, index) {
    item.itemStyle = {
        normal: {
            color: colorList[index]
        }
    };
});

option = {
    legend: {
        orient: 'vertical',
        x: 'center',
        y: 'bottom',
        data: legendData
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
    },
    backgroundColor: '#ffffff',
    title: [{
        text: '资产总额：1500.00元',
        left: '3%',
        top: '3%',
        x: 'left',
        textStyle: {
            formatter: [
                '{a|这段文本采用样式a}',
                '{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}'
            ].join('\n'),
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 10
                },
                b: {
                    backgroundColor: {
                        image: 'xxx/xxx.jpg'
                    },
                    height: 40
                },
                x: {
                    fontSize: 18,
                    fontFamily: 'Microsoft YaHei',
                    borderColor: '#449933',
                    borderRadius: 4
                }
            }
        }
    }, {
        text: total.name,
        left: '49%',
        top: '46%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#999',
            fontWeight: 'normal',
            fontSize: 20
        }
    }, {
        text: total.value + '%',
        left: '49%',
        top: '51%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            color: '#666',
            fontWeight: 'normal',
            fontSize: 40
        }
    }],
    series: [{
        hoverAnimation: false, //设置饼图默认的展开样式
        radius: [100, 150],
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 0, //选中是扇区偏移量
        clockwise: true,
        startAngle: 90,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                borderWidth: 0,
                shadowBlur: 5,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.2)'
            }
        },
        data: originalData
    }]
};
myChart.setOption(option, true);