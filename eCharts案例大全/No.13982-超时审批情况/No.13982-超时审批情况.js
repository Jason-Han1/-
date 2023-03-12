
option = {
    title: {
        text: '超时审批情况',
        right:'center',
        top:'1%'
    },
    legend: {
        right: 10,
        data: ['超时审批事件数','超时审批事件同比率']
    },
    xAxis: {
        data: ['南宁市局', '武鸣区局', '横县局', '宾阳县局', '上林县局'
        , '隆安县局','兴宁区分局', '江南区分局', '青秀区分局', '西乡塘区分局', '邕宁区分局',
        '良庆区分局','广西-东盟经济技术开发区行政审批局','广西-东盟经济技术开发区',
        '南宁高新技术产业开发区','南宁经济技术开发区']
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: '#1f6770'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ], 
    "dataZoom": [{
        "show": true,
        "height": 30,
        "xAxisIndex": [
            0
        ],
        bottom: 30,
        "start": 10,
        "end": 80,
        handleSize: '110%',
        handleStyle:{
            color:"#d3dee5",
            
        },
           textStyle:{
            color:"#000"},
           borderColor:"#90979c"
        
        
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series: [{
        name:'超时审批事件数',
        color:'#9a4269',
        type:'bar',
        barWidth : 30,
        data:[934,863,845,765,737,653,634,556,489,442,422,356,315,252,212,132]
    },{
        name:'超时审批事件同比率',
         color: '#d53f4b',
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#f4ec11' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#24d897' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
        data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5,3,5,4,6]
    }]
};