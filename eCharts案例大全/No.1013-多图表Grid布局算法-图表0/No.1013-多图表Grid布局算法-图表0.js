function genGrid(option) {
    let opt = {
        length: 1,
        cols: 1,
        gutterX: 10,
        gutterY: 10,
    };
    opt = Object.assign(opt, option);
    let grids = [];
    let rows = Math.ceil(opt.length / opt.cols); //获取总行数
    let width = Math.floor((100 - (opt.cols + 1) * opt.gutterX) / opt.cols); //每列图表宽度
    let height = Math.floor((100 - (rows + 1) * opt.gutterY) / rows); //每行图表高度
    for (let i = 0; i < opt.length; i++) {
        let rowIndex = Math.floor(i / opt.cols); //行索引
        let colIndex = i % opt.cols; //列索引
        let left = colIndex * width + (colIndex + 1) * opt.gutterX;
        let right = 100 - left - width;
        let top = rowIndex * height + (rowIndex + 1) * opt.gutterY;
        let bottom = 100 - top - height;
        let center = [Math.floor(left + width / 2), Math.floor(top + height / 2 + opt.gutterX)];

        let gird = {
            index: i,
            center: [center[0] + '%', center[1] + '%'],
            left: left + '%',
            right: right + '%',
            top: top + '%',
            bottom: bottom + '%',
            _width: width,
            _height: height,
            _center: center,
            _left: left,
            _right: right,
            _top: top,
            _bottom: bottom,
        };
        grids.push(gird);
    }
    return grids;
}

let grid = genGrid({ length: 15, cols: 5, gutterY: 8, gutterX: 5 });
console.log(grid);
let xAxis = [],
    yAxis = [],
    series = [],
    title = [];
for (let i = 0; i < grid.length; i++) {
    title.push({
        text: '多图表Grid布局算法-图表' + i,
        left: grid[i]._left + grid[i]._width / 2 + '%',
        top: grid[i]._top + '%',
        textAlign: 'center',
    });
    xAxis.push({
        gridIndex: i,
        name: '' + i,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    });
    yAxis.push({
        gridIndex: i,
        name: i + '',
    });
    series.push({
        data: [150, 230, 224, 218, 135, 147, 260],
        type: ['line', 'bar'][Math.floor(Math.random() * 2)],
        xAxisIndex: i,
        yAxisIndex: i,
        // center: grid[i].center,
        // radius: grid[i].radius,
    });
}
grid = grid.map((m) => {
    m.top = m._top + 10 + '%';
    return m;
});
option = {
    title,
    xAxis,
    yAxis,
    grid,
    series,
};
console.log(option);
