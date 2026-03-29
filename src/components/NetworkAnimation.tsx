const orbitNodes = [
  { id: 1, x: 50, y: 13, size: 3.8, delay: '0.1s' },
  { id: 2, x: 73, y: 20, size: 3.1, delay: '0.4s' },
  { id: 3, x: 85, y: 40, size: 2.8, delay: '0.8s' },
  { id: 4, x: 79, y: 68, size: 3.5, delay: '1.1s' },
  { id: 5, x: 58, y: 84, size: 3.2, delay: '0.6s' },
  { id: 6, x: 32, y: 80, size: 3, delay: '1.3s' },
  { id: 7, x: 15, y: 58, size: 2.7, delay: '0.9s' },
  { id: 8, x: 18, y: 28, size: 3.4, delay: '0.2s' },
  { id: 9, x: 34, y: 17, size: 2.6, delay: '1.6s' },
];

const innerNodes = [
  { id: 1, x: 50, y: 30 },
  { id: 2, x: 66, y: 40 },
  { id: 3, x: 62, y: 60 },
  { id: 4, x: 38, y: 60 },
  { id: 5, x: 34, y: 40 },
];

const dataBeams = [
  { top: 22, left: 8, width: 36, rotate: 22, delay: '0.2s', duration: '5.2s' },
  { top: 32, left: 54, width: 26, rotate: -38, delay: '1.1s', duration: '4.7s' },
  { top: 66, left: 18, width: 32, rotate: -14, delay: '0.8s', duration: '5.5s' },
  { top: 68, left: 52, width: 30, rotate: 34, delay: '1.9s', duration: '4.9s' },
];

export default function NetworkAnimation() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,#0b2a4e_0%,#07182e_48%,#04101f_100%)] p-4 shadow-2xl shadow-cyan-500/10 sm:p-5">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.10),transparent_35%,transparent_65%,rgba(59,130,246,0.10))]" />
      <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-cyan-400/16 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-blue-500/14 blur-3xl" />

      <div className="hero-orbit-visual relative aspect-[1.03/1] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#03111f]/75">
        <div className="hero-orbit-grid absolute inset-0 opacity-45" />
        <div className="hero-orbit-vignette absolute inset-0" />
        <div className="hero-orbit-scan absolute inset-y-0 left-[-26%] w-[36%]" />
        <div className="hero-orbit-scan hero-orbit-scan-secondary absolute inset-x-0 top-[-24%] h-[34%] rotate-[18deg]" />

        <div className="hero-orbit-ring hero-orbit-ring-1 absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="hero-orbit-ring hero-orbit-ring-2 absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full" />
        <div className="hero-orbit-ring hero-orbit-ring-3 absolute left-1/2 top-1/2 h-[96%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-full" />

        <div className="hero-orbit-core absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[2rem]">
          <div className="hero-orbit-core-inner absolute inset-[18%] rounded-[1.4rem]" />
          <div className="hero-orbit-core-glow absolute inset-[-28%] rounded-[2.4rem]" />
        </div>

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="hero-orbit-link-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#67e8f9" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.12" />
            </linearGradient>
            <radialGradient id="hero-orbit-node-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f2feff" />
              <stop offset="45%" stopColor="#8cf4ff" />
              <stop offset="100%" stopColor="#0891b2" />
            </radialGradient>
          </defs>

          {orbitNodes.map((node, index) => (
            <line
              key={`outer-link-${node.id}`}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              className="hero-orbit-link"
              style={{ animationDelay: `${index * 0.12}s` }}
              stroke="url(#hero-orbit-link-gradient)"
              strokeWidth="0.38"
              strokeLinecap="round"
            />
          ))}

          {innerNodes.map((node, index) => {
            const next = innerNodes[(index + 1) % innerNodes.length];
            return (
              <line
                key={`inner-link-${node.id}`}
                x1={node.x}
                y1={node.y}
                x2={next.x}
                y2={next.y}
                className="hero-orbit-link hero-orbit-link-inner"
                style={{ animationDelay: `${index * 0.18}s` }}
                stroke="url(#hero-orbit-link-gradient)"
                strokeWidth="0.34"
                strokeLinecap="round"
              />
            );
          })}

          {orbitNodes.map((node) => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size * 2.2}
                className="hero-orbit-node-glow"
                style={{ animationDelay: node.delay }}
                fill="rgba(34,211,238,0.14)"
              />
              <circle
                cx={node.x}
                cy={node.y}
                r={node.size}
                className="hero-orbit-node-core"
                style={{ animationDelay: node.delay }}
                fill="url(#hero-orbit-node-gradient)"
              />
            </g>
          ))}

          {innerNodes.map((node, index) => (
            <circle
              key={`inner-node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r="1.6"
              className="hero-orbit-inner-node"
              style={{ animationDelay: `${index * 0.22}s` }}
              fill="rgba(191, 250, 255, 0.95)"
            />
          ))}
        </svg>

        <div className="absolute inset-0" aria-hidden="true">
          {dataBeams.map((beam, index) => (
            <div
              key={index}
              className="hero-orbit-beam absolute h-px"
              style={{
                left: `${beam.left}%`,
                top: `${beam.top}%`,
                width: `${beam.width}%`,
                transform: `rotate(${beam.rotate}deg)`,
              }}
            >
              <span
                className="hero-orbit-packet"
                style={{ animationDelay: beam.delay, animationDuration: beam.duration }}
              />
            </div>
          ))}
        </div>

        <div className="hero-orbit-shard absolute left-[13%] top-[18%] h-16 w-7 rounded-full" style={{ animationDelay: '0.4s' }} />
        <div className="hero-orbit-shard absolute right-[16%] top-[24%] h-20 w-8 rounded-full" style={{ animationDelay: '1.2s' }} />
        <div className="hero-orbit-shard absolute left-[20%] bottom-[16%] h-18 w-8 rounded-full" style={{ animationDelay: '1.8s' }} />
        <div className="hero-orbit-shard absolute right-[18%] bottom-[18%] h-14 w-7 rounded-full" style={{ animationDelay: '0.9s' }} />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#03111f] to-transparent" />
      </div>
    </div>
  );
}
