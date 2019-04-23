function init(){
	var num=document.getElementById("num");
	num.value=0;
	num.disabled="disabled";

	<!-- 找到所有输入按钮存储到数组里 -->
	var oButton=document.getElementsByTagName("input");
	var btn_num1;
	var fh;
	for(var i=0;i<oButton.length;i++){
		oButton[i].onclick=function(){
			//是数字的情况
			if(isNumber(this.value)){
				if(isNull(num.value)){
					num.value=this.value;
				}else{
					num.value=num.value+this.value;
				}
			}
			//非数字的情况
			else{
				//存储之前输入的数据
				var btn_num=this.value;
				
				switch(btn_num){
					case "+":
						//强制类型转换
						btn_num1 = Number(num.value);
						num.value="+";
						//告诉=符号进行的是什么运算
						fh="+";
					    break;
					case "-":
						btn_num1=Number(num.value);
						num.value="-";
						fh="-";
					    break;
					case "*":
						btn_num1=Number(num.value);
						num.value="*";
						fh="*";
					    break;
					case "/":
						btn_num1=Number(num.value);
						num.value="/";
						fh="/";
					    break;
					case ".":
						num.value=dec_number(num.value);
					    break;
					case "back":
						num.value=back(num.value);
					    break;
					case "c":
						num.value="0";
					    break;
					case "+/-":
						num.value=sign(num.value);
					    break;
					case "=":
					    switch(fh){
					    	case "+":
					    	  num.value=btn_num1+Number(num.value);

					          break;
					        case "-":
					    	   num.value=btn_num1-Number(num.value);

					           break;
					        case "*":
					    	   num.value=btn_num1*Number(num.value);

					           break;
					        case "/":
					           if(Number(num.value)==0){
					           	    alert("除数不能是0");
					             	num.value=0;
					           }else{
					           	  num.value=btn_num1/Number(num.value);
					           }

					           break;
					    }
					    break;
				}
			}
		}
	}
}
/*正负号*/
function sign(n){
   // if(n.indexOf("-")==-1){
   // 	  n="-"+n;
   // }else{
   // 	  n=n.substr(1,n.length);
   // }
   return Number(n)*-1;
}
/*退位键*/
function back(n){
	//截取字符串，删除最后一位
   n=n.substr(0,n.length-1);
   if(isNull(n)){
   	  n="0";
   }
   return n;
}
/*小数点*/
function dec_number(n){
	//若小数点不存在，就返回n.
   if(n.indexOf(".")==-1){
      n=n+".";
   }
   return n;
}
/*验证文本框是否为空或者0或者运算符号*/
function isNull(n){
   if(n=="0" || n.length==0 || n=="+" || n=="-" || n=="*" || n=="/"){
       return true;
   }else{
   	   return false;
   }
}

//判断是不是数字
function isNumber(n){
   // if(!isNaN(n)){
   //   	return true;//参数n是数字
   // }else{
   // 	   return false;//参数n不是数字
   // }
  return  !isNaN(n);
}
// isNaN：不能转换为数字：true，可以转换成数字是false