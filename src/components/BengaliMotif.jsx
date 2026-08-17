export function Alpana({ className = "" }) {
  return (
    <svg className={`bengali-alpana ${className}`} viewBox="0 0 300 300" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="150" cy="150" r="115" />
        <circle cx="150" cy="150" r="82" />
        <circle cx="150" cy="150" r="45" />
        <path d="M150 35c15 24 14 42 0 58-14-16-15-34 0-58Z" />
        <path d="M265 150c-24 15-42 14-58 0 16-14 34-15 58 0Z" />
        <path d="M150 265c-15-24-14-42 0-58 14 16 15 34 0 58Z" />
        <path d="M35 150c24-15 42-14 58 0-16 14-34 15-58 0Z" />
        <path d="M69 69c28 5 40 17 45 45-28-5-40-17-45-45Z" />
        <path d="M231 69c-28 5-40 17-45 45 28-5 40-17 45-45Z" />
        <path d="M231 231c-28-5-40-17-45-45 28 5 40 17 45 45Z" />
        <path d="M69 231c28-5 40-17 45-45-28 5-40 17-45 45Z" />
        <circle cx="150" cy="150" r="10" />
        <path d="M145 150h10M150 145v10" />
      </g>
    </svg>
  );
}

export function Lotus({ className = "" }) {
  return (
    <svg className={`bengali-lotus ${className}`} viewBox="0 0 180 90" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M90 82C55 82 28 70 15 50c30 2 55 10 75 32Z" />
        <path d="M90 82c35 0 62-12 75-32-30 2-55 10-75 32Z" />
        <path d="M90 82C64 61 58 37 68 10c16 20 23 43 22 72Z" />
        <path d="M90 82c26-21 32-45 22-72-16 20-23 43-22 72Z" />
        <path d="M90 82C83 53 88 28 90 8c2 20 7 45 0 74Z" />
        <path d="M32 63c18 1 35 6 50 19" />
        <path d="M148 63c-18 1-35 6-50 19" />
      </g>
    </svg>
  );
}

export function BengaliBorder({ className = "" }) {
  return (
    <div className={`bengali-border ${className}`} aria-hidden="true">
      <span>✦</span><span>◌</span><span>✦</span><span>◌</span><span>✦</span>
    </div>
  );
}