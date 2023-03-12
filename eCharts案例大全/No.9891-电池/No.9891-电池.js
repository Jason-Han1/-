var myColor=['#29aadf','#1dffd4','#f1d53c','#ffad5c','#34da62','#00e9db','#00c0e9','#0096f3'];
option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '0',
            top:'50',
            right: '0',
            bottom: '0'
        },
        xAxis: [{
           
             axisTick:'none',
                axisLine:'none',
                offset:'27',
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'16',
                        }
                    },
                data: []
            }, {
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'16',
                        }
                    },
                    boundaryGap: true,
                data:[]
            },{
               
                axisLine:{
                  lineStyle:{
                    color:'rgba(0,0,0,0)'
                  }
                },
                data: [],
        }],
        yAxis: [{
             show: false,
               
        }],
        series: [{
            name: '条',
            // type: 'bar',
            xAxisIndex: 0,
            data: [23, 90, 54, 76],
              type: 'bar',
             barWidth:20,
            label:{
                  normal:{
                    show:true,
                    position:'top',
                    formatter:function(param){
                      return param.value + '%';
                    },
                    textStyle:{
                       normal:{
                            color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex]
                    },
                       },
                       fontSize:'16',
                    }
                  }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                }
            },
            z: 2
        }
      ]
    };