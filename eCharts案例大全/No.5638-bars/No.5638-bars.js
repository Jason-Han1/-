const COLOR = ['#429CF5', '#01C5B2'];
let data = [{
    value: 120,
    label: '2018'
}, {
    value: 142,
    label: '2019'
}, {
    value: 110,
    label: '2020'
}];
option = {
    grid: {
        top: 70,
        left: 33,
        right: 150,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false
    },
    yAxis: {
        show: true,
        inverse: true,
        type: 'category',axisTick:{
            show:false
        },
        axisLine: {
            show: false
        },
        data:['2018','2019','2020']
    },
    series: [ {
        name: 'value',
        type: 'bar',
        barWidth: 20,
        barMinHeight: 20, // 最小高度
        yAxisIndex: 0,
        label: {
            show: true,
            position: 'right',
            fontSize: 22,
            offset: [10, 0],
            formatter({
                value
            }) {
                return `${value}人`;
            }
        },
        itemStyle: {
            barBorderRadius: 10
        },
        data: data.map(({
            value
        }, index) => {
            let color = COLOR[index % COLOR.length];
            return {
                value,
                label: {
                    color
                },
                itemStyle: {
                    color
                }
            };
        })
    }]
};