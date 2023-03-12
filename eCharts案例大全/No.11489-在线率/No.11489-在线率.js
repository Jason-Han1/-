option = {
    backgroundColor: '',
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    series : [
        {
            name:'速度',
            type:'gauge',
            min:0,
            max:220,
            splitNumber:11,
            radius: '80%',
            center: ['35%', '55%'],
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                    width: 3,
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                show:false,
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#32e6ff',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#32e6ff',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                show:false,
            },
            detail : {
                borderColor: '#32e6ff',
                shadowColor : '#32e6ff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, 0],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontSize:32,
                    fontWeight: 'bolder',
                    color: '#32e6ff'
                }
            },
            data:[{value: 480, name: '主机个数'}]
        },
        {
            name:'主机',
            type:'gauge',
            center : ['80%', '55%'],    // 默认全局居中
            radius : '70%',
            min:0,
            max:2,
            startAngle:135,
            endAngle:45,
            splitNumber:2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#32e6ff',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                },
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '0';
                        case '1' : return '在线率';
                        case '2' : return '100';
                    }
                }
            },
            splitLine: {           // 分隔线
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#32e6ff',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor : '#32e6ff', //默认透明
                shadowBlur: 5
            },
            title : {
                show: false
            },
            detail : {
                borderColor: '#32e6ff',
                shadowColor : '#32e6ff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, -180],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#32e6ff'
                }
            },
            data:[{value: 0.5, name: '在线率'}]
        },
        {
            name:'主机',
            type:'gauge',
            center : ['80%', '55%'],    // 默认全局居中
            radius : '70%',
            min:0,
            max:2,
            startAngle:315,
            endAngle:225,
            splitNumber:2,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                show: false
            },
            axisLabel: {
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#32e6ff',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                },
                formatter:function(v){
                    switch (v + '') {
                        case '0' : return '0';
                        case '1' : return '异常率';
                        case '2' : return '100';
                    }
                }
            },
            splitLine: {           // 分隔线
                length :15,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#32e6ff',
                    shadowColor : '#32e6ff', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:2,
                shadowColor : '#32e6ff', //默认透明
                shadowBlur: 5
            },
            title : {
                show: false
            },
            detail : {
                borderColor: '#32e6ff',
                shadowColor : '#32e6ff', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, 160],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#32e6ff'
                }
            },
            data:[{value: 1.5, name: '异常率'}]
        }
    ]
};

myChart.setOption(option);
