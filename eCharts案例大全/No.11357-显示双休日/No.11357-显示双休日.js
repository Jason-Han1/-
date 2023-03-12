option = {
    backgroundColor: "#ffffff",
    grid: {
        left: '10%',
        right: '10%',
        bottom: '50%',
        top: '20%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ["2019-04-23","2019-04-24","2019-04-25","2019-04-26","2019-04-27","2019-04-28","2019-04-29","2019-04-30","2019-05-01","2019-05-02","2019-05-03","2019-05-04","2019-05-05","2019-05-06","2019-05-07","2019-05-08","2019-05-09","2019-05-10","2019-05-11","2019-05-12","2019-05-13","2019-05-14","2019-05-15","2019-05-16","2019-05-17","2019-05-18","2019-05-19","2019-05-20","2019-05-21","2019-05-22"],
        axisLabel: {
            formatter: function (value, index) {
                var date = new Date(value);
                var texts = [(date.getMonth() + 1), date.getDate()];
                return texts.join('-');
            }
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [1244,1159,1103,1041,256,738,1101,747,208,192,212,246,800,1202,1170,1086,1150,1009,262,237,1117,1136,1094,1115,1020,270,264,1072,1188,1190],
        type: 'line',
        symbol: "circle",
        smooth: 0.3,
        itemStyle: {
                color: "#00a0e9"
        },
        lineStyle: {
            color: "#00a0e9"
        },
        markArea: {
            
                data: [
                    [{xAxis: '2019-04-28'},{xAxis: '2019-04-29'}],
                    [{xAxis: '2019-05-04'},{xAxis: '2019-05-05'}],
                    [{xAxis: '2019-05-11'},{xAxis: '2019-05-12'}],
                    [{xAxis: '2019-05-18'},{xAxis: '2019-05-19'}],
                    [
                        {
                            name: "五一劳动节",
                            xAxis: '2019-05-01',
                            itemStyle: {
                                type: "linear",
                                color: "rgba(255, 255, 0, 0.15)",
                            }
                        },{xAxis: '2019-05-04'},

                    ],
                ],
                label: {
                    position: "insideBottom",
                    fontSize: 9,
                    fontWeight: "lighter",
                    color : "#999"
                },
                itemStyle: {
                    type: "linear",
                    color: "rgba(200, 200, 200, 0.15)",
                }
            }
    }]
};
