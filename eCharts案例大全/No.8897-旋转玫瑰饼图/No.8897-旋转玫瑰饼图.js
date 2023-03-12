data = [{
        name: '固移融合',
        value: 0,
        
    },
    {
        name: '家庭V网融合',
        value: 0,
        
    },
    {
        name: '集团V网融合',
        value: 1,

    },
    {
        name: '家庭V网融合',
        value: 2,
        
    },
    {
        name: '集团V网融合',
        value: 3,

    },
    {
        name: '家庭V网融合',
        value: 4,
        
    },
    {
        name: '集团V网融合',
        value: 5,

    },
    {
        name: '家庭V网融合',
        value: 6,
        
    },
    {
        name: '集团V网融合',
        value: 7,

    }
];

option = {
    roseType: true,
    color: ['#28FED8', '#2888FF', '#2947FF'],
    series: [{
        type: 'pie',
        z: 10,
        // startAngle: 160,
        radius: ['10%', '40%'],
        center: ['50%', '50%'],
        hoverOffset: 10,
        label: {
            show: false,
            position: 'inside',
            color: '#000',
            formatter: '{d}%',
            fontSize: 14,
        },
        data: data
    }]
};