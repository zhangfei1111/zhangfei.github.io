 var btnBuy = document.querySelector(".btnBuy");
   var count = document.querySelector(".count-input");
   var btnBuyPage = document.querySelector(".btnBuy_page"); 
   var price = document.getElementById("price");
   var cprice = document.querySelector(".cPrice");
   var oprice = document.querySelector(".oPrice");
   btnBuy.onclick = function(){
   	if(count.value > 0){
   		btnBuyPage.style.display ="block";
   		price.innerHTML = count.value;
   	    cprice.innerHTML = (oPrice.innerHTML) * (price.innerHTML);	
   	}else{
   		alert("您还没有选择购买的商品");
   	}
   } 
   var disBtn = document.querySelector(".disBtn");
   var sureBTN = document.querySelector(".sureBTN");
   var btnBuyPage = document.querySelector(".btnBuy_page");
   disBtn.onclick = function(){
   	   btnBuyPage.style.display = "none";
   }
   //正则的校验
var mail = document.getElementById("mail");
var phoneNumber = document.getElementById("phoneNumber");
var postcode = document.getElementById("postcode");
function email(){
reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
       if(!reg.test(mail.value)){       
            //alert("对不起，您输入的邮箱格式不正确!");     
       return false;
	    } else{
	    	return true;
	    }
}    
function phone(){
	reg = /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/;
	if(!reg.test(phoneNumber.value)){       
            //alert("对不起，您输入的电话号码格式不正确!");     
       return false;
	    } else{
	    	return true;
	    }
}
function postNum(){
	reg = /[1-9]\d{5}/;
	if(!reg.test(postcode.value)){       
            //alert("对不起，您输入的邮编码格式不正确!");     
       return false;
	    }else{
	    	return true;
	    }
}
   sureBTN.onclick = function(){
     if(email()){
     	if(phone()){
     		if(postNum()){
     			
     			
     			
     			
     			
     			
     			
     			
     			$("#page").css("display", "block");
     			
     			
     			
     			
     			
     			
     			
     			
     		}else{
     			alert("您输入的邮编号可能有误.");
     		}
     	}else{
     		alert("您输入的电话可能有误.");
     	}
     } else{
     	alert("您输入的邮箱可能有误.");
     }
   }
   function changeProvince() {
			with(document.myForm) {
				var countrys = new Array();
				countrys["0"] = ["—请选择所在省份和地区—"];
				countrys["北京市"] = ["朝阳区", "东城区", "西城区", "海淀区", "宣武区", "丰台区"];
				countrys["上海市"] = ["宝山区", "长宁区", "闵行区", "杨浦区","黄浦区","虹口区","静安区"];
				countrys["北京市"] = ["朝阳区", "东城区", "西城区", "海淀区", "宣武区", "丰台区",];
				countrys["广州省"] = ["广州市", "珠海市", "汕头市", "揭阳市", "潮州市", "湛江市",];
				countrys["深圳市"] = ["福田区", "南山区", "宝安区", "龙岗区", "盐田区", "罗湖区",];
				var value = country.value;
				province.options.length = 0;
				var option;
				for(i = 0; i < countrys[value].length; i++) {
					option = new Option(countrys[value][i], countrys[value][i]);
					province.options.add(option);
					province.options.selected=countrys[value][0];
				}
				if(country.value == "0")
					province.disabled = true;
				else
					province.disabled = false;
			}
		}
   
   
   
   
   
   
   //图片验证
   $("#yz_move").on("mousedown", function(ev) {
			$("#yz_move").stop();
			$("#head").stop();
			$("#head").animate({
				"opacity": 1
			})

			var x = ev.clientX;
			$(document).on("mousemove", function(ev) {
				$("#yz_move").css("left", ev.clientX - x);
				$("#head").css("left", ev.clientX - x - 10);
			})
			$(document).on("mouseup", function(ev) {

				if(ev.clientX - x > 75 && ev.clientX - x < 83) {
					$("#yz_move").stop();
					$("#head").stop();
					//验证成功就会运行到这里, 
					$(".btnBuy_page").css("display","none");
					$("#page").css("display","none");
					alert("提交成功")
				} else {
					$("#head").stop();
					$("#yz_move").stop();
					$("#head").css({
						"opacity": 1
					})
					$("#yz_move").animate({
						"left": 0
					})
					$("#head").animate({
						"left": -10
					})
					$("#head").animate({
						"opacity": 0
					})
				}
				$(document).unbind("mousemove").unbind("mouseup");
			})
		})