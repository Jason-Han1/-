let color = ["#2ec7c9","#b6a2de","#5ab1ef","#F5BF3C", "#DC6255"]
let data = [
    {name: '事项1', value: 20},
    {name: '事项2', value: 30},
    {name: '事项3', value: 60},
    {name: '事项4', value: 120},
    {name: '事项5', value: 120},
]
let max = Math.max(...data.map(item=>item.value));
let sum = eval(data.map(item=>item.value).join('+'))
option = {
    backgroundColor: '#000',
    angleAxis: {
        show: 0,
        clockwise: false,
        max: max + max/3
    },
    radiusAxis: {
        type: 'category',
        data: data.map(item => {
            return item.name + ':' + '('+ (item.value / sum * 100).toFixed(1) +'%)' 
        }),
        z: 10,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            color: '#fff',
            align: 'left',
            margin: -10
        }
    },
    polar: {
        show: 0,
        center: ['50%', '50%']
    },
    series: [{
        type: 'bar',
        data: data.map((item, index) => {
            return {
                value: item.value,
                name: item.name,
                itemStyle: {
                    color: color[index]
                }
            }
        }),
        label: {
            show: true,
            position: 'top',
        },
        barWidth: 10,
        coordinateSystem: 'polar',
    }]
};
