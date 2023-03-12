option = {
    backgroundColor: '#000',
    color: ["#33bdf0", "#357cf1", "#8c1bd2"],
    legend: {
        orient: 'vertical',
        right: "14%",
        top: 'center',
        textStyle: {
            color: "#69dcf0",
            fontSize: 40
        },
        data: ['123', '234', '345']
    },
    series: [{
        type: 'pie',
        radius: ['60%', '80%'],
        center: ['35%', '50%'],
        label:{normal:{
            fontSize:36
        }},
        itemStyle: {
            normal: {
                borderWidth: 10,
                borderColor: '#010c20',
            }
        },
        data: [
            {name:'123',value:23},
            {name:'234',value:23},
            {name:'345',value:23},
            ].concat({name:'',value:0,label:{
                normal: {
                    show: true,
                    position: 'center',
                    length: 100,
                    fontSize: 68,
                    formatter: '{aa|医疗总费用}\n {bb|' + '3443' + '}\n {cc|' + '1232' + '元}',
                    rich: {
                        aa: {
                            color: '#63d4ec',
                            fontSize: '56',
                            lineHeight: '100',
                        },
                        bb: {
                            color: '#fec256',
                            fontSize: '100',
                            lineHeight: '150',

                        },
                        cc: {
                            color: '#fec256',
                            fontSize: '56',
                        }
                    },

                },
            }})
    }]
};