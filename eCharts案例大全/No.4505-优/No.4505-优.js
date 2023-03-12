var dataArr = 80;
if (data == undefined) {
    dataArr = 0;
}
var colorSet = {
    color: '#468EFD'
};
var text;

var option = {
    backgroundColor: "#000",
    title: {
        show: true,
        text: '优',
        x: '49%',
        y: '55%',
        z: 8,
        textAlign: 'center',
        textStyle: {
            color: ' rgb(147,169,205) ',
            fontSize: 26,
        },

    },
    series: [{
        name: "内部进度条",
        type: "gauge",
        // center: ['20%', '50%'],
        radius: '60%',
        splitNumber: 20,
        axisLine: {
            lineStyle: {
                color: [
                    [dataArr / 100, colorSet.color],
                    [1, "#111F42"]
                ],
                width: 14
            }
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,

        },
        splitLine: {
            show: false,
        },


        pointer: {
            show: false,
        },
    }]
};