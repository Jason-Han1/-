color = ['#19D6FF', '#32A1FF'];
chartData = [
    {value: 150, name: 'rose 1'},
    {value: 100, name: 'rose 2'}
]
let data1 = []
chartData.forEach(item => {
    data1.push(item, {
        name:'',
        value: 5,
        itemStyle: {
            color: 'transparent'
        }
    })
})
option = {
    title: {
        text: '南丁格尔玫瑰图',
        subtext: '80%',
        left: 'center',
        top: '48%'
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [120, 140],
            center: ['50%', '50%'],
            roseType: 'radius',
            color: color,
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: false
                }
            },
            data: data1
        }
    ]
};