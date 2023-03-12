option = {
    backgroundColor: '#36565c',
    color: ['#3682e1', '#35d789', '#9dcfd8', '#ba5879', '#d3da1d', '#21f1ef'],
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '5%',
        itemGap: 50,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
        data: ['砌体结构',
'混合结构-土木',
'混合结构-土转',
'生土结构-土窑洞',
'生土结构-土批墙',
'生土结构-夯土墙',
'其它结构'],
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['40%', '50%'],
            roseType: 'radius',
            minShowLabelAngle: 60,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    name: '混合结构-土木',
                    value: 1,
                },
                {
                    name: '砌体结构',
                    value: 2,
                },
                {
                    name: '混合结构-土转',
                    value: 3,
                },
                {
                    name: '生土结构-土窑洞',
                    value: 4,
                },
                {
                    name: '生土结构-土批墙',
                    value: 5,
                },
                {
                    name: '生土结构-夯土墙',
                    value: 6,
                },
                {
                    name: '其它结构',
                    value: 6,
                }
            ],
        },
        {
            name: '',
            type: 'pie',
            radius: ['25%', '25.2%'],
            center: ['40%', '50%'],
            color: '#00ffff',
            roseType: 'radius',
            minShowLabelAngle: 60,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [1],
        },
    ],
};
