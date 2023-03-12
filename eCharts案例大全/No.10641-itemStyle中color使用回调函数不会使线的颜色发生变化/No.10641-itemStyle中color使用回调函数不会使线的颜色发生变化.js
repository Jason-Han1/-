colorList=['#F58080','#AAF487']
option = {
    legend: {
        data: ['回调颜色', '固定颜色'],
        left: 'center',
        bottom: 'bottom'
    },
    xAxis: {
        type: 'category',
        data: [100,200,20,30,60,89],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '回调颜色',
            type: 'line',
            data: [800,900,220,130,660,289],
           itemStyle:{
                color: param=>{
                    return  colorList[param.seriesIndex]
                },
                borderWidth: 10,
            },
            smooth: true
        },
        {
            name: '固定颜色',
            type: 'line',
            data: [123,568,111,222,123,56],
            itemStyle:{
                color: '#F58080',
                borderWidth: 10,
            },
            smooth: true
        }
    ]
};