option = {
   title: {
            //text: '燃气数据：万立方米',
            subtext: '燃气数据：万立方米',
            x: 'right',
            subtextStyle: {
                "fontSize": 12,
                "fontFamily": "Microsoft YaHei",
                "color": "#444"
            }
        },
    color: ['#1F6ABB','#3897C5','#A4C5E6'],
    tooltip : {
        trigger: 'axis'
    },
   legend: {
            x: 'left',
            padding: [10, 0, 0, 30],
            itemWidth: 18,
       data:['完成','计划','当前']
        },
   grid: {
            left: '8%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                axisLabel :{  
                    interval:0   
                }  ,
                show:true,
                barGap: 0,
              //  boundaryGap: false,
                
                padding:0,
                barMaxWidth:1,
                type: 'category',
                data: ['川气', '东气', '五号沟', '西二线', '西气', '洋山港'],
                fontSize: 6,
                scale: true,
                lineStyle:2,
                axisTick: {
                    alignWithLabel: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                barGap: 1,
                padding: 0,
                //barMaxWidth: 1,
                axisLabel: {
                    //formatter: '{value}W'
                    formatter: '{value}'
                },
            }
        ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'完成',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
          
        
        },
        {
            name:'计划',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
        },
        {
            name:'当前',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
        }
      
    ]
};
                    