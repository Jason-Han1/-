
option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
     
    grid: {
        top:60,
        left:50,
        bottom:60,
        right:60
    },
    legend: {
        data: ['美团', '饿了么']
    },

    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['0-10', '11-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71-80', '81-90', '91-100', '100+']
    },
    series: [
        {
            name: '美团',
            type: 'bar',
            data: [78,35,80,20,472,417,313,416,157,425,370]
        },
        {
            name: '饿了么',
            type: 'bar',
            data: [163,286,11,142,398,75,204,434,313,233,266]
        }
    ]
};
