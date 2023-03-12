option = {
        backgroundColor:'#000',
        series : [
            {
                type: 'gauge',
                z: 3,
                min: 0,
                max: 15,
                startAngle:200,
                endAngle:-20,
                radius: '70%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 25,
                        shadowColor:'#0092EE',
                        shadowBlur:50,
                        color:[[0.2, '#0092EE'], [1, '#BECAD8']],
                    }
                },
                axisLabel:{
                    show:false,
                    fontSize: 34,
                    
                },
                axisTick: {            // 坐标轴小标记
                    show:true,
                    length:10,
                    lineStyle:{
                        width:3,
                    }
                },
                pointer: {
                    width:20,
                    length:'70%'
                },
                splitLine: {           // 分隔线
                    show:true,
                    length:30,
                    lineStyle:{
                        width:3,
                    }
                },
                title: {
                    offsetCenter: [0, '-20%'],       // x, y，单位px
                    fontSize:45,
                    color:'#fff',
                },
                detail: {
                    fontSize:40,
                    color:'#fff',
                    formatter: function (value) {
                        return '{a|'+value+'}亿元';
                    },
                    rich:{
                        a:{
                            fontSize:45,
                            color:'#0093EE'
                        }
                    }
                },
                data:[{value:3.15, name: '利润总额'}]
            },
            {
                type: 'gauge',
                center: ['18%', '58%'],    // 默认全局居中
                radius: '55%',
                min:0,
                max:12,
                startAngle:200,
                endAngle:50,
                splitNumber:8,
                axisLabel:{
                    show:false,
                    fontSize:34,
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 18,
                         shadowColor:'#0092EE',
                        shadowBlur:50,
                        color:[[0.2, '#0092EE'], [0.8, '#0092EE'], [1, '#BECAD8']],
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show:true,
                    length:7,
                    lineStyle:{
                        width:3,
                    }
                },
                pointer: {
                    width:13,
                    length:'70%'
                },
                splitLine: {           // 分隔线
                    show:true,
                    length:23,
                    lineStyle:{
                        width:3,
                    }
                },
                title: {
                    offsetCenter: [0, '-20%'],       // x, y，单位px
                    fontSize:45,
                    color:'#fff',
                },
                detail: {
                    fontSize:40,
                    color:'#fff',
                    formatter: function (value) {
                        return '{a|'+value+'}亿元';
                    },
                    rich:{
                        a:{
                            fontSize:45,
                            color:'#0093EE'
                        }
                    }
                },
                data:[{value: 2.36, name: '母公司'}]
            },
            {
                type: 'gauge',
                center: ['82%', '58%'],    // 默认全局居中
                radius: '55%',
                min:0,
                max:2,
                startAngle:130,
                endAngle:-20,
                splitNumber:4,
                axisLabel:{
                    show:false,
                    fontSize:34,
                },
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 18,
                        shadowColor:'#0092EE',
                        shadowBlur:50,
                        color:[[0.2, '#BECAD8'], [0.8, '#0092EE'], [1, '#25C0C8']],
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show:true,
                    length:7,
                    lineStyle:{
                        width:3,
                    }
                },
                pointer: {
                    width:13,
                    length:'70%'
                },
                splitLine: {           // 分隔线
                    show:true,
                    length:23,
                    lineStyle:{
                        width:3,
                    }
                },
                title: {
                    offsetCenter: [0, '-20%'],       // x, y，单位px
                    fontSize:45,
                    color:'#fff',
                },
                detail: {
                    fontSize:40,
                    color:'#fff',
                    formatter: function (value) {
                        return '{a|'+value+'}亿元';
                    },
                    rich:{
                        a:{
                            fontSize:45,
                            color:'#0093EE'
                        }
                    }
                },
                data:[{value: 0.79, name: '子公司'}]
            },

        ]
    };