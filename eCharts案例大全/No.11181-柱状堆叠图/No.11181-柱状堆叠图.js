option =  {
            title: {
                text: '资源总览',
                left:'20px',
                textStyle: {    
                color: "#436EEE",
                fontSize: 17,   
                }
            },
            tooltip: {
                 trigger: "axis",  
            },
            legend: {
                itemWidth:15,  
                itemHeight:15,  
                data:['可用','不可用'],
            },
            xAxis: {
                data: ["网络设备","服务器","应用","其他","虚拟机","存储"],
                splitLine:{
                    show:false,
                },
            },
            yAxis: {
                 splitLine:{
                    show:false,
                },
            },
            series: [{
                name: '可用',
                type: 'bar',
                stack:'使用情况',
                data: [5, 20, 36, 10, 10, 20],
                itemStyle:{
                     normal:{color:"#FF8849"},
                }
            },{
                name: '不可用',
                type: 'bar',
                stack:'使用情况',
                data: [40, 22, 18, 35, 42, 40],
                itemStyle:{
                     normal:{color:"#3FBB49"},
                }
            }]
        };