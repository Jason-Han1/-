    option = {
        backgroundColor:'#000',
        title: {
            text: '',
            left: '5%',
            top: '6%'
        },
        grid: {
            left: '20%',
            right: '20%',
            containLabel: false
        },
        xAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show:false
            }
        }],
        yAxis: [{
            type: 'category',
            inverse:true,
            
            axisLabel: {
                color: '#fff',
                fontSize: '40',
                margin:20,
            },
            axisTick:{
                show:false
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ['美国', '英国', '日本','全国','江苏','浙江']
        },
        {
            type: 'category',
            inverse:true,
            axisLabel: {
                color: function (value, index) {
                return index < 3 ? '#FFCC00' : '#00CCFF';
            },
                fontSize: '55'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            data:[400, 100, 300,200,100,300]
        }],
        series: [{
                name: '',
                type: 'bar',
                data: [400, 100, 300,200,100,300],
                barWidth: '40',
                itemStyle:{
                    color : function(params) {
						var colorList = ['#00ABDA','#D1B50E','#7ACC10','#00ABDA','#D1B50E','#7ACC10'];
						return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
								{
									offset : 0,
									color :  colorList[params.dataIndex]
											
								}, {
									offset : 1,
									color : '#01154C'
								}]);
					},
                    barBorderRadius:13,
                }
            }
        ]
    };