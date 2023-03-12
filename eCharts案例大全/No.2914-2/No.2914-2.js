var nodes = [{
        x: 80,
        y: 540,
        nodeName: '要开心',
        svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
        symbolSize: 70,

    },{
        x: 1840,
        y: 540,
        nodeName: '要幸福',
        svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
        symbolSize: 70,
    },
    {
        x: 960,
        y: 540,
        nodeName: '男人品质，成就一生',
        svgPath: 'M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
        symbolSize: 150,
    }
    
]
var charts = {
    nodes: [],
    linesData: [{
            coords: [
                [80, 540],
                [180, 540],
            ]
        },
        {
            coords: [
                [180, 540],
                [180, 50],
                [320, 50],

            ]
        },
        {
            coords: [
                [180, 540],
                [960, 540],

            ]
        }, 
        {
            coords: [
                [180, 540],
                [180, 1030],
                [320, 1030],


            ]
        },
        {
            coords: [
                [320, 1030],
                [960, 1030],

            ]
        }, 
        {
            coords: [
                [320, 50],
                [960, 50],

            ]
        }, 
        {
            coords: [
                [960, 1030],
                [960, 540],

            ]
        }, 
        {
            coords: [
                [960, 50],
                [960, 540],

            ]
        }, 
        
        
        

        {
            coords: [
                [1740, 540],
                [1740, 1030],
                [1600, 1030],
                


            ]
        },
        {
            coords: [
                [1840, 540],
                [1740, 540],

            ]
        }, 
         {
            coords: [
                [1740, 540],
                [1740, 50],
                [1600, 50],


            ]
        },

        {
            coords: [
                [1740, 540],
                [960, 540],

            ]
        }, 
        
       
        {
            coords: [
                [1600, 1030],
                [960, 1030],

            ]
        }, 
        {
            coords: [
                [1600, 50],
                [960, 50],

            ]
        }, 
        {
            coords: [
                [960, 1030],
                [960, 540],

            ]
        }, 
        {
            coords: [
                [960, 50],
                [960, 540],

            ]
        }
    ]
}

for (var j = 0; j < nodes.length; j++) {
    const {
        x,
        y,
        nodeName,
        svgPath,
        symbolSize
    } = nodes[j];
    var node = {
        nodeName,
        value: [x, y],
        symbolSize: symbolSize || 60,
        symbol: 'path://' + svgPath,
        itemStyle: {
            color: 'orange',
        }
    }
    charts.nodes.push(node)

}

option = {
    backgroundColor: "#0B1321",
    xAxis: {
        min: 0,
        max: 1920,
        show: false,
        type: 'value'
    },
    yAxis: {
        min: 0,
        max: 1080,
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        coordinateSystem: 'cartesian2d',
        label: {
            show: true,
            position: 'bottom',
            fontSize: 40,
            color: 'orange',
            formatter: function(item) {
                return item.data.nodeName
            }
        },
        data: charts.nodes,
    }, {
        type: 'lines',
        polyline: true,
        coordinateSystem: 'cartesian2d',
        lineStyle: {
            type: 'line',
            width: 5,
            color: '#5470c6',
            curveness: 0.3

        },
        effect: {
            show: true,
            trailLength: 0.1,
            symbol: 'arrow',
            color: 'red',
            symbolSize: 30
        },
        data: charts.linesData
    }]
};






