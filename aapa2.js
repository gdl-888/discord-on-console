function print(x) {
	console.log(x);
}

function prt(x) {
	process.stdout.write(x);
}

function beep(cnt = 1) {
	for(var i=1; i<=cnt; i++)
		prt("");
}

var lowConnections = []; // 접속율 낮은사람의 *사용자이름* (ID 말고) 등록하기.

print("Discord-on-Console 시작 중. . .\n");

const readline = require('readline');

const Discord = require('discord.js');
const Constants = require('discord.js/src/util/Constants.js');

// 봇이 휴대폰상태이고 싶다면 아래 주석 해제(개발자가 이행위가 금지됐는지 확인하지 않았으나 규정위반일 가능성 없지않음)
// Constants.DefaultOptions.ws.properties.$browser = `Discord Android`; 

const client = new Discord.Client({
	disableEveryone: false
});

myUsername = "여기에 내 사용자이름 입력";

var sch, cid, ns, nc;

var jsnUserStats = {}, jsnOldMsg = {}, jsnOldMsgCnt = {}, jsnHello = {};

var connected = false;

prt("Discordapp.com 대화 서버에 접속 중입니다. . . ");

client.on('ready', () => {
	print('완료!');
			
	connected = true;
});

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

client.on('message', (msg) => {
	if(msg.guild !== null) {
		var username;
		try {
			username = client.users.find(user => user.id == msg.member.toString().replace(/^[<][@]/i, '').replace(/[>]$/i, ''))['username'];
		} catch(e) {
			username = myUsername;
		}
		
		var ownerObj = client.users.find(user => user.id == '여기에 계정 ID 입력');
		
		if(username != myUsername) {
			cid = msg.channel.id;
			
			if(cid != sch) {
				try {
					print("\n\n[[채널이 " + client.channels.get(sch).name + "에서 " + client.channels.get(cid).name + "(으)로 변경되었읍니다]]");
				} catch(e) {
					print("\n\n[[채널이 " + client.channels.get(cid).name + "(으)로 변경되었읍니다]]");
				}
			}
			
			sch = cid;
			var isfile = '';
			if(msg.attachments) {
				// isfile = '[파일을 첨부함]';
			}
			print("\n" + username + "> " + isfile + msg.content);
			
			var imsg = msg.content.toUpperCase();
			var ismsg = imsg.replace(/\s/gi, '');
			
			var message = msg.content.toUpperCase().replace(/\s/gi, '');
			
			/* 욕설 필터링 */
			if( 
				imsg.includes('FUCK') || imsg.includes('SHIT') || ismsg.includes('ASSHOLE') || ismsg.includes('PISSOFF') ||
				ismsg.includes('DICKHEAD') || imsg.includes('BITCH') || ismsg.includes('BASTARD') ||
				imsg.includes('씨발') || imsg.includes('병신') || imsg.includes('지랄') || imsg.includes('ㅅㅂ') || imsg.includes('ㅆㅂ') || 
				imsg.includes('ㅄ') || imsg.includes('ㅂㅅ') || imsg.includes('젠장') || imsg.includes('개새끼') || 
				imsg.includes('존나') || imsg.includes('좆나') || imsg.includes('뻑유') || imsg.includes('씨발') || ismsg.includes('왓더퍼킹') || msg.content == "$SWRWRD"
			) {
				print('[[경고! 방금 메시지에 욕설이 포함되어있는 것같습니다]]');
				
				beep(3);
			}
			
			if(lowConnections.includes(username)) {
				beep(1);
				setTimeout(function() {
					beep(1);
					setTimeout(function() {
						beep(1);
					}, 650);
				}, 650);
			} else {
				beep(2);
			}
			
			if(msg.isMemberMentioned(client.user) || msg.isMemberMentioned(client.users.find(user => user.id == '여기에 계정 ID 입력'))) {
				setTimeout(function() {
					beep(1);
					setTimeout(function() {
						beep(2);
					}, 650);
				}, 650);
			}
			
			
			if(msg.content.match(/[h][t][t][p][s][:][/][/]discord[.]gg[/][A-Za-z0-9]{4,9}/)) {
				var ivlnk = msg.content.match(/[h][t][t][p][s][:][/][/]discord[.]gg[/][A-Za-z0-9]{4,9}/)[0];
				
				// print(ivlnk);
				
				client.fetchInvite(ivlnk).then((invite) => {
					print("\n[[서버에 초대받았어요]]");
					print("[[이름: " + invite.guild['name'] + "]]");
					print("[[사용자 수: " + invite.guild['memberCount'] + "]]");
				});
			}
		}
	}
	
	rl.question(myUsername + '> ', (answer) => {
		// TODO: Log the answer in a database
		client.channels.get(cid).send(answer);
		
		// rl.close();
	});
});

client.on('guildMemberAdd', member => {
	beep(3);
	setTimeout(function() {
		beep(1);
		setTimeout(function() {
			beep(2);
		}, 650);
	}, 650);
});

client.on('guildMemberRemove', member => {
	beep(3);
	setTimeout(function() {
		beep(2);
		setTimeout(function() {
			beep(1);
		}, 650);
	}, 650);
});

try {
	client.login("여기에 봇 토큰 입력");
} catch(e) {
	print("실패!");
	setTimeout(function() {
		while(1);
	}, 5000);
}

const keypress = require('keypress'), tty = require('tty');

keypress(process.stdin);

process.stdin.on('keypress', function (ch, key) {
	if(key && key.ctrl) {
		switch(key.name) {
      /* 
        -*- Ctrl+알파벳으로 채널을 이동한다. -*-
        코드를 추가한다.
        
        알파벳 글쇠가 x이면 다음 코드를 추가한다.
        
        case 'x':
            cid = '채널 ID(개발자모드 실행 후 ID 복사하기로 얻을 수 있음';
            break;
            
        아래는 예시
      */
			
	
    
			case 'o':
				cid = '111222333444555666';
			break; case 's':
				cid = '666555444333222111';
			break; case 'n':
				cid = '999888777666555444';
		}
		
		try {
			print("\n\n[[채널이 " + client.channels.get(sch).name + "에서 " + client.channels.get(cid).name + "(으)로 변경되었읍니다]]");
		} catch(e) {
			print("\n\n[[채널이 " + client.channels.get(cid).name + "(으)로 변경되었읍니다]]");
		}
		sch = cid;
		
		prt("\n\n" + myUsername + "> ");
	
		rl.question(myUsername + '> ', (answer) => {
			client.channels.get(cid).send(answer);
			
			// rl.close();
		});
	}
	if(key && key.meta && key.shift) {
		var bid;
		
		// 빠른 차단 해제 - 알트+시프트+알파벳
		// 아래 예시 참고해서 알파벳 등록
		
		// 디스코드에서 제공하는 차단기능이 아니라 "차단됨"이라는 역할을 만들어서(본인서버 참고)
		// 차단됨 역할이 있으면 메시지 못보내게 채널 권한을 설정
		
		switch(key.name) {
			case '알파벳 1 입력 소문자로':
				bid = '대상 사용자 1 ID 입력';
			break; case '알파벳 2 입력 소문자로':
				bid = '대상 사용자 2 ID 입력';
			break; case '알파벳 3 입력 소문자로':
				bid = '대상 사용자 3 ID 입력';
		}
		
		try {
			client.guilds.get('서버ID').members.get(bid).removeRole("차단됨 역할 ID");
		} catch(e) {}
	
		var UN = client.users.find(user => user.id == bid)['username'];
		
		var SM = "[[성공 - 사용자 " + UN + "이 차단 해제됐읍니다]]";
		print(SM);
		
		try {
			client.channels.get(cid).send(SM);
		} catch(e) {}
	}
	else if(key && key.meta) {
		var bid;
		
		// 빠른 차단 - 알트+알파벳
		// 아래 예시 참고해서 알파벳 등록
		
		// 디스코드에서 제공하는 차단기능이 아니라 "차단됨"이라는 역할을 만들어서(본인서버 참고)
		// 차단됨 역할이 있으면 메시지 못보내게 채널 권한을 설정
		
		switch(key.name) {
			case '알파벳 1 입력 소문자로':
				bid = '대상 사용자 1 ID 입력';
			break; case '알파벳 2 입력 소문자로':
				bid = '대상 사용자 2 ID 입력';
			break; case '알파벳 3 입력 소문자로':
				bid = '대상 사용자 3 ID 입력';
		}
		
		try {
			client.guilds.get('서버ID').members.get(bid).addRole("차단됨 역할 ID");
		} catch(e) {}
	
		var UN = client.users.find(user => user.id == bid)['username'];
		
		var SM = "[[성공 - 사용자 " + UN + "이 차단되었읍니다. 15분 후에 해제를 요청하십시오]]";
		print(SM);
		
		setInterval(function() {
			client.guilds.get('서버ID').members.get(bid).removeRole("차단됨 역할 ID");
		}, 60000 * xx); // xx에 차단 기간(분) 대입
		
		try {
			client.channels.get(cid).send(SM);
		} catch(e) {}
	}
	
	if(key && key.ctrl && key.name == 'c') {
		process.stdin.pause();
	}
});

if(typeof process.stdin.setRawMode == 'function') {
	process.stdin.setRawMode(true);
} else {
	tty.setRawMode(true);
}
process.stdin.resume();

var chkUserStatus = setInterval(function() {
	if(connected) {
		const list = client.guilds.get("사용자들이 있는 서버ID"); 
		
		list.members.forEach(function(member) {
			var username = member.user.username;
			var bs = jsnUserStats[username], cs = member.user.presence.status;
			
			if(typeof bs === 'undefined') {
				if(cs != 'offline') {
					switch(cs) {
						case 'online':
							cs = '대화 가능한 상태입';
						break ; case 'idle':
							cs = "자리를 비운 상태입";
						break ; case 'dnd':
							cs = "다른 용무 중입"
						break ; case 'offline':
							cs = "접속하지 않았읍"
					}
					print("[[" + username + " 사용자는 " + cs + "니다]]");
				}
			} else {
				if(bs != cs) {
					if(cs == 'offline') {
						print("\n[[" + username + " 사용자가 나갔읍니다]]");
						
						if(lowConnections.includes(username)) {
							beep(1);
							setTimeout(function() {
								beep(2);
							}, 650);
						} else {
							beep(3);
						}
					}
					else if(bs == 'offline' && cs == 'online') {
						print("\n[[" + username + " 사용자가 들어왔읍니다]]");
						
						if(lowConnections.includes(username)) {
							beep(2);
							setTimeout(function() {
								beep(2);
							}, 650);
						} else {
							beep(1);
						}
					}
					else if(bs == 'offline' && cs == 'dnd') {
						print("\n[[" + username + " 사용자가 연결했지만 다른 용무중입니다]]");
						
						beep(1);
						setTimeout(function() {
							beep(1);
						}, 650);
					}
					else if(cs == 'dnd') {
						print("\n[[" + username + " 사용자가 다른 용무를 시작했읍니다]]");
						
						if(lowConnections.includes(username)) {
							beep(1);
							setTimeout(function() {
								beep(2);
							}, 650);
						} else {
							beep(3);
						}
					}
					else if(bs == 'dnd' && cs == 'online') {
						print("\n[[" + username + " 사용자가 할 일을 끝내고 복귀했읍니다]]");
						
						if(lowConnections.includes(username)) {
							beep(2);
							setTimeout(function() {
								beep(2);
							}, 650);
						} else {
							beep(1);
						}
					}
					else if(bs == 'idle' && cs == 'online') {
						print("\n[[" + username + " 사용자가 복귀했읍니다]]");
						
						if(lowConnections.includes(username)) {
							beep(2);
							setTimeout(function() {
								beep(2);
							}, 650);
						} else {
							beep(1);
						}
					}
					else if(bs == 'online' && cs == 'idle') {
						print("\n[[" + username + " 사용자가 자리를 비웠읍니다]]");
						
						if(lowConnections.includes(username)) {
							beep(1);
							setTimeout(function() {
								beep(2);
							}, 650);
						} else {
							beep(3);
						}
					}
					else if(bs == 'offline' && cs == 'idle') {
						print("\n[[" + username + " 사용자가 들어왔지만 자리를 비웠읍니다]]");
						
						beep(1);
						setTimeout(function() {
							beep(1);
						}, 650);
					}
					else if(bs == 'dnd' && cs == 'idle') {
						print("\n[[" + username + " 사용자가 용무를 끝냈으나 쉬고 있는지 자리를 비웠읍니다]]");
						
						beep(1);
						setTimeout(function() {
							beep(1);
						}, 650);
					}
					else {
						print("\n[[" + username + " 사용자가 " + bs + "였지만 이제 " + cs + "상태입니다]]");
						
						beep(1);
						setTimeout(function() {
							beep(1);
						}, 650);
					}
				}
			}
			
			jsnUserStats[username] = member.user.presence.status;
		});
	}
}, 1500);
