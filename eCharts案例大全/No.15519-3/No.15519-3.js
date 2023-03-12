
option = {

    grid: [{
        top: 50,

        left: 10,
        containLabel: true
    },],
    xAxis: [{
        show:false,
        type: 'value',
        splitLine: {
            show: false
        }
    },],
    yAxis: [{
        type: 'category',
        data:[111,222,333],
        axisLabel: {
            interval: 0,
        },
        splitLine: {
            show: false
        },
        axisTick:{
            show:false,
        },
        axisLine:{
            show:false,
        }
    }, ],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data:[1,2,3]
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        data:[5,4,3]
    }, ]
}