//Create objects for common properties across available frames
var bounds = {x:0.0307, y:0.0191, width:0.9387, height:0.1024};
//defines available frames
availableFrames = [
	{name:'White Legend Crown', src:'/img/frames/m15/ub/crowns/floating/w.png', bounds:bounds, complementary:9},
	{name:'Blue Legend Crown', src:'/img/frames/m15/ub/crowns/floating/u.png', bounds:bounds, complementary:9},
	{name:'Black Legend Crown', src:'/img/frames/m15/ub/crowns/floating/b.png', bounds:bounds, complementary:9},
	{name:'Red Legend Crown', src:'/img/frames/m15/ub/crowns/floating/r.png', bounds:bounds, complementary:9},
	{name:'Green Legend Crown', src:'/img/frames/m15/ub/crowns/floating/g.png', bounds:bounds, complementary:9},
	{name:'Multicolored Legend Crown', src:'/img/frames/m15/ub/crowns/floating/m.png', bounds:bounds, complementary:9},
	{name:'Artifact Legend Crown', src:'/img/frames/m15/ub/crowns/floating/a.png', bounds:bounds, complementary:9},
	{name:'Land Legend Crown', src:'/img/frames/m15/ub/crowns/floating/l.png', bounds:bounds, complementary:9},
	{name:'Colorless Legend Crown', src:'/img/frames/m15/ub/crowns/floating/c.png', bounds:bounds, complementary:9},
	{name:'Legend Crown Border Cover', src:'/img/black.png', bounds:{x:0.0394, y:0.0277, width:0.9214, height:0.0177}},
	{name:'Legend Crown Lower Cutout', src:'/img/black.png', bounds:{x:0.0734, y:0.1096, width:0.8532, height:0.0143}, erase:true},
	{name:'Legend Crown Outline', src:'/img/frames/m15/crowns/m15CrownFloatingOutline.png', bounds:{x:0.028, y:0.0172, width:0.944, height:0.1062}}
];
//disables/enables the "Load Frame Version" button
document.querySelector('#loadFrameVersion').disabled = true;
//defines process for loading this version, if applicable
document.querySelector('#loadFrameVersion').onclick = null;
//loads available frames
loadFramePack();