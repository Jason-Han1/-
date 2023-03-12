	var data = [{
	        value: 335,
	        name: '直接访问'
	    },
	    {
	        value: 310,
	        name: '邮件营销'
	    },
	    {
	        value: 234,
	        name: '联盟广告'
	    },
	    {
	        value: 135,
	        name: '视频广告'
	    },
	    {
	        value: 11548,
	        name: '搜索引擎'
	    }
	]
	var x = [];
	var total = 0;
	for (var i = 0; i < data.length; i++) {
	    var j = {};
	    j['name'] = data[i].name;
	    j['value'] = 10
	    x.push(j);
	    total += data[i].value;
	}


	var len = 0;
	var total = 0;
	for (var i = 0; i < data.length; i++) {
	    total += data[i].value;
	}
	for (var i = 0; i < data.length; i++) {
	    var str = data[i].name + ' ' + (data[i].value / total * 100).toFixed(2) + '%';

	    if (str.length > len) {
	        len = str.length;
	    }
	}

	option = {

	    legend: {
	        orient: 'vertical',
	        left: '60%',
	        top: 'middle',
	        icon: "circle",
	        selectedMode: false,
	        itemHeight: 20,
	        itemGap: 18.5,
	        textStyle: {
	            color: '#000',
	            fontSize: 22,
	        },
	        formatter: function(name) {
	            var total = 0;
	            var target;
	            var kg = '               ';
	            for (var i = 0, l = data.length; i < l; i++) {
	                total += data[i].value;
	                if (data[i].name == name) {
	                    target = data[i].value;
	                }
	            }
	            var arr = name + ' ' + ((target / total) * 100).toFixed(2) + '%';
	            if (arr.length < len) {
	                arr = arr + kg.slice(0, (len - arr.length) * 2) + ' ';
	            }
	            if (target > 10000) {
	                target = (target / 10000).toFixed(2) + '万'
	            }
	            return arr + ' | ' + target + '笔';
	        }
	    },
	    series: [{
	            name: '',
	            type: 'pie',
	            radius: ['35%', '50%'],
	            center: ['30%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                show: false,
	                position: 'center'
	            },
	            emphasis: {
	                label: {
	                    show: true,
	                    fontSize: '30',
	                    fontWeight: 'bold'
	                }
	            },
	            labelLine: {
	                show: false
	            },
	            itemStyle: {
	                color: function(params) {
	                    var colorSet = ['#29C4D6', '#1678BF', '#527D2D', '#8AA159'];
	                    return colorSet[params.dataIndex];
	                }
	            },
	            data: data,
	            animation: false
	        }, {
	            name: '',
	            type: 'pie',
	            radius: ['35%', '50%'],
	            center: ['30%', '50%'],
	            avoidLabelOverlap: false,
	            label: {
	                show: false,
	                position: 'center',
	                formatter: function(params) {
	                    var per = (data[params.dataIndex].value / total * 100).toFixed(2);
	                    return [
	                        '{a|' + per + '%}',
	                        '{b|' + data[params.dataIndex].name + '}'
	                    ].join('\n');
	                },
	                textStyle: {
	                    rich: {
	                        a: {
	                            color: '#000',
	                            fontSize: 48,
	                        },
	                        b: {
	                            color: '#29C4D6',
	                            fontSize: 22,
	                            padding: [0, 0, 15, 0]
	                        },
	                    }
	                }
	            },
	            itemStyle: {
	                borderColor: '#CCC',
	                borderWidth: 10,
	                color: function(params) {
	                    var colorSet = ['#29C4D6', '#1678BF', '#527D2D', '#8AA159'];
	                    return colorSet[params.dataIndex];
	                }
	            },
	            emphasis: {
	                label: {
	                    show: true,
	                    fontSize: '30',
	                    fontWeight: 'bold'
	                }
	            },
	            labelLine: {
	                show: false
	            },
	            data: x,
	            animation: true
	        }

	    ]
	};
	var charPie3currentIndex = 0;
	setInterval(function() {
	    var dataLen = option.series[0].data.length;
	    // 取消之前高亮的图形
	    myChart.dispatchAction({
	        type: 'downplay',
	        seriesIndex: 1,
	        dataIndex: charPie3currentIndex
	    });

	    charPie3currentIndex = (charPie3currentIndex + 1) % dataLen;


	    // 高亮当前图形
	    myChart.dispatchAction({
	        type: 'highlight',
	        seriesIndex: 1,
	        dataIndex: charPie3currentIndex
	    });
	}, 2000);