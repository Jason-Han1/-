var myColor=['#0096f3','#00c0e9','#00f3bd','#34da62','#d0a00e','#d0800e','#d0570e','#eb3600','#eb2100'];
option = {
        backgroundColor:'#0e2147',
        grid: {
            top:'22%',
            left: '3%',
            right: '3.5%',
            bottom: '11%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel:{
              textStyle:{
                   color: '#ffffff',
                   fontSize:'16',
              },
            },
            data: ['限制高消费','限制出境','限制投资','限制担保','限制融资','限制经营','限制置产','限制注册新公司','其它'],
            axisTick:{
                show:false
            },
            axisLine:{
                                  lineStyle:{
                                      color:'rgba(160,160,160,0.3)',
                                  }
                              },
        },
        yAxis:  {
            type: 'value',
            name:'单位：件',
            nameGap:'35',
                    nameTextStyle:{
                        color:'#ffffff',
                        fontSize:'16',
                    },
            axisTick:{
                show:false
            },
            axisLine:{
                show:false
            },
            axisLabel: {
                        textStyle: {
                            color: '#ffffff',
                            fontSize:'16',
                        }
                    },
            splitLine: {
                        lineStyle:{
                            color:'rgba(160,160,160,0.3)',
                        }
                    },
        },
        series: [
            {
                name: '限制高消费',
                type: 'bar',
                barWidth:'55%',
                itemStyle:{
                    normal:{
                        color: function(params) {
                                var num=myColor.length;
                                return myColor[params.dataIndex%num]
                        },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        textStyle:{
                            fontSize:'16',
                            color:"#ffffff"
                        },
                        position: 'top'
                    }
                },
                data: ['5743','5743','543','5743','573','5743','5743','5743','573']

            }]
     };