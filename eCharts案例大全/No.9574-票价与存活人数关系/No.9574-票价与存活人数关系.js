option = {
    title : {
        text: '票价与存活人数关系',
        subtext: '泰坦尼克'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['存活','死亡']
    },
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['≤10','10-30','30-50','50-100','100以上']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'存活',
            type:'bar',
            data:[66,139,27,70,39],
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
        },
        {
            name:'死亡',
            type:'bar',
            data:[255,182,47,37,14],
            markPoint : {
                data : [
                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
