import { useState } from "react"

export default function Form() {
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');
    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        const copytask = [...task];
        copytask.push({ heading, description });
        setTask(copytask);

        setHeading('');
        setDescription('');
    }

    const deleteTask=(e)=>
    {
        const newTasks=[...task];
        newTasks.splice(e,1);
        setTask(newTasks);
    }

    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 overflow-x-hidden">

            <form
                className="w-full flex flex-col md:flex-row gap-4 
                           bg-white/10 backdrop-blur-xl p-6 shadow-2xl"
                onSubmit={submitHandler}
            >
                <input
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white 
                               placeholder-slate-300 border border-white/20
                               focus:outline-none focus:ring-2 focus:ring-white-400"
                    placeholder="Notes Heading"
                    onChange={(e) => setHeading(e.target.value)}
                    value={heading}
                />

                <input
                    className="w-full px-4 py-2 rounded-lg bg-white/10 text-white 
                               placeholder-slate-300 border border-white/20
                               focus:outline-none focus:ring-2 focus:ring-white-400"
                    placeholder="Notes Description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />

                <button
                    className="w-full px-4 py-2 rounded-lg bg-gray-950 text-white 
                               placeholder-slate-300 border border-white/20
                               focus:outline-none focus:ring-2 focus:ring-white-400
                               hover:cursor-pointer
                               "
                >
                    Add Note
                </button>
            </form>

            <div className="mt-8 w-full bg-white/5 p-6 shadow-xl">
                <p className="text-center text-white text-2xl font-bold mb-6">
                    Your Notes
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {task.map((elem, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl p-6 min-h-[160px] shadow-2xl 
                                       transition-all duration-300 hover:-translate-y-2
                                       bg-gradient-to-br from-indigo-500/80 via-purple-500/80 to-pink-500/80
                                       text-white backdrop-blur-lg"
                        >
                            <h3 className="text-xl font-bold leading-tight text-center">
                                {elem.heading}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-center">
                                {elem.description}
                            </p>
                            <button className="
        mt-4 w-full flex items-center justify-center gap-2
        bg-red-500/90 hover:bg-red-600
        text-white font-semibold
        px-4 py-2 rounded-xl
        transition-all duration-300
        hover:scale-105 active:scale-95
        shadow-lg hover:shadow-red-500/40
    " onClick={()=>deleteTask(idx)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
