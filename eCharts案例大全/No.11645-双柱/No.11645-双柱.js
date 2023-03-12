option = {
    "tooltip": {
        "trigger": "axis"
    },
    "color": ["#4478fc", "#ffcc33"],
    "legend": {
        "top": "0",
        "data": ["年均值", "累计值"],
        "itemGap": 10,
        "itemWidth": 15,
        "itemHeight": 12
    },
    xAxis : [
        {
            type : 'category',
            data : ['2017','2018','2019'],
            axisTick: {
                show:false,
            },
            axisLabel: {
                color : '#fff',
                fontSize:16
            },
            axisLine : {
                show : true,
                lineStyle : {
                    color : '#5e99c6'
                }
            }
        }
    ],
    yAxis : [{
            type : 'value',
            axisLabel: {
                show: false
            },
            axisTick: { //刻度值线
                 show: false
            },
            splitLine: { //网格线
                 show: false
            },
            axisLine: {
                show: false,
            },
            splitArea: {
    			show: false
    		}
        }
    ],
    "series": [{
        "data": [5, 2,6],
        barWidth:30,
        "name": "年均值",
        "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
        "type": "bar"
    }, {
        "data": [2, 5,7],
        barWidth:30,
        "name": "累计值",
        "label": {
                "normal": {
                    "show": true,
                    "position": "top",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
        "type": "bar"
    }]
}