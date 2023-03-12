var item = ['新疆', '西藏', '青海', '宁夏', '江西', '海南', '广西', '吉林', '湖南', '贵州', '安徽', '河南', '甘肃', '重庆', '陕西', '云南', '河北', '四川', '辽宁', '江苏', '山东', '天津', '浙江', '福建', '澳门', '山西', '内蒙古', '广东', '北京', '上海', '黑龙江', '台湾', '湖北', '香港'];
        var value = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 5, 8, 8, 10, 10, 16, 20, 22, 30, 33, 35, 37, 75, 103, 107, 110, 178, 288, 320, 676];
        option = {
            // 调色，

            backgroundColor: '#fff',
            color: ['#f88a4d'],
            // 提示框
            title: {
                text: '全国现存确诊',

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    fontSize: 12
                }
            },
            legend: {
                show: false
            },
            grid: {
                left: '4%',
                right: '4%',
                top: '2%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                position:'top',
                show: false,
                boundaryGap: [0, 0.2],
            },
            yAxis: {
                type: 'category',
                position:'top',
                // 轴线
                axisLine: {
                    show: false,
                    boundaryGap: true
                },
                // 刻度
                axisTick: {
                    show: false,
                    alignWithLabel: true,
                    boundaryGap: true
                },
                axisLabel: {
                    show: true,
                    margin: 12,
                    textStyle: {
                        fontSize: 12,
                        color: '#333'
                    },
                    formatter: function(name) {
                        // 当名称长度超过10,进行回行处理且循环持续, 防止过长
                        var result = '';
                        for (var i = 0, len = name.length; i < len; i++) {
                            result += name[i];
                            if (i >= 9 && (i % 9 === 0)) {
                                result += '\n';
                            }
                        }
                        return result;
                    }
                },
                data: item
            },

            series: [{
                type: 'bar',
                barCategoryGap: '50%',
                barWidth: 16,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        // 图示标签显示内容格式化
                        formatter: function(item) {
                            return Number(item.value);
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#105a8a' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#cbd6ff' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [0, 50, 50, 0],
                        shadowColor: 'rgba(0,0,0,0.1)',
                        shadowBlur: 3,
                        shadowOffsetY: 3
                    }
                },
                zlevel: 10,
                data: value
            }]
        };
        option = {
            backgroundColor: "#ffffff",
            color: ["#37A2DA", "#ff6cbd","#7db905","#FFBC84","#EDA7FF","#26E7DF","#CD3B0A"],
            legend: {
                data: ['欧洲','美洲','亚洲','西太平洋','东地中海','东南亚','非洲']

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['篮球', '排球', '足球', '羽毛球', '乒乓球', '跆拳道'],
                axisTick: {
                    alignWithLabel: true
                }
            }],
            yAxis: [{
                type: 'value'
            }],
            series: [{
                name: '美洲',
                type: 'bar',
                stack: '总量',
                barWidth: '70%',
                data: [14, 10, 16, 7, 15, 9]
            }, {
                name: '欧洲',
                type: 'bar',
                stack: '总量',
                barWidth: '70%',
                data: [12, 14, 6, 13, 4, 9]
            },
                {
                    name: '亚洲',
                    type: 'bar',
                    stack: '总量',
                    barWidth: '70%',
                    data: [6, 10, 6, 13, 4, 9]
                }
            ]
        };