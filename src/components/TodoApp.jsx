import { useState } from "react"
import "../index.css"
import { motion, AnimatePresence } from "framer-motion";
import { Todo } from "./Todo";
import { dataTodo } from "../data/dataTodo";
import { IoAddSharp } from "react-icons/io5";

export function TodoApp() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState(dataTodo);

    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (todo !== "") {
            handleCreate()
            clearInput()
        }

    }
    const handleCreate = () => {
        const newTodo = {
            id: crypto.randomUUID(),
            todo,
        }
        const copyTodos = [...todos]
        copyTodos.unshift(newTodo)

        setTodos(copyTodos)
    }
    const clearInput = () => setTodo('')

    const handleUpdate = (id, newValue) => {
        const copyTodos = [...todos]
        const index = copyTodos.findIndex(item => item.id === id)
        copyTodos[index].todo = newValue
        setTodos(copyTodos)
    }
    const handleDelete = (id) => {
        const copyTodos = [...todos];
        const remainingTodos = copyTodos.filter((item) => item.id !== id)
        setTodos(remainingTodos)
    }

    return (
        <div className="py-4 px-4">
            <form className="flex gap-2  w-[100%] m-auto md:py-2 md:px-1 md:w-[fit-content]" onSubmit={handleSubmit}>
                <input type="text" value={todo} placeholder="type here..." className="text-white text-[18px]  py-3 outline-none px-2 rounded-sm bg-[#222222] duration-300 focus:shadow-unique md:px-2 md:py-2 md:text-2xl" onChange={handleChange} />
                <motion.button className=" text-gray-400 flex-1 flex items-center justify-center py-1  rounded-sm bg-[#222222] duration-300 text-[10px] hover:bg-[#474646] md:px-3" whileTap={{ scale: 0.7 }}> <IoAddSharp className=" text-[22px] md:text-2xl" /> </motion.button>
            </form>

            <h1 className="text-white text-[18px] text-center mt-4 md:text-5xl">Your Todos</h1>

            <div className="mt-4">
                <AnimatePresence>
                    {
                        todos.map(item => {
                            return (
                                <Todo key={item.id} item={item} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                            )
                        })
                    }
                </AnimatePresence>

            </div>
        </div>
    )
}