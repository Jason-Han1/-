const colorArr = ['#4CFFF9', '#2BBEBA', '#05A39F', '#02A5F0', '#0084C0'];
let data1 = [{
    value: 186,
    name: '浙江'
}, {
    value: 197,
    name: '山东'
}, {
    value: 174,
    name: '上海'
},
{
    value: 190,
    name: '深圳'
},
{
    value: 180,
    name: '重庆'
}];
option = {
    backgroundColor:'#000f1f',
    grid: {
        top: 70,
        left: 190,
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
            position: [-40, 30],
            color: '#9292A0',
            fontSize: 15
        },
        data: data1.map((item) => {
            return {
                value: 0,
                label: {
                    formatter() {
                        return item.name;
                    },
                  
                }
            };
        })
    }, {
        name: 'value',
        type: 'bar',
        barWidth: 25,
        barMinHeight: 20, // 最小高度
        yAxisIndex: 0,
        label: {
            show: true,
            position: ['100%', '110%'],
            fontSize: 22,
            offset: [10, -26],
        },
        itemStyle: {
            barBorderRadius: [0, 0, 0, 0]
        },
        data: data1.map(({
            value
        }, index) => {
            let color = colorArr[index % colorArr.length];
            return {
                value,
                label: {
                    color:'#FFFFFF'
                },
                itemStyle: {
                    color
                }
            };
        })
    }]
};