
const colorArr = ['#49CCFFee', '#20D3ABee', '#FDD56Aee'];
const colorAlpha = ['#49CCFF88', '#20D3AB88', '#FDD56A88'];
option = {
    backgroundColor:'#000E1B',
    title:{
        show: false,
        text:'在线状态',
        textStyle:{
          color:'#FFFFFF'  
        },
        left:'300px',
        top: '300'
        
    },
    tooltip: {
        show: false,
        formatter: "{b} <br> {c}%"

    },
    legend: {
        icon: "circle", 
        bottom: '43%',
        left:'10%',
        itemWidth: 7,
        itemHeight: 7,
        itemGap: 40,
        textStyle:{
            color:'#89A7AF',
        },
        data:[{
                name :'在线'
             },
             {
                name :'离线'
             } 
            ]
    },
    xAxis: [{
        type :'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false,
        }
    }],
    yAxis: [{
        //type: 'category',
        data: [''],
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            }
        }

    }],
    series: [
        {
            name:'在线',
            type:'bar',
            barWidth:16,
            stack: '在线状态',
            label: {
                normal: {
                    borderWidth: 5,
                    distance: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    borderRadius: 1,
                    borderColor: colorArr[0],
                    backgroundColor: colorArr[0],
                    show: true,
                    position: 'top',
                    formatter: '{a}：{c}个',
                    color: '#000', 
                    shadowBlur: 20, 
                    shadowColor: colorArr[0],
                }
            },
            itemStyle: {
                normal: { 
                    shadowBlur: 20, 
                    shadowColor: colorArr[0],
                    color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[0],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[0],
                    },
                ])
                }
            },
            data:[{
                value:14850, 
            }]
        }, 
        {
            name:'离线',
            type:'bar',
            barWidth:16,
            stack: '在线状态',
            itemStyle: {
                color: '#E67C26'
            },
            label: {
                normal: {
                    borderWidth: 5,
                    distance: 20,
                    align: 'center',
                    verticalAlign: 'middle',
                    borderRadius: 1,
                    borderColor: colorArr[1],
                    backgroundColor: colorArr[1],
                    show: true,
                    position: 'top',
                    formatter: '{a}：{c}个',
                    color: '#000', 
                    shadowBlur: 20, 
                    shadowColor: colorArr[1],
                }
            },
            itemStyle: {
                normal: { 
                    shadowBlur: 20, 
                    shadowColor: colorArr[1],
                    color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[1],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[1],
                    },
                ])
                }
            },
            data:[{
                value:2340, 
            }]
        }, 
    ]
};