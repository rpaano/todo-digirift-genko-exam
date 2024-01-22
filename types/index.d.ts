export { Task };

declare global {
  interface Task { 
    id: number, 
    name: string, 
    done: boolean,
  }
}