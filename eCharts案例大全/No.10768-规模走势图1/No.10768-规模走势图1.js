option = {
    backgroundColor: '#eee',
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint : {
                symbol: 'circle',
                symbolSize: 20,
                symbolOffset: [0, '-60%'],
                data : [
                    {coord: ['1月', 2.0]},
                    {coord: ['2月',  4.9]},
                    {coord: ['3月',  7.0]},
                    {coord: ['4月',  23.2]},
                    {coord: ['5月',  25.6]},
                    {coord: ['6月',  76.7]},
                    {coord: ['7月',  135.6]},
                    {coord: ['8月',  162.2]},
                    {coord: ['9月',  32.6]},
                    {coord: ['10月',  20.0]},
                    {coord: ['11月',  6.4]},
                    {coord: ['12月',  3.3]}
                ],
                itemStyle:{
                    color: '#000',
                     label: {
                        show: false
                    }
                }
            }
        }
    ]
};