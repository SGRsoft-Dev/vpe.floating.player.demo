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
                file:'https://m4qgahqg2249.edge.naverncp.com/hls/a4oif2oPHP-HlGGWOFm29A__/endpoint/sample/221027_NAVER_Cloud_intro_Long_ver_AVC_,FHD_2Pass_30fps,HD_2Pass_30fps,SD_2Pass_30fps,.mp4.smil/master.m3u8',
                poster:'https://2ardrvaj2252.edge.naverncp.com/endpoint/sample/221027_NAVER_Cloud_intro_Long_ver_01.jpg',
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
