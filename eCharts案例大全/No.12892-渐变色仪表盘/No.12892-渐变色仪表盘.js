let data_center = 95.65;
let data_left = 0;
let data_right = 100;
let center = {
    center: ['50%','75%'],
    left: ['25%','25%'],
    right: ['75%', '25%']
};
option = {
    title:{
        text: '北京'
    },
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    // toolbox: {
    //     feature: {
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    
    series: [
        //中间
        {
            name: '圆底色',
            type: 'gauge',
            startAngle: 180,
            endAngle: -179,
            radius: 100,
            center: center.center,
            axisLabel:{
                show:false
            },
            axisLine: {
                lineStyle:{
                    width: 3,
                    color: [[0,'#10d0a1'],[1,'#10d0a1']]
                }
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show: false
            },
            pointer:{
                show:false
            },
            detail: {
                show:false
            },
            // data: [{value: 50, name: '00'}]
        },
        {
            name: '数据轴',
            type: 'gauge',
            splitNumber:1,
            radius: 100,
            center: center.center,
            axisLabel:{
                show: false
                // padding:[1,1,1,1]
            },
            axisLine:{
                lineStyle:{
                    width:3,
                    
                }
            },
            axisTick:{
                show:false,
                // splitNumber:2500
            },
            splitLine:{
                length: -10,
            },
            title: {
                offsetCenter: [0,20],
                fontFamily:"Microsoft YaHei",
                color: '#fff'
            },
            data: [{name:'信用指数',value:data_center}],
            detail: {
                offsetCenter: [0,-20],
                fontSize: 46,
                color: '#00c0e1'
            },
            pointer: {
                show:false
            }
            
        },
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%','50%'],
            radius: 102,
            center: center.center,
            startAngle: 198,
            endAngle: 225 - Math.floor(data_center/10)*27,
            // endAngle: -18,
            splitNumber:Math.floor(data_center/10) - 1,
            
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel:{
                show:false,
                // distance: -25,
            },
            axisTick: {
                show:false
            },
            splitLine: {
                length: -5,
            },
            detail: {
                show:false
            },
        },
        {
            name: '刻度（灰色）',
            type: 'gauge',
            center: ['50%','50%'],
            radius: 102,
            center: center.center,
            startAngle: 225-Math.floor((data_center+10)/10)*27,
            endAngle: -18,
            splitNumber:8-Math.floor(data_center/10) ,
            
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel:{
                show:false,
                // distance: -25,
            },
            axisTick: {
                show:false
            },
            splitLine: {
                length: -5,
                lineStyle:{
                    color: '#8a9bd4'
                }
            },
            detail: {
                show:false
            },
        },
        {
            name: '刻度标签',
            type: 'gauge',
            radius: 100,
            center: center.center,
            max: Math.floor(data_center/10)*10,
            splitNumber: Math.floor(data_center/10) === 0 ? 1 : Math.floor(data_center/10),
            endAngle: 225 - Math.floor(data_center/10)*27,
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel: {
                
                // formatter: function (value) {
                //     // console.dir(params)
                //     return value + 'km/h';
                // },
                
                color: '#fff'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show: false
            }
            
        },
        {
            name: '刻度标签（灰色）',
            type: 'gauge',
            radius: 100,
            center: center.center,
            min: Math.floor(data_center/10)*10 + 10,
            splitNumber: 10-Math.floor(data_center/10) - 1 === 0 ? 1: 10-Math.floor(data_center/10) - 1,
            startAngle: 225-Math.floor((data_center+10)/10)*27,
            // endAngle: -46,
            axisLine:{
                
                lineStyle:{
                    width:0,
                    // color: [[0,'rgba(60, 67, 107,0.5)'],[1,'rgba(60, 67, 107,0.5)']]
                }
            },
            axisLabel: {
                show: true,
                color: '#8a9bd4'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show: false
            }
        },
        {
            name: '数据-进度条',
            type: "gauge",
            radius: 97,
            center: center.center,
            endAngle: 225 - Math.floor(data_center)*27/10,
            axisLine:{
                lineStyle:{
                    width:12,
                    color: [[0,'#6b0e91'],[1,'6b0e91']]
                }
            },
            axisLabel: {
                show: false,
                color: '#999'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show:true
            },
            data:50
            // [{value: data, name: '信用指数'}]
        },
        //中间
        
        //左上
        {
            name: '圆底色',
            type: 'gauge',
            startAngle: 180,
            endAngle: -179,
            radius: 100,
            center: center.left,
            axisLabel:{
                show:false
            },
            axisLine: {
                lineStyle:{
                    width: 3,
                    color: [[0,'#10d0a1'],[1,'#10d0a1']]
                }
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show: false
            },
            pointer:{
                show:false
            },
            detail: {
                show:false
            },
            // data: [{value: 50, name: ''}]
        },
        {
            name: '数据轴',
            type: 'gauge',
            splitNumber:1,
            radius: 100,
            center: center.left,
            axisLabel:{
                show: false
                // padding:[1,1,1,1]
            },
            axisLine:{
                lineStyle:{
                    width:3,
                    
                }
            },
            axisTick:{
                show:false,
                // splitNumber:2500
            },
            splitLine:{
                length: -10,
            },
            title: {
                offsetCenter: [0,20],
                fontFamily:"Microsoft YaHei",
                color: '#fff'
            },
            data: [{name:'信用指数',value:data_left}],
            detail: {
                offsetCenter: [0,-20],
                fontSize: 46,
                color: '#00c0e1'
            },
            pointer: {
                show: false
            }
            
        },
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%','50%'],
            radius: 102,
            center: center.left,
            startAngle: 198,
            endAngle: 225 - Math.floor(data_left/10)*27,
            // endAngle: -18,
            splitNumber:Math.floor(data_left/10) - 1,
            
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel:{
                show:false,
                // distance: -25,
            },
            axisTick: {
                show:false
            },
            splitLine: {
                length: -5,
            },
            detail: {
                show:false
            },
        },
        {
            name: '刻度（灰色）',
            type: 'gauge',
            center: ['50%','50%'],
            radius: 102,
            center: center.left,
            startAngle: 225-Math.floor((data_left+10)/10)*27,
            endAngle: -18,
            splitNumber:8-Math.floor(data_left/10) ,
            
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel:{
                show:false,
                // distance: -25,
            },
            axisTick: {
                show:false
            },
            splitLine: {
                length: -5,
                lineStyle:{
                    color: '#8a9bd4'
                }
            },
            detail: {
                show:false
            },
        },
        {
            name: '刻度标签',
            type: 'gauge',
            radius: 100,
            center: center.left,
            max: Math.floor(data_left/10)*10,
            splitNumber: Math.floor(data_left/10) === 0 ? 1 : Math.floor(data_left/10),
            endAngle: 225 - Math.floor(data_left/10)*27,
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel: {
                
                // formatter: function (value) {
                //     // console.dir(params)
                //     return value + 'km/h';
                // },
                
                color: '#fff'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show: false
            }
            
        },
        {
            name: '刻度标签（灰色）',
            type: 'gauge',
            radius: 100,
            center: center.left,
            min: Math.floor(data_left/10)*10 + 10,
            splitNumber: 10-Math.floor(data_left/10) - 1 === 0 ? 1: 10-Math.floor(data_left/10) - 1,
            startAngle: 225-Math.floor((data_left+10)/10)*27,
            axisLine:{
                
                lineStyle:{
                    width:0,
                    // color: [[0,'rgba(60, 67, 107,0.5)'],[1,'rgba(60, 67, 107,0.5)']]
                }
            },
            axisLabel: {
                show: true,
                color: '#8a9bd4'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show: false
            }
        },
        {
            name: '数据-进度条',
            type: "gauge",
            radius: 97,
            center: center.left,
            endAngle: 225 - Math.floor(data_left)*27/10,
            axisLine:{
                
                lineStyle:{
                    width:12,
                    color: [[0,'#6b0e91'],[1,'6b0e91']]
                }
            },
            axisLabel: {
                show: false,
                color: '#999'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            }
        },
        //左上
        
        //右上
        {
            name: '圆底色',
            type: 'gauge',
            startAngle: 180,
            endAngle: -179,
            radius: 100,
            center: center.right,
            axisLabel:{
                show:false
            },
            axisLine: {
                lineStyle:{
                    width: 3,
                    color: [[0,'#10d0a1'],[1,'#10d0a1']]
                }
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show: false
            },
            pointer:{
                show:false
            },
            detail: {
                show:false
            },
            // data: [{value: 50, name: ''}]
        },
        {
            name: '数据轴',
            type: 'gauge',
            splitNumber:1,
            radius: 100,
            center: center.right,
            axisLabel:{
                show: false
                // padding:[1,1,1,1]
            },
            axisLine:{
                lineStyle:{
                    width:3,
                    
                }
            },
            axisTick:{
                show:false,
                // splitNumber:2500
            },
            splitLine:{
                length: -10,
            },
            title: {
                offsetCenter: [0,20],
                fontFamily:"Microsoft YaHei",
                color: '#fff'
            },
            data: [{name:'信用指数',value:data_right}],
            detail: {
                offsetCenter: [0,-20],
                fontSize: 46,
                color: '#00c0e1'
            },
            pointer: {
                show: false
            }
            
        },
        {
            name: '刻度',
            type: 'gauge',
            center: ['50%','50%'],
            radius: 102,
            center: center.right,
            startAngle: 198,
            endAngle: 225 - Math.floor(data_left/10)*27,
            // endAngle: -18,
            splitNumber:Math.floor(data_left/10) - 1,
            
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel:{
                show:false,
                // distance: -25,
            },
            axisTick: {
                show:false
            },
            splitLine: {
                length: -5,
            },
            detail: {
                show:false
            },
        },
        {
            name: '刻度（灰色）',
            type: 'gauge',
            center: ['50%','50%'],
            radius: 102,
            center: center.right,
            startAngle: 225-Math.floor((data_left+10)/10)*27,
            endAngle: -18,
            splitNumber:8-Math.floor(data_left/10) ,
            
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel:{
                show:false,
                // distance: -25,
            },
            axisTick: {
                show:false
            },
            splitLine: {
                length: -5,
                lineStyle:{
                    color: '#8a9bd4'
                }
            },
            detail: {
                show:false
            },
        },
        {
            name: '刻度标签',
            type: 'gauge',
            radius: 100,
            center: center.right,
            max: Math.floor(data_right/10)*10,
            splitNumber: Math.floor(data_right/10) === 0 ? 1 : Math.floor(data_right/10),
            endAngle: 225 - Math.floor(data_right/10)*27,
            axisLine:{
                lineStyle:{
                    width:0
                }
            },
            axisLabel: {
                
                // formatter: function (value) {
                //     // console.dir(params)
                //     return value + 'km/h';
                // },
                
                color: '#fff'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show: false
            }
            
        },
        {
            name: '刻度标签（灰色）',
            type: 'gauge',
            radius: 100,
            center: center.right,
            min: Math.floor(data_right/10)*10 + 10,
            splitNumber: 10-Math.floor(data_right/10) - 1 === 0 ? 1: 10-Math.floor(data_right/10) - 1 ,
            startAngle: 225-Math.floor((data_right+10)/10)*27,
            axisLine:{
                
                lineStyle:{
                    width:0,
                    // color: [[0,'rgba(60, 67, 107,0.5)'],[1,'rgba(60, 67, 107,0.5)']]
                }
            },
            axisLabel: {
                show: true,
                color: '#8a9bd4'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            detail:{
                show: false
            }
        },
        {
            name: '数据-进度条',
            type: "gauge",
            radius: 97,
            center: center.right,
            endAngle: 225 - Math.floor(data_right)*27/10,
            axisLine:{
                
                lineStyle:{
                    width:12,
                    color: [[0,'#6b0e91'],[1,'6b0e91']]
                }
            },
            axisLabel: {
                show: false,
                color: '#999'
            },
            axisTick: {
                show:false
            },
            splitLine: {
                show:false,
                length: -30,
                
            },
            pointer:{
                show:false,
            },
            // data: [{value: 23.5, name: '信用指数'}]
        },
        //右上
        
    ]
};
console.log(option)