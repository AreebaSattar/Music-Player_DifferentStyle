//All needed vars
var song = document.getElementById('song');
var NameS = document.getElementById('NameS');
var songImage = document.getElementById('imagee');
var playButton = document.getElementById('play');
var slideBar= document.getElementById('audioSlider');
var progress = document.getElementById('progress');
var audioSlider = document.getElementById('audioSlider');
var currentTime = document.getElementById('currentTime');
var durationD= document.getElementById('duration');

var startingIndex=0;
var songPlaying = false;

slideBar.addEventListener('click', changeValue);

//array of songs name, image and audio file
var songs = 
[
    {
        'name': ' Hello',
        'singer': 'Adele',
        'image': 'images/Ahn.jpg',
        'path': 'mp3/Hello.mp3'
    },
    {
        'name': ' Don\'t You Remember',
        'singer': 'Adele',
        'image': 'images/dyr.jpg',
        'path': 'mp3/dyr.mp3'
    },
    {
        'name': ' Someone Like You',
        'singer': 'Adele',
        'image': 'images/sly.jpg',
        'path': 'mp3/sly.mp3'
    },
    {
        'name': ' When We Were Young',
        'singer': 'Adele',
        'image': 'images/young.PNG',
        'path': 'mp3/young.mp3'
    }
]

//onload associated with Window object
window.onload = function ()
{
    song.src = songs[startingIndex].path;
    NameS.innerHTML = songs[startingIndex].name;
    singer.innerHTML = songs[startingIndex].singer;
    songImage.src = songs[startingIndex].image;
    playButton.innerHTML = '<img src="images/play.png">';
    slideBar.value = song.currentTime;
};

//function to play song
function playSong() 
{
    song.src = songs[startingIndex].path;
    NameS.innerHTML = songs[startingIndex].name;
    singer.innerHTML = songs[startingIndex].singer;
    songImage.src = songs[startingIndex].image;
    
    if (songPlaying==false) 
    {
        playButton.style.width = '15%';
        playButton.style.height = '`15`%';
        playButton.innerHTML = '<img src="images/pause1.png">';
        songPlaying = true;
        song.play();
    }
    else 
    {  
        playButton.style.width = '15%';
        playButton.style.height = '15%';
        playButton.innerHTML = '<img src="images/play.png">';
        songPlaying=false;
        song.pause();
    }   
}

//function to play next Song
function songNext()
{
    startingIndex+=1;

    if(startingIndex>3)
    {
        startingIndex=0;
    }

    songPlaying=true;
    slideBar.value=0;
    currentTime.textContent = '0:00';
    song.currentTime=0;
    playSong(); //play song function called
}

//function to play previous song
function songPrev()
{
    startingIndex-=1;

    if(startingIndex<0)
    {
        startingIndex=3;
    }

    songPlaying=true;
    slideBar.value=0;
    currentTime.textContent = '0:00';
    song.currentTime=0;
    playSong();//play song function called
}

//slider mai value change hone pe song ki timing chnage ho
function changeValue(event)
{
    var width= this.clientWidth; //width of slider except padding and border
    var clickk= event.offsetX;
    var durationS = song.duration;
    const timeN= (clickk/width)*durationS;
    song.currentTime=timeN;
}

//updating time of song
song.addEventListener('timeupdate', function () 
{
    if (song.currentTime > 0) 
    {
        var value = ( song.currentTime / song.duration) *100;
        progress.style.width = value + "%";
        audioSlider.value = value;
        currentTime.innerHTML=timeFormat(song.currentTime);   
    }
});

//Song's duration 
song.addEventListener('loadedmetadata',function()
{
    var duration =song.duration;
    console.log(`Duratioon: ${duration}`);
    durationD.innerHTML=timeFormat(duration);
});

//formatting time 
function timeFormat(time)
{
    var mins =Math.floor(time/60);
    var sec= Math.floor(time%60);
    if(sec<10)
        {
            sec ="0"+sec;
        }
    return mins +':'+sec;
}






