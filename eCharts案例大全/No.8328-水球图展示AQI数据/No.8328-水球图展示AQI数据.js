var aqiData = 120;
option = {
    title: {
        text: "AQI",
        right: "45%",
        bottom: "25%",
        textStyle: {
            color: "#fff",
            fontSize: 24,
            fontWeight: "normal"
        }
     },
    series: [{
            type: 'liquidFill',
            animation: true,
            waveAnimation: true,
            data: [0.75, 0.70],
            color: [weakColor(aqiData), weakColor(aqiData)],
            amplitude: 8,
            radius: '80%',
            label: {
                normal: {
                    formatter: function () {
                        return aqiData;
                    },
                    textStyle: {
                        fontSize: 48,
                        color: '#fff',
                        fontWeight: "normal"
                    },
                    position: ['50%', '50%']
                }
            },
            outline: {
                itemStyle: {
                    borderColor: '#aaa4a4',
                    borderWidth: 1,
                    color: 'none',
                    shadowBlur: 0,
                    shadowColor: "#fff"
                },
                borderDistance: 0
            },
            itemStyle: {
                normal: {
                    backgroundColor: '#fff',
                    shadowBlur: 0,
                    shadowColor: "#fff"
                }
            },
            backgroundStyle: {
                color: '#fff'
            }
        }]
};
//实时AQI波浪的另一个颜色
function weakColor(aqiData) {
    var color = aqiData > 0 && aqiData <= 50 ? "rgba(97,216,0,.7)"
        : aqiData > 50 && aqiData <= 100 ? "rgba(204,178,26,.7)"
            : aqiData > 100 && aqiData <= 150 ? "rgba(245,166,35,.7)"
                : aqiData > 150 && aqiData <= 200 ? "rgba(241,47,28,.7)"
                    : aqiData > 200 && aqiData <= 300 ? "rgba(156,13,113,.7)"
                        : aqiData > 300 ? "rgba(99,4,69,.7)" : "#C7C7CB";
    return color;
}
