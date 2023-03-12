option = {
    //提示框
    tooltip: {},
    animationDurationUpdate: function (idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    series: [
        {
            type: 'graph',
            layout: 'force',
            force: {
                repulsion: 400,
                edgeLength: 10,
            },
            // 	itemStyle:{
            // 	    opacity:1
            // 	},
            label: {
                show: true,
                formatter: ['{a|{c}}', '{b|{b}}'].join('\n'),
                fontWeight: '1000',
                fontSize: '18',
                align: 'center',
                verticalAlign: 'center',
                rich: {
                    a: {
                        color: '#4a9ffe',
                        fontSize: 25,
                        lineHeight: 30,
                        textBorderColor: 'transparent',
                        textBorderWidth: 0,
                    },
                    b: {
                        color: '#4a9ffe',
                        fontSize: 14,
                        lineHeight: 30,
                        textBorderColor: 'transparent',
                        textBorderWidth: 0,
                    },
                },
            },
            data: [
                {
                    name: 'PH 1',
                    value: 7.7,
                    symbol: 'circle',
                    itemStyle: {
                        // opacity: 0.5,
                        // borderColor:'#000',
                        color: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.5,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#EEEE0050', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#ff333359', // 100% 处的颜色
                                },
                            ],
                            global: false, // 缺省为 false
                        }
                    },
                    symbolSize: 140,
                    draggable: true,
                },
                {
                    name: 'PM2.5 1',
                    value: 65,
                    symbol: 'circle',
                    symbolSize: 110,
                    draggable: true,
                },
                {
                    name: '氮氧化物 1',
                    value: 26,
                    symbol: 'image://./img/red3.png',
                    symbolSize: 90,
                    draggable: true,
                },
                {
                    name: 'PM2.5 2',
                    value: 57,
                    symbol: 'image://./img/blue1.png',
                    symbolSize: 140,
                    draggable: true,
                },
                {
                    name: '氮氧化物 2',
                    value: 56,
                    symbol: 'image://./img/blue2.png',
                    symbolSize: 120,
                    draggable: true,
                },
                {
                    name: 'PH 2',
                    value: 7.5,
                    symbol: 'image://./img/blue3.png',
                    symbolSize: 110,
                    draggable: true,
                },
                {
                    name: 'PH 3',
                    value: 6.5,
                    symbol: 'image://./img/yellow1.png',
                    symbolSize: 90,
                    draggable: true,
                },
                {
                    name: 'PM2.5 3',
                    value: 85,
                    symbol: 'image://./img/yellow2.png',
                    symbolSize: 90,
                    draggable: true,
                },
                {
                    name: '氮氧化物 3',
                    value: 32,
                    symbol: 'image://./img/yellow3.png',
                    symbolSize: 90,
                    draggable: true,
                },
            ],
        },
    ],
};
