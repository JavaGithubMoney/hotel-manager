$(function(){
	// 楼层 35
	var element = '<tr class="floor35"><td></td><td></td>'
		    +'<td colspan="2"><div></div><div><a class="W35-1" href="./roomGuest.jsp?rNum=W35-1">W35-1<p class="userName"></p></a></div></td>'
			+'<td><div></div><div><a class="W35-2" href="./roomGuest.jsp?rNum=W35-2">W35-2<p class="userName"></p></a></div></td><td rowspan="33"></td>'
			+'<td><div></div><div><a class="E35-2" href="./roomGuest.jsp?rNum=E35-2">E35-2<p class="userName"></p></a></div></td>'
			+'<td colspan="2"><div></div><div><a class="E35-1" href="./roomGuest.jsp?rNum=E35-1">E35-1<p class="userName"></p></a></div></td><td colspan="2"></td></tr>';
	$('#building').append(element);

	// 楼层 30-34
    for (var high = 34; high >= 30; high--) {
	  	let id1 = "W" + high + "-1";
	  	let id2 = "W" + high + "-2";
	  	let id3 = "W" + high + "-3";
	  	let id4 = "E" + high + "-3";
	  	let id5 = "E" + high + "-2";
	  	let id6 = "E" + high + "-1";
	  	var element = '<tr><td colspan="2"><div></div><div><a class="W'+high+'-1" href="./roomGuest.jsp?rNum='+id1+'">W'+high+'-1<p class="userName"></p></a></div></td>'
			+'<td colspan="2"><div></div><div><a class="W'+high+'-2" href="./roomGuest.jsp?rNum='+id2+'">W'+high+'-2<p class="userName"></p></a></div></td>'
			+'<td><div></div><div><a class="W'+high+'-3" href="./roomGuest.jsp?rNum='+id3+'">W'+high+'-3<p class="userName"></p></a></div></td>'
			+'<td><div></div><div><a class="E'+high+'-3" href="./roomGuest.jsp?rNum='+id4+'">E'+high+'-3<p class="userName"></p></a></div></td>'
			+'<td colspan="2"><div></div><div><a class="E'+high+'-2" href="./roomGuest.jsp?rNum='+id5+'">E'+high+'-2<p class="userName"></p></a></div></td>'
			+'<td colspan="2"><div></div><div><a class="E'+high+'-1" href="./roomGuest.jsp?rNum='+id6+'">E'+high+'-1<p class="userName"></p></a></div></td></tr>';
	  	$('#building').append(element);
    }
    // 楼层 25-29
    for (var mid = 29; mid >= 25; mid--) {
	  	let id1 = "W" + mid + "-1";
	  	let id2 = "W" + mid + "-2";
	  	let id3 = "W" + mid + "-3";
	  	let id4 = "E" + mid + "-5";
	  	let id5 = "E" + mid + "-3";
	  	let id6 = "E" + mid + "-2";
	  	let id7 = "E" + mid + "-1";
	    $('#building').append(element);
        var element = '<tr><td colspan="2"><div></div><div><a class="W'+mid+'-1" href="./roomGuest.jsp?rNum='+id1+'">W'+mid+'-1<p class="userName"></p></a></div></td>'
            +'<td colspan="2"><div></div><div><a class="W'+mid+'-2" href="./roomGuest.jsp?rNum='+id2+'">W'+mid+'-2<p class="userName"></p></a></div></td>'
            +'<td><div></div><div><a class="W'+mid+'-3" href="./roomGuest.jsp?rNum='+id3+'">W'+mid+'-3<p class="userName"></p></a></div></td>'
            +'<td><div></div><div><a class="E'+mid+'-5" href="./roomGuest.jsp?rNum='+id4+'">E'+mid+'-5<p class="userName"></p></a></div></td>'
            +'<td colspan="2"><div></div><div><a class="E'+mid+'-3" href="./roomGuest.jsp?rNum='+id5+'">E'+mid+'-3<p class="userName"></p></a></div></td>'
            +'<td><div></div><div><a class="E'+mid+'-2" href="./roomGuest.jsp?rNum='+id6+'">E'+mid+'-2<p class="userName"></p></a></div></td>'
            +'<td><div></div><div><a class="E'+mid+'-1" href="./roomGuest.jsp?rNum='+id7+'">E'+mid+'-1<p class="userName"></p></a></div></td></tr>';
    }
    // 楼层 3-24
    for (var floor = 24; floor>=3; floor--) {
	  	let id1 = "W" + floor + "-1";
	  	let id2 = "W" + floor + "-2";
	  	let id3 = "W" + floor + "-3";
	  	let id4 = "W" + floor + "-5";
	  	let id5 = "E" + floor + "-6";
	  	let id6 = "E" + floor + "-5";
	  	let id7 = "E" + floor + "-3";
	  	let id8 = "E" + floor + "-2";
	  	let id9 = "E" + floor + "-1";
	  	var element = '<tr><td colspan="2"><div></div><div><a class="W'+floor+'-1" href="./roomGuest.jsp?rNum='+id1+'">W'+ floor +'-1<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="W'+floor+'-2" href="./roomGuest.jsp?rNum='+id2+'">W'+ floor +'-2<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="W'+floor+'-3" href="./roomGuest.jsp?rNum='+id3+'">W'+ floor +'-3<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="W'+floor+'-5" href="./roomGuest.jsp?rNum='+id4+'">W'+ floor +'-5<p class="userName"></p></a></div></td>'
	  		+'<td class="free"><div></div><div><a class="E'+floor+'-6" href="./roomGuest.jsp?rNum='+id5+'">E'+ floor +'-6<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="E'+floor+'-5" href="./roomGuest.jsp?rNum='+id6+'">E'+ floor +'-5<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="E'+floor+'-3" href="./roomGuest.jsp?rNum='+id7+'">E'+ floor +'-3<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="E'+floor+'-2" href="./roomGuest.jsp?rNum='+id8+'">E'+ floor +'-2<p class="userName"></p></a></div></td>'
	  		+'<td><div></div><div><a class="E'+floor+'-1" href="./roomGuest.jsp?rNum='+id9+'">E'+ floor +'-1<p class="userName"></p></a></div></td></tr>';
	  	$("#building").append(element);
  	}
  	// 楼层 2
    var last = '<tr><td colspan="2"><div></div><div><a class="W2-1" href="./roomGuest.jsp?rNum=W2-1">W2-1<p class="userName"></p></a></div></td>'
    	+'<td><div></div><div><a class="W2-2" href="./roomGuest.jsp?rNum=W2-2">W2-2<p class="userName"></p></a></div></td>'
    	+'<td><div></div><div><a class="W2-3" href="./roomGuest.jsp?rNum=W2-3">W2-3<p class="userName"></p></a></div></td>'
    	+'<td colspan="3"></td>'
    	+'<td><div></div><div><a class="E2-5" href="./roomGuest.jsp?rNum=E2-5">E2-5<p class="userName"></p></a></div></td>'
    	+'<td><div></div><div><a class="E2-3" href="./roomGuest.jsp?rNum=E2-3">E2-3<p class="userName"></p></a></div></td>'
    	+'<td><div></div><div><a class="E2-2" href="./roomGuest.jsp?rNum=E2-2">E2-2<p class="userName"></p></a></div></td>'
    	+'<td><div></div><div><a class="E2-1" href="./roomGuest.jsp?rNum=E2-1">E2-1<p class="userName"></p></a></div></td></tr>';
    $("#building").append(last);
  
    //设置左边栏的高度为文档的高度
	$(".main-nav").css('height',parseInt($(document).height())-50);
});

//判断SPC 小业主
var topState = function(name) { //name 为房间类型
	if(name == "小业主") return "owner";
	if(name == undefined) return "SPC"; //数据库中TYPE为NULL的默认为SPC
	if(name == "SPC") return "SPC";
	else return name;
}


//判断已租 待租 非管理 其他使用
var bottomState = function(data) {
	if(data == 0) return "unrented";
	if(data == 1) return "rented";
	if(data == 2) return "unmanage";
	if(data == 3) return "other";
	else console.log("wrong");
}

var getRoomState = function () {

    $.ajax({
	    type: 'GET',
	    url: '/LD/userRoom/getAllRoomState.action',
	    success: function(data) {
	    	console.log(data);
	      	var roomList = data.roomStateList;//全部room信息
	      	var roomInfo = data.roomInfo;

			jQuery("div a p").each(function(){
				jQuery(this).text("-");
			})

			jQuery("td div:nth-child(1)").addClass("top");

	     	for (item in roomList) {
		        let roomNum = roomList[item].room_NUMBER;
		        let userName = roomList[item].cus_NAME;
		        let roomID = roomList[item].room_ID;
		        let cusID = roomList[item].cus_ID;
		        let state = roomList[item].state;

		        if(state != 0 && state != 2){
		        	if(userName != ""){
                        $("." + roomNum).children("p").text(userName);
                        $("." + roomNum).attr("href", "./roomGuest.jsp?rid="+roomID+"&rNum="+roomNum);
					}

				}
                $("." + roomNum).parent().addClass(bottomState(state));
                $("." + roomNum).parent().parent().find(".top").addClass(topState(roomInfo[roomNum]));

	        }

	    }
    });
}



