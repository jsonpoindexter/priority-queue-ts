interface QueueItem {
    priority: number,
    value: String
}
class PriorityQueue {
    collection; // [front, ...back]
    constructor(queue: QueueItem[] = []) {
        this.collection = queue
    }

    enqueue = (item: QueueItem) => {
        // Find index of next highest priority
        const index = this.collection.findIndex((currentItem: QueueItem) => currentItem.priority > item.priority)
        // If found index of next highest priority insert item there
        // Else insert at end
        index === -1 ? this.collection.push(item) : this.collection.splice(index, 0, item)

    }

    // Remove item from front of queue and return value
    dequeue = () => this.collection.shift().value
    // Return item at front of queue
    first = () => this.collection[0]
    // Return item at back of queue
    last = () => this.collection[this.collection.length - 1]

}
