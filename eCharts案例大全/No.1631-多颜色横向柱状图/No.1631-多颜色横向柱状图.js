var data=[50, 60, 70,20,30];
var className=['职工医保','居民医保','职工养老','居民养老','机关养老'];
var colorArray = [
    {
        top: '#f2f59e',
        bottom: '#f4b979'
    }, {
        top: '#56c8ff',
        bottom: '#08c1f8'
    },
    {
        top: '#96f4d5',
        bottom: '#5ff1a7'
    }, {
        top: '#9592ff',
        bottom: '#625ff1'
    },
    {
        top: '#fe9699',
        bottom: '#eb5155'
    }
];
var defaultData=[100,100,100,100,100];
option = {
    grid: {
	        left: '3%',
	        right: '2%',
	        bottom: '0%',
	        top: '6%',
	        containLabel: true
	    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
	            return '<span style="font-weight:bolder;">'+params[0].name + '</span><br/>' +
	                '<span style="display:inline-block; width:10px; height:10px; border-radius:100px; margin-right:5px; background:'+params[0].color.colorStops[params[0].dataIndex].color+'"></span>'+params[0].seriesName + ' : ' + params[0].value
	        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
	                color: '#d9e7fa',
	                fontSize: '14',
					fontWeight:'bolder'
	            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '14'
            },
            formatter: function(value) {
                    return value + ' 个';
            },
        },
        data: data
    }],
    series: [{
            name: '疑点个数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 100,
				    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }],
                        }
                    },
                },
            },
            barWidth: 12,
            data: data
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 12,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: '#11294d',
                    barBorderRadius:100,
                }
            },
        },
    ]
};