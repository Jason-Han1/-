var seriesOption = [
    {
        type: 'custom',
        coordinateSystem: 'polar',
        renderItem: function renderItem(params, api) {
            return {
                type: 'group',
                children: [
                    {
                        type: 'circle',
                        shape: {
                            cx: params.coordSys.cx,
                            cy: params.coordSys.cy,
                            r: 80
                        },
                        style: {
                            fill: '#071039',
                            shadowBlur: 66,
                            shadowOffsetX: 6,
                            shadowOffsetY: 6,
                            shadowColor: 'rgba(76,107,167,0.4)'
                        }
                    }
                ]
            };
        },
        itemStyle : {
            borderWidth : 1,
            borderType : 'dotted'
        }
    }, 
    {
        type: 'gauge',
        splitNumber: 90, 
        radius: '20%',
        center: ['50%', '50%'],
        startAngle: 90,
		endAngle: -269.9999,
        axisLine: {
        	show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 25,
            lineStyle: {
            	width: 1,
                color: '#FFF',
            }
        },
        axisLabel: {
            show: false
        },
        pointer: { 
            show: 0,
        },
        detail: {
            show: 0,
        }
	},
	{
        type:'pie',
        radius: ['9%', '22%'],
        hoverAnimation: false,
        data:[
            {
                name:'三级',
                value:25,
                itemStyle : {
                    normal : {
                        color: "rgba(36, 180, 255, 0.5)",
                        borderColor: "rgba(36, 180, 255, 1)",
                        borderWidth: 1
                    }
                }
            },
            {
                name:'二级',
                value:32,
                itemStyle : {
                    normal : {
                        color: "rgba(255, 201, 92, 0.5)",
                        borderColor: "rgba(255, 201, 92, 1)",
                        borderWidth: 1
                    }
                }
            },
            {
                name:'一级',
                value:33, 
                itemStyle : {
                    normal : {
                        color: "rgba(244, 255, 77, 0.5)",
                        borderColor: "rgba(244, 255, 77, 1)",
                        borderWidth: 1
                    }
                }
            }
        ],
        label: {
        	normal: {
                formatter: '\n\n{b|{b}}\n{c|{c}万}\n{c|}',
                padding: [0, -3], 
                rich: {
                    b: {
                        padding: 4,
                        fontSize: 14,
                        align: 'left',
                        color: '#4872A8'
                    },
                    hr: {
                        width: '100%',
                        height: 0,
                        borderWidth: 1,
                        borderColor: '#4872A8'
                    },
                    c: {
                        padding: 4,
                        fontSize: 12,
                        align: 'right',
                        color: '#B3E3F8'
                    }
                }
            }
        },
        avoidLabelOverlap: true,
        labelLine: {
        	normal: {
                show: true,
                length: 25,
                length2: 15,
                lineStyle: {
                    color: '#94C1FF'
                }
            },
            emphasis: {
                show: true
            }
        }
    }
];

option = {
    backgroundColor : '#071039',
    dataset: {
        source: [[1, 156]]
    },
    angleAxis: {
        type: 'value',
        startAngle: 0,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false },
        min: 0,
        max: 200
    },
    radiusAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: { show: false }
    },
    polar: {},
    toolbox: {
        show: false
    },
    series: seriesOption
};