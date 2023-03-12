var data = [10];
var xMax = 70;
var kd = [];
// 刻度使用柱状图模拟，短设置3，长的设置5；构造一个数据
for (var i = 0, len = 70; i <= len; i++) {
    if (i > 70) {
        kd.push('0');
    } else {
        if (i % 5 === 0) {
            kd.push('5');
        } else {
            kd.push('3');
        }
    }
}
var option = {
    backgroundColor: '#0e1733',
    xAxis: [
        {
            show: false,
            min: 0,
            max: 70,
        },
        {
            show: false,
            data: [],
            min: 0,
            max: 70,
        },
    ],
    yAxis: [
        {
            show: false,
            data: [],
        },
        {
            show: false,
            data: [],
        },
        {
            show: false,
            data: [],
        },
        {
            show: false,
            min: -110,
            max: 100,
        },
    ],
    series: [
        {
            type: 'line',
            data: [
                {
                    value: 4 + 35,
                    symbol:
                        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAACqADAAQAAAABAAAAEAAAAAARKDfWAAAA4UlEQVQoFWNkQAIG5+cL/Pr76whIiI2ZzeaCYeIHmDQTjOF5exv7r38/N/1n+K8Nwr/+/doIEoPJgxU2/P/P9PDT46X//zPY/n3z6T8IA4EdSAwkB1LMDCJe+UlNAkok/Pv68/+rotmMX3efZ+R2MfzPyMqsde3FOeHXs7ZsZ9Q+M7PiH8P/9v9//v5/VTKX8eelByC9DOx6CgxiPcn/GVmYGZkYGCuZQIpAEm9bVsIVgfggDW9bVzGC2CA1cM98O3QFJIYCvh28DOfDFcJFcDBGpkJGzTMz/uMIERRhooMHAELwa35lY0h+AAAAAElFTkSuQmCC',
                    symbolSize: 8,
                },
            ],
            
        },
        {
            name: '刻度',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 3,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: 15,
                    color: '#fff',
                    fontSize: 12,
                    formatter: function (params) {
                        // 因为柱状初始化为0，温度存在负值，所以，原本的0-100，改为0-130，0-30用于表示负值
                        console.log(params.dataIndex);
                        // if (params.dataIndex < 30&&params.dataIndex % 10 === 0) {
                        //     return params.dataIndex - 20+'℃';
                        // } else {
                        if (params.dataIndex % 10 === 0) {
                            return params.dataIndex - 35 + '°';
                        } else {
                            return '';
                        }
                        // }
                        // return params.dataIndex  +'°';
                    },
                },
            },
            data: kd,
            barGap: '10%',
            barWidth: 1,
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderRadius: 10,
                },
            },
            z: 0,
        },
    ],
};
