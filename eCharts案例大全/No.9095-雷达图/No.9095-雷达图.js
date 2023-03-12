var option = {
    
    color: ['#f7812a', '#2ea5f5', '#7c5bff'],

    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(255,255,255,0.1)', 
        formatter: function(params){
            console.log(params);
            var indicator1 =[]
            var indicator=option.radar.indicator;
            var stt = ""
            var result = ""
            for(var key in indicator){
                indicator1.push(indicator[key].name)
               }
            for (var i = 0 ; i < params.value.length ; i++){
                stt = indicator1[i]+"："+ (params.value[i])
                result += stt+ "%" + "<br/>"
            }
            return params.data.name+"："+ "<br/>"+result
          }
    },
    grid: {
        top: '23%'
    },
    // backgroundColor: '#17316a',
    legend: {
      icon:'circle',
            left:515,
            top:'1%',
            show: true,
            padding: [3, 5],
            right: '50',
            y: '1',
            // bottom: '-30%',
            // center: 0,
            itemWidth: 10,
            itemHeight: 20,
            itemGap: 40,
            z:3,
        itemGap: 21,
        orient: "horizontal",
       data: ['联通', '移动','电信'],
        textStyle: {
            fontSize: 12,
            color: '#fff'
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#999999',
                // backgroundColor: '#999',
                // borderRadius: 3,
                // padding: [3, 5]
            }
        },
                splitArea: {
                areaStyle: {
                //   show:'true',
                    color: ['#3f586c','#388595', '#3f586c', '#388595',]
                }
            },
                  axisLine: {
                lineStyle: {
                  show:'true',
                    color: 'rgba(63, 88, 108,0)'
                }
            },
            splitLine: {
                lineStyle: {
                  show:'true',
                 color: '#4e7887', // 分隔线颜色
                 width: 1, // 分隔线线宽
             }
         },
         startAngle: 22.5,
        radius: '80%',
        center: ['50%', '53%'],
        indicator: [
                  {
                    name: '4A系统',
                    max: 100
                },
                 {
                    name: 'IDS/IPS',
                    max: 100
                },
                 {
                    name: '防火墙/WFA',
                    max: 100
                },
                {
                    name: '安全大数据平台',
                    max: 100
                },

                {
                    name: 'IDC/ISP信息安全管理系统',
                    max: 100
                },
                {
                    name: '上网日志留存系统',
                    max: 100
                },
                {
                    name: '僵木蠕监测处理系统',
                    max: 100
                },
                {
                    name: '移动互联网恶意程序监测处理系统',
                    max: 100
                },
            ]
    },
    series: [{
          name: '联通' + '移动' + '电信',
        // name: '电信' + '移动' + '联通',
        type: 'radar',
        data: [
        
            {
                value: [75, 100, 100, 100,100,100,0,100],
                name: '联通',
                   symbol:'circle',
                areaStyle: {
                    normal: {
                          opacity:0.2,
                     color:  '#f7812a'
                    },
                },
            },   
     
            {
                value: [100, 100, 100, 100, 100, 75,0,100],
                name: '移动',
                   symbol:'circle',
                areaStyle: {
                    normal: {
                          opacity:0.2,
                        color:'#2ea5f5',
                    },
                },
            },
            {
                value: [48,100,0,0,0,0,0,100],
                name: '电信',
                   symbol:'circle',
                areaStyle: {
                    normal: {
                          opacity:0.2,
                        color: '#7c5bff'
                    }
                }
            },      
        ]
    }]
}