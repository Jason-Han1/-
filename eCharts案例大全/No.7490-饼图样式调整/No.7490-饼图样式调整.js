option = {
    backgroundColor:'',
    title: {
        text: '当前未处理预警',
        left: 'center',
        textStyle:{
          color:'#fff',   //修改标题颜色
        },
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        //orient: 'vertical',   //让ledend竖向排列
        left: 'center',
        top: 'bottom',
        textStyle:{
          color:'#fff',   //修改标识字体颜色
        },
        data: ['紧急', '主要', '次要', '提示']
    },
    color:['#fa55fe', '#9249f8','#a4f2fb','#3f7dfe'], //修改饼图颜色
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '80%',  //调整饼图大小
            avoidLabelOverlap: true,    //是否启用防止标签重叠策略
            center: ['50%', '50%'],  //调整饼图整体位置
                label:{
                normal: {
                    show:true,
                    position:'inner',      //显示在扇形上
                    formatter: ' {c} 个',  //显示内容
                    textStyle: {
                        color: 'white',    // 改变标示文字的颜色
                        fontSize: 14,  //文字大小
                        fontWeight: 'bold'
                    },
                },
            },
            data: [
                {value: 25, name: '紧急'},
                {value: 20, name: '主要'},
                {value: 15, name: '次要'},
                {value: 35, name: '提示'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],

};
