option = {
    title : {
        text: '各分支管线流量分布',
        subtext: '模拟数据-四川九门科技'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['输配流量','输差量']
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
            data : ['1段','2段','3段','4段','5段','6段','7段','8段','9段','10段','11段','12段']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'输配流量',
            type:'bar',
            data:[132.6, 120.0, 160.4, 138.3,127.0, 143.9, 170.0, 123.2, 125.6, 176.7, 135.6, 162.2],
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
            name:'输差量',
            type:'bar',
            data:[8.7, 1.8, 1.0, 2.3, 2.6, 5.9, 9.0, 6.4, 8.7, 0.7, 5.6, 2.2],
            markPoint : {
                data : [
                    {name : '最高', value : 182.2, xAxis: 7, yAxis: 183},
                    {name : '最低', value : 2.3, xAxis: 11, yAxis: 3}
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
