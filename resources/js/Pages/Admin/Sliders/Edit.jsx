import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft, X } from 'lucide-react';

export default function EditSlider({ slider }) {
    const { data, setData, put, processing, errors } = useForm({
        title: slider.title || '',
        description: slider.description || '',
        image: null,
        link: slider.link || '',
        order: slider.order || 0,
        is_active: slider.is_active ?? true,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const hasExistingImage = slider.image;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('image', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('image', null);
        setImagePreview(null);
    };

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/sliders/${slider.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/admin/sliders" className="text-gray-600 hover:text-gray-900">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold">Edit Slider</h1>
                </div>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-6 max-w-2xl">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                        {hasExistingImage && !imagePreview && (
                            <div className="mb-4 relative inline-block">
                                <img
                                    src={`/storage/${slider.image}`}
                                    alt="Current"
                                    className="h-48 w-auto rounded-lg"
                                />
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                        />
                        {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
                        
                        {imagePreview && (
                            <div className="mt-4 relative inline-block">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="h-48 w-auto rounded-lg"
                                />
                                <button
                                    type="button"
                                    onClick={removeImage}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
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
                        <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                        <input
                            type="url"
                            value={data.link}
                            onChange={(e) => setData('link', e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            placeholder="https://example.com"
                        />
                        {errors.link && <p className="text-red-500 text-sm mt-1">{errors.link}</p>}
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
                            {processing ? 'Updating...' : 'Update Slider'}
                        </button>
                        <Link
                            href="/admin/sliders"
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

