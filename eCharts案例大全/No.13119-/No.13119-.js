app.title = '极坐标系下的堆叠柱状图';

option = {
    backgroundColor: '#FFFFFF',
    angleAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        z: 30
    },
    radiusAxis: {},
    polar: {},
    series: [{
        type: 'bar',
        data: [1549.0, 1285.2, 740.0, 1836.0, 4295.0, 10405.0, 4245.7, 3790.0, 883.0, 1174.0, 140.0],
        coordinateSystem: 'polar',
        name: '锦界',
        stack: 'a'
    }, {
        type: 'bar',
        data: [525.0, 650.0, 824.5, 368.75, 397.25, 1078.0, 711.0, 1286.0, 3364.34, 1558.0, 234.0],
        coordinateSystem: 'polar',
        name: '大保当',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2605.0, 1895.0, 3906.0, 279.0, 2600.0, 1610.0, 3516.0, 755.0, 1525.0, 3590.0, 2187.0, 3500.0],
        coordinateSystem: 'polar',
        name: '店塔',
        stack: 'a'
    },{
        type:'bar',
        data:[597.0, 1110.0, 75.0, 956.0, 1865.0, 240.0, 2200.0, 1441.0, 4820.0, 1623.0, 1528.11, 470.0],
        name:'西沟',
        coordinateSystem:'polar',
        stack:'a'
    },{
        type:'bar',
        data:[108.6, 280.0, 1435.0, 2615.0, 2090.0, 1260.0, 630.0, 139.0],
        name:'神木',
        coordinateSystem:'polar',
        stack:'a'
    },{
        type:'bar',
        data:[1215.0, 50.0, 1848.25, 1159.0, 3617.0, 1223.75, 274.75, 3675.0, 1569.5, 1466.5, 60.0],
        coordinateSystem:'polar',
        name:'金鸡滩',
        stack:'a'
    }],
    legend: {
        show: true,
        data: ['锦界', '大保当', '店塔','西沟','神木','金鸡滩']
    }
};