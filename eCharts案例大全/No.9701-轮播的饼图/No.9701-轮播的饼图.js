var count = 0;
var data =[{
				                value: 410,
				                name: '电梯安全',
				                yuan:['原因1','原因2','原因3','原因4'],
				                selected:true,
				                label:{
				                    show:true,
				                },
				                labelLine: {
				                    normal: {
				                         show:true,
				                        lineStyle: {
				                            color: 'rgb(98,137,169)',
				                        },
				                        smooth: 0.2,
				                        length: 10,
				                        length2: 20,
				        
				                    }
				                },
				                
				                
				            },{
				                value: 285,
				                name: '电气安全',
				                yuan:['原因1','原因2','原因3','原因4'],
				                 selected:false,
				                label:{
				                    show:false,
				                },
				                labelLine: {
				                    normal: {
				                         show:false,
				                        lineStyle: {
				                            color: 'rgb(98,137,169)',
				                        },
				                        smooth: 0.2,
				                        length: 10,
				                        length2: 20,
				        
				                    }
				                },
				            },
				            
				            {
				                value: 274,
				                name: '医用气体',
				                yuan:['原因1','原因2','原因3','原因4'],
				                selected:false,
				                label:{
				                    show:false,
				                },
				                labelLine: {
				                    normal: {
				                        show:false,
				                        lineStyle: {
				                            color: 'rgb(98,137,169)',
				                        },
				                        smooth: 0.2,
				                        length: 10,
				                        length2: 20,
				        
				                    }
				                },
				            },
				            {
				                value: 235,
				                name: '医疗废水',
				                yuan:['原因1','原因2','原因3','原因4'],
				                selected:false,
				                label:{
				                    show:false,
				                },
				                labelLine: {
				                    normal: {
				                         show:false,
				                        lineStyle: {
				                            color: 'rgb(98,137,169)',
				                        },
				                        smooth: 0.2,
				                        length: 10,
				                        length2: 20,
				        
				                    }
				                },
				            }
				        ];
option = {
    backgroundColor:'#07183F',
     legend:{
        orient: 'vertical', // 'vertical'
        x: 'right', // 'center' | 'left' | {number},
        y: '80', // 'center' | 'bottom' | {number}
        padding: 10,    // [5, 10, 15, 20]
        itemGap: 20,
        textStyle: {color: '#c3cad9'},
        data:[
            {
                name:'电梯安全',
                textStyle:{
                color:'#50DCE6'
                }
            },
            {
                name:'电气安全',
                textStyle:{
                color:'#fff'
                }
            },
            {
                name:'医用气体',
                textStyle:{
                color:'#fff'
                }
            },
            {
                name:'医疗废水',
                textStyle:{
                color:'#fff'
            }
                
            }
],
        // formatter:function(par){
        //     console.log(par)
        // }
        
     },
     visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: data.sort(function(a, b) {
            return b.value - a.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                show:false,
                formatter: function(params){
                    return params.data.yuan[0]+'\n'+params.data.yuan[1]+'\n'+params.data.yuan[2]+'\n'+params.data.yuan[3]
                },
                // ['{c|{c}次}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 20,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: 'rgb(98,137,169)',
                        fontSize: 15,
                        height: 40
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};
app.timeTicket = setInterval(function() {
    var r = count % data.length;
    option.series[0].data[r].selected = false;
    option.series[0].data[r].label.show = false;
    option.series[0].data[r].labelLine.normal.show=false;
    option.legend.data[r].textStyle.color = '#fff';
    count++;
    var s = count % data.length;
    option.series[0].data[s].selected = true;
    option.series[0].data[s].label.show = true;
    option.series[0].data[s].labelLine.normal.show=true;
    option.legend.data[s].textStyle.color = '#50DCE6';
    myChart.setOption(option, true);
}, 1000);