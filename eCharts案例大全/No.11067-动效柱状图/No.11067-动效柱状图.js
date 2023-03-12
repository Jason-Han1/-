var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];

option = {
     backgroundColor: '#0e2147',
    xAxis: {
        type: 'category',
  
         axisTick: {
            show: false,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 10,
            rotate:-90,
            
            textStyle: {
                color: '#455A74',
                align: 'left',
                fontSize: 14
            },
            rich: {
                b: {
                    color: '#000',
                    backgroundColor: '#4197FD',
                    fontSize:15,
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 10
                },
                c:{
                   color: '#fff',
                    backgroundColor: '#4197FD',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                },
                c1:{
                   color: '#fff',
                    backgroundColor: '#ff1515',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                },
                c2:{
                   color: '#fff',
                    backgroundColor: '#96ff1c',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                },
                c3:{
                   color: '#fff',
                    backgroundColor: '#188ce8',
                    width: 60,
                    height: 20,
                    align: 'center',
                    borderRadius: 2  
                }
            },
            formatter: function(params) {
                console.log('jialj===',params.slice(0, 2))
                  return [
                        '{c2|' + '}' 
                    ].join('\n')
            }
        },
        data: ['南昌转运中心', '广州转运中心', '杭州转运中心', '宁夏转运中心', '兰州转运中心', '南宁转运中心', '长沙转运中心', '武汉转运中心', '合肥转运中心', '贵州转运中心']
    },
    yAxis: [{
        show:false,
    }]
        ,
     
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [4, 13, 25, 29, 38, 44, 50, 52, 60, 72],
            label: {
                normal: {
                    show: false,
                    position: 'top',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: '16',
                    }
                }
            },
            barWidth:12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            z: 2
        },
        
              
    ]
};
