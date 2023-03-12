option = {
    "color": ["#48abfe", "#00d06e", "#3be294", "#ffdcba"],
    "tooltip": {
        "trigger": "axis"
    },
    "legend": {
        "itemWidth": 20,
        "itemHeight": 6,
        "bottom": "1%",
        "data": ["济南市公共资源交易中心", "市行政审批服务局", "市住房和城乡建设局", "惩戒次数"]
    },
    "grid": {
        "top": "10%",
        "left": "3%",
        "right": "4%",
        "bottom": "10%",
        "containLabel": true
    },
    "yAxis": [{
        "name": "次",
        "type": "log",
        "min": 0.1,
        "logBase":8,
        "axisLabel": {
            "show": true,
            "interval": "auto",
            "formatter": "{value} "
        },
        "splitLine": {
            "show": true
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "show": true
    }],
    "xAxis": [{
        "type": "category",
        "axisLabel": {
            "interval": 0,
            "show": true,
            "splitNumber": 15,
            "textStyle": {
                "fontSize": 12,
                "color": "#656565"
            }
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "data": ["2018-11", "2018-12", "2019-01", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09", "2019-10", "2019-11"]
    }],
    "series": [{
        "name": "济南市公共资源交易中心",
        "type": "line",
        "barWidth": "20px",
        "data": [0, 0, 0, 0, 0, 0, 0, 7872, 10533, 11838, 9089, 15189]
    }, {
        "name": "市行政审批服务局",
        "type": "line",
        "barWidth": "20px",
        "data": [3, 65, 2, 4, 3, 103, 4, 109, 97, 490, 332, 1]
    }, {
        "name": "市住房和城乡建设局",
        "type": "line",
        "color": "#a181fc",
        "barWidth": "20px",
        "data": [0, 0, 0, 0, 0, 0, 33, 30, 1, 2, 16, 8]
    }, {
        "name": "惩戒次数",
        "type": "line",
        "color": "#FFD52E",
        "barWidth": "20px",
        "data": [0, 0, 0, 0, 0, 30, 29, 420, 119, 128, 42, 47]
    }]
}