var data = [{
    "value": 51.6,
    "name": "俄罗斯"
}, {
    "value": 50.7,
    "name": "新加坡"
}, {
    "value": 42.6,
    "name": "印度"
}, {
    "value": 39.2,
    "name": "泰国"
}, {
    "value": 35.6,
    "name": "马来西亚"
}, {
    "value": 34.1,
    "name": "越南"
}, {
    "value": 33.6,
    "name": "卡塔尔"
}, {
    "value": 31.5,
    "name": "印度尼西亚"
}, {
    "value": 31.4,
    "name": "阿联酋"
}, {
    "value": 31.3,
    "name": "哈萨克斯坦"
}, {
    "value": 31.1,
    "name": "沙特阿拉伯"
}, {
    "value": 30.3,
    "name": "巴基斯坦"
}, {
    "value": 30,
    "name": "吉尔吉斯斯坦"
}, {
    "value": 29.7,
    "name": "波兰"
}, {
    "value": 29.3,
    "name": "新西兰"
}, {
    "value": 29.2,
    "name": "土耳其"
}, {
    "value": 28.8,
    "name": "缅甸"
}, {
    "value": 28.5,
    "name": "蒙古"
}, {
    "value": 27.7,
    "name": "科威特"
}, {
    "value": 27.7,
    "name": "捷克"
}, {
    "value": 27.5,
    "name": "文莱"
}, {
    "value": 26.9,
    "name": "伊朗"
}, {
    "value": 26.8,
    "name": "以色列"
}, {
    "value": 26.4,
    "name": "老挝"
}, {
    "value": 25.8,
    "name": "柬埔寨"
}, {
    "value": 25.7,
    "name": "爱沙尼亚"
}, {
    "value": 25.7,
    "name": "拉脱维亚"
}, {
    "value": 25.5,
    "name": "斯洛文尼亚"
}, {
    "value": 25.4,
    "name": "匈牙利"
}, {
    "value": 24.9,
    "name": "埃及"
}, {
    "value": 24.9,
    "name": "斯洛伐克"
}, {
    "value": 24.7,
    "name": "保加利亚"
}, {
    "value": 24.5,
    "name": "罗马尼亚"
}, {
    "value": 24.4,
    "name": "孟加拉"
}, {
    "value": 24.3,
    "name": "希腊"
}, {
    "value": 23.8,
    "name": "菲律宾"
}, {
    "value": 23.8,
    "name": "白俄罗斯"
}, {
    "value": 23.4,
    "name": "马尔代夫"
}, {
    "value": 23.4,
    "name": "乌兹别克斯坦"
}, {
    "value": 23.3,
    "name": "斯里兰卡"
}, {
    "value": 23.2,
    "name": "土库曼斯坦"
}, {
    "value": 23,
    "name": "南非"
}, {
    "value": 23,
    "name": "伊拉克"
}, {
    "value": 22.6,
    "name": "阿曼"
}, {
    "value": 22.6,
    "name": "克罗地亚"
}, {
    "value": 22.2,
    "name": "立陶宛"
}, {
    "value": 22.2,
    "name": "塔吉克斯坦"
}, {
    "value": 21.8,
    "name": "约旦"
}, {
    "value": 21.6,
    "name": "阿尔巴尼亚"
}, {
    "value": 21.1,
    "name": "尼泊尔"
}, {
    "value": 21.1,
    "name": "格鲁吉亚"
}, {
    "value": 21,
    "name": "塞尔维亚"
}, {
    "value": 20.9,
    "name": "阿塞拜疆"
}, {
    "value": 20.8,
    "name": "亚美尼亚"
}, {
    "value": 20.7,
    "name": "塞浦路斯"
}, {
    "value": 20.7,
    "name": "黑山"
}, {
    "value": 20.2,
    "name": "马其顿"
}, {
    "value": 19.6,
    "name": "巴林"
}, {
    "value": 19.5,
    "name": "黎巴嫩"
}, {
    "value": 18.7,
    "name": "乌克兰"
}, {
    "value": 18.3,
    "name": "波黑"
}, {
    "value": 18.2,
    "name": "阿富汗"
}, {
    "value": 17.9,
    "name": "东帝汶"
}, {
    "value": 17.4,
    "name": "叙利亚"
}, {
    "value": 17.3,
    "name": "埃塞俄比亚"
}, {
    "value": 16.7,
    "name": "也门"
}, {
    "value": 16.3,
    "name": "摩尔多瓦"
}, {
    "value": 16,
    "name": "不丹"
}, {
    "value": 5.6,
    "name": "巴勒斯坦"
}]

var data_name = [];
var data_value = [];
for (var m in data) {
    data_name.push(data[m]['name'])
    data_value.push(data[m]['value'])
}

option = {
    color: ['#3398DB'],
    backgroundColor: "#000",
    title: {
        text: '沿线国家“一带一路”连通指数',
        subtext: '纯属虚构',
        left: '50%',
        top: '30',
        textAlign: 'center',
        textStyle: {
            color: "#fff",
            fontWeight: 'normal',
            fontFamily: '宋体'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    dataZoom: [{
            show: true,
            height: 30,
            xAxisIndex: [
                0
            ],
            bottom: 40,
            start: 0,
            end: 40,
            textStyle: {
                color: "#fff"
            },
            borderColor: "#90979c"
        },
        {
            type: "inside",
            show: true,
            height: 15,
            xAxisIndex: [
                0
            ],
            start: 1,
            end: 35
        }
    ],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '15%',
        top: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: data_name,
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            // "interval": 0,
            // "rotate": 35,
            show: true,
            splitNumber: 20,
            textStyle: {
                fontFamily: "微软雅黑",
                fontSize: 12,
                color: "#fff",
                fontWeight: 'normal',
            },
            formatter: function(val) {
                return val.split("").join("\n")
            },
        },

    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
    }],
    series: [{
        name: '值',
        type: 'bar',
        barWidth: '60%',
        data: data_value,
        itemStyle: {
            normal: {
                color: function(d) {
                    return "#" + Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16);
                }
            }
        },
    }]
};