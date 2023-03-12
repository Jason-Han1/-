let myColor = ['#1089e7', '#f57474', '#56d0e3', '#f8b448', '#8b78f6'];
option = {
    backgroundColor: "#062a44",
    grid: {
        top: '10%',
        left: '22%',
        bottom: '10%'
    },
    xAxis: {
        show: false
    },
    yAxis: [{
            type: 'category',
            data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
            //不显示y轴线条
            axisLine: {
                show: false
            },
            inverse: true,
            //不显示刻度
            axisTick: {
                show: false
            },
            //设置文字颜色
            axisLabel: {
                color: "#0ff",
                interval: 0
            }
        },
        {
            show: true,
            data: [702, 350, 610, 793, 664],
            //不显示y轴线条
            axisLine: {
                show: false
            },
            //不显示刻度
            axisTick: {
                show: false
            },
            //设置文字颜色
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#0ff'
                }

            }
        }
    ],
    series: [{
            name: '条',
            type: 'bar',
            data: [70, 34, 68, 59, 38],
            //相当于设置优先级
            yAxisIndex: 0,
            //修改第一组柱子的圆角
            itemStyle: {
                barBorderRadius: 20,
                //此时的color可以修改柱子颜色
                color: function(param) {
                    //注意这里的param进来的时柱子对象  dataIndex是索引号
                    // console.log(param)
                    return myColor[param.dataIndex];
                }
            },
            //柱子之间距离
            barCategoryGap: 50,
            //柱子宽度
            barWidth: 10,
            //显示柱子内的文字
            label: {
                show: true,
                position: 'inside',
                //{c}会自动解析数据
                formatter: "{c}%"
            }
        },
        {
            name: '框',
            type: 'bar',
            data: [100, 100, 100, 100, 100],
            //相当于设置优先级
            yAxisIndex: 1,
            barCategoryGap: 50,
            barWidth: 15,
            itemStyle: {
                color: 'none',
                borderColor: '#00c1de',
                borderWidth: 3,
                barBorderRadius: 15
            }
        }
    ]
};