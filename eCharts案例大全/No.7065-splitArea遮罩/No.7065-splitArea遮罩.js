option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            
            type: 'shadow'   
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {show: false},
        data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数']
    },
    yAxis: {
        type: 'value',
        splitNumber:4,
        zlevel:999,
        splitLine:{
            // show: false
        },
        splitArea:{
            show: true,
            areaStyle:{
                color:['rgba(255,255,255,0)','rgba(255,255,255,0.3)','rgba(255,255,255,0.5)','rgba(255,255,255,0.7)']
            }
        }
    },
    series: [
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
              barWidth:50,
             itemStyle: {
               color:'#658dff',
                barBorderRadius:[20,20,0,0]
            },
            data: [200,300, 500, 600, 900, 1000]
        }
    ]
};
