var arr = [335,310,234]
option = {
    backgroundColor: '#273454',
    color: ['#FF894E', '#22CFE0', '#9E93E7'],
    legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        icon: 'circle',
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
            name: 'TITLE',
            type: 'pie',
            clockwise: false,
            startAngle: 90,
            radius: ['6%', '70%'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            roseType: 'radius', //area
            data: [{
                    value: arr[0],
                    name: `${arr[0]}个优先保护区`
                },
                {
                    value: arr[1],
                    name: `${arr[1]}个重点管控区`
                },
                {
                    value: arr[2],
                    name: `${arr[2]}个一般管控区`
                }
            ],
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: '2',
                },
            },
            label: {
                show: true,
                position: 'outside',
                formatter: '{d}%',
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1,
                    }
                }
            },
        },
        {
            type: 'pie',
            radius: '7%',
            hoverAnimation: false,
            center: ['50%', '50%'],
            z: 999,
            data: [{
                value: 1
            }, ],
            label: {
                show: false
            },
            itemStyle: {
                color: '#fff'
            }
        }
    ],
}