        var xnums = 25;
        var ynums = 24;
        var dataNums = xnums * ynums;
        var itemWidth = 30;
        var itemHeight = 15;

        function makeRandom() {
            var chance = Math.ceil(Math.random() * 100);
            if (chance <= 40) {
                return Math.random() * 50
            } else if (chance > 40 && chance <= 60) {
                return Math.random() * 50 + 50
            } else if (chance > 60 && chance <= 75) {
                return Math.random() * 50 + 100
            } else if (chance > 75 && chance <= 85) {
                return Math.random() * 50 + 150
            } else if (chance > 85 && chance <= 95) {
                return Math.random() * 100 + 200
            } else if (chance > 95 && chance <= 100) {
                return Math.random() * 300 + 300
            }
        }

        function makeData() {
            var data = [];
            for (var i = 0; i < xnums; i++) {
                for (var j = 0; j < ynums; j++) {
                    data.push([echarts.format.formatTime('yyyy-MM-dd', new Date(2018, 8, i + 1)), j + 1 + ':00', (makeRandom()).toFixed(1)])
                }
            }
            return data
        }

        function makeXdata() {
            var xData = [];
            for (var i = 1; i <= xnums; i++) {
                xData.push(echarts.format.formatTime('yyyy-MM-dd', new Date(2018, 8, i)));
            }
            console.log(xData);
            return xData
        }

        function makeYdata() {
            var yData = [];
            for (var i = 1; i <= ynums; i++) {
                yData.push(i + ':00');
            }
            return yData
        }
        //console.log(makeData());
        option = {
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],
            title: {
                text: '2018年09月份爪哇市空气污染分布图',
                subtext: '数据纯属虚构',
                top: '2%',
                left: 'center',
                textStyle: {
                    fontSize: 30
                },
                subtextStyle: {
                    fontSize: 15
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                textStyle: {
                    lineHeight: 150
                }
            },
            calculable: true,
            grid: {
                show: false,
                top: '25%',
                left: 'center',
                width: xnums * (itemWidth + 10),
                height: ynums * itemHeight
            },
            visualMap: {
                min: 0,
                max: 600,
                splitNumber: 6,
                pieces: [

                    {
                        min: 300,
                        label: '严重污染'
                    },

                    {
                        min: 200,
                        max: 300,
                        label: '重度污染'
                    },
                    {
                        min: 150,
                        max: 200,
                        label: '中度污染'
                    },
                    {
                        min: 100,
                        max: 150,
                        label: '轻度污染'
                    },
                    {
                        min: 50,
                        max: 100,
                        label: '良'
                    },
                    {
                        min: 0,
                        max: 50,
                        label: '优'
                    },
                ],
                itemWidth: itemWidth,
                itemHeight: itemHeight,
                color: ['#a11430', '#e06b9d', '#db4a6e', '#f2c248', '#cddb4c', '#4bcf1c'],
                top: '15%',
                left: 'center',
                orient: 'horizontal',
                textStyle: {
                    fontSize: 15
                }
            },
            xAxis: [{
                axisTick: {
                    show: false
                },
                data: makeXdata(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 10
                    },
                    showMinLabel: true,
                    showMaxLabel: true,
                    rotate: 50
                }
            }],
            yAxis: [{
                data: makeYdata(),
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        fontSize: 10
                    }
                }
            }],
            series: [{
                type: 'scatter',
                symbol: 'rect',
                symbolSize: (value, params) => {
                    return [itemWidth, itemHeight]
                    //console.log(value, params)
                },
                itemStyle: {
                    borderWidth: 0.5,
                    borderColor: 'black'
                },
                data: makeData()
            }]
        };;