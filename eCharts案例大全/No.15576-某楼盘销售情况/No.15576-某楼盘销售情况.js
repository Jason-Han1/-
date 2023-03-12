option = {
    	//图表的标题
        title: {
            text: '平均响应时间',
            textStyle:{
                fontSize: 16,
                color: '#fff'
            } 

        },
        color:[ 
            '#ffff66', '#ff6600', '#99ff66', '#6495ed', '#ff69b4', 
            '#32cd32', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0', 
            '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700', 
            '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0' 
        ],
        //图表展示的类别，这里的data和series中得name对应
        legend: {
            data: ['DNS', '建联', 'SSL握手时间','首包','剩余时间','平均响应时间'],
            y: "bottom",
            show:true,
            orient:'horizontal',
            textStyle:{
                color: '#fff'
            } 

        },
        grid:{
            borderColor:'rgba(176,196,222,0.5)'//边框颜色
        },
        //这里的是采用什么方式触发数据，这里显示的竖轴，跟随鼠标移动到节点上会显示内容
        tooltip: {
            trigger: 'axis'
        },

        //代表x轴，这里type类型代表字符
        xAxis: [{
            type: 'category',
            boundaryGap: false,//这里表示是否补齐空白
            data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00'],

            splitLine:{
        　　　 //show:false
               lineStyle:{
                 color: 'rgba(176,196,222,0.5)',
                 width: 1,
                 type: 'solid'
               }
        　　},
           axisLabel:{
            textStyle:{
                color: '#fff'
            }
            
          }
        
        }],
        //代表y轴，这里type类型代表num类型
        yAxis: [{
            type: 'value',
            data: [0,2,4,6,8,10],
            splitLine:{
        　　　　//show:false
             lineStyle:{
                 color: 'rgba(176,196,222,0.5)',
                 width: 1,
                 type: 'solid'
              }  
            
        　　},
           axisLabel:{
            textStyle:{
                color: '#fff'
            }
            
          }
        }],

        //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
        //legend一一对应
        series: [{
            name: 'DNS',
            type: 'line',
            symbol: 'none',
            //smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'#000',
                        shadowColor: '#000',
                        shadowBlur: 10,
                        opacity:1
                    }
                }
            },
            data: [15, 19, 25, 20, 19, 29, 30]
        }, {
            name: '建联',
            type: 'line',
            symbol: 'none',
            //smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'#ffff66',
                        shadowColor: '#ffff66',
                        shadowBlur: 10,
                        opacity:1
                    }
                }
            },
            data: [119, 23, 39,219,  23, 33, 36]
           
        }, {
            name: 'SSL握手时间',
            type: 'line',
            symbol: 'none',
            //smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'#ff6600',
                        shadowColor: '#ff6600',
                        shadowBlur: 10,
                        opacity:1
                    }
                }
            },
            data:[249, 322, 445, 39,44, 37,  442]
       
        }, {
            name: '首包',
            type: 'line',
            symbol: 'none',
            //smooth: true,
            itemStyle: {
                normal: {
                   areaStyle: {
                        color:'#7b68ee',
                        shadowColor: '#7b68ee',
                        shadowBlur: 10,
                        opacity:1
                    }
                }
            },
            data: [700, 449, 46, 850,565, 614,  62]
      
        }, {
            name: '剩余时间',
            type: 'line',
            symbol: 'none',
            //smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'#cd5c5c',
                        shadowColor: '#cd5c5c',
                        shadowBlur: 10,
                        opacity:1
                    }
                }
            },
            data: [449, 50, 85,450, 45, 916,  422]

        }, {
            name: '平均响应时间',
            type: 'line',
            symbol: 'none',
            //smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        color:'#ffd700',
                        shadowColor: '#ffd700',
                        shadowBlur: 10,
                        opacity:1
                    }
                }
            },
            data: [1200, 80, 150, 100, 30, 120,820]
        }]
    };