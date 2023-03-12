var colorList =['#228c38', '#1a57b2', '#b04b07', '#af8108'];
var colorListSub =['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
var rich =  {
                        a: {
                            color: '#fff',
                            backgroundColor: colorList[0],
                            padding: [2, 20],
                            lineHeight: 20,
                            fontSize: 16,
                            height: 30,
                            borderRadius: 15
                        },
                        b: {
                            color: '#fff',
                            backgroundColor: colorList[1],
                            padding: [2, 20],
                            lineHeight: 30,
                            fontSize: 16,
                            height: 30,
                            borderRadius: 15
                        },
                        c: {
                            color: '#fff',
                            backgroundColor: colorList[2],
                            padding: [2, 20],
                            lineHeight: 30,
                            fontSize: 16,
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
                            padding: [2, 15],
                            lineHeight: 20,
                            fontSize: 14,
                            height: 20,
                            borderRadius: 15
                        },
                        perb: {
                            color: '#ffffff',
                            backgroundColor: colorListSub[1],
                            lineHeight:20,
                            fontSize: 14,
                            height: 20,
                            padding:[2,15],
                            borderRadius: 15
                        },
                        perc: {
                            color: '#ffffff',
                            backgroundColor: colorListSub[2],
                            lineHeight: 20,
                            fontSize: 14,
                            height: 20,
                            padding:[2,15],
                            borderRadius: 15
                        },
                        perd: {
                            color: '#fff',
                            backgroundColor: colorListSub[3],
                            lineHeight: 20,
                            fontSize: 14,
                            height: 20,
                            padding:[2,15],
                            borderRadius: 15
                        }
                    };
option = {
    backgroundColor: '#030d22',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}个"
    },
    legend: {
        textStyle:{
            color:'#fff',
            fontSize:14
        },
        x: 'center',
        bottom:'30',
        itemGap:25,
        data:['泵','设备一','设备二','设备三']
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
                    shadowBlur: 30,
                    shadowColor: 'rgba(255, 255, 255, 0.4)'
                }
            },
            label: {
                normal: {
                    formatter: function(params){
                        // return '{b|'+params.name+'}\n'+params.value+'度({per|'+params.percent+'%})  '
                        var str = ''
                        switch(params.name){
                            case '泵':str = '{a|'+params.name+'}\n\n{pera|'+params.value+'个 }';break;
                            case '设备一':str = '{b|'+params.name+'}\n\n{perb|'+params.value+'个 }';break;
                            case '设备二':str = '{c|'+params.name+'}\n\n{perc|'+params.value+'个}';break;
                            case '设备三':str = '{d|'+params.name+'}\n\n{perd|'+params.value+'个 }';break;
                        }
                        return str
                    },
                    rich:rich
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
                {value:41, name:'泵'},
                {value:23, name:'设备一'},
                {value:11, name:'设备二'},
                {value:9, name:'设备三'}
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
                    show: true
                }
            },
            animation: true,
            tooltip: {
                show: true
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
                {value:41, name:'泵'},
                {value:23, name:'设备一'},
                {value:11, name:'设备二'},
                {value:9, name:'设备三'}
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
            itemStyle: {
                normal: {
                     shadowBlur: 30,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
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
                name: '设备数量统计',
                itemStyle: {
                    normal: {
                        color: '#6CB5FF',
                        shadowBlur: 30,
                        shadowColor: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            }],
            animation: true
        }
    ]
};