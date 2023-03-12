var sourceData = {
    '摄像机一': ['08:00-12:00', '13:00-17:00'],
    '摄像机二': ['08:00-9:00', '10:00-11:00', '13:00-17:00'],
    '摄像机三': ['07:00-19:00'],
    '摄像机四': ['08:00-08:30', '09:00-09:30', '10:00-10:30'],
    '摄像机五': ['00:00-05:00', '12:00-17:00']
}

function getInvalidTime(sourceData) {
    var newObj = {};
    for (let key in sourceData) {
        let newTimeAry = [];
        // 补零
        if (sourceData[key].length && sourceData[key][0].indexOf('00:00') == -1) {
            newTimeAry.push('00:00-' + sourceData[key][0].split('-')[0])
        }

        for (let i = 1; i < sourceData[key].length; i++) {
            let start = sourceData[key][i].split('-')[0];
            // var end = sourceData[key][i].split('-')[1];
            let newstr = sourceData[key][i - 1].split('-')[1] + '-' + start;
            newTimeAry.push(newstr);
        }
        //补24点
        if (newTimeAry[newTimeAry.length - 1].split('-')[1] != '24:00' && sourceData[key][sourceData[key].length - 1].split('-')[1] != '24:00') {
            // 判断最晚时间
            let sourceend = sourceData[key][sourceData[key].length - 1].split('-')[1];
            let newend = newTimeAry[newTimeAry.length - 1].split('-')[1];
            if (new Date('2020 ' + sourceend).getTime() < new Date('2020 ' + newend).getTime()) {
                newTimeAry.push(newTimeAry[newTimeAry.length - 1].split('-')[1] + '-24:00')
            } else {
                newTimeAry.push(sourceData[key][sourceData[key].length - 1].split('-')[1] + '-24:00')
            }
        }
        newObj[key] = newTimeAry;
    }
    return newObj;
}

var invalidTime = getInvalidTime(sourceData);

function dateToNum(str) {
    var timesAry = str.split('-')
    var startTime = new Date('2020 ' + timesAry[0]);
    var endTime = new Date('2020 ' + timesAry[1]);
    var differ = endTime.getTime() - startTime.getTime();
    var hours = (differ / (3600 * 1000)).toFixed(2) //计算出小时数
    return hours;
}

function getseries(sourceData, invalidData) {
    let newseries = [];
    let keylength = Object.keys(sourceData).length;
    let keyindex = 0;
    for (let key in sourceData) {
        if (sourceData[key].length || invalidData[key].length) {
            if (invalidData[key][0].split('-')[0] == '00:00') {
                for (let i = 0; i < invalidData[key].length; i++) {
                    let obj1 = {
                        name: '无录制',
                        type: 'bar',
                        stack: key,
                        itemStyle: {
                            color: 'rgba(220, 220, 220, 0.8)'
                        },
                        data: []
                    }
                    obj1.data = new Array(keylength).fill(0);
                    obj1.data[keyindex] = dateToNum(invalidData[key][i]);
                    newseries.push(obj1);
                    if (sourceData[key][i]) {
                        let obj2 = {
                            name: '正常录制',
                            type: 'bar',
                            stack: key,
                            itemStyle: {
                                color: 'rgb(194,54,52)'
                            },
                            data: []
                        }
                        obj2.data = new Array(keylength).fill(0);
                        obj2.data[keyindex] = dateToNum(sourceData[key][i]);
                        newseries.push(obj2);
                    }
                    if (i == invalidData[key].length && i < sourceData[key].length) {
                        for (let j = i + 1; j < sourceData[key].length; j++) {
                            let obj3 = {
                                name: '正常录制',
                                type: 'bar',
                                stack: key,
                                itemStyle: {
                                    color: 'rgb(194,54,52)'
                                },
                                data: []
                            }
                            obj3.data = new Array(keylength).fill(0);
                            obj3.data[keyindex] = dateToNum(sourceData[key][i]);
                            newseries.push(obj3);
                        }
                    }
                }
            }

            if (sourceData[key][0].split('-')[0] == '00:00') {
                for (let i = 0; i < sourceData[key].length; i++) {
                    let obj1 = {
                        name: '正常录制',
                        type: 'bar',
                        stack: key,
                        itemStyle: {
                            color: 'rgb(194,54,52)'
                        },
                        data: []
                    }
                    obj1.data = new Array(keylength).fill(0);
                    obj1.data[keyindex] = dateToNum(sourceData[key][i]);
                    newseries.push(obj1);
                    if (invalidData[key][i]) {
                        let obj2 = {
                            name: '无录制',
                            type: 'bar',
                            stack: key,
                            itemStyle: {
                                color: 'rgba(220, 220, 220, 0.8)'
                            },
                            data: []
                        }
                        obj2.data = new Array(keylength).fill(0);
                        obj2.data[keyindex] = dateToNum(invalidData[key][i]);
                        newseries.push(obj2);
                    }
                    if (i == sourceData[key].length && i < invalidData[key].length) {
                        for (let j = i + 1; j < invalidData[key].length; j++) {
                            let obj3 = {
                                name: '无录制',
                                type: 'bar',
                                stack: key,
                                itemStyle: {
                                    color: 'rgba(220, 220, 220, 0.8)'
                                },
                                data: []
                            }
                            obj3.data = new Array(keylength).fill(0);
                            obj3.data[keyindex] = dateToNum(invalidData[key][i]);
                            newseries.push(obj3);
                        }
                    }
                }
            }


        }
        keyindex++;
    }
    return newseries;
}

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, a, b, c) {
            // console.log(params, a, b, c)
            var deviceName = params[0].name
            var recordTime = 0;
            var noRecordTime = 0;
            for(var i = 0; i < params.length; i++) {
                if(params[i].value > 0) {
                    if(params[i].seriesName == '无录制') {
                        noRecordTime += Number(params[i].value)
                    } else if(params[i].seriesName == '正常录制') {
                        recordTime +=  Number(params[i].value)
                    }
                }
            }
            // console.log('正常录制',recordTime)
            // console.log('无录制',noRecordTime)
            return deviceName + '<br/>' + '正常录制时长:' + recordTime + 'h' + '<br/>' + '无录像时长:' + noRecordTime + 'h'
        },
        show: true
    },
    legend: {
        data: ['正常录制', '无录制'],
        selectedMode: false
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        max: 24,
        splitNumber:23,
        splitLine: {
            lineStyle: {
                 type: 'dashed'
            }
        }
    },
    xAxis: {
        type: 'category',
        data: ['摄像机一', '摄像机二', '摄像机三', '摄像机四', '摄像机五']
    },
    series: getseries(sourceData, invalidTime)
};