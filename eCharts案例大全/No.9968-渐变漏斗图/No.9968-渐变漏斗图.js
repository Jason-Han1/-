var textColorList = ['#E1FF00','#0AFFB3','#09E3FF','#1BB8FF','#00FFFF'];
    var colorList = [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(225,255,0,.8)' // 0% 处的颜色
        }, {
            offset: 0.2,
            color: 'rgba(225,255,0,.5)' // 20% 处的颜色
        }, {
            offset: 0.5,
            color: 'rgba(225,255,0,.3)' // 50% 处的颜色
        }, {
            offset: 0.8,
            color: 'rgba(225,255,0,.5)' // 80% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(225,255,0,.8)' // 100% 处的颜色
        }],
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(10,255,179,.8)' // 0% 处的颜色
        }, {
            offset: 0.2,
            color: 'rgba(10,255,179,.5)' // 20% 处的颜色
        }, {
            offset: 0.5,
            color: 'rgba(10,255,179,.3)' // 50% 处的颜色
        }, {
            offset: 0.8,
            color: 'rgba(10,255,179,.5)' // 80% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(10,255,179,.8)' // 100% 处的颜色
        }]
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(9,227,255,.8)' // 0% 处的颜色
        }, {
            offset: 0.2,
            color: 'rgba(9,227,255,.5)' // 20% 处的颜色
        }, {
            offset: 0.5,
            color: 'rgba(9,227,255,.3)' // 50% 处的颜色
        }, {
            offset: 0.8,
            color: 'rgba(9,227,255,.5)' // 80% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(9,227,255,.8)' // 100% 处的颜色
        }]
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(27,184,255,.8)' // 0% 处的颜色
        }, {
            offset: 0.2,
            color: 'rgba(27,184,255,.5)' // 20% 处的颜色
        }, {
            offset: 0.5,
            color: 'rgba(27,184,255,.3)' // 50% 处的颜色
        }, {
            offset: 0.8,
            color: 'rgba(27,184,255,.5)' // 80% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(27,184,255,.8)' // 100% 处的颜色
        }]
    }, {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(0,255,255,.8)' // 0% 处的颜色
        }, {
            offset: 0.2,
            color: 'rgba(0,255,255,.5)' // 20% 处的颜色
        }, {
            offset: 0.5,
            color: 'rgba(0,255,255,.3)' // 50% 处的颜色
        }, {
            offset: 0.8,
            color: 'rgba(0,255,255,.5)' // 80% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(0,255,255,.8)' // 100% 处的颜色
        }]
    }]
    var option = {
        backgroundColor:'#0E1F55',
        color: textColorList,
        calculable: true,
        tooltip:{
            formatter:function(param){
                
                return param.name+':'+param.percent+'%'
            }
        },
        series: [{
            name: '漏斗图',
            type: 'funnel',
            left: '10%',
            right:'10%',
            top: '10%',
            bottom: '10%',
            // width: '90%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 5,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    formatter:function(param){
                        console.log(param)
                        return param.percent+'%'
                    },
                    color: function(param) {
                        return textColorList[param.dataIndex]
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                    color: function(param) {
                        return textColorList[param.dataIndex]
                    },
                    opacity: 1
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'transparent',
                    color: function(param) {
                        return colorList[param.dataIndex]
                    }
                }

            },
            data: [{
                    value: 60,
                    name: '系统C'
                },
                {
                    value: 40,
                    name: '系统D'
                },
                {
                    value: 20,
                    name: '系统E'
                },
                {
                    value: 80,
                    name: '系统B'
                },
                {
                    value: 100,
                    name: '系统A'
                }
            ]
        }]
    };