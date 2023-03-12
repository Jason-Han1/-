chartXData = ['无数据一', '无数据二', '无数据三', '无数据四', '无数据五'];
chartYData = [
    { value: 0, name: '无数据一' },
    { value: 0, name: '无数据二' },
    { value: 0, name: '无数据三' },
    { value: 0, name: '无数据四' },
    { value: 0, name: '无数据五' },
];

//var colorList =['#228c38', '#1a57b2', '#b04b07', '#af8108'];
var colorList = [
    '#9EEDFF',
    '#FFF693',
    '#8CC7FE',
    '#F5D0FC',
    '#F5C19B',
    '#CDFBC1',
    '#b9b7ff',
    '#FDB3B0',
    '#AC94FF',
    '#7ACC63',
];
var colorListSub = ['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
// 设置数据
function setChartOption(data) {
    const formatData = [];
    var total = 0;
    var valueT = 0;
    for (var i = 0; i < chartYData.length; i++) {
        total += chartYData[i].value;
    }
    if(total>0){
        valueT=10;
    }
    data.forEach(function (item, index) {
        formatData.push(
            {
                value: item.value,
                name: item.name,
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        borderWidth: 10,
                        shadowBlur: 12,
                        borderRadius: 10,
                        borderColor: colorList[index],
                        shadowColor: colorList[index],
                        color: colorList[index],
                    },
                },
            },
            {
                value: valueT,
                name: '',
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                        },
                        labelLine: {
                            show: false,
                        },
                        color: 'rgba(0, 0, 0, 0)',
                        borderColor: 'rgba(0, 0, 0, 0)',
                        borderWidth: 0,
                    },
                },
            }
        );
    });

    return formatData;
}
function generateData(totalNum, bigvalue, smallvalue, color) {
    let dataArr = [];
    for (var i = 0; i < totalNum; i++) {
        if (i % 4 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: bigvalue,
                itemStyle: {
                    normal: {
                        borderWidth: 8,
                        shadowBlur: 10,
                        borderRadius: 10,
                        borderColor: color,
                        shadowColor: color,
                        color: color,
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: smallvalue,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                         borderWidth: 0,
                    },
                },
            });
        }
    }
    return dataArr;
}
let dolitData = generateData(100, 25, 20, '#AC94FF');
function getOption(radius) {
    let option = {
        backgroundColor: '#0A1934',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < chartYData.length; i++) {
                                    total += chartYData[i].value;
                                }
                                if (total !== 0) {
                                    percent = ((params.value / total) * 100).toFixed(0);
                                }
                if (params.name !== '') {
                   return params.name+': '+params.value+' ('+percent+'%)';
                }else{
                    return '';
                }
            },
        },
        legend: {
            orient: 'vertical',
            textStyle: {
                color: '#fff',
            },
            right: '10%',
            top: '25%',
            show: false,
            data: chartXData,
        },
        series: [
            {
                type: 'pie',
                radius: ['50%', '75%'],
                //            roseType: 'radius',
                clockwise: false,
                z: 10,
                itemStyle: {
                    normal: {
                        label: {
                            position: 'outside',
                            alignTo: 'edge',
                            margin: 1,
                            formatter: function (params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < chartYData.length; i++) {
                                    total += chartYData[i].value;
                                }
                                if (total !== 0) {
                                    percent = ((params.value / total) * 100).toFixed(0);
                                }

                                if (params.name !== '') {
                                    return (
                                        '{b|' + params.name + '}\n{hr|}\n{d|' + params.value + ' (' + percent + '%)} '
                                    );
                                } else {
                                    return '';
                                }
                            },
                            rich: {
                                b: {
                                    fontSize: 10,
                                    color: '#fff',
                                    align: 'left',
                                    padding: 4,
                                },
                                hr: {
                                    borderColor: '#12EABE',
                                    width: '100%',
                                    borderWidth: 1,
                                    height: 0,
                                },
                                d: {
                                    fontSize: 8,
                                    color: '#fff',
                                    align: 'left',
                                    padding: 4,
                                },
                                c: {
                                    fontSize: 10,
                                    color: '#fff',
                                    align: 'center',
                                    padding: 4,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                length: 5,
                                length2: 5,
                                lineStyle: {
                                    width: 1,
                                },
                            },
                        },
                    },
                },
                data: setChartOption(chartYData),
            },
            // 中心的圆圈
            {
                color: '#FFFFFF',
                type: 'pie',
                silent: true,
                radius: [radius + 1 + '%', radius + '%'],
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                tooltip: {
                    show: false,
                },
                data: dolitData,
                animation: false,
            },
        ],
    };
    return option;
}

var timerId;
let [minradius, radius, maxradius] = [24, 24, 28]; // 初始缩放尺寸
/**let isBig = true // 缩放动画 标识
function draw() {
            if (isBig) {
                radius = radius + 0.4;
                if (radius > maxradius) {
                    isBig = false;
                }
            } else {
                radius = radius - 0.3;
                if (radius < minradius) {
                    isBig = true;
                }
            }
            let option = getOption(radius);
    myChart.setOption(option, true);
    //window.requestAnimationFrame(draw);
}
if (timerId) {
    clearInterval(timerId);
}
timerId = setInterval(function () {
    //用setInterval做动画感觉有问题
    draw();
}, 100);**/
myChart.setOption(getOption(radius), true);
