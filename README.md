# discord-on-console
브라우저 대신 도스창에서 디스코드 대화하기

Discord.js v11만 호환됩니다.

~~봇 없이 자신의 계정의 토큰으로 통하는지는 확인하지 않았다.~~ *(작동은 하지만)* **\*무조건\* 봇 계정으로 해야 한다. 그렇지 않고 본계정으로 하다가 적발되면 계정이 정지될 수 있다.** [참고](https://support.discordapp.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-)
 
https://discordapp.com/developers 페이지에서 애플릿과 봇을 만들고 토큰을 복사해서 JS 화일의 로그인 코드에 복사한다.

OAuth2에서 스코프에 bot를 선택하고 주소를 복사해서 접속하고 대화할 서버에 넣는다.

Ctrl+알파벳 글쇠로 채널을 이동시킬 수 있다.(이건 코드 설정을 직접 해주어야 한다. 주석이 있으니 참고.) 다만 다른 사람이 다른 채널에 메세지를 보내면 자동으로 채널이 그 채널로 전환된다.

- - -

a-delmsg.js는 봇으로 보낸 메시지를 삭제할 때 사용한다.

- - -

알림음 목록
- 사용자에게 메시지 받음 (삐빅-)
- 사용자 들어옴 (삑-)
- 사용자 나감 (삐비비-)
- 접속율 낮은사람에게 메시지 받음 (삐- 삐- 삐-)
- 접속율 낮은사람 들어옴 (삐비- 삐비-)
- 접속율 낮은사람 나감 (삐- 삐비-)
- 그외 사용자 상태변경 (삐- 삐-)
- 자신이 멘션됨 (삐비- 삑- 삐비-)
- 자신이 접속율 낮은사람에게 멘션됨 (삑- 삐빅- 삐비빅-)
- 욕설있는 메시지 받음 (삐비비비비-)
- 접속율 낮은사람에게 욕설있는 메시지 받음 (삐비비비비- 삡-)
- 자신이 멘션됐으면서 욕설있는 메시지 수신 (삐비비비비- 삐비-)
- 접속율 낮은사람이 자신이 멘션했으면서 욕설있는 메시지 발신 (삐비비비빅- 삐비빅-)
- 서버에 멤버 들어옴 (삐비비- 삐- 삐비-)
- 서버에서 멤버 나감 (삐비비- 삐비- 삐-)
