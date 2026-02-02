export default function RewardCard({reward}) {
    return (
        <div className="rounded-3xl bg-white overflow-hidden shadow-xl shadow-gray-50 m-5 shadow-amber-150 flex flex-row ">
            <div className="w-1/3 bg-linear-to-br from-white via-red-200 to-white flex flex-col p-2 items-center justify-center 
                 text-3xl font-extrabold text-white">
                ${reward} <br />
                <span className="text-red-700">Cash</span>
            </div>

            <div className="w-full p-4">
                <h1 className="text-2xl text-gray-700 font-extrabold">Winner</h1>
                <p className="mt-2 text-gray-600 font-sans">Winner will get ${reward}</p>
            </div>
        </div>
    )
}