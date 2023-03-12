



option = {
    backgroundColor: '#fff',
    title: {
        x: '2%',
        y: '2%',
        textStyle: {
           
              fontSize: 29,
                            fontWeight: 600,
                            color: "#fed350",
        },
         subtextStyle: {
            fontWeight: 400,
            fontSize: 16,
            color: '#687284'
        },
        top:'215',
        left:'center',
        text: "6000",
        subtext: "实际销售额"
    },
    legend:{
        data:[{name:"实际销售额",icon:"roundRect"}],
        bottom:20
    },
    tooltip: {
        //trigger: 'item',
        //   formatter: '{c}%'
    },
    series: [{
        type: 'pie',
        radius: ['65', '100'],
        hoverAnimation: false,
        label: {
            show:false,
            
        },
        data: [{
                value: 50,
                name: "实际销售额",
                itemStyle: {
                    normal: {
                        color: "#fed350",
                    }
                },
                  emphasis:{
                    itemStyle: {
                    normal: {
                        color: "#fed350",
                    }
                },
                },
                tooltip: {
                    show: false
                },
                label: {
                    show:false,
                    normal: {
                        // formatter: '{d} %',
                        textStyle: {
                            fontSize: 20,
                            fontWeight: 600,
                            color: "#fed350",
                        }
                    }
                },
              
            },
            {
                value: 50,
                name: '实际销售额',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#ececec',
                    }
                },
                 emphasis:{
                        itemStyle: {
                        color: '#ececec',
                },
                    
               
                },
                label: {
                    show:false,
                   normal: {
                        // formatter: '{d} %',
                        textStyle: {
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#333",
                        }
                    }

                }
            }
        ]
    }]
}