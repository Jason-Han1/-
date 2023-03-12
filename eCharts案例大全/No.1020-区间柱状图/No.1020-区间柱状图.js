const xData = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00'];
const barData = [5, 20, 36, 10, 10, 20];

option = {
    tooltip: {
        show: true,
        trigger: 'axis',
        confine: true,
        formatter(item) {
            const html = `<div>
                                        <div>${xData[item[0].dataIndex]}~${
                        xData[item[0].dataIndex + 1]
                    }</div>
                                            <div><span style="width:10px;height:10px;display: inline-block;background:${
                                                item[0].color
                                            }"></span> ${item[0].data}</div>
                                  </div>`;
            return html;
        },
    },
    xAxis: [{
            data: barData,
            show:false
        },
        {
            data: xData,
            axisLabel: {
                interval: 0,
                show: true,
            },
            position: 'bottom',
            boundaryGap: false,
            axisPointer: {
                show: false,
            },
        },
    ],
    yAxis: {
        type: 'value',
        show: false,
    },
    series: [{
        data: barData,
        type: 'bar',
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)',
        },
    }, ],
}