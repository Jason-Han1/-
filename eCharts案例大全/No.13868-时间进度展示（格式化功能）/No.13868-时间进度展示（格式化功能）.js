option = {
    title : {
        text: '部门完成率',
        left: 'center'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
        
    tooltip : {
          trigger: 'axis' ,
             formatter: "{a} <br/>{b} : {c}%"//鼠标提示格式化
        
    } , 
    legend: {
        data: [],
       left: 'left'
    },
    xAxis : [
        {
            type : 'value',
            scale:true ,
              min:0,//x轴最小开始
            //max:100,
              boundaryGap: [0, 0.01],
                axisLabel: {
                formatter: '{value} %'//x轴单位格式化
            }
                
        }
    ],
   yAxis: {
        type: 'category',
         axisLine : {onZero: true}, // 这里就是你要的东西
        data: ['巴西','印尼','美国','印度','中国']
       
    },
    series : [
        { 
            itemStyle: {
                        normal: {
                            color: function (params) {
                                //首先定义一个数组
                                var colorList = [
                                '#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3',
                                '#B74AE5', '#0AAF9F', '#E89589', '#C33531', '#EFE42A', '#64BD3D', '#EE9201', '#29AAE3', '#B74AE5', '#0AAF9F', '#E89589', '#16A085', '#4A235A', '#C39BD3 ', '#F9E79F', '#BA4A00', '#ECF0F1', '#616A6B', '#EAF2F8', '#4A235A', '#3498DB'
                                ];
                                 
                                return colorList[params.dataIndex]
                            },
                            //以下为是否柱子上的文字显示
                            label: {
                                show: true,  formatter: '{c} %'
                                
                            }
                        }
                    },
            name:'完成率',
            type:'bar',
            data: [44.11, 120,23,54 ,34],
           
            
            markLine : {
                label:{formatter:'当前时间线'},
                lineStyle: {
                    normal: {
                        type: 'solid', 
                        color:'#A020F0',
                        width:3
                    }
                },
                data : [
                 
                    {
                        xAxis: 90         
                    }
                ]
            }
        } 
    ]
};
