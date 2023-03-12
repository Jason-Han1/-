	myChart.showLoading();
	var cityEvents = [];
	var setData = (function() {
	    var option = {
	        title: {
	            text: '近期活动',
	            left: '50%',
	            textAlign: 'center'
	        },
	        tooltip: {
	            show: true
	        },
	        geo: {
	            map: 'china',
	            label: {
	                emphasis: {
	                    show: false
	                }
	            },
	            roam: true,
	            itemStyle: {
	                normal: {
	                    areaColor: '#093B47', //区域颜色
	                    borderColor: '#ffffff' //区域划分边框颜色
	                },
	                emphasis: {
	                    areaColor: '#093B47' //鼠标Havor颜色
	                }
	            }
	        },
	        series: [{
	            type: 'scatter',
	            coordinateSystem: 'geo',
	            data: [],
	            hoverAnimation: true,
	            label: {
	                normal: {
	                    formatter: '{b}',
	                    position: 'top',
	                    show: true
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#36D2FD',
	                    shadowBlur: 10,
	                    shadowColor: 'black'
	                }
	            },
	            tooltip: {
	                formatter: function(params) {
	                    console.warn(params);
	                    var event = params.data.value[2];
	                    return '<div>' + event.loc_name + ' - ' + event.title + '</div>' +
	                        '<div>' + event.address + '</div>' +
	                        '<div>' + event.begin_time + '</div>' +
	                        '<div>' + event.time_str + '</div>' +
	                        '<div>' + event.fee_str + '</div>';
	                }
	            },
	            zlevel: 1
	        }]
	    };
	    return function() {
	        var locs = [];
	        cityEvents.forEach(function(city) {
	            city.events.forEach(function(event) {
	                var loc = event.geo.split(' ');
	                locs.push({
	                    value: [loc[1], loc[0], event]
	                });
	            });
	        });
	        console.warn(locs);
	        option.series[0].data = locs;
	        myChart.hideLoading();
	        myChart.setOption(option);
	    }
	})();
	$.ajax({
	    type: "GET",
	    url: "https://api.douban.com/v2/loc/list",
	    dataType: "jsonp",
	    success: function(data) {
	        data.locs.forEach(function(item, index) {
	            $.ajax({
	                type: "GET",
	                url: "https://api.douban.com/v2/event/list?loc=" + item.id,
	                dataType: "jsonp",
	                success: function(eventData) {
	                    cityEvents.push({
	                        city: item.name,
	                        events: eventData.events
	                    });
	                    if (index === data.locs.length - 1) {
	                        console.warn(cityEvents);
	                        setData();
	                    }
	                },
	                error: function() {
	                    setData();
	                }
	            });
	        });
	    },
	    error: function() {
	        setData();
	    }
	});