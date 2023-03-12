option = {
    backgroundColor: '#000',
   title:{
         text: '118',
        x: '50%',
        y: '50%',
        textAlign: 'center',
        textStyle: {
            fontSize: '36',
            fontWeight: '100',
            color: '#fff',
            textAlign: 'center',
        },
   },
	legend: {
        orient: 'vertical',
        left: '0',
        top: 'center',
        data: ['发现', '立案', '派遣', '处置', '核查', '结案'],
        textStyle: {
            color: '#66dbfc',
            fontSize: 30
        },
        itemGap: 40,
        itemWidth: 25,
        itemHeight: 25,
    },
    series: [{
        type: "pie",
        hoverAnimation: false,
        center:['50%','50%'],
        radius: ["43%", "53%"],
       color: ['#da66fc', '#24a0ff', '#fcc366', '#66fc7f'],
        startAngle: 135,
       labelLine: {
           padding:[20,20],
            normal: {
                // length:20 * scale,
                length: 0,
                length2:60,
                lineStyle: {
                    color:'#fff'
                }
            }
        },
       label: {
            normal: {
                formatter: "{a|{d}%}",
                backgroundColor: "rgba(255, 147, 38, 0)",
                borderColor: "transparent",
                borderRadius: 4,
                rich: {
                    a: {
                        color: "#fff",
                        fontSize: 30,
                    },
                    b: {
                        color: "#fff",
                        fontSize: 30,
                    }
                },
            },
        },
        data: [{
            name: "发现",
            value: 3
        }, {
            name: "立案",
            value: 2
        },{
            name: "派遣",
            value: 3
        }, {
            name: "处置",
            value: 2
        },{
            name: "核查",
            value: 3
        }, {
            name: "结案",
            value: 2
        }]
    }]
}