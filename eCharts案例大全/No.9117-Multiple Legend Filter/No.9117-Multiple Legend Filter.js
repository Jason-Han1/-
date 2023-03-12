
var each = echarts.util.each;
var reduce = echarts.util.reduce;

var _dataZoomIcon = 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z';

var _statDataDuration = {
    datasetSource: [
        ['#', 'insert => load-url', 'load-url => page-start', 'page-start => ob-start', 'ob-start => declare-base', 'declare-base => compile-base', 'compile-base => creat-base', 'ob-start => content-loaded', 'page-start => page-finished', 'ob-start => all-script-end', 'ob-start => first-paint', 'ob-start => first-contentful-paint', 'insert => first-contentful-paint', 'ob-start => resource1', 'ob-start => resource2', 'ob-start => resource3', 'ob-start => resource4'],
        ['worker & img(avg) [DeviceHigh] ', 74.3, 256.1, 406.1, 1394.6, 27.1, 22.6, 1622, 1845.2, 1750.1, 4201.4, 4248.7, 4866.6, 4088.4, 3974.6, 4051.3, 3937.8],
        ['worker & img(min) [DeviceHigh] ', 58.2, 142.9, 124.5, 719.2, 2.1, 20.2, 692.6, 920.7, 734.5, 2125.1, 2068.2, 2584.3, 1826.6, 1814.7, 1953.2, 1893.1],
        ['worker & img(max) [DeviceHigh] ', 93.4, 408.2, 779.7, 2429.5, 98.7, 28.6, 2509.9, 2985.1, 2893.4, 5964.3, 6031.7, 7019.8, 5624.4, 5754.7, 5623.6, 5747.4],
        ['no-worker & img(avg) [DeviceHigh] ', 71.2, 300.5, 987.1, NaN, NaN, NaN, 1057.5, 2077.3, 1203.8, 1658.8, 1654.8, 3021.6, 1590.3, 1504.6, 1526.3, 1558.4],
        ['no-worker & img(min) [DeviceHigh] ', 63.4, 184.2, 554.8, NaN, NaN, NaN, 247.6, 807, 259.6, 686.1, 785.5, 1633.4, 483.7, 554, 484.6, 587.3],
        ['no-worker & img(max) [DeviceHigh] ', 92, 414.7, 1760, NaN, NaN, NaN, 4183.4, 4717.2, 4397.9, 5219.3, 5071, 6151.8, 5111.4, 5095.6, 5127.9, 5052.5],
        ['worker & no-img(avg) [DeviceHigh] ', 68.3, 271.8, 583, 1169.6, 10, 23.9, 1189, 1890.7, 1188.5, 2854.9, 2699, 3583.4, NaN, NaN, NaN, NaN],
        ['worker & no-img(min) [DeviceHigh] ', 53.2, 155.5, 141, 311.4, 1.2, 19, 340.1, 842.7, 429, 2326.1, 2382.1, 2738.7, NaN, NaN, NaN, NaN],
        ['worker & no-img(max) [DeviceHigh] ', 94.7, 572.8, 988.8, 2302.7, 18.4, 70.9, 2230.8, 3202.2, 2230.8, 4153.4, 4234.1, 5009.4, NaN, NaN, NaN, NaN],
        ['no-js & img(avg) [DeviceHigh] ', 75.9, 272.7, 470.2, NaN, NaN, NaN, 121.4, 700.7, 201.8, 552.8, 468.1, 1392.5, 241.3, 260, 286.2, 278.8],
        ['no-js & img(min) [DeviceHigh] ', 51.3, 167.5, 267.9, NaN, NaN, NaN, 56.2, 489, 80.6, 311.1, 319.9, 1215.5, 99.8, 127.2, 139.9, 129.3],
        ['no-js & img(max) [DeviceHigh] ', 117.9, 433.1, 1016.4, NaN, NaN, NaN, 243.6, 1127.2, 307, 1153.3, 1145.1, 2117.5, 655, 726.2, 714.5, 741],
        ['no-js & no-img(avg) [DeviceHigh] ', 74.5, 271.6, 539.3, NaN, NaN, NaN, 92.8, 747.6, 161.1, 307.8, 326.9, 1305.6, NaN, NaN, NaN, NaN],
        ['no-js & no-img(min) [DeviceHigh] ', 39.6, 148.8, 239.5, NaN, NaN, NaN, 74.1, 364.5, 146.9, 261.2, 253.4, 1013.9, NaN, NaN, NaN, NaN],
        ['no-js & no-img(max) [DeviceHigh] ', 126.1, 375.3, 1068.4, NaN, NaN, NaN, 138.5, 1282.5, 195.8, 450.9, 447.8, 1628.2, NaN, NaN, NaN, NaN],
        ['worker & img(avg) [DeviceMiddle] ', 60.1, 81.6, 146.5, 271, 1.2, 15.6, 282.5, 434.4, 339.8, 1035.1, 953.3, 1344.3, 855.7, 879.6, 868.3, 886.2],
        ['worker & img(min) [DeviceMiddle] ', 47.7, 51.5, 87.6, 147.2, 1.3, 9.2, 162, 306.4, 159.4, 529, 521.9, 720.7, 479.8, 488.6, 472.2, 471.7],
        ['worker & img(max) [DeviceMiddle] ', 115.6, 116.9, 230.3, 625.3, 6.8, 20.9, 647.6, 936.7, 935.9, 2933.9, 2915.6, 3275.7, 2307.3, 2425.7, 2400.2, 2409.1],
        ['no-worker & img(avg) [DeviceMiddle] ', 65.5, 169.9, 253.6, NaN, NaN, NaN, 663.1, 882.5, 660.7, 895.8, 885.9, 1340.7, 882.5, 842.6, 800.7, 856.6],
        ['no-worker & img(min) [DeviceMiddle] ', 45.6, 32.5, 74.3, NaN, NaN, NaN, 178.3, 303.1, 161.4, 366.6, 382.4, 690.5, 314.3, 307.6, 290, 306.3],
        ['no-worker & img(max) [DeviceMiddle] ', 145.2, 266, 766.2, NaN, NaN, NaN, 3711.9, 4286.3, 3802.5, 4020, 3949.5, 5071.2, 4109.2, 4002.9, 4086.3, 3980.9],
        ['no-js & img(avg) [DeviceMiddle] ', 66.8, 129.2, 191.7, NaN, NaN, NaN, 52.5, 307.9, 117.9, 190.7, 238.6, 534.5, 140.5, 160.9, 130.3, 122],
        ['no-js & img(min) [DeviceMiddle] ', 42.1, 82.4, 76.4, NaN, NaN, NaN, 30.7, 144.9, 49, 125.8, 109.8, 328.6, 54.1, 56.7, 67.2, 62.5],
        ['no-js & img(max) [DeviceMiddle] ', 134.5, 204.1, 679.7, NaN, NaN, NaN, 173.6, 992.5, 308.1, 762.2, 777.7, 1818.2, 542.2, 564, 598.8, 596.4],
        ['worker & img(avg) [DeviceLow] ', 30.8, 34.6, 100.7, 264.2, 2.9, 5.7, 315.5, 425.8, 325, 624, 637.7, 726.1, 510, 500.1, 548.3, 504.8],
        ['worker & img(min) [DeviceLow] ', 24.5, 20.6, 53.7, 90.9, 1.3, 2.8, 123.7, 199.7, 132.3, 372.3, 358.8, 526.1, 288.9, 287, 308.4, 302.6],
        ['worker & img(max) [DeviceLow] ', 33.1, 51.9, 263.2, 1432.6, 3.2, 7.4, 1469.8, 1727.1, 1486, 1898.9, 1768, 2117.4, 1702.4, 1738.9, 1718, 1806.5],
        ['no-worker & img(avg) [DeviceLow] ', 31.2, 40.5, 93.9, NaN, NaN, NaN, 186.3, 288.5, 178.4, 341.6, 326.8, 508, 253.1, 258, 268.2, 258.8],
        ['no-worker & img(min) [DeviceLow] ', 16.1, 17.8, 52.6, NaN, NaN, NaN, 121, 168.4, 94.9, 204.1, 230.1, 332.6, 172, 185.5, 158.5, 177],
        ['no-worker & img(max) [DeviceLow] ', 47.2, 75.7, 164.7, NaN, NaN, NaN, 380, 466.7, 373, 544.5, 608.3, 795, 590.6, 600.8, 588, 544],
        ['no-js & img(avg) [DeviceLow] ', 24.8, 57.1, 70.7, NaN, NaN, NaN, 24.4, 161.5, 45.4, 103.1, 82.7, 263, 53, 53, 57.1, 59.2],
        ['no-js & img(min) [DeviceLow] ', 17.4, 30.5, 45, NaN, NaN, NaN, 26.5, 108.8, 39.7, 89.5, 90.2, 238.5, 42.4, 40.6, 45.4, 42.6],
        ['no-js & img(max) [DeviceLow] ', 37.3, 113.8, 118.2, NaN, NaN, NaN, 57.1, 281.8, 79.7, 138.3, 142.5, 424.6, 132.5, 142.7, 113.6, 137.8]
    ],
    categoryAll: ['worker & img(avg) [DeviceHigh] ', 'worker & img(min) [DeviceHigh] ', 'worker & img(max) [DeviceHigh] ', 'no-worker & img(avg) [DeviceHigh] ', 'no-worker & img(min) [DeviceHigh] ', 'no-worker & img(max) [DeviceHigh] ', 'worker & no-img(avg) [DeviceHigh] ', 'worker & no-img(min) [DeviceHigh] ', 'worker & no-img(max) [DeviceHigh] ', 'no-js & img(avg) [DeviceHigh] ', 'no-js & img(min) [DeviceHigh] ', 'no-js & img(max) [DeviceHigh] ', 'no-js & no-img(avg) [DeviceHigh] ', 'no-js & no-img(min) [DeviceHigh] ', 'no-js & no-img(max) [DeviceHigh] ', 'worker & img(avg) [DeviceMiddle] ', 'worker & img(min) [DeviceMiddle] ', 'worker & img(max) [DeviceMiddle] ', 'no-worker & img(avg) [DeviceMiddle] ', 'no-worker & img(min) [DeviceMiddle] ', 'no-worker & img(max) [DeviceMiddle] ', 'no-js & img(avg) [DeviceMiddle] ', 'no-js & img(min) [DeviceMiddle] ', 'no-js & img(max) [DeviceMiddle] ', 'worker & img(avg) [DeviceLow] ', 'worker & img(min) [DeviceLow] ', 'worker & img(max) [DeviceLow] ', 'no-worker & img(avg) [DeviceLow] ', 'no-worker & img(min) [DeviceLow] ', 'no-worker & img(max) [DeviceLow] ', 'no-js & img(avg) [DeviceLow] ', 'no-js & img(min) [DeviceLow] ', 'no-js & img(max) [DeviceLow] '],
    categoryExpType: ['worker & img', 'no-worker & img', 'worker & no-img', 'no-js & img', 'no-js & no-img', 'worker & img', 'no-worker & img', 'no-js & img', 'worker & img', 'no-worker & img', 'no-js & img'],
    categoryExpTypeControlled: ['worker & img', 'worker & img', 'worker & img', 'no-worker & img', 'no-worker & img', 'no-worker & img', 'worker & no-img', 'worker & no-img', 'worker & no-img', 'no-js & img', 'no-js & img', 'no-js & img', 'no-js & no-img', 'no-js & no-img', 'no-js & no-img', 'worker & img', 'worker & img', 'worker & img', 'no-worker & img', 'no-worker & img', 'no-worker & img', 'no-js & img', 'no-js & img', 'no-js & img', 'worker & img', 'worker & img', 'worker & img', 'no-worker & img', 'no-worker & img', 'no-worker & img', 'no-js & img', 'no-js & img', 'no-js & img'],
    categoryStat: ['(avg)', '(min)', '(max)'],
    categoryStatControlled: ['(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)', '(avg)', '(min)', '(max)'],
    categoryDevice: ['DeviceHigh', 'DeviceMiddle', 'DeviceLow'],
    categoryDeviceControlled: ['DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceHigh', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceMiddle', 'DeviceLow', 'DeviceLow', 'DeviceLow', 'DeviceLow', 'DeviceLow', 'DeviceLow', 'DeviceLow', 'DeviceLow', 'DeviceLow']
};


function makeSeriesList(statDataDuration) {
    var seriesList = [];
    for (var i = 1; i < statDataDuration.datasetSource.length; i++) {
        seriesList.push({
            type: 'bar',
            seriesLayoutBy: 'row',
            encode: {x: 0, y: i, seriesName: i},
            barMinHeight: 5,
            emphasis: {
                itemStyle: {
                    color: 'rgba(0, 0, 0, 0.8)',
                    borderWidth: 10,
                    borderColor: 'rgba(0, 0, 0, 0.8)'
                }
            }
        });
    }

    makeDummySeries(statDataDuration.categoryStat);
    makeDummySeries(statDataDuration.categoryExpType);
    makeDummySeries(statDataDuration.categoryDevice);

    function makeDummySeries(names) {
        for (var i = 0; i < names.length; i++) {
            seriesList.push({
                name: names[i],
                type: 'custom',
                coordinateSystem: 'none',
                itemStyle: {
                    color: '#1A94E6'
                },
                renderItem: function () {},
                data: [[0, 0]]
            });
        }
    }
    return seriesList;
}

option = {

    title: {
        text: 'Experiment',
        bottom: 10,
        left: 'center'
    },
    legend: [{
        show: false,
        type: 'scroll',
        borderColor: '#ccc',
        borderWidth: 1,
        itemWidth: 15,
        icon: 'circle',
        data: _statDataDuration.categoryAll
    }, {
        top: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'rect',
        selector: true,
        data: _statDataDuration.categoryExpType
    }, {
        top: 80,
        borderColor: '#ccc',
        borderWidth: 1,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'rect',
        selector: true,
        data: _statDataDuration.categoryStat
    }, {
        top: 110,
        borderColor: '#ccc',
        borderWidth: 1,
        itemWidth: 8,
        itemHeight: 8,
        icon: 'rect',
        selector: true,
        data: _statDataDuration.categoryDevice
    }],
    dataset: {
        sourceHeader: true,
        source: _statDataDuration.datasetSource
    },
    grid: {
        left: 10,
        top: 150,
        containLabel: true
    },
    tooltip: {
        trigger: 'item'
    },
    dataZoom: [{
        type: 'inside'
    }, {
        type: 'slider',
        showDataShadow: false,
        showDetail: false,
        handleIcon: _dataZoomIcon,
        height: 20,
        handleStyle: {
            color: '#999',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }, {
        type: 'slider',
        orient: 'vertical',
        showDataShadow: false,
        showDetail: false,
        handleIcon: _dataZoomIcon,
        width: 20,
        handleStyle: {
            color: '#999',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: -45
        }
    },
    yAxis: {
        name: 'ms',
        nameLocation: 'start',
        nameTextStyle: {
            fontSize: 20,
            color: '#419234'
        },
        scale: true
    },
    series: makeSeriesList(_statDataDuration)
};

setTimeout(function () {
    var CATE_NAMES = ['categoryStat', 'categoryExpType', 'categoryDevice'];
    var allSelected = {};
    each(CATE_NAMES, function (cateName) {
        allSelected[cateName] = {};
    });

    myChart.on('legendselectchanged', function (params) {
        var name = params.name;
        var selected = params.selected[name];

        each(CATE_NAMES, function (cate) {
            if (echarts.util.indexOf(_statDataDuration[cate], name) >= 0) {
                echarts.util.extend(allSelected[cate], params.selected);
            }
        })

        var batch = [];
        each(_statDataDuration.categoryAll, function (fullName, index) {
            var shouldSel = reduce(CATE_NAMES, function (should, name) {
                return should && shouldBeSelected(name, index);
            }, true);
            !(selected ^ shouldSel) && batch.push({name: fullName});
        });
        batch.length && myChart.dispatchAction({
            type: selected ? 'legendSelect' : 'legendUnSelect',
            batch: batch
        });

        function shouldBeSelected(cate, index) {
            var sel = allSelected[cate][_statDataDuration[cate + 'Controlled'][index]];
            return sel == null || !!sel;
        }
    });

    myChart.on('highlight', echarts.util.curry(highDownListener, 'highlight'));
    myChart.on('downplay', echarts.util.curry(highDownListener, 'downplay'));

    function highDownListener(highDown, params) {
        var name = params.seriesName;
        each(CATE_NAMES, function (cate) {
            if (echarts.util.indexOf(_statDataDuration[cate], name) >= 0) {
                var batch = [];
                echarts.util.each(_statDataDuration.categoryAll, function (fullName, index) {
                    _statDataDuration[cate + 'Controlled'][index] === name
                        && batch.push({seriesName: fullName});
                });
                myChart.dispatchAction({
                    type: highDown,
                    batch: batch
                });
            }
        });
    }

}, 0);
