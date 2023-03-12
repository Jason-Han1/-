app.title = '堆叠柱状图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
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
            nameLocation :'end',
            offset:-380,
            axisLabel :{
                
            },
            data : ['青菜','生姜','萝卜','西葫芦','西红柿','鸡蛋','黄瓜'],
            z:11,
        },
      
    ],
    yAxis : [
        {
           type:'value',
           min:-25,
           max:25
        },
        {
            type:'value',
            min:-80,
            max:280
        }
    ],
    series : [
        {
            name:'直接访问',
            barWidth:'50%',
            type:'bar',
            data:[20, 12, 01, 12, 24, 13, 20],
            label:{
                normal:{
                    show:true,
                    position:'top',
                }
            }
        },
        {
            name:'邮件营销',
            type:'bar',
            barGap:'-100%',
            barWidth:'50%',
            yAxisIndex:1,
            label:{
                normal:{
                    show:true,
                    position:'inside',
                }
            },
            data:[-20, 80, 11, 19, 70, 77, 77]
        },

    ]
};
