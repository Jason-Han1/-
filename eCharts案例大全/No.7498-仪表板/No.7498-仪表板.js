let val = parseInt(30); //填写数据
let number = (val % 5) == 0 ? 0 : 5 - (val % 5)
let valnumber = (val + number) / 100;
let interval = [0.05, 0.10,0.15,0.20,0.25,0.30,0.35,0.40,0.45,0.50,0.55,0.60,0.65,0.70,0.75,0.80,0.85,0.90,0.95, 1];
colordatas = interval.map(p => {
    console.log(p, valnumber)
    return [p, p <= valnumber ? "aqua" : "#0068bd"]
});

option = {
    backgroundColor: "#38445E",
    series: [
        {
            name: '',
            type: 'gauge',
            radius: '80%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: colordatas,
                    shadowColor: 'rgba(0, 252, 255, 0.5)',
                    shadowBlur: 10
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 6,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 6,
                lineStyle: {
                    color: 'auto',
                }
            },
            //刻度标签。
            pointer: { //仪表盘指针
                show: 0,
                length: '70%',
                width: 2
            },
            detail: {
                show: 0,
            },
        }
    ]
};