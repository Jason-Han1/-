var dataAll = [110, 120, 160, 140, 120, 160, 150, 120];
var data1 = []; //放第二级
var data2 = [] //放最下级
var data3 = []; //放第三级
for (let a = 0; a < dataAll.length; a++) {
    data3.push(dataAll[a] - 70);
}
for (let i = 0; i < dataAll.length; i++) {
    data2.push(30);
    data1.push(dataAll[i] - data3[i] - 30);
}

option = {
    "backgroundColor": "rgb(20, 58, 110)",
    "color": ["#3cefff"],
    "tooltip": {},
    "grid": {
        "containLabel": true
    },
    "title":{
        "text":"柱状图不同标线状态展示",
         "textStyle": {
            "fontFamily": 'PingFang SC Bold',
            "fontSize": 20,
            "fontWeight": 'lighter',
            "color":"#fff"
        },
    },
    "legend": {
        "data": ["类目1", "类目2", "类目3"],
        "textStyle": {
            "color": '#ccc'
        }
    },
    "xAxis": [{
        "type": "category",
        "data": ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月"],
        "axisTick": {
            "alignWithLabel": true
        },
        "nameTextStyle": {
            "color": "#82b0ec"
        },
        "axisLine": {
            "lineStyle": {
                "color": "#82b0ec"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            }
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#82b0ec"
            },
            "formatter": "{value}%"
        },
        "splitLine": {
            "lineStyle": {
                "color": "#0c2c5a" //设置Y轴横线样式
            }
        },
        "axisLine": { //隐藏Y轴实线
            "show": false,
        }
    }],
    "series": [{
        "type": "bar",
        "name": "类目1",
        "stack": 2, //这个属性很重要，他决定这些柱状图是否是拼接在一起的，拼接在一起的stack值必须相等
        "itemStyle": {
            "normal": {
                "opacity": 0.7
            }
        },
        "barWidth": "40",
        "data": data2,
        "markLine": {
            "silent": true,
            "symbol": "none",
            "label": {
                "position": "middle",
                "formatter": "{b}"
            },
            "data": [{
                "name": "超过百分之30",
                "yAxis": 30,
                "lineStyle": {
                    "opacity": 0.7
                },
                "label": {
                    "position": "end",
                    "formatter": "{b}\n"
                }
            }, {
                "name": "超过百分之70",
                "yAxis": 70,
                "lineStyle": {
                    "color": "#ff6000"
                },
                "label": {
                    "position": "end",
                    "formatter": "{b}\n"
                }
            }, {
                "name": "测试X轴标线",
                "xAxis": '03月',
                "lineStyle": {
                    "color": "#8cde2d"
                },
                "label": {
                    "position": "end",
                    "formatter": "{c}{b}"
                }
            }]
        }
    }, {
        "type": "bar",
        "name": "类目2",
        "stack": 2,
        "itemStyle": {
            "normal": {
                "color": '#FD5916'
            },
            "emphasis": {
                "color": '#FD5916'
            }
        },
        "barWidth": "20",
        "data": data1,
    }, {
        "type": "bar",
        "name": "类目3",
        "stack": 2,
        "itemStyle": {
            "normal": {
                "color": 'lightblue'
            },
        },
        "barWidth": "20",
        "data": data3,
    }]
}