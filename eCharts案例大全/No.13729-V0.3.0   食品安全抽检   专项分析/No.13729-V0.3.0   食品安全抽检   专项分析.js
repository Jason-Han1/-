option = {
    backgroundColor:'#FFFFFF',
    title : {
        text: '男性女性身高体重分布',
        //subtext: '抽样调查来自: Heinz  2003'
    },
    grid: {
      /*  left: '13%',
        right: '14%',
        bottom: '23%',*/
        top: '13%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + '次——'
                   + params.value[1] + 'ng/g ';
            }
            else {
                return params.seriesName + ' :<br/>'
                   + params.name + ' : '
                   + params.value + 'kg ';
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    legend: {
        data: ['检测结果值','出现频次'],
        left: 'right'
    },
    xAxis : {splitLine: {
        name:'出现频次',
            lineStyle: {
                show:true,
                type: 'dashed'
            }
        },"axisLabel": {
            "interval": 0,
             rotate:40,
            textStyle:{
                fontSize:12,
                color:'#000'
            },},
        data: ['1', '2', '3', '4', 
         '5',  '6', '7','8','9','10','11','12','13','14']},
    yAxis : [
        {
            type : 'value',
            name : '检验结果值',
            scale:true,
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        }
    ],
    series : [
        {
            name:'检测结果值——出现频次',
            type:'scatter',
            data: [['2', 1.6], ['3', 2.8],['5', 2.6], ['3', 1.8],
            ['2', 2.1], ['3', 1.3],['7', 5.6], ['5', 1.9],
            ['2', 3.1], ['4', 2.8],['2', 4.6], ['6', 1.8],
            ['3', 2.6], ['4', 3.8],['3', 1.6], ['3', 2.8],
            ['2', 1.2], ['6', 1.8],['6', 2.6], ['3', 3.8],
            ['4', 3.6], ['2', 5.8],['4', 2.6], ['2', 4.8],
            ['3', 2.6], ['2', 4.8],['3', 3.6], ['2', 5.8],
            ['4', 1.6], ['2', 3.8],['4', 2], ['4', 4.8],
            ['4', 3.6], ['2', 2.8],['13', 3.6], ['14', 2.8],
            ['3', 1.6], ['7', 1.8],['3', 5.6], ['2', 3.8],
            ['2', 2.6], ['2', 3.8],['43', 2.6], ['4', 1.8],
            ['2', 3.6], ['1', 2.8],['1', 1.6], ['1', 5.8],
            ['1', 2.6], ['1', 1.8],['1', 3.6], ['2', 8.8],
            ['2', 3.6], ['3', 4.8],['1', 4.6], ['1', 1.8],
            ],
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(164,298, 250)'
                }, {
                    offset: 1,
                    color: 'rgb(33, 207, 209)'
                }]),
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
