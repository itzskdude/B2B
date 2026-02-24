import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export const getSocket = (): Socket => {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:3001', {
      autoConnect: false,
      withCredentials: true,
    })
  }
  return socket
}

export const connectSocket = (): void => {
  const socket = getSocket()
  if (!socket.connected) {
    socket.connect()
  }
}

export const disconnectSocket = (): void => {
  if (socket?.connected) {
    socket.disconnect()
  }
}

export const subscribeToEvent = (event: string, callback: (...args: unknown[]) => void): void => {
  const socket = getSocket()
  socket.on(event, callback)
}

export const unsubscribeFromEvent = (event: string): void => {
  const socket = getSocket()
  socket.off(event)
}
