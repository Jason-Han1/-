option = {
    tooltip:{
        position:function(point){
             return [point[0], '10%'];
        },
        formatter:function(p){
            var index=p.dataIndex
            return '一月税收趋势：<br/>当年税收：0.45亿元<br/>当年税收：0.45亿元'
        }
    },
    legend:{
        data:['问责人员','问责机构'],
        right: '0%',
          textStyle: {
            fontSize: 16,
            color: '#8cdcfb'
          }
    },
    grid:{
        left:0,
        right:0
    },
    xAxis: {
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16,
            color: '#8cdcfb'
        },
        axisLine: {
            show:false
        },
        data: ['2015年', '2016年', '2018年']
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name:'问责人员',
        type: 'bar',
        itemStyle: {
            color: 'cyan'
        },
        label: {
            show: false
        },
        data: [40, 40, 167]
    }, {
        name:'问责机构',
        type: 'bar',
        itemStyle: {
            color: '#999'
        },
        label: {
            show: false
        },
        data: [2, 18, 15]
    }]
};