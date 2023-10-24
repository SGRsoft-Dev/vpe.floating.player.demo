## NAVER CLOUD PLATFORM Video Player Enhancement DEMO

VIDEO24에서 제공하는 NAVERCLOUD VPE Player의 플로팅 플레이어 데모 코드

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202309/175219155f4f5a4aba13d19b329efb98.png)



## 소스코드
[https://github.com/SGRsoft-Dev/vpe.floating.player.demo](https://github.com/SGRsoft-Dev/vpe.floating.player.demo)


*** 


## 필수
- 네이버클라우드 플랫폼 Video Player Enhancement SDK URL 

***

## 제한사항

현재 데모코드에 사용된 필수 요소들은 개발자 로컬 테스트에서만 동작합니다. (http://localhost:3000)

네이버클라우드 플랫폼 Video Player Enhancement 유료 라이선스가 필요합니다.
***


## 사용자 가이드
### NAVERCLOUD PLATFORM Video Player Enhancement
https://guide.ncloud-docs.com/docs/ko/vpe-overview

### VPE 재생소스 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-example-source

### VPE Web 설정 가이드
https://guide.ncloud-docs.com/docs/vpe-web

***


## NCP Video Player Enhancement SDK 설정
![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/7a602c53cc6a0b69759031e44ad8e5d9.png)

네이버클라우드 콘솔에서 Video Player Enhancement 진입

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/bc8f9b9850f93396e7e07ca2c1c9cd4d.png)

플레이어를 신규로 생성합니다.

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/37fc51c8dccfdf2711ba7500203c685c.png)

서비스를 운영할 도메인을 입력합니다.

***

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202308/6ad95ea2ed84a4412224a68f17d22c1b.png)

생성된 플레이어의 SDK URL를 복사합니다.

***

## 실행방법

```bash
$ npm install
$ npm run dev
```

## 코드 보기
```javascript
// 플레이어 플로팅 상태 변경
const setFixed = (scrollY) => {
    let playerHeight = document.querySelector('#player').offsetHeight;
    if (scrollY > parseInt(playerHeight)) {
        document.querySelector('#player').classList.add('floating');
    }else{
        document.querySelector('#player').classList.remove('floating');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.player = new ncplayer('player',{
        playlist:[
            {
                file:'https://fsxikvammvwv14470411.cdn.ntruss.com/hls/9N5-iJ4f9tdzE6D708PTmg__/vod/j5IXBfIJ83893893_,1080,720,480,p.mp4.smil/master.m3u8',
                poster:'https://wnfosehmzhuc12665447.cdn.ntruss.com/thumb/sample_thumb.png?type=m&w=1024&h=760&ttype=jpg',
                description: {
                    title: "네이버클라우드 소개 영상",
                    created_at: "2023.07.13",
                    profile_name: "네이버클라우드",
                    profile_image: "https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202208/d127c8db642716d84b3201f1d152e52a.png"
                },
            }
        ],
        autostart:true,
    });

    // 플레이어 플로팅 상태 초기화
    setFixed(window.scrollY);

    window.addEventListener('scroll', () => {
        setFixed(window.scrollY);
    })
});

```

***


## 문의하기


SGRSOFT 개발팀  : dev@sgrsoft.com

채널톡 : https://sgrsoft.channel.io/home

영업 및 네이버클라우드 가입 문의 : biz@sgrsoft.com

SGRSOFT를 통하여 네이버클라우드 플랫폼 크래딧을 지원 받을 수 있습니다. (최대 300만원)


VIDEO24 웹사이트 :
[https://video24.app/](https://video24.app/)

![](https://nnbkegvqsbcu5297614.cdn.ntruss.com/profile/202310/4f8b9055fd11fe2a1595586c52a7ec29.png)

