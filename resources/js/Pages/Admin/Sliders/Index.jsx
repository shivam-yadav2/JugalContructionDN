import React from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';

export default function SlidersIndex({ sliders }) {
    const handleDelete = (slider) => {
        if (confirm(`Are you sure you want to delete this slider?`)) {
            router.delete(`/admin/sliders/${slider.id}`, {
                preserveScroll: true,
            });
        }
    };

    const toggleStatus = (slider) => {
        router.put(`/admin/sliders/${slider.id}`, {
            ...slider,
            is_active: !slider.is_active,
        }, {
            preserveScroll: true,
            only: ['sliders'],
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Sliders</h1>
                    <Link
                        href="/admin/sliders/create"
                        className="flex items-center gap-2 bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-4 py-2 rounded-lg transition-colors"
                    >
                        <Plus size={20} />
                        <span>Add New Slider</span>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow overflow-hidden">
                    {sliders.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {sliders.map((slider) => (
                                        <tr key={slider.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <img
                                                    src={`/storage/${slider.image}`}
                                                    alt={slider.title || 'Slider'}
                                                    className="h-16 w-24 object-cover rounded"
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {slider.title || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                                                {slider.description || 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {slider.link ? (
                                                    <a href={slider.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                        View Link
                                                    </a>
                                                ) : 'N/A'}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {slider.order}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <button
                                                    onClick={() => toggleStatus(slider)}
                                                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                                        slider.is_active
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-red-100 text-red-800'
                                                    }`}
                                                >
                                                    {slider.is_active ? 'Active' : 'Inactive'}
                                                </button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <div className="flex justify-end gap-2">
                                                    <Link
                                                        href={`/admin/sliders/${slider.id}/edit`}
                                                        className="text-indigo-600 hover:text-indigo-900 p-1"
                                                    >
                                                        <Edit size={18} />
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(slider)}
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
                            <p className="text-gray-500 text-lg">No sliders found.</p>
                            <Link
                                href="/admin/sliders/create"
                                className="mt-4 inline-flex items-center gap-2 text-[#ebd2a0] hover:text-[#d1a260]"
                            >
                                <Plus size={20} />
                                <span>Create your first slider</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}

