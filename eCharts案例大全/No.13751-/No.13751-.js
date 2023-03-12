option = {
    backgroundColor:'#FFF',
   /* title : {
        text: '事项申请对比分析',
        subtext: '2017年'
    },*/
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['食品生产','食品经营','食品生产企业','食品添加剂生产企业','食品销售','餐饮服务','单位食堂',]
    },
    series: [
        {
            name:'各类型主体事项申请占比',
            type:'pie',
            selectedMode: 'single',
            center:['300','330'],
            radius: [0, '20%'],
            color: ['#1c6d90', '#09895a',],
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n{d}%'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                //{value:335, name:'食品生产', selected:true},
                {value:3500, name:'食品生产'},
                {value:6500, name:'食品经营'}
            ]
        },
        {
            name:'各类型主体事项申请占比',
            type:'pie',
             radius: ['25%', '35%'],
            center:['300','330'],
            color: ['#9acfe8','#56afd8','#1a8fc5', '#96dcc3', '#5ac59e', '#439476', '#346654'],
            label: {
                normal: {
                    formatter: '{b}\n  {c} ({d}%)'
                }
            },
            data:[
                {value:1000, name:'食品生产企业'},
                {value:500, name:'小作坊'},
                {value:2000, name:'食品添加剂生产企业'},
                {value:2500, name:'食品销售'},
                {value:2100, name:'餐饮服务'},
                {value:1100, name:'单位食堂'},
                {value:800, name:'小餐饮'},
            ]
        }
    ]
};