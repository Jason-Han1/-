option = {
    backgroundColor: "#344b58",
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'none' // 默认为直线，可选为：'line' | 'shadow'
            // show: false
        },
        textStyle: {
            color: "#D7E3FF"
        },
        backgroundColor: "#0F1225",
        padding: [10, 18, 20, 12],
        formatter: function(obj) {
            var str = '';
            str = '<div style="font-size: 12px;"><p style="color:#8DA2D3;lineHeight:18px;height:18px;">' + obj[0].name + '</p>';
            obj.map(item => {
                let subStr = "<div style='lineHeight:22px;height:24px;'><div style='display:inline-block;width:5px;height:5px;margin-right:6px;background:" + item.color + ";border-radius:50%;margin-bottom:2px;'></div>" + item.seriesName + "：" + item.value + "</div>";
                str += subStr;
            });
            str += "</div>";
            return str;
        },
    },
    legend: {
        data: ['小桥', '中桥', '大桥', '特大桥'],
        icon: "rect",
        itemGap: 24,
        itemWidth: 10,
        itemHeight: 10,
        right: '10%',
        orient: "horizontal",
        textStyle: {
            color: "rgba(255,255,255,0.7)",
            fontSize: 14,
            padding: [0, 0, 0, 3],
            fontFamily: "SourceHanSansCN-Regular"
            // lineHeight: 30
        }
    },
    "grid": {
        "borderWidth": 0,
        "top": '20%',
        "bottom": '10%',
        left: '15%',
        right: 0,
        textStyle: {
            color: "#fff"
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: 'rgba(255,255,255,.5)'
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
            color: 'rgba(255,255,255,0.7)',
            fontSize: 18
        },
        "data": ['1950', '60', '70', '80', '90', '2000', '10', '20'],
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20

        },
        "splitArea": {
            "show": false
        },

    }],
    color: ['#32accf', "#f1ae58", "#f37f40", "#3edea4"].reverse(),
    "series": [{
            "name": "小桥",
            "type": "bar",
            "stack": "总量",
            "barMaxWidth": 20,
            "barGap": "10%",
            "data": [
                709,
                1917,
                2455,
                2610,
                1719,
                1433,
                1917,
                2455,
            ],
        },
        {
            "name": "中桥",
            "type": "bar",
            "stack": "总量",
            "data": [
                327,
                224,
                507,
                624,
                800,
                482,
                224,
                507,
                624,
            ]
        },
        {
            "name": "大桥",
            "type": "bar",
            "stack": "总量",
            "data": [
                444,
                257,
                567,
                423,
                646,
                368,
                444,
                257,
                567,
            ]
        },
        {
            "name": "特大桥",
            "type": "bar",
            "stack": "总量",
            "data": [
                327,
                621,
                234,
                251,
                23,
                482,
                251,
                23,
                482,
            ]
        },
    ]
}