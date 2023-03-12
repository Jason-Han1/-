var symbolRotateNum = [0,10,30,80,135,180,225,270,315,120,360,200,230,260,300,360,250];// 旋转的度数
option = {
    xAxis: {
        type: 'category',
        data: symbolRotateNum
    },
    yAxis: {
        type: 'value',
        minInterval: 45,
        maxInterval: 45,
        axisLabel: {
            margin: 2,
            formatter: function (value, index) {
                if (value <= 22.5) {
                    return '北(0°)'
                } else if (value <= 67.5) {
                    return '东北(45°)'
                } else if (value <= 112.5) {
                    return '东(90°)'
                } else if (value <= 157.5) {
                    return '东南(135°)'
                } else if (value <= 202.5) {
                    return '南(180°)'
                } else if (value <= 247.5) {
                    return '西南(225°)'
                } else if (value <= 292.5) {
                    return '西(270°)'
                } else if (value <= 337.5) {
                    return '西北(315°)'
                } else {
                    return '北(360°)'
                }
            }
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 50
    }, {
        start: 0,
        end: 50,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
        data: symbolRotateNum,
        type: 'line',
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANJSURBVEhLvZfLTxNRGMXPjAy1D6ESERdIfKSoRDYlGjUuUFyBuJCgMWElC6Mm6l/gwr/AnXGBKxMTjRsQVhpYEDUxdINRA/ERwkLEIGAf1pKM99yZKy2dOy1IPcmk3/3mzvdrb+/jjIEylZi2L6cyuJrM4FAuh0A2hyrmAxZWLAvZSBDvw0Hci8eMB/KBEvIFPxyxa/Y34f5SEmcXU4i4aV9Fw0jWRvDs4wyu9HUay266SFrwWMJ+upxGVzqLANt1NcCuOqBBXMFqcckskMmK6zcwtwB8FdeCiwoFkK0JYbg9bvQ4mUJ5gscn7dHZb2hnXB8FmhuBxp3yVkmJ5zA1C8wvOm3x3NjJVuOU01pVEfjlW3t0Zs6Btu4DWvbI9Lr17gsw+cmJmxowduJwIbwA/CJhP57/gV7GHW3AjlqZLtKl2xk3cvToTtCNCvV9SdSccOL67XjSETcuOC3AdD8LoF3H9dD1iDVYi2JtMpyWC+bsTaVxjnG8GRBLY9PEWqxJkUEWYwnmkuHs5USKiYm02WJN1iaDLOYkWKzRbn5y9lZKqrZimRMf7FtigwhHxfZQ7pLZiFibDLLINJO/0M8bHIpKSzHINMW472Wjkr9WSTHINLnhs8FtsNJSDDJNdcqovbeSUgwy/24g/1vG4LidE2Ne1XkM2BZys3kaGMrh+ZsVt1WezhypQn+35bZW9TMNjLyWJ9eKyUOcSR5tXmKB2O7yB4Z9vaCUYpBp0jmwwfNUp+s91XQaJcU+7KuTYpBp0q6wwUNcp4Y6A9d8CiqxD/vqpBhkmvRItCt0DjzEdTrasgXn2+UC8BTvsY9OrE0GWWTKP48eiZ90Dn7qPW2h7UBxceZ4z0+qtmJJMI0ZPRLtCp2Dn25erBbn7OpwMmbOT6zJ2mSQxZwE0w3SmDGmXaFz0MkSo30jD8SYOZ1YS1kgMpTzLJgJ+X6LzsHPEKi1zTWrk/DgGH7lxGt9l6/Zo3PYqDGYFv9pYsqJS5o9pXz/9a/2dq3JU9IuOsLpkWhX2OYhzi/BL+Bl6AkkbDHp5DmRwiEMekEpLZhSrzC0K3QObtpXYrmkxFod2vArzFrRrtA58BD3emkTv/BzZCsG2g4ad+UDvgL+AG6gQ5tmKoraAAAAAElFTkSuQmCC',
        symbolSize:'20',
        symbolRotate: function(value) {
			return 360 - value
		},
        smooth: true,
        lineStyle: {
            color:'#15B9C0'
        }
    }]
};
