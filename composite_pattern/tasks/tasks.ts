"use strict"

interface ITask {
    title: string
    display(indent:number):void
}

abstract class Task implements ITask {
    title: string;

    constructor(title: string) {
        this.title = title
    }

    display(indent:number=0): void {
        var ind = ""
        for (let i=0; i < indent; i++) {
            ind = ind+"    "
        }
        console.log(`${ind} ${this.title}`)
    }

}

class SimpleTask extends Task {

}

class TaskList extends Task {
    tasks:Task[]
    constructor(title:string) {
        super(title);
        this.tasks = []
    }
    addTask(task:Task):void {
        this.tasks.push(task)
    }
    display(indent:number=0) {
        super.display(indent);
        for (let i in this.tasks) {
            this.tasks[i].display(indent+1)
        }
    }
}

export {
    SimpleTask, TaskList
}