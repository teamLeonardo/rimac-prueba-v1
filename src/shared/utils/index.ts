export * from './math'

export const slep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}