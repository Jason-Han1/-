option = {
    backgroundColor:'#FFFFFF',
    title : {
        text: '男性女性身高体重分布',
        subtext: '抽样调查来自: Heinz  2003'
    },
    grid: {
        left: '13%',
        right: '14%',
        bottom: '23%',
        top: '13%',
        containLabel: true
    },
    tooltip : {
        trigger: 'item',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return params.seriesName + ' :<br/>'
                   + params.value[0] + 'cm '
                   + params.value[1] + 'kg ';
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
        data: ['女性','男性'],
        left: 'right'
    },
    xAxis : {splitLine: {
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
        data: ['南宁市', '柳州市', '桂林市', '梧州市', 
         '北海市',  '防城港市', '钦州市'
        ,'贵港市','玉林市','百色市','贺州市','河池市','来宾市','崇左市']},
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
            name:'男性',
            type:'scatter',
            data: [['柳州市', 1.6], ['南宁市', 2.8],['桂林市', 2.6], ['梧州市', 1.8],
            ['柳州市', 2.1], ['南宁市', 1.3],['桂林市', 5.6], ['崇左市', 1.9],
            ['百色市', 3.1], ['防城港市', 2.8],['来宾市', 4.6], ['贺州市', 1.8],
            ['百色市', 2.6], ['南宁市', 3.8],['桂林市', 1.6], ['梧州市', 2.8],
            ['柳州市', 1.2], ['防城港市', 1.8],['来宾市', 2.6], ['梧州市', 3.8],
            ['柳州市', 3.6], ['南宁市', 5.8],['桂林市', 2.6], ['梧州市', 4.8],
            ['来宾市', 2.6], ['南宁市', 4.8],['来宾市', 3.6], ['崇左市', 5.8],
            ['钦州市', 1.6], ['贺州市', 3.8],['桂林市', 4.6], ['贺州市', 4.8],
            ['柳州市', 3.6], ['南宁市', 2.8],['河池市', 3.6], ['梧州市', 2.8],
            ['百色市', 1.6], ['来宾市', 1.8],['桂林市', 5.6], ['贺州市', 3.8],
            ['柳州市', 2.6], ['河池市', 3.8],['贺州市', 2.6], ['梧州市', 1.8],
            ['来宾市', 3.6], ['南宁市', 2.8],['桂林市', 1.6], ['崇左市', 5.8],
            ['柳州市', 1.6], ['河池市', 2.8],['桂林市', 2.6], ['梧州市', 4.8],
            ['河池市', 2.6], ['南宁市', 1.8],['贺州市', 3.6], ['梧州市', 8.8],
            ['河池市', 3.6], ['河池市', 4.8],['桂林市', 4.6], ['崇左市', 1.8],
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
