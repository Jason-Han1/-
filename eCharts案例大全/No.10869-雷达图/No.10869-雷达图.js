var option = {
        backgroundColor:'#000000',
        // title: {
        //     text: '基础雷达图'
        // },
        tooltip: {
            // trigger: 'item',
            // formatter: function(itme){
            //     return "";
            // }
        },
        legend: {
            orient: 'vertical',
            x: '60',
            y: '70',
            icon: "circle",
            data: ['1', '2'],
            textStyle: {
                color: '#FFFFFF'
            }
        },
        radar: {
            splitNumber: 2,//内圈数
            // shape: 'circle',
            //indicator: indicator,
            indicator: [//max: 30,
                {name: '1月',  color: '#fbfff8'},
                {name: '2月',  color: '#fbfff8'},
                {name: '3月',  color: '#fbfff8'},
                {name: '4月',  color: '#fbfff8'},
                {name: '5月', color: '#fbfff8'},
                {name: '6月',  color: '#fbfff8'},
                {name: '7月', color: '#fbfff8'},
                {name: '8月',  color: '#fbfff8'},
                {name: '9月',  color: '#fbfff8'},
                {name: '10月',  color: '#fbfff8'},
                {name: '11月',  color: '#fbfff8'},
            ],
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['#191C2F'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。

                }
            },
            // axisLabel:{//展示刻度
            //     show: true
            // },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#21B7D2'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#21B7D2', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            }
        },
        series: [{
            type: 'radar',
            symbolSize: 0,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [12,13,12,11,14,15,13,12,14,11,12,12],
                    name: '1',
                    itemStyle: {
                        color: '#F0E552'
                    },
                    areaStyle: {
                        color: 'rgba(240, 229, 82, 0.6)'
                    }
                },
                {
                    value:  [4,5,6,7,4,5,6,7,7,6,5,3],
                    name: '2',
                    itemStyle: {
                        color: '#7AF6C5'
                    },
                    areaStyle: {
                        color: 'rgba(122, 246, 197, 0.6)'
                    }
                },
            ]
        }]
    };