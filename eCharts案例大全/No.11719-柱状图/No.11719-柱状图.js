option = {
    title: {
        top: 2,
        left: 'center',
        textStyle: {
            color: '#000',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        containLabel: true,
        top: '8%',
        left: '5%',
        right: '5%',
        bottom: '8%'
    },
    color: ["#c7021d","#eb007f","#ff2a00","#ff9000", "#D8BC37","#26be5b"],
    "xAxis": [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        axisLabel: {
            formatter: '{value}',
            color : '#fff',
            textStyle:{
                fontSize:14
            }
        },
        axisTick: {
            show:false,
        },
        axisLine : {
            show : true,
            lineStyle : {
                color : '#5e99c6'
            }
        },
        splitLine : {
            show : false
        }
    }],
    yAxis: [{
        type: 'value',
        /*  max:30,*/
        position: 'left',
        axisLabel: {
            formatter: '{value}',
            color : '#fff',
            textStyle:{
                fontSize:14
            }
        },
        axisTick: {
            show:false,
        },
        axisLine : {
            show : true,
            lineStyle : {
                color : '#5e99c6'
            }
        },
        splitLine : {
            show : false
        }
    }],
    series: [{
            "name": "严重",
            "type": "bar",
            barWidth: 40,
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            "stack": "总量",
            "data": ["7.7", "7.4", "3.7","7.7","7.7", "7.4", "3.7","7.7"]
        },{
            "name": "重度",
            "type": "bar",
            barWidth: 40,
            "stack": "总量",
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            "data": ["7.7", "7.4", "3.7","7.7", "7.4", "3.7"]
        },{
            "name": "中度",
            "type": "bar",
            barWidth: 40,
            "stack": "总量",
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            "data": ["7.7", "7.4", "3.7","7.7", "7.4", "3.7"]
        },{
            "name": "轻度",
            "type": "bar",
            barWidth: 40,
            "stack": "总量",
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            "data": ["7.7", "7.4", "3.7","7.7", "7.4", "3.7"]
        },{
            "name": "良",
            "type": "bar",
            barWidth: 40,
            "stack": "总量",
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            "data": ["3.8", "3.7", "14.8","7.7", "7.4", "3.7"]
        },{
            "name": "优",
            "type": "bar",
            barWidth: 40,
            "label": {
                "normal": {
                    "show": true,
                    "position": "inside",
                    color:"#fff",
                    "formatter": "{c}"
                }
            },
            itemStyle : {
              normal : {
                  barBorderRadius: [10, 10, 0, 0] //圆角
              }  
            },
            "stack": "总量",
            "data": ["88.5", "81.5", "74.1","7.7", "7.4", "3.7"]
        }]
};

