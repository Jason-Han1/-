    function threeDot(str) {
        if (str.length <= 3) {
            return str;
        } else {
            var str1 = str.substring(0, 3);
            str1 += '...';
            return str1;
        }
    }
    option = {
        color: ['#20b1aa'],
        xAxis: {
            type: 'category',
            data: ['星期一 Monday', '星期二 Tuesday', '星期三 Wednesday', '星期四 Thursday', '星期五 Thursday', '星期六 Saturday', '星期日 Sunday'],
            triggerEvent: true,
            axisLabel: {
                interval: 0,
                rotate: 45,
                formatter: function(value) {
                    return threeDot(value)
                },
            }
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 90],
            type: 'bar',
            barWidth: 40
        }]
    };
    myChart.on("mouseover", function(event) {
        console.log(event.event.event.clientX)
        if (event.componentType === "xAxis") {
            $("<span class='title' style='position:fixed;border-radius:3px; padding:3px;background-color:#20b1aa;'></span>").appendTo($("body")).text(event.value).css({
                top: event.event.event.clientY,
                left: event.event.event.clientX + 20
            });
        }
    })
    myChart.on("mousemove", function(event) {
        if (event.componentType === "xAxis") {
            $(".title").css({
                top: event.event.event.clientY,
                left: event.event.event.clientX + 20
            });
        }
    })
    myChart.on("mouseout", function() {
        $(".title").remove();
    })