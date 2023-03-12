var xdata = ["2017-08-04", "2017-08-07", "2017-08-08", "2017-08-09", "2017-08-10", "2017-08-11", "2017-08-14", "2017-08-15", "2017-08-16", "2017-08-17", "2017-08-18", "2017-08-21", "2017-08-22", "2017-08-23", "2017-08-24", "2017-08-25", "2017-08-29", "2017-08-30", "2017-08-31", "2017-09-01", "2017-09-04", "2017-09-05", "2017-09-06", "2017-09-07", "2017-09-08", "2017-09-11", "2017-09-12", "2017-09-13", "2017-09-14", "2017-09-15"];
var yAdata = [7.78, 7.67, 7.66, 7.96, 7.99, 7.91, 7.92, 7.74, 7.72, 8.01, 7.94, 7.89, 7.94, 7.75, 7.93, 8.04, 7.83, 7.84, 7.74, 7.8, 7.91, 7.93, 7.78, 7.72, 7.7, 7.59, 7.74, 7.9, 7.86, 7.98];
var yBdata = [-1344.3, -1618.17, -1621.29, -1008.16, -962.4, -1107.39, -1246.09, -1456.67, -1579.95, -912.75, -1152.99, -1180.53, -1150.5, -1485.05, -954.33, -840.5, -1032.84, -1045.6, -1122.3, -1113.13, -645.02, -603.1, -855.75, -806.2, -695.25, -998.68, -887.54, -508.14, -600.68, -1699.54];
option = {
                legend: {
                    data: ['沪伦比值(左)', '进口盈亏(右)']
                },
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    },
                    confine: true
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                credits: {
                    enable: false
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: xdata.map(function (str) {
                        return str.replace(' ', '\n')
                    }),
                    axisLabel: {
                    	formatter: function (value, index) {
                    	    // 格式化成月/日，只在第一个刻度显示年份
                    	    var date = new Date(value);
                    	    var texts = [(date.getMonth() + 1), date.getDate()];
                    	    if (index === 0) {
                    	        texts.unshift(date.getFullYear());
                    	    }
                    	    return texts.join('/');
                    	}
                    }
                },
                yAxis:
                    [
                        {
                            type: 'value',
                            scale: true,
                            position: 'left'
                        },
                        {
                            type: 'value',
                            scale: true,
                            position: 'right'
                        }
                    ],
                series: [
                    {
                        name: '沪伦比值(左)',
                        type: 'line',
                        smooth:true,  
                        data: yAdata
                    },
                    {
                        name: '进口盈亏(右)',
                        type: 'line',
                        yAxisIndex: 1,
                        smooth: true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: 'rgb(255, 70, 131)'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            }
                        },
                        data: yBdata
                    }
                ]
            }