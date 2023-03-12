var data_xwm = [{
        value: ['2019/08/01', 1800]
    },
    {
        value: ['2019/08/06', 300]
    }
]
var data_pengpai = [{
        value: ['2019/08/01', -5450]
    },
    {
        value: ['2019/08/06', -1650]
    }
]

var data_liupan = [{
        value: ['2019/08/01', 800]
    },
    {
        value: ['2019/08/06', -150]
    }
]


var data_gaolin = [{
        value: ['2019/08/01', 2700]
    },
    {
        value: ['2019/08/06', 0]
    }
]

var data_tianyong = [{
        value: ['2019/08/01', -630]
    },
    {
        value: ['2019/08/06', 400]
    }
]

var data_yugang = []

var data_teyi = [{
        value: ['2019/08/01', -770]
    },
    {
        value: ['2019/08/06', 0]
    }
]

var data_laodage = [{
        value: ['2019/08/01', 0]
    },
    {
        value: ['2019/08/06', -1500]
    }
]

var data_wuzhe = []

var data_xiaoyong = []

var data_tfh = [{
        value: ['2019/08/01', 0]
    },
    {
        value: ['2019/08/06', 150]
    }
]

var data_leilei = [{
        value: ['2019/08/01', 0]
    },
    {
        value: ['2019/08/06', 1000]
    }]
var data_jiefuliu = []

var gangzi = [{
        value: ['2019/08/01', 1550]
    },
    {
        value: ['2019/08/06', 1450]
    }
]

var pp_total = 0;
for (i = 0; i < data_pengpai.length; i++) {
    pp_total += data_pengpai[i].value[1];
}

var lp_total = 0;
for (i = 0; i < data_liupan.length; i++) {
    lp_total += data_liupan[i].value[1];
}

var xwm_total = 0;
for (i = 0; i < data_xwm.length; i++) {
    xwm_total += data_xwm[i].value[1];
}

var gl_total = 0;
for (i = 0; i < data_gaolin.length; i++) {
    gl_total += data_gaolin[i].value[1];
}

var ty_total = 0;
for (i = 0; i < data_tianyong.length; i++) {
    ty_total += data_tianyong[i].value[1];
}


var yg_total = 0;
for (i = 0; i < data_yugang.length; i++) {
    yg_total += data_yugang[i].value[1];
}

var teyi_total = 0;
for (i = 0; i < data_teyi.length; i++) {
    teyi_total += data_teyi[i].value[1];
}

var ldg_total = 0;
for (i = 0; i < data_laodage.length; i++) {
    ldg_total += data_laodage[i].value[1];
}

var wz_total = 0;
for (i = 0; i < data_wuzhe.length; i++) {
    wz_total += data_wuzhe[i].value[1];
}

var lx_total = 0;
for (i = 0; i < data_xiaoyong.length; i++) {
    lx_total += data_xiaoyong[i].value[1];
}

var tfh_total = 0;
for (i = 0; i < data_tfh.length; i++) {
    tfh_total += data_tfh[i].value[1];
}

var leilei_total = 0;
for (i = 0; i < data_leilei.length; i++) {
    leilei_total += data_leilei[i].value[1];
}

var jiefuliu_total = 0;
for (i = 0; i < data_jiefuliu.length; i++) {
    jiefuliu_total += data_jiefuliu[i].value[1];
}

var gz_total = 0;
for (i = 0; i < gangzi.length; i++) {
    gz_total += gangzi[i].value[1];
}

var totalarr = [];
totalarr.push({
    name: '囧尼蹦',
    score: pp_total
});
totalarr.push({
    name: '老牛',
    score: lp_total
});
totalarr.push({
    name: '明明',
    score: xwm_total
});
totalarr.push({
    name: '睾林',
    score: gl_total
});
totalarr.push({
    name: '小甜甜',
    score: ty_total
});
//totalarr.push({name:'鱼缸',score:yg_total});
totalarr.push({
    name: '特意',
    score: teyi_total
});
totalarr.push({
    name: '老打鸽',
    score: ldg_total
});
//totalarr.push({name:'没辙',score:wz_total});
//totalarr.push({name:'乡喷厨',score:lx_total});
totalarr.push({
    name: '疼放红',
    score: tfh_total
});
totalarr.push({
    name: '内内',
    score: leilei_total
});
//totalarr.push({name:'洁肤流',score:jiefuliu_total});
totalarr.push({
    name: '杠子',
    score: gz_total
});

function compare(property) {
    return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
    }
}

var sort_totalarr = totalarr.sort(compare('score'));

var zongjilu_text = "";

var namearr = sort_totalarr.map((obj, index) => {
    return obj.name;
})

var scorearr = sort_totalarr.map((obj, index) => {
    return obj.score;
})
for (i = 0; i < sort_totalarr.length; i++) {
    zongjilu_text = zongjilu_text + sort_totalarr[i].name + ":" + sort_totalarr[i].score + "\\n";
}

var options = [{
        backgroundColor: "#B0E0E6",
        title: {
            text: '点击查看排名',
            top: '5%',
            link: "javascript: alert('" + zongjilu_text + "')",
            target: "self",
            x: 'center',
            top: '10%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#FF00FF'
                }
            }
        },
        grid: {
            top: 100
        },
        legend: {
            data: ['囧尼蹦', '老牛', '明明', '睾林', '小甜甜', '特意', '老打鸽', '疼放红', '内内', '杠子'],
            x: 'left',
            right: '100%'

        },
        dataZoom: [{
                type: 'slider', //图表下方的伸缩条
                show: true, //是否显示
                realtime: true, //拖动时，是否实时更新系列的视图
                start: 0, //伸缩条开始位置（1-100），可以随时更改
                end: 100, //伸缩条结束位置（1-100），可以随时更改
            },
            {
                type: "inside" //鼠标滚轮缩放
            }
        ],
        xAxis: {
            name: '月/日/年',
            type: 'time',
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name: 'profit',
            type: 'value',
            max: value => {
                max = value.max;
                return (value.max * 1.5).toFixed(0); // 乘的目的是不想让图表顶到最顶部
            },
            min: value => {
                min = value.min;
                return (value.min * 1.5).toFixed(0);
            }
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                // dataView: {readOnly: false},
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        series: [{
                name: '囧尼蹦',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_pengpai,
            },
            {
                name: '老牛',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_liupan
            },
            {
                name: '明明',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_xwm
            },
            {
                name: '睾林',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_gaolin
            },
            {
                name: '小甜甜',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_tianyong
            },
            {
                name: '特意',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_teyi
            },
            {
                name: '老打鸽',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_laodage
            },
            {
                name: '疼放红',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_tfh
            },
            {
                name: '内内',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data_leilei
            },
            {
                name: '杠子',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: gangzi
            }

        ]
    },
    {
        title: {
            text: '排名',
            top: '5%',
            x: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: namearr,
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                interval: 0, //强制文字产生间隔
                rotate: 45, //文字逆时针旋转45°
                
            }
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '得分',
            type: 'bar',
            barWidth: '50%',
            data: scorearr,
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'top', //在上方显示
                    }
                }
            },

        }]
    }
]