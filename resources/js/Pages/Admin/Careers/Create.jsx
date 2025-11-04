import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft } from 'lucide-react';

export default function CreateCareer() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        requirements: '',
        location: '',
        type: 'full-time',
        department: '',
        order: 0,
        is_active: true,
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/careers');
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/admin/careers" className="text-gray-600 hover:text-gray-900">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold">Create New Career</h1>
                </div>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-6 max-w-2xl">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            required
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            rows="4"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                        <textarea
                            value={data.requirements}
                            onChange={(e) => setData('requirements', e.target.value)}
                            rows="6"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            placeholder="List the requirements for this position..."
                        />
                        {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={data.type}
                                onChange={(e) => setData('type', e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                required
                            >
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="contract">Contract</option>
                                <option value="internship">Internship</option>
                            </select>
                            {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                                type="text"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                            {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <input
                            type="text"
                            value={data.department}
                            onChange={(e) => setData('department', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                        />
                        {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                        <input
                            type="number"
                            value={data.order}
                            onChange={(e) => setData('order', parseInt(e.target.value))}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            min="0"
                        />
                        {errors.order && <p className="text-red-500 text-sm mt-1">{errors.order}</p>}
                    </div>

                    <div>
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={data.is_active}
                                onChange={(e) => setData('is_active', e.target.checked)}
                                className="mr-2"
                            />
                            <span className="text-sm text-gray-700">Active</span>
                        </label>
                    </div>

                    <div className="flex gap-4 pt-4 border-t">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50"
                        >
                            {processing ? 'Creating...' : 'Create Career'}
                        </button>
                        <Link
                            href="/admin/careers"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

