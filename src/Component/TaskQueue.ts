/**
 * Task
 */
class Task {
  constructor(parameters) {
    
  }
}

/**
 * TaskQueue
 */
class TaskQueue {
  private _queue: Array<Task>;

  constructor(parameters) {
    this._queue = new Array();
  }
  inQueue (task: Task) {
    this._queue.push(task);
  }
  deQueue() {
    return this._queue.shift();
  }
}