document.body.style.backgroundColor='#13172F';
option = {
    //整体背景色
    backgroundColor: '#36394B4D',
    //整体文字样式配置
    textStyle: {
        fontFamily: 'Arial Regular',
        color: '#9B9DB4'
    },
    xAxis: {
        data: ['2015', '2016', '2017', '2018', '2019', '2020'],
        //x轴文字配置，只需要配字体，统一的配在全局的textStyle，下面不再赘述
        nameTextStyle: {
            fontSize: 16
        },
        //刻度线配置
        axisTick:{
            //不显示刻度线
            show:false
        },
        //轴线相关
        axisLine: {
            lineStyle: {
                color: '#494C6D',
                width: 1,
                type: 'solid'
            }
        }
    },
    legend: {
        textStyle: {
            fontSize: 16
        }
    },
    //提示框相关
    tooltip: {
       //提示框背景色，透明度5%
        backgroundColor:'#0C2831F2',
        padding: [20,20,20,20],
        textStyle:{
          fontSize:16,
          lineHeight:28,
          //阴影透明度 50%
          textShadowColor:'#7F000080',
          textShadowOffsetX:10,
          textShadowOffsetY:20,
        },
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: '#2C3051',
                width: 1,
                type: 'solid'
            }
        },
        axisLine: {
            show: false
        },
        //刻度线配置
        axisTick:{
            //不显示刻度线
            show:false
        },
        nameTextStyle: {
            fontSize: 14
        }
    },
    // color:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
    color: [new echarts.graphic.LinearGradient(
        0, 0, 0, 1,
        [{
                offset: 0,
                color: '#87BFFF'
            },
            {
                offset: 1,
                color: '#0037A7'
            }
        ]
    )],
    series: [{
        type: 'bar',
        //柱宽
        barWidth:7,
        data: [220, 182, 191, 234, 290, 330],
        itemStyle:{
           //圆角形态
           barBorderRadius:[10,10,0,0]
        }
    }]
};