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
        x: 'left',
        data:['餐饮服务经营者','单位食堂','普通餐饮','中央厨房','集体用餐配送单位','学校食堂','托幼机构食堂','职工食堂','工地食堂','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '20%'],
            center: [330,300],
            color: ['#ccc', '#91e1e0',],
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
                {value:7800, name:'餐饮服务\n经营者'},
                {value:4500, name:'单位食堂'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['25%', '35%'],
            center: [330, 300],
            color: ['#669999','#33CC99','#CC6666', '#FF9966', '#3399CC'],
            label: {
                normal: {
                    formatter: '{b}\n  {c} ({d}%)'
                }
            },
            
            data:[
                {value:1103, name:'特大型餐馆'},
                {value:1257, name:'大型餐馆'},
                {value:1281, name:'小型餐馆'},
                {value:1349, name:'快餐店'},
                {value:1394, name:'小吃店'},
                {value:1106, name:'饮品店'},
                {value:600, name:'中央厨房'},
                {value:460, name:'集体用餐配送单位'},
                
                
                
                {value:1500, name:'学校食堂'},
                {value:700, name:'托幼机构食堂'},
                {value:1060, name:'职工食堂'},
                {value:920, name:'工地食堂'},
                {value:800, name:'其他'}
            ]
        }
    ]
};