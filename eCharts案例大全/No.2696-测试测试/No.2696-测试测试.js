var getname = ['1次', '2次', '3次及以上']; //数据点名称
var getxlmc = ['全屋定制类', '木门类', '橱柜类'];
var getvalue = [3466, 714, 214]; //全屋定制类
var getvalue1 = [748, 215, 90]; //木门类
var getvalue2 = [316, 37, 4]; //橱柜类

var getzb = [76.51, 73.91, 50.12]; //全屋定制类
var getzb1 = [16.51, 22.26, 21.08]; //木门类
var getzb2 = [6.98, 3.83, 0.94]; //橱柜类
function multi_bubbleSort(obj) {
    let data0 = obj.data0; //横坐标数组
    let data = new Array(data0.length).fill(0); //定义一组与横坐标数组相同大小的且全部为0的数组，用来存储堆积柱状图的和
    let len = obj.data0.length; //横坐标数组长度
    for (let k = 0; k < len; k++) {
        for (let m = 0; m < obj.data1.length; m++) {
            data[k] = Number(data[k]) + Number(obj.data1[m][k]); //求和，用来排序
        }
    }

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (Number(data[j]) < Number(data[j + 1])) {
                //相邻元素两两对比
                let temp = data[j + 1]; //元素交换
                data[j + 1] = data[j];
                data[j] = temp;
                let te = obj.data0[j + 1]; //元素交换
                obj.data0[j + 1] = obj.data0[j];
                obj.data0[j] = te;
                for (let m = 0; m < obj.data2.length; m++) {
                    let tem = obj.data2[m][j + 1];
                    obj.data2[m][j + 1] = obj.data2[m][j];
                    obj.data2[m][j] = tem;
                }
            }
        }
    }
    return obj;
}

let obj = {
    data0: getname,
    data1: [getvalue, getvalue1, getvalue2],
    data2: [getvalue, getvalue1, getvalue2],
};

let multi_obj = multi_bubbleSort(obj);

option = {
    backgroundColor: '#000',
    grid: {
        top: '15',
        right: '150',
        left: '100',
        bottom: '15',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        backgroundColor: 'rgba(21, 64, 92, 0.5)',
        formatter: function (params) {
            var str = ''; //声明一个变量用来存储数据
            str +=
                '<span style="color:rgba(255, 255, 255, 1);font:13px bold;">' +
                params[0].name +
                '<br>' +
                params[0].seriesName +
                ':&nbsp;&nbsp;' +
                params[0].value +
                '次&nbsp;&nbsp;' +
                getzb[params[0].dataIndex] +
                '%</br>' +
                params[1].seriesName +
                ':&nbsp;&nbsp;' +
                params[1].value +
                '次&nbsp;&nbsp;' +
                getzb1[params[1].dataIndex] +
                '%</br>' +
                params[2].seriesName +
                ':&nbsp;&nbsp;' +
                params[2].value +
                '次&nbsp;&nbsp;' +
                getzb2[params[2].dataIndex] +
                '%</br>';

            return str;
        },
    },
    legend: {
        type: 'scroll',
        icon: 'circle',
        right: '10',
        top: '0',
        data: getxlmc,
        itemGap: 20,
        itemWidth: 11,
        itemHeight: 11,
        textStyle: {
            fontSize: '13',
            color: '#A9C1E5',
        },
    },
    yAxis: [
        {
            show: true,
            inverse: true,
            data: multi_obj.data0,
            axisLabel: {
                color: '#C5DCFF',
                textStyle: {
                    fontSize: 14,
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    xAxis: [
        {
            axisLabel: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    //animation: false,
    series: [
        {
            type: 'bar',
            name: '全屋定制类',
            data: multi_obj.data2[0],
            barWidth: '10px',
            stack: '投诉情况',
            label: {
                show: false,
                position: 'right',
                color: '#FFFFFF',
                fontSize: 15,
                offset: [5, 0],
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1,
                        0,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#065ADA', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#22CFF5', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            z: 50,
        },
        {
            type: 'bar',
            name: '木门类',
            data: multi_obj.data2[1],
            barWidth: '10px',
            stack: '投诉情况',
            label: {
                show: false,
                position: 'right',
                color: '#FFFFFF',
                fontSize: 15,
                offset: [5, 0],
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#2CFFBA', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1B856D', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            z: 40,
        },
        {
            type: 'bar',
            name: '橱柜类',
            data: multi_obj.data2[2],
            barWidth: '10px',
            stack: '投诉情况',
            label: {
                show: false,
                position: 'right',
                color: '#FFFFFF',
                fontSize: 15,
                offset: [5, 0],
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        1,
                        0,
                        [
                            {
                                offset: 0,
                                color: '#FF7E7C', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#FF6061', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
            z: 30,
        },
    ],
};
var series = option['series'];
var fun = function (params) {
    var datavalue = 0;
    var datasum = 0;
    for (var i = 0; i < series.length; i++) {
        datavalue += series[i].data[params.dataIndex];
        datasum += getvalue[i] + getvalue1[i] + getvalue2[i];
    }
    return datavalue + '次 ' + ((datavalue / datasum) * 100).toFixed(2) + '%';
};

if (series[series.length - 1]) {
    series[series.length - 1]['label']['show'] = true;
    series[series.length - 1]['label']['formatter'] = fun;
}

myChart.on('legendselectchanged', function (object) {
    let one = object.selected.全屋定制类;
    let two = object.selected.木门类;
    let three = object.selected.橱柜类;

    //获取option对象
    let option1 = this.getOption();
    //清空需要重新渲染的数据
    option1.yAxis[0].data = [];
    option1.series[0].data = [];
    option1.series[1].data = [];
    option1.series[2].data = [];

    //定义一个对象，data0：X轴坐标数组；data1：二维数组，存legend为true的series数组；data2：二维数组，存储所有的series数组
    let obj = {
        data0: getname,
        data1: [],
        data2: [getvalue, getvalue1, getvalue2],
    };
    //判断legend图例是否为true，是就给对象obj的data1追加相应的series数组
    if (one) {
        obj.data1.push(getvalue);
    }
    if (two) {
        obj.data1.push(getvalue1);
    }
    if (three) {
        obj.data1.push(getvalue2);
    }
    //调用排序方法，返回排序好的对象
    let multi_obj = multi_bubbleSort(obj);
    //给上面清空的数据添加值
    option1.yAxis[0].data = multi_obj.data0;
    option1.series[0].data = multi_obj.data2[0];
    option1.series[1].data = multi_obj.data2[1];
    option1.series[2].data = multi_obj.data2[2];
    var b = object.selected, //图例的选中情况，key是图例的name，value是true或false
        d = []; //选中的series的index列表
    for (var key in b) {
        if (b[key]) {
            //选中的图例
            for (var i = 0; i < series.length; i++) {
                var changename = series[i]['name'];
                if (changename == key) {
                    d.push(i); //选中的series的index列表
                }
            }
        }
    }

    var fn = function (params) {
        var datavalue = 0;
        var datasum = 0;
        for (var i = 0; i < d.length; i++) {
            for (var j = 0; j < series.length; j++) {
                if (d[i] == j) {
                    datavalue += series[j].data[params.dataIndex];
                    datasum += getvalue[i] + getvalue1[i] + getvalue2[i];
                }
            }
        }

        return datavalue + '次 ' + ((datavalue / datasum) * 100).toFixed(2) + '%';
    };

    for (var j = 0; j < series.length; j++) {
        series[j]['label']['show'] = false;
    }

    var l_s = series[d[d.length - 1]]; //选中的series的最后一个
    if (l_s != null && l_s != '' && l_s != undefined) {
        l_s['label']['show'] = true; //显示label
        l_s['label']['formatter'] = fn; //绑定formatter
    }
    myChart.setOption(option);
});
