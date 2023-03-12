
var kd = [];//刻度需要的数据
for (var i = 0, len = 100; i <= len; i++) {
    if(i === 0 || i === 100){
        kd.push(0)
    }else{
        if (i % 10 === 0) {
            kd.push('9');
        } else {
            kd.push(0);
        }
    }
    

}

function innerRadius(value){
    if(value > 99){
        return 15
    }else if(value > 98 && value <= 99){
        return 42
    }else{
        return 0
    }
}

//平均值
var average = 58.6;
var avgData=[]
for (var i =0; i< average; i++){
    avgData.push("");
}
avgData.push(15)

var value = 66.6;

option = {
    title: {
        text: '刻度',
        show: false
    },
    grid:{
      top:200,
      left:550,
      right:150,
      bottom: 100
    },
    yAxis: [{
        show: false,
        min: 0,
        max: 100,
    }, {
        show: false,
        data: [],
        min: 0,
        max: 100,
    }, {
        show: false,
        data: [],
        min: 0,
        max: 100,
    }],
    xAxis: [{
        show: false,
        data: [],
        min: 0,
        max: 100
    }, {
        show: false,
        data: [],
        min: 0,
        max: 100
    }, {
        show: false,
        min: 0,
        max: 100,
    }, {
        show: false,
        min: 0,
        max: 100,
    }],
    backgroundColor: '#fff',
    series: [
        {
        name: '条',
        type: 'bar',
        xAxisIndex: 1,
        data: [value],
        barWidth: 78,
        itemStyle: {
            normal: {
                color: 'yellowGreen',
                barBorderRadius: [innerRadius(value),innerRadius(value),42,42],
            }
        },
        label: {
            normal: {
                show: true,
                position: ['130%','-10%'],
                textStyle: {
                    color: '#333',
                    fontSize: '30',
                }
            }
        },
        z: 2
    }, {
        name: '外边框',
        type: 'bar',
        data: [100],
        barWidth: 80,
        itemStyle: {
            normal: {
                color: '#ffffff',
                barBorderRadius: 45,
                barBorderColor: '#333',
                barBorderWidth:1.5,
                borderType:"solid"
            }
        },
        z: 1,
    }, {
        name: '刻度',
        type: 'bar',
        yAxisIndex: 1,
        xAxisIndex: 2,
        label: {
            normal: {
                show: true,
                position: 'right',
                distance: '10',
                color: '#333',
                fontSize: 10,
                formatter: function(params) {
                    if (params.dataIndex % 10 === 0 && params.dataIndex !== 0 ) {
                        return params.dataIndex;
                    } else {
                        return '';
                    }
                }
            }
        },
        data: kd,
        barWidth: 1,
        itemStyle: {
            normal: {
                color: '#333',
                barBorderRadius: 10,
            }
        },
        z: 3
    },{
        name: '平均',
        type: 'bar',
        yAxisIndex: 1,
        xAxisIndex: 3,
        label: {
            normal: {
                show: true,
                position: ['130%','-5%'],
                distance: '10',
                color: '#333',
                fontSize: 20,
                formatter: function(params) {
                    if (params.data <= 0 ) {
                        return '';
                    } else {
                        return average+'：全国平均';
                    }
                }
            }
        },
        data: avgData,
        barWidth: 5,
        itemStyle: {
            normal: {
                color: 'green',
                barBorderRadius: 10,
            }
        },
        z: 3
    }]
};