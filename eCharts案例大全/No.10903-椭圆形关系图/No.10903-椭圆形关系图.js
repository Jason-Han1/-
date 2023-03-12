var getY = function(x) {
    let y = Math.sqrt(1 - Math.pow((x - 120) / 120, 2)) * 50 + 50;
    return y;
}
const targetCoord = [79, 42];
const curveness = 0;
const linesData = [];
const categories = [{
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: "#01acca"
                },
                {
                    offset: 1,
                    color: "#5adbe7"
                }
            ])
        }
    },
    label: {
        normal: {
            fontSize: "12"
        }
    }
}];

const item = {
    name: "",
    value: targetCoord,
    symbolSize: 0,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: "#157eff"
                },
                {
                    offset: 1,
                    color: "#35c2ff"
                }
            ])
        }
    },
    data: {},
    label: {
        normal: {
            fontSize: "14"
        }
    }
};

const items = [{
        name: "",
        category: 0,
        active: true,
        value: [100, getY(100)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [95, getY(95)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [90, getY(90)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [85, getY(85)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [80, getY(80)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [75, getY(75)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [70, getY(70)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [65, getY(65)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [60, getY(60)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [55, getY(55)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [50, getY(50)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [45, getY(45)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [40, getY(40)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [35, getY(35)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [30, getY(30)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [25, getY(25)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [20, getY(20)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [15, getY(15)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [10, getY(10)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [5.5, getY(5.5)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [2, getY(2)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [0.2, getY(0.2)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [0.3, 100 - getY(0.3)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [2, 100 - getY(2)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [5, 100 - getY(5)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [9, 100 - getY(9)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [14, 100 - getY(14)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [19, 100 - getY(19)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [24, 100 - getY(24)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [29, 100 - getY(29)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [34, 100 - getY(34)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [39, 100 - getY(39)]
    },
    {
        name: "",
        category: 0,
        active: true,
        value: [44, 100 - getY(44)]
    },
];

const data = items.concat([item]);

items.forEach(function(el) {
    linesData.push([{
            coord: targetCoord
        },
        {
            coord: el.value
        }
    ]);
});

const links = items.map(el => {
    return {
        source: item.name,
        target: el.name,
        speed: el.speed,
        lineStyle: {
            normal: {
                color: el.speed ? "#12b5d0" : "#ff0000",
                curveness: curveness
            }
        }
    };
});

var option = {
    legend: {
        show:false,
    },
    xAxis: {
        show: false,
        type: "value"
    },
    yAxis: {
        show: false,
        type: "value"
    },
    series: [{
            type: "graph",
            layout: "none",
            coordinateSystem: "cartesian2d",
            symbolSize: 16,
            z: 3,
            circular: {
                rotateLabel: true
            },
            edgeLabel: {
                normal: {
                    show: false,
                }
            },
            label: {
                normal: {
                    show: false,
                }
            },
            itemStyle: {
                normal: {
                    shadowColor: "none"
                },
                emphasis: {}
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: "none"
                }
            },
            edgeSymbol: ["none", "none"],
            edgeSymbolSize: 8,
            data: data,
            links: links,
            categories: categories
        },
        {
            name: "A",
            type: "lines",
            coordinateSystem: "cartesian2d",
            z: 1,

            effect: {
                show: true,
                smooth: false,
                period: 3,
                trailLength: 0,
                symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
                color: "rgba(55,155,255,0.5)",
                symbolSize: [12, 36]
                // delay:10
            },
            lineStyle: {
                normal: {
                    width: 1,
                    curveness: curveness,
                    color: "rgb(89,197,238)"
                }
            },
            data: linesData
        }
    ]
};