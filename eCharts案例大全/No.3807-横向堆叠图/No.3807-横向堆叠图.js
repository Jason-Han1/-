var useData = {
    yAxisData: ['y1', 'y2', 'y3', 'y4', 'y5'],
    seriesData1: [709, 1917, 2455, 2610, 1719],
    seriesData2: [327, 1776, 507, 1200, 800],
    // seriesData3: [127, 776, 207, 1000, 300],

}

option = {
    "backgroundColor": '#152439',
    "tooltip": {
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 10,
        "bottom": 40,
        "left": 90,
        textStyle: {
            color: "#fff"
        }
    },
    "legend": {
        icon: 'rect',
        right: 'center',
        top: '10',
        itemGap:200,
        textStyle: {
            color: '#90979c',
        },
    },
    "calculable": true,
    "xAxis": [{
        "type": "value",
        "trigger": "axis",
        "axisLine": {
            show:false,
            lineStyle: {
                color: '#fff'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
        },
    }],
    "yAxis": [{
        "type": "category",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            show:false,
            lineStyle: {
                color: '#fff'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },
        data: useData.yAxisData,
    }],
    "series": [{
            "name": "一级",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 15,
            "barGap": "10%",
            "itemStyle": {
                normal:{
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#2d58f0'
                    }, {
                        offset: 1,
                        color: '#81d9ff'
                    }]),
                }
            },
            "data": useData.seriesData1,
        },
        {
            "name": "二级",
            "type": "bar",
            "stack": "总量",
            "itemStyle": {
                  normal:{
                     color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#ffb800'
                    }, {
                        offset: 1,
                        color: '#ffdb1f'
                    }]),
                }
            },
            "data": useData.seriesData2,
        },
        // {
        //     "name": "三级",
        //     "type": "bar",
        //     "stack": "总量",
        //     "itemStyle": {},
        //     "data": useData.seriesData3,
        // }
    ]
}