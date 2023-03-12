/*
带背景样式请查看：http://js.jirengu.com/zuqic/10/
*/
var bg1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYyQjFDRTg1QkQyMjExRUJBQURCRDc0MzMxNjQwMTI0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYyQjFDRTg2QkQyMjExRUJBQURCRDc0MzMxNjQwMTI0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjJCMUNFODNCRDIyMTFFQkFBREJENzQzMzE2NDAxMjQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjJCMUNFODRCRDIyMTFFQkFBREJENzQzMzE2NDAxMjQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz46mwWBAAAAXklEQVR42mL8MdvvPwMDwzUgdgDi1wxQwATEd4BYC4h3ADE/soQTED8BYiMg3gbEXDCJx0DsCMQvgdgKiDcBMRsTVCfIOFcgfgfEzkA8EyYBApeB2AuIPwKxCkCAAQCD5RDuLTy8VwAAAABJRU5ErkJggg==';
var bg2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMyN0FFNEFEQkQyMzExRUJCMzYzQUMxQzcwQzJCMEJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMyN0FFNEFFQkQyMzExRUJCMzYzQUMxQzcwQzJCMEJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzI3QUU0QUJCRDIzMTFFQkIzNjNBQzFDNzBDMkIwQkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzI3QUU0QUNCRDIzMTFFQkIzNjNBQzFDNzBDMkIwQkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5ZmSuuAAAAHklEQVR42mJgPP/7P1/78v9AwICMmRhwAHpIAAQYAB4sEQR8cDgJAAAAAElFTkSuQmCC';
var back1 = new Image();
back1.src = bg1;
var back2 = new Image();
back2.src = bg2;

var colorArr = ['#218de0', '#01cbb3', '#85e647', '#5d5cda', '#05c5b0', '#c29927'];
var colorAlpha = [
    'rgba(60,170,211,0.05)',
    'rgba(1,203,179,0.05)',
    'rgba(133,230,71,0.05)',
    'rgba(93,92,218,0.05)',
    'rgba(5,197,176,0.05)',
    'rgba(194,153,39,0.05)',
];

// 绿色时钟Series Data
var greenPieData = [
    {
        value: 50,
        name: '服务器',
        itemStyle: {
            emphasis: {
                color: 'rgba(23, 240, 204,0.1)',
            },
        },
    },
    {
        value: 50,
        name: '数据库',
        itemStyle: {
            emphasis: {
                color: 'rgba(23, 240, 204,0.1)',
            },
        },
    },
    {
        value: 50,
        name: '中间件',
        itemStyle: {
            emphasis: {
                color: 'rgba(23, 240, 204,0.1)',
            },
        },
    },
    {
        value: 50,
        name: '网络设备',
        itemStyle: {
            emphasis: {
                color: 'rgba(23, 240, 204,0.1)',
            },
        },
    },
    {
        value: 50,
        name: '安全设备',
        itemStyle: {
            emphasis: {
                color: 'rgba(23, 240, 204,0.1)',
            },
        },
    },
    {
        value: 50,
        name: '其他',
        itemStyle: {
            emphasis: {
                color: 'rgba(23, 240, 204,0.2)',
            },
        },
    },
];

// 蓝色海螺 Series Data
var bluePieData = [
    {
        value: 40,
        name: '服务器',
        msg:'在线数：90',
        itemStyle: {
            borderColor: colorArr[0],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[0],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            //color:colorAlpha[0]
        },
    },
    {
        value: 60,
        name: '数据库',
        itemStyle: {
            borderColor: colorArr[1],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[1],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            //color:colorAlpha[1]
        },
    },
    {
        value: 15,
        name: '中间件',
        itemStyle: {
            borderColor: colorArr[0],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[0],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            //   color:colorAlpha[0]
        },
    },
    {
        value: 36,
        name: '网络设备',
        itemStyle: {
            borderColor: colorArr[1],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[1],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            //   color:colorAlpha[1]
        },
    },
    {
        value: 20,
        name: '安全设备',
        itemStyle: {
            borderColor: colorArr[0],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[0],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            //   color:colorAlpha[0]
        },
    },
    {
        value: 30,
        name: '其他',
        itemStyle: {
            borderColor: colorArr[1],
            borderWidth: 2,
            shadowBlur: 20,
            shadowColor: colorArr[1],
            shadowOffsetx: 25,
            shadowOffsety: 20,
            //   color:colorAlpha[1]
        },
    },
];

// 角度对应的时间
var deg_clock = {
    30: '服务器',
    90: '数据库',
    150: '中间件',
    210: '网络设备',
    270: '安全设备',
    330: '其他',
};

// 区域带透明度的背景色
var splitAreaColor = [
    'rgba(24, 237, 201,0.1)',
    'rgba(24, 237, 201,0.1)',
    'rgba(24, 237, 201,0.2)',
    'rgba(24, 237, 201,0.2)',
    'rgba(24, 237, 201,0.3)',
    'rgba(24, 237, 201,0.3)',
    'rgba(24, 237, 201,0.3)',
    'rgba(24, 237, 201,0.3)',
    'rgba(24, 237, 201,0.2)',
    'rgba(24, 237, 201,0.2)',
];

// 根据时钟区域下标找到对应图片
function formatterClockPic(i) {
    if (i == -1 || i === 0 || i == 23) {
        return '{imgOwi|}';
    }
    if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 19 || i == 21 || i == 22) {
        return '{imgMoon|}';
    }
    if (i == 6) {
        return '{imgOffice|}';
    }
    if (i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 13 || i == 14 || i == 15 || i == 17) {
        return '{imgSun|}';
    }
    if (i == 12 || i == 18) {
        return '{imgMeal|}';
    }
    if (i == 16) {
        return '{imgCoffee|}';
    }
    if (i == 20) {
        return '{imgPc|}';
    }
}

function tooltipFormatterClockPie(i) {
    if (i == -1 || i === 0 || i == 23) {
        return '<img src="https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg">';
    }
    if (i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 19 || i == 21 || i == 22) {
        return '<img src="https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg">';
    }
    if (i == 6) {
        return '<img src="https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg">';
    }
    if (i == 7 || i == 8 || i == 9 || i == 10 || i == 11 || i == 13 || i == 14 || i == 15 || i == 17) {
        return '<img src="https://tongji.baidu.com/research/img/icon-day.5342b895fe23eafdb202b563ee5efbab.svg">';
    }
    if (i == 12 || i == 18) {
        return '<img src="https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg">';
    }
    if (i == 16) {
        return '<img src="https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg">';
    }
    if (i == 20) {
        return '<img src="https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg">';
    }
}

// 时钟图片
var clockPic = {
    imgOwi: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg',
        },
        width: 16,
        height: 16,
        fontSize: 16,
    },
    imgMoon: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg',
        },
        width: 16,
        height: 16,
        fontSize: 16,
    },
    imgOffice: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg',
        },
        width: 16,
        height: 16,
        fontSize: 16,
    },
    imgSun: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-day.5342b895fe23eafdb202b563ee5efbab.svg',
        },
        width: 16,
        height: 16,
        rotate: 0,
        fontSize: 16,
    },
    imgMeal: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg',
        },
        width: 16,
        height: 16,
        fontSize: 16,
    },
    imgCoffee: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg',
        },
        width: 16,
        height: 16,
        fontSize: 16,
    },
    imgPc: {
        backgroundColor: {
            image: 'https://tongji.baidu.com/research/img/icon-night.3b047760d6f945c29dd9c38c05428751.svg',
        },
        width: 16,
        height: 16,
        fontSize: 16,
    },
};
/*-------------------------------------------------------------------------------------*/
// 设置背景色
document.getElementsByTagName('body')[0].style.backgroundColor = "#041a40";//'rgba(13, 17, 29)';

var eleChart = document.getElementById('chart-panel');
var chart = echarts.init(eleChart);

var option = {
    polar: {
        radius: ['30%', '60%'],
        center: ['50%', '50%'],
    },
    // 极坐标
    angleAxis: {
        // min: 0,
        // max: 100,
        startAngle: 91,
        //         interval: 28,
        clockwise: true, //顺时针
        zlevel: 1,
        // 圆线
        axisLine: {
            show: false,
        },
        // 圆线上的刻度
        axisTick: {
            show: false,

            lineStyle: {
                color: '#fff',
            },
        },
        // 圆线上的刻度标签
        axisLabel: {
            color: '#fff',
            interval: '2',
            fontWeight: 'bold',
            formatter: function (deg) {
                // var str = "<div style='color:#ff0'>"+deg_clock[deg]+"</div>";
                // return str;
               // return deg_clock[deg];
            },
        },
        // 圆中直区域分割线
        splitLine: {
            show: true,
            lineStyle: {
                color: ['rgba(26, 28, 38)'],
            },
        },
        // 圆中被分割的区域
        splitArea: {
            show: false,
            areaStyle: {
                color: splitAreaColor,
            },
        },
    },
    // 刻度
    axisTick: {
        show: false,
        lineStyle: {
            color: '#fff',
        },
    },
    // 刻度标签
    axisLabel: {
        show: false,
    },
    radiusAxis: {
        show: false,
    },
    tooltip: {
        trigger: 'item',
    },

    series: [
        {
            name: 'green',
            type: 'pie',
            radius: ['30%', '60%'],
            center: ['50%', '50%'],
            roseType: 'radius',
            zlevel: 2,
            tooltip: {
                show: false,
            },
            label: {
                show: true,
                formatter: '',
                position: 'center'//'inside',//'outside',
            },
            emphasis: {
                label: {
                    show: true,
                    // formatter: function (params) {
                    //     return formatterClockPic(params.dataIndex - 1);
                    // },
                    // rich: clockPic,
                     //formatter: ['在线率：','{a|{d}%}', '{c|在线数：{c}}'].join('\n'),
                     formatter:['{a|{d}%}', '{c|总在线率}','{b|总在线数：{c}}'].join('\n'),
                     rich: {
                        a: {
                            color: '#fff',
                            fontSize: 32,
                            lineHeight: 46,
                            verticalAlign: 'bottom',
                        },
                        b: {
                            color: '#a7a9c7',
                            fontSize: 12,
                            lineHeight: 30,
                        },
                        c: {
                            color: '#fff',
                            fontSize: 12,
                            lineHeight: 24,
                        },
                    },
                    
                    color: '#fff',
                },
            },
            labelLine: {
                show: false,
                length: 40,
                length2: 0,
            },
            hoverAnimation: false, //hover时是否有放大效果
            itemStyle: {
                normal: {
                    color: 'rgba(23, 240, 204,0)',
                },
                emphasis: {
                    color: 'rgba(23, 240, 204)',
                },
            },
            data: greenPieData,
        },
        {
            name: 'blue',
            type: 'pie',
            // selectedOffset: 30,

            radius: ['30%', '60%'],
            center: ['50%', '50%'],
            roseType: 'area', //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：radius/area
            tooltip: {
                show: false,
            },
            label: {
                show: true,
                position:'inside', //'outside',//'inside',
                color: 'rgba(13, 17, 29,0)',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold',
                    formatter: ['{c|在线率：}','{a|{d}%}', '{c|在线数：{c}}'].join('\n'),
                    rich: {
                        a: {
                            color: '#af0',
                            fontSize: 24,
                            lineHeight: 30,
                            verticalAlign: 'bottom',
                        },
                        b: {
                            color: '#a7a9c7',
                            fontSize: 12,
                            lineHeight: 12,
                        },
                        c: {
                            color: '#fff',
                            fontSize: 12,
                            lineHeight: 10,
                        },
                    },
                },
            },
            labelLine: {
                show: false,
            },
            zlevel: 3,
            hoverAnimation: false, //hover时是否有放大效果
            clockwise: true, //饼图的扇区是否是顺时针排布
            startAngle: 90, //起始角度
            minAngle: 40, //最小的扇区角度（0 ~ 360），用于防止某个值过小导致扇区太小影响交互
            itemStyle: {
                normal: {
                    //color: 'rgba(57, 111, 255)',
                    color: {
                        image: back2,
                        repeat: 'repeat',
                    },
                    // borderWidth: 13,
                    // borderColor: '#212121',
                    // shadowBlur: 200,
                },
                // normal: {
                //     color: new echarts.graphic.RadialGradient(0.3, 0.3, 1, [
                //         //  color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                //         {
                //             offset: 0,
                //             color: '#0ff',
                //         },
                //         {
                //             offset: 1,
                //             color: '#5467df',
                //         },
                //     ]),
                // },
                emphasis: {
                    color: 'rgba(23, 240, 204,0.6)',
                },
            },
            data: bluePieData,
        },
    ],
};

chart.setOption(option);

/*-------------------------------------------------------------------------------------*/

var arr = [0, 1, 2, 3, 4, 5];

// 默认高亮
chart.dispatchAction({
    type: 'highlight',
    // 可选，系列 index，可以是一个数组指定多个系列
    seriesIndex: [0, 1],
    // 可选，数据的 index
    dataIndex: 0,
});

chart.on(
    'mouseover',
    {
        seriesIndex: 0,
    },
    function (e) {
        // 取消高亮
        chart.dispatchAction({
            type: 'downplay',
            // 可选，系列 index，可以是一个数组指定多个系列
            seriesIndex: [0, 1],
            // 可选，数据的 index
            dataIndex: arr,
        });
        // 设置高亮
        chart.dispatchAction({
            type: 'highlight',
            // 可选，系列 index，可以是一个数组指定多个系列
            seriesIndex: [0, 1],
            // 可选，数据的 index
            dataIndex: e.dataIndex,
        });
        // 隐藏24小时图标
        chart.dispatchAction({
            type: 'hideTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: [1],
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: arr,
        });
        // 显示24小时图标
        chart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: [1],
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: e.dataIndex,
            // 本次显示 tooltip 的位置。只在本次 action 中生效。
            // 缺省则使用 option 中定义的 tooltip 位置。
            position: [100, 200],
        });
    }
);

chart.on(
    'mouseover',
    {
        seriesIndex: 1,
    },
    function (e) {
        // 取消高亮
        chart.dispatchAction({
            type: 'downplay',
            // 可选，系列 index，可以是一个数组指定多个系列
            seriesIndex: [0, 1],
            // 可选，数据的 index
            dataIndex: arr,
        });
        // 设置高亮
        chart.dispatchAction({
            type: 'highlight',
            // 可选，系列 index，可以是一个数组指定多个系列
            seriesIndex: [0, 1],
            // 可选，数据的 index
            dataIndex: e.dataIndex,
        });
        // 隐藏24小时图标
        chart.dispatchAction({
            type: 'hideTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: [1],
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: arr,
        });
        // 显示24小时图标
        chart.dispatchAction({
            type: 'showTip',
            // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
            seriesIndex: [1],
            // 数据的 index，如果不指定也可以通过 name 属性根据名称指定数据
            dataIndex: e.dataIndex,
            // 本次显示 tooltip 的位置。只在本次 action 中生效。
            // 缺省则使用 option 中定义的 tooltip 位置。
            position: [100, 200],
        });
    }
);
