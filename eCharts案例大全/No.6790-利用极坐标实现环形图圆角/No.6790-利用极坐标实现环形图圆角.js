const average = (130 - 100) / 6;
option = {

    angleAxis: {
        show: false
    },
    radiusAxis: {
        type: 'category',
        data: ['周四'],
        z: 10,
        boundaryGap: true,
        show: false

    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: 260
    },
    series: [{
            type: 'bar',
            roundCap: true,
            data: [14],
            coordinateSystem: 'polar',
            name: 'A',
            stack: 'a',
            barWidth: 28,
            z: 2
        },
        {
            type: 'bar',
            roundCap: true,
            data: [average],
            coordinateSystem: 'polar',
            name: '',
            stack: 'a',
            color: '#342f68',
            barWidth: 28,
            z: 1
        },
        {
            type: 'bar',
            roundCap: true,
            data: [4],
            coordinateSystem: 'polar',
            name: 'B',
            barWidth: 28,
            stack: 'a'
        },
        {
            type: 'bar',
            roundCap: true,
            data: [average],
            coordinateSystem: 'polar',
            name: '',
            stack: 'a',
            color: '#342f68',
            barWidth: 28,
            z: 1
        },
        {
            type: 'bar',
            roundCap: true,
            data: [26],
            coordinateSystem: 'polar',
            name: 'C',
            barWidth: 28,
            stack: 'a'
        },
        {
            type: 'bar',
            roundCap: false,
            data: [average],
            coordinateSystem: 'polar',
            name: '',
            stack: 'a',
            color: '#342f68',
            barWidth: 28,
            z: 1
        }, {
            type: 'bar',
            roundCap: true,
            data: [30],
            coordinateSystem: 'polar',
            name: 'd',
            barWidth: 28,
            stack: 'a'
        }, {
            type: 'bar',
            roundCap: false,
            data: [average],
            coordinateSystem: 'polar',
            name: '',
            stack: 'a',
            color: '#342f68',
            barWidth: 28,
            z: 1
        }, {
            type: 'bar',
            roundCap: true,
            data: [17],
            coordinateSystem: 'polar',
            name: 'e',
            barWidth: 28,
            stack: 'a'
        }, {
            type: 'bar',
            roundCap: false,
            data: [average],
            coordinateSystem: 'polar',
            name: '',
            stack: 'a',
            color: '#342f68',
            barWidth: 28,
            z: 1
        }, {
            type: 'bar',
            roundCap: true,
            data: [9],
            coordinateSystem: 'polar',
            name: 'f',
            barWidth: 28,
            stack: 'a'
        }, {
            type: 'bar',
            roundCap: false,
            data: [average],
            coordinateSystem: 'polar',
            name: '',
            roundCap: true,
            stack: 'a',
            color: '#342f68',
            barWidth: 28,
            z: 1
        }
    ],
    legend: {
        show: true,
        data: ['A', 'B', 'C', 'd', 'e', 'f']
    }
};