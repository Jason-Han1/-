option = {
    color: ['#459AF0', '#38C3B0', '#86CA5A', '#BFD44F', '#FCC248', '#FCE448', '#F58B41', '#F7765B', '#525ECD', '#547FDB'],
    legend: {
        orient: 'horizontal',
        left: 'center',
        data: ['A轮', 'B轮', 'C轮', 'D轮', 'E轮']
    },
    graphic: [
        {
            type: 'group',
            top: 'middle',
            left: 'center',
            id: 'data',
            children: [
                {
                    type: 'text',
                    id: 'current',
                    top: 0,
                    style: {
                        text: '2,890 k',
                        font: 'bolder 4em "Microsoft YaHei", sans-serif',
                        fill: '#000000',
                        textAlign: 'center'
                    }
                }, 
                {
                    type: 'text',
                    id: 'all',
                    top: 80,
                    style: {
                        text: '金额',
                        font: 'bolder 2em "Microsoft YaHei", sans-serif',
                        fill: '#c0c0c0',
                        textAlign: 'center'
                    }
                }
            ]
        }
    ],
    series: [
        {
            name: '轮次',
            type: 'pie',
            radius: ['50%', '80%'],
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                formatter: (params) => {
                    return `${params.percent}%`
                }
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '16',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: 'A轮'},
                {value: 310, name: 'B轮'},
                {value: 234, name: 'C轮'},
                {value: 135, name: 'D轮'},
                {value: 1548, name: 'E轮'}
            ]
        }
    ]
};