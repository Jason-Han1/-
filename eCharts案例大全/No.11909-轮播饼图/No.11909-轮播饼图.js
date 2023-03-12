var animationTime = 3000; //动画定时时间
var index = 0; //第几个显示
//数据
var datas = [{
        name: '第一人民医院',
        value: '220'
    },
    {
        name: '第二人民医院',
        value: '182'
    },
    {
        name: '第三人民医院',
        value: '191'
    },
    {
        name: '第四人民医院',
        value: '234'
    },
    {
        name: '第五人民医院',
        value: '290'
    },
    {
        name: '第六人民医院',
        value: '310'
    },
]

//动画函数
var animation = function(chart, seriesIndex) {
    if (!seriesIndex) seriesIndex = 0; //默认是0

    var options = chart.getOption();
    options.series[seriesIndex].data.forEach(function(data, i) {
        options.series[seriesIndex].data[i].label.emphasis = {
            show: index == i
        };
        options.series[seriesIndex].data[i].labelLine.emphasis = {
            show: index == i
        };
    });

    chart.setOption(options);
    if (index > 0) {
        chart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: index - 1
        });
    }

    chart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: index
    })
    index++
    if (index >= options.series[seriesIndex].data.length) {
        index = 0
    }
};

//数据组装
var getPieData = function(dataMap) {
    var dataArr = [];
    datas.forEach(function(data, i) {
        dataArr.push({
            name: data.name,
            value: data.value,
            label: {
                normal: {
                    show: false,
                    position: 'outside'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            }
        });
    });

    return dataArr;
};

option = {
    title: {
        text: '轮播饼图',
        subtext: '100%',
        textStyle: {
            color: '#ff9d19',
            fontSize: 40,
        },
        subtextStyle: {
            fontSize: 30,
            color: ['#ff9d19']
        },
        x: 'center',
        y: 'center',
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '65%'],
        selectedMode: 'single',
        label: {
            normal: {
                formatter: '{b}{c}({d}%)\n',
            },
            emphasis: {

            }
        },
        data: getPieData(datas)
    }]
};


var myechart = echarts.getInstanceByDom(document.getElementById("chart-panel"));
myechart.setOption(option);
function downloadFile(content, fileName) { //下载base64图片
    var base64ToBlob = function(code) {
        var parts = code.split(';base64,');
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for(let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], {
            type: contentType
        });
    };
    var aLink = document.createElement('a');
    var blob = base64ToBlob(content); //new Blob([content]);
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", true, true); //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);
    aLink.click();
};


setTimeout(function() {
    downloadFile(myechart.getDataURL({
        type: 'png',
        backgroundColor:'rgba(21,52,122, 1) '
    }), 'qqq')
}, 1000);
//animation(myechart);
setInterval(function() {
   // animation(myechart, 0);
    
    /*
      setTimeout(function() {
          downloadFile(myechart.getDataURL({
            type: 'png',
        }));
    }, 1000);*/
    
    
}, animationTime)