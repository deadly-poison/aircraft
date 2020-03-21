// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        prefab: cc.Prefab,
        rate: 1,
        speed: 1000,
        offsetX: 0,
    },


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.schedule(this._emmitNode, this.rate);
    },
    
    _emmitNode(){
        let node = cc.instantiate(this.prefab);
        node.position = this.node.position;
        node.x += this.offsetX;
        node.parent = this.node.parent;

        let distance = ((cc.winSize.height/2) - this.node.y);
        let duration = distance / this.speed;

        let moveBy = cc.moveBy(duration, cc.v2(0, distance));
        let removeSelf = cc.removeSelf();
        let sequence = cc.sequence(moveBy, removeSelf);
        node.runAction(sequence)

    }

    // update (dt) {},
});
