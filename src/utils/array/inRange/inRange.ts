export const inRange = (value: number, range: [number, number]) => value >= range[0] && value <= range[1] || value <= range[1] && value >= range[0]