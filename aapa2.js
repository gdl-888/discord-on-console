const readline = require('readline');

const Discord = require('discord.js');
const client = new Discord.Client();

function print(x) {
	console.log(x);
}

function prt(x) {
	process.stdout.write(x);
}

myUsername = "여기에 '내' 사용자 이름 입력";

var sch, cid, ns, nc;

prt("서버에 접속 중입니다... ");

client.on('ready', () => {
	print(`완료!`);
});

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

client.on('message', (msg) => {
	var username = client.users.find(user => user.id == msg.member.toString().replace(/^[<][@]/i, '').replace(/[>]$/i, ''))['username'];
	
	if(username != myUsername) {
		cid = msg.channel.id;
		
		if(cid != sch) {
			try {
				print("\n\n[[채널이 " + client.channels.get(sch).name + "에서 " + client.channels.get(cid).name + "(으)로 변경되었습니다]]");
			} catch(e) {
				print("\n\n[[채널이 " + client.channels.get(cid).name + "(으)로 변경되었습니다]]");
			}
		}
		
		sch = cid;

		print("\n" + username + "> " + msg.content);
	}
	
	rl.question(myUsername + '> ', (answer) => {
		// TODO: Log the answer in a database
		if(answer == '') print("[[오류! 메시지가 없습니다.]]");
		else client.channels.get(cid).send(answer);
		
		// rl.close();
	});
});


try {
	client.login("여기에 토큰 입력");
} catch(e) {
	print("실패!");
	setTimeout(function() {
		while(1);
	}, 5000);
}

const keypress = require('keypress'), tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
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
			print("\n\n[[채널이 " + client.channels.get(sch).name + "에서 " + client.channels.get(cid).name + "(으)로 변경되었습니다]]");
		} catch(e) {
			print("\n\n[[채널이 " + client.channels.get(cid).name + "(으)로 변경되었습니다]]");
		}
		prt("\n\n" + myUsername + "> ");
	
		rl.question(myUsername + '> ', (answer) => {
			// TODO: Log the answer in a database
			
			if(answer == '') print("[[오류! 메시지가 없습니다.]]");
			else client.channels.get(cid).send(answer);
			
			// rl.close();
		});
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
