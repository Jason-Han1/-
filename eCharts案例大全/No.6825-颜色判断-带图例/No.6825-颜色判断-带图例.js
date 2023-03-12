var getname = ['生均图书（册/生）', '生均占地面积（平方米/生）', '生均宿舍面积（平方米/生）', '生均实践场所（平方米/生）', '生均年进书量（册）']; //数据点名称
var getbxsj = [42, 50, 89, 52, 98]; //本校数据
var getdbwd = [70, 56, 86, 78, 72]; //全国示范院校平均数
var getdbz = [55, 49, 80, 60, 90];//达标数据
var seriescolor = ['#03C9AC', '#4B96F3', '#FF6061'];
var getpdz = []; //判断值
for (let i = 0; i < getname.length; i++) {
    if (getbxsj[i] >= getdbz[i]) {
        getpdz.push(getbxsj[i])
    } else {
        getpdz.push(0)
    }
}
var getpdz2 = []; //判断值
for (let i = 0; i < getname.length; i++) {
    if (getbxsj[i] >= getdbz[i]) {
        getpdz2.push(0)
    } else {
        getpdz2.push(getbxsj[i])
    }
}
option = {
    grid: {
        top: '40',
        right: '15',
        left: '50',
        bottom: '30'
    },
    tooltip: {
        trigger: 'axis',
        extraCssText: 'padding-left:8px;line-height:30px;width:220px;height:100px;background:rgba(255,255,255,1);box-shadow:1px 5px 20px 0px rgba(1,11,19,0.2);border-radius:6px;',
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
                if (params[i].seriesName == '全国示范院校平均数') {
                    if (str.indexOf("全国示范院校平均数") == -1) {
                        str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[0] + ';"></span>' + params[i].seriesName + '</span> : <span>' + params[i].value + '</br>';
                    }
                } else if (params[i].seriesName == '本校数据') {
                    if (params[i].value !== 0) {
                        str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[1] + ';"></span>' + params[i].seriesName + '</span> : <span>' + params[i].value + '</br>';
                    } else {
                        str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[2] + ';"></span>' + params[i].seriesName + '</span> : <span>' + getbxsj[params[i].dataIndex] + '(达标值：'+getdbz[params[i].dataIndex]+')</br>';
                    }
                } else if (params[i].seriesName == '未达标数据') {
                    if (str.indexOf("本校数据") == -1 && getpdz2[params[i].dataIndex] > 0) {
                        str += '<span style="display:inline-block;margin-right:5px;margin-bottom:2px;width:6px;height:6px;border-radius:50%;background-color:' + seriescolor[2] + ';"></span>' + params[i].seriesName + '</span> : <span>' + getbxsj[params[i].dataIndex] + '(达标值：'+getdbz[params[i].dataIndex]+')</br>';
                    }
                }
            }
            return str;
        }
    },
    legend: {
        data: ['未达标数据', "本校数据", "全国示范院校平均数"],
        type: "scroll",
        //icon: 'ret',
        height: '88%',
        right: '20',
        top: '10',
        itemGap: 25,
        itemWidth: 14,
        itemHeight: 14,
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
    }, {
        data: getname,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
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
        data: getpdz,
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
        name: "",
        type: 'bar',
        data: getdbwd,
        barWidth: '30px',
        itemStyle: {
            normal: {
                color: 'transparent'
            }

        },
    }, {
        name: "全国示范院校平均数",
        type: 'bar',
        data: getdbwd,
        barWidth: 20,
        zlevel: 2,
        barGap: '-20%',
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
    }, {
        name: "未达标数据",
        type: 'bar',
        barWidth: '20px',
        xAxisIndex: 1,
        data: getpdz2,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#FF7D7E'
                }, {
                    offset: 1,
                    color: '#FF6266'
                }], false),
                barBorderRadius: [5, 5, 0, 0],

            }
        },
    }, {
        name: "全国示范院校平均数",
        type: 'bar',
        data: getdbwd,
        xAxisIndex: 1,
        barWidth: '20px',
        barGap: '70%',
        itemStyle: {
            normal: {
                color: 'transparent',
                barBorderRadius: [5, 5, 0, 0],
            }
        },
    }]
};