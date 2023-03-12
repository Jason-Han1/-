
var title;
var subTitles = [];
var date = [];
var data0 = [];
var data1 = [];

// 获取json数据
$.getJSON("/asset/get/s/data-1513235757916-HkLNHiyGf.json", function(dataJson){
    //title = dataJson.title;
    //subTitles = dataJson.subTitles
    title = '接口调用总量(次数)';
    subTitles[0] = '当前值';
    subTitles[1] = '基线值';
    var datas0 = dataJson.datas[0];
    var datas1 = dataJson.datas[1];
    
    var idx = 0;
    for(var key0 in datas0) {
        var now = new Date(parseInt(key0));
        var dt = [now.getHours() + 1, now.getMinutes()].join(':');
        if(idx === 0 || dt === '0:0') {
            dt = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
        }
        date.push(dt);
        data0.push(datas0[key0]);
        idx ++;
    }
    for(var key1 in datas1) {
        data1.push(datas1[key1]);
    }
    
    myChart.setOption({
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: title,
        },
        legend: {
            left: 'left',
            data:[subTitles[0], subTitles[1]]
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date
            
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 80
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [
            {
                name:subTitles[0],
                type:'line',
                data: data0
            },
            {
                name:subTitles[1],
                type:'line',
                smooth:true,
                data: data1
            }
        ]
    });
});
