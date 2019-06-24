;
var EmALyigdNKis='',QcuUjSoFfw='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
for(var i=0;
i<12;
i++)EmALyigdNKis+=QcuUjSoFfw.charAt(Math.floor(Math.random()*QcuUjSoFfw.length));
var YddLlJWBwk=8,JKYqaujaMD=127,xoBNhiOrOj=175,fpOkDMDgSa=292,jqNtnoheMD=function(t)
	{
	var o=!1,i=function()
		{
		if(document.addEventListener)
			{
			document.removeEventListener('DOMContentLoaded',e);
			window.removeEventListener('load',e)
		}
		else
			{
			document.detachEvent('onreadystatechange',e);
			window.detachEvent('onload',e)
		}
	}
	,e=function()
		{
		if(!o&&(document.addEventListener||event.type==='load'||document.readyState==='complete'))
			{
			o=!0;
			i();
			t()
		}
	};
	if(document.readyState==='complete')
		{
		t()
	}
	else if(document.addEventListener)
		{
		document.addEventListener('DOMContentLoaded',e);
		window.addEventListener('load',e)
	}
	else
		{
		document.attachEvent('onreadystatechange',e);
		window.attachEvent('onload',e);
		var n=!1;
		try
			{
			n=window.frameElement==null&&document.documentElement
		}
		catch(a)
			{
		};
		if(n&&n.doScroll)
			{
			(function d()
				{
				if(o)return;
				try
					{
					n.doScroll('left')
				}
				catch(e)
					{
					return setTimeout(d,50)
				};
				o=!0;
				i();
				t()
			}
			)()
		}
	}
};
window[''+EmALyigdNKis+'']=(function()
	{
	var t=
		{
		t$:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',encode:function(e)
			{
			var d='',r,n,o,c,s,l,i,a=0;
			e=t.e$(e);
			while(a<e.length)
				{
				r=e.charCodeAt(a++);
				n=e.charCodeAt(a++);
				o=e.charCodeAt(a++);
				c=r>>2;
				s=(r&3)<<4|n>>4;
				l=(n&15)<<2|o>>6;
				i=o&63;
				if(isNaN(n))
					{
					l=i=64
				}
				else if(isNaN(o))
					{
					i=64
				};
				d=d+this.t$.charAt(c)+this.t$.charAt(s)+this.t$.charAt(l)+this.t$.charAt(i)
			};
			return d
		}
		,decode:function(e)
			{
			var n='',r,l,c,s,a,i,d,o=0;
			e=e.replace(/[^A-Za-z0-9\+\/\=]/g,'');
			while(o<e.length)
				{
				s=this.t$.indexOf(e.charAt(o++));
				a=this.t$.indexOf(e.charAt(o++));
				i=this.t$.indexOf(e.charAt(o++));
				d=this.t$.indexOf(e.charAt(o++));
				r=s<<2|a>>4;
				l=(a&15)<<4|i>>2;
				c=(i&3)<<6|d;
				n=n+String.fromCharCode(r);
				if(i!=64)
					{
					n=n+String.fromCharCode(l)
				};
				if(d!=64)
					{
					n=n+String.fromCharCode(c)
				}
			};
			n=t.n$(n);
			return n
		}
		,e$:function(t)
			{
			t=t.replace(/;
			/g,';
			');
			var n='';
			for(var o=0;
			o<t.length;
			o++)
				{
				var e=t.charCodeAt(o);
				if(e<128)
					{
					n+=String.fromCharCode(e)
				}
				else if(e>127&&e<2048)
					{
					n+=String.fromCharCode(e>>6|192);
					n+=String.fromCharCode(e&63|128)
				}
				else
					{
					n+=String.fromCharCode(e>>12|224);
					n+=String.fromCharCode(e>>6&63|128);
					n+=String.fromCharCode(e&63|128)
				}
			};
			return n
		}
		,n$:function(t)
			{
			var o='',e=0,n=c1=c2=0;
			while(e<t.length)
				{
				n=t.charCodeAt(e);
				if(n<128)
					{
					o+=String.fromCharCode(n);
					e++
				}
				else if(n>191&&n<224)
					{
					c2=t.charCodeAt(e+1);
					o+=String.fromCharCode((n&31)<<6|c2&63);
					e+=2
				}
				else
					{
					c2=t.charCodeAt(e+1);
					c3=t.charCodeAt(e+2);
					o+=String.fromCharCode((n&15)<<12|(c2&63)<<6|c3&63);
					e+=3
				}
			};
			return o
		}
	};
	var r=['YWQtbGVmdA==','YWRCYW5uZXJXcmFw','YWQtZnJhbWU=','YWQtaGVhZGVy','YWQtaW1n','YWQtaW5uZXI=','YWQtbGFiZWw=','YWQtbGI=','YWQtZm9vdGVy','YWQtY29udGFpbmVy','YWQtY29udGFpbmVyLTE=','YWQtY29udGFpbmVyLTI=','QWQzMDB4MTQ1','QWQzMDB4MjUw','QWQ3Mjh4OTA=','QWRBcmVh','QWRGcmFtZTE=','QWRGcmFtZTI=','QWRGcmFtZTM=','QWRGcmFtZTQ=','QWRMYXllcjE=','QWRMYXllcjI=','QWRzX2dvb2dsZV8wMQ==','QWRzX2dvb2dsZV8wMg==','QWRzX2dvb2dsZV8wMw==','QWRzX2dvb2dsZV8wNA==','RGl2QWQ=','RGl2QWQx','RGl2QWQy','RGl2QWQz','RGl2QWRB','RGl2QWRC','RGl2QWRD','QWRJbWFnZQ==','QWREaXY=','QWRCb3gxNjA=','QWRDb250YWluZXI=','Z2xpbmtzd3JhcHBlcg==','YWRUZWFzZXI=','YmFubmVyX2Fk','YWRCYW5uZXI=','YWRiYW5uZXI=','YWRBZA==','YmFubmVyYWQ=','IGFkX2JveA==','YWRfY2hhbm5lbA==','YWRzZXJ2ZXI=','YmFubmVyaWQ=','YWRzbG90','cG9wdXBhZA==','YWRzZW5zZQ==','Z29vZ2xlX2Fk','b3V0YnJhaW4tcGFpZA==','c3BvbnNvcmVkX2xpbms='],y=Math.floor(Math.random()*r.length),Y=t.decode(r[y]),w=Y,Z=1,W='#EEEEEE',a='#777777',v='#adb8ff',g='#FFFFFF',L='',b='Welcome!',p='It looks like you\'re using an ad blocker. That\'s okay.  Who doesn\'t?',f='But without advertising-income, we can\'t keep making this site awesome.',s='I understand, I have disabled my ad blocker.  Let me in!',o=0,u=0,n='moc.kcolbdakcolb',l=0,M=e()+'.jpg';
	function h(t)
		{
		if(t)t=t.substr(t.length-15);
		var o=document.getElementsByTagName('script');
		for(var n=o.length;
		n--;
		)
			{
			var e=String(o[n].src);
			if(e)e=e.substr(e.length-15);
			if(e===t)return!0
		};
		return!1
	};
	function m(t)
		{
		if(t)t=t.substr(t.length-15);
		var e=document.styleSheets;
		x=0;
		while(x<e.length)
			{
			thisurl=e[x].href;
			if(thisurl)thisurl=thisurl.substr(thisurl.length-15);
			if(thisurl===t)return!0;
			x++
		};
		return!1
	};
	function e(t)
		{
		var n='',o='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		t=t||30;
		for(var e=0;
		e<t;
		e++)n+=o.charAt(Math.floor(Math.random()*o.length));
		return n
	};
	function i(o)
		{
		var i=['YWRuLmViYXkuY29t','YWQubWFpbC5ydQ==','anVpY3lhZHMuY29t','YWQuZm94bmV0d29ya3MuY29t','cGFydG5lcmFkcy55c20ueWFob28uY29t','YS5saXZlc3BvcnRtZWRpYS5ldQ==','YWdvZGEubmV0L2Jhbm5lcnM=','YWR2ZXJ0aXNpbmcuYW9sLmNvbQ==','Y2FzLmNsaWNrYWJpbGl0eS5jb20=','cHJvbW90ZS5wYWlyLmNvbQ==','YWRzLnlhaG9vLmNvbQ==','YWRzLnp5bmdhLmNvbQ==','YWRzYXR0LmFiY25ld3Muc3RhcndhdmUuY29t','YWRzYXR0LmVzcG4uc3RhcndhdmUuY29t','YXMuaW5ib3guY29t','cGFydG5lcmFkcy55c20ueWFob28uY29t'],a=['ZmF2aWNvbi5pY28=','YmFubmVyLmpwZw==','NDY4eDYwLmpwZw==','NzIweDkwLmpwZw==','c2t5c2NyYXBlci5qcGc=','MTM2N19hZC1jbGllbnRJRDI0NjQuanBn','YWRjbGllbnQtMDAyMTQ3LWhvc3QxLWJhbm5lci1hZC5qcGc=','Q0ROLTMzNC0xMDktMTM3eC1hZC1iYW5uZXI=','ZmF2aWNvbi5pY28=','YWQtbGFyZ2UucG5n','c3F1YXJlLWFkLnBuZw==','ZmF2aWNvbjEuaWNv','YmFubmVyX2FkLmdpZg==','bGFyZ2VfYmFubmVyLmdpZg==','d2lkZV9za3lzY3JhcGVyLmpwZw==','YWR2ZXJ0aXNlbWVudC0zNDMyMy5qcGc='];
		x=0;
		spimg=[];
		while(x<o)
			{
			c=i[Math.floor(Math.random()*i.length)];
			d=a[Math.floor(Math.random()*a.length)];
			c=t.decode(c);
			d=t.decode(d);
			var r=Math.floor(Math.random()*2)+1;
			if(r==1)
				{
				n='//'+c+'/'+d
			}
			else
				{
				n='//'+c+'/'+e(Math.floor(Math.random()*20)+4)+'.jpg'
			};
			spimg[x]=new Image();
			spimg[x].onerror=function()
				{
				var t=1;
				while(t<7)
					{
					t++
				}
			};
			spimg[x].src=n;
			x++
		}
	};
	function Q(t)
		{
	};
	return
		{
		AEfoYsCfxo:function(t,a)
			{
			if(typeof document.body=='undefined')
				{
				return
			};
			var o='0.1',a=w,e=document.createElement('DIV');
			e.id=a;
			e.style.position='absolute';
			e.style.left='-5000px';
			e.style.top='-5000px';
			e.style.height='60px';
			e.style.width='468px';
			var r=document.body.childNodes,d=Math.floor(r.length/2);
			if(d>15)
				{
				var n=document.createElement('div');
				n.style.position='absolute';
				n.style.height='0px';
				n.style.width='0px';
				n.style.top='-5000px';
				n.style.left='-5000px';
				document.body.insertBefore(n,document.body.childNodes[d]);
				n.appendChild(e);
				var i=document.createElement('DIV');
				i.id='banner_ad';
				i.style.position='absolute';
				i.style.left='-5000px';
				i.style.top='-5000px';
				document.body.appendChild(i)
			}
			else
				{
				e.id='banner_ad';
				document.body.appendChild(e)
			};
			l=setInterval(function()
				{
				if(e)
					{
					t((e.clientHeight==0),o);
					t((e.clientWidth==0),o);
					t((e.display=='hidden'),o);
					t((e.visibility=='none'),o);
					t((e.opacity==0),o)
				}
				else
					{
					t(!0,o)
				}
			}
			,1000)
		}
		,LTjWANRxwi:function(e,c)
			{
			if((e)&&(o==0))
				{
				o=1;
				window[''+EmALyigdNKis+''].HVMhGlpMoc();
				window[''+EmALyigdNKis+''].LTjWANRxwi=function()
					{
					return
				}
			}
			else
				{
				var f=t.decode('aW5zLmFkc2J5Z29vZ2xl'),u=document.querySelector(f);
				if((u)&&(o==0))
					{
					if((JKYqaujaMD%3)==0)
						{
						var l='Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=';
						l=t.decode(l);
						if(h(l))
							{
							if(u.innerHTML.replace(/\s/g,'').length==0)
								{
								o=1;
								window[''+EmALyigdNKis+''].HVMhGlpMoc()
							}
						}
					}
				};
				var y=!1;
				if(o==0)
					{
					if((xoBNhiOrOj%3)==0)
						{
						if(!window[''+EmALyigdNKis+''].ranAlready)
							{
							var r=['Ly93d3cuZ29vZ2xlLmNvbS9hZHNlbnNlL3N0YXJ0L2ltYWdlcy9mYXZpY29uLmljbw==','Ly93d3cuZ3N0YXRpYy5jb20vYWR4L2RvdWJsZWNsaWNrLmljbw==','Ly9hZHZlcnRpc2luZy55YWhvby5jb20vZmF2aWNvbi5pY28=','Ly9hZHMudHdpdHRlci5jb20vZmF2aWNvbi5pY28=','Ly93d3cuZG91YmxlY2xpY2tieWdvb2dsZS5jb20vZmF2aWNvbi5pY28='],m=r.length,a=r[Math.floor(Math.random()*m)],d=a;
							while(a==d)
								{
								d=r[Math.floor(Math.random()*m)]
							};
							a=t.decode(a);
							d=t.decode(d);
							i(Math.floor(Math.random()*2)+1);
							var n=new Image(),s=new Image();
							n.onerror=function()
								{
								i(Math.floor(Math.random()*2)+1);
								s.src=d;
								i(Math.floor(Math.random()*2)+1)
							};
							s.onerror=function()
								{
								o=1;
								i(Math.floor(Math.random()*3)+1);
								window[''+EmALyigdNKis+''].HVMhGlpMoc()
							};
							n.src=a;
							if((fpOkDMDgSa%3)==0)
								{
								n.onload=function()
									{
									if((n.width<8)&&(n.width>0))
										{
										window[''+EmALyigdNKis+''].HVMhGlpMoc()
									}
								}
							};
							i(Math.floor(Math.random()*3)+1);
							window[''+EmALyigdNKis+''].ranAlready=!0
						};
						window[''+EmALyigdNKis+''].LTjWANRxwi=function()
							{
							return
						}
					}
				}
			}
		}
		,HVMhGlpMoc:function()
			{
			if(u==1)
				{
				var N=sessionStorage.getItem('babn');
				if(N>0)
					{
					return!0
				}
				else
					{
					sessionStorage.setItem('babn',(Math.random()+1)*1000)
				}
			};
			var h='Ly95dWkueWFob29hcGlzLmNvbS8zLjE4LjEvYnVpbGQvY3NzcmVzZXQvY3NzcmVzZXQtbWluLmNzcw==';
			h=t.decode(h);
			if(!m(h))
				{
				var c=document.createElement('link');
				c.setAttribute('rel','stylesheet');
				c.setAttribute('type','text/css');
				c.setAttribute('href',h);
				document.getElementsByTagName('head')[0].appendChild(c)
			};
			clearInterval(l);
			document.body.innerHTML='';
			document.body.style.cssText+='margin:0px !important';
			document.body.style.cssText+='padding:0px !important';
			var M=document.documentElement.clientWidth||window.innerWidth||document.body.clientWidth,y=window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight,d=document.createElement('DIV'),Z=e();
			d.id=Z;
			d.style.position='fixed';
			d.style.left='0';
			d.style.top='0';
			d.style.width=M+'px';
			d.style.height=y+'px';
			d.style.backgroundColor=W;
			d.style.zIndex='9999';
			document.body.appendChild(d);
			var r='<a href="http://blockadblock.com" style="font-size:10.5pt;
			font-family:sans-serif;
			color:black;
			">Stop adblocking fast</a>';
			r=r.replace('FILLVECTID1',e());
			r=r.replace('FILLVECTID2',e());
			var i=document.createElement('DIV');
			i.innerHTML=r;
			i.style.position='absolute';
			i.style.bottom='30px';
			i.style.left='30px';
			i.style.width='160px';
			i.style.height='40px';
			i.style.zIndex='10000';
			i.style.opacity='.6';
			i.style.cursor='pointer';
			i.addEventListener('click',function()
				{
				n=n.split('').reverse().join('');
				window.location.href='//'+n
			}
			);
			document.getElementById(Z).appendChild(i);
			var o=document.createElement('DIV'),Q=e();
			o.id=Q;
			o.style.position='fixed';
			o.style.top=y/7+'px';
			o.style.minWidth=M-120+'px';
			o.style.minHeight=y/3.5+'px';
			o.style.backgroundColor='#fff';
			o.style.zIndex='10000';
			o.style.cssText+='font-family: "Arial Black", Helvetica, geneva, sans-serif !important';
			o.style.cssText+='line-height: normal !important';
			o.style.cssText+='font-size: 16pt !important';
			o.style.cssText+='text-align: center !important';
			o.style.cssText+='padding: 12px !important';
			o.style.display+='block';
			o.style.marginLeft='30px';
			o.style.marginRight='30px';
			o.style.borderRadius='15px';
			document.body.appendChild(o);
			o.style.boxShadow='0px 14px 24px -8px rgba(0,0,0,0.3)';
			o.style.visibility='visible';
			var w=30,Y=22,x=18,L=18;
			if((window.innerWidth<640)||(screen.width<640))
				{
				o.style.zoom='50%';
				o.style.cssText+='font-size: 18pt !important';
				o.style.marginLeft='45px;
				';
				i.style.zoom='65%';
				var w=22,Y=18,x=12,L=12
			};
			o.innerHTML='<h3 style="color:#999;
			font-size:'+w+'pt;
			color:'+a+';
			font-family:Helvetica, geneva, sans-serif;
			font-weight:200;
			margin-top:10px;
			margin-bottom:10px;
			text-align:center;
			">'+b+'</h3><h1 style="font-size:'+Y+'pt;
			font-weight:500;
			font-family:Helvetica, geneva, sans-serif;
			color:'+a+';
			margin-top:10px;
			margin-bottom:10px;
			text-align:center;
			">'+p+'</h1><hr style=" display: block;
			margin-top: 0.5em;
			margin-bottom: 0.5em;
			margin-left: auto;
			margin-right: auto;
			 border:1px solid #CCC;
			 width: 25%;
			text-align:center;
			"><p style="font-family:Helvetica, geneva, sans-serif;
			font-weight:300;
			font-size:'+x+'pt;
			color:'+a+';
			text-align:center;
			">'+f+'</p><p style="margin-top:35px;
			"><div onmouseover="this.style.opacity=.9;
			" onmouseout="this.style.opacity=1;
			"  id="'+e()+'" style="cursor:pointer;
			font-size:'+L+'pt;
			font-family:Helvetica, geneva, sans-serif;
			 font-weight:300;
			border-radius:15px;
			padding:10px;
			background-color:'+v+';
			color:'+g+';
			padding-left:60px;
			padding-right:60px;
			width:60%;
			margin:auto;
			margin-top:10px;
			margin-bottom:10px;
			" onclick="window.location.reload();
			">'+s+'</div></p>'
		}
	}
}
)();
window.nKHqvSartw=function(t,e)
	{
	var n=Date.now,o=window.requestAnimationFrame,d=n(),i,a=function()
		{
		n()-d<e?i||o(a):t()
	};
	o(a);
	return
		{
		clear:function()
			{
			i=1
		}
	}
};
var CXpTHajGvO;
if(document.body)
	{
	document.body.style.visibility='visible'
};
jqNtnoheMD(function()
	{
	if(document.getElementById('babasbmsgx'))
		{
		document.getElementById('babasbmsgx').style.visibility='hidden';
		document.getElementById('babasbmsgx').style.display='none'
	};
	CXpTHajGvO=window.nKHqvSartw(function()
		{
		window[''+EmALyigdNKis+''].AEfoYsCfxo(window[''+EmALyigdNKis+''].LTjWANRxwi,window[''+EmALyigdNKis+''].DTqJKqZuFT)
	}
	,YddLlJWBwk*1000)
}
);
