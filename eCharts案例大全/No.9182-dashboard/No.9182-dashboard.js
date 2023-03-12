option = {
    title: {
        //show:false,
        x: "center",
        top: 80,
        // text:'影响力指数：3.68',
        // subtext: '影响力指数：3.68',
        textStyle:{
            color:'#2cadff',
            fontSize:12
        }
    },
    tooltip: {
        show: true,
        //  formatter: "{a} <br/>{b} {c}",
        backgroundColor: '#F7F9FB',
        borderColor: '#92DAFF',
        borderWidth: '1px',
        textStyle: {
            color: 'black'
        },
        formatter: function(param) {
            return '<em style="color:' + param.color + ';">影响力指数：' + param.value + '</em> '
        }

    },
    series: [{
        name: '信用分',
        type: 'gauge',
        // startAngle: 180,
        // endAngle: 0,
        min: 0,
        max:220,
        radius:'85%',
        axisLine: {
            show: true,
            lineStyle: {
                width: 4,
                shadowBlur: 0,
                color: [
                    [0.181818181818182, '#00ccd0'],
                    // [0.4, '#E98E2C'],
                    // [0.6, '#DDBD4D'],
                    [0.818181818181818, '#00ccd0'],
                    [1, '#e75b64']
                ]
            }
        },
        
        axisTick: {
            show: true,
            splitNumber: 1
        },
        splitNumber:11,
        splitLine: {
            show: false,
            length: 10,
            lineStyle: {
                //color:'black'
            },
        },
        axisLabel: {
            formatter: function(e) {
                switch (e + "") {
                    case "20":
                        return "20";
                    //return "";
                    case "100":
                        return "100";
                    //return "";
                    case "200":
                        return "200";
                    //return "";
                    default:
                        return e;
                }
            },
            textStyle: {
                fontSize: 16,
                fontWeight: ""
            },
            distance:-30
        },
    
            axisTick: {            // 坐标轴小标记
                length: -10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                },
                splitNumber: 10
            },
            splitLine: {           // 分隔线
                length: -15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto',
                }
            },
          data:[{value: 40}]
    
    },{
        name: '信用分',
        type: 'gauge',
        // startAngle: 180,
        // endAngle: 0,
        min: 0,
        max:220,
        detail: {
            show: false
          },
        radius:'83%',
        axisLine: {
            show: true,
            lineStyle: {
                width: 4,
                shadowBlur: 0,
                color: [
                    [0.181818181818182, '#00ccd0'],
                    // [0.4, '#E98E2C'],
                    // [0.6, '#DDBD4D'],
                    [0.818181818181818, '#00ccd0'],
                    [1, '#00ccd0']
                ]
            }
        },
        axisTick: {
            show: false,
            splitNumber: 1
        },
        splitNumber:11,
        splitLine: {
            show: false,
            length: 10,
            lineStyle: {
                //color:'black'
            },
        },
        axisLabel: {
            show:false,
            textStyle: {
                fontSize: 16,
                fontWeight: ""
            },
            distance:0
        },
    
            axisTick: {            // 坐标轴小标记
                show:false,
                length: -10,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                },
                splitNumber: 10
            },
            splitLine: {           // 分隔线
                show:false,
                length: -15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto',
                }
            },
    
    }]
    
}