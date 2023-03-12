Date.prototype.Format = function (fmt) {
    //author: meizz
    var o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return fmt;
};
let dataX = [];
let dataY = [];
function points(y1, y2, date) {
    let time = 30 * 60;
    if (y1 === y2) {
        for (let i = 0; i < time; i++) {
            let max = y1 + 0.001;
            let min = y1 - 0.001;
            let n = new Date(date.getTime() + i).Format('yyyy-MM-dd hh:mm:ss');
            dataX.push(n);
            dataY.push(Math.round((Math.random() * (max - min + 0.5) + min) * 100) / 100);
        }
    } else {
        //若x1≠x2，则斜率k=(y2－y1)/(x2－x1)
        let k = (y2 - y1) / (time - 1);
        //上下浮动范围
        let scope = Math.abs(y1 - y2) * 0.001;
        for (let i = 0; i < time; i++) {
            // 根据斜率，计算y坐标
            let y = k * (i - 1) + y1;
            let max = y + scope;
            let min = y - scope;
            let n = new Date(date.getTime() + i * 1000).Format('yyyy-MM-dd hh:mm:ss');
            dataX.push(n);
            dataY.push(Math.round((Math.random() * (max - min + 0.5) + min) * 100) / 100);
        }
    }
}

// let jsonData = [
//     { load: 26.51687216, date: '2021-12-01 00:00:00' },
//     { load: 23.83746577, date: '2021-12-01 00:30:00' },
//     { load: 23.83746577, date: '2021-12-01 00:01:00' },
// ];
let jsonData = [];
let nowDate = new Date('2021-12-01 00:00:00');
for (let i = 0; i < 48; i++) {
    jsonData.push({
        load: Math.round((Math.random() * (30 - 20 + 0.5) + 20) * 100) / 100,
        date: new Date(nowDate.getTime() + i * 30 * 60 * 1000).Format('yyyy-MM-dd hh:mm:ss'),
    });
}
if (jsonData.length > 1) {
    for (let i = 1; i < jsonData.length; i++) {
        points(jsonData[i - 1].load, jsonData[i].load, new Date(jsonData[i - 1].date));
    }
    dataX.push(jsonData[jsonData.length - 1].date);
    dataY.push(jsonData[jsonData.length - 1].load);
}
option = {
    color: ['#22DCB8', '#F47100'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999',
            },
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    legend: {
        // orient: 'horizontal',
        icon: 'rect',
        show: true,
        right: 0,
        top: 25,
    },
    xAxis: {
        type: 'category',
        data: dataX,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#999',
            textStyle: {
                fontSize: 12,
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#F3F4F4',
                type: 'dashed', // y轴分割线类型
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
    },
    dataZoom: [
        {
            type: 'inside',
            start: 0,
            end: 10,
        },
        {
            start: 0,
            end: 10,
        },
    ],
    series: [
        {
            name: '数据',
            type: 'line',
            smooth: true,
            symbol: 'none',
            data: dataY,
        },
    ],
};
