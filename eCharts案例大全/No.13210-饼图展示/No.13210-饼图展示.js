var colorList =['#228c38', '#1a57b2', '#b04b07', '#af8108'];
var colorListSub =['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
option = {
    backgroundColor: '#061632',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}度 ({d}%)"
    },
    legend: {
        orient: 'vertical',
        textStyle:{
            color:'#fff'
        },
        x: 'right',
        data:['平时用电','谷时用电','峰时用电','尖时用电']
    },
    series: [
        {
            type:'pie',
            radius: ['10%', '55%'],
            roseType: 'radius',
            clockwise :false,
            z:10,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                normal: {
                    formatter: function(params){
                        // return '{b|'+params.name+'}\n'+params.value+'度({per|'+params.percent+'%})  '
                        var str = ''
                        switch(params.name){
                            case '平时用电':str = '{a|'+params.name+'}\n\n{pera|'+params.value+'度 ('+params.percent+'%)}';break;
                            case '谷时用电':str = '{b|'+params.name+'}\n\n{perb|'+params.value+'度 ('+params.percent+'%)}';break;
                            case '尖时用电':str = '{c|'+params.name+'}\n\n{perc|'+params.value+'度 ('+params.percent+'%)}';break;
                            case '峰时用电':str = '{d|'+params.name+'}\n\n{perd|'+params.value+'度 ('+params.percent+'%)}';break;
                        }
                        return str
                    },
                    // backgroundColor: '#eee',
                    /*borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    shadowBlur:3,
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                    shadowColor: '#999',
                    padding: [0, 7],*/
                    rich: {
                        a: {
                            color: '#ffffff',
                            backgroundColor: colorList[0],
                            padding: [2, 20],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            borderRadius: 15
                        },
                        b: {
                            color: '#ffffff',
                            backgroundColor: colorList[1],
                            padding: [2, 20],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            borderRadius: 15
                        },
                        c: {
                            color: '#ffffff',
                            backgroundColor: colorList[2],
                            padding: [2, 20],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            borderRadius: 15
                        },
                        d: {
                            color: '#ffffff',
                            backgroundColor: colorList[3],
                            padding: [2, 20],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            borderRadius: 15
                        },
                        pera: {
                            color: '#ffffff',
                            backgroundColor: colorListSub[0],
                            padding: [2, 5],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            borderRadius: 15
                        },
                        perb: {
                            color: '#ffffff',
                            backgroundColor: colorListSub[1],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            padding:[2,5],
                            borderRadius: 15
                        },
                        perc: {
                            color: '#ffffff',
                            backgroundColor: colorListSub[2],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            padding:[2,5],
                            borderRadius: 15
                        },
                        perd: {
                            color: '#ffffff',
                            backgroundColor: colorListSub[3],
                            lineHeight: 30,
                            fontSize: 14,
                            height: 30,
                            padding:[2,5],
                            borderRadius: 15
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 50,
                    length2: 50,
                    lineStyle:{
                        width:2
                    }
                }
            },
            data:[
                {value:300, name:'平时用电'},
                {value:351, name:'谷时用电'},
                {value:300, name:'尖时用电'},
                {value:200, name:'峰时用电'}
            ]
        },
        // 边框的设置
        {
            radius: ['10%', '14%'],
            type: 'pie',
            clockwise :false,
            z:11,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = ['#165f3d', '#15458c', '#563527', '#594f27'];
                        return colorList[params.dataIndex]
                    }
                }
            },
            data:[
                {value:300, name:'平时用电'},
                {value:351, name:'谷时用电'},
                {value:300, name:'尖时用电'},
                {value:200, name:'峰时用电'}
            ]
        },
        // 中心的圆圈
        {
            radius: ['60%', '60.3%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                name: '民警训练总量',
                itemStyle: {
                    normal: {
                        color: '#5A96FF',
                    }
                }
            }],
            animation: false
        }
    ]
};