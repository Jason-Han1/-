var option = {
    backgroundColor: '#19181d',
    color: [
        "#FAE927", "#E9E416", "#C9DA36", "#9ECB3C", "#6DBC49",
        "#37B44E", "#3DBA78", "#14ADCF", "#209AC9", "#1E91CA",
        "#2C6BA0", "#2B55A1", "#2D3D8E", "#44388E", "#6A368B",
        "#7D3990", '#A63F98', '#C31C88', '#D52178', '#D5225B',
        '#D02C2A', '#D44C2D', '#F57A34', '#FA8F2F', '#D99D21',
        '#CF7B25', '#CF7B25', '#CF7B25'
    ],
    legend: {
        orient: 'vertical',
        right: '5%',
        top: '13%',
        itemWidth: 50,
        itemHeight: 50,
        textStyle: {
            color: '#caccd4',
        },
    },
    calculable: true,
    series: [
        {
            name: '',
            type: 'pie',
            startAngle: 0,
            clockwise: false,
            radius: ["30%", "90%"],
            center: ['40%', '50%'],
            roseType: 'area',
            avoidLabelOverlap: false,
            label: {
                show: true,
                position: 'inside',
                formatter: '{c}$',

                textStyle: {
                    fontWeight: '100',
                    fontFamily: 'Microsoft YaHei',
                    color: '#FAFAFA',
                },
            },

            itemStyle: {
                normal: {
                    // color: new echarts.graphic.LinearGradient(0, 1, 1, 0, [{
                    //     offset: 0,
                    //     color: '#ef29b1'
                    // }, {
                    //     offset: 1,
                    //     color: '#fd7225'
                    // }]),
                    borderWidth: 3,
                    borderColor: '#19181d',
                    shadowColor: '#19181d',
                    shadowBlur: 30,
                }
            },
            data: [{
                    value: 100,
                    name: 'A',
                },
                {
                    value: 100,
                    name: 'B',
                },
                {
                    value: 100,
                    name: 'C',
                },
                {
                    value: 100,
                    name: 'D',
                },
                {
                    value: 100,
                    name: 'E',
                },
                {
                    value: 100,
                    name: "F",
                },
                {
                    value: 100,
                    name: "G",
                },
                {
                    value: 100,
                    name: "H",
                },
            ].sort(function(a, b) {
                return b.value - a.value;
            }),
        },
        {
            type: 'pie',
            radius: ["28.5%", "30%"],
            data: [100],
            center: ['40%', '50%'],
            itemStyle: {
                normal: {
                    color: '#888',
                    shadowColor: '#000',
                    shadowBlur: 15,
                    shadowOffsetX: '0',
                    shadowOffsetY: '0',
                }
            },
            hoverAnimation: false,
            label: {
                show: false,
            }
        },
        {
            type: 'pie',
            radius: ["26.5%", "27%"],
            data: [100],
            center: ['40%', '50%'],
            color: '#888',
            hoverAnimation: false,
            label: {
                show: false,
            }
        },

    ]
};