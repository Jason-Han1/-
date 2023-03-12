var colors = ['#00CDCD',  '#B8860B'];
option = {
    title: {
        text: '抽检异议情况分析',
        subtext: '各检验机构异议情况',
        textStyle:{
             fontSize: '15'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
       grid: {
        top:85,
    },   
    legend: {
        data:['异议数','异议通过率'],
        align: 'left',
        left: 10,
        top:50
    },
     "calculable": true,
    "xAxis": [{
         data: ['粮食','调味品','肉制品','乳制品','饮料','方便食品','饼干','罐头','冷冻饮品']
    }],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
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
    series: [
        {name:'异议数',
            type:'bar',
           color: colors[0],
            barWidth : 30,
            data:[347,692,362,783,464,530,777,559,761]},
        {
        name:'异议通过率',
         color: colors[1],
         yAxisIndex: 1,
            type:'line',
            itemStyle : {
                normal : {
                    lineStyle:{
                        width:3,//折线宽度
                    },
                    opacity: 0.4
                }
            },
        data:[2,9,7,2,9,8,6,7,3]
    }]
};
