option = {
    backgroundColor: "#0f375f",
    legend: {
        orient: 'horizontal',
        bottom:5,
        data: ['rose1', 'rose2', 'rose3', 'rose4'],    //有数据
        textStyle: {
            color: "#fff",
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        data: [{
                value: 1,
                name: 'rose1',
                itemStyle: {
                    color: "#0733F1",
                    borderColor: "#0733F1",
                    show:false
                    
                }
            },
            {
                value: 2,
                name: '1',
                itemStyle: {
                    color: "#00B0E3",
                    borderColor: "#00B0E3"
                }
            },
            {
                value: 3,
                name: 'rose3',
                itemStyle: {
                    color: "#3D61FF",
                    borderColor: "#3D61FF"
                }
            },
            {
                value: 4,
                name: 'rose4',
                itemStyle: {
                    color: "#22E5F1",
                    borderColor: "#22E5F1"
                }
            },

        ],
        label: {
                show: false,
                normal: {
                      formatter: '{d}%',
                    show: true,
                    position: ''
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
    }]
};