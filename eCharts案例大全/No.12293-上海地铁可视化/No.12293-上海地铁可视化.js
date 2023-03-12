var uploadedDataURL = "/asset/get/s/data-1547704761530-PZeTnGn7R.json";
const symbol = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEd0lEQVRYR8WXa2hcRRTH//+7DxKXaENaRK1N0odGY7K59w6KplAf9EMRxFT0Q1tUBD+IRVsUi22plaoUfOPjkyJSURStD4qCUlpEMejcu7vBJEKgttUq1iKYkqR6d++RWXbDZnM3u4mUzLd755wzvznzn5kzxDyb7/tpEVkJYCmAZSJyGsBPzc3NI93d3X/NMxzYiIPWehWAe0luAdBRy0dEfiZ5REQOt7W1Hezs7DxXL/6cAENDQ61BEOwRka0k4/WCVfWfIrnTtu0DJKWWb00ArfWtJA8AaJ3nwNXm34nIbUqpM1FxZgEMDw8np6amniX5ULWDiEyRfB/Aico+mimK2AAuBeBG+J20LGuD4zgj1X2zADzP+wjAxkpDETlJcldTU9Pn9YSmte4yqQewGYBVjiMif5O83nXd0RnwlR9a6wdIvl5F+bWIbFBKTZr/2Wz22kKhMAjMFLCI/O667nKSobHzff/qMAzfIWkyU2wi8isAu3I5pjOQy+WuCYLAJ5moAMjF4/H+dDo9Uf6XzWYvy+fzRljTsysF/00ptakSPpfLLQ+CYIRkSwXE90qp68rf0wBa629I9lel/mal1JH/I0LP814BsLUq7mal1LvmXxFAa30nyQ9mCYTsINlaKBReXAiEUuom3/d3iMj+KoBjruteQbJQBPA871sAN0Sotz0Wi60Mw3BBWXBdl1EAxZmTmxzHeY+jo6Ntk5OTf1aLqrSu5w1ARD5VSt1uCO8TkTejUiwi5w0AwL+pVGopPc97FcCDiwAAy7LWGoCDAAZqASilTi5EgGWfWhooLfFd1FoPkpzel1VqbT/PANtMBnIAehcpA4+bDHxJcv1iAJC8xwC8TfLuRQJYb5ZgL4An5gLIZDI32rZ9tFExZjKZJQCW2LZ9fC4RxuPxiw2Aub91jeDp0tVsALe7rvtSIxCe5x0H0G5Zll0oFO4guTvilPWVUm75LjhBckVE8GdE5AeSH4vIgFLqkwYBsiLSkUgk7Hw+b3yiRP6k67p7y3eBKSCejqA8Z1nWRsdxvmhk4EobrXWC5GsA7o+IGySTya7e3t5jRYBcLpcKgsBkoS3COA9glTkPjF5EZF0dmJdNpnzf3y0i+2po63ml1KPFS6ls4HneNgCzrl0R2aOU2meEFYZhI0tw1KS2VFsOkbyyCuJ0KpVa3dXVdXYGgIjEfN8/DKByhoOO4/SXy6wFLEMPSSPwZMk3tCzrlsodNaMoHRsbu3B8fNwDsBrARDKZvKqnp+eX0vvg4UYBTO2nlHrD2Huetx3AC6Wzv5jNyjizqmKttdkNX5Hc77ruW6UguwA81SgAgDAWi63o6+s7VfI3Z4jvOM4j1Y+UyIeJ1voiAIdIrp3HoJGmInLWsqwtjuN8FmUw18vIbKOdIvIYyQsWAGLKc3PM73Acx1Rcka3u41RrfQlJcyANkDSZqdcmROTDRCLxXDqd/rGecV2AcgARsTKZjBOG4TqSl4vIMvM8J2lewGdE5A/LsnRLS8uhNWvW/FNv4HL/f4hdX+MrfW87AAAAAElFTkSuQmCC';

//image://http://xxx.xxx.xxx/a/b.png

function formatLngLat(str) {
    if (str.includes(';')) {
        const strArr = str.split(';');
        const lnglats = strArr.map(lnglat => {
            const ll = lnglat.split(',');
            return [parseFloat(ll[0]), parseFloat(ll[1])];
        });
        return lnglats;
    } else {
        const ll = str.split(',');
        return [parseFloat(ll[0]), parseFloat(ll[1])];
    }
}


fetch(uploadedDataURL).then(res => res.json()).then(json => {
    console.log(json);
    const data = [],
        names = [],
        colors = [];
    let stationData = [];
    json.forEach(lines => {
        lines.forEach(line => {
            const buslines = line.buslines;
            buslines.forEach(busline => {
                const {
                    polyline,
                    name,
                    color,
                    stations
                } = busline;
                const lnglats = formatLngLat(polyline);
                data.push({
                    coords: lnglats,
                    name: name,
                    lineStyle: {
                        normal: {
                            // color: color,
                            width: 3
                        }
                    }
                });
                names.push(name);
                if (colors.length > 0) {
                    if (color != colors[colors.length - 1]) {
                        colors.push(color);
                    }
                } else {
                    colors.push(color);
                }
                const sts = stations.map(station => {
                    const {
                        location,
                        name
                    } = station;
                    const lnglat = formatLngLat(location);
                    return {
                        value: lnglat.concat(20),
                        name: name
                    }
                })
                stationData = stationData.concat(sts);
            });
        });
    });
    const option = getOption();
    data.forEach(line => {
        const serier = {
            name: line.name,
            type: 'lines',
            coordinateSystem: 'bmap',
            polyline: true,
            data: [line],
        };
        option.series.push(serier);
    });

    option.series.push({
        name: '地铁站',
        type: 'scatter',
        coordinateSystem: 'bmap',
        symbol: symbol,
        symbolSize: 15,
        data: stationData
    });
    names.push('地铁站');
    option.legend = {
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: names,
    };
    option.color = colors;
    console.log(option);
    myChart.setOption(option);
});




function getOption() {
    return {
        title: {
            text: 'ShangHai SubWay'
        },
        tooltip: {},
        bmap: {
            center: [121.44780229094795, 31.27769952977698],
            zoom: 12,
            roam: true,
            mapStyle: {
                'styleJson': [{
                        'featureType': 'water',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#031628'
                        }
                    }, {
                        'featureType': 'land',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000102'
                        }
                    }, {
                        'featureType': 'highway',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'arterial',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#0b3d51'
                        }
                    }, {
                        'featureType': 'local',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'railway',
                        'elementType': 'geometry.stroke',
                        'stylers': {
                            'color': '#08304b'
                        }
                    },
                    {
                        'featureType': 'subway',
                        'elementType': 'geometry',
                        'stylers': {
                            'lightness': -70,
                            'visibility': 'off'
                        }
                    },
                    {
                        'featureType': 'building',
                        'elementType': 'geometry.fill',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'all',
                        'elementType': 'labels.text.fill',
                        'stylers': {
                            'color': '#857f7f'
                        }
                    }, {
                        'featureType': 'all',
                        'elementType': 'labels.text.stroke',
                        'stylers': {
                            'color': '#000000'
                        }
                    }, {
                        'featureType': 'building',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#022338'
                        }
                    }, {
                        'featureType': 'green',
                        'elementType': 'geometry',
                        'stylers': {
                            'color': '#062032'
                        }
                    }, {
                        'featureType': 'boundary',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#465b6c'
                        }
                    }, {
                        'featureType': 'manmade',
                        'elementType': 'all',
                        'stylers': {
                            'color': '#022338'
                        }
                    }, {
                        'featureType': 'label',
                        'elementType': 'all',
                        'stylers': {
                            'visibility': 'off'
                        }
                    }
                ]
            }
        },

        series: []
    };
}