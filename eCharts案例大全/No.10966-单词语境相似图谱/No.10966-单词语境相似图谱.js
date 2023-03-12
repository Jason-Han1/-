function genData() {
    let center = {
        name: 'apple'+Math.floor(Math.random() * 100),
        x: 0,
        y: 0,
        symbolSize: 180,
    }

    let other = new Array(10).fill().map(function(d, i) {
        return {
            name: 'magenificent'+i,
            symbolSize: 100
        }
    })

    return [center, ].concat(other)
}


let idata = genData()

option = {
    title: {
        text: '单词语境相似图谱'
    },
    series: [{
        type: 'graph',
        layout: 'force',
        hoverAnimation: true,
        label: {
            show: true,
            position: 'inside'
        },
        draggable: true,
        force: {
            repulsion: 750,
            gravity: 0.05,
            edgeLength: [120, 150]
        },
        lineStyle: {
            opacity: 0,
        },
        data: idata,
        links: [{
            source: 0,
            target: 1,
            value: 100,
        }, {
            source: 0,
            target: 2,
            value: 100,
        }, {
            source: 0,
            target: 3,
            value: 100,
        }, {
            source: 0,
            target: 4,
            value: 100,
        }, {
            source: 0,
            target: 5,
            value: 100,
        }, {
            source: 0,
            target: 6,
            value: 100,
        }, {
            source: 0,
            target: 7,
            value: 100,
        }, {
            source: 0,
            target: 8,
            value: 100,
        }, {
            source: 0,
            target: 9,
            value: 100,
        }, {
            source: 0,
            target: 10,
            value: 100,
        }]
    }]
};