
let jsonD =[
            {name:'a',
         
            children:[
                {name:'80% \n aa',
                    itemStyle: { borderColor: "#000"},
                    lineStyle: {color: "#f00", width: 20},
                    symbolSize:18,
                children:[
                    {name:'80% \n a-b',
                        itemStyle: {color: "#f00", borderColor: "#f00"},
                        lineStyle: {color: "#ccc", borderColor: "#ccc", width: 20},
                        symbolSize:20,
                        children:[
                            {
                                name: '50% \n a-c',
                                itemStyle: {color: "#0000ff", borderColor: "#0000ff"},
                                lineStyle: {color: "#ccc", borderColor: "#ccc", width: 8},
                                children:[
                                    {
                                        name: '50% \n a-d',
                                        itemStyle: {color: "#0000ff", borderColor: "#0000ff"},
                                        lineStyle: {color: "#ccc", borderColor: "#ccc", width: 8},
                                    }
                                ]
                            },
                            {
                                name: '80% \n a-c-2',
                                itemStyle: {color: "#0000ff", borderColor: "#0000ff"},
                                lineStyle: {color: "#ccc", borderColor: "#ccc", width: 20},
                                symbolSize:18,
                                children:[
                                    {
                                        name: '80% \n a-d-2',
                                        itemStyle: {color: "#0000ff", borderColor: "#0000ff"},
                                        lineStyle: {color: "#ccc", borderColor: "#ccc", width: 20},
                                        symbolSize:18,
                                    },
                                    
                                ]
                            }
                        ]
                    }
                ]},
                 {name:'a-b',
                 children:[
                    {name:'c',
                       
                    }
                ]},
                {name:'a-c',
                 children:[
                    {name:'60% \n c',
                        itemStyle: {color: "#0000ff", borderColor: "#0000ff"},
                        lineStyle: {color: "#ccc", borderColor: "#ccc", width: 10},
                    }
                ]},
            ]}
        ];


option = {
    title: {
        text: 'Awesome Chart'
    },
    series: [{
        type: 'tree',
        label: {
            normal: {
                position: 'left',
                verticalAlign: 'bottom',
                align: 'right',
                fontSize: 16
            }
        },
       expandAndCollapse:false,
        symbolSize:10,
        lineStyle:{
            width: 2,
        },
        emphasis:{
            lineStyle:{
                width: 10,
            },
        },
        data:jsonD
    }]
};




















