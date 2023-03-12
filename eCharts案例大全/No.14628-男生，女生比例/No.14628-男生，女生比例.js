var spirit = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABBCAYAAADCHcS9AAAB20lEQVRYR+2YgTEEQRBF/0VABogAEZABGZABIkAEhEAGRIAIjgyIABFQT81sze7N7vScvS2luqu27upupv/0356ePz3TxDabGE8OODrjTmmX0nVJ55IOJW1KepZ0J+nSyn0NpYA9SNrJOAd41wJaA3gt6WTA6ZkkxgxaDeC8J7oI8CRpf0zAD0lrAw5fCgv6mVoTIclxMAB4K+l4zAhJFmjN2WeI7nVMQHzxjm4kbSSOoZLIyNSi1VCaOiNatgnv1QQUJy8LWIykb0AfIFXkKlSUZZwTOUnG3uR7YzlAwEgOKPutAbaVguYAS+lfu4jWdskBvo8UXVxYq87mAL9qQzCMb3D+HCAFmepxZIgiDuFspBCkxcEcIZMfwzloxcQ5c/Zyu6FEqQPmaHZKF1hJN74njSfNgrJYVaVJz1QUXXOY5wBRZRRrBqLS4p2ippZy2cEPwplMvyiJKGQG8oAHUC4xqSENT8NdYrvzXwyChfK0tKpFteUA4z2ieyqAPejTAaHIKU2lhCeN6QbsSeNJ06rtXku9lk52AN+HlspKAHmP3U5i7I0ijugQR3sLneJewWXZFkym1YUKQ1zxiYDCEEk0ZVFpdCv4fbAVZgW0SsTiOAcsUlQ74P9T+g3Ig6RCZY47YwAAAABJRU5ErkJggg==';
var spirit1 = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAABBCAYAAADCHcS9AAACd0lEQVRYR+2Y/U0cMRDF31UAVACpgKSCQAWECoAKklQA6SBUAFQAHYRUAFQAVEDSQfRDHslyPB6b+5CAtXR/3K133nrmzZu3N9OK12zFeJoAF57xKaXvM6VfJO1JepB0KunPSBpGSQPYZQZwK+nTMgE5zVoBcCTpvBd05IQfJd1UAl9IOlwG4I6kX5XAvyVxrWuNnHBL0n0l6g9JJ11o0rB4X0v6XAT/kBjbhTlyQgKuSwJ0O0UfIgz3jALaKSAQfTjUgyOA1G8zyBnkCVfPCctm94LSi6S4uXoASV10OgPZTTV2QSNArxW8gGjrt9YRI8DedBpGKAIRIA19HNWluN6MGQFao/9NbWD9l2OU15geTJHqigBtOiDQkKd2WvZAFhP2phi0AHPCfE8CzeCtLeTNdLZJnBZgThhOQJ957bGf2InONodyCzAnzIakpwZ5mBjo7Ne0x43bAjTC3KWnr83CvB3IwFn6wRWAFmAPYQyQvbDT6kjNf9Yy4gGWhKGe5Rws40Ec6ofncW2HB1gS5qpinkpA2gFv0ySOB5gTJqd8S3TMo1qvVmN7gDlhAM+9qAeKjlI321sljgcI4w4kQXdWr57SPigSdax6HQ+QnsJGQALqFxHGTp278KqeRlpKoJrb9tIamqoIcBrAI2LyvDdKac1pRwZgIQM4Asmvv3gAEyR/SeENydoDreS7zUfrV+4hK3yqK0ppflMud6gI3+0BuuN0b0wApjgToEuyKaUTS6c+/K89Xk1bMIJwaEutoZnjR0lYDxPz8DU7z+tISrkPJ4epwgqyGFG4s+4/iEYBRwbx3PNwbrAeT7MQkHlqOPcDvP0a/gPu+opCKScqbAAAAABJRU5ErkJggg==';
var maxData = 878+1221;

option = {
    tooltip: {
    },
    xAxis: {
        max: maxData,
        splitLine: {show: false},
        offset: 10,
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        axisLabel: {
            margin: 10
        }
    },
    yAxis: {
        data: ['girl', 'boy'],
        inverse: true,
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#999',
                fontSize: 16
            }
        }
    },
    grid: {
        top: 'center',
        height: 200,
        left: 70,
        right: 100
    },
    series: [{
        // current data
      
        type: 'pictorialBar',
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        symbolClip: true,
        symbolSize: 30,
        data: [{
            value:1221,
            symbol: spirit1
        },{
            value:878,
            symbol: spirit
        }],
        markLine: {
            symbol: 'none',
            label: {
                normal: {
                    formatter: 'max: {c}',
                    position: 'start'
                }
            },
            lineStyle: {
                normal: {
                    color: 'green',
                    type: 'dotted',
                    opacity: 0.2,
                    width: 2
                }
            },
            data: [{
                type: 'max'
            }]
        },
        z: 10
    }, {
        // full data
        type: 'pictorialBar',
        itemStyle: {
            normal: {
                opacity: 0.2
            }
        },
        label: {
            normal: {
                show: true,
                formatter: function (params) {
                    return (params.value / maxData * 100).toFixed(1) + ' %';
                },
                position: 'outside',
                offset: [10, 0],
                textStyle: {
                    color: 'green',
                    fontSize: 18
                }
            }
        },
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '5%',
        
        symbolSize: 30,
        data: [{
            value:1221,
            symbol: spirit1
        },{
            value:878,
            symbol: spirit
        }],
        z: 5
    }]
};


