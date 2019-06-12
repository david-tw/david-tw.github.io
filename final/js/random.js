//先宣告一個list
var List=[]
var List1 = ['四面八方','一級拌','笑嘻嘻','源士林','師大第一腿','發現義大利麵','美濃粄條','山西刀削麵','咖哩廚房','憶馬當先','滇味小廚','美美','邦食堂','找碗','麻吉食堂','池先生','海南雞','滷肉飯香','三隻貓頭鷹']
var List2 = ['阿里媽媽','鍋in','順園','維倫麵館','師大第一腿','狂愛咖哩','麥當勞','大水源','小飯館','夏威夷生魚飯','感恩小館','雞二','蘇活','拉芙','發福','大埔','薩利雅','霞飛驛','東吉水產']
var List3 = ['活大麥當勞','四海遊龍','活大自助餐','女九自助餐','大一女學餐','摩斯漢堡','活大素食','小福滷味']
var List4 = ['鳳城燒臘','塘老鴨','台一冰店','韓庭洲','光一','中一素食','Maryjane','尚家香雲南']

// empty餐廳清單
$('#dinninglist').empty()
$('#randomrow').hide()
$('#addrow').hide()

// random的函式
var rand=(n)=>{
    var a = Math.random()*n
    var b = Math.floor(a)
    return b
}
//創建list
var newlist=(list)=>{
    for (var i =0;i<list.length;i++){
        var $p = $('<p>').attr('class','text-center').text(list[i])
        var $div = $('<div>').attr('class','col-3').append($p)
        $('#dinninglist').append($div)
    }
}
//新增餐廳的函式
//創建list
var addlist=(str)=>{
    var $p = $('<p>').attr('class','text-center').text(str)
    var $div = $('<div>').attr('class','col-3').append($p)
    $('#dinninglist').append($div)
    
}
///底下正文開始////////////////////////////////////////////////////////////////


//n1 118
$('#n1').on('click',function(){
    $('#result').val('')
    $('#add').val('')
    $('#dinninglist').empty()
    List = List1
    newlist(List)
    $('#addrow').show()
    $('#randomrow').show()
    
})
//n2 公館
$('#n2').on('click',function(){
    $('#result').val('')
    $('#add').val('')
    $('#dinninglist').empty()
    List = List2
    newlist(List)
    $('#addrow').show()
    $('#randomrow').show()
})
//n3 校內
$('#n3').on('click',function(){
    $('#result').val('')
    $('#add').val('')
    $('#dinninglist').empty()
    List = List3
    newlist(List)
    $('#addrow').show()
    $('#randomrow').show()
})
//n4 新生南路
$('#n4').on('click',function(){
    $('#result').val('')
    $('#add').val('')
    $('#dinninglist').empty()
    List = List4
    newlist(List)
    $('#addrow').show()
    $('#randomrow').show()
})

//新增餐廳
$('#addPlace').on('click',function(){
    var str = $('#add').val()
    addlist(str)
    List.push(str)
})


//隨機選餐廳
$('#randomPick').on('click',function(){
    
    var num=rand(List.length)
    $('#result').val(List[num])
})