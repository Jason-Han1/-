var women = null;
var men = null;
$(function () {
    $.getJSON('/asset/get/s/data-1636100695450-E5ofSUIRY.json', function (data) {
        console.log(data.woman);
        var woman = data.woman;
        var man = data.man;
        // var myChart = echarts.init(document.getElementById('chart-panel'));

        var COLOR = ['#DC143C', '#696969'];
        //设置series数据项
        var seriesData = [
            {
                // TODO:6.配置散点图数据
                name: '女生',
                type: 'scatter',
                //TODO:7.设置体重的最大值和最小值
                markPoint: {
                    symbol: 'rect',
                    symbolRotate: 45,
                    symbolSize: 30,

                    data: [
                        {
                            type: 'max',
                            name: 'Max',
                        },
                        {
                            type: 'min',
                            name: 'Min',
                        },
                    ],
                },
                //TODO：8.设置平均线
                markLine: {
                    label: {
                        color: COLOR[0],
                        formatter: function (param) {
                            return '女生的平均身高值\n' + param.value;
                        },
                    },
                    lineStyle: {
                        type: 'solid',
                    },
                    data: [
                        {
                            type: 'average',
                            name: 'AVG',
                        },
                        {
                            xAxis: 160.87,
                        },
                    ],
                },
                //TODO: 9.设置取值区间
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed',
                    },
                    data: [
                        [
                            {
                                name: '',
                                xAxis: 'min',
                                yAxis: 'min',
                            },
                            {
                                xAxis: 'max',
                                yAxis: 'max',
                            },
                        ],
                    ],
                },

                //TODO:10.计算BMI，标注超重数据

                symbolSize: function (param) {
                    var height = param[0] / 100;
                    var weight = param[1];

                    //计算BMI
                    var BMI = weight / (height * height);

                    if (BMI > 25) {
                        //超过25为超重
                        return 30;
                    } else if (BMI >= 20 && BMI <= 25) {
                        //BMI正常值在20至25之间
                        return 15;
                    } // 以下偏瘦
                    return 10;
                },
                itemStyle: {
                    color: function (param) {
                        //正常数据使用'#DC143C'，超重数据使用'#8B0000'

                        var gender = param.seriesName; // param

                        if (gender == '女生') {
                            return '#DC143C';
                        }
                        return '#8B0000';
                    },
                },
                data: woman,
            },
            {
                // TODO:6.配置散点图数据
                name: '男生',
                type: 'scatter',
                //TODO:7.设置体重的最大值和最小值
                markPoint: {
                    symbol: 'rect',
                    symbolRotate: 45,
                    symbolSize: 30,
                    data: [
                        {
                            type: 'max',
                            name: 'Max',
                        },
                        {
                            type: 'min',
                            name: 'Min',
                        },
                    ],
                },
                //TODO：8.设置平均线
                markLine: {
                    label: {
                        formatter: function (param) {
                            return '男生的平均身高值\n' + param.value;
                        },
                    },
                    lineStyle: {
                        type: 'solid',
                    },
                    data: [
                        {
                            type: 'average',
                            name: 'AVG',
                        },
                        {
                            xAxis: 177.75,
                        },
                    ],
                },
                //TODO: 9.设置取值区间
                markArea: {
                    silent: true,
                    itemStyle: {
                        color: 'transparent',
                        borderWidth: 1,
                        borderType: 'dashed',
                    },
                    data: [
                        [
                            {
                                name: '',
                                xAxis: 'min',
                                yAxis: 'min',
                            },
                            {
                                xAxis: 'max',
                                yAxis: 'max',
                            },
                        ],
                    ],
                },

                //TODO:10.计算BMI，标注超重数据

                symbolSize: function (param) {
                    var height = param[0] / 100;
                    var weight = param[1];

                    //计算BMI
                    var BMI = weight / (height * height);
                    // console.log(BMI)
                    if (BMI > 25) {
                        //超过25为超重
                        return 30;
                    } else if (BMI >= 20 && BMI <= 25) {
                        //BMI正常值在20至25之间
                        return 15;
                    } // 以下偏瘦
                    return 10;
                },
                itemStyle: {
                    color: function (param) {
                        //正常数据使用'#DC143C'，超重数据使用'#8B0000'

                        var gender = param.seriesName; // 取arg对象里的data值

                        if (gender == '男生') {
                            return '#696969';
                        }
                        return '#2E2E2E';
                    },
                },
                data: man,
            },
        ];
        // 设置配置项
        var option = {
            //TODO:11.设置标题，标题居中
            color: COLOR,
            title: {
                text: '某地区男性女性身高体重分布图',
                left: 'center',
                top: '0%',
            },
          
            //TODO:12.设置图例
            legend: {
                top: 20,
                left: '70%',
                itemWidth: 20,
                itemHeight: 20,
                data: ['女生', '男生'],
            },

            // TODO:13.设置提示框，注意极值点数据结构和其他位置数据结构不同
            tooltip: {
                show: true,
                formatter: function (param) {
                    console.log(param);
                    if (param.componentSubType == 'scatter') {
                        var height = param.value[0] / 100;
                        var weight = param.value[1];
                        // console.log(weight)
                        //计算BMI
                        var BMI = weight / (height * height);
                        BMI = Math.floor(BMI * 100) / 100;
                        var html = '';
                        html += '身高:' + param.value[0] + 'cm</br>';
                        html += '体重:' + param.value[1] + 'kg</br>';
                        html += 'BMI:' + BMI;
                        return html;
                    } else {
                        return param.value;
                    }
                },
            },
            grid: {
                top: '10%',
            },
            // TODO:5.设置x轴和y轴, 显示x轴y轴的坐标刻度及合理取值范围
            xAxis: {
                axisLine: {
                    //  改变x轴颜色
                    show: false,
                    lineStyle: {
                        color: '#26D9FF',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    //  改变x轴字体颜色和大小
                    formatter: '{value}cm ', //  给x轴添加单位
                    textStyle: {
                        color: '#333',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                },
                min: 130,
                max: 210,
                interval: 10,
            },
            yAxis: {
                nameTextStyle: {
                    color: '#8998AC',
                    padding: [0, 25, 0, 0],
                },
                axisLine: {
                    //  改变y轴颜色
                    lineStyle: {
                        color: '#ccc',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    //  改变y轴字体颜色和大小
                    formatter: '{value}kg ', //  给y轴添加单位
                    textStyle: {
                        color: '#333',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: '#E9E9E9',
                    },
                },
                min: 40,
                max: 120,
                interval: 10,
            },
            series: seriesData,
        };
        // TODO: 4.将配置项设置给echarts实例对象
        myChart.setOption(option);

        // console.log(option)
        window.addEventListener('resize', function () {
            myChart.resize();
        });
    });
    
});

   