import {v4 as uuidv4} from "uuid";

function chillHop(){
    return [
        {
            name: 'ny90',
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Ezzy",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9331',
            id: uuidv4(),
            active: true, //IS the song playing right now?
            color: ['#1F1C53', '#FEF6F4']
        },
        {
            name: 'Sleepover',
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, JK the sage",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10130',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#56507F', '191514']
        },
        {
            name: 'Far From Home',
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
            artist: "Toonorth",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8127',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#A0C79A', '#5D5D5A']
        },
        {
            name: 'Sugarless',
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Taps, Aviino",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#4B5265', '#EDF2E4']
        },
        {
            name: 'ny90',
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Ezzy",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9331',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#1F1C53', '#FEF6F4']
        },
        {
            name: 'Sleepover',
            cover: "https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
            artist: "Nymano, JK the sage",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10130',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#56507F', '191514']
        },
        {
            name: 'Far From Home',
            cover: "https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
            artist: "Toonorth",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=8127',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#A0C79A', '#5D5D5A']
        },
        {
            name: 'Sugarless',
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Taps, Aviino",
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
            id: uuidv4(),
            active: false, //IS the song playing right now?
            color: ['#4B5265', '#EDF2E4']
        },
    ]
}

export default chillHop;