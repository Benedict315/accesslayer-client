import { useCallback, useEffect, useRef, useState } from 'react';

type UseAutoProgressOptions = {
	startAt?: number;
	step?: number;
	intervalMs?: number;
	autoStart?: boolean;
};

export function useAutoProgress({
	startAt = 0,
	step = 1,
	intervalMs = 100,
	autoStart = false,
}: UseAutoProgressOptions = {}) {
	const [progress, setProgress] = useState(startAt);
	const timerRef = useRef<number | null>(null);

	const stop = useCallback(() => {
		if (timerRef.current !== null) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	}, []);

	const start = useCallback(() => {
		if (timerRef.current !== null) return;

		timerRef.current = window.setInterval(() => {
			setProgress(prev => {
				const next = prev + step;
				if (next >= 100) {
					stop();
					return 100;
				}
				return next;
			});
		}, intervalMs);
	}, [intervalMs, step, stop]);

	const reset = useCallback(() => {
		stop();
		setProgress(startAt);
	}, [startAt, stop]);

	useEffect(() => {
		if (autoStart) start();
		return stop;
	}, [autoStart, start, stop]);

	return {
		progress,
		start,
		stop,
		reset,
		setProgress,
	};
}
