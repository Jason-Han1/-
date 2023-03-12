option = {
    backgroundColor: '#18395a',
    legend:{
         orient: 'vertical', // 'vertical'
        x: 'left', // 'center' | 'left' | {number},
        y: '80', // 'center' | 'bottom' | {number}
        padding: 10,    // [5, 10, 15, 20]
        itemGap: 20,
        textStyle: {color: '#c3cad9'},
    },
    title: {
        text: '工商用户民用户年用气量对比',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#d9efff'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
            selectedMode: 'single',
            selectedOffset: 10,
        clockwise: true,
        center: ['50%', '50%'],
        color: ['#43cadd','#3893e5'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 3600,
                name: '民用户',
            },
            {
                value: 5400,
                name: '工商用户'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                // formatter: ['{c|{b}{d}%}', '{b|{b}}'].join('\n'),
                formatter: ['{b|{b}{d}%}', '{c|{c}立方米}'].join('\n'),
                rich: {
                    b: {
                        color: '#d9efff',
                        fontSize: 15,
                        height: 40
                    },
                    c: {
                        color: '#fff',
                        fontSize: 14,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                },
            }
        },
        itemStyle:{
          borderWidth:'20',
          color:'pink',
          borderColor:'#FFF',
          normal:{
          borderWidth:'3',
          borderColor:'#03032E',
          },
        },
        labelLine: {
            normal: {
                backgroundColor:'yellow',
                borderColor:'skyblue',
                borderWidth:10,
                lineStyle: {
                borderColor:'skyblue',
                borderWidth:10,
                backgroundColor:'yellow',
            }
        },


        
        }
    }]
};