    // 颜色
    var lightBlue = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
        }, {
            offset: 1,
            color: 'rgba(0, 192, 255, 1)' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    }
    // 纹理
    var piePane = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAKElEQVQ4jWP8//8/AwXgPxMluhkYGBhGDRg1YNQAKhnAwsDAQFF+BgBtSwUd6uvSywAAAABJRU5ErkJggg=='
    var piePatternImg = new Image();
    piePatternImg.src = piePane;

    // 指定图表的配置项和数据
     option = {
        backgroundColor: '#ffffff',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                var res = '<div><p>&nbsp;&nbsp;单位：' + params[0].name + '</p></div>'
                res = res + '<p>作业面积：' + params[0].data + '</p>';
                res = res + '<p>耕地面积：' + params[1].data + '</p>';
                return res;
            },
        },
        legend: {
            x: '37%',
            y: '5%',
            show: true,
            textStyle: {
                fontStyle: 'normal',
                color: "#999999",
                fontfamily: 'MicrosoftYaHei-Bold',
                fontweight: 'normal',
                fontstretch: 'normal',
                fontSize: 16,
            },
            data: ['作业面积', '耕地面积']
        },
        grid: {
            top: '20%',
            left: '5%',
            right: '5%',
            bottom: '12%',
        },
        xAxis: {
            type: "category",
            axisLabel: {
                interval: 0,//强制显示所有信息
                color: "#B8B8B8",
                fontSize: 12
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "black",
                    width: 1,
                    type: "dashed"
                },
                show: true
            },
            data: ['二九零','七星','八五三']
        },
        yAxis: {
            axisLabel: {
                color: "black",
                fontSize: 14
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#384267",
                    type: "dashed"
                }
            },
            axisLine: {
                lineStyle: {
                    color: "#384267",
                    width: 1,
                    type: "dashed"
                },
                show: true
            }
        },
        series: [{
            name: '作业面积',
            type: 'bar',
            itemStyle: {
                color: lightBlue
            },
            barWidth: '40%',
            data: [10,20,30],
            z: 10
        }, {
            name: '耕地面积',
            type: 'bar',
            barGap: '-100%',
            itemStyle: {
                color: {
                    image: piePatternImg,
                    repeat: 'repeat'
                },
                opacity: 0.05
            },
            barWidth: '40%',

            data: [20,30,50],
            z: 5
        }, {
            name: '耕地面积',
            type: 'bar',
            barGap: '-100%',
            itemStyle: {
                color: '#536dfe',
                opacity: 0.2
            },
            barWidth: '40%',

            data: [20,30,50],
            z: 5
        }],
        backgroundColor: "#fff",
    };