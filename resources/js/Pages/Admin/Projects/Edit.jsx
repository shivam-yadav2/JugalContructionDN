import React, { useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { ArrowLeft, X } from 'lucide-react';

export default function EditProject({ project }) {
    const { data, setData, put, processing, errors } = useForm({
        category: project.category || 'residential',
        name: project.name || '',
        title: project.title || '',
        short_description: project.short_description || '',
        long_description: project.long_description || '',
        location: project.location || '',
        link: project.link || '',
        map_embed_code: project.map_embed_code || '',
        youtube_video_link: project.youtube_video_link || '',
        rera_details: project.rera_details || '',
        property_images: [],
        property_videos: [],
        construction_images: [],
        existing_property_images: project.property_images || [],
        existing_construction_images: project.construction_images || [],
        existing_property_videos: project.property_videos || [],
        show_rera_section: project.show_rera_section ?? true,
        show_construction_images: project.show_construction_images ?? true,
        show_property_images: project.show_property_images ?? true,
        show_property_videos: project.show_property_videos ?? true,
        show_amenities: project.show_amenities ?? true,
        is_active: project.is_active ?? true,
        order: project.order || 0,
    });

    const [newPropertyImages, setNewPropertyImages] = useState([]);
    const [newConstructionImages, setNewConstructionImages] = useState([]);
    const [newPropertyVideos, setNewPropertyVideos] = useState([]);

    const handleImageChange = (e, type) => {
        const files = Array.from(e.target.files);
        if (type === 'property_images') {
            setNewPropertyImages([...newPropertyImages, ...files]);
            setData('property_images', [...data.property_images, ...files]);
        } else if (type === 'construction_images') {
            setNewConstructionImages([...newConstructionImages, ...files]);
            setData('construction_images', [...data.construction_images, ...files]);
        }
    };

    const handleVideoChange = (e) => {
        const files = Array.from(e.target.files);
        setNewPropertyVideos([...newPropertyVideos, ...files]);
        setData('property_videos', [...data.property_videos, ...files]);
    };

    const removeExistingImage = (index, type) => {
        if (type === 'property_images') {
            const updated = data.existing_property_images.filter((_, i) => i !== index);
            setData('existing_property_images', updated);
        } else if (type === 'construction_images') {
            const updated = data.existing_construction_images.filter((_, i) => i !== index);
            setData('existing_construction_images', updated);
        }
    };

    const removeExistingVideo = (index) => {
        const updated = data.existing_property_videos.filter((_, i) => i !== index);
        setData('existing_property_videos', updated);
    };

    const removeNewImage = (index, type) => {
        if (type === 'property_images') {
            const updated = data.property_images.filter((_, i) => i !== data.existing_property_images.length + index);
            setNewPropertyImages(newPropertyImages.filter((_, i) => i !== index));
            setData('property_images', updated);
        } else if (type === 'construction_images') {
            const updated = data.construction_images.filter((_, i) => i !== data.existing_construction_images.length + index);
            setNewConstructionImages(newConstructionImages.filter((_, i) => i !== index));
            setData('construction_images', updated);
        }
    };

    const removeNewVideo = (index) => {
        const updated = data.property_videos.filter((_, i) => i !== data.existing_property_videos.length + index);
        setNewPropertyVideos(newPropertyVideos.filter((_, i) => i !== index));
        setData('property_videos', updated);
    };

    const submit = (e) => {
        e.preventDefault();
        put(`/admin/projects/${project.id}`, {
            forceFormData: true,
        });
    };

    return (
        <AdminLayout>
            <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <Link href="/admin/projects" className="text-gray-600 hover:text-gray-900">
                        <ArrowLeft size={24} />
                    </Link>
                    <h1 className="text-3xl font-bold">Edit Project: {project.name}</h1>
                </div>

                <form onSubmit={submit} className="bg-white rounded-lg shadow p-6 space-y-6">
                    {/* Basic Information - Same as Create */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Basic Information</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Category <span className="text-red-500">*</span>
                                </label>
                                <select
                                    value={data.category}
                                    onChange={(e) => setData('category', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                    required
                                >
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                </select>
                                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                    required
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                                <input
                                    type="text"
                                    value={data.location}
                                    onChange={(e) => setData('location', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Short Description</label>
                            <textarea
                                value={data.short_description}
                                onChange={(e) => setData('short_description', e.target.value)}
                                rows="3"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Long Description</label>
                            <textarea
                                value={data.long_description}
                                onChange={(e) => setData('long_description', e.target.value)}
                                rows="6"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                        </div>
                    </div>

                    {/* Links & Media */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Links & Media</h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Link</label>
                                <input
                                    type="url"
                                    value={data.link}
                                    onChange={(e) => setData('link', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">YouTube Video Link</label>
                                <input
                                    type="url"
                                    value={data.youtube_video_link}
                                    onChange={(e) => setData('youtube_video_link', e.target.value)}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Map Embed Code</label>
                            <textarea
                                value={data.map_embed_code}
                                onChange={(e) => setData('map_embed_code', e.target.value)}
                                rows="3"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-[#ebd2a0] focus:ring-[#ebd2a0]"
                            />
                        </div>
                    </div>

                    {/* Existing Property Images */}
                    {data.existing_property_images && data.existing_property_images.length > 0 && (
                        <div>
                            <h3 className="text-lg font-medium mb-3">Existing Property Images</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {data.existing_property_images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={`/storage/${image}`}
                                            alt={`Property ${index + 1}`}
                                            className="w-full h-32 object-cover rounded"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(index, 'property_images')}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* New Property Images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Add More Property Images
                        </label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, 'property_images')}
                            className="w-full border-gray-300 rounded-md shadow-sm"
                        />
                        {newPropertyImages.length > 0 && (
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {newPropertyImages.map((file, index) => {
                                    const preview = URL.createObjectURL(file);
                                    return (
                                        <div key={index} className="relative">
                                            <img src={preview} alt={`New ${index + 1}`} className="w-full h-32 object-cover rounded" />
                                            <button
                                                type="button"
                                                onClick={() => removeNewImage(index, 'property_images')}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Existing Construction Images */}
                    {data.existing_construction_images && data.existing_construction_images.length > 0 && (
                        <div>
                            <h3 className="text-lg font-medium mb-3">Existing Construction Images</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {data.existing_construction_images.map((image, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={`/storage/${image}`}
                                            alt={`Construction ${index + 1}`}
                                            className="w-full h-32 object-cover rounded"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeExistingImage(index, 'construction_images')}
                                            className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                        >
                                            <X size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* New Construction Images */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Add More Construction Images
                        </label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => handleImageChange(e, 'construction_images')}
                            className="w-full border-gray-300 rounded-md shadow-sm"
                        />
                        {newConstructionImages.length > 0 && (
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {newConstructionImages.map((file, index) => {
                                    const preview = URL.createObjectURL(file);
                                    return (
                                        <div key={index} className="relative">
                                            <img src={preview} alt={`New ${index + 1}`} className="w-full h-32 object-cover rounded" />
                                            <button
                                                type="button"
                                                onClick={() => removeNewImage(index, 'construction_images')}
                                                className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                            >
                                                <X size={16} />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* RERA Details */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">RERA Details</h2>
                        <textarea
                            value={data.rera_details}
                            onChange={(e) => setData('rera_details', e.target.value)}
                            rows="6"
                            className="w-full border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    {/* Visibility Settings */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold border-b pb-2">Visibility Settings</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                ['show_rera_section', 'Show RERA Section'],
                                ['show_construction_images', 'Show Construction Images'],
                                ['show_property_images', 'Show Property Images'],
                                ['show_property_videos', 'Show Property Videos'],
                                ['show_amenities', 'Show Amenities'],
                                ['is_active', 'Active'],
                            ].map(([key, label]) => (
                                <label key={key} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={data[key]}
                                        onChange={(e) => setData(key, e.target.checked)}
                                        className="mr-2"
                                    />
                                    <span className="text-sm text-gray-700">{label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Order */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Display Order</label>
                        <input
                            type="number"
                            value={data.order}
                            onChange={(e) => setData('order', parseInt(e.target.value))}
                            className="w-full border-gray-300 rounded-md shadow-sm"
                            min="0"
                        />
                    </div>

                    {/* Submit */}
                    <div className="flex gap-4 pt-4 border-t">
                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-[#ebd2a0] hover:bg-[#d1a260] text-[#2D1C11] px-6 py-2 rounded-lg font-medium disabled:opacity-50"
                        >
                            {processing ? 'Updating...' : 'Update Project'}
                        </button>
                        <Link
                            href="/admin/projects"
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </AdminLayout>
    );
}

