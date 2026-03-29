import { useCallback, useRef } from "react";

/**
 * useNarration — Text-to-speech hook for Hindi narration.
 * Uses high-fidelity, pre-generated MP3s played via HTMLAudioElement.
 * Zero chop, completely realistic AI voice.
 */
export function useNarration() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const speakMP3 = useCallback((screenKey: string) => {
    // If something is currently playing, stop it
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    try {
      const audio = new Audio(`/audio/${screenKey}.mp3`);
      audio.volume = 1.0;
      audio.play().catch(() => {
        // Silently catch autoplay restrictions (user hasn't interacted with document yet)
      });
      audioRef.current = audio;
    } catch (err) {
      // safe fail
    }
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return { speak: speakMP3, stop };
}
 
