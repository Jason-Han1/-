app.title = '多 Y 轴示例';

var colors = [ '#00CC33','#44DFDB', '#675bba'];

option = {
    color:colors,

    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'cross'
    //     }
    // },
   grid:{
                left:50,
                right:50,
                bottom:36,
                top:60,
            },
    // toolbox: {
    //     feature: {
    //         dataView: {show: true, readOnly: false},
    //         restore: {show: true},
    //         saveAsImage: {show: true}
    //     }
    // },
    legend: {
        data:['血压','脉搏']
    },
   backgroundColor:'#ffffff',
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['2018/5/1','2018/5/2','2018/5/3','2018/5/4','2018/5/5','2018/5/6','2018/5/7','2018/5/8','2018/5/9','2018/5/10','2018/5/11','2018/5/12'],
            axisLine:{  
            lineStyle:{  
                color:"#b5b5b5"
            }  
        },
        axisLabel: {
            show: true,
            textStyle: {
                fontFamily: "PingFang-SC-Medium",
            	fontSize: 12,
            	color: "#666666"
            }
        }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '血压',
             min: 0,
            max: 250,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            }
        },
        {
            type: 'value',
            name: '脉搏',
           
            min: 0,
            max: 25,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            }
        },
        
    ],
    series: [
        
        {
            name:'血压',
            type: 'k',
            data: [
            [120, 80, 80, 80],
            [140, 95, 135, 135],
            [133, 88,88, 88],
            [140, 90, 140, 140],
            [120, 80, 80, 80],
            [140, 95, 135, 135],
            [133, 88,88, 88],
            [140, 90, 140, 140],
            [120, 80, 80, 80],
            [140, 95, 135, 135],
            [133, 88,88, 88],
            [140, 90, 140, 140]
            ],
            itemStyle: {
            normal: {
                color:colors[1],
                color0: colors[1],
                borderColor: colors[1],
                borderColor0: colors[1]
            },
        }
        },
        {
            name:'脉搏',
            data: [56, 56, 58, 59, 66, 62, 63,56, 56, 58, 59, 66, 62, 63],
            type: 'line',
            lineStyle: {
            normal: {
                width: 1,
                color:colors[0]
            }
        }
        },
    ]
};
