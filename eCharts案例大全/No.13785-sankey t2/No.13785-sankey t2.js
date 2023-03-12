option = {
    series: {
        type: 'sankey',
        layout: 'none',
        data: [{
            name: 'k4l',
            itemStyle:{normal:{color:'rgb(255,0,0)'}}
        }, {
            name: 'k4s',
            itemStyle:{normal:{color:'rgb(0,255,0)'}}
        }, {
            name: 'k4r',
            itemStyle:{normal:{color:'rgb(0,0,255)'}}
        }, {
            name: 'k1l',
            itemStyle:{normal:{color:'rgb(255,0,0)'}}
        }, {
            name: 'k1s',
            itemStyle:{normal:{color:'rgb(0,255,0)'}}
        }, {
            name: 'k1r',
            itemStyle:{normal:{color:'rgb(0,0,255)'}}
        }, {
            name: 'k5l',
            itemStyle:{normal:{color:'rgb(255,0,0)'}}
        }, {
            name: 'k5s',
            itemStyle:{normal:{color:'rgb(0,255,0)'}}
        }, {
            name: 'k5r',
            itemStyle:{normal:{color:'rgb(0,0,255)'}}
        }, {
            name: 'k3l',
            itemStyle:{normal:{color:'rgb(255,0,0)'}}
        }, {
            name: 'k3s',
            itemStyle:{normal:{color:'rgb(0,255,0)'}}
        }, {
            name: 'k3r',
            itemStyle:{normal:{color:'rgb(0,0,255)'}}
        }, {
            name: 'k4',
            itemStyle:{normal:{color:'rgb(255,0,0)'}}
        }, {
            name: 'k1',
            itemStyle:{normal:{color:'rgb(0,255,0)'}}
        }, {
            name: 'k2',
            itemStyle:{normal:{color:{
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0, color: 'hsl(1,100%,50%)' // 0% 处的颜色
    }, {
        offset: 1, color: 'hsl(240,100%,50%)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}}}
        }, {
            name: 'k5',
            itemStyle:{normal:{color:'rgb(0,0,255)'}}
        }],
        links: [{
            source: 'k4l',
            target: 'k4',
            value: 12.2,
        }, {
            source: 'k4s',
            target: 'k4',
            value: 8.5
        }, {
            source: 'k4r',
            target: 'k4',
            value: 10.3
        }, {
            source: 'k1l',
            target: 'k1',
            value: 8.3
        }, {
            source: 'k1s',
            target: 'k1',
            value: 3.5
        }, {
            source: 'k1r',
            target: 'k1',
            value: 6.6
        }, {
            source: 'k5l',
            target: 'k5',
            value: 33.8
        }, {
            source: 'k5s',
            target: 'k5',
            value: 7.3
        }, {
            source: 'k5r',
            target: 'k5',
            value: 5.5
        }, {
            source: 'k4',
            target: 'k2',
            value: 31.1
        }, {
            source: 'k1',
            target: 'k2',
            value: 18.3
        }, {
            source: 'k5',
            target: 'k2',
            value: 46.6
        }, {
            source: 'k2',
            target: 'k3l',
            value: 22
        }, {
            source: 'k2',
            target: 'k3s',
            value: 26
        }, {
            source: 'k2',
            target: 'k3r',
            value: 48
        }],
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#aaa'
            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0.5
            }
        },
        layoutIterations:0,
        color:['rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(0,0,255)']
    }
};