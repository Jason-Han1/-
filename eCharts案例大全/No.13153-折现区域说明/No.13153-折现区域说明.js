function profileDataGenerater() {
    var data = [[], [], [], []];
    while (data[0].length !== pointNumber) {
        data[0].push('柱号00+' + (data[0].length + 1));
        data[1].push(random(15, 20));
        data[2].push(random(25, 30));
        data[3].push(random(35, 40));
    }

    return data;
}

/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}

/**
 * 在设定的长度中随机取两个值
 * @return {Number[]} 返回在设定范围内的一个区间
 */
function randomSection() {
    var secLower = 0;
    var secUpper = 0;
    while (secUpper - secLower < 15) {
        secLower = Math.floor(Math.random() * pointNumber);
        secUpper = Math.floor(Math.random() * pointNumber);
        [secLower, secUpper] = secUpper < secLower ? [secUpper, secLower] : [secLower, secUpper]
    }
    return [secLower, secUpper];
}

function getSectionInfo(arrs) {
    var sectionData = [];
    var pointData = [];
    var data = arrs.slice(1);
    var cursor = arrs[0];
    var yMax = Math.floor(Math.max(...data[0], ...data[1], ...data[2]));
    var yLength = Math.floor(yMax * 0.25);
    var baseDif = 2;
    data.forEach((arr, idx) => {
        var [secLower, secUpper] = randomSection();
        var height = yMax + yLength * (idx + 1);

        pointData.push({
            name: cursor[secLower],
            value: [cursor[secLower], arr[secLower]],
        }, {
                name: cursor[secUpper],
                value: [cursor[secUpper], arr[secUpper]],
        });

        sectionData.push(
            [
                {
                    symbol: 'arrow',
                    name: `两个坐标之间的说明${idx + 1}`,
                    coord: [cursor[secLower], height]
                },
                {
                    symbol: 'arrow',
                    coord: [cursor[secUpper], height]
                }
            ],
            [
                {

                    symbol: 'none',
                    coord: [cursor[secLower], height + baseDif]
                },
                {
                    symbol: 'none',
                    coord: [cursor[secLower], height - baseDif]
                }
            ],
            [
                {

                    symbol: 'none',
                    coord: [cursor[secUpper], height + baseDif]
                },
                {
                    symbol: 'none',
                    coord: [cursor[secUpper], height - baseDif]
                }
            ]
        );


    });

    return [sectionData, pointData];
}


function profileOptionHandler({ data, sectionData, pointData }) {
    var COMMONSTYLE = {
        type: 'line',
        silent: true,
        animation: false,
        symbolSize: 0,
        hoverAnimation: false,
        lineStyle: {
            normal: {
                width: 1
            }
        }
    };
    var yMax = Math.floor(Math.max(...data[1], ...data[2], ...data[3]) * 1.25);
    var option = {
        title: {
            text: `黄河${data[0][0]}~${data[0][data.length - 1]}剖面图`,
            left: 'center',
            bottom: 20
        },
        grid: {
            bottom: 150
        },
        xAxis: [{
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                rotate: 90
            },
            data: data[0]
        }],
        yAxis: [{
            max: Math.floor(yMax * 1.5),
            axisLabel: {
                formatter: (value) => value.toFixed(2)
            }
        }],
        series: [
            Object.assign(
                {
                    markLine: {
                        silent: true,
                        animation: false,
                        label: {
                            normal: {
                                position: 'middle'
                            }
                        },
                        lineStyle: {
                            normal: {
                                color: "#626c91",
                                type: 'solid',
                                width: 1
                            },
                            emphasis: {
                                color: "#d9def7"
                            }
                        },
                        data: sectionData
                    }
                },
                COMMONSTYLE
            ),
            Object.assign(
                {},
                COMMONSTYLE,
                {
                    type: 'scatter',
                    data: pointData,
                    symbolSize: 10,
                    label: {
                        normal: {
                            show: true,
                            position: 'bottom',
                            formatter: function (params) {
                                console.log(params)
                                return params.data.name;
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'red',
                            opacity: 1
                        }
                    }
                }
            ),
            Object.assign(
                {
                    data: data[1]
                },
                COMMONSTYLE
            ),
            Object.assign(
                {
                    data: data[2]
                },
                COMMONSTYLE
            ),
            Object.assign(
                {
                    data: data[3]
                },
                COMMONSTYLE
            )
        ]
    }
    return option;
}

var pointNumber = 50;

var profileData = profileDataGenerater();

var [sectionData, pointData] = getSectionInfo(profileData);

var option = profileOptionHandler({
    data: profileData,
    sectionData: sectionData,
    pointData: pointData
});