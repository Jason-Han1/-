option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};app.title = '坐标轴刻度与标签对齐';

option = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            barWidth: '60%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
var appusage_data = [{
    
    
}, {
    
    
}, {
    name: "微博",
    value: 27
}, {
    name: "天涯网",
    value: 42
}, {
    name: "微信",
    value: 80
}];
option = {
    "title": {
        "text": "正向情感评论：149",
        "textStyle": {
            "color": "#bcbfff",
            "fontWeight": "bold",
            "fontSize": 14
        },
        "top": "4%",
        "left": "2.2%"
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": { // 坐标轴指示器，坐标轴触发有效
            "type": "shadow" // 默认为直线，可选为："line" | "shadow"
        }
    },
    "grid": {
        "left": "3%",
        "right": "10%",
        "bottom": "3%",
        "containLabel": true
    },
    "yAxis": [{
        "type": "category",
        "data": ["TOP5", "TOP4", "TOP3", "TOP2", "TOP1"],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false,
            "alignWithLabel": true
        },
        "axisLabel": {
            "textStyle": {
                "color": "#ffb069"
            }
        }
    }],
    "xAxis": [{
        "type": "value",
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        }
    }],

    "series": [{
        "name": "正向情感评论",
        "type": "bar",
        "data": appusage_data,
        "barCategoryGap": "35%",
        "label": {
            "normal": {
                "show": true,
                "position": "right",
                "formatter": function(params) {
                    return params.data.name;
                },
                "textStyle": {
                    "color": "#bcbfff" //color of value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    "offset": 0,
                    "color": "#ffb069" // 0% 处的颜色
                }, {
                    "offset": 1,
                    "color": "#ec2e85" // 100% 处的颜色
                }], false)
            }
        }
    }]
};