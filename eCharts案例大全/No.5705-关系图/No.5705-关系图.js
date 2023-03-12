var value = 100;
var _x = $('#chart-panel').find('div')[0].clientWidth ;
var _y = $('#chart-panel').find('div')[0].clientHeight;

var rR=50
var r1=60,r1D = r1+'%';
var r2=55,r2D = r2+'%';
var cx = _x * 0.5;
var cy = _y * 0.5;
$('#chart-panel')

option = {
    grid:{
        top:0,
        left:0,
        bottom:0,
        right:0
    },
    backgroundColor: '000',
    title: {
        text: `${value}`,
        subtext: '前端',
        left: 'center',
        top: 'center', //top待调整
        textStyle: {
            color: '#fff',
            fontSize: 80,
            fontFamily: 'DINAlternate-Bold',
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 35,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -4 //主副标题间距
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [
      
        // 进度圈
        {
            type: 'pie',
            clockWise: true,
            radius: [r2D, r1D],
            data: [{
                    value: value,
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#7940FE' || '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2A69EC' || '#367bec' // 100% 处的颜色
                                }]
                            },
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#7940FE' || '#00cefc' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#2A69EC' || '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        },
                    }
                },
                {
                    name: 'gap',
                    value: 100 - value,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    },
                }
            ]
        }
      
      
        
    ], graphic: [{
        type: 'circle',
        shape: {
            r: rR,
        },
  position:[cx+(cx*r2/100+rR)*Math.cos(-40*Math.PI/180),cy+(cx*r2/100+rR)*Math.sin(-40*Math.PI/180)],
        style: {
            fill: '#AC9D66',
            stroke: '#AC9D66',
            lineWidth: 3,
            text:'js',
            textFill:'#fff',
            fontSize: 22
        },
        z: 13
    },{
        type: 'circle',
        shape: {
            r: rR/2,
        },
        position:[cx+(cx*r2/100+ rR/2)*Math.cos(-10*Math.PI/180),cy+(cx*r2/100+ rR/2)*Math.sin(-10*Math.PI/180)],
        style: {
            fill: '#CE5D43',
           
            stroke: '#CE5D43',
            lineWidth: 3,
            text:'2',
            textFill:'#fff',
            fontSize: 22
        },
        z: 13
    },{
        type: 'circle',
        shape: {
            r: rR/2,
        },
        position:[cx+(cx*r2/100+60+ rR/2)*Math.cos(-10*Math.PI/180),cy+(cx*r2/100+60+ rR/2)*Math.sin(-10*Math.PI/180)],
        style: {
            fill: '#000000',
           
            stroke: '#000000',
            lineWidth: 3,
            text:'html',
            textFill:'#fff',
            fontSize: 22
        },
        z: 13
    },
    ,{
        type: 'circle',
        shape: {
            r: rR/3,
        },
        position:[cx+(cx*r2/100+ rR/3)*Math.cos(10*Math.PI/180),cy+(cx*r2/100+ rR/3)*Math.sin(10*Math.PI/180)],
        style: {
            fill: '#FC7708',
            stroke: '#FC7708',
            lineWidth: 3,
            text:'3',
            textFill:'#fff',
            fontSize: 22
        },
        z: 13
    }
     ,{
        type: 'circle',
        shape: {
            r: rR/3,
        },
        position:[cx+(cx*r1/100+ rR/3+30)*Math.cos(10*Math.PI/180),cy+(cx*r1/100+30+ rR/3)*Math.sin(10*Math.PI/180)],
        style: {
            fill: '#000000',
            stroke: '#000000',
            lineWidth: 3,
            text:'css',
            textFill:'#fff',
            fontSize: 22
        },
        z: 13
    }]
};