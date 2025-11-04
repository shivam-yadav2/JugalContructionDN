import React, { useState } from 'react';
import { Link, router, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft, Edit, Plus, Trash2, X } from 'lucide-react';

export default function ShowProject({ project }) {
    const [showAmenityForm, setShowAmenityForm] = useState(false);
    const { data: amenityData, setData: setAmenityData, post: postAmenity, processing: amenityProcessing } = useForm({
        name: '',
        image: null,
        order: 0,
    });

    const handleDeleteAmenity = (amenity) => {
        if (confirm(`Are you sure you want to delete ${amenity.name}?`)) {
            router.delete(`/admin/projects/${project.id}/amenities/${amenity.id}`, {
                preserveScroll: true,
            });
        }
    };

    const handleAddAmenity = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', amenityData.name);
        if (amenityData.image) {
            formData.append('image', amenityData.image);
        }
        formData.append('order', amenityData.order);

        postAmenity(`/admin/projects/${project.id}/amenities`, {
            forceFormData: true,
            onSuccess: () => {
                setAmenityData({ name: '', image: null, order: 0 });
                setShowAmenityForm(false);
            },
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/projects" className="text-gray-600 hover:text-gray-900">
                            <ArrowLeft size={24} />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold">{project.name}</h1>
                            <p className="text-gray-500">{project.title}</p>
                        </div>
                    </div>
                    <Link
                        href={`/admin/projects/${project.id}/edit`}
                        className="flex items-center gap-2 bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-4 py-2 rounded-lg"
                    >
                        <Edit size={18} />
                        <span>Edit Project</span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Basic Info */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Category</label>
                                    <p className="mt-1 capitalize">{project.category}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Location</label>
                                    <p className="mt-1">{project.location || 'N/A'}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Status</label>
                                    <p className="mt-1">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            project.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {project.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-500">Order</label>
                                    <p className="mt-1">{project.order}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium text-gray-500">Short Description</label>
                                <p className="mt-1 text-gray-700">{project.short_description || 'N/A'}</p>
                            </div>
                            <div className="mt-4">
                                <label className="text-sm font-medium text-gray-500">Long Description</label>
                                <p className="mt-1 text-gray-700 whitespace-pre-wrap">{project.long_description || 'N/A'}</p>
                            </div>
                        </div>

                        {/* Images */}
                        {project.property_images && project.property_images.length > 0 && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Property Images</h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {project.property_images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`/storage/${image}`}
                                            alt={`Property ${index + 1}`}
                                            className="w-full h-40 object-cover rounded"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.construction_images && project.construction_images.length > 0 && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">Construction Images</h2>
                                <div className="grid grid-cols-3 gap-4">
                                    {project.construction_images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={`/storage/${image}`}
                                            alt={`Construction ${index + 1}`}
                                            className="w-full h-40 object-cover rounded"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* RERA Details */}
                        {project.show_rera_section && project.rera_details && (
                            <div className="bg-white rounded-lg shadow p-6">
                                <h2 className="text-xl font-semibold mb-4">RERA Details</h2>
                                <p className="text-gray-700 whitespace-pre-wrap">{project.rera_details}</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Amenities */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">Amenities</h2>
                                <button
                                    onClick={() => setShowAmenityForm(!showAmenityForm)}
                                    className="flex items-center gap-1 text-[#ebd2a0] hover:text-[#d1a260] text-sm"
                                >
                                    <Plus size={16} />
                                    <span>Add</span>
                                </button>
                            </div>

                            {showAmenityForm && (
                                <form onSubmit={handleAddAmenity} className="mb-4 p-4 bg-gray-50 rounded-lg">
                                    <div className="space-y-3">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Amenity Name
                                            </label>
                                            <input
                                                type="text"
                                                value={amenityData.name}
                                                onChange={(e) => setAmenityData('name', e.target.value)}
                                                className="w-full border-gray-300 rounded-md shadow-sm"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Image
                                            </label>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => setAmenityData('image', e.target.files[0])}
                                                className="w-full border-gray-300 rounded-md shadow-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Order
                                            </label>
                                            <input
                                                type="number"
                                                value={amenityData.order}
                                                onChange={(e) => setAmenityData('order', parseInt(e.target.value))}
                                                className="w-full border-gray-300 rounded-md shadow-sm"
                                                min="0"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                type="submit"
                                                disabled={amenityProcessing}
                                                className="flex-1 bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-4 py-2 rounded-lg text-sm font-medium disabled:opacity-50"
                                            >
                                                {amenityProcessing ? 'Adding...' : 'Add Amenity'}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setShowAmenityForm(false);
                                                    setAmenityData({ name: '', image: null, order: 0 });
                                                }}
                                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}

                            <div className="space-y-3">
                                {project.amenities && project.amenities.length > 0 ? (
                                    project.amenities.map((amenity) => (
                                        <div key={amenity.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                            {amenity.image && (
                                                <img
                                                    src={`/storage/${amenity.image}`}
                                                    alt={amenity.name}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                            )}
                                            <div className="flex-1">
                                                <p className="font-medium">{amenity.name}</p>
                                                <p className="text-xs text-gray-500">Order: {amenity.order}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteAmenity(amenity)}
                                                className="text-red-600 hover:text-red-800 p-1"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">No amenities added yet.</p>
                                )}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-4">Links</h2>
                            <div className="space-y-2">
                                {project.link && (
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Project Link</label>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block mt-1 text-blue-600 hover:underline break-all"
                                        >
                                            {project.link}
                                        </a>
                                    </div>
                                )}
                                {project.youtube_video_link && (
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">YouTube Video</label>
                                        <a
                                            href={project.youtube_video_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block mt-1 text-blue-600 hover:underline break-all"
                                        >
                                            {project.youtube_video_link}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Visibility Settings */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h2 className="text-xl font-semibold mb-4">Visibility Settings</h2>
                            <div className="space-y-2">
                                {[
                                    ['show_rera_section', 'Show RERA Section'],
                                    ['show_construction_images', 'Show Construction Images'],
                                    ['show_property_images', 'Show Property Images'],
                                    ['show_property_videos', 'Show Property Videos'],
                                    ['show_amenities', 'Show Amenities'],
                                ].map(([key, label]) => (
                                    <div key={key} className="flex items-center justify-between">
                                        <span className="text-sm text-gray-700">{label}</span>
                                        <span className={`px-2 py-1 rounded text-xs ${
                                            project[key] ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {project[key] ? 'Yes' : 'No'}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

