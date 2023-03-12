option = {
    tooltip : {
        // formatter: "{a} <br/>{b} : {c}%"
    },
    series: [
        {
            name: '',
            type: 'gauge',
            // center: ["50%", "45%"], // 仪表位置
            radius: "80%", //仪表大小
            startAngle: 200, //开始角度
            endAngle: -20, //结束角度
            axisLine: {
                lineStyle: { // 属性lineStyle控制线条样式
                   color: [
                            [ 0.4,  new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                offset: 0.4,
                                color: "#45e4c3" // 50% 处的颜色
                                }, {
                                offset: 0.75,
                                color: "#207ae8" // 40% 处的颜色
                                }], false) ], // 100% 处的颜色
                                
                                [ 1,  new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0.1,
                                color: "#207ae8" // 50% 处的颜色
                                }, {
                                offset: 0.6,
                                color: "#f06e23" // 40% 处的颜色
                                }], false) ]
                            ],
                    width: 10
                }
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show: false
            },
            axisLabel:{
                show: false
            },
            pointer :{
                // show: false
                length: '45%'
            },
            detail: {
                show: false
            }
        },
           {
            name: '',
            type: 'gauge',
            // center: ["50%", "45%"], // 仪表位置
            radius: "55%", //仪表大小
            startAngle: 200, //开始角度
            endAngle: -20, //结束角度
            axisLine: {
                show: false,
            },
            splitLine: {
                // show: false
                length:15
            },
            axisTick:{
                // show: false
                length:15
            },
            axisLabel:{
                show: false
            },
            detail: {
                show: false
            }
        },
        {
            name: '先行指标',
            type: 'gauge',
            // center: ["50%", "45%"], // 默认全局居中
            radius : "75%",
            startAngle: 200,
            endAngle: -20,
            axisLine : {
                show : true,
                lineStyle : { // 属性lineStyle控制线条样式
                    color: [
                                [ 0.4,  new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                                offset: 0.4,
                                color: "#45e4c3" // 50% 处的颜色
                                }, {
                                offset: 0.75,
                                color: "#207ae8" // 40% 处的颜色
                                }], false) ], // 100% 处的颜色
                                
                                [ 1,  new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0.1,
                                color: "#207ae8" // 50% 处的颜色
                                }, {
                                offset: 0.6,
                                color: "#f06e23" // 40% 处的颜色
                                }], false) ]
                            ],
                    width : 60//表盘宽度
                }
            },
            splitLine : { //分割线样式（及10、20等长线样式）
                show: false
            },
            axisTick : { //刻度线样式（及短线样式）
                show: false          
            },
            axisLabel : { //文字样式（及“10”、“20”等文字样式）
               show: false   
            },
            pointer :{
                // show: false,
                length:'75%',
                width:10
            },
            markPoint:{
                    symbol:'circle',
                    symbolSize:7,
                    data:[
                    {x:'center',y:'center',itemStyle:{color:'#09194A'}} 
                    ]
                    },
            itemStyle:{
                color:'#45e4c3'
            },
            detail: {
                formatter : "{score|{value}}",
                offsetCenter: [0, '30%'],
                rich : {
                    score : {
                        color : "#207ae8",
                        fontFamily : "微软雅黑",
                        fontSize : 80
                    }
                }
            },
            title:{
                color: "#b9dced",
                fontFamily : "微软雅黑",
                fontSize : 40,
                offsetCenter: [0,"60%"],
            },
            data: [{
                name:'工业运行图',
                value: '45'
            }]
        }
    ]
};

