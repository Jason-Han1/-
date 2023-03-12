var data={
    Amount:["54300.00","54014.00","50034.00","50034.00","50034.00","24004.00","14334.00"],
    Province:['贵州','山东','湖南','黑龙江','河南','辽宁省','北京']
};
//初始化数据
    var category = [];
    var barData = [];
    var length1 = 7;
    if (data.Amount.length <= 7) {
        length1 = data.Amount.length;
    }
    for (var i = 0; i < length1; i++) {
        barData.push(data.Amount[length1 - i - 1])
    }
    for (var i = 0; i < length1; i++) {
        category.push(data.Province[length1 - i - 1])
    }
    var yMax = 54300;
    var dataShadow = [];

    for (var i = 0; i < barData.length; i++) {
        dataShadow.push(yMax)
    }
    let colorList1 = ['#07eef2', '#ebe485', '#ef7e14', '#42dc8b'];
    var option = {
        backgroundColor:'#00033A',
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "2%",
            right: "8%",
            bottom: "10%",
            top: '10%', //去掉标题，图表整体往上移动
            containLabel: true
        },
        xAxis: {
            type: "value",
            show: false,//直接设置show|的属性的话x轴的轴线和垂直于它的网格线以及x轴数据会一起显示隐藏，这里需要全部隐藏包括所以直接show，如果需要单独给它们设置显示隐藏详见以下设置
            bottom: 2,
            boundaryGap: ['0%', '1%'],//留白大小，坐标轴1边留白,横向柱状图的右侧label**人不会超出宽度被隐藏
        },
        yAxis: {
            boundaryGap: ['0%', '1%'],//留白大小，坐标轴1边留白
            axisLabel: {
                fontSize: 15,
                color: '#05CCCA',
                interval: 0,
                //margin: 95,
                margin: 15,
                textStyle: {
                    position: 'topLeft',
                },
                show: false,
            },
            type: "category",
            data: category,
            axisTick: {
                //y轴刻度线
                show: false
            },
            axisLine: {//y轴轴线
                show: false
            }

        },
        series: [
            { // For shadow
                name: '最大销售金额',
                type: 'bar',

                itemStyle: {
                    normal: {
                        barBorderRadius: 40,
                        color: function (params) {
                            let colorList = ['#002d52', '#292a38', '#28172a', '#0b283f', '#1d074a', '#311535', '#050d4e'];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        barBorderRadius: 40
                    },
                },
                barGap: '-100%',
                barCategoryGap: '50%',
                // barCategoryGap:'40%',
                data: dataShadow,
                animation: true,
                barWidth: 15,
                label: {
                    formatter: function (param) {
                        for (let i = 0; i < barData.length; i++) {
                            if (param.dataIndex == i) {
                                return barData[i] + "元";
                            }
                        }
                    },
                    right: '3%',
                    show: true,
                    textStyle: {
                        fontWeight: 400,
                        fontSize: 14,
                        color: "#069AE6"
                    },
                    position: "right"
                },
            }, {
                name: "销售金额",
                top: 20,
                color: "#00A6FC",
                type: "bar",
                stack: "总量",
                barCategoryGap: 2,

                itemStyle: {
                    //通常情况下：
                    normal: {

                        barBorderRadius: 8,
                        //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params) {
                            var colorList = [
                                ['#18579e', '#07eef2'],
                                ['#77633c', '#ebe485'],
                                ['#815529', '#ef7e14'],
                                ['#0d3247', '#42dc8b'],
                                ['#551384', '#810dfc'],
                                ['#734040', '#fb7070'],
                                ['#131d54', '#0141fa'],


                            ];
                            var index = params.dataIndex;
                            if (params.dataIndex >= colorList.length) {
                                index = params.dataIndex;
                            }
                            return new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                offset: 0,
                                color: colorList[index][1]
                            },
                            {
                                offset: 1,
                                color: colorList[index][0]
                            }
                            ]);
                        }
                    },
                },
                label: {
                    formatter: function (param) {
                        for (let i = 0; i < category.length; i++) {
                            if (param.dataIndex == i) {
                                return category[i];
                            }
                        }
                    },
                    right: '3%',
                    show: true,
                    offset: [4, -17],
                    textStyle: {
                        fontWeight: 400,
                        fontSize: 15,
                        color: "#4984d5",
                    },

                    position: "topLeft"
                },
                //设置柱的宽度
                barWidth: 15,
                //  height:'70%',
                data: barData
            }]
    }