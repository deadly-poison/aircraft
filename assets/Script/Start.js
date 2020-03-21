cc.Class({
    extends: cc.Component,

    properties: {
        // label: {
        //     default: null,
        //     type: cc.Label
        // },
        // // defaults, set visually when attaching this script to the Canvas
        // text: '异型战机大作战'
    },

    // use this for initialization
    onLoad: function () {
        // this.label.string = this.text;
        this.node.on('mousedown', function ( event ) {
            cc.director.loadScene("Main");
        });
    },

    // called every frame
    update: function (dt) {

    },

});
