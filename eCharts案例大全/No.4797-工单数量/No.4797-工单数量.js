
let colors = ['#3D7EFF','#4FBBFA','#FEA92D','#37C737','#E3578B'];
let arr = [120, 200, 150, 80, 70];
let data = [];
arr.map((item,index) => {
    data.push({
        value: item,
        itemStyle: {
            color: colors[index]
        }
    })
})
option = {
    backgroundColor: 'rgba(51,84,216,0.8)',
    xAxis: {
        type: 'category',
        data: ['订单总数', '已派发', '处理中', '已处理', '未完成'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#E2F2FF'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [
        {
            data: data,
            type: 'bar',
            barWidth: '30%',
            label: {
                show: true,
                position:'top',
                color: '#fff',
                fontStyle: 'bold',
                fontSize: 16
            }
        }
    ]
};
