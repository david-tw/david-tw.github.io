//先把需要用的list跟函式寫出來

var List=[]
var List1 = ['四面八方','一級拌','笑嘻嘻','源士林','師大第一腿','發現義大利麵','美濃粄條','山西刀削麵','咖哩廚房','憶馬當先','滇味小廚','美美','邦食堂','找碗','麻吉食堂','池先生','海南雞','滷肉飯香','三隻貓頭鷹']
var List2 = ['阿里媽媽','鍋in','順園','維倫麵館','師大第一腿','狂愛咖哩','麥當勞','大水源','小飯館','夏威夷生魚飯','感恩小館','雞二','蘇活','拉芙','發福','大埔','薩利雅','霞飛驛','東吉水產']
var List3 = ['活大麥當勞','四海遊龍','活大自助餐','女九自助餐','大一女學餐','摩斯漢堡','活大素食','小福滷味']
var List4 = ['鳳城燒臘','塘老鴨','台一冰店','韓庭洲','光一','中一素食','Maryjane','尚家香雲南']

//random出一個數字的
var rand1=(n)=>{
    var a = Math.random()*n
    var b = Math.floor(a)
    return b
}

//random出兩個數字的
var rand2 = (n)=>{
    var result=[]
    
    var a = Math.random()*n
    var b = Math.floor(a)
    var c = Math.random()*n
    var d = Math.floor(c)
   while(d==b){
    var c = Math.random()*n
    var d = Math.floor(c)
    }
   var result = {
    "one": b,
    "two": d
    }
    return result

}

//把已經出現過的餐廳剔除掉，創建一個新的list
var newList = (oldList)=>{
    var newlist=[]
    for(i=0 ; i <oldList.length ; i++){
       
        if( typeof( oldList[i]) == 'undefined' ){
            continue
        }
        else{
            newlist.push(oldList[i])
        }
    }
    return newlist
}


//先hide
$('#optionList').hide()


//????????????????????????????????????先讓使用者選擇哪一個地區??????????????????????///////////
$('#n1').on('click',function(){
    //把下拉選單ban不見
    $('.dropdown').remove()
    List = List1
   
    var first = rand2(List.length)
   
    //show出兩個圈圈讓使用者選擇
    $('#option1').text(List[first.one])
    $('#option2').text(List[first.two])
    $('#optionList').show()
    //把已經出現的餐廳從清單中刪除 刪除後該元素會變成empty(undefined)
    delete List[first.one]
    delete List[first.two]
   
    List=newList(List)
 
})

$('#n2').on('click',function(){
    //把下拉選單ban不見
    $('.dropdown').remove()
    List = List2
   
    var first = rand2(List.length)
   
    //show出兩個圈圈讓使用者選擇
    $('#option1').text(List[first.one])
    $('#option2').text(List[first.two])
    $('#optionList').show()
    //把已經出現的餐廳從清單中刪除 刪除後該元素會變成empty(undefined)
    delete List[first.one]
    delete List[first.two]
   
    List=newList(List)
 
})

$('#n3').on('click',function(){
    //把下拉選單ban不見
    $('.dropdown').remove()
    List = List3

    var first = rand2(List.length)
   
    //show出兩個圈圈讓使用者選擇
    $('#option1').text(List[first.one])
    $('#option2').text(List[first.two])
    $('#optionList').show()
    //把已經出現的餐廳從清單中刪除 刪除後該元素會變成empty(undefined)
    delete List[first.one]
    delete List[first.two]
   
    List=newList(List)
 
})

$('#n4').on('click',function(){
    //把下拉選單ban不見
    $('.dropdown').remove()
    List = List4
    var first = rand2(List.length)
   
    //show出兩個圈圈讓使用者選擇
    $('#option1').text(List[first.one])
    $('#option2').text(List[first.two])
    $('#optionList').show()
    //把已經出現的餐廳從清單中刪除 刪除後該元素會變成empty(undefined)
    delete List[first.one]
    delete List[first.two]
   
    List=newList(List)
 
})

/////////////////////////////////////////再來要讓使用者選餐廳了/////////////////////////



    $('#option1').on('click',function(){
        if(List.length==0){
            var Finaltext = $('#option1').text()
            console.log(Finaltext)
            $('#option1').css('animation-name','fade-out').css('animation-duration','1s')
            $('#option2').remove()
            $('#option1').remove()
            $('.col-3').remove()
            var FinalButton = $('<button>').attr('class','btn btn-warning').attr('type','button').attr('id','finalbutton').text(Finaltext)
            var FinalCol = $('<div>').attr('class','col-6').append(FinalButton)
            var Bfinalcol = $('<div>').attr('class','col-3')
            $('#optionList').append(Bfinalcol).append(FinalCol)
        }
        else{
            var num = rand1(List.length)
            var res = List[num]
            $('#option2').text(res)
            delete List[num]
            List = newList(List)
        }
            
    })
    $('#option2').on('click',function(){
        if(List.length==0){
            var Finaltext = $('#option2').text()
            $('#option2').remove()
            $('#option1').remove()
            $('.col-3').remove()
            var FinalButton = $('<button>').attr('class','btn btn-warning').attr('type','button').attr('id','finalbutton').text(Finaltext)
            var FinalCol = $('<div>').attr('class','col-6').append(FinalButton)
            var Bfinalcol = $('<div>').attr('class','col-3')
            $('#optionList').append(Bfinalcol).append(FinalCol)

        }
        else{
            var num = rand1(List.length)
            var res = List[num]
            $('#option1').text(res)
            delete List[num]
            List = newList(List)
        }
            
    })