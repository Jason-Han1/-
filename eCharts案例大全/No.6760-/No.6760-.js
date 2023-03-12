const rightIcon =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAAx0lEQVQokZ3RvUoDYRCF4We/bPAnqKCSRrHxBsTS2/DGvCexsbYIKIKNFv4UEUMkZo9FdkFibDxwihnemQMzVZKCTexiDz2M8Yz3GjX2cdJ6HXe4xr0kgyRnSS6SjJM0SW6TnCcZ1uhjiFNsWegYR9goKBi0+Z0q7KBf2qLX+qdqlLI09UtlVfPfQP4CgmYF0CAd8ImPJWCCecEX3jBainvCtGCGR1ziBnNcWfxjUiXpYRsHOLQ40Ase8Fol6S651rpqt04x+wZZQEmC4eTFRAAAAABJRU5ErkJggg==';
const floor1Base64 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABWElEQVRIS7WV3VHCQBRGz9UCxAqkA8nM8p4S6ECsQFKBdqBWgCWkBN/NDNoBdIDvwjp7IZDEyO5myL5mc893/74Vej7Sc3yiAHbBgA3PwARYY8llTHZKZByg4A24awR8FcPsP8gfgC2YYHlEGACZGPLyZ1uwBG4awdZiuI4BHINYPmVM4gF8i1Exractg6rKLzGMKoAzlQieQFXNaiXaNfnl0GTIT9XfCYtqcpeRVoD9IEWYA8MuQXRk4b6abRlnB2ifjlhW6zSVABsbre2+GETHHB4Atx+5H3BJwpYUqxvsO+9Aur+kGXkBTpWWccGIjW7yrY9yqL9BggF7SDmmTbtoX7JYQGXhgnrmsu+SgevFNKRMUQDtwQ9z5GgdPkgQgLgpqjHDAD6Z1e9ChlUfuwJWYhiec5PVtvXV2zLlglwSllUvcjPefExC9a+azlvzotAoXe71bte/6DaDGbAHtLYAAAAASUVORK5CYII=';
const floor2Base64 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVRIS9WVMUpDQRCGv9n3yAVygjTpBFOIeoucIuk8gI0K4gHExmAdWw9gZScpEohVGluxFAMBkzcyT98jiMH1ORHdeuf75t/ZZYU1Lyn4t2fUqVH38OmMh509noyVCwye1tj1gBeMlxk3JnkT9Gim0PQUzGGy3WHyNwQCDWCq8BibMjqBwTPl9H1g1yJcxoiiBYuMjSCcLHcu8KXoR4JCZiICFyjTj0fnIjBopuwngfFaBKrchYRj9wQGVuh/1nmRJPqIlm9RDPjbAiuwm5QGnhXu3d9BLLDykP+HoGqXMXXlhxOzucqeXDA451DgoApgVY3C0VY35/6CYNhjc6EMPRMkQqvVYVTOwCRzpe0hSYUrg5efvgd0FeMVw1GgGUUDYwsAAAAASUVORK5CYII=';
const floor3Base64 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB5ElEQVRIS7WWQVLCQBBFfyelW7mBcAJJGfZwA7gBVglbvYF4AmVnBavkBnID2AMFNxBugFsQ2+okkxpCZpIszIqq6ek3/fv3DIR//qhI/vs5N4lwM/JpKPH9JT+yg9nIo3XefiOgu+LK5S8ewOgCqEqiwKcwvr9gjhNvQBjvHQzHHu2yYJmA/oLbAF5UYrUxAxAuMbBjRue9QbM05AzQW3KXGB9ZpzEBAHyzi2aWZCcA0dohTE26GgBJ8t6K6/yDil5JAhDNL474IqBSAnCSHEdMCdjtXXiqJwmgP+cBCE82V6QqyEoeHY7xHDRoID8TQG/BGwKuCwJ2SnORJT65Xvkm8KmWACSIjljleVpVIPHSUEPyqAgXnsSEFdico0MVINyTffIknAl3o1saR4NTQH990PKS630oBfhltMSCsaQyVFdGWeNGq9GXyf3M64FMLFy0lP50hA3SCXyaRD0o2GR1LRSBOC5qbx6JM6OviE1VbF4lDGxHPoUXZKlB0yW0QZSDTgBlqzDJJeCDi/rZVaH1wu6OlBPSlciyfquarutXqwUtkLQTMx+ceJDEYta7SWv6Fi7aue9Bmi4TzoSuCSRuAWFwcDAp9WSmQfGcVMGoh2uEteNiLT7PG85C/yryktjW/wATKiIoouMKggAAAABJRU5ErkJggg==';
const floor4Base64 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACTElEQVRIS5WW3XXaQBCFv13xHncQUgHosHoOrsB2BbYriF1BSAVxKoipIEoFIc9ajqCCOBUEv1tszmglhEA/MG/orO7dmXvnCkVfJckUpT4D0+LoBohxbk4ULfpeV50HrH0CPhVn1sAC58YoNQbe5URBcE8YCmljtRNYew38ANYEwTVh+LJDSNML3t5ilPqYkxpzeR6BAGTZH+AvQTBtvaG1K2CEUvdMJs9NJM0dLJd3OPcduMGYuHWMaTosLjLHmLvTCawV0CuM6dZIEK3d4NyKKCpNUONpBkiSRT7f0whWOLc5j6B0j3OXnVb0Wv0Dzh5R6aAYY25aNUiSWbEjrVp12dQ7BB4w5tsRSZqOybJfgCIIhm1Oayfw7Yv1rnKvy1JpLaSw3YpjvGt6xtjtEh8TsmwXRx049xuY9cVFM4FvX4CHwGsRESu03rDdrhgMNoSh76YsuYzEx2Cw3t/6Y4JqyV5RaobWz62bLGN0bkSWCU4ZikK5061OUIFL/rRHhEAslw84JykrJF/yRnzq+pJnUTSrCPy8xRX94JU9K7BDAvkdBB8qAmslLS+6LJejeX3S2vybOvCEj57At/u1KxX3xCyXq+IQAq1fCvtWz7WOPYG/PRgjrumuMqfqpyS76l8359aSxGrXslKPTCbyBeuuMmn7zu1ELscTBOGRt5tADgVuIyrwFNZKHNyeFM1eZIkQWbL3HU38xBgJTNROYOee8k3tKq3n+ZZ6J8nM5cN/WDWbiwZyI5n9bd9Y2R9j9Z78wxgh2aR1fKjjf8FYG/qphGJhAAAAAElFTkSuQmCC';


option = {
    backgroundColor: '#FFF',
    tooltip: {},
    grid: {
        left: 180,
        right: 80,
    },
    xAxis: {
        type: 'value',
        show: false,
    },
    yAxis: [{
        type: 'category',
        data: ['直播收视时长占比', '点播收视时长', '直播收视时长', '收视时长'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 12,
            color: '#666666',
        },
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            inside: false,
            textStyle: {
                color: '#666666',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular'
            },
            formatter: function(val) {
                return `${val}`
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: [5000,20000,15000,24000]
    }],
    series: [{
            type: 'bar',
            barGap: '-100%',
            itemStyle: {
                color: '#FFFFFF',
                barBorderRadius: 4,
            },
            barWidth: 12,
            z: 1,
            data: [100, 100, 100, 100],
        },
        {
            type: 'bar',
            itemStyle: {
                color: '#00cccc',
                barBorderRadius: 4,
            },
            barWidth: 12,
            z: 3,
            data: [{
                value: 5000,
                itemStyle: {
                    color: '#66ccff'
                }
            }, {
                value: 20000,
                itemStyle: {
                    color: '#cc9900'
                }
            }, {
                value: 15000,
                itemStyle: {
                    color: '#ffcc00'
                }
            }, {
                value: 24000,
                itemStyle: {
                    color: '#00cccc'
                }
            }],
            tooltip: {
                trigger: 'item',
            },
        },
        {
            type: 'pictorialBar',
            symbol: floor1Base64,
            symbolPosition: 'start',
            symbolSize: [20, 20],
            symbolRotate: 0,
            symbolOffset: [-140, 0],
            data: [{
                    value: 5000,
                    symbol: floor3Base64
                },
                {
                    value: 20000,
                    symbol: floor2Base64
                },
                {
                    value: 15000,
                    symbol: floor1Base64
                },
                {
                    value: 24000,
                    symbol: floor4Base64
                }
            ],
        }
    ],
};