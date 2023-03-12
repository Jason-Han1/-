option = {
    title : {
        text: '年龄与存活关系',
        subtext: '纯属虚构'
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
            data : ['5岁及以下','5-10','10-15','15-20岁','20-25岁','25-30岁','30-35岁','35-40岁','40-45岁','45-50岁','50-55岁','55-60岁','60岁以上']
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
            data:[31,7,11,33,42,42,41,28,17,16,10,7,5],
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
            data:[13,13,8,63,80,66,47,39,30,23,14,11,17],
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
