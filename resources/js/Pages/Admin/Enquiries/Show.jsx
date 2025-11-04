import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft, Mail, Phone, User, MessageSquare, Trash2, CheckCircle } from 'lucide-react';

export default function ShowEnquiry({ enquiry }) {
    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete enquiry from ${enquiry.name}?`)) {
            router.delete(`/admin/enquiries/${enquiry.id}`, {
                onSuccess: () => router.visit('/admin/enquiries'),
            });
        }
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/enquiries" className="text-gray-600 hover:text-gray-900">
                            <ArrowLeft size={24} />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">Enquiry Details</h1>
                            <p className="text-gray-500 text-sm mt-1">
                                Received on {new Date(enquiry.created_at).toLocaleString()}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        {!enquiry.is_read && (
                            <span className="flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-lg text-sm font-semibold">
                                <Mail size={16} />
                                Unread
                            </span>
                        )}
                        {enquiry.is_read && (
                            <span className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold">
                                <CheckCircle size={16} />
                                Read
                            </span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <User size={20} />
                                Contact Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <User className="text-gray-400 mt-1" size={20} />
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Name</label>
                                        <p className="text-gray-900 font-medium">{enquiry.name}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Mail className="text-gray-400 mt-1" size={20} />
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Email</label>
                                        <p className="text-gray-900">
                                            <a href={`mailto:${enquiry.email}`} className="text-blue-600 hover:underline">
                                                {enquiry.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <Phone className="text-gray-400 mt-1" size={20} />
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Phone</label>
                                        <p className="text-gray-900">
                                            <a href={`tel:${enquiry.phone}`} className="text-blue-600 hover:underline">
                                                {enquiry.phone}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {enquiry.message && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <MessageSquare size={20} />
                                    Message
                                </h2>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <p className="text-gray-700 whitespace-pre-wrap">{enquiry.message}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                            <div className="space-y-2">
                                <a
                                    href={`mailto:${enquiry.email}`}
                                    className="block w-full bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-4 py-2 rounded-lg text-center transition-colors"
                                >
                                    Reply via Email
                                </a>
                                <a
                                    href={`tel:${enquiry.phone}`}
                                    className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-center transition-colors"
                                >
                                    Call Customer
                                </a>
                                <button
                                    onClick={handleDelete}
                                    className="block w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
                                >
                                    Delete Enquiry
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-lg font-semibold mb-4">Enquiry Details</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Status:</span>
                                    <span className={`font-semibold ${
                                        enquiry.is_read ? 'text-green-600' : 'text-red-600'
                                    }`}>
                                        {enquiry.is_read ? 'Read' : 'Unread'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Submitted:</span>
                                    <span className="text-gray-900">
                                        {new Date(enquiry.created_at).toLocaleDateString()}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Time:</span>
                                    <span className="text-gray-900">
                                        {new Date(enquiry.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

