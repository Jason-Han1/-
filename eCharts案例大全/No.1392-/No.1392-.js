var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
var chartdata=[120,34,45,34]
var data = 308; //数值大小
var max = 500; //满刻度大小
var radiusMax=50;
var startAngle=-90;
var placeHolderStyle = {
    normal: {
        color: '#393d50',
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
    },
    emphasis: {
        color: '#393d50',
    },
};
var seriesArr=[];
  chartdata.map((item,index)=>{
        seriesArr.push(
            {
            type: 'pie',
            radius: [radiusMax-index*10+'%', radiusMax-index*10+2.1+'%'],
            hoverAnimation: false,
            startAngle:startAngle,
            labelLine: {
                show: false,
            },
            data: [
                {
                    value:item,
                    itemStyle: {
                        normal: {
                            color:color[index],
                            
                        },
                    },
                },
                {
                    //画中间的图标
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: color[index],
                        borderRadius: 25,
                        padding: 15,
                    },
                },
                {
                    //画中间的图标
                    value: 0,
                    label: {
                        position: 'inside',
                        backgroundColor: '#393d50',
                        borderRadius: 25,
                        padding: 4
                    },
                },
                {
                    //画剩余的刻度圆环
                    value: max - 54.6,
                    tooltip: {
                        show: false,
                    },
                    itemStyle: placeHolderStyle,
                },
            ],
        },
        )
    })
option = {
    backgroundColor: '#142058',
    title: {
        show: false,
    },
    tooltip: {
        show: false,
    },
    legend: {
        show: false,
    },
    series: [
        ...seriesArr,
        {
            type: 'gauge',
            min: 0,
            max: 100,
            radius: '12%',
            splitNumber: 1, //刻度数量
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    color: '#3C4349',
                },
            },
            axisTick: {
                show: true,
                length: 20,
                lineStyle: {
                    width: 2,
                    color: '#3C4349',
                },
            },
            axisLabel: {
                show: false,
            },
            splitLine: {
                show: true,
                length: -12,
                lineStyle: {
                    color: '#3C4349',
                },
            },
            pointer: {
                show: false,
            },
            title: {
                show: false,
            },
        },
        {
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: true,
            hoverAnimation: false,
            radius: ['9%', '8%'],
            center: ['50%', '50%'],
            label: {
                show: false,
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false,
                },
                borderWidth: 5,
            },
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: '#3C4349',
                        borderWidth: 0,
                    },
                    tooltip: {
                        show: false,
                    },
                    hoverAnimation: false,
                },
            ],
        },
    ],
  
};
