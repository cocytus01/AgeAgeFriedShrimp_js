var res = {
    background_png:"res/background.png",
    uprock_png:"res/rock_above.png",
    underrock_png:"res/rock_under.png",
    up_png:"res/ceiling.png",
    under_png:"res/land.png",
    particle_texture:"res/particle_texture.png",//パーティクル
    particle_plist:"res/particle_texture.plist",//パーティクル
    Title_png:"res/Title.png",
    start_png:"res/start.png",
    shrimp01_png:"res/shrimp01.png",
    shrimp02_png:"res/shrimp02.png",
    shrimp03_png:"res/shrimp03.png",
    shrimp04_png:"res/shrimp04.png",
    nagoya00_png:"res/nagoya0.png",
    nagoya01_png:"res/nagoya1.png",
    bgm_title:"res/白亜ノ森.m4a",
    bgm_main:"res/初陣.m4a",
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
