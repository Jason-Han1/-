barColor=['#8F6EE8','#7F6EE8','#6E74E8','#6A8FF1','#62A4F0','#6AC5F1','#62D4E3','#73DFD9']
personFloorName=[{value:10,name:'F1'},{value:20,name:'F2'},{value:40,name:'F3'},{value:45,name:'F4'}]
option = {
    title: {
        text: '圆环柱状图'
    },
    backgroundColor:'#fff',
    polar: {
            radius:['20%','90%']
        },
        angleAxis: {
            show: false,
            clockwise:false,
            // min: function(value) {
            //     return 5
            // },
            max: function(value) {
                return value.max+2;
            }
        },
        radiusAxis: {
            type: 'category',
            min: function(value) {
                return -1
            },
            max: function(value) {
                return value.max;
            },
            axisLabel: {
                interval: 0,
                color: function(value, index) {
                    return barColor[index - 1];
                },
                fontSize: 10,
                align:'left',
                margin:'-10'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            splitLine: {
                show: false
            },
            z:20,
            data: [...personFloorName.map(d => d.name)],
        },
        series: [{
                type: 'bar',
                coordinateSystem: 'polar',
                barWidth: 10, // 10条数据的时候 10
                barGap:10,
                showBackground: true,
                backgroundStyle: {
                    color: "#F2F2F2"
                },
                itemStyle: {
                   color: function(params) {
                      var idx=params.dataIndex;
                        return barColor[idx]
                    },
                },
                roundCap: true,
                data: personFloorName
            },
            {
                type: "custom",
                coordinateSystem: 'polar',
                renderItem: function(params, api) {
                    var values = [api.value(0), api.value(1)];
                    var coord = api.coord(values);
                    return {
                        type: 'text',
                        position: [3 * Math.sin(coord[3]), 3 * Math.cos(coord[3])],
                        rotation: coord[3] + Math.PI / 2,
                        origin: [coord[0], coord[1]],
                        style: {
                            text: api.value(1),
                            fill: '#333',
                            fontSize: 10,
                            textAlign: "left",
                            textVerticalAlign: "middle",
                            x: coord[0]+10,
                            y: coord[1]
                        }
                    };
                },
                data: personFloorName
            }
        ]
};