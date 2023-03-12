var lineData = [{
    coords: [
        [20, 20],
        [80, 20],
        [80, 80],
        [20, 80],
        [20, 30],
        [70, 30],
        [70, 70],
        [30, 70],
        [30, 40],
        [60, 40],
        [60, 60],
        [40, 60],
        [40, 50],
        [50, 50],
        [50, 55],
        [48, 55],
        [48, 52],
        [42, 52],
        [42, 58],
        [58, 58],
        [58, 42],
        [32, 42],
        [32, 68],
        [68, 68],
        [68, 32],
        [22, 32],
        [22, 78],
        [78, 78],
        [78, 22],
        [20, 22],
        [20, 20]
    ]
}]

option = {
    backgroundColor: '#111',
    legend: [],
    xAxis: {
        show: false,
        type: "value",
        max: 100,
        min: 0
    },
    yAxis: {
        show: false,
        type: "value",
        max: 100,
        min: 0
    },
    series: [{
        name: "",
        type: "lines",
        coordinateSystem: "cartesian2d",
        z: 1,
        polyline: true, //开启多段线，默认false
        effect: {
            show: true,
            smooth: false,
            trailLength: 0,
            symbol: "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAhCAYAAADtR0oPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAB2ElEQVQ4T32USU7DQBBFbcKMAAFigcSSg3ADtmzZc0juwQ6JMA9hCBAG81/Rv9W2HEp6cae7fk1tuW6appLVCWwmPTEOw0H2ww8CHHEaiLmERTh9ic/0bBBwiNOiWE7MCwynsXgVH2KCYFYLnNfFhtgSiMj8Lu4TIzFGQLQ1sS12xZFA8CZuxYk4FVdiRDmwIBDtiH1xIA7FsdgTZF4SA5xJTcNE3RSeio1gq4I+a08DAaWtiBhfMpqmP0T0mgXlaL/ZSMY4icx+3JMFRKUUnozPNhHs+TzuwBtEJiJztzEpAlBaXBwCR0bAIZdkQ2xBBC4FbJLhWdhehAUEzBn4A9SMkw0xe87QKolNDh+FjTUZyEzAXJKzcMA7Y0PgDFNLehC2O9HbQ5mBHnDAeEvLKYUA448z8EozTvZ4W8sessAZEHBZ3AWi8h6ikq6ASGSgrCfRvbj8LiFgk0MEzJ9psfaU8Gm9fGVJRKdhMljQyoCx6ZIYLSN1hmhYtEpik5LIgPNNWpdNt0pik2hEZZyXad1bkpt2D0S/EGUPvSW5Bz4pQ0E5UzN4Sjhdi3Pxb9NEcQbqPxNuGEGYv94Iux9ll1ESH2M9wywyWDj9LWOdM9hKZxsOyamqfgG1ZQ8JFbfSTwAAAABJRU5ErkJggg==",
            symbolSize: [20, 60],
            constantSpeed: 600
        },

        lineStyle: {
            width: 2,
            color: "#00fffc",
            type: "dashed",
            curveness: 0
        },
        data: lineData
    }]
};