export const formatTime = (timestamp: number):string =>
  new Date(timestamp).toTimeString().replace(/\s.*/, '')
