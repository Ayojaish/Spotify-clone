import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../assets/assets";


export const PlayerContext = createContext();
const Playercontextprvider = (props) => {

    const audioRef = useRef();
    const seekBG = useRef();
    const seekBar = useRef();

    const [track, setTrack] = useState(songsData[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setCurrentTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    });

    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }
    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const playwithid = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();  
        setIsPlaying(true);  
    }
    const previous = async () => {
        if (track.id>0){
            await setTrack(songsData[track.id - 1]);
            await audioRef.current.play();
            setIsPlaying(true);
        }
    }
      const next = async () => {
        if (track.id < songsData.length-1) {
            await setTrack(songsData[track.id + 1]);
            await audioRef.current.play();
            setIsPlaying(true);
        }
    }
 const seeksong = (e) => {
    audioRef.current.currentTime = (e.nativeEvent.offsetX / seekBG.current.offsetWidth) * audioRef.current.duration;

 }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleTimeUpdate = () => {

            seekBar.current.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
            setCurrentTime({
                currentTime: {
                    second: Math.floor(audio.currentTime % 60),
                    minute: Math.floor(audio.currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(audio.duration % 60) || 0,
                    minute: Math.floor(audio.duration / 60) || 0
                }
            });
        };

        audio.ontimeupdate = handleTimeUpdate;

        // Clean up on unmount
        return () => {
            audio.ontimeupdate = null;
        };
    }, []);

    const contextvalue = {
        audioRef,
        seekBG,
        seekBar,
        track,
        setTrack,
        isPlaying,
        setIsPlaying,
        time,
        setCurrentTime,
        play,
        pause,
        playwithid,
        previous,
        next,
        seeksong
    }

    return (
        <PlayerContext.Provider value={contextvalue}>
            {props.children}
        </PlayerContext.Provider>
    )


}


export default Playercontextprvider;