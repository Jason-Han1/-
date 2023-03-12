data = []; // 雷达图数据
data2 = []; // 雷达图数据
let maxData = 0; // 最大值
let maxData2 = 0; // 最大值
let indicator = []; //雷达图指示器，用来指定雷达图中的多个变量
let indicator2 = []; //雷达图指示器，用来指定雷达图中的多个变量
let total = 0;
const alarmData = [{
                name: "座椅",
                value: 35
            }, {
                name: "垃圾桶",
                value: 25
            }, {
                name: "路灯",
                value: 12
            }, {
                name: "公交站台",
                value: 11
            }, {
                name: "引导牌",
                value: 10
            }];
const alarmData2 = [{
                name: "座椅",
                value: 20
            }, {
                name: "垃圾桶",
                value: 20
            }, {
                name: "路灯",
                value: 20
            }, {
                name: "公交站台",
                value: 20
            }, {
                name: "引导牌",
                value: 20
            }];

// 获取数据和最大值
alarmData.forEach(ele => {
    total += ele.value;
    data.push(ele.value);
    if (ele.value > maxData) {
        maxData = ele.value;
    }
});
alarmData2.forEach(ele => {
    total += ele.value;
    data2.push(ele.value);
    if (ele.value > maxData2) {
        maxData2 = ele.value;
    }
});
let mult = Math.pow(10, 1); // 需要用0占1位
maxData = Math.ceil(maxData / mult) * mult; // 向上取整

// 获取指示器数据
alarmData.forEach(ele => {
    indicator.push({
        name: ele.name,
        max: maxData
    })
});
// 获取指示器数据
alarmData2.forEach(ele => {
    indicator2.push({
        name: ele.name,
        max: maxData
    })
});

let buildSeries = function (data) {
    let helper = data.map((item, index) => {
        let arr = new Array(data.length);
        arr.splice(index, 1, item);
        return arr;
    });

    return [data, ...helper].map((item, index) => {
        return {
            type: 'radar',
            name:'指标1',
            // 折线拐点标志样式
            itemStyle: {
                color: '#37D3FF'
            },
            // 线条样式
            lineStyle: {
                color: index === 0 ? '#37D3FF' : 'transparent'
            },
            // 区域填充样式
            areaStyle: {
                color: index === 0 ? '#0FB7E6' : 'transparent',
                opacity: 0.6
            },
            // 提示框内容
            tooltip: {
                backgroundColor: 'rgba(50,50,50,0.7)',
                borderWidth: 0,
                padding: [5, 10],
                textStyle: {
                    color: '#FFFFFF',
                    fontFamily: 'sans-serif'
                },
                confine: true, // 提示框显示在canvas以内
                show: index === 0 ? false : true,
                formatter: function () {
                    return indicator[index - 1].name + "<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#37D3FF'></span>" + '报警 : ' + data[index - 1]
                }
            },
            z: index === 0 ? 1 : 2,
            data: [item]
        }
    })
}

let buildSeries2 = function (data) {
    let helper = data.map((item, index) => {
        let arr = new Array(data.length);
        arr.splice(index, 1, item);
        return arr;
    });

    return [data, ...helper].map((item, index) => {
        return {
            type: 'radar',
             name:'指标2',
            // 折线拐点标志样式
            itemStyle: {
                color: '#F7DA6D'
            },
            // 线条样式
            lineStyle: {
                color: index === 0 ? '#F7DA6D' : 'transparent'
            },
            // 区域填充样式
            areaStyle: {
                color: index === 0 ? '#F7DA6D' : 'transparent',
                opacity: 0.6
            },
            // 提示框内容
            tooltip: {
                backgroundColor: 'rgba(50,50,50,0.7)',
                borderWidth: 0,
                padding: [5, 10],
                textStyle: {
                    color: '#FFFFFF',
                    fontFamily: 'sans-serif'
                },
                confine: true, // 提示框显示在canvas以内
                show: index === 0 ? false : true,
                formatter: function () {
                    return indicator2[index - 1].name + "<br/><span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#F7DA6D'></span>" + '报警 : ' + data[index - 1]
                }
            },
            z: index === 0 ? 1 : 2,
            data: [item]
        }
    })
}
console.log('123',buildSeries(data));

option = {
    backgroundColor: '#313131',
    tooltip: {},
    // 标题
    title: {
        text: total,
        subtext: '报警总数',
        top: '0%',
        left: 'center',
        itemGap: 7,
        textStyle: {
            color: '#FEFFFF',
            fontSize: '24',
            fontFamily: 'OPPOSans-M',
            fontWeight: 'normal'
        },
        subtextStyle: {
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: '12',
            fontFamily: 'SourceHanSansCN-Normal',
            fontWeight: 400,
        }
    },
    radar: {
        center: ['50%', '54%'],
        radius: '90%',
        // 雷达图每个指示器名称的配置项
        name: {
            textStyle: {
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '12',
                fontFamily: 'SourceHanSansCN-Regular',
                fontWeight: 400,
                padding: [-10, -12]
            }
        },
        // 分隔区域配置项
        splitArea: {
            show: true,
            areaStyle: {
                color: ['transparent']
            }
        },
        // 分割线
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        // 坐标轴轴线相关设置
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            }
        },
        // 指示器
        indicator: indicator
    },
    series: [...buildSeries(data),...buildSeries2(data2)]
};
