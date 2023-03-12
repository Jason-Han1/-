var data = [];
for (let i = 0; i < 5; i++) {
    data.push('item' + i)
}
var series = data.map((v, i) => {
    // datalength -i datalength
    return {
        data: [
            data.length, {
                value: data.length,
                label: {
                    show: true,
                    // position: 'top',
                    formatter: '下游',
                    position: ['-250%', '-100%']
                },
            },
            {
                name: v,
                value: data.length - i,
                label: {
                    show: true,
                    position: 'right',
                    formatter: v + '12391u21231212312303912'
                },
            },
            data.length - i,
        ],
        type: 'line',
        smooth: 0.6,
        smoothMonotone: 'x',
        lineStyle: {
            width: 1,
        },
        zlevel: i === 0 ? 2 : 1,
        hoverAnimation: false,
    }
})
option = {
    // backgroundColor:'#000',
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4'],
        show: false,
    },
    grid: {
        right: '50%',
        top: 20,
        left: 0,
        bottom: 0,
    },
    yAxis: {
        type: 'value',
        min: data.length > 10 ? 0 : -10,
        max: data.length,
        show: true,
    },
    visualMap: [{
        show: false,
        type: 'piecewise',
        dimension: 0,
        pieces: [{
                min: 0,
                max: 0.8,
                color: 'blue',
                symbol: 'emptyCircle',
                symbolSize: 10,
            },
            {
                min: 0.8,
                max: 1,
                color: 'blue',
                // symbol:'arrow',
                // symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAGtJREFUGBljMP7+Z4HJ998ODDgAE0j8/3+G/UBFB7ApZAKqOABVZI9NIaPF9/8Kv///uQ9ShAwYGRkOAvkNYCuQJdDZLH8Z/jogC8J0nuFkPQASZ/nHwOAAYqBLgMRAgAVEACUdYTpAfGQAAElPKsZF3sA4AAAAAElFTkSuQmCC',
               symbol:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAABGdBTUEAALGPC/xhBQAAAY9JREFUSA2tVUFWwyAQhTxceAq9Q/U9l/EkepTcxN6k6d47qJcwiyRFPuXzJpQErGbRgT9//jAMBbUbpr0Kn4bdfY9Wa3X0GCbBKQxQehqBn4fwPAxjLx1RWYJ+/DTYe2pdOLOAzC4JjdL6C0BK0Mgx2ulDslGikSCA99ubFiSDHwlg7r/HYXrNFUh/alcLz6q7aB+ALCdr31I1OaeAb8BJqVY60zHJwLNLkoQ0WOGMpB29IEnAkVs5L47ZstrA2Gtr1SH0YzNj47apk8soBWZ3SQq4HXt256UnVgyIxBBYHYBAZPOnkiprVi7LhIOf5UoiCWZUc8cJbY4Yfdj7OEl2hPjC1jRrGeAOXwjqa4/HQqAwyd4OiHF1H53pZJMLWln3uc+4Zq19yTICeG1CnyB3x20lg682oU+AAP9YFKoAb+1bSxgTXFPFWjLgTBj/OrOa262AWh+FeThiBW6LPl2j72qFyEsFidP6CsK7UCVeEqQwra9ga/W/FaQwrUlX/1dBCtMavIJOdHEt0/kf9gcvuv5AZraLJgAAAABJRU5ErkJggg==',
                symbolSize: 10,
            },
            {
                min: 1,
                max: 2,
                color: 'blue',
                symbol: 'emptyCircle',
                symbolSize: 10,
            },
            {
                min: 2,
                max: 3,
                color: 'transparent',
            },
        ]
    }],
    // silent: true,
    series: series
};