//生成数据
let t = Date.now();
let v = Math.random() * 50 + 300;
const data = Array(1000).fill(0).map(_ => [t += 1e5, v += Math.random() * 21 - 10]);

//处理时间戳
const f = n => `0${n}`.slice(-2); //数字补零
const ts = d => `${f(d.getHours())}:${f(d.getMinutes())}` //时间字符串
const ds = d => `${f(d.getMonth() + 1)}-${f(d.getDate())}` //日期字符串

//临时变量,遍历刻度标签时保存上一个标签的日期值
let tmp = -1;

option = {
    xAxis: {
        type: 'time',
        axisLabel: {
            //总是显示首点(最左)标签(否则标签重叠时有可能不显示)
            showMinLabel: true,

            //格式化刻度标签:跨天时显示日期,否则仅显示时间
            formatter: (v, i) => {
                const d = new Date(v)
                if (tmp !== d.getDate()) {
                    tmp = d.getDate();
                    return `${ts(d)}\n${ds(d)}`;
                } else return `${ts(d)}`;
            }
        }
    },
    yAxis: { type: 'value' },
    series: [{ type: 'line', showSymbol: false, data }]
};
