import React, { useEffect } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import { RxDashboard ,LiaPiggyBankSolid, FaMoneyCheck , GiTakeMyMoney ,FaSignOutAlt} from "react-icons";
// import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, LogOut } from "lucide-react";

export const SideNav = () => {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: RxDashboard,
            path: '/home/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: LiaPiggyBankSolid,
            path: '/home/budget'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: FaMoneyCheck,
            path: '/home/expense'
        },
        {
            id: 4,
            name: 'Incomes',
            icon: GiTakeMyMoney,
            path: '/home/incomes'
        }
    ];


    return (
        <div className='h-screen border shadow-sm'>
            {/* ------------LOGO---------- */}
            <div className='flex items-end justify-center'>
                <img
                    src="/public/expenses_5501375.png"
                    alt="Logo wallet"
                    width={40}
                    className='ml-2 p-1'
                />
                <h1 className='text-2xl font-semibold font-mono'>Expense Tracker</h1>
            </div>

            {/* -----------sidebar headings--------- */}
            <div>
                {menuList.map((menu) => (
                    <Link key={menu.id} href={menu.path}>
                        <h2 className={`flex gap-2 items-center
                        text-gray-500 font-medium mb-2
                        p-5 cursor-pointer rounded-md
                        hover:text-primary hover:bg-blue-100
                        ${path === menu.path && 'text-primary bg-blue-100'}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>

            {/* -------------Sign out------------- */}
            <div className='fixed bottom-10 p-5 flex gap-2 items-center cursor-pointer'>
                <FaSignOutAlt className='text-gray-500' /> Sign out
            </div>
        </div>
    );
};
