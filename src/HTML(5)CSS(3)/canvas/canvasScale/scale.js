// https://www.yuque.com/nowthen/longroad/dv2705#hU4y1
// https://github.com/now1then/canvas-scale/blob/master/lib/scale.js

function Scale(options){
    this.init(options);
};

Scale.prototype = {
    constructor:Scale,
    isError:false, // 错误状态
    container:null,
    canvas:null,
    current_def: 0, // 当前刻度
    dpr:window.devicePixelRatio,
    // 默认配置
    config:{
        width:0,
        height: 50, // 画布高度
        start: 0, // 刻度开始值
        end: 10000, // 刻度结束值
        // def: 100, // 中心线停留位置 刻度值
        unit: 10, // 刻度间隔 'px'
        capacity: 100, // 刻度容量值
        background: '#fff', // 设置颜色则背景为对应颜色虚幻效果，不设置默认为透明色。
        midLineColor: '#087af7', // 中心线颜色
        scaleLineColor: '#999', // 刻度线颜色
        openUnitChange: true, // 是否开启间隔刻度变更
        sign: '@hl', // 签名，传入空不显示签名
        fontColor: '#68ca68', // 刻度数值颜色， 刻度线颜色暂未提供设置
        fontSize: '16px SimSun, Songti SC', // 刻度数值 字体样式
    }, 
    init:function(options){
        
        //  初始化参数
        this.config = Object.assign({},this.config,options);

        // 获取容器 创建canvas对象
        this.createCanvasContainer();

        // 参数配置
        this.setConfig();
        
        // 设置当前刻度值
        this.setCurrentDef();

        // 设置样式
        this.setStyles();

        // 绘制背景
        this.drawBackground();

        // 设置签名（注意方法调用顺序，要在this.drawBackground()之后调用，不然会被覆盖)
        this.drawSign();

        // 绘制刻度尺
        this.drawScale();

        // 绘制中心线
        this.drawMiddleLine();

        // 添加事件交互
        this.addEvent();
    },
    /**
     * 获取容器 创建canvas对象
     */
    createCanvasContainer:function(){
        this.container = document.getElementById(this.config.el);
        if(!this.container){
            this.isError = true;
            console.error('没有获取到容器，请检查传入的【el】是否正确：',this.config.el);
        } else {
            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.canvas.id = `scale-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
            this.container.appendChild(this.canvas);
        }
    },
    setConfig(){
        
    },
    // 设置当前刻度值
    setCurrentDef(){
        if(!this.config.def){
            this.current_def = Math.floor(((this.config.end - this.config.start) / 2 + this.config.start));    
        } else if(this.config.def < this.config.start){
            this.current_def = this.config.start - this.config.capacity;
        } else if(this.config.def > this.config.end){
            this.current_def = this.config.end + this.config.capacity;
        }
    },
    setStyles(){
        this.config.width = Math.floor(this.container.getBoundingClientRect().width);
        this.config.height = Math.floor(this.config.height);
        this.canvas.style.width = this.config.width + 'px';
        this.canvas.style.height = this.config.height + 'px';
        this.canvas.width = this.dpr * this.config.width;
        this.canvas.height = this.dpr * this.config.height;

        this.ctx.scale(this.dpr,this.dpr);
    },
    // 绘制签名
    drawSign(){
        if(this.config.sign){
            this.ctx.beginPath();
            this.ctx.font = "10px Arial";
            const gradient = this.ctx.createLinearGradient(this.config.width,0,this.config.width - 6,0);
            gradient.addColorStop(0,'rgba(255,0,34,0.9)');
            gradient.addColorStop(1,'rgba(0,18,190,0.9)');
            this.ctx.fillStyle = gradient;
            this.ctx.textAlign = 'right';
            this.ctx.fillText(this.config.sign,this.config.width - 10,10);
            this.ctx.closePath();
            this.fillStyle = "transparent";
        }
    },
    // 绘制背景
    drawBackground(){
        if(this.config.background){
            this.ctx.beginPath();
            const gradient = this.ctx.createLinearGradient(0,0,this.config.width,0);
            gradient.addColorStop(0, 'rgba(25, 255, 255, 0.95)');
            gradient.addColorStop(0.45, 'rgba(255, 25, 255, 0)');
            gradient.addColorStop(0.55, 'rgba(255, 25, 255, 0)');
            gradient.addColorStop(1, 'rgba(255, 255, 25, 0.95)');
            this.ctx.fillStyle = gradient;
            this.ctx.fillRect(0,0,this.config.width,this.config.height);
            this.ctx.closePath();
        }
    },
    // 绘制刻度尺 scaleLineColor
    // 依据中心线位置的数值=this.current_def，以此确定起始数值
    drawScale(){
        const {ctx,config,current_def} = this;
        const midX = Math.floor(this.config.width / 2) ; // 刻度尺中心点X轴位置
        const startX =  midX % config.unit; // 刻度尺起点X轴位置
        let scaleHeight = 0,scaleValue=0,leftStep = 0,rightStep = 0;

        // 绘制刻度、刻度值。
        ctx.beginPath();
        ctx.fillStyle = config.scaleLineColor || "#999";
        ctx.font = config.fontSize;
        ctx.textAlign = 'center';

        // 左侧
        for(let i = midX; i >= startX; i = i -  config.unit){
            if(rightStep * (config.capacity / config.unit) % 100 === 0){
                scaleHeight = 24;
                ctx.fillText(current_def - rightStep * config.capacity,i,20);
            } else if(rightStep * (config.capacity / config.unit) % 50 === 0){
                scaleHeight = 16;
            } else {
                scaleHeight = 8;
            }
            ctx.moveTo(i ,config.height);
            ctx.lineTo(i, config.height - scaleHeight);

            rightStep++;
        }

        // 右侧
        for(let i = midX; i <= config.width; i += config.unit){
            if(leftStep *  (config.capacity / config.unit) % 100 === 0){
                scaleHeight = 24;
                ctx.fillText(current_def + leftStep * config.capacity,i,20);
            } else if(leftStep * (config.capacity / config.unit) % 50 === 0){
                scaleHeight = 16;
            } else {
                scaleHeight = 8;
            }
            ctx.moveTo(i, config.height);
            ctx.lineTo(i, config.height - scaleHeight);

            leftStep++;
        }
        
        // 底线
        ctx.moveTo(0, config.height);
        ctx.lineTo(config.width, config.height);
        
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    },
    // 绘制中心线
    drawMiddleLine(){
        this.ctx.beginPath();
        const midPositionX = Math.floor(this.config.width / 2);
        this.ctx.fillStyle = this.config.midLineColor || "#087af7";

        // 竖线
        // this.ctx.fillRect(midPositionX - 1,0,2,this.config.height);
        
        // 上方小三角
        this.ctx.moveTo(midPositionX - 10, 0);
        this.ctx.lineTo(midPositionX,6);
        this.ctx.lineTo(midPositionX + 10, 0);
       

        // 下方小三角
        // this.ctx.moveTo(midPositionX - 10, this.config.height);
        // this.ctx.lineTo(midPositionX,this.config.height - 6);
        // this.ctx.lineTo(midPositionX + 10, this.config.height);

        // 描边、填充
        this.ctx.strokeStyle = this.ctx.fillStyle;
        this.ctx.stroke();
        this.ctx.fill();
        this.ctx.closePath();
    },
    
    // 添加事件交互
    addEvent(){}
    
};