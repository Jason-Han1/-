option = {
    color: ['#1195f4', '#dbf0fc'],
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis',
        formatter: '{b}<br> {a}: {c}'
    },
    legend: {
        data:['蒸发量']
    },
    toolbox: {
        show : true
    },
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月'],
            splitLine: {
                lineStyle: {
                    opacity: 0.8
                }
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            z: 200
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            barGap: '-100%',
            data:[22, 24, 35, 46, 57]
        },
        {
            name:'',
            type:'bar',
            data:[21, 23, 34, 45, 56],
            itemStyle: {
                normal: {
                    color: '#dbf0fc'
                },
                emphasis: {
                    color: '#dbf0fc'
                }
            }
        }
    ]
};
