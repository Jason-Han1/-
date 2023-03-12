let country = ['不丹', '印度', '孟加拉国', '尼泊尔', '巴基斯坦', '斯里兰卡', '马尔代夫', '马来西亚', '缅甸', '泰国', '越南', '新加坡', '印度尼西亚'];

var foodImport = [11.47, 3.95, 17.42, 14.15, 13.08, 15.35, 22.35, 7.86, 8.3, 4.96, 8.68, 3.19, 8.46];
    var foodExport = [7.17, 8.26, 4.03, 20.2, 16.79, 26.89, 96.15, 11.9, 19.63, 13.23, 19.26, 1.98, 16.36];
    var option =  {
        "backgroundColor": "transparent",
        "title": {
            "left": "center",
            "show": false,
            "text": "各国家2010年食品进出口情况",
            "textStyle": {
                "color": "#000",
                "fontFamily": "Microsoft YaHei",
                "fontSize": 16,
                "fontStyle": "normal",
                "fontWeight": "bold"
            }
        },
        grid:{
            top:10,
            left:10,
            right:10,
            bottom:50,
        },
        "tooltip": {},
        "legend": {
            "show": true,
            "left": "right",
            "top": 'top',
            "data": ["食品进口", "食品出口"],
            textStyle:{
                color: '#00ccfe'
            }
        },
        "xAxis": [{
            "position": "bottom",
            "type": "category",
            'axisLabel': {
                'interval': 0,
                textStyle: {
                    color: '#00ccfe',
                },
                'rotate': 30,
            },
            axisLine:{
                lineStyle:{
                    color: '#00ccfe'
                }
            },
            "data": country,
        }],
        "yAxis": [{
            "type": "value",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
                formatter: function(param) {
                    return param + '%';
                },
                textStyle: {
                    color: '#00ccfe',
                }
            }
        }],
        "series": [{
            "name": "食品出口",
            "type": "bar",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FBA189'
                        }, {
                            offset: 0.5,
                            color: '#e97e61'
                        }, {
                            offset: 1,
                            color: '#b84034'
                        }]
                    )
                },
            },
            "data": foodExport,

        }, {
            "name": "食品进口",
            "type": "bar",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: '#83bff6'
                        }, {
                            offset: 0.5,
                            color: '#188df0'
                        }, {
                            offset: 1,
                            color: '#188df0'
                        }]
                    )
                },
            },
            "data": foodImport,
        }, {
            "name": "食品进口差额比",
            "type": "line",
            itemStyle: {
                normal: {
                    color: '#E9DC37'
                },
            },
            "data": foodImport,

        }]
    }