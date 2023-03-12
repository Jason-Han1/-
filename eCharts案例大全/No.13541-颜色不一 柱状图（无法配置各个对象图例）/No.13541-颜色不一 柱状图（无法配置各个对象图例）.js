var colorArr = [
        "#55a9ff","#ff7767","#ffbb56",
        "#ffff99","#99dd66","#34cc99",
        "#32aade","#3a8aeb","#869afd",
        "#b26ee5","#ff88ab"
    ],
    seriesData = [{
        "name": "其他批发业",
        "value": 2159
    }, {

        "name": "建材批发",
        "value": 704
    }, {

        "name": "投资与资产管理",
        "value": 677
    }, {

        "name": "五金产品批发",
        "value": 501
    }, {

        "name": "未列明商务服务业",
        "value": 489
    }, {

        "name": "建筑装饰业",
        "value": 463
    }, {

        "name": "未列明零售业",
        "value": 425
    }, {

        "name": "食品批发",
        "value": 424
    }, {
        "name": "专业咨询",
        "value": 404
    }, {
        "name": "机械设备及电子产品批发",
        "value": 392
    }];
option = {
    "title": {
        "text": "颜色不一 柱状图（无法配置各个对象图例）",
        "padding": 0,
        "textStyle": {
            "fontSize": 18,
            "fontWeight": "bold"
        },
        "top": 15,
        "left": 20
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        }
    },
    "grid": {
        "left": 36,
        "top": 60,
        "bottom": 60,
        "right": 40,
        "containLabel": true
    },
    "xAxis": {
        "type": "category",
        "data": ["其他批发业", "建材批发", "投资与资产管理", "五金产品批发", "未列明商务服务业", "建筑装饰业", "未列明零售业", "食品批发", "专业咨询", "机械设备及电子产品批发"],
        "boundaryGap": true,
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#8aa3a3"
            },
            "rotate": 30
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#8aa3a3"
            }
        },
        "axisTick": {
            "show": true
        }
    },
    "yAxis": {
        "type": "value",
        "axisLabel": {
            "show": true,
            "inside": false,
            "textStyle": {
                "color": "#8aa3a3"
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#8aa3a3"
            }
        },
        "axisTick": {
            "show": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#2d545f",
                "type": "solid"
            }
        }
    },
    "series": {
        "type": "bar",
        "barWidth": 20,
        "data": seriesData.map((item, index) => ({
            name: item.name,
            value: item.value,
            "itemStyle": {
                "normal": {
                    "color": colorArr[index]
                }
            },
        }))
    }
}