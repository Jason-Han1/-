var c = 1;
var ringData =[
                { value: 20, name: 'A类:20%' },
                { value: 30, name: 'B类' },
                { value: 10, name: 'C类' },
                { value: 10, name: 'D类' },
                { value: 5, name: 'E类' },
                { value: 5, name: 'F类' },
                { value: 5, name: 'G类' },
                { value: 5, name: 'H类' },
                { value: 10, name: '其他' },
            ],
option = {
    color: ['#369EFF', '#FF8E29', '#09DAAB', '#8D77F9', '#FF9D1E', '#FF55AC', '#FF3661', '#12CD12', '#D236FF'],
    tooltip: {
        trigger: 'item',
        show: false,
    },
    legend: {
        orient: 'vertical',
        right: 10,
        itemHeight:4,
        itemWidth:12,
        top: '30%',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '60%'],
            label: {
                show: true,
                normal: {
                    show: true,
                },
                formatter: 'aaa' + c,
            },
            labelLine: {
                show: true,
            },
            data: ringData,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
