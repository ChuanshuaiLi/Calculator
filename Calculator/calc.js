function init(){
	var num=document.getElementById("num");
	num.value=0;
	num.disabled="disabled";

	<!-- �ҵ��������밴ť�洢�������� -->
	var oButton=document.getElementsByTagName("input");
	var btn_num1;
	var fh;
	for(var i=0;i<oButton.length;i++){
		oButton[i].onclick=function(){
			//�����ֵ����
			if(isNumber(this.value)){
				if(isNull(num.value)){
					num.value=this.value;
				}else{
					num.value=num.value+this.value;
				}
			}
			//�����ֵ����
			else{
				//�洢֮ǰ���������
				var btn_num=this.value;
				
				switch(btn_num){
					case "+":
						//ǿ������ת��
						btn_num1 = Number(num.value);
						num.value="+";
						//����=���Ž��е���ʲô����
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
					           	    alert("����������0");
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
/*������*/
function sign(n){
   // if(n.indexOf("-")==-1){
   // 	  n="-"+n;
   // }else{
   // 	  n=n.substr(1,n.length);
   // }
   return Number(n)*-1;
}
/*��λ��*/
function back(n){
	//��ȡ�ַ�����ɾ�����һλ
   n=n.substr(0,n.length-1);
   if(isNull(n)){
   	  n="0";
   }
   return n;
}
/*С����*/
function dec_number(n){
	//��С���㲻���ڣ��ͷ���n.
   if(n.indexOf(".")==-1){
      n=n+".";
   }
   return n;
}
/*��֤�ı����Ƿ�Ϊ�ջ���0�����������*/
function isNull(n){
   if(n=="0" || n.length==0 || n=="+" || n=="-" || n=="*" || n=="/"){
       return true;
   }else{
   	   return false;
   }
}

//�ж��ǲ�������
function isNumber(n){
   // if(!isNaN(n)){
   //   	return true;//����n������
   // }else{
   // 	   return false;//����n��������
   // }
  return  !isNaN(n);
}
// isNaN������ת��Ϊ���֣�true������ת����������false