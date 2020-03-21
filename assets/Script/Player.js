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
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        // 绑定触摸移动事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveEvent, this);
    },

    /**
     * 拖动节点事件
     * @param {*} event 
     */
    touchMoveEvent(event) {
        // 当前节点
        let node = this.node;
        // 获取触摸坐标
        let touchPosition = event.getLocation();
        // 转换为节点所在坐标系的坐标
        let nodePosition = this.node.parent.convertToNodeSpaceAR(touchPosition);
        // 水平方向最大距离
        nodePosition.x = this.getNodePositionX(nodePosition.x);
        // 竖直方向最大距离
        nodePosition.y = this.getNodePositionY(nodePosition.y);
        // 设置节点位置
        node.position = nodePosition;
    },

    /**
     * 获取x坐标
     * @param {integer} nodePosition 
     */
    getNodePositionX(nodePositionX) {
        let node = this.node;
        // 获取屏幕大小
        let windowSize = cc.view.getVisibleSize();
        // 节点一半的宽度
        let nodeHalfWidth = node.width / 2;
        // x坐标值，屏幕宽度的一半，左侧为负数，右侧为正数
        let xPos = windowSize.width / 2;
        if (nodePositionX - nodeHalfWidth <= -xPos) {
            nodePositionX = nodeHalfWidth - xPos
        } else if (nodePositionX + nodeHalfWidth >= xPos) {
            nodePositionX = xPos - nodeHalfWidth;
        }

        return nodePositionX;
    },

    /**
     * 获取y坐标
     * @param {integer} nodePositionY 
     */
    getNodePositionY(nodePositionY) {
        let node = this.node;
        // 获取屏幕大小
        let windowSize = cc.view.getVisibleSize();
        // 节点一半的高度
        let nodeHalfHeight = node.height / 2;
        let yPos = windowSize.height / 2;
        if (nodePositionY - nodeHalfHeight <= -yPos) {
            nodePositionY = nodeHalfHeight - yPos
        } else if (nodePositionY + nodeHalfHeight >= yPos) {
            nodePositionY = yPos - nodeHalfHeight;
        }

        return nodePositionY;
    },
});
