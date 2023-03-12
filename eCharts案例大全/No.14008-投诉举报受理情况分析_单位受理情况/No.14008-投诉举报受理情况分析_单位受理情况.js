var colors = ['#259493',  '#3470a3'];

option = {
    title: {
        text: '单位受理情况',
        right:'center',
        top:'1%'
    },
    legend: {
        right: 10,
        data: ['受理举报数','同比率']
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
            max: 500,
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
                    color: colors[1]
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
        type: 'scatter',
        name:'受理举报数',
        symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        symbolSize: function (data) {
            return Math.sqrt(data[1]) * 2;
        },
        label: {
            emphasis: {
                show: true,
                formatter: function (param) {
                    return param.data[2];
                },
                position: 'top'
            }
        },
        data:[
            ['南宁市局',50],
            ['武鸣区局',210],
            ['横县局',90],
            ['宾阳县局',234],
            ['上林县局',100],
            ['隆安县局',330],
            ['兴宁区分局',400],
            ['江南区分局',50],
            ['青秀区分局',210],
            ['西乡塘区分局',90],
            ['邕宁区分局',90],
            ['良庆区分局',234],
            ['东盟经济技术开发区行政审批局',100],
            ['东盟经济技术开发区',330],
            ['南宁高新技术产业开发区',310],
            ['南宁经济技术开发区',330],
        ]
    },{
        name:'同比率',
         color: colors[1],
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
                        color: '#cb5eef' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: '#f8e61b' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
        data:[4.5,4,6.5,4.2,5.4,9,4,7,3,6,3,4.5,3,5]
    }]
};