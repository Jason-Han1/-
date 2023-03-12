// var color = ['#a768d8','#bb79ee','#8249ae','#511f77','#3d0e61'];
// var color = ['#ffb800','#ffc500','#ffa800','#ff7900','#ff6600']
var color = ['#00da07', '#00ed03', '#00b70d', '#007a19', '#00641d']
var option = {
    backgroundColor: "#000",
    title: {
        text: '“中国”经济社会发展综合评价指数-卓越竞争型',
        subtext: '纯属虚构',
        left: '50%',
        top: '30',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
        }
    },
    tooltip: {
        formatter: "{a} <br/>{c} {b}"
    },
    series: [{
        name: '指数', //需要更改的
        type: 'gauge',
        center: ['50%', '70%'],
        min: 0,
        max: 100,
        splitNumber: 5,
        startAngle: 180, //总的360，设置180就是半圆
        endAngle: 0,
        radius: '110%',
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.2, color[0]],
                    [0.4, color[1]],
                    [0.6, color[2]],
                    [0.8, color[3]],
                    [1, color[4]]
                ],
                width: 30, //调节图表宽度
            }
        },
        axisLabel: {
            distance: 2,
            textStyle: {
                color: "#7887ae",
                fontSize: "0",
            }
        },
        detail: {
            show: false,
            color: '#f00',
            // shadowColor: '#fff', //默认透明
            // shadowBlur: 5,
            offsetCenter: [0, '50%'], // x, y，单位px
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
            }
        },
        data: [{
            value: [38.9248],
        }]
    }, ]
};