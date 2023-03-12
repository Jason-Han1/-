var data = [
    [0.050380387, 'Bacterial invasion of epithelial cells', 78, 1.297738497],
    [0.058433415, 'Rheumatoid arthritis', 91, 1.233338733],
    [0.059050151, 'mRNA surveillance pathway', 92, 1.228778987],
    [0.06089803, 'Circadian entrainment', 95, 1.215396754],
    [0.06274242, 'Phosphatidylinositol signaling system', 98, 1.202438735],
    [0.065196189, 'Glucagon signaling pathway', 102, 1.185777792],
    [0.072520489, 'Glutamatergic synapse', 114, 1.139539276],
    [0.096538423, 'Hippo signaling pathway', 154, 1.015299801],
    [0.097131141, 'Phagosome', 155, 1.012641511],
    [0.104802529, 'Alzheimer\'s disease', 168, 0.979628236],
    [0.111828154, 'Calcium signaling pathway', 180, 0.951448845],
    [0.157328761, 'Endocytosis', 260, 0.803191878],
    [0.160096851, 'Cytokine-cytokine receptor interaction', 265, 0.795617211]
];
var color = new Array();
for (var i in data) {
    color[i] = data[i][3];
}
var max = Math.max.apply(null, color);
var min = Math.min.apply(null, color);
option = {
    title: {
        text: 'KEGG',
        x: 'center'
    },
    tooltip: {
        formatter: function(params) {
            return params.value[1] + " :<br>" + params.value[0];
        }
    },
    dataRange: {
        x: 'right',
        y: 'center',
        min: min,
        max: max,
        color: ['red', 'blue'],
        calculable: true,
        formatter: function(value) {
            return value;
        }
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category'
    },
    series: [{
        name: 'KEGG',
        type: 'scatter',
        symbolSize: function(value) {
            return value[2] / 5;
        },
        data: data
    }]
};