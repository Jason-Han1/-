const COLOR = ['#35a8ff', '#35a8ff'];
let data1 = [{
    value: 126,
    label: '体验中心',
    name: 'EXPERIENCE CENTER'
}, {
    value: 117,
    label: '推广中心',
    name: 'PROMOTION CENTER'
}, {
    value: 104,
    label: '展示中心',
    name: 'EXHIBITION CCENTER'
},
{
    value: 89,
    label: '专家公寓',
    name: 'EXPERT APARTMENT'
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
                        return item.label + '{a||}' + '{d|'+item.name+'}';
                    },
                    rich: {
                        a:{
                            color: '#15c7fb',
                            padding: [0, 10]
                        },
                        d:{
                            color: '#d1d1d1'
                        }
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
                return `${value}{s|kwh}`;
            },
            rich: {
                s:{
                    fontSize: 22,
                    color: '#d9d9d9'
                }
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