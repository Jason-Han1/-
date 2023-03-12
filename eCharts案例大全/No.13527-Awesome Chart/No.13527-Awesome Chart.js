var data={
        "lhl执行01": {
            "老客户购买": {
                "北京": {num:1,all:100},
                "天津": {num:2,all:10}
            },
            "新签客户": {
                "北京": {num:3,all:70},
                "天津":{num:4,all:50}
            },
            "替换对手": {
                "北京": {num:5,all:30},
                "天津": {num:6,all:10}
            }
        }
    };
var array=[];
var array1=[];
var arr1=[];
    for(var i in data){
        for(var w in data[i]){
            var k=w;
            for(var d in data[i][w]){
                arr1.push(k+'-'+d)
                array.push(data[i][w][d].num)
                array1.push(data[i][w][d].all)
            }
        }
    }
    
    var zsbj=[100,90,80]
    var zstj=[90,80,70]
    
    var databj=[10,50,60]
    var datatj=[35,20,35]
    
option = {
    title: {
        text: 'Awesome Chart'
    },
     tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        }
    },
    grid: {
        top: 60,
        bottom: 30
    },
    
    xAxis: {
        data: arr1
    },
    yAxis: {
        type: 'value',
        scale: true,
        max: 100,
        min: 0,
         axisLabel: {
            formatter: '{value}  %'
        }
        
    },
    xAxis: [{
            data: ['分类1', '分类2', '分类3']
        }, {
                       show:false,

            type: 'category',
            data: ['分类1', '分类2', '分类3']
        },

    ],
    series: [{
            name: '北京目标',
            type: 'bar',
            xAxisIndex: 1,
 z:3,
        label: {
            normal: {
                textStyle: {
                    color: '#682d19'
                },
                position: 'left',
                show: false,
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(0, 153, 255, 0.1)',
                borderWidth: 2,
                borderColor: '#000',

            }
        },
         
            barWidth: '20%',
            data: zsbj
        }, {
            name: '天津目标',
            type: 'bar',
            xAxisIndex: 1,
 z:3,
        label: {
            normal: {
                textStyle: {
                    color: '#682d19'
                },
                position: 'left',
                show: false,
                formatter: '{b}'
            }
        },
        itemStyle: {
            normal: {
                color: 'rgba(0, 153, 255, 0.1)',
                borderWidth: 2,
                borderColor: '#000',

            }
        },
         
            barWidth: '20%',
            barGap: '100%',
            data: zstj
        }, {
            name: '北京',
            type: 'bar',
             itemStyle: {
            normal: {
                color: '#1FBCD2',

            }
        },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            barWidth: '20%',
            data: databj
        }, {
            name: '天津',
            type: 'bar',
            barWidth: '20%',
             itemStyle: {
            normal: {
                color: '#1FBCD2',

            }
        },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            barGap: '100%',
            data: datatj
        }

    ]
};