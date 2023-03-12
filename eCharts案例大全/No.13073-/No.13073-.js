//var colorList =['#228c38', '#1a57b2', '#b04b07', '#af8108'];
var colorList =["#f6d54a","#f69846","#44aff0","#45dbf7","#f845f1","#ad46f3","#5045f6","#4777f5"];
var colorListSub =['rgba(35,143,56,.5)', 'rgba(26,87,178,.5)', 'rgba(176,75,7,.5)', 'rgba(175,129,8,.5)'];
option = {
    backgroundColor: '#113A71',
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c}度 ({d}%)"
    },
    legend: {
        orient: 'vertical',
        textStyle:{
            color:'#fff'
        },
        right:'10%',
        top:'25%',
        data:['1小时','4小时','12小时','24小时','48小时']
    },
    series: [
        {
            type:'pie',
            radius: [0, '35%'],
            roseType: 'radius',
            clockwise :false,
            z:10,
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        return colorList[params.dataIndex]
                    },
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            },
            label: {
                normal: {
                    formatter: '{b|{b}}\n{hr|}\n{d|{c}  ({d}%)}',
                    rich: {
                        b: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        hr: {
                            borderColor: '#12EABE',
                            width: '100%',
                            borderWidth: 2,
                            height: 0
                        },
                        d: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'left',
                            padding: 4
                        },
                        c: {
                            fontSize: 12,
                            color: '#fff',
                            align: 'center',
                            padding: 4
                        }
                    }
                }
            },
          /*  label: {
                normal: {
                    formatter: function(params){
                         return params.name+':'+params.value+'件';
                    },
                    // backgroundColor: '#eee',
                }
            },*/
            
            labelLine: {
                normal: {
                    length: 50,
                    length2: 50,
                    lineStyle:{
                        width:2
                    }
                }
            },
            data:[
                {value:300, name:'1小时'},
                {value:351, name:'4小时'},
                {value:300, name:'24小时'},
                {value:200, name:'12小时'},
                {value:51, name:'48小时'},
                
            ]
        },
      
        // 中心的圆圈
        {
            radius: ['39%', '39.3%'],
            color:'#FFFFFF',
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },
            data: [{
                value: 100,
                name: '民警训练总量',
                itemStyle: {
                    normal: {
                        color: '#5A96FF',
                    }
                }
            }],
            animation: false
        }
    ]
};