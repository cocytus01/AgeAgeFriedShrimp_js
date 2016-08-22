var res = {
    background_png:"res/background.png",
    uprock_png:"res/rock_above.png",
    underrock_png:"res/rock_under.png",
    up_png:"res/ceiling.png",
    under_png:"res/land.png",
    particle_texture:"res/particle_texture.png",//パーティクル
    particle_plist:"res/particle_texture.plist",//パーティクル
    TitleBG_png:"res/ocean.png",
    Title_png:"res/Title.png",
    start_png:"res/start.png",
    gameoverBG_png:"res/ocean2.png",
    replay_png:"res/replay_button.png",
    Heart_png:"res/heart.png",

    //エビちゃんゾーン
    shrimp01_png:"res/shrimp01.png",
    shrimp02_png:"res/shrimp02.png",
    shrimp03_png:"res/shrimp03.png",
    shrimp04_png:"res/shrimp04.png",
    //ここまでエビちゃんゾーン

    //こっから珊瑚ゾーン
    sangoUp:"res/coral_above.png",
    sangoDown:"res/coral_under.png",
    //ここまで珊瑚ゾーン

    //こっから音楽
    bgm_title:"res/wave.mp3",
    bgm_main:"res/初陣.m4a",
    bgm_main2:"res/己が信念を杖に.mp3",
    se_swim:"res/swim.mp3",
    se_get:"res/se_get.mp3",
    se_miss:"res/se_surprise.mp3",
    se_death:"res/Death.mp3",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
