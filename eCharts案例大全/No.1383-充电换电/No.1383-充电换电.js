option =  {
      backgroundColor: '#0e1c47',
    color: ["#339c97",'#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97','#339c97'],
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
  legend: {
        orient: 'vertical',
        left: 680,
        top:450,
        right: 10,
        bottom: 12,
itemWidth:30,
itemHeight:30,
itemGap: 60,
textStyle:{
color:'#fff',
fontSize:33,
},
        data: ['充电高峰', '换电高峰']
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
        },
    },
    radiusAxis: {
        axisLine: {
            show: false,
        },
    },
    calculable: true,
    series: [ {
        type: 'pie',
        radius: ["64%", "77%"],
        hoverAnimation: false,
          label: {
                show: false
            },
            itemStyle: {
              normal: {
                borderWidth:1,
                borderColor: "#fff"
              }
            },
        name: "",
        data: [{
            name: '充电高峰',
            value: 30,
            itemStyle: {
                normal: {
                    color: "#3b94f8"
                }
            }
        },
        {
            name: '换电高峰',
            value: 20,
            itemStyle: {
                normal: {
                    color: "#f19820"
                }
            }
        },
        {
            name: '充电高峰',
            value: 30,
            itemStyle: {
                normal: {
                    color: "#3b94f8"
                }
            }
        },
        {
            name: '换电高峰',
            value: 20,
            itemStyle: {
                normal: {
                    color: "#f19820"
                }
            }
        },
        
        ]
    },{
        stack: 'a',
        type: 'pie',
        radius: ['15%', '50%'],
        roseType: 'radius',
        zlevel:10,
         itemStyle: {
              normal: {
                borderWidth:1,
                borderColor: "#ccc"
              }
            },
        label: {
            normal: {
                show: false,
            },

        },
        labelLine: {
            emphasis: {
                show: false
            }
        },
        data: [10,5,15,25,20,35,10,5,15,25,20,35,10,5,15,25,20,35]
    }, ]
}
