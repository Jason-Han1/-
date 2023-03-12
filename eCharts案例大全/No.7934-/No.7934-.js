option = {
        backgroundColor: '#ffffff', //整体背景色
        tooltip: {//提示框，可以在全局也可以在
            trigger: 'item',  //提示框的样式
            formatter: "{b}: {c} ({d}%)",
            color:'rgba(36,37,41,0.8)', //提示框的背景色
            textStyle:{ //提示的字体样式
                color:"#fff",
            }
        },
        series: [
            {
                // name:'访问来源',
                type:'pie', //环形图的type和饼图相同
                radius: ['12%', '20%'],//饼图的半径，第一个为内半径，第二个为外半径
                 center: ['50%', '51%'], // 位置
                color:['#4285F4','#A1C2FA','#E2E5E9'],
                label: {
                    normal: {  
                        show: false,
                        position: 'left'
                    }
                },  
                data:[
                    {value:3000.00, name:'未报销金额'},
                    {value:2000.00, name:'报销中金额'},
                    {value:1860.00, name:'已报销金额'}
                ]
            }
        ]
    };