import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    LayoutDashboard, 
    FolderKanban, 
    Contact, 
    Images, 
    Briefcase,
    Mail,
    Menu,
    X,
    LogOut
} from 'lucide-react';

export default function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const page = usePage();
    const { auth } = page.props;
    const currentUrl = page.url || window.location.pathname;

    const navigation = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        // { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
        // { name: 'Sliders', href: '/admin/sliders', icon: Images },
        // { name: 'Careers', href: '/admin/careers', icon: Briefcase },
        { name: 'Contact Details', href: '/admin/contact-details', icon: Contact },
        { name: 'Enquiries', href: '/admin/enquiries', icon: Mail },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Mobile sidebar toggle */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#2D1C11] shadow-lg">
                <div className="flex items-center justify-between px-4 py-3">
                    <h1 className="text-white text-lg font-bold">Admin Panel</h1>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="text-white p-2"
                    >
                        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <div className="flex">
                {/* Sidebar */}
                <aside
                    className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#2D1C11] transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
                        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <h2 className="text-white text-xl font-bold">Admin Panel</h2>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <nav className="flex-1 p-4 space-y-2">
                            {navigation.map((item) => {
                                const Icon = item.icon;
                                const isActive = currentUrl === item.href || 
                                    (item.href !== '/admin/dashboard' && currentUrl.startsWith(item.href));
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                                            isActive
                                                ? 'bg-[#ebd2a0] text-[#2D1C11]'
                                                : 'text-[#ebd2a0] hover:bg-gray-800'
                                        }`}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <Icon size={20} className="mr-3" />
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </nav>

                        <div className="p-4 border-t border-gray-700">
                            <div className="flex items-center px-4 py-2 text-[#ebd2a0] mb-4">
                                <span className="text-sm">{auth?.user?.name || 'Admin'}</span>
                            </div>
                            <Link
                                href="/logout"
                                method="post"
                                className="flex items-center px-4 py-3 text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                <LogOut size={20} className="mr-3" />
                                <span className="font-medium">Logout</span>
                            </Link>
                        </div>
                    </div>
                </aside>

                {/* Main content */}
                <div className="flex-1 lg:ml-64 mt-16 lg:mt-0">
                    <main className="min-h-screen">
                        {children}
                    </main>
                </div>
            </div>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}

