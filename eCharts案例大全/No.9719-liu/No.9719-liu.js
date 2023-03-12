var hours = ['简易事故'];
var hours2 = ['一般事故'];
var days = ['经十路','二环东路','G35','工业北路','国道309','省道242','二环西路','历山路','北园高架路','工业南路'];
var days2 = ['经十路2','二环东路2','G352','工业北路','国道309','省道242','二环西路','历山路','北园高架路','工业南路'];

var data1 = [48,17,14,12,12,11,10,10,9,9];
var data2 = [4 ,2 ,0 ,3 ,1 ,0 ,1 ,0 ,1,0];

var data = new Array();
var dataArray = new Array();

for(var i = 0; i < data1.length; i++ ){
        var tmpData = new Array();
        tmpData.push(i);
        tmpData.push(0);
        tmpData.push(data1[i]);
        data.push(tmpData);  
      
}

for(var i = 0; i < data2.length; i++ ){
        var tmpData2 = new Array();
        tmpData2.push(i);
        tmpData2.push('一般事故');
        tmpData2.push(data2[i]);
        dataArray.push(tmpData2);  
      
}



data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

dataArray = dataArray.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
    title: {
        text: '事故高发路段（简易程序TOP10)                                                                事故高发路段（一般程序TOP10)'
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
    },{
        left: '55%',
        right: '60',
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
    }, {
        gridIndex: 1,
        show: true,
         type: 'category',
        data: hours2,
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
            show: true, 
            splitNumber: 15, 
            textStyle: {
                color: '#00c7ff',
                fontSize: 12
            } 
        },
        splitArea: {
            show: true
        }
    },{
        type: 'category',
        gridIndex: 1,
        data: days2,
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
                color: ['#F1F8E9','#2569f6']
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
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        z:2
    },{
        name: '',
        gridIndex: 1,
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'heatmap',
        data: dataArray,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        z:2
    }]
};