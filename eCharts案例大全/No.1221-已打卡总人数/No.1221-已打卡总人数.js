   var colorList = ['#407AFB', '#1791FF', '#36B0FE', '#6635EF', '#73ACFF', '#41CBAB', '#7BDD43', '#FFC653', '#FF6519', '#EE3939', '#FFAFDA', '#00FFFF'];
        const colorArr = ['#0265fe', '#20D3ABee', '#FDD56Aee', '#ff7b23', '#097b9a'];
        const colorAlpha = ['#0265fe', '#20D3AB88', '#FDD56A88', '#ff7b23', '#097b9a'];
        var seriesdata1 = [
        {
            name: '压铸车间',
            value: 3200,
            percent: 5.01,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: colorAlpha[0],
                    shadowColor: colorArr[0],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[0],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[0],
                    }, ]),
                },
            },
        },
        {
            name: '浇铸车间',
            value: 1400,
            percent: 5.12,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: colorAlpha[1],
                    shadowColor: colorArr[1],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[1],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[1],
                    }, ]),
                },
            },
        },
        {
            name: '机加一车间',
            value: 3400,
            percent: 1.87,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: colorAlpha[2],
                    shadowColor: colorArr[2],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[2],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[2],
                    }, ]),
                },
            },
        },
        {
            name: '机加二车间',
            value: 3000,
            percent: 0.87,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: colorAlpha[3],
                    shadowColor: colorArr[3],
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: colorArr[3],
                    },
                    {
                        offset: 1,
                        color: colorAlpha[3],
                    }, ]),
                },
            },
        }];

        var objData = array2obj(seriesdata1, 'name');

        //将合计值转换为数组
        var h = '12400';
        arr = h.split('');
        m = '';

        for (i = 0; i < arr.length; i++) {
            m += '{a|' + arr[i] + '}';
            if (i != arr.length - 1) {
                m += '  ';
            }
        }

        option = {
            backgroundColor:'#ooo',
            grid: {
                x: '30%',
                y: '3',
                x2: '5%',
                y2: '5%',
                borderWidth: 1,
                borderColor: '#f0f0f0',
            },
            title: [
            {
                text: '{b|已打卡总人数：}' + m,
                left: '68%',
                top: '3%',
                textAlign: 'center',
                textStyle: {
                    fontWeight: 'normal',
                    fontSize: '20',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    rich: {
                        a: {
                            fontSize: '34',
                            fontWeight: 'bold',
                            backgroundColor: 'rgba(56,89,255,0.2)',
                            borderColor: 'rgba(56,211,255,1)',
                            borderWidth: 1,
                            padding: [6, 6, 6, 6],
                            shadowColor: 'rgba(56,211,255,1)',
                            shadowBlur: 3,
                            borderRadius: 3
                        },
                        b: {
                            fontSize: '34',
                            fontWeight: 'bold',
                            padding: [6, 6, 6, 6],
                            color: '#FFFFFF',
                        }
                    }
                },
            }, ],
            legend: {
                show: true,
                //icon: 'circle',
                orient: 'vertical',
                top: '30%',
                left: '65%',
                itemGap: 60,
                itemWidth: 15,
                itemHeight: 10,
                data: seriesdata1,
                formatter: function (name) {
                    return '{a|' + name + '}{c|' + objData[name].value.toFixed(0) + '人}';
                },
                textStyle: {
                    rich: {
                        a: {
                            align: 'left',
                            fontSize: 24,
                            color: 'rgba(255,255,255,1)',
                            width: 40,
                            //fontWeight: 600,
                            padding: [0, 0, 0, 10],
                        },
                        c: {
                            align: 'right',
                            fontSize: 24,
                            color: 'rgba(255,255,255,1)',
                            width: 30,
                            //fontWeight: 600,
                            padding: [0, 0, 0, 160],
                        },
                    },
                },
            },
            series: {
                type: 'pie',
                center: ['34%', '55%'],
                radius: ['25%', '40%'],
                clockwise: true,
                //startAngle: 50,
                avoidLabelOverlap: true,
                hoverOffset: 15,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            return colorList[params.dataIndex];
                        },
                    },
                },
                label: {
                    show: true,
                    position: 'outside',
                    formatter: function (data) {
                        //console.log('data',data)
                        return (
                            '{name|' + data.name + ':' + '\n}' + ' \n{value|占比：' + data.percent.toFixed(0) + '%}'
                        );
                    },
                    rich: {
                        name: {
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        value: {
                            fontSize: 20,
                            color: '#ffffff',
                        },
                    },
                },
                labelLine: {
                    show: false,
                    normal: {
                        length: 15,
                        length2: 40,
                        align: 'right',
                        lineStyle: {
                            width: 4,
                        },
                    },
                },
                data: seriesdata1,
                seriesIndex: 0,
            },
        };

        function array2obj(array, key) {
            var resObj = {};
            for (var i = 0; i < array.length; i++) {
                resObj[array[i][key]] = array[i];
            }
            return resObj;
        }