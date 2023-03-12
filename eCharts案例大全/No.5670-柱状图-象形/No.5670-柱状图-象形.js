var img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAABJCAYAAAC3tp9lAAAD/0lEQVRogcWazW4cRRDHf/th767Xjo0sZIdIRnyIoIBQzCkR5JJLThwi+R1yzCW3PAgnXoIX4I7Ee8AlIoqiEOGd5dDT2XJtVU/3uMf8pdHO9PR0/6aruqum7dGLt3/RQz8CPwN3gd+B58AffRqSGvd45gz4FbgHTICHwG/At/8HzEvgAGiAdXssgF+A0U3C3AIuBMSqPdbAfeDpTcJcAHsCommPeP7sJmGeiM41zAr4geBTg8NMgEcORCOOn24C5huCiTSEPn/cF2ZaUPe87UxrTZhF8fcBMAPel8KUjMzXbEZBHo363QG+KwUphbnrwFjH931gSsz0FbaZLJ33YMmGOSWsuhEm+oelNfDlkDCfApcdANKJz9q2L0tgcn3mDmFULttDnsvrRgB8XgJSAnPKVQeVECtx/q8o+6IUJtdMt9kExKhosvV2dRgS5oTw9hpGOrL2m8+GhtEgnkYEP6sOMwaO2Z7WEUaDxeuTIWAO2w6saarBIgzALnAE/F0T5oiNv8h1RvuItRB+MiSMVE6++3EuSC7MIRsTeaPj6XhoGBJAGq46zAFhZbVGQIOg6h3Vhjlks/p2+YmeVR/VhlkSRkbLm1ny/n5tmH38VMBaiWVZdZhlAgbS5hsTPn3f1YJZkDe1rXsQfK4KzLztwJtNKQja8lvAnzVgDshLHVNRfC8HJAdGziTr7T0TDQITZ5IXma1gORjMHoUZvqF5bsUcGO28VsqgEy35W21kFlzN8DylTDWrCWOFghItcivmzibvsySV28TrqiMTHdhLwlNrzIiw4zUhY9MgBTMhJNVW/psr6cRvrgMjA2TqS9L7VJHwyxownvNasydlrmUXSBdMjQVPttWpFMyctL90bRjJe9eGiTMpFyaVnGeFhC4YGbG9PDdVHlXNTF0dWWV6hHbJ2FbzYMaE/Vz9cO5IWFoCr/vAyJnkdeRF7uow0UQpmBxJ0E6/ScHo1MHK7lIQul5vmBiTJIzsRF7rOvpeVG+YGZvUoWsbxNtktIDnwD+lMLvk/51Aq+tLoQhm2jZm7fvm+IlVHiGXwKsSmDnbK69uNDe30XWTYcGCsUxUOr29+hPCYmqmJhbMDvmbQ55So7mHs/hZMBP8MKDPZYcSJFV/ngsTE+j4rwWl6vrUheAG5n0NM2Xz9+khNcfYs9Ew0V+GVhaMZ6LrBEtLU0Ka0uhCDZMTrb0Ei8Qzuu4MNToSZtw2tMrszOrcWiQtwBHBJVyY6LxS11lrcnRlAZQwMR5pWXsu0G0Ob9tNtjFNwawzOylxcAlgLRkfEvUIs+XZjrw3xLhOlcuycWxPjkyjKnqNwLap5DOp52TdRgGtpqKgUQ/oRrzGvQ6t+9ZLRI3+A7H/bkosrPrnAAAAAElFTkSuQmCC'
var img = 'data:image/png;base64,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'
option = {
    backgroundColor: '#031245',
    title: {
        text: '柱状图'
    },
    tooltip: {
        trigger: 'axis',

    },
    dataset: {
        dimensions: ['product', '进', '出'],
        source: [{
                product: '9.22',
                '进': 30,
                '出': 40,
                date: ['2020', '09', '22']
            },
            {
                product: '9.23',
                '进': 40,
                '出': 50,
                date: ['2020', '09', '23']
            },
            {
                product: '9.24',
                '进': 60,
                '出': 70,
                date: ['2020', '09', '24']
            },
            {
                product: '9.25',
                '进': 60,
                '出': 40,
                date: ['2020', '09', '25']
            },
            {
                product: '9.26',
                '进': 30,
                '出': 81,
                date: ['2020', '09', '26']
            },
        ]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: '#acdcf7',
            interval: 0
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(3,68,119,.5)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#034476',
                width: 1
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: 'rgba(3,68,119,.5)'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#034476',
                width: 1
            }
        },
        axisLabel: {
            color: '#acdcf7'
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'image://' + img,
            // data: [50, 35, 55, 35, 55, 30, 35],
            barWidth: '40%',
            barGap: '-40%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(84, 152, 227, 1)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(84, 152, 227, 1)' //  100%  处的颜色
                            }
                        ],
                        global: false //  缺省为  false
                    }
                }
            }
        },
        {
            type: 'pictorialBar',
            barCategoryGap: '20%',
            symbol: 'image://' + img1,
            // data: [20, 44, 34, 56, 77, 23, 65],
            barWidth: '40%',
            barGap: '-40%',
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: 'rgba(116, 245, 233, 1)' //  0%  处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(116, 245, 233, 1)' //  100%  处的颜色
                            }
                        ],
                        global: false //  缺省为  false
                    }
                }
            }
        }
    ]
};