let title = '售票数量';
let color = ['rgb(54,142,243)', 'rgb(2,217,217)', 'rgb(255,237,91)', 'rgb(255,158,91)', 'rgb(84,95,255)'];
let angle = 0; //角度，用来做简单的动画效果的
let value = [];
let data1 =[
                {value:400,name:'单程票'},
                {value:389,name:'一日票'},
                {value:489,name:'三日票'},
                {value:259,name:'预附值票'},
                {value:499,name:'纪念票'},
                ]
//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0, y0, r, angle) {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1,
    };
}
let formatNumber = function (num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
};
let total = data1.reduce((a, b) => {
    return a + b.value * 1;
}, 0);
option = {
    backgroundColor: 'rgb(0,34,69)',
    color: color,
    tooltip: {
        trigger: 'item',
    },
    title: [
        {
            text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}{c|件}',
            top: 'center',
            left: '27%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 20,
                        fontWeight: 'normal',
                        color: 'rgb(132,159,186)',
                        padding: [10, 0, 0, 20],
                    },
                    val: {
                        fontSize: 32,
                        fontWeight: 'bold',
                        color: 'rgb(61,153,252)',
                        padding:[0,10,0,15]
                    },
                    c: {
                        fontSize: 15,
                        fontWeight: 'normal',
                        color: 'rgb(132,159,186)',
                    },
                },
            },
        },
    ],
    legend: {
        orient: 'vertical',
        icon: 'rect',
        x: '70%',
        y: 'center',
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 10,
        align: 'left',
        textStyle: {
            color: 'rgb(132,159,186)',
            fontSize: 15,
            padding: [0, 0, 0, 10],
        },
        formatter(name) {
            let then = option.series[0].data; //获取series中的data
            let total = 0;

            for (let i = 0; i < then.length; i++) {
                if (then[i].name != '' && then[i].name != null && then[i].name != undefined) {
                    total += parseInt(then[i].value);
                }
            }
            var str = '';

            var p = 0;
            for (let i = 0; i < then.length; i++) {
                if (then[i].name == name) {
                    p = (then[i].value / total) * 100;
                    str = name + '       ' + p.toFixed(2) + '%';
                }
            }
            return str;
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['35%', '50%'],
            data: data1,
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    borderColor: 'rgb(0,34,69)',
                    borderWidth: 3,
                },
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 20,
                    length2: 120,
                    lineStyle: {
                        color: '#e6e6e6',
                    },
                },
            },
            label: {
                normal: {
                    show: false,
                    formatter: (params) => {
                        return '{icon|●}{name|' + params.name + '}{value|' + formatNumber(params.value) + '}';
                    },
                    padding: [0, -100, 25, -100],
                    rich: {
                        icon: {
                            fontSize: 16,
                        },
                        name: {
                            fontSize: 14,
                            padding: [0, 10, 0, 4],
                            color: '#666666',
                        },
                        value: {
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333333',
                        },
                    },
                },
            },
        },
        {
            name: '', //外圆环
            tooltip: {
                show: false,
            },
            type: 'pie',
            radius: ['68%', '67%'],
            center: ['35%', '50%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        color: 'white',
                    },
                },
            },
            data: [
                {
                    value: 50,
                    name: '',
                    itemStyle: {
                        normal: {
                            color: ' #274C80',
                            opacity: 0.5,
                        },
                    },
                },
            ],
        },
        {
            name: '', //下方绿点
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                let x0 = (31 * api.getWidth()) / 90;
                let y0 = api.getHeight() / 2.97;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2;
                let point = getCirlPoint(x0, y0, r, 90 + -angle);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 3,
                    },
                    style: {
                        stroke: '#274C80', //粉
                        fill: '#274C80',
                    },
                    silent: true,
                };
            },
            data: [0],
        },
        {
            name: '', //上方绿点
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
                let x0 = (31 * api.getWidth()) / 88;
                let y0 = api.getHeight() / 1.51;
                let r = Math.min(api.getWidth(), api.getHeight()) / 2;
                let point = getCirlPoint(x0, y0, r, 270 + -angle);
                return {
                    type: 'circle',
                    shape: {
                        cx: point.x,
                        cy: point.y,
                        r: 3,
                    },
                    style: {
                        stroke: '#274C80', //绿
                        fill: '#274C80',
                    },
                    silent: true,
                };
            },
            data: [0],
        },
    ],
}

