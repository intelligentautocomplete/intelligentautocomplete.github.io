var training = [
    {'tag':'div', 'parentTag':'', 'parentAttr/Val':''},
    {'tag':'div', 'parentTag':'div', 'parentAttr/Val':'id=header'},
    {'tag':'div', 'parentTag':'div', 'parentAttr/Val':'class=header_content clearfix'},
    {'tag':'h2', 'parentTag':'div', 'parentAttr/Val':'class=hdr_l'},
    {'tag':'div', 'parentTag':'div', 'parentAttr/Val':'class=header_content clearfix'},
    {'tag':'a', 'parentTag':'div', 'parentAttr/Val':'class=hdr_r'},
    {'tag':'div', 'parentTag':'', 'parentAttr/Val':''},
    {'tag':'div', 'parentTag':'div', 'parentAttr/Val':'class=header_content clearfix'},
    {'tag':'h2', 'parentTag':'div', 'parentAttr/Val':'class=hdr_l'},
    {'tag':'div', 'parentTag':'div', 'parentAttr/Val':'class=header_content clearfix'},
    {'tag':'div', 'parentTag':'', 'parentAttr/Val':''},
    {'tag':'h2', 'parentTag':'div', 'parentAttr/Val':'class=hdr_l'},
    {'tag':'h2', 'parentTag':'', 'parentAttr/Val':''},
    {'tag':'div', 'parentTag':'', 'parentAttr/Val':''},
    {'tag':'h2', 'parentTag':'', 'parentAttr/Val':''},
    {'tag':'div', 'parentTag':'div', 'parentAttr/Val':'id=page'},
    {'tag':'h1', 'parentTag':'div', 'parentAttr/Val':'class=main'},
];
training = _(training);
var features = ['parentTag', 'parentAttr/Val'];
var target = 'tag';


var samples = [{'parentTag':'div', 'parentAttr/Val':'id=header'}];

