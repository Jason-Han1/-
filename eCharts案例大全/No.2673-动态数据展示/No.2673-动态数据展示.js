// 播放
var dot8543E0 =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABYUlEQVQ4T42TfXXCQBDEZxwgIShoHDR7BooEJMRBQQHUAQ5KDbDUAVXQSMDB9k16xzvyKPT+guzb337MLDF57t4CeAHQRcRcYZLfAI4APszsVKew/uPufUQsSa6UYGZnxd19loE9yXczeyt5F4C77wGczEzJfz53V7w1s8XYXa7QA5g9Si7UDDmb2ZaaOSJ2KSXNPj53F117WJvZcKudw+FwJNkLoJbUukYoAH2bRUSXZ17fWLaKtMykZV0pQ7XEo35HxEKLnRRp1LkAQ0qpmahRVJB0GklxgRqSl2LK/RcgQ5YRscqAEVwAWsa9EToAGwCf6qLyxu8Id5ao7T/LjdMClVJtkXGbUlKlooIcKdf19eKquBTaC1wbqTEzGerhc/ctgGE0UkWVD3Q0Ms94Aze01028AphfWXnSugyyIflVvCEZI+JJcJI7VS45V9eYlyNLL+RCAMUfA0lJp+Qra/8Av9T2fUP5hw0AAAAASUVORK5CYII=';
// 暂停
var dotffa897 =
    'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABAElEQVQ4T62T0VHDQAxEVx2kBDrAJbCuIHQQKohLSAeYDkwFUIFFCaECUgIdbEYenecgiYch8df5TvsknfYMV372W+/uKwBbAGsATZ7vAbwDeCH5XWt+ANx9A+AZwCuAgWQI4e4B6iStzawjORTIDAixpN7MHorwTHWNpI8aMgGy7C8AvCQusKgmIXfRTgHsAKxIdlVglNpngnmd/9HCgeRuAozjuDezTZ3d3UWyJJjX5U4kDW3bNmcDMugioD6/DeAWLVx3iTFGSYclDyyOMS/lT0YK2wB4IhnWxomV041v6fvayltJjznuSXwCqFxZfH8fe5I+zSxE/eJj+s/LPgJF2tcRaVQF3AAAAABJRU5ErkJggg==';
// 每屏展示数据条数，从0开始
var zoomLength = 9;
var iconImg = dotffa897;
var temp = null;
function initEchartIcon() {
    if (temp) {
        clearInterval(temp);
    }
    iconImg = iconImg == dotffa897 ? dot8543E0 : dotffa897;
}
option = {
    color: ['#3398DB'],
    title: {
        text: 'Beijing AQI',
    },
    tooltip: {
        trigger: 'axis',
    },
    toolbox: {
        right: 30,
        itemGap: 15,
        feature: {
            myTool1: {
                show: true,
                title: iconImg === dotffa897 ? '暂停' : '播放',
                icon: iconImg,
                onclick() {
                    initEchartIcon();
                },
            },
            saveAsImage: {
                title: '下载图片',
            },
        },
    },

    dataZoom: [
        {
            type: 'inside',
            startValue: 0,
            endValue: zoomLength, // 每屏展示数据条数，从0开始
        },
        {
            type: 'slider',
            startValue: 0,
            endValue: zoomLength,
        },
    ],
    xAxis: {
        data: [
            '2014-07-14',
            '2014-07-15',
            '2014-07-16',
            '2014-07-17',
            '2014-07-18',
            '2014-07-19',
            '2014-07-20',
            '2014-07-21',
            '2014-07-22',
            '2014-07-23',
            '2014-07-24',
            '2014-07-25',
            '2014-07-26',
            '2014-07-27',
            '2014-07-28',
            '2014-07-29',
            '2014-07-30',
            '2014-07-31',
            '2014-08-01',
            '2014-08-02',
        ],
    },
    yAxis: {
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            name: 'Beijing AQI',
            type: 'bar',
            data: [156, 140, 133, 186, 182, 106, 119, 68, 54, 82, 90, 134, 188, 194, 159, 159, 169, 244, 199, 163],
        },
    ],
};
var currentIndex = -1;
var e = zoomLength; // 结束
var s = 0; // 开始
temp = setInterval(function () {
    var dataLen0 = option.series[0].data.length;
    var seriesCurrentIndex = 0;
    for (let index = 0; index < option.series.length; index++) {
        const element = option.series[index].data;
        if (element[currentIndex + 1]) {
            seriesCurrentIndex = index;
            break;
        }
    }
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: seriesCurrentIndex,
        dataIndex: currentIndex,
    });
    var highlightIndex0 = (currentIndex + 1) % dataLen0;

    currentIndex = highlightIndex0;
    if (highlightIndex0 <= zoomLength || e > dataLen0) {
        e = zoomLength;
        s = 0;
    } else {
        e += 1;
        s += 1;
    }
    myChart.dispatchAction({
        type: 'dataZoom',
        startValue: s,
        endValue: e,
    });
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: seriesCurrentIndex,
        dataIndex: currentIndex,
    });

    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: seriesCurrentIndex,
        dataIndex: currentIndex,
    });
}, 2000);
