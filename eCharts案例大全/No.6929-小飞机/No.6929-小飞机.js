option = {
    title: {
        text: '小飞机',
        subtext: '飞呀飞~'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    
    series: [{center: ['50%', '80%'], 
   
            name: '速度',
            type: 'gauge',
            z: 4,
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '15%',
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 15,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                backgroundColor: 'auto',
                borderRadius: 2,
                color: '#eee',
                padding: 3,
                textShadowBlur: 2,
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
                textShadowColor: '#222'
            },
            title: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic'
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                formatter: function (value) {
                    value = (value + '').split('.');
                    value.length < 2 && (value.push('00'));
                    return ('00' + value[0]).slice(-2)
                        + '.' + (value[1] + '00').slice(0, 2);
                },
                fontWeight: 'bolder',
                borderRadius: 3,
                backgroundColor: '#444',
                borderColor: '#aaa',
                shadowBlur: 5,
                shadowColor: '#333',
                shadowOffsetX: 0,
                shadowOffsetY: 3,
                borderWidth: 2,
                textBorderColor: '#000',
                textBorderWidth: 2,
                textShadowBlur: 2,
                textShadowColor: '#fff',
                textShadowOffsetX: 0,
                textShadowOffsetY: 0,
                fontFamily: 'Arial',
                width: 100,
                color: '#eee',
                rich: {}
            },
            data: [{value: 40, name: 'km/h'}]
        },
        { z: 4,
        
            name: '转速',
            type: 'gauge',
            center: ['40%', '80%'],    // 默认全局居中
            radius: '10%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                length: 12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            splitLine: {           // 分隔线
                length: 20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 5
            },
            title: {
                offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
                // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            },
            data: [{value: 1.5, name: 'x1000 r/min'}]
        },
        { z: 4,
            name: '油表',
            type: 'gauge',
            center: ['60%', '80%'],    // 默认全局居中
            radius: '10%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                splitNumber: 5,
                length: 10,        // 属性length控制线长
                lineStyle: {        // 属性lineStyle控制线条样式
                    color: 'auto'
                }
            },
            axisLabel: {
                formatter: function (v){
                    switch (v + '') {
                        case '0' : return 'E';
                        case '1' : return 'Gas';
                        case '2' : return 'F';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width: 2
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{value: 0.5, name: 'gas'}]
        },
        { z: 4,
            name: '水表',
            type: 'gauge',
            center: ['60%', '80%'],    // 默认全局居中
            radius: '10%',
            
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    width: 8
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                formatter: function(v){
                    switch (v + '') {
                        case '0' : return 'H';
                        case '1' : return 'Water';
                        case '2' : return 'C';
                    }
                }
            },
            splitLine: {           // 分隔线
                length: 15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                }
            },
            pointer: {
                width:2
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [{value: 0.5, name: 'gas'}]
        },
        { 
            sort: 'ascending',
            name: '预期',
            type: 'funnel',
            left: '10%',
            width: '80%',
           label:false,
            labelLine: {
                show: false
            },
            itemStyle: {
                opacity: 0.7
            },
            emphasis: {
                label:false,
            },
            data: [
                {value: 60, name: '访问'},
                {value: 40, name: '咨询'},
                {value: 20, name: '订单'},
                {value: 80, name: '点击'},
                {value: 100, name: '展现'}
            ]
        },
        {z: 1,
            sort: 'ascending',
            name: '实际',
            type: 'funnel',
            left: '10%',
            width: '80%',
            maxSize: '80%',
            label:false,
            itemStyle: {
                opacity: 0.5,
                borderColor: '#fff',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    position: 'inside',
                    formatter: '{b}实际: {c}%'
                }
            },
            data: [
                {value: 30, name: '访问'},
                {value: 10, name: '咨询'},
                {value: 5, name: '订单'},
                {value: 50, name: '点击'},
                {value: 80, name: '展现'}
            ]
        },
        {z: 1,
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            funnelAlign: 'right',
 label:false,
            center: ['25%', '25%'],  // for pie

            data: [
                {value: 60, name: '产品C'},
                {value: 30, name: '产品D'},
                {value: 10, name: '产品E'},
                {value: 80, name: '产品B'},
                {value: 100, name: '产品A'}
            ]
        },
        {z: 3,
            name: '金字塔',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '5%',
            top: '50%',
            sort: 'ascending',
            funnelAlign: 'right',
 label:false,
            center: ['25%', '75%'],  // for pie

            data: [
                {value: 60, name: '产品C'},
                {value: 30, name: '产品D'},
                {value: 10, name: '产品E'},
                {value: 80, name: '产品B'},
                {value: 100, name: '产品A'}
            ]
        },
        {z: 1,
            name: '漏斗图',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            funnelAlign: 'left',
 label:false,
            center: ['75%', '25%'],  // for pie

            data: [
                {value: 60, name: '产品C'},
                {value: 30, name: '产品D'},
                {value: 10, name: '产品E'},
                {value: 80, name: '产品B'},
                {value: 100, name: '产品A'}
            ]
        },
        {z:2,
            name: '金字塔',
            type: 'funnel',
            width: '40%',
            height: '45%',
            left: '55%',
            top: '50%',
            sort: 'ascending',
            funnelAlign: 'left',
 label:false,
            center: ['75%', '75%'],  // for pie

            data: [
                {value: 60, name: '产品C'},
                {value: 30, name: '产品D'},
                {value: 10, name: '产品E'},
                {value: 80, name: '产品B'},
                {value: 100, name: '产品A'}
            ]
        }
        
    ]
    
};
