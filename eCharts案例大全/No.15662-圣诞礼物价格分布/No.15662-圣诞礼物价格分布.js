var percentage = [0.58, 0.22, 0.16, 0.04];
var radius = [0.6];
for (var i = 1; i < percentage.length; ++i) {
    radius.push(radius[0] / Math.sqrt(percentage[0] / percentage[i]));
}
var colors = ['#ec5845', '#f28a7d', '#fbdcd8', '#fff'];
var labels = ['≥500元：4%', '≥200元：16%', '≥100元：22%', '<100元：58%'];
var top = 0.5;

var series = [];

for (var i = 0; i < percentage.length; ++i) {
    series.push({
        type: 'pie',
        silent: true,
        name: labels[percentage.length - i - 1],
        radius: [0, radius[i] * 100 + '%'],
        label: {
            normal: {
                show: false,
            }
        },
        color: [colors[i]],
        center: ['35%', (top + (-radius[i] + radius[0]) / 2) * 100 + '%'],
        data: [{
            value: 1,
            itemStyle: {
                normal: {
                    color: colors[i],
                    shadowBlur: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.25)'
                }
            }
        }],
        animationType: 'scale'
    });
}
myChart.setOption({
    legend: {
        data: labels,
        top: 'center',
        right: 10,
        orient: 'vertical'
    },
    series: series
});