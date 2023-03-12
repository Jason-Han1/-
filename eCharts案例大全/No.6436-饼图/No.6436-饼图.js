option = {
   color: ['#37a2da','#32c5e9','#9fe6b8','#ffdb5c','#ff9f7f','#fb7293','#e7bcf3','#8378ea'],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            toolbox: {
                show : false,
                
            },
            legend: {
                itemWidth:10,
                itemHeight:10,
                icon: "circle",
                type:"scroll",
                selectedMode :true,
                // orient: 'vertical',
                left:'15%',
                align:'left',
                top:'90%',
                textStyle: {
                    color:'#8C8C8C'
                },
                height:50
            },
            series : [
                
                {
                    hoverAnimation:false,   
                    name:'用车情况',
                    type:'pie',
                    bottom:'5%',
                    right:'5%',
                    radius : [0, 60],
                    selectedMode: 'single',
                    tooltip: {
                        trigger: "item",
                        backgroundColor: "rgba(255, 255, 255, 0.9)", //设置背景图片 rgba格式
                        color: "black",
                        borderWidth: "1", //边框宽度设置1
                        borderColor: "#FFF", //设置边框颜色
                        textStyle: {
                            color: "black" //设置文字颜色
                        },
                    },
                    
                    data:[
                        {value:20, name:'国宝'},
                        {value:30, name:'治安'},
                        {value:25, name:'rose3'},
                        {value:30, name:'sad'},
                        {value:30, name:'asdd'},
                        {value:30, name:'qwe'},
                    ]
                }
            ]
            };