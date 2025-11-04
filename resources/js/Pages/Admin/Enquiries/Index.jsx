import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Eye, Trash2, Mail } from 'lucide-react';

export default function EnquiriesIndex({ enquiries }) {
    const handleDelete = (enquiry) => {
        if (confirm(`Are you sure you want to delete enquiry from ${enquiry.name}?`)) {
            router.delete(`/admin/enquiries/${enquiry.id}`, {
                preserveScroll: true,
            });
        }
    };

    const markAsRead = (enquiry) => {
        if (!enquiry.is_read) {
            router.post(`/admin/enquiries/${enquiry.id}/mark-read`, {}, {
                preserveScroll: true,
            });
        }
    };

    const unreadCount = enquiries.filter(e => !e.is_read).length;

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-3xl font-bold">Enquiries</h1>
                        {unreadCount > 0 && (
                            <p className="text-sm text-gray-600 mt-1">
                                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                    {unreadCount} unread
                                </span>
                            </p>
                        )}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {enquiries.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {enquiries.map((enquiry) => (
                                        <tr key={enquiry.id} className={enquiry.is_read ? '' : 'bg-yellow-50'}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {!enquiry.is_read ? (
                                                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 flex items-center gap-1">
                                                        <Mail size={12} />
                                                        New
                                                    </span>
                                                ) : (
                                                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                                        Read
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{enquiry.email}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{enquiry.phone}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm text-gray-500 max-w-xs truncate">
                                                    {enquiry.message || 'No message'}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(enquiry.created_at).toLocaleDateString()} {new Date(enquiry.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    <Link
                                                        href={`/admin/enquiries/${enquiry.id}`}
                                                        className="text-blue-600 hover:text-blue-900 p-1"
                                                        onClick={() => markAsRead(enquiry)}
                                                    >
                                                        <Eye size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(enquiry)}
                                                        className="text-red-600 hover:text-red-900 p-1"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <Mail size={48} className="mx-auto text-gray-400 mb-4" />
                            <p className="text-gray-500 text-lg">No enquiries yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

