var getname = ['财政经常性补助收入', '学费收入', '中央地方财政专项收入', '其他收入', '社会捐赠']; //数据点名称
var getvalue = [23061, 19365, 15535, 13203, 9988]; //本校数据
var getvalue1 = [12305, 25036, 12822, 10000, 20145]; //全国示范院校平均数
var seriescolor = ['#4B96F3', '#03C9AC'];

option = {
    grid: {
        top: '50',
        right: '20',
        left: '60',
        bottom: '40'
    },
    tooltip: {
        trigger: 'axis',
        extraCssText: 'padding-left:8px;line-height:30px;width:210px;height:110px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
        axisPointer: {
            type: 'none'
        },
        textStyle: {
            fontSize: '14',
            color: '#666',
        },
        formatter: function(params) {
            var str = ''; //声明一个变量用来存储数据
            str += '<div>' + params[0].name + '</div>';
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName == '本校数据') {
                    str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[0] + ';"></span>' + params[i].seriesName + '</span> : <span>' + params[i].value + '</br>';
                } else {
                    str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[1] + ';"></span>' + params[i].seriesName + '</span> : <span>' + params[i].value + '</br>';
                }
            }
            return str;
        }
    },
    legend: {
        data: ["本校数据", "全国示范院校平均数"],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        right: '20',
        top: '10',
        itemGap: 25,
        itemWidth: 13,
        itemHeight: 13,
        textStyle: {
            fontSize: '13',
            color: '#666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            margin: 10,
            color: '#333333',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        //name: '单位：万元',
        nameTextStyle: {
            color: '#333333',
            fontSize: 13
        },
        axisLabel: {
            color: '#333333',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            lineStyle: {
                color: '#333333',
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#D1D1D1',
            }
        }
    }],
    animation: false,
    series: [{
        name: "本校数据",
        type: 'bar',
        data: getvalue,
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#5FBEFF'
                }, {
                    offset: 1,
                    color: '#589AFC'
                }], false),
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }, {
        name: "全国示范院校平均数",
        type: 'bar',
        data: getvalue1,
        barWidth: '20px',
        barGap: '70%',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#02D1C2'
                }, {
                    offset: 1,
                    color: '#0BC198'
                }], false),
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }]
};