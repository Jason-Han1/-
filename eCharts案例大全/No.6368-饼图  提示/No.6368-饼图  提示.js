let index = 0;

option = {
    "color": ["#60ABFC", "#33D3EB", "#5BC39E", "#FFB64D", "#FF7B7C", "#9287E7", "#01A2F0", "#00C1D0", "#88DF76", "#FF9A5C", "#FB5A8E", "#7379E9", "#01B5F0", "#00D2C7", "#FEDA00", "#FF7966", "#E856AB", "#626EE6"],
    "tooltip": {
        "trigger": "item",
        "formatter": "{a} <br/>{b}: {c} ({d}%)"
    },
    "legend": {
        "orient": "horizontal",
        "data": ["Linux", "Windows", "FreeBSD", "IOS", "VxWorks", "其它"],
        "selectedMode": false,
        "itemGap": 20,
        "textStyle": {
            "color": "#858FA6",
            "fontFamily": "Microsoft YAHei,serf"
        }
    },
    "series": [{
        "name": "操作系统分布",
        "type": "pie",
        "radius": ["50%", "70%"],
        "center": ["50%", "60%"],
        "avoidLabelOverlap": false,
        "label": {
            "show": false,
            "padding": 10,
            "verticalAlign": "middle",
            "position": "center",
            "fontFamily": "Microsoft YaHei"
        },
        "emphasis": {
            "label": {
                "show": true,
                "verticalAlign": "middle",
                "fontWeight": 500,
                "fontSize": "110%",
                "fontFamily": "Microsoft YaHei",
                formatter: function(params) {
                    return params.name + '\n\n' + params.value
                }
            }
        },
        "itemStyle": {
            "normal": {
                "borderColor": "#fff",
                "borderWidth": 4
            }
        },
        "data": [{
            "name": "Linux",
            "value": 120
        }, {
            "name": "Windows",
            "value": 71
        }, {
            "name": "FreeBSD",
            "value": 14
        }, {
            "name": "IOS",
            "value": 10
        }, {
            "name": "VxWorks",
            "value": 5
        }, {
            "name": "其它",
            "value": 45
        }]
    }]
}
  myChart.setOption(option);
myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: index
});

myChart.on('mouseover', (e) => {
   /* myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
    })*/
    if (e.dataIndex != index) {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index
        })
    }
    if (e.dataIndex === 0) {
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: e.dataIndex
        })
    }
})

myChart.on('mouseout', (e) => {
    index = e.dataIndex
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
    })
})