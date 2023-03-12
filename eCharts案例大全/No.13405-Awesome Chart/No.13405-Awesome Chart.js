option = {
    tooltip: {
        show: false,
    },
    series: [{
        type: 'graph',
        layout: 'none',
        focusNodeAdjacency: false,
        nodeScaleRatio: 0.1,
        roam: true,
        zoom: 1,
        zoomLimit: {
            max: 1.5,
            min: 0.5
        },
        draggable: false,
        animation: false,
        circular: {
            rotateLabel: true
        },
        edgeSymbol: ['', 'arrow'], //
        label: {
            show: true,
            fontSize: 8,
            color: '#000',
            fontWeight: 'normal',
            position: 'right',
            formatter: function(param) {
    
                return param.name;
            },
        },
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: "{c}"
            }
        },

        data: [{
            name: '鹰眼',
            value: [10, 35, 50],
            x: 240,
            y: 192,

        }, {
            name: 'Mysql',
            x: 179,
            y: 254,
            value: [6, 7, 8],
        }, {
            name: 'Redis',
            value: [9, 31, 11],
            x: 100,
            y: 100,

        }, {
            name: 'ES',
            value: [23, 65, 50],
            x: 263.3165375759196,
            y: 108.7891462763019,

        }, ],
        edges: [{
            source: 0,
            target: 1,
            value: '数据库调用'
        }, {
            source: 0,
            target: 2,
            value: '数据库调用'
        }, {
            source: 0,
            target: 3,
            value: '远程调用'
        }, {
            source: 1,
            target: 2,
            value: '数据库调用'
        }, {
            source: 2,
            target: 3,
            value: '远程调用'
        }],

    },
    
    	{// 外围刻度
		type: 'gauge',
		center: ['95%', '10%'],radius: '10%', 
		splitNumber:10,min:0,max:10,
		startAngle:225,endAngle:-45,
		axisLine: {
			show: true,
			lineStyle: {width: 2,shadowBlur: 0,color: [[1, '#03b7c9']]}
		},
		axisTick: {
			show: true,
			lineStyle: { color:'#03b7c9', width: 1},
			length: -5,
			splitNumber: 2
		},
		splitLine: {
			show: true,
			length: -10,
			lineStyle: {color: '#03b7c9'}
		},
		axisLabel: {
			distance: -12,
			textStyle: {color: '#03b7c9',fontSize: '10',fontWeight: 'bold'}
		},
		pointer: {show: 0},
		detail: {show: 0}
	},
	{// 内侧指针、数值显示
		name: '出巡区间',
		type: 'gauge',
		center: ['95%', '10%'],radius: '10%',
		startAngle: 225,endAngle: -45,
		min: 0,max: 10,
		axisLine: {
			show: true,
			lineStyle: {
				width: 16,
				color: [[1, 'rgba(255,255,255,.1)']]
			}
		},
		axisTick: {show: 0},
		splitLine: {show: 0},
		axisLabel: {show: 0},
		pointer: {show: true,length: '90%'},
		detail: {
			show: true,
			offsetCenter: [0, '100%'],
			textStyle: {fontSize: 12,color: '#fff'},
			formatter: ['{value}'+'个','{name|'+'出巡区间'+'}'].join('\n'),
			rich: {
				name: {fontSize: 10,lineHeight: 15,color: '#fff'}
			}
		},
		itemStyle: {
			normal: {color: '#03b7c9',}
		},
		data: [{
			value: 0
		}]
	},
	
//限速区间
	{// 外围刻度
		type: 'gauge',
		center: ['95%', '26%'],radius: '10%', 
		splitNumber:10,min:0,max:10,
		startAngle:225,endAngle:-45,
		axisLine: {
			show: true,
			lineStyle: {width: 2,shadowBlur: 0,color: [[1, '#03b7c9']]}
		},
		axisTick: {
			show: true,
			lineStyle: { color:'#03b7c9', width: 1},
			length: -5,
			splitNumber: 2
		},
		splitLine: {
			show: true,
			length: -10,
			lineStyle: {color: '#03b7c9'}
		},
		axisLabel: {
			distance: -12,
			textStyle: {color: '#03b7c9',fontSize: '10',fontWeight: 'bold'}
		},
		pointer: {show: 0},
		detail: {show: 0}
	},
	{// 内侧指针、数值显示
		name: '限速区间',
		type: 'gauge',
		center: ['95%', '26%'],radius: '10%',
		startAngle: 225,endAngle: -45,
		min: 0,max: 10,
		axisLine: {
			show: true,
			lineStyle: {
				width: 16,
				color: [[1, 'rgba(255,255,255,.1)']]
			}
		},
		axisTick: {show: 0},
		splitLine: {show: 0},
		axisLabel: {show: 0},
		pointer: {show: true,length: '90%'},
		detail: {
			show: true,
			offsetCenter: [0, '100%'],
			textStyle: {fontSize: 12,color: '#fff'},
			formatter: ['{value}'+'个','{name|'+'限速区间'+'}'].join('\n'),
			rich: {
				name: {fontSize: 10,lineHeight: 15,color: '#fff'}
			}
		},
		itemStyle: {
			normal: {color: '#03b7c9',}
		},
		data: [{
			value: 0
		}]
	},
	
//客车扣停区间
	{// 外围刻度
		type: 'gauge',
		center: ['95%', '42%'],radius: '10%', 
		splitNumber:10,min:0,max:10,
		startAngle:225,endAngle:-45,
		axisLine: {
			show: true,
			lineStyle: {width: 2,shadowBlur: 0,color: [[1, '#03b7c9']]}
		},
		axisTick: {
			show: true,
			lineStyle: { color:'#03b7c9', width: 1},
			length: -5,
			splitNumber: 2
		},
		splitLine: {
			show: true,
			length: -10,
			lineStyle: {color: '#03b7c9'}
		},
		axisLabel: {
			distance: -12,
			textStyle: {color: '#03b7c9',fontSize: '10',fontWeight: 'bold'}
		},
		pointer: {show: 0},
		detail: {show: 0}
	},
	{// 内侧指针、数值显示
		name: '扣停区间',
		type: 'gauge',
		center: ['95%', '42%'],radius: '10%',
		startAngle: 225,endAngle: -45,
		min: 0,max: 10,
		axisLine: {
			show: true,
			lineStyle: {
				width: 16,
				color: [[1, 'rgba(255,255,255,.1)']]
			}
		},
		axisTick: {show: 0},
		splitLine: {show: 0},
		axisLabel: {show: 0},
		pointer: {show: true,length: '90%'},
		detail: {
			show: true,
			offsetCenter: [0, '100%'],
			textStyle: {fontSize: 12,color: '#fff'},
			formatter: ['{value}'+'个','{name|'+'扣停区间'+'}'].join('\n'),
			rich: {
				name: {fontSize: 10,lineHeight: 15,color: '#fff'}
			}
		},
		itemStyle: {
			normal: {color: '#03b7c9',}
		},
		data: [{
			value: 0
		}]
	},
	
//封锁区间
	{// 外围刻度
		type: 'gauge',
		center: ['95%', '58%'],radius: '10%', 
		splitNumber:10,min:0,max:10,
		startAngle:225,endAngle:-45,
		axisLine: {
			show: true,
			lineStyle: {width: 2,shadowBlur: 0,color: [[1, '#03b7c9']]}
		},
		axisTick: {
			show: true,
			lineStyle: { color:'#03b7c9', width: 1},
			length: -5,
			splitNumber: 2
		},
		splitLine: {
			show: true,
			length: -10,
			lineStyle: {color: '#03b7c9'}
		},
		axisLabel: {
			distance: -12,
			textStyle: {color: '#03b7c9',fontSize: '10',fontWeight: 'bold'}
		},
		pointer: {show: 0},
		detail: {show: 0}
	},
	{// 内侧指针、数值显示
		name: '封锁区间',
		type: 'gauge',
		center: ['95%', '58%'],radius: '10%',
		startAngle: 225,endAngle: -45,
		min: 0,max: 10,
		axisLine: {
			show: true,
			lineStyle: {
				width: 16,
				color: [[1, 'rgba(255,255,255,.1)']]
			}
		},
		axisTick: {show: 0},
		splitLine: {show: 0},
		axisLabel: {show: 0},
		pointer: {show: true,length: '90%'},
		detail: {
			show: true,
			offsetCenter: [0, '100%'],
			textStyle: {fontSize: 12,color: '#fff'},
			formatter: ['{value}'+'个','{name|'+'封锁区间'+'}'].join('\n'),
			rich: {
				name: {fontSize: 10,lineHeight: 15,color: '#fff'}
			}
		},
		itemStyle: {
			normal: {color: '#03b7c9',}
		},
		data: [{
			value: 0
		}]
	}
    ]
};
if (!app.inNode) {
    setTimeout(function() {
        //readStorage();
        initDraggableGraphic();
        window.addEventListener('resize', updatePosition);
        myChart.on('graphRoam', updatePosition);
        myChart.on('dataZoom', updatePosition);
        myChart.on('click', onLineClick);
        myChart.dispatchAction({
            type: 'dataZoom',
            start: 20,
            end: 30
        });
    }, 0);
}

function readStorage() {
    let _topoStorage = localStorage.getItem('TOPO_POSITION');
    if (_topoStorage) {
        let _data = JSON.parse(_topoStorage);
        _data.forEach(item => {
            let _line = option.series[0].data.find(a => a.name == item.name);
            if (_line) {
                _line.x = item.x;
                _line.y = item.y;
            }
        })
    }
}

function initDraggableGraphic() {
    myChart.setOption({
        graphic: echarts.util.map(option.series[0].data, function(item, dataIndex) {
            //使用图形元素组件在节点上划出一个隐形的图形覆盖住节点
            var tmpPos = myChart.convertToPixel({
                'seriesIndex': 0
            }, [item.x, item.y]);
            return {
                type: 'circle',
                id: dataIndex,
                position: tmpPos,
                shape: {
                    cx: 0,
                    cy: 0,
                    r: 30
                },
                style: {
                    text: '',
                    fill: 'rgba(0,0,0,0)',
                    font: '8px'
                },
                invisible: false,
                draggable: true,
                z: -100,
                ondrag: echarts.util.curry(function(dataIndex) {
                    onPointDragging(dataIndex, this)
                }, dataIndex),
                onclick: echarts.util.curry(function() {
                    alert('该操作为下钻或弹出详细信息:' + option.series[0].data[dataIndex].name)
                })
            };
        })
    });
}

function updatePosition(p) {
   
    let zoom = myChart.getOption().series[0].zoom;
     console.log(zoom)
    if (zoom > 1.5) {
        zoom = 1.50
    } else if (zoom < 0.5) {
        zoom = 0.5
    }
    option.series[0].zoom = zoom;
    myChart.setOption(option)
    myChart.setOption({
        graphic: echarts.util.map(option.series[0].data, function(item, dataIndex) {
            var tmpPos = myChart.convertToPixel({
                'seriesIndex': 0
            }, [item.x, item.y]);
            return {
                position: tmpPos
            };
        })
    });
}
//拖拽中
function onPointDragging(dataIndex, graphic) {
    var tmpPos = myChart.convertFromPixel({
        'seriesIndex': 0
    }, graphic.position);
    option.series[0].data[dataIndex].x = tmpPos[0];
    option.series[0].data[dataIndex].y = tmpPos[1];
    myChart.setOption(option);
    updatePosition();
    onSavePosition();
}

function onLineClick(param) {
    if (param && param.data) {
        let source = option.series[0].data[param.data.source];
        let target = option.series[0].data[param.data.target];
        alert(source.name + '>>>' + target.name);
    }
}

function onSavePosition() {
    clearTimeout(this.timerid);
    this.timerid = setTimeout(function() {
        localStorage.setItem('TOPO_POSITION', JSON.stringify(option.series[0].data));
    }, 300)
}


kkk=1;
intervalId = setInterval(function () {
    kkk+=1;
    option.series[0].data[0].name=kkk;
     myChart.setOption(option);
    console.log(kkk);
},2000)