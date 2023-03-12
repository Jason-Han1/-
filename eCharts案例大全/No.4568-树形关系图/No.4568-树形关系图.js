let dataInfo = [{
        name: 'a',
        x: 0,
        y: -2.5,
        value: [0, 2.5]

    },
    {
        name: 'ab',
        x: 0.5,
        y: -3,
        value: [0.5, 3],
        symbol:'none'

    },
    {
        name: 'b',
        x: 1,
        y: -3.5,
        value: [1, 3.5]

    },
    {
        name: 'bd',
        x: 1.5,
        y: -3.75,
        value: [1.5,3.75],
        symbol:'none'

    },
    {
        name: 'be',
        x: 1.5,
        y: -3.25,
        value: [1.5,3.25],
        symbol:'none'

    },
    {
        name: 'ac',
        x: 0.5,
        y: -1.75,
        value: [0.5,1.75],
        symbol:'none'

    },
    {
        name: 'c',
        x: 1,
        y: -1,
        value: [1, 1]

    },
    {
        name: 'cd',
        x: 1.5,
        y: -2.5,
        value: [1.5, 2.5],
        symbol:'none'

    },
    {
        name: 'ce',
        x: 1.5,
        y: -2,
        value: [1.5, 2],
        symbol:'none'

    },
    {
        name: 'cf',
        x: 1.5,
        y: -1.5,
        value: [1.5, 1.5],
        symbol:'none'

    },
    {
        name: 'cg',
        x: 1.5,
        y: -1,
        value: [1.5, 1],
        symbol:'none'

    },
    {
        name: 'ch',
        x: 1.5,
        y: -0.5,
        value: [1.5, 0.5],
        symbol:'none'

    },
    {
        name: 'd',
        x: 2,
        y: -4,
        value: [2, 4]
    },
    {
        name: 'e',
        x: 2,
        y: -3,
        value: [2, 3]

    },
    {
        name: 'f',
        x: 2,
        y: -2,
        value: [2, 2]

    },
    {
        name: 'g',
        x: 2,
        y: -1,
        value: [2, 1]
    },
    {
        name: 'h',
        x: 2,
        y: 0,
        value: [2, 0]
    }
]
let dataLink = [
    {
        source:'a',
        target:'ab',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'ab',
        target:'b',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'a',
        target:'ac',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'ac',
        target:'c',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'c',
        target:'cd',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'cd',
        target:'d',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'c',
        target:'ce',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'ce',
        target:'e',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'c',
        target:'cf',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'cf',
        target:'f',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'c',
        target:'cg',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'cg',
        target:'g',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'c',
        target:'ch',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'ch',
        target:'h',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'b',
        target:'bd',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'bd',
        target:'d',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'b',
        target:'be',
        lineStyle:{
            curveness:0.1
        },
        label:{
            show:false
        }
    },
    {
        source:'be',
        target:'e',
        lineStyle:{
            curveness:-0.1
        },
        label:{
            show:false
        }
    }
]
option = {
    title: {
        show:false,
        text: "",
       
    },
    
    xAxis: {
        show: false,
        type: 'value',
      
    },
    yAxis: {
        show: false,
        type: 'value',
        
    },
    series: [{
        type: 'graph',
        coordinateSystem: 'cartesian2d',
       
        nodeScaleRatio: false,
        //建头
        //edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 15],
        edgeLabel: {
            show: false,
            normal: {
                show: true,
                position: 'middle',
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        },
    
        roam: true,
        
        //圆形上面的文字
        label: {
            normal: {
                position: "inside",
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
            }
        },
        
        
        itemStyle: {},
       
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1,
                curveness: 0.1
            }
        },
        data: dataInfo,
        links: dataLink
    }],
   

}