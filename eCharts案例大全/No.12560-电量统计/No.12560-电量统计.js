var Chart = {
    Config: {
        y_font_color: '#60F194',
        x_font_color: '#fff',
        y_line_color: '#184483',
        x_line_color: '#184483',
        split_line_color: 'rgba(0,53,115,0.6)'
    },
    getXAxisData(timestamp) {
        let date = new Date();
        if (timestamp) date.setTime(parseInt(timestamp));
        let year = date.getFullYear();
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
        let month = date.getMonth() + 1;
        let day_max = date.getDate();
        let data = [];
        for (let i = 1; i <= day_max; i++) {
            data.push(i < 10 ? year + '/' + month + '/0' + i : year + '/' + month + '/' + i);
        }
        return data;
    },
    //用于进行双轴均分计算，这里的max和min需要提前获取到
    split(){
        let max = 10;
        let min = 0;
        //双轴切割线均分重合
      if (max > 0 && line_max > 0) {
        //此处定义规则
        let interval_y_left = parseInt(max / 6) + 1;
        let interval_y_right = parseFloat((parseFloat(line_max / 6) * 1.1).toFixed(1));
        option.yAxis = [{
          max: (interval_y_left * 6).toFixed(2),
          interval: interval_y_left
        }, {
          max: (interval_y_right * 6).toFixed(2),
          interval: interval_y_right
        }];
      } else {
        option.yAxis = [{max: 1}, {max: 1}];
      }
    }
};

option = {
    backgroundColor: '#141845',
    color: ['#26CEFB', '#FEE99A'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        top: '2%',
        right: '2%',
        data: ['日用电量（kw·h）', '单位用电量（kw·h/m³）'],
        textStyle: {
            color: '#fff',
            fontSize: '14px'
        },
        icon: 'rect',
        itemHeight: 7
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '18%',
        bottom: '38%'
    },
    xAxis: [{
        type: 'category',
        data: Chart.getXAxisData(),
        axisPointer: {
            type: 'shadow'
        },
        axisLine: {
            lineStyle: {
                color: Chart.Config.x_line_color
            }
        },
        axisLabel: {
            // margin: 26,
            interval: 0,
            rotate: 30,
            textStyle: {
                color: Chart.Config.x_font_color,
                fontSize: '70%'
            }
        }
    }],
    yAxis: [{
            axisPointer: {
                show: false
            },
            splitNumber: 6,
            type: 'value',
            min: 0, //max: 6000,
            axisLabel: {
                textStyle: {
                    color: Chart.Config.y_font_color,
                    fontSize: '12px'
                }
            },
            axisLine: {
                lineStyle: {
                    color: Chart.Config.y_line_color,
                }
            },
            splitLine: {
                lineStyle: {
                    color: Chart.Config.split_line_color,
                    width: 0,
                    type: 'solid'
                }
            }
        },
        {
            axisPointer: {
                show: false
            },
            splitNumber: 6,
            type: 'value',
            min: 0, //max: 0.6,
            axisLabel: {
                textStyle: {
                    color: Chart.Config.y_font_color,
                    fontSize: '12px'
                }
            },
            axisLine: {
                lineStyle: {
                    color: Chart.Config.y_line_color,
                }
            },
            splitLine: {
                lineStyle: {
                    color: Chart.Config.split_line_color,
                    width: 1,
                    type: 'solid'
                }
            }
        }
    ],
    series: [{
        name: '日用电量（kw·h）',
        type: 'bar',
        data: [12, 23, 33, 2, 11, 43, 66, 2, 12, 44, 84, 27, 2]
    }, {
        name: '单位用电量（kw·h/m³）',
        type: 'line',
        yAxisIndex: 1,
        data: [11, 55, 2, 54, 17, 29, 42, 56, 78, 2, 22, 4, 3]
    }]
};