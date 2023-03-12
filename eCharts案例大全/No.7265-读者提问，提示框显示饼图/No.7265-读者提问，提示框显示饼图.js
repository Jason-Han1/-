option = {
    title: {
        text: '读者提问，提示框能否显示饼图'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    tooltip: {
        trigger: 'axis',
        formatter: params => {
            // 根据触发提示框的数据，准备饼图数据
            let pieData = [];
            for (let i in params) {
                pieData.push({
                    name: params[i].seriesName,
                    value: params[i].value,
                    color: params[i].color
                });
            }

            // 通过准备好的饼图数据，显示饼图（通过加一定时延，保证容器先覆盖完…）
            initTooltipPie(pieData);
            return `${params[0].axisValue}<br/><div id="tooltipPie" style="width: 100px;height:100px;"></>`;
        }
    },
    series: [{
        type: 'bar',
        stack: 'stack1',
        data: [220, 182, 191, 234, 290, 330, 310]
    }, {
        type: 'bar',
        stack: 'stack1',
        data: [120, 122, 91, 324, 113, 130, 410]
    }, {
        type: 'bar',
        stack: 'stack1',
        data: [42, 32, 29, 72, 31, 63, 101]
    }]
};


// 饼图 option 生成函数
pieOption = data => {
    console.log(data);
    return {
        series: {
            type: "pie",
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            data: data
        },
        animation: false
    };
};

// 显示饼图的函数
initTooltipPie = (data, delay = 1) => {
    setTimeout(function() {
        if (document.getElementById('tooltipPie') !== null && document.getElementById('tooltipPie').innerHTML === '') {
            if (typeof tooltipChart !== 'undefined') {
                return tooltipChart.setOption(pieOption(data));
            }
            var tooltipChart = echarts.init(document.getElementById("tooltipPie"));
            tooltipChart.setOption(pieOption(data));
        }
    }, delay);
};




/**
 * 因为每次弹出/移动提示框，都会覆盖提示框 DOM，所以只能每次都重新渲染饼图
 * （暂且使用了个笨办法 setInterval，10 毫秒判断处理一次 = =b，有时间再想想更好的方式）

setInterval(function(){
    if (document.getElementById('tooltipPie') !== null && document.getElementById('tooltipPie').innerHTML === '') {
        if (typeof tooltipChart !== 'undefined') {
            return tooltipChart.setOption(pieOption);
        }
        var tooltipChart = echarts.init(document.getElementById("tooltipPie"));
        tooltipChart.setOption(pieOption);
    }
},10);
 */