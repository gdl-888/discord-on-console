# discord-on-console
브라우저 대신 도스창에서 디스코드 대화하기

~~봇 없이 자신의 계정의 토큰으로 통하는지는 확인하지 않았다. 봇 계정으로 실행한다는 가정으로 작성됐다.~~ **꼭 봇 계정으로 해야 한다.** 아니면 계정이 정지될 수 있다. [참고](https://support.discordapp.com/hc/en-us/articles/115002192352-Automated-user-accounts-self-bots-)
 
https://discordapp.com/developers 페이지에서 애플릿과 봇을 만들고 토큰을 복사해서 JS 화일의 로그인 코드에 복사한다.

OAuth2에서 스코프에 bot를 선택하고 주소를 복사해서 접속하고 대화할 서버에 넣는다.

Ctrl+알파벳 글쇠로 채널을 이동시킬 수 있다.(이건 코드 설정을 직접 해주어야 한다. 주석이 있으니 참고.) 다만 다른 사람이 다른 채널에 메세지를 보내면 자동으로 채널이 그 채널로 전환된다.

- - -

a-delmsg.js는 봇으로 보낸 메시지를 삭제할 때 사용한다.
