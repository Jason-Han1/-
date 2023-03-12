const COLOR = ['#429CF5', '#01C5B2'];
let data = [{
    value: 120,
    label: '一年级'
}, {
    value: 142,
    label: '二年级'
}, {
    value: 110,
    label: '三年级'
},
{
    value: 132,
    label: '四年级'
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
        type: 'category',
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'label',
        type: 'bar',
        barWidth: 20,
        yAxisIndex: 0,
        label: {
            show: true,
            position: 2,
            color: '#262C41',
            fontSize: 15
        },
        data: data.map((item) => {
            return {
                value: 0,
                label: {
                    formatter() {
                        return item.label;
                    }
                }
            };
        })
    }, {
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
            barBorderRadius: [0, 4, 4, 0]
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