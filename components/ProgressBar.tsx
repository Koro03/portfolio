'use client'

import { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  duration: number; // pourcentage entre 0 et 100
  loop?: boolean;             // boucle ou non
  onComplete?: () => void;    // fin (si loop = false)
  onLoop?: () => void;        // à chaque reset
}


export default function ProgressBar({ duration = 1500,loop,onComplete,onLoop }: ProgressBarProps) {

    const [progress, setProgress] = useState(0);
    const requestRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    const animate = (timestamp: number) => {
        if (!startRef.current) startRef.current = timestamp;
        const elapsed = timestamp - startRef.current;

        let percentage = (elapsed / duration) * 100;

        if (percentage >= 100) {
            startRef.current = timestamp;
            percentage = 0;
            if (!loop) {
                onComplete?.()
                return
            }
            onLoop?.()
        }

        setProgress(percentage);

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);

        return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, [duration, loop, onComplete, onLoop]);



    return (
        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
                className="bg-gray-50 h-2 rounded-full"
                style={{ width: `${progress}%` }}
            >

            </div>
        </div>
    );
}
