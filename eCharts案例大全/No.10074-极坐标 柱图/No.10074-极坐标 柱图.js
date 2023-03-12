var datavalue =  [20, 50, 30];

option = {
    angleAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 360
    },
    radiusAxis: {
        show: false,
        axisAngle: 0
    },
    radar: {
        shape: 'circle',
        scale: true,
        splitNumber: 9,
        indicator: [{
                text: '0',
            },
            {
                text: '87.5%',
            },{
                text: '75%',
            }
            ,{
                text: '62.5%',
            },{
                text: '50%',
            },{
                text: '37.5%',
            },{
                text: '25%',
            },{
                text: '12.5%',
            }
        ],
        center: ['50%', '50%'],
        radius: '70%'
    },
    
    polar: {},
    series: [
        {
        type: 'radar',
        zlevel: 2,
        tooltip:{
            show:true
        },
        lineStyle:{
            width:1,
            opacity:1
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: 'rgba(0,0,0,0)', // 图表背景的颜色
            },
        },
       
        data: [
        ]
    }, 
        {
            name: 'ss',
            type: 'pie',
            startAngle: 0,
            radius: ['20%', '30%'],
            itemStyle: {
                color: ['#4E6692','#E59A18','#668FFB'],
                normal: {
                   color: function (params) {
                    var colorList = ['#4E6692','#E59A18','#668FFB']
                    return colorList[params.dataIndex]
                  },

                label: {
                    show: false
                }
                }
            },
            label:{
                show:true,
                color:'#000',
                
            },
            data: datavalue
        },
        {
            name: 'ss1',
            type: 'pie',
            startAngle: 0,
            radius: ['40%', '50%'],
            itemStyle: {
                normal: {
                    
                    color: function (params) {
                    var colorList = ['#4E6692','#E59A18','#668FFB']
                    return colorList[params.dataIndex]
                  },
                    label: {
                        show: false
                    }
                }
            },
             label:{
                show:true,
                color:'#000',
                
            },
            data:datavalue
        }, {
            name: 'ss3',
            type: 'pie',
            startAngle: 0,
            radius: ['55%', '70%'],
            itemStyle: {
                normal: {
                    color: function (params) {
                    var colorList = ['#4E6692','#E59A18','#668FFB']
                    return colorList[params.dataIndex]
                  },
                    label: {
                        show: false
                    }
                }
            },
             label:{
                show:true,
                color:'#000',
                
            },
            data:datavalue
        }
    ]
};
function colors(){
    return ['#4E6692','#E59A18','#668FFB'];
    
}