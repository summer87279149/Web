var showRecVAV = false;
var hpRecVAV = false;
var hpRechuiHtml = '';
function loadRecommend(args){
	var ABTest = Math.floor(Math.random()*2);
	var ABTestCookie = getCookie("ABTest");
	if(ABTestCookie == ''){
		// 获取0和1的随机数 random = 0 显示酒仙的  = 1 显示百分点的
		var randomNum = Math.floor(Math.random()*2);
		ABTest = randomNum;
		setABtestCookie("ABTest",ABTest);
	}else{
		ABTest = ABTestCookie;
	}
	
	window["_BFD"] = window["_BFD"] || {};
	if(args == 'index'){
		// 首页猜你喜欢推荐 ,已测试过不在做ABTest
		// 效果不好,暂时取消
//    	_BFD.showRecVAV = function(data,bid,req_id){
//    		showRecVAV = true;
//    		try{
//    			var srcs = ["3774","3775","3776","3777","3778","3779","3780","3781","3782","3783"];
//    			var indexTabSource=["71","72","73","74","75","76","77","78","79","80"];
//	    		/*
//	    		此处请添加推荐栏的回调方法,参数data为我们返回的商品信息数组
//	    		如果只返回商品ID，data格式为["item1","item2","item3"]这样的数组。
//	    		如果商品信息全返回，data格式为[{"iid":"item1","img":"http://images.*.com/**.jpg","name":"商品1","price":10.0,"url":"http://**"},{"iid":"item2","img":"http://images.*.com/**.jpg","name":"商品2","price":120.0,"url":"http://**"}]
//	    
//	    		推荐栏请添加百分点的logo，详见：http://www.baifendian.com/service/logo.html
//	    		*/
//	    		var indexTabConHtml = '';
//    			indexTabConHtml +='<ul>';
//    			for(var i=0;i<data.length;i++){
//    				indexTabConHtml += '<li><div class="indexTabPic"><a href="'+data[i].url+'?src='+srcs[i]+'&source='+indexTabSource[i]+'" target="_blank" title="'+data[i].name+'"><img src="'+data[i].img+'" data-original="'+data[i].img+'" width="160" height="160" alt="'+data[i].name+'"></a><p class="Tag Tag_"></p></div><div class="indexTabTit"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></div><div class="indexTabPrice"><strong  goodid="'+data[i].iid+'" class="jxIndex_nowPrice_'+data[i].iid+'">￥</strong></div></li>';
//    			}
//	    		indexTabConHtml +='</ul>';
//	    		$('.indexTabCon').eq(2).html(indexTabConHtml);
//	    		
//	    		handleIndexTabBox();
//    		}catch(e){
//    			showRecVAV = false;
//    		}
//    		try{
//    			_BFD.bind(data,"dt_RecVAV",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
//    		}catch(e2){}
//    	}
    	
    	// 疯狂抢购推荐	ABTest 暂不做
    	/*
    	if(ABTest == 0){
    		$('.indexTabCon').eq(0).show();
    		hpRecVAV = true;
    		// ABTest到酒仙也给百分点一个反馈
    		_BFD.hpRecVAV =  function(data,bid,req_id){
	    		try{
	    			_BFD.bind(data,"hpRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e){}
    		}
    	}else{
			_BFD.hpRecVAV =  function(data,bid,req_id){
				hpRecVAV = true;
				// 如果疯狂抢购已经是显示的，不加载百分点
				if($('.indexTabCon').eq(0).css('display')=='none'){
					try{
		    			var srcs = ["4756", "4757", "4758", "4759", "4760", "4761", "4762", "4763", "4764", "4765"];
			    		var indexTabConHtml = '';
		    			indexTabConHtml +='<ul>';
		    			for(var i=0;i<data.length;i++){
		    				indexTabConHtml += '<li><div class="indexTabPic"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'"><img src="'+data[i].img+'" data-original="'+data[i].img+'" width="160" height="160" alt="'+data[i].name+'"></a><p class="Tag Tag_"></p></div><div class="indexTabTit"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></div><div class="indexTabPrice"><strong  goodid="'+data[i].iid+'" class="jxIndex_nowPrice_'+data[i].iid+'">￥</strong></div></li>';
		    			}
			    		indexTabConHtml +='</ul>';
			    		$('.indexTabCon').eq(0).html(indexTabConHtml);
		    		}catch(e){
		    			hpRecVAV = false;
		    		}
		    		try{
		    			_BFD.bind(data,"hpRecVAV",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		    		}catch(e2){}
				}
			}
    	}
    	*/
    	//handleIndexTabBoxLoop();
    	// 等待3秒如果百分点没有回调数据，加载价格
		//setTimeout("if((!"+showRecVAV+"||!"+hpRecVAV+")){$('.indexTabCon').eq(0).show();handleIndexTabBox();}",3000);
    	
    	// 优惠推荐
    	if(ABTest == 0){
    		_BFD.hpRechui =  function(data,bid,req_id){
	    		try{
	    			_BFD.bind(data,"hpRechui",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e){}
    		}
    	}else{
    		_BFD.hpRechui =  function(data,bid,req_id){
    			try{
    				var srcs = ["6121","6122","6123","6124","6125","6126","6127","6128","6129","6130","6131","6132","6133","6134","6135","6136","6137","6138"];
    				hpRechuiHtml +='<div class="raceList" waitpro="0"><ul class=" clearfix">';
    				for(var i=0;i<data.length;i++){
    					if(i<6){
	    					hpRechuiHtml +='<li><div class="raceListPic"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'"><img src="'+data[i].img+'" width="160" height="160" alt="'+data[i].name+'" /></a></div>';
	    					hpRechuiHtml +='<div class="raceListTit"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></div>';
	    					hpRechuiHtml +='<div class="raceListPrice"><strong goodId="'+data[i].iid+'" class="jxIndex_nowPrice_'+data[i].iid+'">￥</strong></div>';
	    					hpRechuiHtml +='<div class="raceListTime" id="jxIndex_timeAct_'+data[i].iid+'" ></div></li>';
    					}
    				}
    				hpRechuiHtml +='</ul></div>';
    				
    				hpRechuiHtml +='<div class="raceList" waitpro="1"><ul class=" clearfix">';
    				for(var i=0;i<data.length;i++){
    					if(i>5 && i<12){
	    					hpRechuiHtml +='<li><div class="raceListPic"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'"><img src="'+data[i].img+'" width="160" height="160" alt="'+data[i].name+'" /></a></div>';
	    					hpRechuiHtml +='<div class="raceListTit"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></div>';
	    					hpRechuiHtml +='<div class="raceListPrice"><strong goodId="'+data[i].iid+'" class="jxIndex_nowPrice_'+data[i].iid+'">￥</strong></div>';
	    					hpRechuiHtml +='<div class="raceListTime" id="jxIndex_timeAct_'+data[i].iid+'" ></div></li>';
    					}
    				}
    				hpRechuiHtml +='</ul></div>';
    				
    				hpRechuiHtml +='<div class="raceList" waitpro="2"><ul class=" clearfix">';
    				for(var i=0;i<data.length;i++){
    					if(i>11){
	    					hpRechuiHtml +='<li><div class="raceListPic"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'"><img src="'+data[i].img+'" width="160" height="160" alt="'+data[i].name+'" /></a></div>';
	    					hpRechuiHtml +='<div class="raceListTit"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></div>';
	    					hpRechuiHtml +='<div class="raceListPrice"><strong goodId="'+data[i].iid+'" class="jxIndex_nowPrice_'+data[i].iid+'">￥</strong></div>';
	    					hpRechuiHtml +='<div class="raceListTime" id="jxIndex_timeAct_'+data[i].iid+'" ></div></li>';
    					}
    				}
    				hpRechuiHtml +='</ul></div>';
    				handleYouHuiBoxLoop();
    			}catch(e){
        		}
	    		try{
	    			_BFD.bind(data,"hpRechui",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e){}
    		}
    		
    	}
//    	setTimeout("if(!"+showRecVAV+"){handleIndexTabBox();}",3000);
    	
	}else if(args == 'listnobai'){   
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		//>>> 购买了该商品的用户还浏览
		listbuyandlookbai();
	}else if(args == 'listnohong'){   
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookhong();
		
		
	}else if(args == 'listnoother'){   
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookother();
		
		
	}else if(args == 'listmorebai'){ 
		
		
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookbai();
		
		// >>> 猜你喜欢
		listmoreulikebai();
		
		// >>> 新品推荐
		listnewbai();
		
		$('#moreall').show();
		
	}else if(args == 'listmorehong'){
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookhong();
		
		// >>> 猜你喜欢
		listmoreulikehong();
		
		// >>> 新品推荐
		listnewhong();
		
		$('#moreall').show();
	}else if(args == 'listmoreother'){
		
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookother();
		
		// >>> 猜你喜欢
		listmoreulikeother();
		
		// >>> 新品推荐
		listnewother();
		
		$('#moreall').show();
		
	}else if(args == 'listlessbai'){//猜你喜欢与新品推荐
	
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookbai();
	
		// >>> 猜你喜欢
		listlessulikebai();
		
		
	}else if(args == 'listlesshong'){//猜你喜欢与新品推荐
	
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookhong();
		
		// >>> 猜你喜欢
		listlessulikehong();
		
		
	}else if(args == 'listlessother'){//猜你喜欢与新品推荐
	
		// >>>列表页热卖推荐	已测试不用ABTest
		listhotsale();
		
		// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
		listlastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		listbuyandlookother();
		
		// >>> 猜你喜欢
		listlessulikeother();
		
	}else if(args == 'searchmore'){ //猜你喜欢与新品推荐
		
		// >>> 搜索页有结果推荐 热卖推荐
		searchyeshotsale(ABTest);
		
		// >>> 搜索页 最终购买推荐
		searchyeslastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		searchyesbuyandlook();	
		
    	// >>> 猜你喜欢
		searchmoreulike();
		
		// >>> 新品推荐
		searchnew();
		
		$('#moreall').show();
		
	}else if(args == 'searchless'){
		
		// >>> 搜索页有结果推荐 热卖推荐
		searchyeshotsale(ABTest);
		
		// >>> 搜索页 最终购买推荐
		searchyeslastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		searchyesbuyandlook();	
		
    	// >>> 猜你喜欢
		searchlessulike();
		
	}else if(args == 'searchno'){  
	
		// >>> 搜索页有结果推荐 热卖推荐
		searchnohotsale(ABTest);
		
		// >>> 搜索页 最终购买推荐
		searchnolastbuy(ABTest);
		
		//>>> 购买了该商品的用户还浏览
		searchnobuyandlook();	
		
    	// >>> 猜你喜欢
		searchnoulike();
		
	}else if(args == 'detail'){
		//最佳组合
		try{
			var isRecJIA = false;
			_BFD.dtRecJIA = function(data,bid,req_id){
				if(!isRecJIA){
					isRecJIA = true;
					if($(".setTab").find("div").length > 0){
						  $(".setWrap .setTab").empty().append('<div class="item cur"><span>优惠套装</span></div><div class="item"><span>推荐组合</span></div>');
					}else{
						  $(".setWrap .setTab").empty().append('<div class="item cur"><span>推荐组合</span></div>'); 
					}
					var dataLength = data.length;
					if(data.length == undefined || data.length == 0){
						$(".setWrap").hide();
						return;
					}
					if(data.length > 10){
						dataLength = 10;
					}
					var detailGroupHtml = '';
					var srcs = ["6791","6792","6793","6794","6795","6796","6797","6798","6801","6802"];
					detailGroupHtml += '<div class="setCon"><div class="setBox"><div class="combBox"><div class="master"><i class="dIcon"></i>';
					detailGroupHtml += '<div class="m-img"><a href="http://www.jiuxian.com/goods-'+goodsId+'.html" target="_blank"><img src="http://img07.jximage.com'+goodsListImgPath+'" width="106" height="106"></a></div>';
					detailGroupHtml += '<div class="m-name"><a href="http://www.jiuxian.com/goods-'+goodsId+'.html" target="_blank" title="'+goodsName+'">'+goodsName+'</a></div></div>';
					detailGroupHtml += '<div class="vice"><div class="item"><ul class="clearfix" style="width: 1000px;">';
					var groupPids=[];
					groupPids.push(goodsId);
					for(var i=0;i<dataLength;i++){
						groupPids.push(data[i].iid);
						detailGroupHtml +='<li><div class="m-img"><a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'"><img alt="'+data[i].name+'" src="'+data[i].img+'" width="106" height="106" /></a></div>';
						detailGroupHtml +='<div class="m-name"><a target="_blank" pid="'+data[i].iid+'" href="'+data[i].url+'?src='+srcs[i]+'">'+data[i].name+'</a></div>';
						detailGroupHtml +='<div class="m-price" goodsId="'+data[i].iid+'"><label><input name="group" type="checkbox" value=""><span>￥</span><span></span></label></div></li>';
					}
					detailGroupHtml += '</ul></div></div></div></div>';
					detailGroupHtml += '<div class="accBox"><div class="total">已选择<strong>0</strong>个商品</div><p><span>搭配价：</span><strong></strong></p>'+
					'<a href="javascript:void(0);" class="setBuy" onclick="javascript:groupToCart();">购买套装</a></div></div>';
					$(".setWrap .group").html(detailGroupHtml);
					
					var listWid = dataLength*200;
					$('.vice:last').find('ul').css('width',listWid+'px');
					$(".setWrap .setTab .item:eq(0)").addClass("cur");
					$(".setWrap .setConWrap .setCon:gt(0)").hide();
					$(".setWrap").show();
		            getProductActPrice(groupPids.join(','),'handleGroupPrice');
		            _BFD.bind(data,"dtRecJIA",req_id,bid,true);
				}
			}
		}catch(e){
			$(".setWrap").hide();
		}
		// 详情页酒友推荐
        _BFD.showRecDAD = function(data,bid,req_id){
        	var friendsRecommend = '';
        	try{
        		var srcs = ["3785","3786","3787","3788","3789"];
	            var proIds=[];
	            var length = data.length;
	            if(data.length > 5){
	            	length = 5;
	            }
	            for(var i=0;i<length;i++){
	            	proIds.push(data[i].iid);
	            	friendsRecommend += '<li><div class="pic"> <a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'"><img src="'+data[i].img+'" alt="'+data[i].name+'" width="120" height="120" original="'+data[i].img+'"></a></div>';
	            	friendsRecommend += '<div class="name"><a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'">'+data[i].name+'</a></div><div class="price" goodId="'+data[i].iid+'"></div></li>';
	            }
	            $("#friendsRecommend").html(friendsRecommend);
	            getProductActPrice(proIds.join(','),'handleTastePrice');
        	}catch(e){
        		$("#friendsRecommend").parents(".d-box").hide();
        	}
        	try{
        		_BFD.bind(data,"dt_RecDAD",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
        	}catch(e2){}
        }
        
        //买了又买推荐
        _BFD.dtRecgou = function(data,bid,req_id){
        	var buyAndBuyHtml = '';
        	try{
        		var srcs = ["6163","6164","6165","6166","6167"];
	            var proIds=[];
	            var length2 = data.length;
	            if(data.length > 5){
	            	length2 = 5;
	            }
	            for(var i=0;i<length2;i++){
	            	proIds.push(data[i].iid);
	            	buyAndBuyHtml += '<li><div class="pic"> <a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'"><img src="'+data[i].img+'" alt="'+data[i].name+'" width="120" height="120" original="'+data[i].img+'"></a></div>';
	            	buyAndBuyHtml += '<div class="name"><a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'">'+data[i].name+'</a></div><div class="price" goodId="'+data[i].iid+'"></div></li>'
	            }
	            $("#buyAndBuy").html(buyAndBuyHtml);
	            getProductActPrice(proIds.join(','),'handleTastePrice');
        	}catch(e){
        		$("#buyAndBuy").parents(".d-box").hide();
        	}
        	try{
        		_BFD.bind(data,"dtRecgou",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
        	}catch(e2){}
        }
        
        //猜你喜欢
        try{
			_BFD.dtRecGyl =  function(data,req_id,banner_id){
				var proIds=[];
				var srcs = ["6786","6787","6788","6789","6790"];
				var detailGuessHtml = '';	
				detailGuessHtml +='<h3>猜你喜欢</h3><div class="guessList"><ul class="clearfix">';
				for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
					detailGuessHtml +='<li><div class="pic"><a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'"><img alt="'+data[i].name+'" src="'+data[i].img+'" width="160" height="160" /></a></div>';
					detailGuessHtml +='<div class="name"><a target="_blank" href="'+data[i].url+'?src='+srcs[i]+'">'+data[i].name+'</a></div>';
					detailGuessHtml +='<div class="price" goodId="'+data[i].iid+'"></div></li>';
				}
				detailGuessHtml +='</ul></div></div>';
				$("#detailGuess").html(detailGuessHtml);
				getProductActPrice(proIds.join(','),'handleDetailGuessPrice');
				_BFD.bind(data,"dtRecGyl",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}
		}catch(e){
			$("#detailGuess").hide();
		}
		
        // 加入购物车推荐 	ABTest
        _BFD.dtRecBAB =  function(data,bid,req_id){
        	try{
        		var srcs = ["4824","4826","4827","4828",""];
		        var finalsalesHtml = '';
		        for(var i=0;i<data.length;i++){
		        	finalsalesHtml +='<li><div class="u-notice-pic"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank"><img src="'+data[i].img+'" width="80" height="80" alt="'+data[i].name+'" /></a></div><div class="u-notice-name"><a href="'+data[i].url+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></div><div class="u-notice-price" goodId="data[i].iid"></div></li>';
		        }
		        $(".u-buy-tit").show();
		        $("#u-buy-layId .u-collect-list .clearfix").html(finalsalesHtml);
		        _BFD.bind(data,"dtRecBAB",bid,req_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
        	}catch (e) {
        		$(".u-buy-tit").hide();
        		$(".u-collect-list").hide();
			}
        }
        // 加载百分点代码
        try{
        	loadBFD();
        }catch(e){}
        // 等待3秒如果百分点没有回调数据，显示我们自己的数据
        //setTimeout("if(!"+DAD+"){$('.dLeft-taste').show();}",3000);
	}else if(args == 'cart'){
		// 购物车推荐	ABTest
		if(ABTest == -1){
			_BFD.scRecBAB = function(data,bid,req_id){
				try{
	        		_BFD.bind(data,"scRecBAB",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	        	}catch(e){}
			}
        	// 加载百分点代码
	        try{
	        	loadBFD();
	        }catch(e){}
		}else{
	        var scRecBAB = false;
	        _BFD.scRecBAB = function(data,bid,req_id){
	        	scRecBAB = true;
	        	try{
	    			var cartHtml = '<ul class="clearfix">';
	        		var srcs = ["4331","4332","4333","4334","4335","4336","4337","4338","4339","4340","4341","4342","4343","4344","4345","4346","4347","4348","4349","4350"];
		            var proIds=[];
		            for(var i=0;i<data.length;i++){
		            	proIds.push(data[i].iid);
		            	cartHtml +='<li><div class="imgBox"><a title="'+data[i].name+'" target="_blank" href="'+data[i].url+'?src='+srcs[i]+'" ><img src="'+data[i].img+'" width="160" height="160"/></a><p class="Tag Tag_1"></p></div><div class="goodInfo"><p class="goodName"><a title="'+data[i].name+'" target="_blank" href="'+data[i].url+'?src='+srcs[i]+'">'+data[i].name+'</a></p><p class="goodPrice"><b><span _data="price" _proid="'+data[i].iid+'"  id="cartpri_'+data[i].iid+'">￥</span></b><p class="goodBuy"><a href="javascript:;" _proid="'+data[i].iid+'" _src="'+srcs[i]+'" name="add_to_cart_btn"><i class="cartIcon"></i><span>加入购物车</span></a></p></div></li>';
		            }
					cartHtml += '</ul>';
					$("#mycart_tophotGoods").html(cartHtml);
		            getProductActPrice(proIds.join(','),'handleCartPrice');
					$(".recommenBox").css('height','307px');
					$(".recommenList").css('height','270px');
	        	}catch(e){
	        	}
	        	try{
	        		_BFD.bind(data,"scRecBAB",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	        	}catch(e2){}
	        }
	        
	        // 加载百分点代码
	        try{
	        	loadBFD();
	        }catch(e){}
	        // 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	        setTimeout("if(!"+scRecBAB+"){$('#cart_hotdiv').show();}",3000);
		}
	}else if(args == 'cartNewPro'){
		// 购物车新品推荐	ABTest
		if(ABTest == -1){
			_BFD.scRecCAC = function(data,bid,req_id){
				try{
	        		_BFD.bind(data,"scRecCAC",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	        	}catch(e){}
			}
        	// 加载百分点代码
	        try{
	        	loadBFD();
	        }catch(e){}
		}else{
    		var srcs = ["6811","6812","6813","6814","6815","6816","6817","6818","6819","6820","6821","6822","6823","6824","6825","6826","6827","6828","6829","6830"];
			_BFD.scRecCAC =  function(data,req_id,banner_id){
				try{
	    			var cartHtml = '<ul class="clearfix">';
		            var proIds=[];
		            for(var i=0;i<data.length;i++){
		            	proIds.push(data[i].iid);
		            	cartHtml +='<li><div class="imgBox"><a title="'+data[i].name+'" target="_blank" href="'+data[i].url+'?src='+srcs[i]+'" ><img src="'+data[i].img+'" width="160" height="160"/></a><p class="Tag Tag_1"></p></div><div class="goodInfo"><p class="goodName"><a title="'+data[i].name+'" target="_blank" href="'+data[i].url+'?src='+srcs[i]+'">'+data[i].name+'</a></p><p class="goodPrice"><b><span _data="price" _proid="'+data[i].iid+'"  id="cartpri_'+data[i].iid+'">￥</span></b><p class="goodBuy"><a href="javascript:;" _proid="'+data[i].iid+'" _src="'+srcs[i]+'" name="add_to_cart_btn"><i class="cartIcon"></i><span>加入购物车</span></a></p></div></li>';
		            }
					cartHtml += '</ul>';
					$("#mycart_newPro").html(cartHtml);
		            getProductActPrice(proIds.join(','),'handleCartPrice');
	        	}catch(e){
	        	}
				_BFD.bind(data,"scRecCAC",req_id,banner_id)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}
			_BFD.sc1RecCAC =  function(data,req_id,banner_id){
				try{
	    			var cartHtml = '<ul class="clearfix">';
		            var proIds=[];
		            for(var i=0;i<data.length;i++){
		            	proIds.push(data[i].iid);
		            	cartHtml +='<li><div class="imgBox"><a title="'+data[i].name+'" target="_blank" href="'+data[i].url+'?src='+srcs[i]+'" ><img src="'+data[i].img+'" width="160" height="160"/></a><p class="Tag Tag_1"></p></div><div class="goodInfo"><p class="goodName"><a title="'+data[i].name+'" target="_blank" href="'+data[i].url+'?src='+srcs[i]+'">'+data[i].name+'</a></p><p class="goodPrice"><b><span _data="price" _proid="'+data[i].iid+'"  id="cartpri_'+data[i].iid+'">￥</span></b><p class="goodBuy"><a href="javascript:;" _proid="'+data[i].iid+'" _src="'+srcs[i]+'" name="add_to_cart_btn"><i class="cartIcon"></i><span>加入购物车</span></a></p></div></li>';
		            }
					cartHtml += '</ul>';
					$("#mycart_newPro").html(cartHtml);
		            getProductActPrice(proIds.join(','),'handleCartPrice');
	        	}catch(e){
	        	}
				_BFD.bind(data,"sc1RecCAC",req_id,banner_id)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}
	        // 加载百分点代码
	        try{
	        	loadBFD();
	        }catch(e){}
		}
	}else if(args == 'clear'){
		// 清仓推荐	ABTest
		if(ABTest != -1){
			$('#clearProGood').show();
			_BFD.chlRecVAV = function(data,bid,req_id){
				try{
	    			_BFD.bind(data,"chlRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e2){}
			}
		}else{
			var chlRecVAV = false;
			_BFD.chlRecVAV = function(data,bid,req_id){
				chlRecVAV = true;
	    		try{
	    			var srcs = ["5-5170","5-5171","5-5172","5-5173","5-5174","5-5175","5-5176","5-5177","5-5178","5-5179",
	    			            "5-5180","5-5181","5-5182","5-5183","5-5184","5-5185","5-5186","5-5187","5-5188","5-5189",
	    			            "5-5190","5-5191","5-5192","5-5193","5-5194","5-5195","5-5196","5-5197","5-5198","5-5199",
	    			            "5-5294","5-5295","5-5296","5-5297","5-5298","5-5299","5-5300","5-5301","5-5302","5-5303",
	    			            "5-5304","5-5305","5-5306","5-5307","5-5308","5-5309","5-5310","5-5311","5-5312","5-5313",
	    			            "5-5314","5-5315","5-5316","5-5317","5-5318","5-5319","5-5320","5-5321","5-5322","5-5323"];
		    		/*
		    		此处请添加推荐栏的回调方法,参数data为我们返回的商品信息数组
		    		如果只返回商品ID，data格式为["item1","item2","item3"]这样的数组。
		    		如果商品信息全返回，data格式为[{"iid":"item1","img":"http://images.*.com/**.jpg","name":"商品1","price":10.0,"url":"http://**"},{"iid":"item2","img":"http://images.*.com/**.jpg","name":"商品2","price":120.0,"url":"http://**"}]
		    
		    		推荐栏请添加百分点的logo，详见：http://www.baifendian.com/service/logo.html
		    		*/
		    		var clearHtml = '';
			        var arrayProIds=[];
			        var proIds='';
	    			for(var i=0;i<data.length;i++){
	    				arrayProIds.push(data[i].iid);
	    			}
	    			proIds=arrayProIds.join(',');
	    			jQuery.ajax({type:"POST",url:"/bfdClear.htm?t="+new Date().getTime(),data:{"proIds":proIds},dataType:"json",success:function(data){
	    				var clearGoods = data.listAllProGood;
	    				for(var j=0;j<clearGoods.length;j++){
	    					var clearGood = clearGoods[j];
	    					var src = srcs[j].split("-")[1];
	    					clearHtml +='<li><div class="take_list_left"><a href="http://www.jiuxian.com/goods-'+clearGood.pId+'.html?src='+srcs[j]+'" title="'+clearGood.name+' "target="_blank"> <img  class="item_img" src="http://img06.jiuxian.com/bill'+clearGood.clearImg+'" original="http://img06.jiuxian.com/bill'+clearGood.clearImg+'"/></a></div>';
	        				clearHtml +='<div class="take_list_right"><h3><a class="goodName" href="http://www.jiuxian.com/goods-'+clearGood.pId+'.html?src='+srcs[j]+'" title="'+clearGood.name+'" target="_blank">'+clearGood.name+'</a></h3><p class="remark goodSlogan">'+clearGood.adNote+'</p>';
	        				clearHtml +='<div class="price clearfix"><div class="price_aver4"><i></i><p>清仓价：<b class="yuanMark" >￥</b><b class="goodPrice" id="nowPrice'+clearGood.pId+'"></b><b class="decimals"></b></p></div>';
	        				clearHtml +='<div class="price_aver5"><i></i><p><cite class="take_sale_ic"></cite><em>已售<span  class="goodSale" id="sale'+clearGood.pId+'">'+clearGood.saleNum+'</span></em></p></div>';
	        				clearHtml +='<div class="price_aver6"><i></i><p><cite class="take_sale_ic2"></cite>仅剩<b id="rep'+clearGood.pId+'"></b>瓶</p></div></div>';
	        				clearHtml +='<div class="take_valua"><p><span>品&nbsp;&nbsp;牌：<a href="http://www.jiuxian.com/brand-'+clearGood.brandId+'.html" target="_blank">'+clearGood.brandName+'</a></span><span>编号：<em>'+clearGood.SN+'</em></span></p>';
	        				clearHtml +='<p class="clearfix"><a href="javascript:cutnub('+clearGood.pId+');" title="" class="cut" id="cut"></a><input type="text" name="number" value="1" class="take_text"  id="number'+clearGood.pId+'" onkeyup="javascript:changeNum('+clearGood.pId+')"/><a href="javascript:addnub('+clearGood.pId+');" title="" class="add" id="add"></a></p></div>';
	        				clearHtml +='<p class="take_bybtn"><a href="javascript:void(0);" class="buy4"  onclick="go_to_cart('+clearGood.pId+','+src+');"  ></a><a href="javascript:void(0);"  onClick="javascript:saves('+clearGood.pId+')" class="buy3"></a></p></div>';
	        				clearHtml +='</li>';
	    				}
	    				$('#clearProGood').html(clearHtml)
	    				$('#clearProGood').show();
	    				getPriceAndRespSals4Clear(proIds,true,1);
	    	    		//getProductActPrice(proIds,'getPriceAndRespSals(proIds,true,1)');
	    				try{
	    	    			_BFD.bind(data,"chlRecVAV",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    	    		}catch(e2){}
	    			}});
	    		}catch(e){
	    			chlRecVAV = false;
	    		}
	    		
	    	}
	    	setTimeout("if(!"+chlRecVAV+"){$('#clearProGood').show();}",3000);
		}
	}else if(args == 'miaopai'){
		// 秒拍推荐	ABTest
		if(ABTest == 0){
			$('#miaopaiProGood').show();
			$('#YCDJProGood').show();
			$('#QSYKProGood').show();
			_BFD.zzmpRecVAV = function(datas,bid,req_id){
				try{
					_BFD.bind(datas,"zzmpRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e2){}
			}
			//一锤定价
			_BFD.ycdjRecVAV = function(datas,bid,req_id){
				try{
					_BFD.bind(datas,"ycdjRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e2){}
			}
			//轻松一刻
			_BFD.qsykRecVAV = function(datas,bid,req_id){
				try{
					_BFD.bind(datas,"qsykRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e2){}
			}
			
		}else{
			var zzmpRecVAV = false;
			var ycdjRecVAV = false;
			var qsykRecVAV = false;
			
			$('#miaopaiProGood').show();
			/* 正在秒拍暂时不用百分点推荐
			_BFD.zzmpRecVAV = function(datas,bid,req_id){
				zzmpRecVAV = true;
	    		try{
	    			var srcs = ["5224","5225","5226","5227","5228","5229","5230","5231"];
		    		/*
		    		此处请添加推荐栏的回调方法,参数data为我们返回的商品信息数组
		    		如果只返回商品ID，data格式为["item1","item2","item3"]这样的数组。
		    		如果商品信息全返回，data格式为[{"iid":"item1","img":"http://images.*.com/**.jpg","name":"商品1","price":10.0,"url":"http://**"},{"iid":"item2","img":"http://images.*.com/**.jpg","name":"商品2","price":120.0,"url":"http://**"}]
		    
		    		推荐栏请添加百分点的logo，详见：http://www.baifendian.com/service/logo.html
		    		
		    		var miaopaiHtml = '';
			        var arrayProIds=[];
			        var proIds='';
	    			for(var i=0;i<datas.length;i++){
	    				arrayProIds.push(datas[i].iid);
	    			}
	    			proIds=arrayProIds.join(',');
	    			jQuery.ajax({type:"POST",url:"/bfdMiaoPai.htm?t="+new Date().getTime(),data:{"proIds":proIds},dataType:"json",success:function(data){
	    				var miaopaiGoods = data.listAllProGood;
	    				for(var j=0;j<miaopaiGoods.length;j++){
	    					if(j>7)
	    						break;
	    					var miaopaiGood = miaopaiGoods[j];
	    					var imgPath = miaopaiGood.ListImagePath;
	    					if(imgPath != null && imgPath !=''){
	    						imgPath = "http://img10.jximage.com"+imgPath.split(".")[0]+"4."+imgPath.split(".")[1];
	    					}
	    					var endTime = miaopaiGood.EndTime;
	    					var now_timestamp = Date.parse(new Date())/1000;
	    					if((endTime - now_timestamp)>86400){
	    						endTime = now_timestamp + 86400;
	    					}
	    					miaopaiHtml +='<li><div class="hgoodsPic"><a target="_blank" href="http://www.jiuxian.com/goods-'+miaopaiGood.ID+'.html?src='+srcs[j]+'"><img src="'+imgPath+'" width="240" height="240" /></a></div>';
	    					miaopaiHtml +='<div class="hgoodsIntro"><p class="hgoods-name"><a target="_blank" href="http://www.jiuxian.com/goods-'+miaopaiGood.ID+'.html?src='+srcs[j]+'" title="'+miaopaiGood.NAME+'">'+miaopaiGood.NAME+'</a></p>';
	    					miaopaiHtml +='<p class="hgoods-ad">'+miaopaiGood.SubTitle+'</p><p class="hgoods-price" id="markGoodDisplay_'+j+'"><span goodId="'+miaopaiGood.ID+'"></span></p>';
	    					miaopaiHtml +='<p class="hgoods-bay"><span><em>'+miaopaiGood.usercounts+'人</em>已购买</span><a target="_blank" href="http://cart.jiuxian.com/buynow.htm?goods='+miaopaiGood.ID+'&src='+srcs[j]+'">立即抢购</a></p>';
	    					miaopaiHtml +='<p class="hgoods-cou"><i></i><strong>距结束时间</strong><span id="djs_'+(j+1)+'" class="time" endTime="'+endTime+'"></span></p>';
	    					miaopaiHtml +='</div></li>'
	    				}
	    			
	    				$('#miaopaiProGood').html(miaopaiHtml);
	    				$('#miaopaiProGood').show();
	    				getPriceAndRespSals4MP(proIds,true,1);
	    	    		//getProductActPrice(proIds,'getPriceAndRespSals(proIds,true,1)');\
	    	    		
	    			}});
	    		}catch(e){
	    			zzmpRecVAV = false;
	    		}
	    		try{
	    			_BFD.bind(datas,"zzmpRecVAV",bid,req_id,true);
	    		}catch(e2){}
	    	}
			*/
	
			//一锤定价
			_BFD.ycdjRecVAV = function(datas,bid,req_id){
				ycdjRecVAV = true;
	    		try{
	    			var srcs = ["5232","5233","5234","5235","5236","5237","5238","5239"];
		    		/*
		    		此处请添加推荐栏的回调方法,参数data为我们返回的商品信息数组
		    		如果只返回商品ID，data格式为["item1","item2","item3"]这样的数组。
		    		如果商品信息全返回，data格式为[{"iid":"item1","img":"http://images.*.com/**.jpg","name":"商品1","price":10.0,"url":"http://**"},{"iid":"item2","img":"http://images.*.com/**.jpg","name":"商品2","price":120.0,"url":"http://**"}]
		    
		    		推荐栏请添加百分点的logo，详见：http://www.baifendian.com/service/logo.html
		    		*/
		    		var miaopaiHtml = '';
		    		var YCDJHtml ='';
			        var arrayProIds=[];
			        var proIds='';
	    			for(var i=0;i<datas.length;i++){
	    				arrayProIds.push(datas[i].iid);
	    			}
	    			proIds=arrayProIds.join(',');
	    			//proIds='100791,11656,167,10150,11597';
	    			jQuery.ajax({type:"POST",url:"/bfdMiaoPai.htm?t="+new Date().getTime(),data:{"proIds":proIds},dataType:"json",success:function(data){
	    				var YCDJGoods = data.listAllProGood;
	    				for(var j=0;j<YCDJGoods.length;j++){
	    					if(j>7)
	    						break;
	    					var YCDJGood = YCDJGoods[j];
	    					var imgPath = YCDJGood.ListImagePath;
	    					if(imgPath != null && imgPath !=''){
	    						imgPath = "http://img10.jximage.com"+imgPath.split(".")[0]+"4."+imgPath.split(".")[1];
	    					}
	    					var subTitle = "";
	    					if(YCDJGood.SubTitle != null){
	    						subTitle = YCDJGood.SubTitle;
	    					}
	    					YCDJHtml +='<li><div class="hgoodsPic"><a target="_blank" href="http://www.jiuxian.com/goods-'+YCDJGood.ID+'.html?src='+srcs[j]+'"><img src="'+imgPath+'" width="240" height="240" /></a></div>';
	    					YCDJHtml +='<div class="hgoodsIntro"><p class="hgoods-name"><a target="_blank" href="http://www.jiuxian.com/goods-'+YCDJGood.ID+'.html?src='+srcs[j]+'" title="'+YCDJGood.NAME+'">'+YCDJGood.NAME+'</a></p>';
	    					YCDJHtml +='<p class="hgoods-ad">'+subTitle+'</p><p class="hgoods-price"><span goodId="'+YCDJGood.ID+'"></span></p>';
	    					YCDJHtml +='<p class="hgoods-bay"><span><em>'+YCDJGood.usercounts+'人</em>已购买</span><a target="_blank" href="http://cart.jiuxian.com/buynow.htm?goods='+YCDJGood.ID+'&src='+srcs[j]+'">立即抢购</a></p>';
	    					YCDJHtml +='</div></li>'
	    				}
	    				$('#YCDJProGood').html(YCDJHtml);
	    				$('#YCDJProGood').show();
	    				getPriceAndRespSals4MP(proIds,true,1);
	    				try{
	    	    			_BFD.bind(datas,"ycdjRecVAV",bid,req_id,true);
	    	    		}catch(e2){}
	    			}});
	    		}catch(e){
	    			ycdjRecVAV = false;
	    		}
	    		
	    	
			}
			
			//轻松一刻
			_BFD.qsykRecVAV = function(datas,bid,req_id){
				qsykRecVAV = true;
	    		try{
	    			var srcs = ["5240","5241","5242","5243","5244","5245","5246","5247"];
		    		/*
		    		此处请添加推荐栏的回调方法,参数data为我们返回的商品信息数组
		    		如果只返回商品ID，data格式为["item1","item2","item3"]这样的数组。
		    		如果商品信息全返回，data格式为[{"iid":"item1","img":"http://images.*.com/**.jpg","name":"商品1","price":10.0,"url":"http://**"},{"iid":"item2","img":"http://images.*.com/**.jpg","name":"商品2","price":120.0,"url":"http://**"}]
		    
		    		推荐栏请添加百分点的logo，详见：http://www.baifendian.com/service/logo.html
		    		*/
		    		var qsykHtml = '';
		    		var QSYKstate = '1';//轻松一刻标示
			        var arrayProIds=[];
			        var proIds='';
	    			for(var i=0;i<datas.length;i++){
	    				arrayProIds.push(datas[i].iid);
	    				var qsykGood = datas[i];
	    				if(i>7)
	    					break;
	    				var subTitle = "";
	    				if(qsykGood.subtitle!=""){
	    					subTitle =qsykGood.subtitle;
    					}
	    				var imgPath = qsykGood.img;
    					if(imgPath != null && imgPath !=''){
    						imgPath = imgPath.replace("2.jpg","4.jpg");
    					}
	    				qsykHtml +='<li><div class="hgoodsPic"><a target="_blank" href="http://www.jiuxian.com/goods-'+qsykGood.iid+'.html?src='+srcs[i]+'"><img src="'+imgPath+'" width="240" height="240" /></a></div>';
    					qsykHtml +='<div class="hgoodsIntro"><p class="hgoods-name"><a target="_blank" href="http://www.jiuxian.com/goods-'+qsykGood.iid+'.html?src='+srcs[i]+'" title="'+qsykGood.name+'">'+qsykGood.name+'</a></p>';
    					qsykHtml +='<p class="hgoods-ad">'+subTitle+'</p><p class="hgoods-price"><span goodId="'+qsykGood.iid+'"></span></p>';
    					qsykHtml +='<p class="hgoods-bay"><span></span><a target="_blank" href="http://cart.jiuxian.com/buynow.htm?goods='+qsykGood.iid+'&src='+srcs[i]+'">立即抢购</a></p>';
    					qsykHtml +='</div></li>';
	    			}
	    			$('#QSYKProGood').html(qsykHtml);
    				$('#QSYKProGood').show();
	    			proIds=arrayProIds.join(',');
	    			/*
	    			jQuery.ajax({type:"POST",url:"/bfdMiaoPai.htm?t="+new Date().getTime(),data:{"proIds":proIds,"QSYKstate":QSYKstate},dataType:"json",success:function(data){
	    				var qsykGoods = data.listAllProGood;
	    				for(var j=0;j<qsykGoods.length;j++){
	    					if(j>7)
	    						break;
	    					var qsykGood = qsykGoods[j];
	    					var imgPath = qsykGood.ListImagePath;
	    					if(imgPath != null && imgPath !=''){
	    						imgPath = "http://img10.jximage.com"+imgPath.split(".")[0]+"4."+imgPath.split(".")[1];
	    					}
	    					var subTitle = "";
	    					if(qsykGood.SubTitle != null){
	    						subTitle = qsykGood.SubTitle;
	    					}
	    					qsykHtml +='<li><div class="hgoodsPic"><a target="_blank" href="http://www.jiuxian.com/goods-'+qsykGood.ID+'.html?src='+srcs[j]+'"><img src="'+imgPath+'" width="240" height="240" /></a></div>';
	    					qsykHtml +='<div class="hgoodsIntro"><p class="hgoods-name"><a target="_blank" href="http://www.jiuxian.com/goods-'+qsykGood.ID+'.html?src='+srcs[j]+'" title="'+qsykGood.NAME+'">'+qsykGood.NAME+'</a></p>';
	    					qsykHtml +='<p class="hgoods-ad">'+subTitle+'</p><p class="hgoods-price"><span goodId="'+qsykGood.ID+'"></span></p>';
	    					qsykHtml +='<p class="hgoods-bay"><span><em>'+qsykGood.usercounts+'人</em>已购买</span><a target="_blank" href="http://cart.jiuxian.com/buynow.htm?goods='+qsykGood.ID+'&src='+srcs[j]+'">立即抢购</a></p>';
	    					qsykHtml +='</div></li>';
	    				}
	    				$('#QSYKProGood').html(qsykHtml);
	    				$('#QSYKProGood').show();
	    				getPriceAndRespSals4MP(proIds,true,1);
	    	    		//getProductActPrice(proIds,'getPriceAndRespSals(proIds,true,1)');
	    	    		
	    			}});
	    			*/
	    			getPriceAndRespSals4MP(proIds,true,1);
	    		}catch(e){
	    			qsykRecVAV = false;
	    		}
	    		try{
	    			_BFD.bind(datas,"qsykRecVAV",bid,req_id,true);
	    		}catch(e2){}
	    	
			}
	    	//setTimeout("if(!"+zzmpRecVAV+"){$('#miaopaiProGood').show();}",3000);
	    	setTimeout("if(!"+ycdjRecVAV+"){$('#YCDJProGood').show();}",3000);
	    	setTimeout("if(!"+qsykRecVAV+"){$('#QSYKProGood').show();}",3000);
		}
	
	}else if(args =='wine'){
		// 进口馆推荐	ABTest
		$('#jpzkProGood').show();
		$('#cztzProGood').show();
		_BFD.cztzRecVAV = function(data,bid,req_id){
			try{
				_BFD.bind(data,"cztzRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
    		}catch(e2){}
		}
	}else if(args =='hotSearch'){
		if(ABTest == 0 || ABTest == 1){
			$(".hotWords").show();
			_BFD.show_search = function(data,bid,req_id){
				try{
					_BFD.bind(data,"show_search",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e){}
			}
		}else{
			var show_search = false;
			_BFD.show_search = function(data,bid,req_id,obj){
				show_search = true;
				try{
					var hotWordsHtml = "";
					hotWordsHtml +='<p>';
					for(var i=0;i<data.length;i++){
						hotWordsHtml +='<a href="" target="_blank"></a>';
					}
					hotWordsHtml +='</p>';
					$(".hotWords").html(hotWordsHtml);
					$(".hotWords").show();
				}catch(e){
					show_search = false;
	    		}
				try{
	    			_BFD.bind(data,"show_search",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
	    		}catch(e2){}
			}
			setTimeout("if(!"+show_search+"){$('.hotWords').show();}",3000);
		}
	}else if(args =='indexAccount'){
		_BFD.apRecBAB = function(data,bid,req_id,obj){
			try{
				var srcs = ["6193","6195","6196","6197","6198","6199","6200","6201","6202","6203","6204","6205","6206","6207","6208"];
				var proIds=[];
				var apRecBABHtml = '';
				apRecBABHtml +='<div class="middle reco" >';
				apRecBABHtml +='<div class="line clearfix"><div class="title"><i></i><span>为您推荐</span></div></div>';
				apRecBABHtml +='<div class="colList clearfix"><a class="prev" href="javascript:;" title="上一页"></a>';
				apRecBABHtml +='<div class="colFrame"><ul class="clearfix">';
				for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
					if(i==0){
						apRecBABHtml +='<li class="first">';
					}else{
						apRecBABHtml +='<li>';
					}
					apRecBABHtml +='<a href="http://www.jiuxian.com/goods-'+data[i].iid+'.html?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" width="96px;" height="96px;" alt="'+data[i].name+'" /></a>';
					apRecBABHtml +='<a class="name" href="http://www.jiuxian.com/goods-'+data[i].iid+'.html?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price userCenter_nowPrice_'+data[i].iid+'"></p>';
					apRecBABHtml +='</li>';
				}
				apRecBABHtml +='</ul></div><a class="next" href="javascript:;" title="下一页"></a></div>';
				apRecBABHtml +='</div>';
				$("#_userrecommend").html(apRecBABHtml);
				var pageNum;var sliderWidth;var newWidth = $(window).width();
				if(newWidth>1200){pageNum=5;sliderWidth=640;}else{pageNum=4;sliderWidth=500;}
				$(".reco .colFrame").Slider({"pageNum":pageNum,"width":sliderWidth}); 
	            getProductActPrice(proIds.join(','),'handleUserCenterPagePrice');
			}catch(e){
    		}
			try{
    			_BFD.bind(data,"apRecBAB",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
    		}catch(e2){}
		}
	}else if(args =='orderAccount'){
		_BFD.apRecVAV = function(data,bid,req_id,obj){
			try{
				var srcs = ["6209","6210","6211","6212","6213","6214","6215","6216","6217","6218","6219","6220","6221","6222","6223"];
				var proIds=[];
				var apRecVAVHtml = '';
				apRecVAVHtml +='<div class="uBotRecommend"><div class="ubRemTit">猜您喜欢</div>';
				apRecVAVHtml +='<div class="ubRemCon clearfix" ><a title="上一页" href="javascript:;" class="ubRem-Prev prev"></a>';
				apRecVAVHtml +='<div class="ubRemList"><ul>';
				for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
					apRecVAVHtml +='<li><div class="ubRemPic"><a target="_blank" href="http://www.jiuxian.com/goods-'+data[i].iid+'.html?src='+srcs[i]+'" title="'+data[i].name+'"><img alt="'+data[i].name+'" src="'+data[i].img+'" width="100" height="100" /></a></div>';
					apRecVAVHtml +='<div class="ubRemInter"><p class="ubRem-name"><a target="_blank" href="http://www.jiuxian.com/goods-'+data[i].iid+'.html?src='+srcs[i]+'">'+data[i].name+'</a></p>';
					apRecVAVHtml +='<p class="ubRem-price userCenter_nowPrice_'+data[i].iid+'"></p><p class="ubRem-bay"><a href="javascript:;" class="uc_guess_addToCart" srcId="'+srcs[i]+'" proId="'+data[i].iid+'" proName="'+data[i].name+'">加入购物车</a></p></div></li>';
				}
				apRecVAVHtml +='</ul></div><a title="下一页" href="javascript:;" class="ubRem-Next next"></a></div></div>';
				$("#_userguess").html(apRecVAVHtml);
	            getProductActPrice(proIds.join(','),'handleUserCenterPagePrice');
	            
	            var pageNum;var sliderWidth;var newW=$(window).width();if(newW>1200){pageNum=5;sliderWidth=900}else{pageNum=4;sliderWidth=700}
	            $(".ubRemList").Slider({"pageNum":pageNum,"width":sliderWidth});$(".uc_guess_addToCart").click(function(e){var num=1;var goodsId=$(this).attr("proId");var goodsName=$(this).attr("proName");var srcId=$(this).attr("srcId");addSkuToCartWithSrc(goodsId,num,"",srcId,toCartCallBack)});
	            
			}catch(e){
    		}
			try{
    			_BFD.bind(data,"apRecVAV",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
    		}catch(e2){}
		}
	}
	
}

/**
 * 搜索列表页回调函数
 */
//列表页－热卖推荐
function listhotsale(){
	// >>>列表页热卖推荐	已测试不用ABTest
	var BAB = false;
	_BFD.showRecBAB = function(data,bid,req_id){
		BAB = true;
		try{
			var srcs = ["3790","3791","3792","3793","3794"];
	        var hotHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
	        	proIds.push(data[i].iid);
	        	hotHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a><p class="price" id="recommend_'+data[i].iid+'">¥</p><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="sppl">评论<a id="proComments_'+data[i].iid+'" href="'+domain_detail+'/goods-'+data[i].iid+'.html#answerArea" title="'+data[i].name+'" target="_blank"></a></p></li>';
	        }
	        $("#hotsaleul").html(hotHtml);
	        $("#hotsale").show();
	        getProductActPrice(proIds.join(','),'handleRecommendPrice');
	        handleRecommendComments(proIds.join(','));
		}catch(e){
	        $("#hotsale").hide();
		}
		try{
			_BFD.bind(data,"dt_RecBAB",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
	setTimeout("if(!"+BAB+"){$('#hotsale').show();}",3000);
}

//列表页－最终购买
function listlastbuy(ABTest){
	
	// >>>列表页最终购买推荐 《 此处做abtest,是否异步显示评论数(类似热卖推荐) 》
	var CAC = false;
	
	if(ABTest == 0){ 
		_BFD.showRecCAC = function(data,bid,req_id){
			CAC = true;
			try{
				var srcs = ["3795","3796","3797","3798","3799","6178","6179","6180","6181","6182"];
		        var buyHtml = '';
		        var proIds=[];
		        for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
					buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a><p class="price" id="buy_'+data[i].iid+'">¥</p><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></li>';
		        }
		        $("#lastbuyul").html(buyHtml);
		        $("#lastbuy").show();
		        getProductActPrice(proIds.join(','),'handleBuyPrice');
			}catch(e){
		        $("#lastbuy").hide();
			}
			try{
				_BFD.bind(data,"dt_RecCAC",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e2){}
		}
		
	}else{
		_BFD.showRecCAC = function(data,bid,req_id){ //+评论 测试
			CAC = true;
			try{
				var srcs = ["6943","6944","6945","6946","6947"];
		        var buyHtml = '';
		        var proIds=[];
		        for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
					buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a><p class="price" id="buy_'+data[i].iid+'">¥</p><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="sppl">评论<a id="proCommentslastbuy_'+data[i].iid+'" href="'+domain_detail+'/goods-'+data[i].iid+'.html#answerArea" title="'+data[i].name+'" target="_blank"></a></p></li>';
		        }
		        $("#lastbuyul").html(buyHtml);
		        $("#lastbuy").show();
		        getProductActPrice(proIds.join(','),'handleBuyPrice');
		        handleRecommendCommentslastbuy(proIds.join(','));
			}catch(e){
		        $("#lastbuy").hide();
			}
			try{
				_BFD.bind(data,"dt_RecCAC",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e2){}
		}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
	setTimeout("if(!"+CAC+"){$('#lastbuy').show();}",3000);
	
}

//列表页－购买了该商品的用户还浏览
function listbuyandlookbai(){
	//白酒类的“购买了该商品的用户还浏览”的推荐栏调用下面的这个方法
	var BAB = false;
	_BFD.showlsBAB =  function(data,req_id,banner_id){
		BAB = true;
		try{
			var srcs = ["6918","6919","6920","6921","6922"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
				buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
	        }
	        $("#buyandlookul").html(buyHtml);
	        $("#buyandlook").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
			$("#buyandlook").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showlsBAB",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+BAB+"){$('#buyandlook').show();}",3000);	
}

function listbuyandlookhong(){
	//葡萄酒的“购买了该商品的用户还浏览”的推荐栏调用下面的这个方法
	var BAB = false;
	_BFD.showls2BAB =  function(data,req_id,banner_id){
		BAB = true;
		try{
			var srcs = ["6989","6990","6991","6992","6993"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
	        }
	        $("#buyandlookul").html(buyHtml);
	        $("#buyandlook").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
			$("#buyandlook").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls2BAB",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+BAB+"){$('#buyandlook').show();}",3000);	
	
}

function listbuyandlookother(){
	//其他类的“购买了该商品的用户还浏览”的推荐栏调用下面的这个方法
	var BAB = false;
	_BFD.showls3BAB =  function(data,req_id,banner_id){
		BAB = true;
		try{
			var srcs = ["7043","7044","7045","7046","7047"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
	        }
	        $("#buyandlookul").html(buyHtml);
	        $("#buyandlook").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
			$("#buyandlook").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls3BAB",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+BAB+"){$('#buyandlook').show();}",3000);	
}

//列表页－猜你喜欢 more
function listmoreulikebai(){
	//白酒类的“猜你喜欢”的推荐栏调用下面的这个方法
	var CAC = false;
	_BFD.showlsCAC =  function(data,req_id,banner_id){
		CAC = true;
		try{
			var srcs = ["6897","6898","6899","6900","6901","6902","6903","6904","6905","6906","6907","6908","6909","6910","6911","6913","6914","6915","6916","6917"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
				buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"> <p class="goodName"> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p> <p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div> </li>';
		    }
	        $("#moreulikeul").html(buyHtml);
	        $("#moreulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#moreulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showlsCAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+CAC+"){$('#moreulikeul').show();}",3000);
}

function listmoreulikehong(){
	//葡萄酒的“猜你喜欢”的推荐栏调用下面的这个方法
	var CAC = false;
	_BFD.showls2CAC =  function(data,req_id,banner_id){
		CAC = true;
		try{
			var srcs = ["6961","6962","6963","6964","6965","6966","6967","6968","6969","6970","6971","6972","6973","6974","6975","6976","6977","6978","6979","6980"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
				buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"> <p class="goodName"> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p> <p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div> </li>';
		    }
	        $("#moreulikeul").html(buyHtml);
	        $("#moreulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#moreulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls2CAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+CAC+"){$('#moreulike').show();}",3000);
	
}
function listmoreulikeother(){
	
	//其他类的“猜你喜欢”的推荐栏调用下面的这个方法
	var CAC = false;
	_BFD.showls3CAC =  function(data,req_id,banner_id){
		CAC = true;
		try{
			var srcs = ["7015","7016","7017","7018","7019","7020","7021","7022","7023","7024","7025","7026","7027","7028","7029","7030","7031","7032","7033","7034"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
				buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"> <p class="goodName"> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p> <p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div> </li>';
		    }
	        $("#moreulikeul").html(buyHtml);
	        $("#moreulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#moreulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls3CAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+CAC+"){$('#moreulikeul').show();}",3000);
}

//列表页－猜你喜欢 less
function listlessulikebai(){
	//白酒类的“猜你喜欢”的推荐栏调用下面的这个方法
	var CAC = false;
	_BFD.showlsCAC =  function(data,req_id,banner_id){
		CAC = true;
		try{
			var srcs = ["7068","7069","7070","7071","7072","7073","7074","7075"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<8;i++){
				proIds.push(data[i].iid);
				buyHtml += '<li><div class="frameA"><div class="frameB"></div></div>';
	        	buyHtml += '<div class="content clearfix"><div class="collect_box"> ';
	        	buyHtml +='<a class="img clearfix" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div>';
	        	buyHtml +='<a class="proName" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a>';
	        	buyHtml +='<div class="priceArea clearfix"><p class="price" id="buy_'+data[i].iid+'">¥</p> </div>';
	        	buyHtml +='<div class="buyArea clearfix">';
	        	buyHtml +='<span> <input type="text" gid="'+data[i].iid+'" gname="'+data[i].name+'" src="'+srcs[i]+'" id="InputNum'+data[i].iid+'" onkeyup="changeNum(this.value,'+data[i].iid+')" value="1" name=""></span>';
	        	buyHtml +='<div class="edit">';
	        	buyHtml +='<a class="increase" href="javascript:;"></a> <a class="decrease" href="javascript:;"></a> </div><a class="cart clearfix prtlt_btn2" href="javascript:;">加入购物车</a> ';
	        	buyHtml +='</div></li>';
	        }
	        $("#lessulikeul").html(buyHtml);
	        $("#lessulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#lessulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showlsCAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+CAC+"){$('#lessulikeul').show();}",3000);
}

function listlessulikehong(){
	//葡萄酒的“猜你喜欢”的推荐栏调用下面的这个方法
	var CAC = false;
	_BFD.showls2CAC =  function(data,req_id,banner_id){
		CAC = true;
		try{
			var srcs = ["6981","6982","6983","6984","6985","6986","6987","6988"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<8;i++){
				proIds.push(data[i].iid);
				buyHtml += '<li><div class="frameA"><div class="frameB"></div></div>';
	        	buyHtml += '<div class="content clearfix"><div class="collect_box"> ';
	        	buyHtml +='<a class="img clearfix" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div>';
	        	buyHtml +='<a class="proName" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a>';
	        	buyHtml +='<div class="priceArea clearfix"><p class="price" id="buy_'+data[i].iid+'">¥</p> </div>';
	        	buyHtml +='<div class="buyArea clearfix">';
	        	buyHtml +='<span> <input type="text" gid="'+data[i].iid+'" gname="'+data[i].name+'" src="'+srcs[i]+'" id="InputNum'+data[i].iid+'" onkeyup="changeNum(this.value,'+data[i].iid+')" value="1" name=""></span>';
	        	buyHtml +='<div class="edit">';
	        	buyHtml +='<a class="increase" href="javascript:;"></a> <a class="decrease" href="javascript:;"></a> </div><a class="cart clearfix prtlt_btn2" href="javascript:;">加入购物车</a> ';
	        	buyHtml +='</div></li>';
	        }
	        $("#lessulikeul").html(buyHtml);
	        $("#lessulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#lessulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls2CAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+CAC+"){$('#lessulikeul').show();}",3000);
}

function listlessulikeother(){
	
	//其他类的“猜你喜欢”的推荐栏调用下面的这个方法
	var CAC = false;
	_BFD.showls3CAC =  function(data,req_id,banner_id){
		CAC = true;
		try{
			var srcs = ["7035","7036","7037","7038","7039","7040","7041","7042"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<8;i++){
				proIds.push(data[i].iid);
				buyHtml += '<li><div class="frameA"><div class="frameB"></div></div>';
	        	buyHtml += '<div class="content clearfix"><div class="collect_box"> ';
	        	buyHtml +='<a class="img clearfix" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div>';
	        	buyHtml +='<a class="proName" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a>';
	        	buyHtml +='<div class="priceArea clearfix"><p class="price" id="buy_'+data[i].iid+'">¥</p> </div>';
	        	buyHtml +='<div class="buyArea clearfix">';
	        	buyHtml +='<span> <input type="text" gid="'+data[i].iid+'" gname="'+data[i].name+'" src="'+srcs[i]+'" id="InputNum'+data[i].iid+'" onkeyup="changeNum(this.value,'+data[i].iid+')" value="1" name=""></span>';
	        	buyHtml +='<div class="edit">';
	        	buyHtml +='<a class="increase" href="javascript:;"></a> <a class="decrease" href="javascript:;"></a> </div><a class="cart clearfix prtlt_btn2" href="javascript:;">加入购物车</a> ';
	        	buyHtml +='</div></li>';
	        }
	        $("#lessulikeul").html(buyHtml);
	        $("#lessulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#lessulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls3CAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+CAC+"){$('#lessulikeul').show();}",3000);
}

//列表页－新品推荐
function listnewbai(){
	//白酒类的“新品推荐”的推荐栏调用下面的这个方法
	var VAV = false;
	_BFD.showlsVAV =  function(data,req_id,banner_id){
		VAV = true;
		try{
			var srcs = ["6923","6924","6925","6926","6927","6928","6929","6930","6931","6932","6933","6934","6935","6936","6937","6938","6939","6940","6941","6942"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
				buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"> <p class="goodName"> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p> <p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div> </li>';
		        
	        }
	        $("#morenewul").html(buyHtml);
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#morenew").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showlsVAV",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+VAV+"){$('#morenew').show();}",3000);
	
	
}

function listnewhong(){
	//葡萄酒的“新品推荐”的推荐栏调用下面的这个方法
	var VAV = false;
	_BFD.showls2VAV =  function(data,req_id,banner_id){
		VAV = true;
		try{
			var srcs = ["6994","6995","6996","6997","6998","6999","7000","7001","7002","7003","7004","7006","7007","7008","7009","7010","7011","7012","7013","7014"];
			var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"> <p class="goodName"> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p> <p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div> </li>';
	        
	        }
	        $("#morenewul").html(buyHtml);
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#morenew").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls2VAV",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
	
}
function listnewother(){
	//其他类的“新品推荐”的推荐栏调用下面的这个方法
	var VAV = false;
	_BFD.showls3VAV =  function(data,req_id,banner_id){
		VAV = true;
		try{
			var srcs = ["7048","7049","7050","7051","7052","7053","7054","7055","7056","7057","7058","7059","7060","7061","7062","7063","7064","7065","7066","7067"];
			var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
				buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"> <p class="goodName"> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p> <p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div> </li>';
		        
	        }
	        $("#morenewul").html(buyHtml);
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#morenew").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"showls3VAV",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+VAV+"){$('#morenew').show();}",3000);
}

//搜索页－热卖推荐 有结果
function searchyeshotsale(ABTest){
	
	// >>> 搜索页有结果推荐 热卖推荐
	if(ABTest == -1){
		$("#hotsale").show();
		// ABTest到酒仙也给百分点一个反馈
		_BFD.sryRecBAB =  function(data,bid,req_id){
			try{
				_BFD.bind(data,"sryRecBAB",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e){}
		}
	}else{
		var sryRecBAB = false;
		_BFD.sryRecBAB =  function(data,bid,req_id){
			sryRecBAB = true;
			try{
				var srcs = ["4776","4777","4778","4779","4780","6183","6184","6185","6186","6187"];
		        var hotHtml = '';
		        var proIds=[];
		        for(var i=0;i<data.length;i++){
		        	proIds.push(data[i].iid);
		        	hotHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a><p class="price" id="recommend_'+data[i].iid+'">¥</p><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="sppl">评论<a id="proComments_'+data[i].iid+'" href="'+domain_detail+'/goods-'+data[i].iid+'.html#answerArea" title="'+data[i].name+'" target="_blank"></a></p></li>';
		        }
		        $("#hotsaleul").html(hotHtml);
		        $("#hotsale").show();
		        getProductActPrice(proIds.join(','),'handleRecommendPrice');
		        handleRecommendComments(proIds.join(','));
			}catch(e){
		        $("#hotsale").hide();
			}
			try{
				_BFD.bind(data,"sryRecBAB",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e2){}
		}
		// 等待3秒如果百分点没有回调数据，显示我们自己的数据
		setTimeout("if(!"+sryRecBAB+"){$('#hotsale').show();}",3000);
	}
	
}
//搜索页－热卖推荐 无结果
function searchnohotsale(ABTest){
	
	// >>> 搜索页无结果推荐 热卖推荐
	if(ABTest == -1){
		$("#hotsale").show();
		// ABTest到酒仙也给百分点一个反馈
		_BFD.sryRecBAB =  function(data,bid,req_id){
			try{
				_BFD.bind(data,"sryRecBAB",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e){}
		}
	}else{
		var srnRecBAB = false;
		_BFD.srnRecBAB =  function(data,bid,req_id){
			srnRecBAB = true;
			try{		     
				var srcs = ["7163","7164","7165","7166","7167"];
		        var hotHtml = '';
		        var proIds=[];
		        for(var i=0;i<data.length;i++){
		        	proIds.push(data[i].iid);
		        	hotHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a><p class="price" id="recommend_'+data[i].iid+'">¥</p><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="sppl">评论<a id="proComments_'+data[i].iid+'" href="'+domain_detail+'/goods-'+data[i].iid+'.html#answerArea" title="'+data[i].name+'" target="_blank"></a></p></li>';
		        }
		        $("#hotsaleul").html(hotHtml);
		        $("#hotsale").show();
		        getProductActPrice(proIds.join(','),'handleRecommendPrice');
		        handleRecommendComments(proIds.join(','));
			}catch(e){
		        $("#hotsale").hide();
			}
			try{
				_BFD.bind(data,"srnRecBAB",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e2){}
		}
		// 等待3秒如果百分点没有回调数据，显示我们自己的数据
		setTimeout("if(!"+srnRecBAB+"){$('#hotsale').show();}",3000);
	}
	
}
//搜索页－最终购买 有结果
function searchyeslastbuy(ABTest){
	
	// >>> 搜索页 最终购买推荐
	if(ABTest == -1){
		$("#lastbuy").show();
		// ABTest到酒仙也给百分点一个反馈
		_BFD.sryRecVAV =  function(data,bid,req_id){
			try{
				_BFD.bind(data,"sryRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e){}
		}
	}else{
		var sryRecVAV = false;
		_BFD.sryRecVAV =  function(data,bid,req_id){
			sryRecVAV = true;
			try{
				var srcs = ["4781","4782","4783","4784","4785"];
		        var buyHtml = '';
		        var proIds=[];
		        for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
		        	buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
		        }
		        $("#lastbuyul").html(buyHtml);
		        $("#lastbuy").show();
		        getProductActPrice(proIds.join(','),'handleBuyPrice');
			}catch(e){
		        $("#lastbuy").hide();
			}
			try{
				_BFD.bind(data,"sryRecVAV",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e2){}
		}
		// 等待3秒如果百分点没有回调数据，显示我们自己的数据
		setTimeout("if(!"+sryRecVAV+"){$('#lastbuy').show();}",3000);
	}
	
}

//搜索页－最终购买 无结果
function searchnolastbuy(ABTest){
	
	// >>> 搜索页 最终购买推荐
	if(ABTest == -1){
		$("#lastbuy").show();
		// ABTest到酒仙也给百分点一个反馈
		_BFD.sryRecVAV =  function(data,bid,req_id){
			try{
				_BFD.bind(data,"srnRecVAV",bid,req_id,false);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e){}
		}
	}else{
		var srnRecVAV = false;
		_BFD.srnRecVAV =  function(data,bid,req_id){
			srnRecVAV = true;
			try{	     
				var srcs = ["7158","7159","7160","7161","7162"];
		        var buyHtml = '';
		        var proIds=[];
		        for(var i=0;i<data.length;i++){
					proIds.push(data[i].iid);
		        	buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
		        }
		        $("#lastbuyul").html(buyHtml);
		        $("#lastbuy").show();
		        getProductActPrice(proIds.join(','),'handleBuyPrice');
			}catch(e){
		        $("#lastbuy").hide();
			}
			try{
				_BFD.bind(data,"srnRecVAV",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
			}catch(e2){}
		}
		// 等待3秒如果百分点没有回调数据，显示我们自己的数据
		setTimeout("if(!"+srnRecVAV+"){$('#lastbuy').show();}",3000);
	}
	
}


//搜索页－购买了该商品的用户还浏览   有结果
function searchyesbuyandlook(){
	//搜索有结果页的“购买了该商品的用户还浏览”的推荐栏调用下面的这个方法
	var FAF = false;
	_BFD.sryRec =  function(data,req_id,banner_id){
		FAF = true;
		try{
			var srcs = ["6948","6949","6950","6951","6952"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
	        }
	        $("#buyandlookul").html(buyHtml);
	        $("#buyandlook").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
			$("#buyandlook").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"sryRec",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	
}

//搜索页－购买了该商品的用户还浏览  无结果 
function searchnobuyandlook(){
	//搜索有结果页的“购买了该商品的用户还浏览”的推荐栏调用下面的这个方法
	var FAF = false;
	_BFD.srnRecCAC =  function(data,req_id,banner_id){
		FAF = true;
		try{	    
			var srcs = ["7152","7153","7154","7155","7156"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a> <a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a><p class="price" id="buy_'+data[i].iid+'">¥</p></li>';
	        }
	        $("#buyandlookul").html(buyHtml);
	        $("#buyandlook").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
			$("#buyandlook").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"srnRecCAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	
}

//搜索页－猜你喜欢 more
function searchmoreulike(){
	//搜索有结果页的“猜你喜欢”的推荐栏调用下面的这个方法
	var DAD = false;
	_BFD.sryRecCAC =  function(data,req_id,banner_id){
		DAD = true;
		try{
			var srcs = ["7076","7077","7078","7079","7080","7081","7082","7083","7084","7085","7086","7087","7088","7089","7090","7091","7092","7094","7095","7096"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"><p class="goodName"><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p><p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div></li>';
	        }
	        $("#moreulikeul").html(buyHtml);
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#moreulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"sryRecCAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+DAD+"){$('#moreulikeul').show();}",3000);

}

//搜索页－猜你喜欢 less
function searchlessulike(){
	//搜索有结果页的“猜你喜欢”的推荐栏调用下面的这个方法
	var DAD = false;
	_BFD.sryRecCAC =  function(data,req_id,banner_id){
		DAD = true;
		try{
			var srcs = ["7097","7098","7099","7100","7101","7102","7103","7104"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<8;i++){
				proIds.push(data[i].iid);
				buyHtml += '<li><div class="frameA"><div class="frameB"></div></div>';
	        	buyHtml += '<div class="content clearfix"><div class="collect_box"> ';
	        	buyHtml +='<a class="img clearfix" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div>';
	        	buyHtml +='<a class="proName" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a>';
	        	buyHtml +='<div class="priceArea clearfix"><p class="price" id="buy_'+data[i].iid+'">¥</p> </div>';
	        	buyHtml +='<div class="buyArea clearfix">';
	        	buyHtml +='<span> <input type="text" gid="'+data[i].iid+'" gname="'+data[i].name+'" src="'+srcs[i]+'" id="InputNum'+data[i].iid+'" onkeyup="changeNum(this.value,'+data[i].iid+')" value="1" name=""></span>';
	        	buyHtml +='<div class="edit">';
	        	buyHtml +='<a class="increase" href="javascript:;"></a> <a class="decrease" href="javascript:;"></a> </div><a class="cart clearfix prtlt_btn2" href="javascript:;">加入购物车</a> ';
	        	buyHtml +='</div></li>';
	        }
	        $("#lessulikeul").html(buyHtml);
	        $("#lessulike").show();
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#lessulike").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"sryRecCAC",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+DAD+"){$('#lessulikeul').show();}",3000);

}

//搜索页－猜你喜欢 no
function searchnoulike(){
	var srnRec = false;
	_BFD.srnRec = function(data,bid,req_id){
		srnRec = true;
		try{
			var srcs = ["5894","5895","5896","5897","5898","5899","5900","5901","5902","5903","6188","6189","6190","6191","6192"];
			
    		//此处请添加推荐栏的回调方法,参数data为我们返回的商品信息数组
    		//如果只返回商品ID，data格式为["item1","item2","item3"]这样的数组。
    		//如果商品信息全返回，data格式为[{"iid":"item1","img":"http://images.*.com/**.jpg","name":"商品1","price":10.0,"url":"http://**"},{"iid":"item2","img":"http://images.*.com/**.jpg","name":"商品2","price":120.0,"url":"http://**"}]
    
    		//推荐栏请添加百分点的logo，详见：http://www.baifendian.com/service/logo.html
    		var indexTabConHtml = '';
			
			for(var i=0;i<data.length;i++){
				indexTabConHtml += '<li><span class="imgPicList"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'"><img src="'+data[i].img+'" data-original="'+data[i].img+'" width="160" height="160" alt="'+data[i].name+'"></a><p class="Tag Tag_"></p></span><span class="indexTabTit"><a href="'+data[i].url+'?src='+srcs[i]+'" target="_blank" title="'+data[i].name+'">'+data[i].name+'</a></span><span class="indexTabPrice"><strong  goodid="'+data[i].iid+'" class="buy_'+data[i].iid+'">￥</strong></span></li>';
			}
    		$('noulikeul').html(indexTabConHtml);
    		handleListTabBox();
		}catch(e){
			srnRec = false;
		}
		
		try{
			_BFD.bind(data,"srnRec",bid,req_id,true);//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		}catch(e2){
			
		}
		
	}
	setTimeout("if(!"+srnRec+"){handleListTabBox();}",3000);
}

//搜索页－新品推荐
function searchnew(){
	//搜索有结果页的“新品推荐”的推荐栏调用下面的这个方法
	var EAE = false;
	_BFD.sryRecN =  function(data,req_id,banner_id){
		EAE = true;
		try{
			var srcs = ["7105","7106","7107","7108","7109","7110","7111","7112","7113","7114","7115","7116","7117","7118","7119","7120","7121","7122","7123","7124"];
	        var buyHtml = '';
	        var proIds=[];
	        for(var i=0;i<data.length;i++){
				proIds.push(data[i].iid);
	        	buyHtml +='<li><div class="imgBox"><a class="img" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank"><img src="'+data[i].img+'" alt="'+data[i].name+'"></a></div><div class="goodInfo"><p class="goodName"><a class="name" href="'+data[i].url+'?src='+srcs[i]+'" title="'+data[i].name+'" target="_blank">'+data[i].name+'</a></p><p class="goodPrice" id="buy_'+data[i].iid+'">¥</p></div></li>';
	        }
	        $("#morenewul").html(buyHtml);
	        getProductActPrice(proIds.join(','),'handleBuyPrice');
		}catch(e){
	        $("#morenew").hide();
		}
		try{
		/*
		此处请添加展示推荐栏的回调方法，
		参数data为我们返回的商品信息数组
		烦请加上判断，如果没有返回值的话隐藏推荐栏，或者展示您之前自己的推荐栏
		请在推荐栏中加入百分点的中文logo,具体实例请参考http://www.baifendian.com/service/logo.html
		*/
		_BFD.bind(data,"sryRecN",req_id,banner_id,true)//此处是推荐返回时百分点绑定事件的方法，请不要修改。
		//参数Onshow 为boolean类型，取值为true 或者 false 。取值为true的时候，展示的是百分点的推荐栏。取值为false的时候，展示的是百分点的推荐栏。
		}catch(e2){}
	}
	// 等待3秒如果百分点没有回调数据，显示我们自己的数据
//	setTimeout("if(!"+EAE+"){$('#morenew').show();}",3000);
		
}




/**
 * 处理详情页猜你喜欢价格
 */
function handleDetailGuessPrice(priceData){
	priceData=eval("("+priceData+")");
	priceData=priceData.data;
	for ( var proId in priceData) {
		var proPrices = priceData[proId];
		jQuery(".price[goodId="+proId+"]").html("￥" + proPrices.np.toFixed(2));
	}
}


//处理首页推荐价格
function handleIndexTabBox() {
	var proIds=[];
	$('.indexTabBox [goodId]').each(function(i){
	    var id=$(this).attr("goodId");
	    proIds.push(id);
	});	
	getProductActPrice(proIds.join(','),'handleSpiritHomePagePrice');
}


//处理首页优惠推荐
function handleYouHuiBoxLoop(){
	var loadFirstHtml = $('.loadFirst').html();
	if(loadFirstHtml == ''){
		setTimeout("handleYouHuiBoxLoop()",100);
	}else{
		if($('.loadFirst .receBoxs') != null && typeof($('.loadFirst .receBoxs')) !='undefined'){
			$('.loadFirst .receBoxs').html(hpRechuiHtml);
			handleIndexYouHuiBox();
		}
	}
}

//处理首页优惠推荐价格
function handleIndexYouHuiBox() {
	var proIds=[];
	$('.raceList [goodId]').each(function(i){
	    var id=$(this).attr("goodId");
	    proIds.push(id);
	});	
	getProductActPrice(proIds.join(','),'handleSpiritHomePagePrice');
}

//处理搜索列表页 推荐价格
function handleListTabBox() {
	var proIds=[];
	$('.indexTabPrice [goodId]').each(function(i){
	    var id=$(this).attr("goodId");
	    proIds.push(id);
	});	
	getProductActPrice(proIds.join(','),'handleListPrice');
}

function handleIndexTabBoxLoop(){
	// 回调成功或者回调后报错加载价格
	if((showRecVAV && hpRecVAV)){
		$('.indexTabCon').eq(0).show();
		handleIndexTabBox();
	}else{
		setTimeout("handleIndexTabBoxLoop()",50);
	}
}

// 处理列表页最终购买推荐价格
function handleBuyPrice(priceData) {
	priceData =eval("("+priceData+")");
	priceData =priceData.data;
    for (var proId in priceData) {
        var proPrices = priceData[proId];
        $("#buy_"+proId).text("￥" + proPrices.np.toFixed(2));
    }
}

//处理列表页热卖推荐价格
function handleRecommendPrice(priceData) {
	priceData =eval("("+priceData+")");
	priceData =priceData.data;
    for (var proId in priceData) {
        var proPrices = priceData[proId];
        $("#recommend_"+proId).text("￥" + proPrices.np.toFixed(2));
    }
}

//处理列表页热卖推荐评论数
function handleRecommendComments(ids) {
	try{
		jQuery.ajax({
			type:"get",url:"/proComments.htm?t="+new Date().getTime(),
			data:{"ids":ids},
			dataType:"json",
			success:function(data){
				var idsArray = ids.split(",");
				for(var i=0;i<idsArray.length;i++){
					if(data[idsArray[i]]!=null && data[idsArray[i]]!=""){
						$("#proComments_"+idsArray[i]).text(data[idsArray[i]]+"条");
					}else{
						$("#proComments_"+idsArray[i]).text("0条");
					}
				}
			}
		});
	}catch(e){}
}

//处理列表页最终购买评论数
function handleRecommendCommentslastbuy(ids) {
	try{
		jQuery.ajax({
			type:"get",url:"/proComments.htm?t="+new Date().getTime(),
			data:{"ids":ids},
			dataType:"json",
			success:function(data){
				var idsArray = ids.split(",");
				for(var i=0;i<idsArray.length;i++){
					if(data[idsArray[i]]!=null && data[idsArray[i]]!=""){
						$("#proCommentslastbuy_"+idsArray[i]).text(data[idsArray[i]]+"条");
					}else{
						$("#proCommentslastbuy_"+idsArray[i]).text("0条");
					}
				}
			}
		});
	}catch(e){}
}

//处理详情页还买过推荐价格
function handleTastePrice(priceData) {
	priceData =eval("("+priceData+")");
	priceData =priceData.data;
    for (var proId in priceData) {
        var proPrices = priceData[proId];
        jQuery("[goodId='" + proId + "']").html('￥' + proPrices.np.toFixed(2));
        
    }
}

//处理最佳组合价格
function handleGroupPrice(priceData) {
	priceData =eval("("+priceData+")");
	priceData =priceData.data;
    for(var proId in priceData) {
        var proPrices = priceData[proId];
        jQuery("[goodsId='" + proId + "'] span").eq(1).text(proPrices.np.toFixed(2));
        if(proId == goodsId){
        	$(".setWrap .group p strong").html('￥'+ proPrices.np.toFixed(2));
        }
    }
    
}

//处理购物车还买过推荐价格
function handleCartPrice(priceData) {
	priceData =eval("("+priceData+")");
	priceData =priceData.data;
  for (var proId in priceData) {
      var proPrices = priceData[proId];
      $("#cartpri_"+proId).text("￥" + proPrices.np.toFixed(2));
  }
}

//处理会员首页推荐价格
function handleUserCenterPagePrice(priceData) {
	
	priceData=eval("("+priceData+")");
	
	priceData=priceData.data;
	
	for ( var proId in priceData) {
		var proPrices = priceData[proId];
		$(".userCenter_nowPrice_" + proId).text("￥" + proPrices.np.toFixed(2));
		$(".userCenter_marketPrice_" + proId).text("￥" + proPrices.mp.toFixed(2));
	}
};

// 执行百分点推送与回调数据代码
function loadBFD(){
	bfd_client_id = bfd_client_id || "Ctest_jiuxian";
	if(_BFD.BFD_INFO && _BFD.BFD_INFO.id != null){
	    window["_BFD"] = window["_BFD"] || {};
	    _BFD.client_id = bfd_client_id;
	    if(window.getWareIdByRgnId){
			_BFD.city=getWareIdByRgnId();
		}
	    _BFD.script = document.createElement("script");
	    _BFD.script.type = "text/javascript";
	    _BFD.script.async = true;
	    _BFD.script.charset = "utf-8";
	    _BFD.script.src = (('https:' == document.location.protocol?'https://ssl-static1':'http://static1')+'.bfdcdn.com/service/jiuxianwang/jiuxianwang.js');
	    document.getElementsByTagName("head")[0].appendChild(_BFD.script);
	}else{
		setTimeout("loadBFD();",200);
	}
}

function getPriceAndRespSals4Clear(proIds,flag,type){
	var proNum = 0;
	jQuery.ajax({
		url : "/getPriceAndRespSals.htm?t=" +new Date().getTime() + "&proIds=" + proIds,
		dataType : "json",
		success : function(data) {
			for ( var pId in data) {
				var rep = data[pId]["respNum"];
				var nowPrice = data[pId]["price"];
				$("#rep" + pId).html(rep);
				if(nowPrice.toString().indexOf(".") > -1){
					$("#nowPrice" + pId).html(nowPrice+"0");
				}else{
					$("#nowPrice" + pId).html(nowPrice + ".00");
				}
				if(rep<1){
					var $target = $("#nowPrice" + pId).parents("li");
					var dataUnit={"goodId":"","src":"","url":"","goodName":"","goodPrice":"","goodSale":""}
					dataUnit["goodId"] = pId;
					dataUnit["goodPrice"] = $("#nowPrice" + pId).text();
					dataUnit["goodSale"] = $target.find(".goodSale").text();
					$target.remove();						
				}
				
			}
			
			
		}
	});
}

/*
function getPriceAndRespSals4MP(proIds,flag,type){
	var proNum = 0;
	jQuery.ajax({
		url : "http://clear.jiuxian.com/getPriceAndRespSals.htm?t=" +new Date().getTime() + "&proIds=" + proIds,
		dataType : "json",
		success : function(data) {
			for ( var pId in data) {
				var rep = data[pId]["respNum"];
				var nowPrice = data[pId]["price"];
				$("#rep" + pId).html(rep);
				if(nowPrice.toString().indexOf(".") > -1){
					jQuery("span[goodId='"+pId+"']").html(nowPrice+"0");
				}else{
					jQuery("span[goodId='"+pId+"']").html(nowPrice+".00");
				}
			}						
		}
	});
}
*/


function getPriceAndRespSals4MP(proIds,flag,type){
	var proNum = 0;
	var target_url = "http://clear.jiuxian.com/getPriceAndRespSals.htm?t=" +new Date().getTime() + "&proIds=" + proIds;
	jQuery.ajax({
		type: "GET",
		url: "/httpProxyAccess.htm?t=" + new Date().getTime(),
		data: {
			target: target_url
		},
		dataType : "json",
		success : function(data) {
			for ( var pId in data) {
				var rep = data[pId]["respNum"];
				var nowPrice = data[pId]["price"];
				$("#rep" + pId).html(rep);
				if(nowPrice.toString().indexOf(".") > -1){
					jQuery("span[goodId='"+pId+"']").html(nowPrice+"0");
				}else{
					jQuery("span[goodId='"+pId+"']").html(nowPrice+".00");
				}
			}						
		}
	});
}

function emptyFunction(data){
	var length = data.length;
	var i = 0;
	//$("#no_product_buy").empty();
	for(i=0; i<length;i++){
		var li = '<li class="lineLastPro"><a href="" title="" target="_blank"><img src=""  class="item_img"   width="190" height="200" /></a>'+
           '<h4><a class="goodName" href="" target="_blank"></a></h4><div class="price price2 clearfix"><div class="price_aver3 price_av_on">'+
           '<i></i><p>现清仓价<b><cite>￥</cite ><b class="goodPrice" ></b></p></div><div class="price_aver2 price_av_on"><i></i>'+
           '<p class="take_sale_ds"><cite class="take_sale_ic"></cite>已售<b  class="goodSale">0</b>瓶</p></div></div>'+
           '<p class="take_away2 clearfix"><em class="no_pro" title="已抢光"></em></p></li>';
		var $li = $(li);
		$li.find("a").attr("href",data[i]["url"]);
		$li.find(".item_img").attr("src",data[i]["src"]);
		$li.find(".goodName").text(data[i]["goodName"]);
		$li.find(".goodPrice").text(data[i]["goodPrice"]);
		$li.find(".goodSale").text(data[i]["goodSale"]);
		$("#no_product_buy").append($li);
	}

}