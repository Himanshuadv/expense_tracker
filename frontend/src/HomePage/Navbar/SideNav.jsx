import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxDashboard } from 'react-icons/rx';
import { LiaPiggyBankSolid } from 'react-icons/lia';
import { FaMoneyCheck, FaSignOutAlt } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';

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
                    <NavLink
                        key={menu.id}
                        to={menu.path}
                        className={({ isActive }) =>
                            `flex gap-2 items-center text-gray-500 font-medium mb-2 p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100 ${
                                isActive ? 'text-primary bg-blue-100' : ''
                            }`
                        }
                    >
                        <menu.icon />
                        {menu.name}
                    </NavLink>
                ))}
            </div>

            {/* -------------Sign out------------- */}
            <div className='fixed bottom-10 p-5 flex gap-2 items-center cursor-pointer'>
                <FaSignOutAlt className='text-gray-500' /> Sign out
            </div>
        </div>
    );
};
