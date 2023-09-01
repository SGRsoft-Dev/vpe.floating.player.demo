window.player = null

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
