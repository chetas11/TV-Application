let ChannelList = ["SjpdtPM9zDI", "46cXFUzR9XM", "QtMzV73NAgk", "oYxtLNJJ54Y", "dIpaY_1aoUw","Xithigfg7dA","_AXx2XSI4Kw","3olM-9vcd4M","fKzVK1Di3Dw","LXb3EKWsInQ"];
let i = 0;

let tag  = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new window['YT'].Player('player', {
        height: '390',
        width: '640',
        videoId: `${ChannelList[0]}`,
        playerVars: {'controls': 0 },
        events: {
            'onReady': this.onPlayerReady,
            'onStateChange': this.onPlayerStateChange
        }
    });
}

interface TVConfigs {
    modal: String;
    size:Number;
    screenType:String;
    refreshRate:Number;
    powerinWatts: Number;
    launchDate: String;
    wallMount?:boolean;

}


class TVDeatails{
    Modal: String;
    Size:Number;
    ScreenType:String;
    RefreshRate:Number;
    Power: Number;
    LaunchDate: String;
    WallMount?:boolean;

    constructor(TVSpecs:TVConfigs){
        this.Modal = TVSpecs.modal;
        this.Size = TVSpecs.size;
        this.ScreenType = TVSpecs.screenType;
        this.RefreshRate = TVSpecs.refreshRate;
        this.Power = TVSpecs.powerinWatts;
        this.LaunchDate = TVSpecs.launchDate;
    }
}


let NOKIA = new TVDeatails({modal:"55CAUHDN",size:55 ,screenType:"LED",refreshRate:60,powerinWatts:105 ,launchDate:"December, 2019"});
let Sony = new TVDeatails({modal:"QA55LS03TAKXXL",size:55,screenType:"QLED",refreshRate:120,powerinWatts:165,launchDate: "March, 2020"});
let Samsung = new TVDeatails({modal:"KD-55X7500H",size:55,screenType:"LED",refreshRate:60,powerinWatts:174,launchDate:"May, 2020"});



let PlayPause = (<HTMLMapElement>document.getElementById('play-pause'))
let volumeUp = (<HTMLMapElement>document.getElementById('top'))
let volumeDown = (<HTMLMapElement>document.getElementById('down'))
let mute = (<HTMLMapElement>document.getElementById('mute'))
let Volume = (<HTMLDivElement>document.getElementById('volume'))
let nextChannel = (<HTMLMapElement>document.getElementById('right'))
let previousChannel = (<HTMLMapElement>document.getElementById('left'))


function onPlayerReady(event) {
    player.setVolume(50);
    event.target.playVideo();
}




PlayPause.addEventListener("click", ()=>{
    var state = player.getPlayerState();
    if(state===1){
        player.pauseVideo()
    }else if(state === 2 || state === -1){
        player.playVideo()
    }   
})


mute.addEventListener("click", ()=>{
    if(player.isMuted()=== false){
        player.mute()
        Volume.innerText = "Mute" 
        Volume.classList.add("alert","alert-danger")
    }else{
        player.unMute()
        Volume.innerText = ""
        Volume.classList.remove("alert","alert-danger")
    }
})



volumeUp.addEventListener("click", ()=>{
    let volume = player.getVolume();
    if(volume <= 100){
      player.setVolume(volume+5)
      Volume.innerText = "Volume : "+volume      
    }

    if(player.isMuted()=== true){
        player.unMute()
    }
})

volumeDown.addEventListener("click", ()=>{
    let volume = player.getVolume();
    if(volume > 0){
      player.setVolume(volume-5) 
      Volume.innerText = "Volume : "+volume  

    if(player.isMuted()=== true){
        player.unMute()
    }
   
    }
})



nextChannel.addEventListener("click", ()=>{
    if(i!==ChannelList.length){
        i++;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();
    }else{
        i = 0;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();

    }
    
})

previousChannel.addEventListener("click", ()=>{
       if(i!==0){
        i--;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();
    }else{
        i = ChannelList.length-1;
        player.loadVideoById(ChannelList[i]);
        player.playVideo();

    }
})

let selectedTV = (<HTMLSelectElement>document.getElementById("TV"))

let Modal = (<HTMLParagraphElement>document.getElementById("Modal"))
let Size = (<HTMLParagraphElement>document.getElementById("Size"))
let Scren = (<HTMLParagraphElement>document.getElementById("Screen"))
let RefreshRate = (<HTMLParagraphElement>document.getElementById("RefreshRate"))
let Power = (<HTMLParagraphElement>document.getElementById("Power"))
let Launchdate = (<HTMLParagraphElement>document.getElementById("Launchdate"))


selectedTV.addEventListener("change",()=>{
    if(selectedTV.value === "NOKIA"){
        player.loadVideoById('y0xRRniQaKo');
        player.playVideo();
        Modal.innerText = `Modal : ${NOKIA.Modal}`
        Size.innerText = `Size : ${NOKIA.Size}inch`
        Scren.innerText = `Screen Type : ${NOKIA.ScreenType}`
        RefreshRate.innerText = `Refresh Rate : ${NOKIA.RefreshRate}Hz`
        Power.innerText = `Modal : ${NOKIA.Power}W`
        Launchdate.innerText = `Modal : ${NOKIA.LaunchDate}`
    }else if(selectedTV.value === "Sony"){
        player.loadVideoById('fnq0VrItpUk');
        player.playVideo();
        Modal.innerText = `Modal : ${Sony.Modal}`
        Size.innerText = `Size : ${Sony.Size}inch`
        Scren.innerText = `Screen Type : ${Sony.ScreenType}`
        RefreshRate.innerText = `Refresh Rate : ${Sony.RefreshRate}Hz`
        Power.innerText = `Modal : ${Sony.Power}W`
        Launchdate.innerText = `Modal : ${Sony.LaunchDate}`
    }else if(selectedTV.value === "Samsung"){
        player.loadVideoById('RKwjU7CqQ3s');
        player.playVideo();
        Modal.innerText = `Modal : ${Samsung.Modal}`
        Size.innerText = `Size : ${Samsung.Size}inch`
        Scren.innerText = `Screen Type : ${Samsung.ScreenType}`
        RefreshRate.innerText = `Refresh Rate : ${Samsung.RefreshRate}Hz`
        Power.innerText = `Modal : ${Samsung.Power}W`
        Launchdate.innerText = `Modal : ${Samsung.LaunchDate}`   
    }else{
        player.loadVideoById(ChannelList[0]);
        player.playVideo();
        Modal.innerText = ""
        Size.innerText = ""
        Scren.innerText = ""
        RefreshRate.innerText = ""
        Power.innerText = ""
        Launchdate.innerText = "" 
    }
})