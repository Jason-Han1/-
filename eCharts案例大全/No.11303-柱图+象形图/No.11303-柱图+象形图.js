var myColor=['#29aadf','#1dffd4','#f1d53c','#ffad5c','#34da62','#00e9db','#00c0e9','#0096f3'];
option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '11%',
            top:'12%',
            right: '0%',
            bottom: '8%',
            containLabel: true
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
                data: ['8','7','6','5']
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
              type: 'pictorialBar',
            symbol: 'rect',
            symbolRepeat: 'fixed',
            symbolMargin: '20%',
            symbolClip: true,
            symbolSize: [20,7],
          
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
            barWidth: 80,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                }
            },
            z: 2
        }, {
            name: '黑框',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            data: [99.5, 99.5, 99.5, 99.5],
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: '#021224',
                    barBorderRadius:45,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            xAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100],
            barWidth: 34,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    barBorderRadius: 45,
                }
            },
            z: 0
        }, 
      ]
    };