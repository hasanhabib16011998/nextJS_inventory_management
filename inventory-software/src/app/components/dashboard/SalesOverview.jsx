import { CheckCircle2 } from "lucide-react";
import React from "react";

export default function SalesOverview() {
    return (
        <div className="bg-blue-50 border-b border-slate-300 p-8 grid grid-cols-12 gap-4">
            {/* SALES ACTIVITY */}
            <div className="col-span-8 border-r border-slate-300 pr-8">
                <h2 className="mb-6 text-xl">Sales Activity</h2>
                <div className="grid grid-cols-4 gap-4">
                    {/* Card 1 */}
                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                        <h4 className="font-semibold text-3xl text-blue-600">10</h4>
                        <small>Qty</small>
                        <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="uppercase text-slate-500 text-sm">To be packed</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                        <h4 className="font-semibold text-3xl text-green-600">10</h4>
                        <small>Pkgs</small>
                        <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="uppercase text-slate-500 text-sm">To be shipped</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                        <h4 className="font-semibold text-3xl text-yellow-600">10</h4>
                        <small>Pkgs</small>
                        <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="uppercase text-slate-500 text-sm">To be delivered</span>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                        <h4 className="font-semibold text-3xl text-red-600">10</h4>
                        <small>Qty</small>
                        <div className="flex items-center space-x-2">
                            <CheckCircle2 className="w-4 h-4" />
                            <span className="uppercase text-slate-500 text-sm">To be invoiced</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inventory Summary */}
            <div className="col-span-4 p-8">
                <h2 className="mb-6 text-xl">Inventory Summary</h2>
                <div className="gap-4">
                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white p-4 cursor-pointer flex items-center gap-3 transition-all justify-content-between duration-300">
                    <div className="flex items-center space-x-2">
                            <h2 className="uppercase text-slate-500 text-sm">Quantity in hand</h2>
                            <h4 className="text-2xl">10</h4>
                        </div>
                    </div>

                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white p-4 cursor-pointer flex items-center gap-3 transition-all justify-content-between duration-300">
                    <div className="flex items-center space-x-2 ">
                            <h2 className="uppercase text-slate-500 text-sm">Quantity to be received</h2>
                            <h4 className="text-2xl">0</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
