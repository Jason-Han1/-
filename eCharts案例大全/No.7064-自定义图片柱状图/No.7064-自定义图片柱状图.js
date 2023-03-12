var imgSrc = '/asset/get/s/data-1593747400583-4Mot9MWYe.png'
option = {
    backgroundColor: '#031A32',
    grid: {
        left: '12%',
        top: '15%',
        bottom: '12%',
        right: '8%'
    },
    xAxis: {
        data: ['冀', '京', '晋', '鲁', '豫'],
        // data: xdata,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#666',
                width: 1 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        }
    },
    yAxis: [{
        name: '数量',
        nameTextStyle: {
            color: "#fff"
        },
        splitNumber: 2,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#666',
                width: 1 //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        splitArea: {
            areaStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: 'hill',
        type: 'pictorialBar',
        barCategoryGap: '0%',
        // symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
        symbol: 'image://' + imgSrc,
        label: {
            show: true,
            position: 'top',
            distance: 15,
            fontWeight: 'bolder',
            fontSize: 16,
        },
        itemStyle: {
            normal: {
                color: '#23a6ae'
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [123, 60, 25, 18, 12],
        // data: ydata,
        z: 10
    }]
}