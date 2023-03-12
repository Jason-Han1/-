var data = [100, 60, 50, 30];
var paperDataURI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAALCAMAAAAtOq8OAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC2VBMVEUAAAAvuP4uuP4rt/4qtv4ptv4otv4mtf4mtf4mtf4mtf4mtf4mtf4mtf4mtf4mtf4ntv4otv4ptv4qt/4st/4uuP4xuf40uv43u/47vP4+vf5Cv/5GwP4wuf4st/4ptv4ktf4itP8htP8gs/8fs/8ntv4qt/4uuP4yuf42uv46vP4/vf5Dv/5HwP4wuf4rt/4ntv5GwP5Jwf5Mwv4uuP5Mwv4Sb88VacsGUb0GUr0GUbwGUr4GULwGU74GULwGU74GVsIFYssFXMcFWMIGVL8GUr4GVsEFWsUFX8kFZc4Ea9MEcdkDgeYDe+EEddwEbtYEaNEFY8wFXccFXsgFZM0EatIEcNgDdt0DfOIDgugCiO0CjfECkvYBlvkBmfwBnP4Bnf8Bnf8BnP4BmfwBlvkCkvUCjfECiOwDgucDfOIEdt0Eb9cEadIes/8esv8fs/8htP8itP8jtP4ltf4ktf4csv8bsv8asf8Zsf8dsv8mtf4qtv4uuP4yuf43u/49vf5Bvv4qt/4gs/8Ysf8otv4st/42u/47vP5FwP5Jwf4gmesmsfszuv44u/5AvP07rvQmiN0IWcINa88Ugd4ZlOodo/MgrPohsf0rt/4tt/0us/strfcpofAikOYWedgMZMoGVcEGVL8FWMMFXccGZM0GbNMJd9sMguIOjeoSlvAUnfQWovcYp/oZqvwarP0brf4crv4crf4brP0aqvwZp/oYo/gWnvUTlvAPjeoMguMId9wGbtUFZc4FYMoFW8UGVsEGU78FV8IFXMYFYcsEZ9AEbdUEc9sDeeADgOUDheoCi+8CkPQClPgBmPsBm/0BnP8Bnf8BnP4Bmv0BmPoClPcCj/MCiu8Df+UDed8EctoEbNQFZs8FYcoFW8YDeN8Df+QDhOoCiu4Bl/oDhusDgOYDeuADd94DfeMDg+kCie4CjvICk/YBmvwBmfsClfgCkfQCjPACh+sAAAAD26dMAAAAbXRSTlMABA4lSWF9mKi2wcrS2NrZ1M7Fu66gi2xUNRUJAQk5dc3p8Pb8/vnx7t25j1MZTcH74oU4z6z45vHR9dXmxVK89/7bhz0PPG2fweT5/u/QroVPIgUQMEZbfJalrrS1tra2tbWxqp2Jak08HAcBG/W5UQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAF6SURBVBjTY2BgYGBkYmZhZWPn4OTi5uHl4xcQFBIWERUTl5CUkpZhAAFZOXkOBUUlZZXcPBDIzc0vKCwqVlVT19DU0tbRBarQ0zcoKczPKy0rLy+vqKgAkmWllbkFhVXVNbV19Q2GRsYMJo1VhU0gFRUVzSAAUlVWmV9Y0tJa29be0NFpymDW1V0MVFMJNgYMyirz8guKgKb09Nb39U8wZ7CYOGnylKnTphc05efn5wJxU0FhYUlVy4yZs2bPmTtv/gJLBquFixYvWbps+YqVq1avWbtu/YYNGzdt3rJ12/YdO3ft3rN3335rBpsDBw8dPnL02PETJ0+dPnP23PkLFy9dvnL12snrN27eun3n7kFbBjt7h7t7b9+6ee/+g4dXrzy6dPHC+XNnz5w+9fjJ02NHjzg6ObswMLi6uXt4enk/e/7i5avXj95cvHDh3Nt37z989PH18w8IDGKAgOCQ0LDwiMio6JjYuPiExKTklNS09IzMrOwckCwAugyuqfO6EDUAAAAASUVORK5CYII=';
option = {
    title: {
        text: '',
        subtext: '基础数据库',
        top: '-12px',
        textStyle: {
            fontWeight: 'normal', //标题颜色
            color: '#00d6fd'
        },
        subtextStyle: {
            color: '#00d6fd'
        },
        // x: "center"
    },
    legend: {
        show: false,
        x: '40%',
        y: '5',
        icon: 'circle',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6'
        }
    },
    grid: {
        left: '2%',
        right: '5%',
        top: '30%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            margin: 15,
            textStyle: {
                color: '#00d6fd',
                fontSize: 10
            },
            color: "#00d6fd"
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        data: ["原辅料", "供应", "检验检测", "从业人员"]
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    markLine: {
        z: -1
    },
    animationEasing: 'elasticOut',
    // animationDelayUpdate: function(idx) {
    // 	return idx * 200;
    // },
    series: [{
        type: 'pictorialBar',
        symbolSize: [15, 4],
        symbolOffset: [0, 1],
        z: 12,
        itemStyle: {
            color: "#00d98b"
        },
        // name: 'all',
        hoverAnimation: true,
        label: {
            show: true,
            position: 'top',
            formatter: '{c}',
            fontSize: 10,
            color: '#00d6fd'
        },
        barMinHeight: 10,
        data: [{
            value: 1000,
            symbol: 'image://' + paperDataURI,
            symbolRepeat: true,
            symbolSize: ['50%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-20%',
            // animationDelay: function(dataIndex, params) {
            // 	return params.index * 3000;
            // }
        }, {
            value: 10,
            symbol: 'image://' + paperDataURI,
            symbolRepeat: true,
            symbolSize: ['50%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-20%',
            animationDelay: function(dataIndex, params) {
                return params.index * 3000;
            }
        }, {
            value: 244,
            symbol: 'image://' + paperDataURI,
            symbolRepeat: true,
            symbolSize: ['50%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-20%',
            animationDelay: function(dataIndex, params) {
                return params.index * 3000;
            }
        }, {
            value: 255,
            symbol: 'image://' + paperDataURI,
            symbolRepeat: true,
            symbolSize: ['50%', '20%'],
            symbolOffset: [0, 10],
            symbolMargin: '-20%',
            animationDelay: function(dataIndex, params) {
                return params.index * 3000;
            }
        }],
        markLine: {
            symbol: ['none', 'none'],
            label: {
                show: false
            },
            lineStyle: {
                color: '#00d6fd',
                width: 0
            },
            data: [{
                yAxis: 280
            }]
        },
    }, {
        // name: 'all',
        type: 'pictorialBar',
        barGap: '-100%',
        symbol: 'circle',
        itemStyle: {
            color: '#185491'
        },
        silent: true,
        symbolOffset: [0, '50%'],
        z: -10,
        data: [{
            value: 1,
            symbolSize: ['50%', 10]
        }, {
            value: 1,
            symbolSize: ['50%', 10]
        }, {
            value: 1,
            symbolSize: ['50%', 10]
        }, {
            value: 1,
            symbolSize: ['50%', 10]
        }]
    }]
};