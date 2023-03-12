option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // formatter:  function(name){

            //     var total = 0;
            //     var target;
            //     for (var i = 0, l = data.length; i < l; i++) {
            //     total += data[i].value;
            //     if (data[i].name == name) {
            //     target = data[i].value;
            //     }
            //     }
            //     return name + ' ' + ((target/total)*100).toFixed(2) + '%';
            // },

            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: [50, 80],
                    center: ['50%', '40%'],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 40,
                            name: '货币',
                            itemStyle: { normal: { color: "#5877F0" } }
                        },
                        { value: 20, name: '股票', itemStyle: { normal: { color: "#AA9FFD" } } },
                        { value: 40, name: '债券', itemStyle: { normal: { color: "#F96481" } } }
                    ]
                }
            ],
            legend: {
                x: 'center',
                // y: 'bottom',
                bottom:5,
                itemGap:30,
                itemWidth:5,
                             textStyle:{
                    rich:{
                        a:{
                            fontSize:20,
                            verticalAlign:'top',
                            align:'center',
                            padding:[0,0,28,0]
                        },
                        b:{
                            fontSize:14,
                            align:'center',
                            padding:[0,10,0,0],
                            lineHeight:25
                        }
                    }
                },
                align:'left',
                data: [
                    {
                        name:'货币',
                        icon:'circle'
                    },
                    {
                        name:'股票',
                        icon:'circle'
                    },{
                        name:'债券',
                        icon:'circle'
                    }
                ],
                // formatter:'{a|{name}}\n{name}',
                formatter:  function(name){
                    var total = 0;
                    var target;
                    for (var i = 0, l = data.length; i < l; i++) {
                    total += data[i].value;
                    if (data[i].name == name) {
                        target = data[i].value;
                        }
                    }
                    var arr = [
                        '{a|'+((target/total)*100).toFixed(2)+'%}',
                        '{b|'+name+'}',
                    ]
                    // return name + ' ' + ((target/total)*100).toFixed(2) + '%';
                    return arr.join('\n')
                },
   
            },
            backgroundColor: "#fff"
        };