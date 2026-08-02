import { List, Top } from "./TaskList.styled";
import { Component } from "react";

class TaskList extends Component {
    state = {
        tasks: [
    {
        id: 1,
        text: "Зробити домашку",
        isCompleted: false,
        deadline: "2026-08-03",
        priority: "high",
        category: "study"
    },
    {
        id: 2,
        text: "Купити продукти",
        isCompleted: true,
        deadline: "2026-08-02",
        priority: "medium",
        category: "shopping"
    },
    {
        id: 3,
        text: "Зателефонувати другу",
        isCompleted: false,
        deadline: "2026-08-04",
        priority: "low",
        category: "personal"
    },
    {
        id: 4,
        text: "Закінчити проєкт",
        isCompleted: false,
        deadline: "2026-08-05",
        priority: "high",
        category: "work"
    }
],
    }

    deleteItem (id) {
        this.setState((prev) => ({
            tasks: prev.tasks.filter((task) => task.id !== id)
        }))
    }

    render() {
        const {tasks} = this.state
        return (
            <List>
                {tasks.map(({id, text, isCompleted, deadline, priority, category}) => {
                    return (
                        <li key={id}>
                            <h2>{text}</h2>
                            <span>{isCompleted? 'Виконано': 'Невиконано'}</span>
                            <p>{deadline}</p>
                            <Top $priority={priority}>{priority}</Top>
                            <p>{category}</p>
                            <button type="button" onClick={() => this.deleteItem(id) }>Видалити</button>
                        </li>
                    )
                })}
            </List>
        )
    }
}

export default TaskList