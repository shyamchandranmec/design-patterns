"use strict"

import {SimpleTask, TaskList} from "./tasks";

let task1 = new SimpleTask("DC1 release")
let task2 = new SimpleTask("DC2 release")

let taskList1 = new TaskList("Release on cluster")
taskList1.addTask(task1)
taskList1.addTask(task2)

let task3 = new SimpleTask("Create API 1")
let task4 = new SimpleTask("Create API 4")

let taskList2 = new TaskList("Development")
taskList2.addTask(task3)
taskList2.addTask(task4)

let project = new TaskList("Authentication project")
project.addTask(taskList1)
project.addTask(taskList2)
project.display()