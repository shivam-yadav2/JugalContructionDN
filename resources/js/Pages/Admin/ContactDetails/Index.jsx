import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Plus, Edit, Trash2 } from 'lucide-react';

export default function ContactDetailsIndex({ contactDetails }) {
    const handleDelete = (contactDetail) => {
        if (confirm(`Are you sure you want to delete ${contactDetail.label}?`)) {
            router.delete(`/admin/contact-details/${contactDetail.id}`, {
                preserveScroll: true,
            });
        }
    };

    const toggleStatus = (contactDetail) => {
        router.put(`/admin/contact-details/${contactDetail.id}`, {
            ...contactDetail,
            is_active: !contactDetail.is_active,
        }, {
            preserveScroll: true,
            only: ['contactDetails'],
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Contact Details</h1>
                    <Link
                        href="/admin/contact-details/create"
                        className="flex items-center gap-2 bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-4 py-2 rounded-lg transition-colors"
                    >
                        <Plus size={20} />
                        <span>Add New Contact</span>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {contactDetails.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Label</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Icon</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {contactDetails.map((contact) => (
                                        <tr key={contact.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800 capitalize">
                                                    {contact.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {contact.label}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                                {contact.value}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {contact.icon || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {contact.order}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button
                                                    onClick={() => toggleStatus(contact)}
                                                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                                        contact.is_active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {contact.is_active ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    <Link
                                                        href={`/admin/contact-details/${contact.id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900 p-1"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(contact)}
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
                            <p className="text-gray-500 text-lg">No contact details found.</p>
                            <Link
                                href="/admin/contact-details/create"
                                className="mt-4 inline-flex items-center gap-2 text-[#ebd2a0] hover:text-[#d1a260]"
                            >
                                <Plus size={20} />
                                <span>Create your first contact detail</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

