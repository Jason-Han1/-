option = {
    title : {
        text: '确诊病例每增加10,000的天数',
        //subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['China','UK', 'Italy', 'Russia', 'US']
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
            data : ['1-2','2-3','3-4','4-5','5-6','6-7','7-8', '8-9','9-10']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
		{
            name:'US',
            type:'bar',
            data:[2, 1, 1, 1, 1, 1, 0, 1, 0],
        },
		{
            name:'Italy',
            type:'bar',
            data:[5, 3, 2, 2, 2, 2, 1, 2, 2],
        }
    ]
};
