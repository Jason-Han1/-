option = {
    title: {
        text: '区域填充'   //标题
    },
    tooltip:{
        trigger:'axis'   //显示tooltip
    },
    legend:{//设置legend 图形右上角 也就是图例
        left:'right',
        data:['NLU','WEU']
    },
    xAxis: {
        type:'category',
        boundaryGap:false,
        splitLine:{
            show:true,
            interval:'auto'
        },
        axisTick:{
            show:'false',
            alignWithLabel:true
        },
        //x轴数据
        data: ['1-11', '1-12', '1-13', '1-14', '1-15', '1-16', '1-17','1-18', '1-19', '1-20', '1-21', '1-22', '1-23', '1-24','1-25']
    },
    yAxis: {},
    color:['gold','red'],//自定义线条颜色，你可以设置多个颜色，使用时默认从第一个开始   如果不设置color则有它默认颜色
    // series里面的数据  如果是固定的线条 你只需要改变data数据就ok  
    // 如果不是确定有多少折线  建议吧整个serise数据替换掉   例如：series:[{...}{...}{...},...]配置项和下面一样
    series: [{
        name:'NLU',
        type: 'line',
        data:[150,220, 182, 191, 234, 290, 330, 310,600,700,220, 182, 191, 234, 290],
        areaStyle:{
            normal:{
                color:'rgba(0, 128, 255,0.5)'
            }
        }
    },
    {   
        name:'WEU',
        type: 'line',
        data:[220, 182, 191, 234, 290, 400, 310,500,400,220, 182, 191, 200, 290,500],
        areaStyle:{
            normal:{
                color:'rgba(255, 255, 255,0.5)'
            }
        }
    }]
};