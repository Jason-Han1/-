option={
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              data:['舒张压','收缩压']
            },
            calculable : true,

            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                axisLabel:{
                  rotate:45,
                  interval:0
                },
                data : ['周一','周二','周三','周四','周五','周六','周日']
              }
            ],
            yAxis : [
              {
                name:'血压',
                type : 'value',
                axisLabel : {
                  formatter: '{value}'
                }
              }
            ],
            series : [
             
              {
                name:'收缩压',
                type:'line',
                data:[140, 140, 140, 140, 140, 140, 140],
                // markPoint : {
                //   data : [
                //     {type : 'max', name: '最大值'},
                //     {type : 'min', name: '最小值'}
                //   ]
                // },
                markLine: {
                    silent:false,
                  itemStyle:{
                    color:'#B8C4F1'
                  },
                  data: [
                    [{
                        name:'最小值',
                        yAxis: 90,
                    },
                      {
                            name:'最大值',
                            yAxis: 140,
                      }
                      ]
                  ],
                },
                markArea: {
                  silent:false,
                  itemStyle:{
                    color:'#B8C4F1'
                  },
                  data: [
                    [{
                        name:'最小值',
                        yAxis: 90,
                    },
                      {
                            name:'最大值',
                            yAxis: 140,
                      }
                      ]
                  ],
                },
              }
            ]
          };