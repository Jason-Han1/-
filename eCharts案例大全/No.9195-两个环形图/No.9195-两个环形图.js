option = {
    color: ["#FFFF00", "#00CCFF"],
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}件 {d}% ",
        backgroundColor: 'rgba(255,255,255,0.9)',
        textStyle: {
            color: '#333',
        }
    },
    graphic: [{
        type: 'text',
        left: '22%',
        top: '80%',
        style: {
            text: '废水',
            textAlign: 'center',
            fill: '#000',
            width: 30,
            height: 30,
            fontSize: 20,
        }
    }, {
        type: 'text',
        left: '72%',
        top: '80%',
        style: {
            text: '废气',
            textAlign: 'center',
            fill: '#000',
            width: 30,
            height: 30,
            fontSize: 20,
        }
    }],
    series: [{
            name: '废水',
            type: 'pie',
            radius: ['35%', '50%'],
            center: ['25%', '45%'],
            hoverAnimation: false,
            label: {
                show: true,
                position: 'center',
                formatter: function() {
                    return "60%"
                },
                textStyle: {
                    color: "#00CCFF",
                    fontSize: 16,
                    fontWeight: 100,
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 10,
                    name: 'rose1'
                },
                {
                    value: 5,
                    name: 'rose2'
                }
            ]
        },
        {
            name: '废气',
            type: 'pie',
            radius: ['35%', '50%'],
            center: ['75%', '45%'],
            hoverAnimation: false,
            label: {
                show: true,
                position: 'center',
                formatter: function() {
                    return "60%"
                },
                textStyle: {
                    color: "#00CCFF",
                    fontSize: 16,
                    fontWeight: 100,
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                    value: 10,
                    name: 'rose1'
                },
                {
                    value: 5,
                    name: 'rose2'
                }
            ]
        }
    ]
};