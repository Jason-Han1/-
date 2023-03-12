    var icon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABDCAMAAABjnP3jAAAAilBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAADT09MAAAAAAAAAAAAAAAD////8/Pz5+fnr6+v8/Pzr6+vZ2dn09PTFxcX+/v719fX6+vrf39+5ubnDw8MSEhIrKytRUVF2dnZAQEDi4uLi4uLk5OTk5OT///+tdFIzAAAALXRSTlMABQgNFBwDNS4mCxEYIyAamisoMS364t9b57qWj3b0s6mec28rJhMNDKemZ2YvJtR9AAACMUlEQVRo3u2ZaW/iMBBAaTDdxI7tOCeF0vvaY/7/39sZJ2BgKyUrxNBKfh+RyHtMJkhJZl+Ja+LqzHjJ53rvTs5OX/Gp/n350DZwZu66h+X7vwmoT5YtMNEuE0w48n/cAiO3H0NB+P2cfioYZhDmD8yEs0ABydsNMHPzllDA4Jd/gJ3fEguGADm/B3bu5xIDhgGoFthpFY2gD5iLBthpxHwbIFUOFyBX8osE4ApYuAAWl4ACaAUuE0BLMAQs4AIsYkAMiAExIAbEgBgQA2JADIgB+wF3wE5zENABO+1+gF0BOytLAdt7ww2ws6F7w93d8Sv/M6LXg9tz8wzMPJsQQFuoH4GVR007uA2gEbz8AkZ+vtAAKMAXSBpB+dQBE91TSQOQ5N+NAAvSzapr4Mw03WqToj8MoN8CX+DSqvoxjQKOKCZ+sapS5/20AeFZsaQCozPn6jodpcLO4tiPH6aj1LVzmTbkl1d9QCgQmGC0zsYpHc6qOPDj73JlNo7WBvVi5w8FiU/IrV2MY2hWabHnT11GRx7H2tzrk+APBZiglJhATqerTIvgL2msuZiAUqgP/lBACYnEiAlgJu1sXQz+mrZK4JEnINFO+utT3prJfmczKiB/1m+V/I+3Zie+N8QGJazJ3Bpg7TJjhUL7ae8Np+Mr+wJdrtel7v3+2DMWqIGuGkG7SNsnaKtZ7McFIrc2F+z+UKAUXVfM/lDg/zr8Rc3tDwUefn9I8PDrQ4Jn9q35C4Ev35B0ZZBdAAAAAElFTkSuQmCC';

    var mubiaoData = [250000, 250000, 250000, 250000];
    var wanchengData = [160000, 300000, 100000, 120000];

 var wanchengData_1 = function(){
    var data = [];
        for (var i = 0; i < mubiaoData.length; i++) {
            if (wanchengData[i] > mubiaoData[i]) {
                data.push(mubiaoData[i]);
            } else {
                data.push(wanchengData[i]);
            }
        }
        return data; 
 }();

    var chaochuData = function() {
        var data = [];
        for (var i = 0; i < mubiaoData.length; i++) {
            if (wanchengData[i] > mubiaoData[i]) {
                data.push(wanchengData[i] - mubiaoData[i]);
            } else {
                data.push('');
            }
        }
        return data;
    }();


    option = {
        backgroundColor: '#fff',
        grid: {
            left: 0,
            top: '20%',
            bottom: 60,
            right: 0,
        },
        legend: {
            data: ['目标业绩', '完成业绩', '超出业绩'],
            align: 'left',
            right: 0,
            textStyle: {
                color: "#434e79",
                fontSize: 14,
                fontWeight: 400
            },
            itemWidth: 14,
            itemHeight: 14,
            itemGap: 35
        },
        tooltip: {
            trigger: "axis",
            padding: [8, 10],
            backgroundColor: 'rgba(0,0,0,0.5)',
            axisPointer: {
                type: "shadow",
                textStyle: {
                    color: "#fff"
                }
            }
        },
        xAxis: [{
            type: 'category',
            data: ['椒江团队', '临海团队', '温岭团队', '黄岩团队'],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#434e79",
                    fontSize: 16,
                    fontWeight: 400
                }
            }

        }],
        yAxis: [{
            show: false
        }],
        series: [{
            name: "目标业绩",
            type: "bar",
            barMaxWidth: 30,
            z: 0,
            itemStyle: {
                normal: {
                    color: "#EDF1FF",
                    label: {
                        show: true,
                        textStyle: {
                            fontSize: 16,
                        },
                        position: "top",
                        distance: 10
                    }
                }
            },
            data: mubiaoData
        }, {
            name: "完成业绩",
            type: "bar",
            silent: true,
            barMaxWidth: 30,
            barGap: '-100%',
            z: 1,
            itemStyle: {
                normal: {
                    color: "#6987F1",
                    label: {
                        show: true,
                        position: 'top',
                        distance: 0,
                        color: '#000',
                        fontSize: 16,
                        backgroundColor: {
                            image: icon,
                        },
                        padding: [10, 15, 20, 15],
                        borderRadius: 100
                    }
                }
            },
            data: wanchengData_1
        }, {
            name: "超出业绩",
            type: "bar",
            barMaxWidth: 30,
            barGap: '-100%',
            z: 2,
            itemStyle: {
                normal: {
                    color: "#ff3030",
                    label: {
                        show: true,
                        position: 'top',
                        distance: 0,
                        color: '#434e79',
                        fontSize: 16,
                        backgroundColor: {
                            image: icon,
                        },
                        padding: [10, 15, 20, 15],
                        borderRadius: 100
                    }
                }
            },
            data: chaochuData
        }]

    };