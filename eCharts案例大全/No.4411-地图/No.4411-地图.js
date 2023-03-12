
option = {
    dataset: {
	"source": [
		["省份", "tt","大区名", "补货绿", "日环比", "渐变色"],
		["新疆", "799","新疆大区", "800", "800", "800"],
		["山东", "499","山东大区", "34", "61", "67"],
		["云南", "199","西南大区", "800", "69", "389"],
	]
},
    tooltip: {
        show: true,
        formatter: function(params) {
            console.log(params)
            return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.data[3] + '人&nbsp;&nbsp;';
        }
    },
    visualMap: {
        type: 'piecewise',
        left: '15',
        bottom: '50',
        itemWidth: 27,
        itemHeight: 15,
       dimension:3,
        textStyle: {
            color: '#333333',
            fontSize: 14,
        },
        pieces: [{
            min: 500,
            label: '>500',
        }, {
            max: 500,
            min: 200,
            label: '200-500',
        }, {
            max: 200,
            min: 0,
            label: '<200',
        }, {
            value: 0,
            label: '无数据',
        }, ],
        inRange: {
            color: ['#B2CAE0', '#D2EAFF', '#8AC6FD', '#45A5F8']
        },
        outOfRange: {
            color: ['#999999']
        },
    },
    geo: {
        map: 'china',
        show: true,
        roam: false,
        label: {
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderColor: 'rgba(0,63,140,0.2)',
                shadowColor: 'rgba(0,63,140,0.2)',
                shadowOffsetY: 20,
                shadowBlur: 30
            }
        }
    },
    series: [{
        type: 'map',
        map: 'china',
        aspectScale: 0.75,
        //zoom:1.1,
        label: {
            normal: {
                show: false,
            },
            emphasis: {
                show: false,
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#B2CAE0',
                borderColor: '#fff',
                borderWidth: 1,
            },
            emphasis: {
                areaColor: '#FFAE00',
            }
        },
    }]
};
var count = 0;
var timeTicket = null;
var dataLength = 3;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: (count) % dataLength
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: (count) % dataLength
    });
    count++;
}, 1000);