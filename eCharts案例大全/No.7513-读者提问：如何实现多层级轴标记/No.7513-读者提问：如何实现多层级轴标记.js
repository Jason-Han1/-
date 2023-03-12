srcData = [
    {group: 'Letters', subGroup: 'lowercase', name: 'a', value: 11},
    {group: 'Letters', subGroup: 'lowercase', name: 'b', value: 41},
    {group: 'Letters', subGroup: 'uppercase', name: 'C', value: 16},
    {group: 'Letters', subGroup: 'uppercase', name: 'D', value: 32},
    {group: 'Letters', subGroup: 'uppercase', name: 'E', value: 34},
    {group: 'Numbers', subGroup: 'Integer', name: 1, value: 12},
    {group: 'Numbers', subGroup: 'Integer', name: 2, value: 35},
    {group: 'Numbers', subGroup: 'Integer', name: 3, value: 23},
    {group: 'Numbers', subGroup: 'Decimal', name: 2.3, value: 16},
    {group: 'Numbers', subGroup: 'Decimal', name: 4.5, value: 12}
];

covertData = function(src) {
    var nameList = [];
    var valueList = [];

    var groupLabelList = [''];
    var subGroupLabelList = [''];

    var groupTickList = [0];
    var subGroupTickList = [0];

    var costomList = ['costomTick'];

    var groupTmp = {
        name: '',
        count: 0
    };
    var subGroupTmp = {
        name: '',
        count: 0
    };

    for (var i = 0; i < src.length; i++) {

        nameList.push(src[i].name);
        valueList.push(src[i].value);
        groupLabelList.push('', '');
        subGroupLabelList.push('', '');

        i === src.length - 1 || groupTmp.name !== '' && groupTmp.name !== src[i + 1].group ?
            (groupLabelList[i * 2 - groupTmp.count + 1] = src[i].group,
                groupTmp.name = '',
                groupTmp.count = 0,
                groupTickList.push(i * 2 + 2)) :
            (groupTmp.name = src[i].group,
                groupTmp.count++);

        if (i === src.length - 1 || subGroupTmp.name !== '' && subGroupTmp.name !== src[i + 1].subGroup) {
            subGroupLabelList[i * 2 - subGroupTmp.count + 1] = src[i].subGroup,
            subGroupTmp.name = '';
            subGroupTmp.count = 0;
            subGroupTickList.push(i * 2 + 2);
        } else {
            subGroupTmp.name = src[i].subGroup;
            subGroupTmp.count++;
        }

    }

    return {
        nameList: nameList,
        valueList: valueList,
        groupLabelList: groupLabelList,
        subGroupLabelList: subGroupLabelList,
        groupTickList: groupTickList,
        subGroupTickList: subGroupTickList
    };
};

dstData = covertData(srcData);
console.log(dstData);

option = {
    grid: [{
        bottom: '20%'
    }, {
        bottom: '20%'
    }, {
        bottom: '20%'
    }],
    xAxis: [{
        gridIndex: 0,
        type: 'category',
        data: dstData.nameList,
        axisTick: {
            length: 20
        }
    }, {
        gridIndex: 1,
        type: 'category',
        data: dstData.groupLabelList,
        boundaryGap: false,
        axisLabel: {
            margin: 80,
            interval: 0
        },
        axisTick: {
            length: 100,
            interval: (index) => dstData.groupTickList.indexOf(index) != -1
        }
    }, {
        gridIndex: 2,
        type: 'category',
        data: dstData.subGroupLabelList,
        boundaryGap: false,
        axisLabel: {
            margin: 40,
            interval: 0
        },
        axisTick: {
            length: 60,
            interval: (index) => dstData.subGroupTickList.indexOf(index) != -1
        }
    }],
    yAxis: [{
        gridIndex: 0,
    }, {
        gridIndex: 1,
    }, {
        gridIndex: 2,
    }],
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
        xAxisIndex: 0,
        yAxisIndex: 0,
        type: 'bar',
        name: 'test',
        label: {
            show: true,
            position: 'top'
        },
        data: dstData.valueList
    }]
};