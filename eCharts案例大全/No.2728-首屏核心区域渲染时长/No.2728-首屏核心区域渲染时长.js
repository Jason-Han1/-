var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
        }
    }
};

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['优化前', '优化后']
        }
    ],
    yAxis: [
        {
            type: 'value',
            min:0
        }
    ],
    series: [
        {
            name: '医生端',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [2560, 1030],
            itemStyle: {
				normal: {
					label: {
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: '#343434',
							fontSize: 12
						}
					}
				}
			},


        },
        {
            name: '患者端',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [983, 650],
            itemStyle: {
		    	normal: {
    				label: {
    					show: true, //开启显示
    					position: 'top', //在上方显示
    					textStyle: { //数值样式
    						color: '#343434',
    						fontSize: 12
    					}
    				}
    			}
    		},
        }
    ]
};