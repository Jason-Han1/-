    var xData = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    var lineData = [100, 100, 100, 100, 100, 100, 100]
    var lastYearData = [3, 20, 62, 34, 55, 65, 33];
    var thisYearData = [1100, 3800, 2300, 3900, 6600, 6600, 7900];
    var timeLineData = [1];
    let legend=['2017', '2018'];
    var background = "#fff"; //背景 
    let textColor = "#000";
    let lineColor="#cccccc";
    let colors = [{
            borderColor: "rgba(227,161,96,1)",
            start: "rgba(227,161,96,0.8)",
            end: "rgba(227,161,96,0.3)"
        },
        {
            borderColor: "rgba(0,222,255,1)",
            start: "rgba(0,222,255,0.3)",
            end: "rgba(0,222,255,0.8)"
        },
    ];
    let borderData = [];
    let scale = 2;
    borderData = xData.map(item => {
        return scale;
    });
    var option = {
        baseOption: {
            backgroundColor: background,
            timeline: {
                show: false,
                top: 0,
                data: []
            },
            tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'shadow'
            }
            },
            legend: {
                top: '5%',
                right: '5%',
                itemWidth: 20,
                itemHeight: 5,
                // itemGap: 343,
                icon: 'horizontal',
                textStyle: {
                    color: '#cccccc',
                    fontSize: 20,
                },
                data: legend
            },
            grid: [{
                show: false,
                left: '8%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }, {
                show: false,
                left: '5%',
                top: '10%',
                bottom: '8%',
                width: '0%'
            }, {
                show: false,
                right: '5%',
                top: '10%',
                bottom: '8%',
                containLabel: true,
                width: '37%'
            }],
            xAxis: [{
                type: 'value',
                inverse: false,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                splitLine:{
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
            }, {
                gridIndex: 1,
                show: false
            }, {
                gridIndex: 2,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    color: textColor
                },
                 splitLine:{
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
            }],
            yAxis: [
                {
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
               
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                data: xData
            }, 
            
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    padding:[30,0,0,0],
                    textStyle: {
                        color: '#000',
                        fontSize: 15
                    },
                    align: "center"

                },
                data: xData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, 
            
            {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                     show: true,
                    lineStyle:{
                        color:lineColor
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false

                },
                data: xData
            }
            ],
            series: []

        },
        options: []
    }

    option.baseOption.timeline.data.push(timeLineData[0])
    option.options.push({
        series: [{
                name: "2017",
                type: "bar",
                barWidth: 25,
                xAxisIndex: 0,
                yAxisIndex: 0,
                stack: "1",
                data: lastYearData,
            },
       
            {
                name: "2018",
                type: "bar",
                stack: "2",
                barWidth: 25,
                xAxisIndex: 2,
                yAxisIndex: 2,
                data: thisYearData,
            },
            
        ]
    });