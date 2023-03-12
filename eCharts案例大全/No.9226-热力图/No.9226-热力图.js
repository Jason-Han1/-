var hours = ['违法行为'];
var data1 = ['驾车时有其他妨碍安全行车','转弯车不让直行车或行人','不与前车保持安全距离',
'逆向行驶','无信号路口不让右方来车',
'逃逸未构成犯罪','机动车不走机动车道','其他机动车在高速公路以外的道路超速10%以上不足20%',
'变更车道影响其他车辆行驶','无交通信号时未避让横过道路的行人','不按规定停车'];

var days = [48,17,14,12,12,11,10,10,9,9];


var data = new Array();
var dataArray = new Array();

for(var i = 0; i < data1.length; i++ ){
        var tmpData = new Array();
        tmpData.push(0);
        tmpData.push(i);
        tmpData.push(1);
        tmpData.push(data1[i]);
        tmpData.push(0);
        data.push(tmpData);  
      
}



option = {
    title: {
        text: ''
    },               
    tooltip: {
        position: 'top'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animation: false,
    grid: [{
        left: '30',
        right: '55%',
        top:'25',
        bottom: '20',
        containLabel: true
    }],

    
    xAxis: [{
        gridIndex: 0,
        show: true,
         type: 'category',
        data: hours,
        splitArea: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisLabel: {
            interval: 0, 
            show: true, 
            splitNumber: 15, 
            textStyle: {
                color: '#00c7ff',
                fontSize: 12
                
            } 
        },
    }],
    yAxis: [{
        type: 'category',
        gridIndex: 0,
        data: days,
        axisLine: {
            lineStyle: {
                color: '#00c7ff'
            }
        },
        axisLabel: {
            interval: 0, 
            show: false, 
            splitNumber: 15, 
            textStyle: {
                color: '#00c7ff',
                fontSize: 12
            } 
        },
        splitArea: {
            show: true
        }
    }],
    
    visualMap: {
        show:false,
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        inRange: {
                color: ['#2569f6']
            }
    },
    series: [{
        
        name: '',
        gridIndex: 0,
        xAxisIndex: 0,
        yAxisIndex: 0,
        type: 'heatmap',
        data: data,
        label: {
	            normal: {
	                show: true,
	                color: '#EEEEEE',
	                formatter: function(o) {
	                    var arr = [
	                        '{name|' + o.value[3] + '}',
	                    ];
	                    return arr.join('\n');
	                },
	                rich: {
	                    budget: {
	                        fontSize: 22,
	                        lineHeight: 30,
	                        color: 'red',
	                        align: 'right'
	                    },
	                    label: {
	                        fontSize: 9,
	                        backgroundColor: 'rgba(0,0,0,0.3)',
	                        color: '#EEEEEE',
	                        borderRadius: 2,
	                        padding: [2, 4],
	                        lineHeight: 25,
	                        align: 'left'
	                    },
	                    name: {
	                        fontSize: 12,
	                        color: '#EEEEEE'
	                    },
	                    hr: {
	                        width: '100%',
	                        borderColor: 'rgba(255,255,255,0.2)',
	                        borderWidth: 0.5,
	                        height: 0,
	                        lineHeight: 10
	                    }
	                }
	            }

	        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        //z:2
    }]
};