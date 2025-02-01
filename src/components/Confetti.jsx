import React, { useEffect, useState } from 'react';

export function Confetti() {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const colors = ['#ff0000', '#ff69b4', '#ff1493', '#ff69b4', '#ff0000'];
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: `${Math.random() * 2}s`
        }));
        setParticles(newParticles);
    }, []);


    return (
        <div className="fixed inset-0 pointer-events-none">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="confetti absolute"
                    style={{
                        left: particle.left,
                        backgroundColor: particle.color,
                        animationDelay: particle.delay
                    }}
                />
            ))}
        </div>
    );
}