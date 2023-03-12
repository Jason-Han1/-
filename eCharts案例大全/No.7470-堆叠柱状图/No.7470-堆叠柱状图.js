option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",


            },
            textStyle: {
                color: "#fff",
                fontSize:30
            }
        },
        "grid": {
            "top": '20%',
            "bottom": '15%',
            left:'10%',
            right:'5%'
        },
        "legend": {
            x:'center',
            y:'2%',
            itemGap:30,
            itemWidth:24,
            itemHeight:24,
            textStyle: {
                color: '#505050',
                fontSize:30,
            },
        },


        "calculable": true,
        "xAxis": [{
            "type": "category",
            "axisLine": {
                lineStyle: {
                    color: '#DDDDDD',
                    width:3
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
                textStyle:{
                    color:'#5B5B5B',
                    fontSize:30
                }

            },
            "data": ['邢台', '衡水', '邯郸', '沧州', '保定', '石家庄'],
        }],
        "yAxis": [{
            name:'(个)',
            nameTextStyle:{
                color:'#5B5B5B',
                fontSize:30
            },
            nameGap:30,
            "type": "value",
            "splitLine": {
                "show": true,
                lineStyle: {
                    color: '#DDDDDD',
                    width:3
                }
            },
            "axisLine": {
                lineStyle: {
                    color: '#DDDDDD',
                    width:3
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,
                textStyle:{
                    color:'#5B5B5B',
                    fontSize:30
                }
            },
            "splitArea": {
                "show": false
            },

        }],
        "series": [{
            "name": "已开工",
            "type": "bar",
            "stack": "总量",
            barWidth:58,
            "itemStyle": {
                "normal": {
                    "color": "#11807F",
                    "label": {
                        "show": false,
                        "textStyle": {
                            "color": "#fff"
                        },
                        "position": "inside",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                70,
                19,
                24,
                2,
                17,
                14,
            ],
        },

            {
                "name": "已完工",
                "type": "bar",
                barWidth:58,
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "#9BBB59",
                        "barBorderRadius": 0,
                        "label": {
                            "show": false,
                            "position": "inside",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": [
                    3,
                    17,
                    5,
                    10,
                    20,
                    42,
                ]
            },
            {
                "name": "已关闭",
                "type": "bar",
                barWidth:58,
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "#F79646",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            textStyle:{
                                color:'#5B5B5B',
                                fontSize:30
                            },
                            formatter: function(p) {
                                return sum[p.dataIndex]
                            }
                        }
                    }
                },
                "data": [
                    37,
                    16,
                    57,
                    10,
                    80,
                    48,
                ]
            }
        ]
    }
    var sum = [];
    for(var i = 0;i<option.series[0].data.length;i++){
        console.log(option.series[0].data.length);
        sum.push(Number(option.series[0].data[i])+Number(option.series[1].data[i])+Number(option.series[2].data[i]))
    }