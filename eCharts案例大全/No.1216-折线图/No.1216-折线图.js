 var data2 = [79, 29, 19, 39, 58];
        var xData = ['公司', '压铸', '浇铸', '机加一', '机加二'];
        option = {
            backgroundColor:"black",
            title: {
                text: '不良率',
                textStyle: {
                    align: 'center',
                    color: '#fff',
                    fontSize: 28,
                },
                top: '5%',
                left: 'center',
            },
            grid: {
                borderWidth: 0,
                top: '19%',
                left: '6%',
                right: '2%',
                bottom: '14%',
                textStyle: {
                    color: '#fff',
                },
            },
            legend: {
                top: '5%',
                right: '10%',
                textStyle: {
                    fontSize: 20,
                    fontFamily: 'MicrosoftYaHeiUI',
                    color: '#FFFFFF',
                },
                itemWidth: 28,
                itemHeight: 28,
                data: [
                {
                    name: '不良率',
                    icon: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA1UlEQVRYR+2UMQ7CMAxFvxdyFtqVhREpZ+AEnIyRM1RiY2NsOQgTXYzSUlVNm9ZWhwrJnvPjpxfHhI2LNu4PAzADZsAM/I+BT5FnAF8JqBl0cb6sNFu0z/N751+nLisy0ISJb2DkTZBQgukshYjyT+ergxhgEA6NQwUQIcQoH4HPGpgKtwZ+NhYglpq3MhM1F5ZcLDmTBJCE1wImZ0DSvAuvfaKRAU3zJIRySAczUBfZg4GjdMInIZTfNALY3wFy6xaNblGJFpFm42nPGoAZMANmwAx8ASjjyiGj/fCxAAAAAElFTkSuQmCC',
                }, ],
            },
            xAxis: [
            {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255)',
                    },
                },
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitArea: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(255,255,255)',
                    fontSize: 18,
                },
                data: xData,
            }, ],
            yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255)',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    color: 'rgba(255,255,255)',
                    fontSize: 18,
                    formatter: (params) => {
                        return params + '%';
                    },
                },
                splitArea: {
                    show: false,
                },
            }, ],
            series: [
            {
                name: '不良率',
                type: 'line',
                symbolSize: 10,
                symbol: 'circle',
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'top',
                            formatter: (params) => {
                                return params.value + '%';
                            },
                            textStyle: {
                                fontSize: 18,
                                color: '#fff'
                            },
                        },
                        color: 'rgba(255, 196, 53, 1)',
                        barBorderRadius: 0,
                    },
                },
                lineStyle: {
                    normal: {
                        width: 4,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                            {
                                offset: 0,
                                color: '#F0B62A', // 0% 处的颜色
                            },
                            {
                                offset: 0.45,
                                color: '#FFC12B', // 45% 处的颜色
                            },
                            {
                                offset: 0.85,
                                color: '#FFC12B', // 85% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FFC12B', // 100% 处的颜色
                            }, ],
                            global: false, // 缺省为 false
                        },
                    },
                },
                data: data2,
            }, ],
        };