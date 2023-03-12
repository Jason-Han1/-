var handred = 100;
var point = 66;

option = {
    // title: {
    //     text: point + '%',
    //     x: 'center',
    //     y: 'center',
    //     textStyle: {
    //         fontWeight: 'normal',
    //         color: '#29EEF3',
    //         fontSize: '75'
    //     }
    // },
    // tooltip: {
    //     formatter: function(params) {
    //         return params.name + '：' + params.percent + ' %'
    //     }
    // },
    // legend: {
    //     show: true,
    //     itemGap: 12,
    //     data: ['占比', '剩余']
    // },

    series: [
        {
            name: 'circle',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            data: [
                {
                    value: point,
                    name: '占比',
                    itemStyle: {
                        normal: {
                            color: '#ffaf02',
                            label: {
                                show: false,
                            },
                            labelLine: {
                                show: false,
                            },
                        },
                    },
                },
                {
                    name: '剩余',
                    value: handred - point,
                    itemStyle: {
                        normal: {
                            color: '#ffefcc',
                        },
                    },
                },
            ],
        },
    ],
};