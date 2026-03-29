/**
 * useHaptic — Trigger device vibration for tactile feedback.
 * Falls back silently on devices that don't support it.
 * Zero dependencies. Zero cost. Massive UX improvement on mobile.
 */
export function useHaptic() {
  const vibrate = (pattern: number | number[] = 30) => {
    try {
      if ("vibrate" in navigator) {
        navigator.vibrate(pattern);
      }
    } catch {
      // Silent — not all browsers support vibrate
    }
  };

  return {
    /** Short tap — correct answer, button press */
    tap: () => vibrate(30),
    /** Double bump — wrong answer */
    error: () => vibrate([50, 30, 50]),
    /** Long — achievement unlocked */
    success: () => vibrate([30, 20, 60]),
  };
}
 
