option = null;
var startTime = +new Date();
var categories = ['categoryA', 'categoryB', 'categoryC', 'categoryD'];

var step = 14399285;

var data = [{
	name: 'JS Heap',
	value: [0, 1563000480298, (1563000480298 + step)],
	itemStyle: {
		normal: {
			color: '#7b9ce1'
		}
	}
}, {
	name: 'Documents',
	value: [1, 1563000484450, (1563000484450 + step - 3000000)],
	itemStyle: {
		normal: {
			color: '#bd6d6c'
		}
	}
}, {
	name: 'Nodes',
	value: [2, 1563000493753, (1563000493753 + step - 5000000)],
	itemStyle: {
		normal: {
			color: '#75d874'
		}
	}
}, {
	name: 'Listeners',
	value: [3, 1563000503740, (1563000503740 + step)],
	itemStyle: {
		normal: {
			color: '#e0bc78'
		}
	}
}, {
	name: 'GPU Memory',
	value: [2, 1563000506369, (1563000506369 + step - 8000000)],
	itemStyle: {
		normal: {
			color: '#e0bc78'
		}
	}
}, {
	name: 'GPU',
	value: [3, 1563000513841, (1563000513841 + step - 12000000)],
	itemStyle: {
		normal: {
			color: '#72b362'
		}
	}
}]

function renderItem(params, api) {
    var categoryIndex = api.value(0);
    var start = api.coord([api.value(1), categoryIndex]);
    var end = api.coord([api.value(2), categoryIndex]);
    var height = api.size([0, 1])[1] * 0.6;
    var width = end[0] - start[0];
    var x = start[0];
    var y = start[1] - height / 2;

    var shape = echarts.graphic.clipPointsByRect([
            [x, y],
            [x + width - 10, y],
            [x + width, y - height / 2],
            [x + width - 10, y - height],
            [x, y - height]
        ], {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
    });

    return shape && {
        type: 'polygon',
        shape: {
            points: shape
        },
        style: api.style()
    }
}


option = {
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[1] + ' ms';
        }
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    dataZoom: [{
        type: 'slider',
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 400,
        height: 10,
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', // jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        labelFormatter: ''
    }, {
        type: 'inside',
        filterMode: 'weakFilter'
    }],
    grid: {
        height:300
    },
    xAxis: [{
        min: startTime,
        scale: true,
        axisLabel: {
            formatter: function (val) {
                return Math.max(0, val - startTime) + ' ms';
            }
        }
    }],
    yAxis: [{
        data: categories
    }],
    series: [{
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            normal: {
                opacity: 0.8
            }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    }]
};