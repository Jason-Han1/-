option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            let judge = /^.*[边框]{1}$/.test(params.name);
            if (judge) {
                //隐藏提示
                return ''
            } else {
                var value = params.value
                return `${params.seriesName} <br/>${params.name}: ${params.value} (${params.percent}%)`
            }
        },
        // formatter: '{a} <br/>{b}: {c} ({d}%)',
        textStyle: {
            // color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 14,
        },
    },
    legend: {
        orient: 'vertical',
        // top: '10%',
        left: '0%',
        align: 'right',
        padding: 50,
        itemWidth: 35,
        itemHeight: 10,
        itemGap: 10,

        textStyle: {
            color: 'rgba(255, 255, 255, 0.6)',
            fontSize: 12,
        },
        data: ['塘寨发电', '构皮滩', '大方发电', '大龙发电', '毕节热电', '桐梓发电', '索风营', '沙陀', '东方', '乌江渡', '格里桥', '大花水', '思林', '洪家渡'],
    },
    series: [{
            name: '日增量',
            type: 'pie',
            center: ['72%', '55%'],
            // radius: ['50%', '70%'],  ////内半径,外半径 
            radius: '60%',
            zlevel: 3,
            avoidLabelOverlap: true,
            label: {
                show: true,
                backgroundColor: 'rgba(95,35,56,1)',
                borderColor: '#071c39',
                borderRadius: 60,
                // shadowColor: 'rgba(0, 0, 0, 0.5)',
                // // shadowBlur: 5,
                padding: 10,
                borderWidth: 15,
                position: 'center',
                formatter: (params) => {
                    return '{a|当日}'
                    // return JSON.stringify(params.dimensionNames.value)
                },
                rich: {
                    a: {
                        fontSize: 20,
                        color: 'white',
                        height: 60,
                        width: 60,

                    }
                }
            },

            labelLine: {
                show: false
            },
            itemStyle: {
                // borderColor: '#fff',
                // borderWidth: 1,
            },
            data: [{
                    value: 335,
                    name: '塘寨发电'
                },
                {
                    value: 310,
                    name: '构皮滩'
                },
                {
                    value: 234,
                    name: '大方发电'
                },
                {
                    value: 135,
                    name: '毕节热电'
                },
                {
                    value: 1548,
                    name: '桐梓发电'
                },
                {
                    value: 335,
                    name: '索风营'
                },
                {
                    value: 310,
                    name: '沙陀'
                },
                {
                    value: 234,
                    name: '东方'
                },
                {
                    value: 135,
                    name: '乌江渡'
                },
                {
                    value: 1548,
                    name: '格里桥'
                },
                {
                    value: 335,
                    name: '大花水'
                },
                {
                    value: 310,
                    name: '思林'
                },
                {
                    value: 234,
                    name: '洪家渡'
                },
            ]
        },
        {
            name: '边框',
            type: 'pie',
            center: ['72%', '55%'],
            radius: ['65%', '66%'], ////内半径,外半径 
            // radius: '60%',
            zlevel: 1,
            avoidLabelOverlap: true,
            label: {
                show: true,
                backgroundColor: '#01518a',
                borderColor: '#071c39',
                borderRadius: 60,
                padding: 10,
                borderWidth: 15,
                position: 'center',
                formatter: (params) => {
                    return '{a|当日}'
                    // return JSON.stringify(params.dimensionNames.value)
                },
                rich: {
                    a: {
                        fontSize: 20,
                        color: 'white',
                        height: 60,
                        width: 60,

                    }
                }
            },

            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#333',
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 10
            },
            data: [{
                value: 335,
                name: '边框'
            }]
        },
        {
            name: '边框',
            type: 'pie',
            center: ['72%', '55%'],
            radius: ['61%', '62%'], ////内半径,外半径 
            zlevel: 1,
            avoidLabelOverlap: true,
            label: {
                show: true,
                backgroundColor: '#01518a',
                borderColor: '#071c39',
                borderRadius: 60,
                padding: 10,
                borderWidth: 15,
                position: 'center',
                formatter: (params) => {
                    return '{a|当日}'
                    // return JSON.stringify(params.dimensionNames.value)
                },
                rich: {
                    a: {
                        fontSize: 20,
                        color: 'white',
                        height: 60,
                        width: 60,

                    }
                }
            },

            labelLine: {
                show: false
            },
            itemStyle: {
                color: '#333',
                shadowColor: 'rgba(255, 255, 255, 0.5)',
                shadowBlur: 10
            },
            data: [{
                value: 335,
                name: '边框'
            }]
        },


    ]

};