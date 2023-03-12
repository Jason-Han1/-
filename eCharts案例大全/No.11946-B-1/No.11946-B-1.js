

option = {
    title: {
        text: '天气情况统计',
        subtext: '虚构数据',
        left: 'center',
        show:false,
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        show:false,
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州','兖州','荆州','幽州','成都','重庆','江苏','西安']
    },
    color:["#0269A6","#1381E1","#0EAAAB","#24AB53","#D2B319","#C9435B","#6F3FC6","#2A34AF","#1D3168",],
    series : [
        {
            type: 'pie',
            radius : '45%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            label:{
                color:"#fff",
            },
            labelLine:{
              show:true,
              length:2, 
              length2:90,
            },
            data:[
                {
                    value:1548,
                    name: '幽州',
                  
                },
                {value:535, name: '荆州'},
                {value:510, name: '兖州'},
                {value:634, name: '益州'},
                {value:735, name: '西凉'},
                {value:335, name: '成都'},
                {value:435, name: '重庆'},
                {value:435, name: '江苏'},
                {value:135, name: '西安'}
            ],
            itemStyle: {
               borderColor:"#fff",
    
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
