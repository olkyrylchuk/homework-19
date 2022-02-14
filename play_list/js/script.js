
let list = [
    {
    author: "LED ZEPPELIN",
    song:"STAIRWAY TO HEAVEN"
    },
    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },
    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },
    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },
    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },
    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },
    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },
    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }
    ]; 
    const ELEM_OL = document.createElement('ol');
        for (let i = 0; i < list.length; i++) {
            const ELEM_LI = document.createElement('li');
            ELEM_LI.textContent = (list[i].author + ' ' + list[i].song);
            ELEM_OL.append(ELEM_LI)     
    }
            document.body.append(ELEM_OL);