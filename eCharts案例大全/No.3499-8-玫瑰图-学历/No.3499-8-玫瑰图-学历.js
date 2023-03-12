option = {
    // legend: {
    //     top: 'top', // 图例显示位置
    // },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    series: [
        {
            color: ['#42a4ff', '#5ee6b1', '#fec379', '#9a96f8', '#fe789b'],
            name: '面积模式',
            type: 'pie',
            radius: [100, 220],
            center: ['50%', '50%'],
            roseType: 'radius',
            // itemStyle: {
            //     borderRadius: 8
            // },
            data: [
                { value: 35, name: '本科生' },
                { value: 20, name: '硕士班毕业' },
                { value: 25, name: '硕士研究生毕业' },
                { value: 12, name: '硕士研究生' },
                { value: 8, name: '博士研究生' },
            ],
            // label: {
            //     normal: {
            //         // position: 'top',
            //         // padding: [0 , -90, 0, 0],
            //          distanceToLabelLine: 0,
            //         padding: [-2, -4, 0, -4],
            //         textStyle: {
            //             color: '#666666',
            //         },
            //     },
            // },
            label: {
                normal: {
                    formatter: params => {
                        return '{name|' + params.name + '}{percent|' + params.percent + '%}'
                    },
                    padding:[0,-115,20,-115], // 一定要左右两边都设置，否则会都往一边偏移
                    rich: {
                        name: {
                            color: "#656565",
                            fontSize: 14,
                            padding: [6, 5,6,0],
                            align: 'left'
                        },
                        percent: {
                            color: "#656565",
                            align: 'center',
							fontWeight: 'bold',
                            fontSize: 14,
                            padding: [5, 5,5,0]
                        },
                        hr: {
                            borderColor: '#C8C8C8',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0,
                        }
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 120,
                    lineStyle: {
                        //将标签的视觉引导线的颜色设为浅色
                        color: '#dfdfdf',
                    },
                },
            },
        },
    ],
};
