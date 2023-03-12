
option = {
   tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[0];
                return tar.name + ' : ' + (params[1].value + params[0].value) + ' % ';
            }
        },
        xAxis: [
            {
                type: 'category',
                splitLine: {show: false},
                data: ['服装鞋帽', '箱包皮具', '珠宝手表', '化妆品', '数码通讯', '儿童母婴 ', '家电', '正餐', '杂货', '快餐', '休闲服务', '服务配套']
            }
        ],
        yAxis: [
            {
                name: '(%)',
                type: 'value',
                max: 100
            }
        ],
        series: [
            {
                type: 'bar',
                stack: '总量',

                itemStyle: {
                    normal: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [10, 10, 40, 20, 30, 0, 10, 40, 20, 30, 30, 12]
            },
            {
                name: '生活费',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    normal: {
                        color: '#0193cf',
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: function (params) {
                                for (var i = 0, l = option.xAxis[0].data.length; i < l; i++) {
                                    if (option.xAxis[0].data[i] === params.name) {
                                        return option.series[0].data[i] + params.value + '% ';
                                    }
                                }
                            },

                        }
                    }
                },
                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
            }
        ]
};