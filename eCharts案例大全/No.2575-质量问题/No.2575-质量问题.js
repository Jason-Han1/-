var barOption = {
        xAxis: [
            '材料施工工ww',
            '施工工艺现场检验现场检验现场检验',
            '现场检验现场检验现场检验现场检验',
            '材料现场检验现场检验现场检验',
            '施工工艺现场检验现场检验现场检验',
            '现场检验现场检验现场检验现场检验',
            '材料现场检验现场检验现场检验',
            '施工工艺现场检验现场检验现场检验',
            '现场检验现场检验现场检验现场检验',
        ],
        numberData: [5, 7, 10, 5, 7, 10, 5, 7, 10],
    },
    option = {
        tooltip: {
            trigger: 'item',
            confine: true,
            formatter: function (params) {
                if (params.seriesName === '合格率') {
                    // 乘以10000, 相当于取到小数点后四位的四舍五入近似数. 再除以1000, 如果有小数的, 就会保留小数位, 没有小数的, 就直接显示整数
                    return params.name + params.seriesName + ':\t' + params.value + '%';
                }
                return params.name + params.seriesName + ':\t' + params.value;
            },
        },
        legend: {
            show: false,
            data: ['数量'],
            textStyle: {
                color: '#5789c6',
                padding: [5, 0, 0, 0],
                fontSize: '14px',
            },
            itemWidth: 10,
            itemHeight: 10,
            top: 10,
            left: 'center',
        },
        yAxis: {
            type: 'category',
            data: barOption.xAxis,
            triggerEvent: true,
            axisTick: {
                show: false, // 不显示坐标轴刻度线
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                },
            },
            axisLabel: {
                show: true,
                interval: 0,
                // margin: 20,
                // width : '60',
                // overflow: 'breakAll' ,
                textStyle: {
                    color: 'rgba(255,255,255,0.75)', // X轴文字颜色
                    padding: [0, 0, 0, 0],
                    // verticalAlign :'middle',
                    fontSize: 12,
                },
                formatter: function (value) {
                    if (value.length > 5) {
                        return value.substring(0, 5) + '...';
                        // return value.substring(0,5) + "\n" + value.slice(5,10);
                    } else {
                        return value;
                    }
                },
            },
        },
        grid: {
            containLabel: true,
            left: 20,
            right: 25,
            top: 10,
            bottom: 15,
        },
        xAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false,
                },
                axisLabel: {
                    formatter: '{value}',
                },
                splitLine: {
                    // show: false // 不显示网格线
                    lineStyle: {
                        type: 'dashed',
                        color: 'rgba(252, 252, 252, 0.2)',
                    },
                },
            },
        ],
        series: [
            {
                name: '数量',
                data: barOption.numberData,
                type: 'bar',
                barWidth: 12,
                yAxisIndex: 0,
                textStyle: {
                    fontSize: '14',
                },
                itemStyle: {
                    fontSize: 16,
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            1,
                            1,
                            [
                                {
                                    offset: 0,
                                    color: 'rgba(230,187,86,.4)', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#E6BB56', // 100% 处的颜色
                                },
                            ],
                            false
                        ),
                    },
                },
            },
        ],
        dataZoom:
            barOption.xAxis.length > 3
                ? [
                      {
                          type: 'slider',
                          yAxisIndex: [0],
                          right: '5',
                          // bottom: 5,
                          // height: 6,
                          width: '6',
                          zoomLock: true,
                          minSpan: 40,
                          maxSpan: 40,
                          minValueSpan: 2,
                          maxValueSpan: 3,
                          backgroundColor: 'rgba(255,255,255,.2)',
                          start: 0,
                          borderColor: 'none',
                          end: 20,
                          dataBackground: {
                              lineStyle: {
                                  color: 'none',
                              },
                              areaStyle: {
                                  color: 'none',
                              },
                          },
                          selectedDataBackground: {
                              lineStyle: {
                                  color: 'none',
                              },
                              areaStyle: {
                                  color: 'none',
                              },
                          },
                          borderWidth: 0,
                          handleSize: '0px',
                          fillerColor: '#09E3EF',
                          moveHandleSize: 0,
                          showDetail: false,
                      },
                  ]
                : '',
    };
