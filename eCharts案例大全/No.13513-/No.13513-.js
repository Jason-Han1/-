app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['住宿','餐饮','商品销售','娱乐','邮电通讯','市内交通','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['2010','2011','2012','2013','2014','2015','2016']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'市内交通',
            type:'bar',
          
            data:[10.68, 10.36, 7.91, 7.92, 11.04, 23.9, 28.9]
        },
        {
            name:'住宿',
            type:'bar',
            data:[51.95, 50.98, 51.95, 59.76, 69.5, 132.9,116.3]
        },
        {
            name:'餐饮',
            type:'bar',
    
            data:[41.15, 35.98, 37.47, 41.38, 48.28, 82.6, 96.2]
        },
        
        {
            name:'娱乐',
            type:'bar',
         
            data:[31.72, 34.66, 36.13, 35.91, 36.74, 53.9, 77.1]
        },
        {
            name:'商品销售',
            type:'bar',
            data:[115.9, 118.56, 111.54, 111.82, 113.28, 209, 209.5],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },

       
        {
            name:'其他',
            type:'bar',
    
            data:[40.15, 41.41, 40.68, 40.01,45.77, 118.6, 118]
        }
        
    ]
};