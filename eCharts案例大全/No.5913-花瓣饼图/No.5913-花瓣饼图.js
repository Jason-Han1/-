/**特别声明**/
/**灵感来自开源 176******95 on 2 年前 的花瓣**/
/**感谢前面的引路人**/
let scaleData = [{
            'name': '花瓣1',
            'value': 10
        },
        {
            'name': '花瓣2',
            'value': 10
        },
        {
            'name': '花瓣3',
            'value': 30
        },
        {
            'name': '花瓣4',
            'value': 10
        },
        {
            'name': '花瓣5',
            'value': 10
        },
        ];
        // 随机颜色
        let rich = {
            white: {
                color: '#ddd',
                align: 'center',
                padding: [3, 0]
            }
        };
        let placeHolderStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        };

        function bg2() {
            return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
        }

        function rancolors(len) {
            let color = [];
            for (let i = 0; i <= len; i++) {
                let sjys = bg2();
                color.push(sjys);
                for (let i = 0; i < color.length; i++) {
                    if (color[i] = sjys) {
                        color[i] = bg2();
                    }
                }
            }
            return color;
        }
        let data = [];
        let color = rancolors(7)
        for (let i = 0; i < scaleData.length; i++) {
            data.push({
                value: scaleData[i].value,
                name: scaleData[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 40,
                        shadowBlur: 20,
                        borderColor: color[i],
                        shadowColor: color[i]
                    }
                }
            }, {
                value: 80,
                name: '',
                itemStyle: placeHolderStyle
            });
        }
        let seriesObj = [{
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [30, 60],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'outside',
                        color: '#ddd',
                        formatter: function (params) {
                            let percent = 0;
                            let total = 0;
                            for (let i = 0; i < scaleData.length; i++) {
                                total += scaleData[i].value;
                            }
                            percent = (params.value / total * 100).toFixed(0);
                            if (params.name !== '') {
                                return params.name + '\n{white|' + '占比' + percent + '%}';
                            }
                            return '';
                        },
                        rich: rich
                    },
                    labelLine: {
                        length: 6,
                        length2: 3,
                        show: false,
                        color: '#00ffff'
                    }
                }
            },
            data: data
        }];
        option = {
            grid: {
                left: 0,
            },
            backgroundColor: 'rgba(0,0,0,0)',
            title: {
                text: '77.65%',
                subtext: '优良率',
                x: 'center',
                y: 'center',
                textStyle: {
                    fontSize: 20,
                    color: "rgba(255, 240, 0, 1)",
                    fontStyle: "italic",
                },
                subtextStyle: {
                    fontSize: 16,
                    color: "rgba(255, 240, 255, 1)",
                }
            },
            xAxis: {
                show: false,
            },
            yAxis: {
                show: false,
            },
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            toolbox: {
                show: false
            },
            series: seriesObj
        }