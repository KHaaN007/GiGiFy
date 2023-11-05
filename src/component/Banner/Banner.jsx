import { Link } from "react-router-dom";


const Banner = () => {
    return (
        // <div className="py-24  flex items-center min-h-screen justify-center   " style={{ backgroundImage: 'url("https://i.ibb.co/Jcf2jTf/4162928.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        //     <div className="rounded-2xl bg-gradient-to-tl from-blue-300  to-indigo-300 opacity-50">


        //         <div className="flex shadow-2xl p-5">
        //             <div className="mx-auto max-w-[43rem]">
        //                 <div className="text-center">
        //                     <p className="text-lg font-medium leading-8 text-indigo-600/95">Introducing Design Data Platform</p>
        //                     <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Distribute your brand from&nbsp;design to code</h1>
        //                     <p className="mt-3 text-lg leading-relaxed text-slate-400">Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.</p>
        //                 </div>

        //                 <div className="mt-6 flex items-center justify-center gap-4">
        //                     <a href="#" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get started for free</a>
        //                     <a href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Request a demo </a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>




        <div className="grid lg:grid-cols-3 mx-auto ">
            <div className="h-screen flex items-center justify-center">
                <div className="buttonOne">
                    <div className="text-center">
                        <p className="text-lg font-medium leading-8 text-indigo-600/95">Introducing Design Data Platform</p>
                        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Distribute your brand from&nbsp;design to code</h1>
                        <p className="mt-3 text-lg leading-relaxed text-slate-400">Specify helps you unify your brand identity by collecting, storing and distributing design tokens and assets — automatically.</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Link to='/register' href="#" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Get started for free</Link>
                        <Link to='/login' href="#" className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"> Login </Link>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <img src="https://i.ibb.co/Jcf2jTf/4162928.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;