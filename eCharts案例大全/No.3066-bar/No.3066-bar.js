const COLOR = ['#35a8ff', '#35a8ff'];
let data1 = [{
    value: 120,
    label: '体验中心'
}, {
    value: 142,
    label: '推广中心'
}, {
    value: 110,
    label: '专家公寓'
},
{
    value: 132,
    label: '展示中心'
}];
option = {
    backgroundColor:'#000f1f',
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
            position: [0, -10],
            color: '#ffffff',
            fontSize: 15
        },
        data: data1.map((item) => {
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
            position: ['100%', '110%'],
            fontSize: 22,
            offset: [10, 0],
            formatter({
                value
            }) {
                return `${value}kwh`;
            }
        },
        itemStyle: {
            barBorderRadius: [0, 4, 4, 0]
        },
        data: data1.map(({
            value
        }, index) => {
            let color = COLOR[index % COLOR.length];
            return {
                value,
                label: {
                    color:'#ffffff'
                },
                itemStyle: {
                    color
                }
            };
        })
    }]
};