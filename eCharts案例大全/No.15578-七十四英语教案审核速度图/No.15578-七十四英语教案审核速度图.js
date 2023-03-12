var colors = ['#5793f3', '#DC143C', '#68228B','#00CD00','#EE9A00','#0f0f0f'];

option = {
    color: colors,
    title:{
        text:'七十四英语教案审核速度图',
        subtext:'七十四英语审核速度图',
        itemGap:5,
        left:'40',
        textStyle:{
            fontSize:18,
        }
    },
    tooltip: {
        trigger: 'axis',
    },
    grid: {
        right: '5%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['七年级','八年级','九年级','中考复习']
    },
    xAxis: [
        {
            type: 'category',
            axisTick:{
              alignWithLabel:true,
            },
            data:function (){
            var list = [];
            for (var i = 1; i <=61; i++) {
                list.push('第'+i+'份教案');
            }
            return list;
        }()
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 14,
            show:false,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '',
            show:false,
            min: 0,
            max: 7,
            position: 'right',
            offset: 0,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '时间间隔',
            nameLocation:'middle',
           // nameRotate:0,
            position: 'left',
            min:0,
            max:14,
            axisTick: {
                alignWithLabel: false
            },
            axisLine: {
                lineStyle: {
            //        color: colors[2]
                }
            },
            nameTextStyle:{
                    fontSize:'',
                    fontWeight:''
                },
            axisLabel: {
                formatter: '{value}天 '
            }
        }
    ],
    series: [
       
        {
            name: '七年级',
            type: 'bar',
            yAxisIndex:0,
            barGap:-1,
            barWidth:1.5,
            data: [01
,01
,01
,01
,03
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,02
,02
,02
,01

            ],
        },
        {
            name: '八年级',
            type: 'bar',
            yAxisIndex:0,
            barWidth:1.5,
            data: [,,,,,,,,,,,,,,,,,,,,,01
,01
,01
,01
,01
,01
,01
,01
,02
,03
,11
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,01
,08
,09
,11
,01
,01
,01
],
        },
        {
            name: '九年级',
            type: 'bar',
            yAxisIndex:0,
            barWidth:1.5,
            data: [
],
        },
        {
            name: '中考复习',
            type: 'bar',
            yAxisIndex:0,
            barWidth:1.5,
            data: [,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,01
,01
,01
,01
,01
],
        },
        
]
};
