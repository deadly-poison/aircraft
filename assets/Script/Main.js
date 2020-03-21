
cc.Class({
    extends: cc.Component,
 
    properties: {

       Bg1: {
        default: null,
        type: cc.Node,
        },

        Bg2: {
            default: null,
            type: cc.Node,
        },
       far_speed:10,
    },
 
   onLoad :function() {
       cc.log("The player is " + this.Bg1);
       this.fixBgPos(this.Bg1, this.Bg2);
   },

   fixBgPos:function(Bg1,Bg2){
       Bg1.x = 0;
       //利用前一张图片的边框大小设置下一张图片的位置
       var bg1BoundingBox = Bg1.getBoundingBox();
       Bg2.setPosition(0,bg1BoundingBox.yMax)
   },
 
   update:function(dt){
       this.bgMove(this.far_speed);
       this.checkBgReset(this.far_bg);
   },
 
   bgMove:function(speed){
       this.Bg1.y -= speed;
       this.Bg2.y -= speed;
   },

   //检查是否要重置位置
    checkBgReset:function(bgList){
        // var winSize = cc.director.getWinSize();
        var bg1BoundingBox = this.Bg1.getBoundingBox();
        var bg2BoundingBox = this.Bg2.getBoundingBox();

        var first_yMax = bg1BoundingBox.yMax;
        var second_yMax = bg2BoundingBox.yMax;
        if(first_yMax<=0){
            this.Bg1.setPosition(0,bg2BoundingBox.yMax)
            // var preFirstBg = bgList.shift();
            // bgList.push(preFirstBg);
            // var curFirstBg = bgList[0];
            // preFirstBg.y = curFirstBg.getBoundingBox().yMax;
        }
        if (second_yMax<=0){
            this.Bg2.setPosition(0,bg1BoundingBox.yMax)
        }
    }
    
});
