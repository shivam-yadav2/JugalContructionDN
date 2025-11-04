import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft } from 'lucide-react';

export default function EditContactDetail({ contactDetail }) {
    const { data, setData, put, processing, errors } = useForm({
        type: contactDetail.type || 'phone',
        label: contactDetail.label || '',
        value: contactDetail.value || '',
        icon: contactDetail.icon || '',
        order: contactDetail.order || 0,
        is_active: contactDetail.is_active ?? true,
    });

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/contact-details/${contactDetail.id}`);
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/admin/contact-details" className="text-gray-600 hover:text-gray-900">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold">Edit Contact Detail: {contactDetail.label}</h1>
                </div>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-6 max-w-2xl">
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
                            <option value="phone">Phone</option>
                            <option value="email">Email</option>
                            <option value="address">Address</option>
                            <option value="whatsapp">WhatsApp</option>
                            <option value="facebook">Facebook</option>
                            <option value="twitter">Twitter</option>
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="other">Other</option>
                        </select>
                        {errors.type && <p className="text-red-500 text-sm mt-1">{errors.type}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Label <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={data.label}
                            onChange={(e) => setData('label', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            required
                        />
                        {errors.label && <p className="text-red-500 text-sm mt-1">{errors.label}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Value <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={data.value}
                            onChange={(e) => setData('value', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            required
                        />
                        {errors.value && <p className="text-red-500 text-sm mt-1">{errors.value}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                        <input
                            type="text"
                            value={data.icon}
                            onChange={(e) => setData('icon', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                        />
                        {errors.icon && <p className="text-red-500 text-sm mt-1">{errors.icon}</p>}
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
                            {processing ? 'Updating...' : 'Update Contact Detail'}
                        </button>
                        <Link
                            href="/admin/contact-details"
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

