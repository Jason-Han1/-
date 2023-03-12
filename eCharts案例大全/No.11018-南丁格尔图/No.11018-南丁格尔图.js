
option = {
    backgroundColor: "#20263f",
    title: [{
         text: '投资',
          x: '35%',
         y: '60%',
         textAlign: 'center',
         textStyle: {
             fontSize: 20,
             color:'#07b7bb',
         }
     },
     {
         text: '单位：个',
         x: '35%',
         y: '38%',
         textAlign: 'center',
         textStyle: {
             fontSize: 16,
             color:'#fff',
         }
    },
     {
         text: '占比',
         x: '70%',
         y: '60%',
         textAlign: 'center',
         textStyle: {
             fontSize: 20,
             color:'#07b7bb',
         }
    }],
    legend: {
        data: ["name1", "name2", "name3"],
        bottom: "5%",
        textStyle: {
            color: "#00FCF9"
        },
        itemWidth: 20,
        itemHeight: 10,
    },
    series: [{
        name: '投资',
        type: 'pie',
        roseType: 'radius',
        radius: ['15%','35%'],
        center: ['35%', '40%'],
        startAngle: 35,
        label: {
            normal: {
                formatter: '{b} : {c}'
            }
         },
        itemStyle: {
            normal: {
                shadowBlur: 0,
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            },
            emphasis: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true
                },
            }
        },
        data: [{
            value: 3574,
            name: 'name1',
            itemStyle: {
                color: '#8378EA',
            }
        }, {
            name: 'name2',
            value: 719,
            itemStyle: {
                color: '#FB7293',
            },
        },{
            name: 'name3',
            value: 495,
            itemStyle: {
                color: '#54ECA5',
            },
        }]
    }, {
        name: '占比',
        type: 'pie',
        roseType: 'area',
        radius: ['15%','35%'],
        center: ['70%', '40%'],
        label: {
            normal: {
                formatter: function(params){
                    return (params.value * 100).toFixed(2)+'%'
                }
            }
         },
        data: [{
            value: 0.0515,
            name: 'name21',
            itemStyle: {
                color: '#E56E6E',
            }
        }, {
            name: 'name22',
            value: 0.0842,
            itemStyle: {
                color: '#00C0DD',
            },
        },{
            name: 'name23',
            value: 0.1261,
            itemStyle: {
                color: '#FEB763',
            },
        }]
    }]
}