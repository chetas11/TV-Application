var ChannelList = ["SjpdtPM9zDI", "46cXFUzR9XM", "QtMzV73NAgk", "oYxtLNJJ54Y", "dIpaY_1aoUw", "Xithigfg7dA", "_AXx2XSI4Kw", "3olM-9vcd4M", "fKzVK1Di3Dw", "LXb3EKWsInQ"];
var i = 0;
var Width = '640';
var Height = '390';
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new window['YT'].Player('player', {
        height: Height,
        width: Width,
        videoId: "" + ChannelList[0],
        playerVars: { 'controls': 0 },
        events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
        }
    });
}
var TVDeatails = /** @class */ (function () {
    function TVDeatails(TVSpecs) {
        this.Modal = TVSpecs.modal;
        this.Size = TVSpecs.size;
        this.ScreenType = TVSpecs.screenType;
        this.RefreshRate = TVSpecs.refreshRate;
        this.Power = TVSpecs.powerinWatts;
        this.LaunchDate = TVSpecs.launchDate;
    }
    TVDeatails.prototype.setWidth = function (width, height) {
        Width = width;
        Height = height;
    };
    return TVDeatails;
}());
var NOKIA = new TVDeatails({ modal: "55CAUHDN", size: 55, screenType: "LED", refreshRate: 60, powerinWatts: 105, launchDate: "December, 2019" });
var Sony = new TVDeatails({ modal: "QA55LS03TAKXXL", size: 55, screenType: "QLED", refreshRate: 120, powerinWatts: 165, launchDate: "March, 2020" });
var Samsung = new TVDeatails({ modal: "KD-55X7500H", size: 55, screenType: "LED", refreshRate: 60, powerinWatts: 174, launchDate: "May, 2020" });
var PlayPause = document.getElementById('play-pause');
var volumeUp = document.getElementById('top');
var volumeDown = document.getElementById('down');
var mute = document.getElementById('mute');
var Volume = document.getElementById('volume');
var nextChannel = document.getElementById('right');
var previousChannel = document.getElementById('left');
function onPlayerReady(event) {
    player.setVolume(50);
    event.target.playVideo();
}
PlayPause.addEventListener("click", function () {
    var state = player.getPlayerState();
    if (state === 1) {
        player.pauseVideo();
    }
    else if (state === 2 || state === -1) {
        player.playVideo();
    }
});
mute.addEventListener("click", function () {
    if (player.isMuted() === false) {
        player.mute();
        Volume.innerText = "Mute";
        Volume.classList.add("alert", "alert-danger");
    }
    else {
        player.unMute();
        Volume.innerText = "";
        Volume.classList.remove("alert", "alert-danger");
    }
});
volumeUp.addEventListener("click", function () {
    var volume = player.getVolume();
    if (volume <= 100) {
        player.setVolume(volume + 5);
        Volume.innerText = "Volume : " + volume;
    }
    if (player.isMuted() === true) {
        player.unMute();
    }
});
volumeDown.addEventListener("click", function () {
    var volume = player.getVolume();
    if (volume > 0) {
        player.setVolume(volume - 5);
        Volume.innerText = "Volume : " + volume;
        if (player.isMuted() === true) {
            player.unMute();
        }
    }
});
nextChannel.addEventListener("click", function () {
    if (i !== ChannelList.length) {
        i++;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();
    }
    else {
        i = 0;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();
    }
});
previousChannel.addEventListener("click", function () {
    if (i !== 0) {
        i--;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();
    }
    else {
        i = ChannelList.length - 1;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();
    }
});
var selectedTV = document.getElementById("TV");
var Modal = document.getElementById("Modal");
var Size = document.getElementById("Size");
var Scren = document.getElementById("Screen");
var RefreshRate = document.getElementById("RefreshRate");
var Power = document.getElementById("Power");
var Launchdate = document.getElementById("Launchdate");
selectedTV.addEventListener("change", function () {
    if (selectedTV.value === "NOKIA") {
        NOKIA.setWidth('860', '400');
        player.loadVideoById('y0xRRniQaKo');
        player.playVideo();
        Modal.innerText = "Modal : " + NOKIA.Modal;
        Size.innerText = "Size : " + NOKIA.Size + "inch";
        Scren.innerText = "Screen Type : " + NOKIA.ScreenType;
        RefreshRate.innerText = "Refresh Rate : " + NOKIA.RefreshRate + "Hz";
        Power.innerText = "Modal : " + NOKIA.Power + "W";
        Launchdate.innerText = "Modal : " + NOKIA.LaunchDate;
    }
    else if (selectedTV.value === "Sony") {
        player.loadVideoById('fnq0VrItpUk');
        player.playVideo();
        Modal.innerText = "Modal : " + Sony.Modal;
        Size.innerText = "Size : " + Sony.Size + "inch";
        Scren.innerText = "Screen Type : " + Sony.ScreenType;
        RefreshRate.innerText = "Refresh Rate : " + Sony.RefreshRate + "Hz";
        Power.innerText = "Modal : " + Sony.Power + "W";
        Launchdate.innerText = "Modal : " + Sony.LaunchDate;
    }
    else if (selectedTV.value === "Samsung") {
        player.loadVideoById('RKwjU7CqQ3s');
        player.playVideo();
        Modal.innerText = "Modal : " + Samsung.Modal;
        Size.innerText = "Size : " + Samsung.Size + "inch";
        Scren.innerText = "Screen Type : " + Samsung.ScreenType;
        RefreshRate.innerText = "Refresh Rate : " + Samsung.RefreshRate + "Hz";
        Power.innerText = "Modal : " + Samsung.Power + "W";
        Launchdate.innerText = "Modal : " + Samsung.LaunchDate;
    }
    else {
        player.loadVideoById(ChannelList[0]);
        player.playVideo();
        Modal.innerText = "";
        Size.innerText = "";
        Scren.innerText = "";
        RefreshRate.innerText = "";
        Power.innerText = "";
        Launchdate.innerText = "";
    }
});
