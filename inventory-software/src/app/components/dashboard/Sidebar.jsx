import { BaggageClaim, BarChart, Cable, ChevronLeft, File, HomeIcon, ShoppingBag, ShoppingBasket, ShoppingCartIcon, Warehouse } from 'lucide-react'
import Link from 'next/link'
import React from 'react';
import SidebarDropdownLink from './SidebarDropdownLink';

export default function Sidebar() {
    const inventoryLinks = [
        {
            title:"All",
            href:"/dashboard/inventory"
        },
        {
            title:"Items",
            href:"/dashboard/inventory/items"
        },
        {
            title:"Categories",
            href:"/dashboard/inventory/categories"
        },
        {
            title:"Brands",
            href:"/dashboard/inventory/brands"
        },
        {
            title:"Units",
            href:"/dashboard/inventory/units"
        },
        {
            title:"Warehouse",
            href:"/dashboard/inventory/warehouse"
        },
        {
            title:"Inventory Adjustments",
            href:"/dashboard/inventory/adjustments"
        },
        {
            title:"Supplier",
            href:"/dashboard/inventory/suppliers"
        },

    ]
    const salesLinks = [
        {
            title:"Customers",
            href:""
        },
        {
            title:"Sales Orders",
            href:""
        },
        {
            title:"Packages",
            href:""
        },
        {
            title:"Shipments",
            href:""
        },
        {
            title:"Invoices",
            href:""
        },
        {
            title:"Sales Receipts",
            href:""
        },
        {
            title:"Payment Receipts",
            href:""
        },
        {
            title:"Sales Returns",
            href:""
        },
        {
            title:"Credit Notes",
            href:""
        },

    ]
    return (
        <div className='w-56 min-h-screen bg-slate-900 text-slate-50 justify-between'>
            {/* Top Part */}
            <div className='flex flex-col'>
                {/* Logo */}
                <div className='bg-slate-950 flex space-x-2 items-center py-4 px-2'>
                    <ShoppingCartIcon />
                    <span className='font-semibold'>Inventory</span>

                </div>
                {/* Links */}
                <nav className='flex flex-col gap-8 px-3'>
                    <Link className='flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 px-2 rounded-md' href=''>
                        <HomeIcon className='w-4 h-4' />
                        <span>Home</span>
                    </Link>

                    <SidebarDropdownLink title="Inventory" links={inventoryLinks} icon={BaggageClaim}/>
                    <SidebarDropdownLink title="Sales" links={salesLinks} icon={ShoppingBag}/>
                    
                    <button className='flex items-center space-x-2 p-2' href='#'>
                        <ShoppingBasket className='w-4 h-4' />
                        <span>Purchases</span>
                    </button>

                    <Link className='flex items-center space-x-2 p-2' href='#'>
                        <Cable className='w-4 h-4' />
                        <span>Integrations</span>
                    </Link>

                    <Link className='flex items-center space-x-2 p-2' href='#'>
                        <BarChart className='w-4 h-4' />
                        <span>Reports</span>
                    </Link>

                    <Link className='flex items-center space-x-2 p-2' href='#'>
                        <File className='w-4 h-4' />
                        <span>Reports</span>
                    </Link>

                </nav>

            </div>

            {/* Bottom Part */}
            <div className='flex flex-col justify-end'>
                <div className='bg-slate-950 flex space-x-2 items-center py-4 px-2'>
                    <ChevronLeft />
                </div>

            </div>
            {/* Subscription Card */}
            {/* Footer Icon */}
        </div>
    )
}
