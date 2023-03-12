
var colorArray = [
    {
        top: 'rgba(173,39,49)',//红shen
        bottom: 'rgba(173,39,49, 0.3)'
    },
    {
        top: 'rgba(195,175,49)',//黄
        bottom: 'rgba(195,175,49, 0.3)'
    },{
        top: 'rgba(56,215,48)',//绿
        bottom: 'rgba(56,215,48, 0.3)'
    },
    {
        top: 'rgba(40,203,195)',//蓝
        bottom: 'rgba(40,203,195, 0.3)'
    },{
        top: 'rgba(42,45,221)',//深蓝
        bottom: 'rgba(42,45,221, 0.3)'
    },
    {
        top: 'rgba(215,47,215)',//粉
        bottom: 'rgba(215,47,215, 0.3)'
    }
    ];
option = {
    backgroundColor: '#0E2A43',
     title: {
        text: '条形七彩渐变柱状图',
        textStyle: {
                color: '#ffd285'
        },
        subtext:'@author亮'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    
            tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { 
            type: 'shadow' 
        }
    },
    xAxis:  {
        type: 'value',
         position:'top',
        axisTick : {show: false},
        axisLine: {
            show: false,
            lineStyle:{
                color:'#fff',
            }
        },
        splitLine: {
            show: true
        },
    },
    yAxis: [
            {
                type: 'category',
                axisTick : {
                    show: true,
                    alignWithLabel: true,
                    length:5,
                   
                },
                inverse:'true', //排序
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:'#fff',
                    }
                },
                data: ['楼宇一','楼宇二','楼宇三','楼宇四','楼宇五','楼宇六']
            }
            
    ],
    series: [
        {
            name: '能耗值',
            type: 'bar',
            itemStyle:{
                normal: {
                    show: true,
                   color: function (params) {
                        let num = colorArray.length;
                        return{
                            type: 'linear',
                            colorStops: [{
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }, {
                                offset: 0, color: colorArray[params.dataIndex%num].bottom
                            }, {
                                offset: 1, color: colorArray[params.dataIndex%num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius:88,
                    borderWidth:0,
                    borderColor:'#333',
                }
            },
            barGap:'0%',
            barCategoryGap:'50%',
            data: [60, 132, 101, 134,230,180]
        }
       
    ]
};